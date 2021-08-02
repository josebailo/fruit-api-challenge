import { mount } from '@vue/test-utils'
import moment from 'moment'
import fruits from '../fixtures/fruits'
import FruitCard from '@/components/FruitCard'

describe('FruitCard.vue', () => {
  const fruit = fruits[0]
  const wrapper = mount(FruitCard, {
    propsData: { fruit }
  })

  describe('renders', () => {
    it('the name', () => {
      expect(wrapper.text()).toMatch(fruit.name)
    })

    it('the description', () => {
      expect(wrapper.text()).toMatch(fruit.description)
    })

    it('the price', () => {
      expect(wrapper.text()).toContain(fruit.price)
    })

    it('the color', () => {
      expect(wrapper.text()).toMatch(fruit.color)
    })

    it('the taste', () => {
      expect(wrapper.text()).toMatch(fruit.taste)
    })

    it('the image', () => {
      const img = wrapper.find('img')
      expect(img.exists()).toBe(true)
      expect(img.attributes().src).toMatch(fruit.image)
    })

    it('the expiration date in the right format', () => {
      const dateFormatted = moment(fruit.expires).format('D MMMM YYYY')
      expect(wrapper.text()).toMatch(dateFormatted)
    })
  })

  describe('when the remove button is clicked', () => {
    it('does not trigger an event if the action is not confirmed', () => {
      window.confirm = jest.fn(() => false)
      wrapper.find('button.button-red').trigger('click')
      expect(wrapper.emitted().remove).toBeFalsy()
    })

    it('triggers an event if the action is confirmed', () => {
      window.confirm = jest.fn(() => true)
      wrapper.find('button.button-red').trigger('click')
      expect(wrapper.emitted().remove).toBeTruthy()
      expect(wrapper.emitted().remove.length).toBe(1)
    })
  })
})
