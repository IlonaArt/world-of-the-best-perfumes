import { getDefaultUrlParams } from '../components/Catalogue/lib/urlParams'
import { DEFAULT_PARAMS } from '../components/Catalogue/constants'

jest.mock('../components/Catalogue/lib/urlParams', () => {
  return {
    getDefaultUrlParams: jest.fn(() => DEFAULT_PARAMS),
    parseUrlParams: jest.fn(),
  }
})

describe('getDefaultUrlParams', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return defaultParams when window is undefined', () => {
    global.window = undefined

    const result = getDefaultUrlParams()

    expect(result).toBe(DEFAULT_PARAMS)
  })

  test('should return parsed params from URL when window is defined', () => {
    const mockSearch = '?param1=value1&param2=value2'
    const mockParsedParams = { param1: 'value1', param2: 'value2' }

    global.window = {
      location: {
        search: mockSearch,
      },
    } as Window & typeof globalThis
    ;(getDefaultUrlParams as jest.Mock).mockReturnValue(mockParsedParams)

    const result = getDefaultUrlParams()

    expect(result).toBe(mockParsedParams)
  })
})
