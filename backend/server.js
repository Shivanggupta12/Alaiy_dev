import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import productRoutes from "./product.routes.js";

dotenv.config();
connectDB(); // <- Important!

const app = express();

// CORS setup
app.use(cors({
  origin: 'https://alaiy-dev-fe-429e.vercel.app',
  credentials: true
}));

// Built-in middleware
app.use(express.json());

// Test homepage
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// API routes
app.use("/api/products", productRoutes);

export default app;
