import { shallowMount } from '@vue/test-utils'
import EmptyState from '@/components/EmptyState'

describe('EmptyState.vue', () => {
  it('renders the content in the main slot', () => {
    const text = 'Text in the slot'
    const wrapper = shallowMount(EmptyState, {
      slots: {
        default: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })

  it('renders the content in the description slot', () => {
    const text = 'Text in the slot'
    const wrapper = shallowMount(EmptyState, {
      slots: {
        description: text
      }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
