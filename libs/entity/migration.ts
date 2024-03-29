import * as path from 'path'
import { DataSource } from 'typeorm'

export const datasource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 33306,
  username: 'root',
  password: 'password',
  database: 'order',
  synchronize: false,
  logging: true,
  entities: [path.resolve(__dirname, 'src/**/*.ts')],
  migrations: [path.resolve(__dirname, 'migrations/*.ts')],
})
