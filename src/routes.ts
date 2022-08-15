import {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
} from './schema/product.schema';
import { createUserSchema } from './schema/user.schema';
import { Express, Request, Response } from 'express';
import { createUserHandler } from './controllers/user.controller';
import validateResource from './middleware/validateResource';
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from './controllers/session.controller';
import { createSessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';
import {
  createProductHandler,
  deleteProductHandler,
  getProductHandler,
  updateProductHandler,
} from './controllers/product.controller';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users', validateResource(createUserSchema), createUserHandler);

  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get('/api/sessions', requireUser, getUserSessionsHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );

  app.put(
    '/api/products/:productId',
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  app.get(
    '/api/products/:productId',
    [requireUser, validateResource(getProductSchema)],
    getProductHandler
  );

  app.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );
}

export default routes;
