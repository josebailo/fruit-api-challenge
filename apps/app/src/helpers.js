import Fruit from '@/classes/fruit'

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
