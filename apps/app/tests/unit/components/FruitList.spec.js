import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import FruitList from '@/components/FruitList'
import fruits from '../fixtures/fruits'

describe('FruitList.vue', () => {
  const wrapper = shallowMount(FruitList, {
    stubs: {
      RouterLink: RouterLinkStub
    },
    propsData: {
      fruitList: fruits
    }
  })

  it('renders the name of the fruits', () => {
    for (const fruit of fruits) {
      expect(wrapper.text()).toMatch(fruit.name)
    }
  })

  it('renders the description of the fruits', () => {
    for (const fruit of fruits) {
      expect(wrapper.text()).toMatch(fruit.description)
    }
  })

  it('renders the image of the fruits', () => {
    const images = wrapper.findAll('img')

    for (const key in fruits) {
      expect(images.at(key).attributes('src')).toMatch(fruits[key].image)
    }
  })

  it('renders a link for each fruits', () => {
    const links = wrapper.findAllComponents(RouterLinkStub)

    for (const key in fruits) {
      expect(links.at(key).props().to).toStrictEqual({ name: 'Fruit', params: { id: fruits[key].id } })
    }
  })
})
