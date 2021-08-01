<template>
  <div class="space-y-5">
    <router-link
      v-for="fruit in fruitList"
      :key="fruit.id"
      :to="{ name: 'Fruit', params: { id: fruit.id } }"
      class="flex items-center bg-white shadow rounded-md overflow-hidden transform transition hover:shadow-xl hover:scale-105 focus:shadow-xl focus:scale-105"
    >
      <div class="w-20 h-20 flex-shrink-0">
        <img :src="fruit.image" :title="fruit.name" :alt="fruit.name" class="object-cover w-full h-20">
      </div>

      <div class="m-3 flex-1 min-w-0">
        <h2 class="text-gray-900 text-lg font-medium leading-6">{{ fruit.name }}</h2>
        <p class="mt-1 text-sm text-gray-600 truncate">{{ fruit.description }}</p>
      </div>

      <div class="flex-shrink-0 m-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </router-link>
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
