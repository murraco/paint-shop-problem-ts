export default class Preference {

  static readonly MATTE = 'M'
  static readonly GLOSS = 'G'

  static readonly SORT_BY_TONE_AND_COLOR = (a: Preference, b: Preference): number => {
    // GLOSS is always smaller than MATTE
    if (a.tone === Preference.GLOSS && b.tone === Preference.MATTE) {
      return -1
    }

    // MATTE is always bigger than GLOSS
    if (a.tone === Preference.MATTE && b.tone === Preference.GLOSS) {
      return 1
    }

    // If same tone, sort by color ascendent
    return a.color - b.color
  }

  constructor(private _color: number, private _tone?: string, private _unique?: boolean) { }

  get color(): number {
    return this._color
  }

  get tone(): string {
    return this._tone
  }

  get unique(): boolean {
    return this._unique
  }

  set color(value: number) {
    this._color = value
  }

  set tone(value: string) {
    this._tone = value
  }

  set unique(value: boolean) {
    this._unique = value
  }
}
