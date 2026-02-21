import type { BinaryConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaultConfig: BinaryConfig = {
  from: 'localhost:5173',
  verbose: true,
}

let _config: BinaryConfig | null = null

export async function getConfig(): Promise<BinaryConfig> {
  if (!_config) {
    _config = await loadConfig({
      name: 'binary',
      defaultConfig,
    })
  }
  return _config
}

export const config: BinaryConfig = defaultConfig
