import Fruit from '@/classes/fruit'
import { helpers } from 'vuelidate/lib/validators'

const isObject = (object) => {
  return object !== null && typeof object === 'object'
}

export const extractFruitFromDataset = (dataset) => {
  const fruits = []

  if (Fruit.isValidFruit(dataset)) {
    fruits.push(new Fruit(dataset))
  }

  Object.keys(dataset).forEach(key => {
    if (isObject(dataset[key])) {
      fruits.push(extractFruitFromDataset(dataset[key]))
    }
  })

  return fruits.flat()
}

export const validatorHexadecimalColor = value => !helpers.req(value) || /^#([0-9A-F]{3}){1,2}$/i.test(value)
