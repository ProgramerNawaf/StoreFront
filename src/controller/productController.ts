import { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import jwt from 'jsonwebtoken';

const store = new ProductStore();
const getProduct = async (
  _req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const products = await store.index();
    res.json({ products });
  } catch (err) {
    console.log(err.message);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await store.show(req.params.id);
    res.json(product);
  } catch (err) {
    throw new Error(err.message);
  }
};

const postProduct = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const product: Product = {
    name: req.body.name,
    price: req.body.price,
  };

  //check if merchant exists

  try {
    console.log('gg1');
    const newProduct = await store.create(product, req.params.merchant_id);
    console.log('gg4');
    res.json(newProduct);
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const deleted = await store.delete(req.body.id);
    res.json(deleted);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  const produc: Product = {
    name: req.body.name,
    price: req.body.price,
    id: req.body.id,
  };
  try {
    const products = await store.upadte(req.body.id);

    return res.status(200).send('update');
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

export {
  getProduct,
  updateProduct,
  deleteProduct,
  postProduct,
  getProductById,
};
