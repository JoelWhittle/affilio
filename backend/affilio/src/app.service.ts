/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! hot reload 3235645 does this work yesh nginx';
  }
}
