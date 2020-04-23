import { Router } from 'express';

const routes = Router();

routes.use('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

export default routes;
