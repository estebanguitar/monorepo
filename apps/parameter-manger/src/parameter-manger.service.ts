import { Injectable } from '@nestjs/common';

@Injectable()
export class ParameterMangerService {
  getHello(): string {
    return 'Hello World!';
  }
}
