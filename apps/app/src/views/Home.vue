<template>
  <div class="home">
    <FruitList v-if="fruitList" :fruit-list="fruitList"/>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList'

export default {
  name: 'Home',
  components: {
    FruitList
  },
  computed: {
    fruitList () {
      return this.$store.state.fruits
    }
  },
  created () {
    this.$store.dispatch('loadFruits')
  }
}
</script>
