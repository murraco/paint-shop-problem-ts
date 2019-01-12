import Preference from '../models/preference'
import Request from '../models/request'

/**
 * 
 * 
 * @export
 * @param {string} path 
 * @returns {Request} 
 */
export function parse(content: string): Request {
  const lines = content.split(/[\r\n]+/)

  const nColors = parseInt(lines.shift() || '0', 10)
  const preferences = lines
    .map((line: any) => line.split(/\s+/))
    .filter((line: any) => Boolean(line[0] !== '')) // Remove empty lines
    .map((line: any) => line.reduce((acc: Preference[], curr: string) => {

      if (curr === Preference.MATTE || curr === Preference.GLOSS) {
        acc[acc.length - 1].tone = curr
      } else {
        acc.push(new Preference(parseInt(curr)))
      }

      return acc
    }, []))

  return new Request(nColors, preferences)
}
