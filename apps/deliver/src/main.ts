import { NestFactory } from '@nestjs/core'
import { DeliverModule } from './deliver.module'

async function bootstrap() {
  const app = await NestFactory.create(DeliverModule)
  await app.listen(3000)
  console.log('Deliver App Running')
}

bootstrap()
