import express from "express";
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js"
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});