import express from 'express';
import { createComment, deleteComment, getComment, getComments, updateComment } from './comments.controller.js';
import { verifyUser } from '../utils/middleware/auth.middleware..js';

export const router = new express.Router();

// UPDATE
router.put("/editcomment/:id",verifyUser, updateComment)
// DELETE 
router.delete("/:id",verifyUser, deleteComment)
// CREATE COMMENT
router.post("/:id/commit",verifyUser, async (req, res, next) => {
    try {
        await createComment(req, res, next, true); 
    } catch (err) {
        next(err);
    }
});
// GET ONE
router.get("/:id",verifyUser, getComment)
// GET ALL
router.get("/",verifyUser, getComments)


// {"_id": ObjectId("65ba1e3cf62d099c7f3c043a")}