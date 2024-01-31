import jwt from 'jsonwebtoken';
import { randomBytes } from 'node:crypto';

export function createToken(payload, expiresIn) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn });
}

export function createNumericalCode(digits) {
  const bytes = randomBytes(Math.ceil(digits / 2));
  const code = parseInt(bytes.toString('hex'), 16).toString().slice(0, digits);
  console.log({ code });
  return code;
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
