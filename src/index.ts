import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import usersRoute from './routes/usersRoutes';
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/users', usersRoute);
app.use((_req: Request, res: Response): void => {
  res.status(404).send('<h1>Not found!</h1>');
});
app.listen(port, () => {
  console.log(`.....listen on port ${port}`);
});

export default app;
