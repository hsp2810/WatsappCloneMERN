import express from "express";
const app = express();
import createHttpError, { HttpError } from "http-errors";
import "dotenv/config";
import cors from "cors";
import { connectToDatabase } from "./database/connnectdb.js";
import cookieParser from "cookie-parser";

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
import messageRouter from "./routes/messageRoutes.js";
import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoutes.js";

app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);
app.use("/api/chats", chatRouter);

app.get("/test", (req, res) => {
  res.send("App started");
});

app.use((req, res, next) => {
  next(createHttpError(404, "Route don't exist"));
});

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ type: "error", message: err.message });
  } else {
    res.status(500).json({ type: "error", message: "Internal Server Error" });
  }
  next();
});

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server started at PORT ${PORT}`);
  await connectToDatabase(process.env.MONGO_URI);
});
