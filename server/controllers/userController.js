import createHttpError from "http-errors";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

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

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(createHttpError(400, "Please enter all credentials"));
    }

    const user = await User.findOne({ email });
    if (!user) {
      return next(createHttpError(401, "Please enter the correct credentials"));
    }

    if (password !== user.password) {
      return next(createHttpError(401, "Please enter the correct credentials"));
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      noTimestamp: true,
      expiresIn: process.env.JWT_LIFETIME,
    });

    res.cookie("watsappcookies", token, {
      expires: new Date(Date.now() + 90000000000),
      httpOnly: true,
    });

    const homeUser = {
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    };

    return res.status(200).json({
      type: "success",
      message: "Login Successful",
      token,
      homeUser,
    });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, error.message));
  }
};

export const logout = async (req, res, next) => {
  try {
    if (!req.cookies.watsappcookies) {
      next(createHttpError(400, "Cookies doesn't exists"));
    }
    res.clearCookie("watsappcookies");
    res.status(200).json({
      alertType: "success",
      message: "Logout Successful",
    });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, error.message));
  }
};

export const getAllExLoginUser = async (req, res, next) => {
  try {
    const loginUser = req.rootUser;
    const remainingUsers = await User.find({
      _id: { $ne: loginUser._id },
    }).select("name");
    res.setHeader("Cache-Control", "no-cache, no-store");
    res.status(200).json({
      alertType: "success",
      message: "Fetch all other users except Login user",
      users: remainingUsers,
    });
  } catch (error) {
    console.log(error);
    next(createHttpError(500, error.message));
  }
};
