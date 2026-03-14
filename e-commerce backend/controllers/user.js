import { TryCatch } from "../middlewares/error.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
export const newUser = TryCatch(async (req, res, next) => {
  const { name, email, photo, gender, role, _id, dob } = req.body;

  const User = await User.findById(_id);
  if (User) {
    return res.status(200).json({
      success: "true",
      message: `Welcome ,${User.name}`,
    });
  }
  if (!_id || !name || !email || !photo || !gender || !dob) {
    return next(new ErrorHandler("Please add all fields", 400));
  }
  const user = await User.create({
    name,
    photo,
    dob,
    role,
    _id,
    gender,
    email,
  });

  return res.status(200).json({
    success: true,
    message: `Welcome ${user.name}`,
    user,
  });
});
export const getAllUser = TryCatch(async (req, res, next) => {
  const users = await User.find({});
  return res.status(201).json({
    success: true,
    users,
  });
});
export const getUser=TryCatch(async(req,res,next)=>{
  const id=req.params.id;
    const user = await User.findById(id);

  if (!user) return next(new ErrorHandler("Invalid Id", 400));

  return res.status(200).json({
    success: true,
    user,
  });
});
export const deleteUser=TryCatch(async(req,res,next)=>{
  const id=req.params.id;
    const user = await User.findById(id);

  if (!user) return next(new ErrorHandler("Invalid Id", 400));
  await user.deleteOne();
  return res.status(201).json({
    success: true,
    message:`user deleted successfully`,
  });
});
