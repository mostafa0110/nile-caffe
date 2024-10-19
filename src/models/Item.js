// models/Item.js

import mongoose from "mongoose";

// Define the item schema
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    estimatedTime: { type: Number, required: true },
  },
  { collection: "Item" }
);

// Use a conditional check to avoid overwriting the model
const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
