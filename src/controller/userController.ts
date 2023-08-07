import express, { Request, Response } from 'express';
import { Users, UsersStore } from '../models/users';
import jwt from 'jsonwebtoken';

export type UserCreation = {
  id?: Number;
  username: string;
  password: string;
  role: string;
  balance: Number;
  revenue: Number;
};

const store = new UsersStore();

const getUsers = async (_req: Request, res: Response) => {
  const users = await store.index();

  res.json(users);
};

const getUserById = async (_req: Request, res: Response) => {
  const id = _req.params.id;
  const user = await store.show(id);
  res.json(user);
};

const deleteUser = async (_req: Request, res: Response) => {
  const id = _req.params.id;
  const user = await store.delete(id);
  res.json(user);
};

const createUser = async (_req: Request, res: Response) => {
  const user: UserCreation = {
    username: _req.body.username,
    password: _req.body.password,
    role: _req.body.role,
    balance: 0,
    revenue: 0,
  };

  try {
    const newUser = await store.create(user);
    var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET!);

    res.json(token);
  } catch (err) {
    res.status(404);
    res.send(err + user);
  }
};

const addBalance = async (
  _req: Request,
  res: Response,
): Promise<Response | void> => {
  const customer_id = parseInt(_req.params.id);
  try {
    const newUser = await store.addBalance(customer_id, _req.body.balance);
    return res.status(200).send('your balance is ' + newUser + '$');
  } catch (err) {
    res.status(404);
  }
};

export { getUsers, getUserById, createUser, addBalance, deleteUser };
