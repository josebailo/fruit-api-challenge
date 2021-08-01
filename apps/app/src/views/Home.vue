<template>
  <div>
    <header>
      <h1 class="font-serif text-2xl font-semibold tracking-tight sm:text-4xl">Do you want some fruit?</h1>
      <p class="mt-3 text-gray-700 sm:text-lg">Here you have a list of good, healthy fruit. Enjoy them!</p>
    </header>

    <template v-if="loading">
      <div class="mt-10 flex justify-center items-center text-gray-500">
        <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </template>

    <template v-else>
      <div v-if="fruitList" class="mt-10">
        <FruitList :fruit-list="fruitList"/>
      </div>

      <div class="mt-10 text-center">
        <router-link :to="{ name: 'AddFruit' }" class="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add fruit
        </router-link>
      </div>
    </template>
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
    },
    loading () {
      return this.$store.state.loadingFruits
    }
  }
}
</script>
