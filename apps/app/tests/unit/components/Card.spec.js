import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card'

describe('Card.vue', () => {
  it('renders the content in the main slot', () => {
    const text = 'Text in the slot'
    const wrapper = shallowMount(Card, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })

  it('renders the content in the header slot', () => {
    const text = 'Text in the slot'
    const wrapper = shallowMount(Card, {
      slots: {
        header: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })

  it('renders the content in the footer slot', () => {
    const text = 'Text in the slot'
    const wrapper = shallowMount(Card, {
      slots: {
        footer: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
