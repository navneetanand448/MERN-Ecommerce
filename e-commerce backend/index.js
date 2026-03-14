import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
const app = express();
connectDB();
app.use(express.json());

app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});