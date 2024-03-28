import { Controller, Get } from '@nestjs/common';
import { ParameterMangerService } from './parameter-manger.service';

@Controller()
export class ParameterMangerController {
  constructor(private readonly parameterMangerService: ParameterMangerService) {}

  @Get()
  getHello(): string {
    return this.parameterMangerService.getHello();
  }
}
