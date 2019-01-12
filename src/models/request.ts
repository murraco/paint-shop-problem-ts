import Preference from './preference'

export default class Request {

  constructor(private _nColors: number, private _preferences: Preference[][]) { }

  get nColors() {
    return this._nColors
  }

  get preferences() {
    return this._preferences
  }
}
