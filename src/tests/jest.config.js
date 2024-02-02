import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = new MongoMemoryServer();

module.exports = {
  preset: 'jest',
  setupFiles: [
    async () => {
      process.env.MONGODB_URI = await mongoServer.getConnectionString();
    },
  ],
  teardown: async () => {
    await mongoServer.stop();
  },
};