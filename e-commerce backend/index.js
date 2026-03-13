import express from "express";
import userRoute from "./routes/user.js";

const app = express();

app.use(express.json());

app.use("/api/user", userRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});