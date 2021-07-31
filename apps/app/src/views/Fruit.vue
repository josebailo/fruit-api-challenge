<template>
  <FruitCard v-if="fruit" :fruit="fruit" />
</template>

<script>
import FruitCard from '@/components/FruitCard'

export default {
  name: 'Fruit',
  components: {
    FruitCard
  },
  computed: {
    fruit () {
      return this.$store.state.fruits
        ? this.$store.state.fruits.find(fruit => parseInt(fruit.id) === parseInt(this.$route.params.id))
        : null
    }
  }
}
</script>
