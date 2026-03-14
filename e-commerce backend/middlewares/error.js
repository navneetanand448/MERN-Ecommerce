import ErrorHandler from "../utils/utility-class"
export const errorMiddleware=(err=ErrorHandler,req,res,next)=>{
  return res.status(400).json({
    err.message ||="Internal server Error";
    err.statusCode ||=500;
    success:"true",
    message:"some error",
  })
}
export const TryCatch = (func) => (req, res, next) => {
  return Promise.resolve(func(req, res, next)).catch(next);
};