import express, { Request, Response } from 'express';
import { Users, UsersStore } from '../models/users';
import jwt from 'jsonwebtoken';
import { CustomerStore, Customer } from '../models/customer';

const store = new UsersStore();
const customerStore = new CustomerStore();

const getUsers = async (_req: Request, res: Response) => {
  const users = await store.index();

  res.json(users);
};
const getCustomrs = async (_req: Request, res: Response) => {
  const customer = await customerStore.index();

  res.json(customer);
};
const getUserById = async (_req: Request, res: Response) => {
  const id = _req.params.id;
  const user = await store.show(id);
  res.json(user);
};

const createUser = async (_req: Request, res: Response) => {
  const user: any = {
    username: _req.body.username,
    password: _req.body.password,
    role: _req.body.role,
  };

  if (user.role == 'CUSTOMER') user.balance = 0;
  else user.revenue = 0;
  console.log(user);
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

export { getUsers, getUserById, createUser, addBalance, getCustomrs };
