import { expect } from 'chai'

import Preference from '../../src/models/preference'
import Request from '../../src/models/request'

import { solve } from '../../src/components/solver'

it('If it can find a valid solution it should return it straight away', (done: Mocha.Done) => {

  const expected = 'G G M'

  const preferences = [
    [new Preference(1, Preference.GLOSS), new Preference(2, Preference.GLOSS)],
    [new Preference(3, Preference.MATTE)]
  ]

  const solution = solve(new Request(3, preferences))

  expect(solution).to.eql(expected)
  done()
})

it('If it cannot find a valid solution it should return "No solutions exists"', (done: Mocha.Done) => {

  const expected = 'No solution exists'

  const preferences = [
    [new Preference(3, Preference.GLOSS)],
    [new Preference(3, Preference.MATTE)]
  ]

  const solution = solve(new Request(3, preferences))

  expect(solution).to.eql(expected)
  done()
})
