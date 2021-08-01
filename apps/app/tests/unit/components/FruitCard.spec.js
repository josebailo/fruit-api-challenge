import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
// import VueRouter from 'vue-router'
import moment from 'moment'
import fruits from '../fixtures/fruits'
import FruitCard from '@/components/FruitCard'

const localVue = createLocalVue()
localVue.use(Vuex)
// localVue.use(VueRouter)

describe('FruitCard.vue', () => {
  describe('renders', () => {
    const fruit = fruits[0]
    const wrapper = mount(FruitCard, {
      propsData: { fruit }
    })

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

  // describe('reacts to', () => {
  //   it('the remove button', () => {
  //     const actions = {
  //       removeFruit: jest.fn(),
  //       loadFruits: jest.fn()
  //     }
  //
  //     const fruit = fruits[0]
  //     const wrapper = mount(FruitCard, {
  //       propsData: { fruit },
  //       store: new Vuex.Store({ actions }),
  //       router: new VueRouter({
  //         routes: [{
  //           name: 'ListFruit',
  //           path: '/'
  //         }]
  //       }),
  //       localVue
  //     })
  //
  //     wrapper.find('button').trigger('click')
  //     expect(actions.removeFruit).toHaveBeenCalled()
  //   })
  // })
})
