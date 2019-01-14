#!/usr/bin/env node

import * as fs from 'fs'
import * as program from 'commander'

import { parse } from './components/parser'
import { solve } from './components/solver'

const { version } = require('../package.json')

program
  .version(version)
  .usage('< <file ...>')

program.parse(process.argv)

try {
  const input = fs.readFileSync('/dev/stdin', 'utf8')

  process.stdout.write(solve(parse(input)))
} catch (err) {
  process.stderr.write(err)
  process.exit(1)
}