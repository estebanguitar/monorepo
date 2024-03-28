import { NestFactory } from '@nestjs/core'
import { ParameterMangerModule } from './parameter-manger.module'

async function bootstrap() {
  const app = await NestFactory.create(ParameterMangerModule)
  await app.listen(3000)
  console.log('Parameter Manger App Running')
}

bootstrap()
