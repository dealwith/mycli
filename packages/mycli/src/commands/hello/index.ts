import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Whom is saying hello', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {argv, flags, args} = await this.parse(Hello)

    console.log(argv)

    this.log(`hello egghead ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
