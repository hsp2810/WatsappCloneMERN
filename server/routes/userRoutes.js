import express from "express";
import * as userControllers from "../controllers/userController.js";
import { Authenticate } from "../middlewares/authenticate.js";
const router = express.Router();

router.route("/register").post(userControllers.register);
router.route("/login").post(userControllers.login);
router.route("/authenticate").get(Authenticate, (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store");
  return res.status(200).json({
    type: "success",
    message: "Authentication Successfull",
    user: req.rootUser,
  });
});
router.route("/logout").get(userControllers.logout);

router.route("/all").get(Authenticate, userControllers.getAllExLoginUser);
export default router;
