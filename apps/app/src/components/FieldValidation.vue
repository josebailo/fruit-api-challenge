<template>
  <div class="mt-1 text-xs text-red-500 font-medium">
    <p v-if="field.hasOwnProperty('required') && !field.required">The field is required.</p>
    <p v-if="field.hasOwnProperty('decimal') && !field.decimal">The field must be a decimal number.</p>
    <p v-if="field.hasOwnProperty('minValue') && !field.minValue">The field must be greater than zero.</p>
    <p v-if="field.hasOwnProperty('url') && !field.url">The field must be a valid URL.</p>
    <p v-if="field.hasOwnProperty('validatorHexadecimalColor') && !field.validatorHexadecimalColor">The field must be a hexadecimal color.</p>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  }
}
</script>
