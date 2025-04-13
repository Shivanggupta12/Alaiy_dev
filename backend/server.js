import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js"

const app = express();

// Use cors middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on http://localhost:" + PORT);
});