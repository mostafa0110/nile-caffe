import connectDB from "../../../lib/mongoose.js"; // Ensure this path is correct
import Table from "@/models/Table.js";
export const GET = async (req) => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log("Database connected successfully"); // Debug log

    const tables = await Table.find().lean(); // Fetch all tables

    console.log("Fetched tables:", tables); // Log fetched tables to verify

    if (tables.length === 0) {
      return new Response(JSON.stringify({ message: "No tables found." }), {
        status: 404, // Not Found
        headers: { "Content-Type": "application/json" },
      });
    }

    // Map the tables to structure the response
    const mappedTables = tables.map((table) => ({
      _id: table._id.toString(),
      tableNumber: table.tableNumber,
      status: table.status,
    }));

    return new Response(JSON.stringify({ tables: mappedTables }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch tables:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tables" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
