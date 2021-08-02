export default class Fruit {
  constructor ({ id, isFruit, name, image, price, color, description, taste, expires }) {
    this.id = id
    this.isFruit = isFruit
    this.name = name
    this.image = image
    this.price = price
    this.color = color
    this.description = description
    this.taste = taste
    this.expires = expires
  }

  static isValidFruit (fruit) {
    return fruit !== null &&
      typeof fruit === 'object' &&
      fruit.isFruit !== 'undefined' &&
      fruit.isFruit === true &&
      fruit.id !== undefined
  }
}
