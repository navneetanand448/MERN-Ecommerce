import express from 'express';
const app=express();
const port=8000;
import userRoute from "./routes/user";
app.use("/api/v1/user",userRoute);
app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})
