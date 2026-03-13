import {User} from "../models/user.js";

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

    return res.status(200).json({
      success: true,
      message: `Welcome ${user.name}`,
      user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};