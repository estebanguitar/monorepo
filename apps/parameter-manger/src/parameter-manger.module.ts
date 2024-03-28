import { Module } from '@nestjs/common';
import { ParameterMangerController } from './parameter-manger.controller';
import { ParameterMangerService } from './parameter-manger.service';

@Module({
  imports: [],
  controllers: [ParameterMangerController],
  providers: [ParameterMangerService],
})
export class ParameterMangerModule {}
