// pages/api/items.js

import connectDB from "../../../lib/mongoose.js"; // Ensure this path is correct
import Item from "../../../models/Item.js"; // Ensure this path is correct

export async function GET(req) {
  try {
    await connectDB(); // Connect to your database

    // Fetch items from the database and convert them to plain JavaScript objects
    const items = await Item.find().lean();

    console.log("Fetched Items:", items); // Log the fetched items to check what's being retrieved

    // Map through items to convert ObjectId to string if necessary
    const formattedItems = items.map((item) => ({
      _id: item._id.toString(), // Convert ObjectId to string
      name: item.name,
      image: item.image,
      price: item.price,
      estimatedTime: item.estimatedTime,
    }));

    if (formattedItems.length === 0) {
      return new Response(JSON.stringify({ message: "No items found." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(formattedItems), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
