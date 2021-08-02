import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import BackButton from '@/components/BackButton'
import EmptyState from '@/components/EmptyState'
import FruitCard from '@/components/FruitCard'
import ShowFruit from '@/views/ShowFruit'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import fruits from '../fixtures/fruits'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('ShowFruit.vue', () => {
  describe('when the fruit does not exist', () => {
    const getters = {
      getFruitById: () => () => null
    }
    const store = new Vuex.Store({ getters })
    const router = new VueRouter()
    const wrapper = shallowMount(ShowFruit, {
      store,
      router,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    it('renders the empty state component', () => {
      expect(wrapper.findComponent(EmptyState).exists()).toBe(true)
    })

    it('renders the back button component', () => {
      expect(wrapper.findComponent(BackButton).exists()).toBe(true)
    })

    it('does not render the fruit card component', () => {
      expect(wrapper.findComponent(FruitCard).exists()).toBe(false)
    })
  })

  describe('when the fruit exists', () => {
    const getters = {
      getFruitById: () => () => fruits[0]
    }
    const store = new Vuex.Store({ getters })
    const router = new VueRouter()
    const wrapper = shallowMount(ShowFruit, {
      store,
      router,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    it('does not render the empty state component', () => {
      expect(wrapper.findComponent(EmptyState).exists()).toBe(false)
    })

    it('renders the back button component', () => {
      expect(wrapper.findComponent(BackButton).exists()).toBe(true)
    })

    it('renders the fruit card component', () => {
      expect(wrapper.findComponent(FruitCard).exists()).toBe(true)
    })
  })
})
