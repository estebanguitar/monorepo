import { NestFactory } from '@nestjs/core'
import { ParameterManagerModule } from './parameter-manager.module'

async function bootstrap() {
  const app = await NestFactory.create(ParameterManagerModule)
  await app.listen(4000)
  console.log('Parameter Manger App Running')
}

bootstrap()
