import { jest } from '@jest/globals';
// import { app } from '../../app.js';

// jest.unstable_mockModule('../../users/users.controller.js', async () => {
//   return import('../../users/users.controller.js');
// });
// const { mockNewUser } = await import('../../users/users.controller.js');

jest.unstable_mockModule('../../app.js', async () => {
  return import('./mocks/app.mocks.js');
}); // mit fake express server

// jest.unstable_mockModule('../../app.js', async () => {
//   return import('../../app.js');
// }); // mit echtem express server

const { app } = await import('../../app.js'); // hier wird die echte funktion importiert

import supertest from 'supertest';
const request = supertest(app);

//$ Test der users GET route ✅
test('Ich erwarte ein Array wenn ich GET benutze', async () => {
  const response = await request.get('/api/users');

  console.log('der response soll gemockt werden:', response.body);

  expect(response.statusCode).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});

//$ Test der users/mockpost GET route ✅
test('Ich erwarte ein Array wenn ich GET benutze (mockpost)', async () => {
  const response = await request.get('/api/users/mockpost');

  console.log('der GET response soll gemockt werden:', response.body);

  expect(response.statusCode).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});

//$ Test der users/mockpost POST route ❌
test('Ich erwarte, dass der mockuser erstellt wird (aber nicht wirklich in der datenbank ist)', async () => {
  const prevResponse = await request.get('/api/users/mockpost');
  console.log('prevResponse.body', prevResponse.body);

  const prevArrayLength = prevResponse.body.length;
  console.log({ prevArrayLength });

  const newElement = { name: 'mockNewUser aus der test datei' };

  //   console.log(
  //     'ich hab ka mehr was ich hier eigentlich teste lol',
  //     await mockNewUser()
  //   );

  const postResponse = await request
    .post('/api/users/mockpost')
    .send(newElement);
  console.log('postResponse.body', postResponse.body);

  const newResponse = await request.get('/api/users/mockpost');
  const newArrayLength = newResponse.body.length;

  expect(postResponse.statusCode).toBe(201);
  expect(newArrayLength).toBe(prevArrayLength + 1);
  expect(newResponse.body).toContainEqual(
    expect.objectContaining({ name: 'mockNewUser aus der test datei' })
  );
}, 10000);
