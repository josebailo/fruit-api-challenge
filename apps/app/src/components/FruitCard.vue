<template>
  <div class="relative bg-white shadow-lg rounded-md overflow-hidden">
    <button type="button" class="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600" title="Remove fruit" @click="remove">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      <span class="sr-only">Remove fruit</span>
    </button>

    <img :src="fruit.image" :title="fruit.name" :alt="fruit.name" class="object-cover w-full h-96">

    <div class="m-2 sm:m-3">
      <h2 class="text-gray-900 font-semibold text-xl">{{ fruit.name }}</h2>
      <p class="mt-2 text-gray-600">{{ fruit.description }}</p>
      <dl class="mt-4 text-sm text-gray-600">
        <div class="flex items-center">
          <dt class="font-semibold">Taste:</dt>
          <dd class="ml-1">{{ fruit.taste }}</dd>
        </div>
        <div class="flex items-center">
          <dt class="font-semibold">Expiration date:</dt>
          <dd class="ml-1">{{ expirationDate }}</dd>
        </div>
        <div class="flex items-center">
          <dt class="font-semibold">Price:</dt>
          <dd class="ml-1">{{ fruit.price }}</dd>
        </div>
        <div class="flex items-center">
          <dt class="font-semibold">Color:</dt>
          <dd class="ml-1 inline-block px-1 py-0.5 rounded text-xs text-white text-opacity-70" :style="{ backgroundColor: fruit.color }">{{ fruit.color }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import Fruit from '@/classes/fruit'
import moment from 'moment'

export default {
  name: 'FruitCard',
  props: {
    fruit: {
      type: Fruit,
      required: true
    }
  },
  computed: {
    expirationDate () {
      return moment(this.fruit.expires).format('D MMMM YYYY, HH:mm')
    }
  },
  methods: {
    remove () {
      this.$store.dispatch('removeFruit', this.fruit.id)
        .then(() => this.$store.dispatch('loadFruits'))
        .then(() => this.$router.push({ name: 'Home' }))
    }
  }
}
</script>
