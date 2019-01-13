import { expect } from 'chai'

import Preference from '../../src/models/preference'
import Request from '../../src/models/request'

const expected = {
  _nColors: 1,
  _preferences: [
    [{ _color: 1, _tone: Preference.GLOSS, _unique: true}]
  ]
}

const colorGloss = new Preference(1, Preference.GLOSS, true)
const request = new Request(1, [[colorGloss]])

it('Should return the correct values for the request', (done) => {
  expect(request).to.eql(expected)
  done()
})