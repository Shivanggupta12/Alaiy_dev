import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import productRoutes from "./product.routes.js"

const app = express();

// Use cors middleware
app.use(cors({
  origin: 'https://alaiy-dev-fe-429e.vercel.app',
  credentials: true
}));
// server.js or app.js
app.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on http://localhost:" + PORT);
});