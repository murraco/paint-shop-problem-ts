import { expect } from 'chai'

import Preference from '../../src/models/preference'

const colorMatte = new Preference(1, Preference.MATTE, true)
const colorGloss = new Preference(2, Preference.GLOSS)

it('Should return the correct values for each color', (done: Mocha.Done) => {
  expect(colorMatte.color).to.eql(1)
  expect(colorGloss.color).to.eql(2)
  expect(colorMatte.tone).to.eql(Preference.MATTE)
  expect(colorGloss.tone).to.eql(Preference.GLOSS)
  expect(colorMatte.unique).to.eql(true)
  expect(colorGloss.unique).to.eql(undefined)
  done()
})

it('Matte colors are always bigger than Gloss colors', (done: Mocha.Done) => {
  expect(Preference.SORT_BY_TONE_AND_COLOR(colorMatte, colorGloss)).to.eql(1)
  done()
})

it('Gloss colors are always smaller than Matte colors', (done: Mocha.Done) => {
  expect(Preference.SORT_BY_TONE_AND_COLOR(colorGloss, colorMatte)).to.eql(-1)
  done()
})

it('Colors with the same tone are ordered by index color', (done: Mocha.Done) => {
  expect(Preference.SORT_BY_TONE_AND_COLOR(new Preference(3, Preference.GLOSS), colorGloss)).to.eql(1)
  done()
})