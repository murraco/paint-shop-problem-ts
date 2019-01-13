import * as fs from 'fs'

import { parse } from '../src/components/parser'
import { solve } from '../src/components/solver'

import { expect } from 'chai'

it('Should solve all the examples succesfully', (done: Mocha.Done) => {
  for (let i = 0; i < 5; i++) {
    try {
      const input = fs.readFileSync(`${__dirname}/../examples/example${i}.txt`, 'utf8')
      const output = fs.readFileSync(`${__dirname}/../examples/solution${i}.txt`, 'utf8')

      const solution = solve(parse(input))

      expect(solution).to.eql(output)
    } catch (error) {
      console.log(error.message)
    }
  }
  done()
})
