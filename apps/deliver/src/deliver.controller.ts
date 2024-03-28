import { Controller, Get } from '@nestjs/common';
import { DeliverService } from './deliver.service';

@Controller()
export class DeliverController {
  constructor(private readonly deliverService: DeliverService) {}

  @Get()
  getHello(): string {
    return this.deliverService.getHello();
  }
}
