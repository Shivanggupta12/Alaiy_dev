import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js"

dotenv.config();
const PORT =process.env.PORT
const app = express();

app.use(express.json());
app.use("/api/products",productRoutes)
app.listen(PORT, () => {
  connectDB();
  console.log("Server started on http://localhost:"+ PORT);
});