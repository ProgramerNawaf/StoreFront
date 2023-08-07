import supertest from 'supertest';
import app from '../../index';
import { Users } from '../../models/users';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
import { Product } from '../../models/product';
import { response } from 'express';

dotenv.config();
const pepper: string = process.env.BCRYPT_PW as string;

const request = supertest(app);

describe('testing all the routes endpoint', () => {
  const Nawaf: Users = {
    username: 'Nawaf',
    password: '123',
    role: 'MERCHANT',
  };

  let token: string;
  let id: number;

  it('should create user Nawaf', async () => {
    const response = await request.post('/users/post').send(Nawaf).expect(200);
    token = response.body;
    console.log(token);

    id = 1;
    console.log(id);
  });

  it('show the user-Nawaf created before,His name must be Nawaf', async () => {
    const path = '/users/get/' + id;
    const response = await request
      .get(path)
      .auth(token, {
        type: 'bearer',
      })
      .expect(200);
    expect(response.body.username).toBe('Nawaf');
  });

  it('index all the users created before, response body must be larger than 0', async () => {
    const response = await request
      .get('/users/get')
      .auth(token, { type: 'bearer' })
      .expect(200);
    expect(response.body.length > 0);
  });

  const DogeCoin: Product = {
    name: 'DogeCoin',
    price: '23',
  };

  it('should create product DogeCoin, Name of the respose must be DogeCoin', async () => {
    const response = await request
      .post('/products/post/1')
      .auth(token, { type: 'bearer' })
      .send(DogeCoin)
      .expect(200);
    expect(response.body.name).toBe('DogeCoin');
  });

  it('show the DogeCoin created before to be truthy', async () => {
    const path = '/products/get/' + 1;
    const response = await request.get(path);
    expect(response.body).toBeTruthy;
  });

  it('index all the products method, response body must be larger than 0', async () => {
    const response = await request.get('/products/get').expect(200);
    expect(response.body.length > 0);
  });

  it('show falsy orders for this user since he is a merchant', async () => {
    const response = await request
      .get('/orders/get/' + 1)
      .auth(token, { type: 'bearer' });
    expect(401).toBeFalsy;
  });
});
