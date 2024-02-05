import express from 'express';
import { createComment, deleteComment, getComment, getComments, updateComment } from './comments.controller.js';

export const router = new express.Router();

// UPDATE
router.put("/editcomment/:id", updateComment)
// DELETE 
router.delete("/:id", deleteComment)
// CREATE COMMENT
router.post("/:id/commit", async (req, res, next) => {
    try {
        await createComment(req, res, next, true); 
    } catch (err) {
        next(err);
    }
});
// GET ONE
router.get("/:id", getComment)
// GET ALL
router.get("/", getComments)


// {"_id": ObjectId("65ba1e3cf62d099c7f3c043a")}