"use client";

import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../lib/firebase"; // Firebase client initialization

const auth = getAuth(firebaseApp);

const Order = () => {
  const [initialItems, setInitialItems] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedTable, setSelectedTable] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch items from the API
        const itemsResponse = await fetch("/api/items", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!itemsResponse.ok) {
          throw new Error("Failed to fetch items");
        }
        const itemsData = await itemsResponse.json();
        setInitialItems(itemsData);

        // Fetch tables from the API
        const tablesResponse = await fetch("/api/tables", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!tablesResponse.ok) {
          throw new Error("Failed to fetch tables");
        }
        const tablesData = await tablesResponse.json();
        setAvailableTables(tablesData.tables || []);

        // Set default selected item and table if items are available
        if (itemsData.length > 0) {
          setSelectedItem(itemsData[0]._id);
        }
        if (tablesData.tables && tablesData.tables.length > 0) {
          setSelectedTable(tablesData.tables[0].tableNumber);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const checkAuthStatus = () => {
      // Check if the user is authenticated
      const user = auth.currentUser;
      setIsLoggedIn(!!user); // Set login status based on user presence
    };

    fetchData();
    checkAuthStatus(); // Check authentication status on component mount
  }, []); // Run once on component mount

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const addItemToCart = () => {
    if (!isLoggedIn) {
      alert("Please log in to add items to your cart."); // Alert for login requirement
      return; // Exit the function if not logged in
    }

    if (selectedItem && quantity > 0) {
      const item = initialItems.find((item) => item._id === selectedItem);
      const existingItem = cart.find((cartItem) => cartItem.id === item._id);

      if (existingItem) {
        // Update quantity if item already exists
        setCart(
          cart.map((cartItem) =>
            cartItem.id === existingItem.id
              ? { ...cartItem, quantity: cartItem.quantity + Number(quantity) }
              : cartItem
          )
        );
      } else {
        // Add new item to cart
        setCart([
          ...cart,
          { ...item, quantity: Number(quantity), id: item._id },
        ]);
      }

      setQuantity(1); // Reset quantity
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const confirmOrder = () => {
    const totalEstimatedTime = cart.reduce((total, cartItem) => {
      const item = initialItems.find((item) => item._id === cartItem.id);
      return total + (item?.estimatedTime || 0) * cartItem.quantity;
    }, 0);

    setTimeLeft(totalEstimatedTime * 60);
    setSuccessMessage("Order confirmed! Your food will be ready in:");
  };

  const cancelOrder = () => {
    setCart([]);
    setTimeLeft(0);
    setSuccessMessage("");
  };

  const formatTimeLeft = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  };

  return (
    <div className="h-full w-full bg-zinc-900 text-success pt-8 pb-40 ">
      <div className="text-center mb-8 pt-40">
        <p className="text-2xl text-green-500 mb-4">Order</p>
        <div className="h-0.5 w-10 bg-green-500 mx-auto"></div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-6">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-zinc-800 p-6 rounded-lg">
          <form className="flex flex-col items-center justify-start w-full">
            <div className="inline-block w-full max-w-xs mb-4">
              <label htmlFor="Item">Item Name</label>
              <select
                className="select select-success text-black w-full"
                id="Item"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
              >
                {initialItems.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name} - {item.price} EGP
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full max-w-xs mb-4">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                placeholder="Number of items"
                className="input input-bordered rounded-md input-success w-full"
                id="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
            </div>

            <div className="w-full max-w-xs mb-4">
              <label htmlFor="Table">Deliver to Table</label>
              <select
                className="select select-success text-black w-full"
                id="Table"
                value={selectedTable}
                onChange={(e) => setSelectedTable(Number(e.target.value))}
              >
                {availableTables.map((table) => (
                  <option key={table.tableNumber} value={table.tableNumber}>
                    Table {table.tableNumber}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full max-w-xs mb-4">
              <button
                type="button"
                className="btn btn-outline btn-success w-full"
                onClick={addItemToCart}
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>

        {/* Cart Section */}
        <div className="w-full md:w-1/2 bg-zinc-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
          {cart.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 mr-4"
                    />
                    <span>
                      {item.name} (x{item.quantity}) -{" "}
                      {item.price * item.quantity} EGP
                    </span>
                  </div>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 0 && (
            <div className="flex flex-col items-center gap-4 mt-4">
              <button className="btn btn-success w-full" onClick={confirmOrder}>
                Confirm Order
              </button>
              <button className="btn btn-error w-full" onClick={cancelOrder}>
                Cancel Order
              </button>
            </div>
          )}

          {successMessage && (
            <div className="mt-4 text-lg">
              {successMessage}{" "}
              {timeLeft > 0 ? formatTimeLeft(timeLeft) : "Your order is ready!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
