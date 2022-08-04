import { Request, Response } from 'express';
import { createSession } from '../services/session.service';
import { validatePassword } from '../services/user.service';
import { signJwt } from '../utils/jwt.utils';
import config from 'config';

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate user password
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send('Invalid email or password');

  // create a session
  const session = await createSession(user._id, req.get('user-agent') || '');

  // create an access token
  const accessTokken = signJwt(
    {
      ...user,
      session: session._id,
    },
    {
      expiresIn: config.get('accessTokenTtl'), // 15m
    }
  );

  // create refresh token
  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    {
      expiresIn: config.get('refreshTokenTtl'), // 1y
    }
  );

  // return access and refresh tokens

  return res.send({ accessTokken, refreshToken });
}
