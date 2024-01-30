import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../users/users.controller.js';

export const router = new express.Router();

router.get('/', getUser);

// * TESTROUTES FOR VERIFICATION
// router.get("/checkauthentication", verifyToken,(req,res,next)=>{
//     res.send("Hello User, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
//     res.send("Hello User, you are logged in and can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin, you are logged in and can do what you want")
// })
