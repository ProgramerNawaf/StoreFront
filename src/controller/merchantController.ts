import express, { Request, Response } from 'express';
import { Merchant, MerchantStore } from '../models/merchant';

const merchantStore = new MerchantStore();
const getMerchants = async (_req: Request, res: Response) => {
  const merchant = await merchantStore.index();

  res.json(merchant);
};
const getMerchantsById = async (_req: Request, res: Response) => {
  const merchant = await merchantStore.show(_req.params.id);

  res.json(merchant);
};

export { getMerchants, getMerchantsById };
