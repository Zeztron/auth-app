import { Request, Response } from 'express';
import log from '../utils/logger';

export function createUserHandler(req: Request, res: Response) {
  try {
    // const user = await // call create user service
  } catch (e) {
    log.error(e);
    return res.status(409);
  }
}
