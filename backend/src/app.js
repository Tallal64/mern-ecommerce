import express from "express";
const app = express();

app.use(express.json()); // accept data from user/frontend
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

export default app;

// importing routes
import productRoutes from "./routes/product.route.js";

app.use("/api/products", productRoutes);
