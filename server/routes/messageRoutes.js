import express from "express";
import * as messageControllers from "../controllers/messageController.js";
const router = express.Router();

router.route("/insert").post(messageControllers.insertMessage);
router.route("/:id").get(messageControllers.getMessageById);

export default router;
