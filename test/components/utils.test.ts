import { expect } from 'chai'

import Preference from '../../src/models/preference'

import { preparePreferences, generateCandidates, validateCandidate } from '../../src/components/utils'


it('Should prepare customer preferences by sorting them and adding unique flags', (done: Mocha.Done) => {

  const expected = [
    [new Preference(1, Preference.GLOSS), new Preference(1, Preference.MATTE), new Preference(2, Preference.MATTE)],
    [new Preference(2, Preference.GLOSS, true)]
  ]

  const preferences = [
    [new Preference(2, Preference.MATTE), new Preference(1, Preference.MATTE), new Preference(1, Preference.GLOSS, false)],
    [new Preference(2, Preference.GLOSS)]
  ]

  const preparedPreferences = preparePreferences(preferences)

  expect(preparedPreferences).to.eql(expected)
  done()
})

it('Should generate an iterable set of candidate solutions out from a given set of preferences', (done: Mocha.Done) => {

  const expected = [
    [{
      _color: 1,
      _tone: Preference.GLOSS,
      _unique: undefined
    },
    {
      _color: 1,
      _tone: Preference.MATTE,
      _unique: undefined
    }]
  ]

  const preferences = [
    [new Preference(1, Preference.GLOSS)],
    [new Preference(1, Preference.MATTE)]
  ]

  const candidates = []

  for (const candidate of generateCandidates(preferences)) {
    candidates.push(candidate)
  }

  expect(candidates).to.eql(expected)
  done()
})

it('Should validate a valid candidate solution', (done: Mocha.Done) => {

  const expected = 'G G M G'

  const candidate = [
    new Preference(1, Preference.GLOSS),
    new Preference(1, Preference.GLOSS),
    new Preference(2, Preference.GLOSS),
    new Preference(3, Preference.MATTE)
  ]

  const preferences = [
    [new Preference(1, Preference.GLOSS), new Preference(2, Preference.GLOSS)],
    [new Preference(1, Preference.GLOSS), new Preference(2, Preference.GLOSS)],
    [new Preference(2, Preference.GLOSS), new Preference(3, Preference.GLOSS)],
    [new Preference(3, Preference.MATTE), new Preference(4, Preference.MATTE)]
  ]

  const solution = validateCandidate(4, candidate, preferences)

  expect(solution).to.eql(expected)
  done()
})

it('Should properly spot an invalid candidate solution', (done: Mocha.Done) => {

  const candidate = [
    new Preference(1, Preference.GLOSS),
    new Preference(1, Preference.GLOSS, true),
    new Preference(2, Preference.GLOSS),
    new Preference(3, Preference.MATTE)
  ]

  const preferences = [
    [new Preference(1, Preference.GLOSS), new Preference(2, Preference.GLOSS)],
    [new Preference(1, Preference.MATTE, true)],
    [new Preference(2, Preference.GLOSS), new Preference(3, Preference.GLOSS)],
    [new Preference(3, Preference.MATTE), new Preference(4, Preference.GLOSS)]
  ]

  const solution = validateCandidate(3, candidate, preferences)

  expect(solution).to.eql(false)
  done()
})

it('Should properly spot an apparently valid candidate solution that does not satisfy all the customer preferences', (done: Mocha.Done) => {

  const candidate = [
    new Preference(1, Preference.MATTE, true),
    new Preference(2, Preference.GLOSS),
    new Preference(2, Preference.MATTE)
  ]

  const preferences = [
    [new Preference(1, Preference.MATTE, true)],
    [new Preference(2, Preference.GLOSS), new Preference(3, Preference.MATTE)],
    [new Preference(1, Preference.GLOSS), new Preference(2, Preference.MATTE)]
  ]

  const solution = validateCandidate(3, candidate, preferences)

  expect(solution).to.eql(false)
  done()
})
