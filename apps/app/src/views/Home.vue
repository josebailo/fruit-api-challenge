<template>
  <div>
    <header>
      <h1 class="font-serif text-2xl font-semibold tracking-tight sm:text-4xl">Do you want some fruit?</h1>
      <p class="mt-3 text-gray-700 sm:text-lg">Here you have a list of good, healthy fruit. They could appear in random order, but that's not important!</p>
    </header>
    <div class="mt-10">
      <FruitList v-if="fruitList" :fruit-list="fruitList"/>
    </div>
    <div class="mt-10 text-center">
      <router-link :to="{ name: 'AddFruit' }" class="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add fruit
      </router-link>
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
