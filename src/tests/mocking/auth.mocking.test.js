import supertest from 'supertest';
import { app } from '../../app.js';

const request = supertest(app);
