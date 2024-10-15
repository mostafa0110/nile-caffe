import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    tableNumber: { type: Number, required: true, unique: true },
    status: { type: String, enum: ["available", "occupied"], required: true },
    // Ensure this is an array
  },
  { collection: "Table" }
);

const Table = mongoose.models.Table || mongoose.model("Table", TableSchema);

export default Table;
