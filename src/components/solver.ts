import Preference from '../models/preference'
import Request from '../models/request'

import { preparePreferences, generateCandidates, validateCandidate } from './utils'

const NO_SOLUTION_MESSAGE = 'No solution exists'

/**
 * Solves the paint shop problem.
 * @param {Request} request Customer request
 * @returns {string} The candidate solution or an invalid message
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
