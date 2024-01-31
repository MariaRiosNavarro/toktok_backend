import { testFunction } from '../../utils/verify.js';

test('testFunction should return 10', () => {
  const result = testFunction();
  expect(result).toBe(10);
});

// test('createToken should create a JWT token', () => {
//     const token = createToken({ user: 'testuser' });
//     expect(token).toBeTruthy();
//   });
