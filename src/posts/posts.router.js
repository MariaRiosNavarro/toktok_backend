import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from './posts.controller.js';
import { upload } from '../config/storage.config.js';


export const router = new express.Router();

// CREATE
router.post("/upload", upload.single("img"), createPost)
// UPDATE
router.put("/editpost/:id",upload.single("img"), updatePost)
// DELETE 
router.delete("/:id",deletePost)
// GET ONE
router.get("/:id" ,getPost)
// GET ALL
router.get("/",getPosts)