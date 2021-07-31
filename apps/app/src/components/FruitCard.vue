<template>
  <div class="bg-white shadow-lg rounded-md overflow-hidden">
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
  }
}
</script>
