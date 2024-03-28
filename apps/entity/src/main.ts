import { NestFactory } from '@nestjs/core'
import { EntityModule } from './entity.module'

async function bootstrap() {
  const app = await NestFactory.create(EntityModule)
  await app.listen(3000)
}
bootstrap()
