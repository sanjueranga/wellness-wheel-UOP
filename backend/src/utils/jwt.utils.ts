// jwt.util.ts

import * as jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET;

export const generateJwtToken = (payload: Record<string, any>): string => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const getUserIdFromToken = (token: string): number => {
  const decoded: any = jwt.verify(token, secretKey);
  return decoded.sub;
};
