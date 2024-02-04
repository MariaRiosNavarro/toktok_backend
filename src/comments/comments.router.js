import express from 'express';
import { createComment, deleteComment, getComment, getComments, updateComment } from './comments.controller.js';

export const router = new express.Router();

// UPDATE
router.put("/editcomment/:id", updateComment)
// DELETE 
router.delete("/:id", deleteComment)
// GET ONE
router.get("/:id", getComment)
// GET ALL
router.get("/", getComments)