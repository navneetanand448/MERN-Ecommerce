import { TryCatch } from "./error.js";
import ErrorHandler from "../utils/utility-class.js";
import { User } from "../models/user.js";

export const adminOnly = TryCatch(async (req, res, next) => {

  const { id } = req.query;

  if (!id)
    return next(new ErrorHandler("Please Login to Continue", 401));

  const user = await User.findById(id);

  if (!user)
    return next(new ErrorHandler("Fake Id", 401));

  if (user.role !== "admin")
    return next(new ErrorHandler("Not Admin", 401));

  next();

});