// import supertest from 'supertest';
// import { app } from '../../app.js';

// const request = supertest(app);

import { jest } from '@jest/globals';

jest.unstable_mockModule('../../moduleB.js', async () => {
  return import('./fakeModuleB.js');
});

const { moduleB } = await import('../../moduleB.js');
test('ich teste ob moduleB gemockt wird', () => {
  console.log(
    'hier rufe ich das echte moduleB auf, aber es soll das fake moduleB returnt werden:',
    moduleB()
  );
});
