<template>
  <div class="space-y-5">
    <div v-for="fruit in fruitList" :key="fruit.id" class="bg-white shadow-lg rounded-md overflow-hidden">
      <div class="">
        <img :src="fruit.image" :title="fruit.name" :alt="fruit.name" class="object-cover w-full h-72">
      </div>

      <div class="p-2">
        <h2 class="text-gray-900 font-semibold text-xl">{{ fruit.name }}</h2>
        <p class="text-gray-600 truncate">{{ fruit.description }}</p>
      </div>
    </div>
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
