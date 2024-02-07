import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 5000,
  max: 1,
  message:
    'Too many requests at once. This route can fetch only one dataset at a time.',
});
