import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

export const app = express();

import { router as usersRouter } from "./users/users.router.js";
import { router as postsRouter } from "./posts/posts.router.js";
import { router as authRouter } from "./auth/auth.router.js";
import { router as commentsRouter } from "./comments/comments.router.js";

app.use(cors({ credentials: true, origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

const FRONTEND_DIR = new URL("./frontend/dist", import.meta.url).pathname;
app.use(express.static(FRONTEND_DIR));

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/auth", authRouter);
app.use("/api/comments", commentsRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    // more Details about the error
    stack: err.stack,
  });
});
