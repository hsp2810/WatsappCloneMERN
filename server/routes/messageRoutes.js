import express from "express";
import * as messageControllers from "../controllers/messageController.js";
const router = express.Router();

router.route("/insert").post(messageControllers.insertMessage);

export default router;
