import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.watsappcookies;
    if (!token) {
      next(createHttpError(401, "Token not found"));
    }

    const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(_id).select("-password").exec();

    req.rootUser = user;
    next();
  } catch (error) {
    next(createHttpError(500, error.message));
  }
};
