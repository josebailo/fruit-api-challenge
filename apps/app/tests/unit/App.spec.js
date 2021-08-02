import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('App.vue', () => {
  const actions = {
    loadFruits: jest.fn()
  }
  const store = new Vuex.Store({ actions })
  const router = new VueRouter()
  const wrapper = shallowMount(App, {
    store,
    router,
    localVue
  })

  it('renders the App', () => {
    expect(wrapper.find('#app').exists()).toBe(true)
  })

  it('loads the fruit list', () => {
    expect(actions.loadFruits).toHaveBeenCalled()
  })
})
