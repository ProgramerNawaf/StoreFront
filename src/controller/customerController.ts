import express, { Request, Response } from 'express';
import { Customer, CustomerStore } from '../models/customer';
const customerStore = new CustomerStore();

const getCustomrs = async (_req: Request, res: Response) => {
  const customer = await customerStore.index();

  res.json(customer);
};
const getCustomrById = async (_req: Request, res: Response) => {
  const customer = await customerStore.show(_req.params.id);

  res.json(customer);
};
export { getCustomrs, getCustomrById };
