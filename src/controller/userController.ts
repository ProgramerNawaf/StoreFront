import express, { Request, Response } from 'express';
import { Users, UsersStore } from '../models/users';
import jwt from 'jsonwebtoken';
// import verifyAuthToken from '../middleware/verifyAuth';

const store = new UsersStore();

const getUsers = async (_req: Request, res: Response) => {
  const users = await store.index()

  res.json(users);
}

const getUserById = async (_req: Request, res: Response) => {
  const id = _req.params.id;
  const user = await store.show(id);
  res.json(user);
}

const createUser = async (_req: Request, res: Response) => {
  const user: Users = {
    username: _req.body.username,
    password: _req.body.password
  }

  try{
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser}, process.env.TOKEN_SECRET!);

    res.json(token);
  }catch(err){
    res.status(404);
    res.send(err+ user);
  }
}



export {
    getUsers,
    getUserById,
    createUser
  };