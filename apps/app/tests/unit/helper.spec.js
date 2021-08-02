import {
  extractFruitFromDataset,
  isObject,
  validatorHexadecimalColor
} from '@/helpers'
import callDefault1 from './fixtures/api-calls/default-1'
import callDefault2 from './fixtures/api-calls/default-2'
import callDefault3 from './fixtures/api-calls/default-3'
import callWithNewFruits from './fixtures/api-calls/with-new-fruits'
import callWithNewFruitsAndNoFruits from './fixtures/api-calls/with-new-fruits-and-no-fruits'
import callWithOnlyAddedFruits from './fixtures/api-calls/with-only-added-fruits'
import callWithNoFruits from './fixtures/api-calls/with-no-fruit'

describe('isObject function', () => {
  it('returns false if the parameter is a string', () => {
    expect(isObject('test')).toBe(false)
    expect(isObject('')).toBe(false)
  })

  it('returns false if the parameter is a number', () => {
    expect(isObject(1)).toBe(false)
    expect(isObject(1.0)).toBe(false)
    expect(isObject(-1)).toBe(false)
    expect(isObject(-1.0)).toBe(false)
  })

  it('returns false if the parameter is undefined', () => {
    expect(isObject(undefined)).toBe(false)
  })

  it('returns false if the parameter is null', () => {
    expect(isObject(null)).toBe(false)
  })

  it('returns false if the parameter is a boolean', () => {
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)
  })

  it('returns false if the parameter is a function', () => {
    expect(isObject(() => {})).toBe(false)
  })

  it('returns false if the parameter is missing', () => {
    expect(isObject()).toBe(false)
  })

  it('returns true if the parameter is an object', () => {
    expect(isObject({})).toBe(true)
  })

  it('returns true if the parameter is an array', () => {
    expect(isObject([])).toBe(true)
  })
})

describe('validatorHexadecimalColor function', () => {
  it('returns true if the parameter is a valid hexadecimal color', () => {
    expect(validatorHexadecimalColor('#000')).toBe(true)
    expect(validatorHexadecimalColor('#000000')).toBe(true)
  })

  it('returns false if the parameter is not a valid hexadecimal color', () => {
    expect(validatorHexadecimalColor('123')).toBe(false)
    expect(validatorHexadecimalColor('#3')).toBe(false)
    expect(validatorHexadecimalColor('#12')).toBe(false)
    expect(validatorHexadecimalColor('#gg')).toBe(false)
    expect(validatorHexadecimalColor('#ggg')).toBe(false)
    expect(validatorHexadecimalColor('#12k')).toBe(false)
    expect(validatorHexadecimalColor('#gggggg')).toBe(false)
    expect(validatorHexadecimalColor('#12345k')).toBe(false)
    expect(validatorHexadecimalColor('#1234567')).toBe(false)
  })
})

describe('extractFruitFromDataset function', () => {
  it('returns only the fruits from the API calls', () => {
    expect(extractFruitFromDataset(callDefault1.data).length).toBe(callDefault1.data.fruitCount)
    expect(extractFruitFromDataset(callDefault2.data).length).toBe(callDefault2.data.fruitCount)
    expect(extractFruitFromDataset(callDefault3.data).length).toBe(callDefault3.data.fruitCount)
    expect(extractFruitFromDataset(callWithNewFruits.data).length).toBe(callWithNewFruits.data.fruitCount)
    expect(extractFruitFromDataset(callWithNewFruitsAndNoFruits.data).length).toBe(callWithNewFruitsAndNoFruits.data.fruitCount)
    expect(extractFruitFromDataset(callWithOnlyAddedFruits.data).length).toBe(callWithOnlyAddedFruits.data.fruitCount)
    expect(extractFruitFromDataset(callWithNoFruits.data).length).toBe(callWithNoFruits.data.fruitCount)
  })
})
