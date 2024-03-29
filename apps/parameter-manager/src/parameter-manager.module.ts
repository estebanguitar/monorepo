import { Module } from '@nestjs/common'
import { ParameterManagerController } from './parameter-manager.controller'
import { ParameterManagerService } from './parameter-manager.service'

@Module({
  imports: [],
  controllers: [ParameterManagerController],
  providers: [ParameterManagerService],
})
export class ParameterManagerModule {}
