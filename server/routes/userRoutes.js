import express from "express";
import * as userControllers from "../controllers/userController.js";
const router = express.Router();

router.route("/register").post(userControllers.register);

export default router;
