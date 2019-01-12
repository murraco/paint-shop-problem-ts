import * as fs from 'fs'
import { expect } from 'chai'

import { parse } from '../../src/components/parser'

it('Should parse a valid input file', (done: Mocha.Done) => {

  const expected = {
    _nColors: 1,
    _preferences: [
      [{ _color: 1, _tone: 'G', _unique: undefined }],
      [{ _color: 1, _tone: 'M', _unique: undefined }]
    ]
  }

  const content = fs.readFileSync(`${__dirname}/../../examples/example2.txt`, 'utf8')
  const output = parse(content)

  expect(output).to.eql(expected)
  done()
})
