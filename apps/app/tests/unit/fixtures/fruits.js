import faker from 'faker'

export default [
  {
    isFruit: true,
    name: 'pineapple',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/pineapple.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.future(),
    id: 1
  },
  {
    isFruit: true,
    name: 'banana',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/banana.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.future(),
    id: 3
  },
  {
    isFruit: true,
    name: 'orange',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/orange.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.past(),
    id: 2
  },
  {
    isFruit: true,
    name: 'tomato',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/tomato.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.future(),
    id: 4
  },
  {
    isFruit: true,
    name: 'apple',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/apple.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'An apple is an edible fruit produced by an apple tree.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.past(),
    id: 5
  },
  {
    isFruit: true,
    name: 'kiwi',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/kiwi.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'Kiwifruit (often shortened to kiwi outside Australia and New Zealand), or Chinese gooseberry, is the edible berry of several species of woody vines in the genus Actinidia.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.recent(),
    id: 6
  },
  {
    isFruit: false,
    name: 'eggplant',
    image: 'https://raw.githubusercontent.com/cycloidio/fictional-eureka/master/assets/eggplant.jpg',
    price: faker.commerce.price(),
    color: faker.internet.color(),
    description: 'Most commonly purple, the spongy, absorbent fruit is used in several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition. As a member of the genus Solanum, it is related to the tomato and potato. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is usually eaten cooked. Eggplant is nutritionally low in macronutrient and micronutrient content, but the capability of the fruit to absorb oils and flavors into its flesh through cooking expands its use in the culinary arts.',
    taste: faker.commerce.productAdjective(),
    expires: faker.date.future(),
    id: faker.datatype.uuid()
  }
]
