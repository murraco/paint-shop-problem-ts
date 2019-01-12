import Preference from '../models/preference'
import Request from '../models/request'

import { preparePreferences, generateCandidates, validateCandidate } from './utils'

const NO_SOLUTION_MESSAGE = 'No solution exists'

/**
 * Solve the paint shop problem for the current customers' request.
 *
 * @returns {string} - A string representing for each of the colors, whether it should be made gloss or 
 * matte in order to fill the customers' requests. Otherwise it returns the message: 'No solution exists'.
 */
export function solve(request: Request): string {
  const preferences = preparePreferences(request.preferences)
  const candidates = generateCandidates(preferences)

  for (let candidate of candidates) {
    const solution = validateCandidate(request.nColors, candidate, preferences)

    // The execution finishes if a suitable solution is found
    if (solution) {
      return solution
    }
  }

  return NO_SOLUTION_MESSAGE
}
