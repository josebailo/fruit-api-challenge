<template>
  <div class="space-y-5">
    <router-link
      v-for="fruit in fruitList"
      :key="fruit.id"
      :to="{ name: 'Fruit', params: { id: fruit.id } }"
      class="block bg-white shadow-lg rounded-md overflow-hidden sm:flex"
    >
      <div class="sm:w-48 sm:h-40 sm:flex-shrink-0">
        <img :src="fruit.image" :title="fruit.name" :alt="fruit.name" class="object-cover w-full h-64 sm:h-full">
      </div>

      <div class="m-2 sm:m-3 sm:flex-1 sm:min-w-0 sm:flex sm:flex-col">
        <div class="sm:flex-1">
          <h2 class="text-gray-900 font-semibold text-xl">{{ fruit.name }}</h2>
          <p class="mt-1 text-gray-600 truncate">{{ fruit.description }}</p>
        </div>
        <div class="text-right sm:flex-shrink-0">
          <span class="mt-2 inline-flex items-center p-1 bg-purple-700 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ fruit.price }}
          </span>
        </div>
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
