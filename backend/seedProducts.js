import "dotenv/config";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const products = [
  {
    name: "Wireless Headphones",
    description: "Comfortable wireless headphones with clear sound and deep bass.",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    stock: 25
  },
  {
    name: "Smart Watch",
    description: "A stylish smartwatch for everyday use and fitness tracking.",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    stock: 20
  },
  {
    name: "Casual Sneakers",
    description: "Everyday sneakers designed for comfort and style.",
    price: 1799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    stock: 15
  },
  {
    name: "Travel Backpack",
    description: "A practical backpack for travel, college, and daily use.",
    price: 1299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    stock: 18
  },
  {
    name: "Classic Sunglasses",
    description: "Classic sunglasses for everyday outdoor wear.",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
    stock: 30
  },
  {
    name: "Desk Lamp",
    description: "A modern desk lamp for your study table or workspace.",
    price: 999,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    stock: 12
  }
];

async function seedProducts() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from backend/.env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    for (const product of products) {
      await Product.updateOne(
        { name: product.name },
        { $set: product },
        { upsert: true, runValidators: true }
      );
    }

    console.log("Sample products added or updated successfully.");
    console.log(`Processed ${products.length} products.`);
  } catch (error) {
    console.error("Could not seed products:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();