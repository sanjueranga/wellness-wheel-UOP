import { Injectable } from '@nestjs/common';
const { testEnv } = require('../utils/googleStrategy');

@Injectable()
export class AppService {
  getHello(): string {
    testEnv();
    return 'Hello World!';
  }
}
