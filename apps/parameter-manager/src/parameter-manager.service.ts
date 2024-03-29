import { Injectable } from '@nestjs/common'
import { PARAMETERS } from './parameters'

@Injectable()
export class ParameterManagerService {
  get(name: string): string {
    const data = PARAMETERS[name] ?? {}
    return JSON.stringify(data)
  }
}
