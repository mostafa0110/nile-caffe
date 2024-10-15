import React from "react";
import ItemCard from "../ItemCard/ItemCard";
const HomeItem = () => {
  const items = [
    {
      imageUrl:
        "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
      name: "Chocolate Mousse",
      description: "A rich chocolate mousse topped with whipped cream.",
      price: "50",
    },
    {
      imageUrl:
        "https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg",
      name: "Cheesecake",
      description: "Classic cheesecake with a graham cracker crust.",
      price: "70",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyYOkdhPnpnYvLOKiyYu1d0tK4kExFqYedg&s",
      name: "Tiramisu",
      description: "Layered coffee-flavored Italian dessert.",
      price: "80",
    },
    {
      imageUrl:
        "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
      name: "Chocolate Mousse",
      description: "A rich chocolate mousse topped with whipped cream.",
      price: "50",
    },
    {
      imageUrl:
        "https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg",
      name: "Cheesecake",
      description: "Classic cheesecake with a graham cracker crust.",
      price: "70",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyYOkdhPnpnYvLOKiyYu1d0tK4kExFqYedg&s",
      name: "Tiramisu",
      description: "Layered coffee-flavored Italian dessert.",
      price: "80",
    },
  ];
  return (
    <div>
      <div className=" mx-auto  px-4 py-8 bg-zinc-900">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Deserts
        </h1>
        <hr className="border-green-500 border-2 mb-8  w-28 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
