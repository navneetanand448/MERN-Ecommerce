import { User } from "../models/user";
export const newUser=async(req,res,next)=>{
  try{
    const {name,email,photo,gender,role,_id,dob}=req.body;
    const user=await.User.create({
      name,
      photo,
      dob,
      role,
      _id,
      gender,
      email,
    });
    return res.status(200).json({
      success:"true",
      message:`welcome,${User.name}`
    })
  }
  catch(error){}
}