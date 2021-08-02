import { shallowMount } from '@vue/test-utils'
import FieldValidation from '@/components/FieldValidation'

describe('FieldValidation.vue', () => {
  it('renders the text error if the required validation fails', () => {
    const wrapper = shallowMount(FieldValidation, {
      propsData: {
        field: {
          required: false
        }
      }
    })
    expect(wrapper.text()).toMatch('The field is required.')
  })

  it('renders the text error if the required validation fails', () => {
    const wrapper = shallowMount(FieldValidation, {
      propsData: {
        field: {
          decimal: false
        }
      }
    })
    expect(wrapper.text()).toMatch('The field must be a decimal number.')
  })

  it('renders the text error if the required validation fails', () => {
    const wrapper = shallowMount(FieldValidation, {
      propsData: {
        field: {
          minValue: false
        }
      }
    })
    expect(wrapper.text()).toMatch('The field must be greater than zero.')
  })

  it('renders the text error if the required validation fails', () => {
    const wrapper = shallowMount(FieldValidation, {
      propsData: {
        field: {
          url: false
        }
      }
    })
    expect(wrapper.text()).toMatch('The field must be a valid URL.')
  })

  it('renders the text error if the required validation fails', () => {
    const wrapper = shallowMount(FieldValidation, {
      propsData: {
        field: {
          validatorHexadecimalColor: false
        }
      }
    })
    expect(wrapper.text()).toMatch('The field must be a hexadecimal color.')
  })
})
