import { parseStringToNumber } from '../components/Catalogue/lib/urlParams'

describe('parseStringToNumber', () => {
  test('should return undefined for undefined input', () => {
    expect(parseStringToNumber(undefined)).toBeUndefined()
  })

  test('should return undefined for non-numeric string', () => {
    expect(parseStringToNumber('abc')).toBeUndefined()
  })

  test('should return the number for a valid numeric string', () => {
    expect(parseStringToNumber('123')).toBe(123)
  })

  test('should return undefined for a number outside the range', () => {
    expect(parseStringToNumber('50', [60, 100])).toBeUndefined()
    expect(parseStringToNumber('150', [60, 100])).toBeUndefined()
  })

  test('should return the number for a number within the range', () => {
    expect(parseStringToNumber('75', [60, 100])).toBe(75)
  })

  test('should return undefined for NaN input', () => {
    expect(parseStringToNumber('NaN')).toBeUndefined()
  })

  test('should handle edge case where value is equal to the range boundaries', () => {
    expect(parseStringToNumber('60', [60, 100])).toBe(60)
    expect(parseStringToNumber('100', [60, 100])).toBe(100)
  })
})
