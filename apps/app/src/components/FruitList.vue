<template>
  <div class="">
    <p v-for="fruit in fruitList" :key="fruit.id">{{ fruit.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'FruitList',
  props: {
    fruitList: {
      type: Array,
      required: true
    }
  }
}
</script>
