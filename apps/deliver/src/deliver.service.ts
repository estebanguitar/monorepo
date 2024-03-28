import { Injectable } from '@nestjs/common'

@Injectable()
export class DeliverService {
  getHello(): string {
    return 'Hello World!'
  }
}
