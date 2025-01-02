import { CAC } from 'cac'
import { version } from '../package.json'
import { config } from '../src/config'

const cli = new CAC('my-cli')

interface ReverseProxyOption {
  from: string
  verbose: boolean
}

cli
  .command('start', 'Start the Reverse Proxy Server')
  .option('--from <from>', 'The URL to proxy from')
  .option('--verbose', 'Enable verbose logging')
  .example('reverse-proxy start --from localhost:5173 --to my-project.localhost')
  .action(async (options?: ReverseProxyOption) => {
    if (!options?.from || !options.to) {
      return startProxies(config)
    }
  })

cli.command('version', 'Show the version of the CLI').action(() => {
  console.log(version)
})

cli.version(version)
cli.help()
cli.parse()
