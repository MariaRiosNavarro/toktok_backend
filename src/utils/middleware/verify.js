import jwt from 'jsonwebtoken';
import { createError } from './error.js';
import { createNumericalCode, verifyToken } from '../../auth/auth.service.js';

// dieser Bereich wird noch komplett überarbeitet
//

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.toktok;
//   console.log('verifyToken:', { token });
//   if (!token) {
//     return next(createError(401, 'You are not Authenticated'));
//   }
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return next(createError(403, 'Token is not valid!'));
//     req.user = user;
//     next();
//   });
// };

// export const verifyUser = (req, res, next) => {
//   verifyToken(req, res, next, () => {
//     if (req.user.id === req.params.id || req.user.role === 'admin') {
//       next();
//     } else {
//       return next(createError(403, 'You are not authorized!'));
//     }
//   });
// };

// export const verifyAdmin = (req, res, next)=>{
//     verifyToken(req,res,next, ()=> {
//         if(req.user.isAdmin){
//             next()
//         } else {
//             return next(createError(403, "You are not authorized!"));
//         }
//     })
// }

export const verifyEmail = (req, res, next) => {
  try {
    req.payload = verifyToken(req.cookies.toktok_verifyemail);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).end();
  }
};
