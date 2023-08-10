import express from "express";
import * as chatControllers from "../controllers/chatController.js";
const router = express.Router();

router.route("/insert").post(chatControllers.insertChat);

export default router;
