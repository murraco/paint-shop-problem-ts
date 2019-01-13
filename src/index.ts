import * as fs from 'fs'

import { parse } from './components/parser'
import { solve } from './components/solver'

for (let i = 0; i < 5; i++) {
  const path = `${__dirname}/../examples/example${i}.txt`
  try {
    const content = fs.readFileSync(path, 'utf8')

    console.log(solve(parse(content)))
  } catch (error) {
    console.log(error.message)
  }
}
