<template>
  <div>
    <router-link :to="{ name: 'Home' }" class="inline-flex items-center text-sm hover:text-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
      </svg>
      <span>Go back</span>
    </router-link>
    <div class="mt-5">
      <FruitCard v-if="fruit" :fruit="fruit" />
    </div>
  </div>
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
