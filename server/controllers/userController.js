import createHttpError from "http-errors";
import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const { username, name, email, password } = req.body;

    if (!username || !email || !name || !password) {
      return next(createHttpError(400, "Please enter all credentials"));
    }

    const checkEmail = await User.findOne({ email });
    const checkUsername = await User.findOne({ username });

    if (checkEmail) {
      return next(createHttpError(401, "Email is already registered"));
    }

    if (checkUsername) {
      return next(createHttpError(402, "Username is already taken"));
    }

    const user = await User.create({ username, name, email, password });
    await user.save();

    return res
      .status(200)
      .json({ type: "success", message: "User Registered" });
  } catch (error) {
    next(createHttpError(500, "Error in inserting the message"));
  }
};
