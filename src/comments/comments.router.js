import express from 'express';
import { createComment, deleteComment, getComment, getComments, updateComment } from './comments.controller';

export const router = new express.Router();

// CREATE
router.post("/writecomment", createComment)
// UPDATE
router.put("/editcomment/:id", updateComment)
// DELETE 
router.delete("/:id", deleteComment)
// GET ONE
router.get("/:id", getComment)
// GET ALL
router.get("/", getComments)