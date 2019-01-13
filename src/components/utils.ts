import Preference from '../models/preference'

/**
 * Takes a set of customer preferences and returns them sorted by tone and color with marks in the unique requirements.
 * @param {Preference[][]} preferences Set of customer preferences
 * @returns {Preference[][]} Marked set of customer preferences sorted by tone and color
 */
export function preparePreferences(preferences: Preference[][]): Preference[][] {
  return preferences
    // Sort preferences by tone and color
    .map((prefs: Preference[]) => prefs.sort(Preference.SORT_BY_TONE_AND_COLOR))
    // Mark preferences with a single option as unique
    .map((prefs: Preference[]) => {
      prefs[0].unique = (prefs.length === 1) ? true : undefined
      return prefs
    })
}

/**
 * Factory method that generates an iterator over all the possible solutions for a given set of customer preferences.
 * @param {Preference[][]} preferences Set of customer preferences
 * @returns {IterableIterator<Preference[]>}
 */
export function* generateCandidates(preferences: Preference[][]): IterableIterator<Preference[]> {
  // The total number of possible combinations is obtained by multiplying
  // the number of elements in every set of preferences (1 set per customer)
  const combinations = preferences.reduce((acc: number, curr: Preference[]) => acc * curr.length, 1)

  for (let i = 0; i < combinations; i++) {
    yield getCandidate(i, preferences)
  }

  return null
}

function getCandidate(i: number, preferences: Preference[][]): Preference[] {
  const lengths = preferences.map((prefs: Preference[]) => prefs.length)

  let x = i

  // Calculate indexes for every position (preference)
  const candidateIndexes = lengths.map((length: number) => {
    const index = x % length
    x = Math.floor(x / length)
    return index
  })

  // Use the selected indexes to reconstruct and return an array of preferences (a possible solution)
  return candidateIndexes.map((index: number, line: number) => preferences[line][index])
}

/**
 * Validates if a candidate is a valid solution given a specific number of colors and set of customer preferences.
 * @param {number} nColors Number of colors
 * @param {Preference[]} candidate Candidate solution
 * @param {Preference[][]} preferences Set of customer preferences
 * @returns {*} The solution if it's a valid candidate, otherwise false
 */
export function validateCandidate(nColors: number, candidate: Preference[], preferences: Preference[][]): any {
  // Colors is the working array, is created with numColors cells initialized to null
  const colors = Array.from({ length: nColors }, i => null)

  const found = candidate.every((pref: Preference) => {
    const color = colors[pref.color - 1]

    // if trying to override a unique color (or using a unique color to override) the solution is not valid
    if (color && (color._unique || pref.unique) && color._tone !== pref.tone) {
      return false // Stop iteration
    }

    // Overrides the current cell in colors, using Object.assign preserves possible unique tags
    colors[pref.color - 1] = Object.assign({}, colors[pref.color - 1], pref)

    return true // Move to the next element
  })

  if (!found) {
    return false
  }

  const result = colors
    // Fill missing colors with GLOSS tone
    .map((c: any, i: number) => c || ({ _color: i + 1, _tone: Preference.GLOSS }))
    // Flattens the colors into a string of tone options by index
    .map((c: any) => c._tone)

  // Verify that all preferences have been satisfied
  if (preferences.every((prefs: Preference[]) => prefs.some((pref: Preference) => result[pref.color - 1] === pref.tone))) {
    return result.join(' ')
  }

  return false
}