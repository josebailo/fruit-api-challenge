import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import BackButton from '@/components/BackButton'

describe('BackButton.vue', () => {
  it('renders the text "Go back"', () => {
    const wrapper = shallowMount(BackButton, {
      stubs: ['router-link']
    })
    expect(wrapper.text()).toMatch('Go back')
  })

  it('renders a SVG icon', () => {
    const wrapper = shallowMount(BackButton, {
      stubs: ['router-link']
    })
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('redirect to home', () => {
    const wrapper = shallowMount(BackButton, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.findComponent(RouterLinkStub).props().to).toStrictEqual({ name: 'Home' })
  })
})
