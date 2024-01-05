import * as jwt from 'jsonwebtoken';

export const generateJwtToken = (payload: Record<string, any>): string => {
  const secretKey = process.env.SECRET;
  return jwt.sign(payload, secretKey, { expiresIn: '7d' });
};

export const getUserIdFromToken = (token: string): number => {
  const secretKey = process.env.SECRET;
  const decoded: any = jwt.verify(token, secretKey);
  return decoded.sub;
};
