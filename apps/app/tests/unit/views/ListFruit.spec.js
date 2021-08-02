import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import EmptyState from '@/components/EmptyState'
import FruitList from '@/components/FruitList'
import ListFruit from '@/views/ListFruit'
import Vuex from 'vuex'
import fruits from '../fixtures/fruits'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ListFruit.vue', () => {
  describe('while loading the fruits', () => {
    const getters = {
      getFruits: () => null,
      fruitIsBeingLoaded: () => true
    }
    const store = new Vuex.Store({ getters })
    const wrapper = shallowMount(ListFruit, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    it('renders the loading icon', () => {
      expect(wrapper.find('._test_icon_loading_').exists()).toBe(true)
    })

    it('does not render the fruit list', () => {
      expect(wrapper.findComponent(FruitList).exists()).toBe(false)
    })

    it('does not render the empty state component', () => {
      expect(wrapper.findComponent(EmptyState).exists()).toBe(false)
    })

    it('does not render the add new fruit link', () => {
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false)
    })
  })

  describe('with a list empty', () => {
    const getters = {
      getFruits: () => [],
      fruitIsBeingLoaded: () => false
    }
    const store = new Vuex.Store({ getters })
    const wrapper = shallowMount(ListFruit, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    it('does not render the loading icon', () => {
      expect(wrapper.find('._test_icon_loading_').exists()).toBe(false)
    })

    it('does not render the fruit list', () => {
      expect(wrapper.findComponent(FruitList).exists()).toBe(false)
    })

    it('renders the empty state component', () => {
      expect(wrapper.findComponent(EmptyState).exists()).toBe(true)
    })

    it('renders the add new fruit link', () => {
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true)
    })
  })

  describe('with fruits in the list', () => {
    const getters = {
      getFruits: () => fruits,
      fruitIsBeingLoaded: () => false
    }
    const store = new Vuex.Store({ getters })
    const wrapper = shallowMount(ListFruit, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    it('does not render the loading icon', () => {
      expect(wrapper.find('._test_icon_loading_').exists()).toBe(false)
    })

    it('renders the fruit list', () => {
      expect(wrapper.findComponent(FruitList).exists()).toBe(true)
    })

    it('does not render the empty state component', () => {
      expect(wrapper.findComponent(EmptyState).exists()).toBe(false)
    })

    it('renders the add new fruit link', () => {
      expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(true)
    })
  })
})
