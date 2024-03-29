import { Controller, Get, Param, Req } from '@nestjs/common'
import { ParameterManagerService } from './parameter-manager.service'

@Controller()
export class ParameterManagerController {
  constructor(
    private readonly parameterMangerService: ParameterManagerService,
  ) {}

  @Get(':name')
  get(@Param('name') name: string, @Req() req: Request): string {
    console.log(req)
    return this.parameterMangerService.get(name)
  }
}
