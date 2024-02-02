import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../../app.js'; // Pfad zur Ihrer App-Datei
import { Post } from '../../posts/posts.model.js'; // Pfad zur Ihrem Modell

let mongoServer;

beforeAll(async () => {
 mongoServer = new MongoMemoryServer();
 const mongoUri = await mongoServer.getUri();
 await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
 await mongoose.disconnect();
 await mongoServer.stop();
});

describe('POST /posts', () => {
    it('should create a new post', async () => {
       const postData = { Post };
       const response = await supertest(app)
         .post('/posts')
         .send(postData);
       expect(response.status).toBe(201);
       expect(response.body.message).toEqual('Post successfully created!');
    });
   });