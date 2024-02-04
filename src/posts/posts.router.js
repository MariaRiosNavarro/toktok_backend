import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from './posts.controller.js';
import { upload } from '../config/storage.config.js';
import { createComment } from '../comments/comments.controller.js';


export const router = new express.Router();

// CREATE
router.post("/upload", upload.single("img"), createPost)
// UPDATE
router.put("/editpost/:id",upload.single("img"), updatePost)
// DELETE 
router.delete("/:id",deletePost)
// GET ONE
router.get("/:id" ,getPost)
// CREATE COMMENT
router.post("/:id/commit", async (req, res, next) => {
    try {
        await createComment(req, res, next, false); // Der dritte Parameter ist false für einen Beitrag
    } catch (err) {
        next(err);
    }
});

// GET ALL
router.get("/",getPosts)