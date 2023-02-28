import {Command} from '@oclif/core'
import * as fs from 'node:fs'
import * as child from 'node:child_process'
import * as YAML from 'yaml'
import {RutheniumFileInterface} from '../../interfaces/ruthenium'

export default class Bootstrap extends Command {
  static description = 'Initializes the workspace packages'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const file = fs.readFileSync('./ruthenium.yaml', 'utf8')
    const config = YAML.parse(file) as RutheniumFileInterface
    this.log(`Preparing ${config.name} ${config.version ?? ''}...\n`)
    config.packages.map(item => {
      try {
        this.log(`Cloning ${item.package}...`)
        child.execSync(`git clone ${item.repository} packages/${item.package}`).toString()

        const afterScript = item?.after ?? ''
        if (afterScript !== '') {
          this.log('Running after clonned script')
          this.log(afterScript)
          child.execSync(`cd packages/${item.package} && ` + afterScript)
        }
      } catch {}

      this.log('')

      return item
    })

    if (config.environment === true) {
      fs.cpSync('environment', 'packages', {force: false, recursive: true})
      this.log('Environment copied...\n')
    }

    this.log('Bootstrapped successfully...')
  }
}
