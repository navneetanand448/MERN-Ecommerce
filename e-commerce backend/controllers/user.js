import {User} from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "../middlewares/error.js";
export const newUser = async (req, res, next) => {
  try {
    const { name, email, photo, gender, role, _id, dob } = req.body;

    const user = await User.create({
      name,
      photo,
      dob,
      role,
      _id,
      gender,
      email,
    });
    const user=await User.findById(_id);
    if(user){
      return res.status(200).json({
        success:"true",
        message: `Welcome ,${user.name}`
      })
    }
    if (!_id || !name || !email || !photo || !gender || !dob) {
    return next(new ErrorHandler("Please add all fields", 400));
  }

    return res.status(200).json({
      success: true,
      message: `Welcome ${user.name}`,
      user,
    });

  } catch (error) {
    return next(error);
  }
};