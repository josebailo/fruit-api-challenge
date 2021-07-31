<template>
  <div>
    <header>
      <h1 class="font-serif text-2xl font-semibold tracking-tight sm:text-4xl">Do you want some fruit?</h1>
      <p class="mt-3 text-gray-700 sm:text-lg">Here you have a list of good, healthy fruit. They could appear in random order, but that's not important!</p>
    </header>
    <div class="mt-10">
      <FruitList v-if="fruitList" :fruit-list="fruitList"/>
    </div>
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
  }
}
</script>
