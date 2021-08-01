<template>
  <Card>
    <template v-slot:header>
      <img :src="fruit.image" :title="fruit.name" :alt="fruit.name" class="object-cover w-full h-96">
    </template>

    <h2 class="font-medium text-xl">{{ fruit.name }}</h2>

    <p class="mt-1 text-gray-600">{{ fruit.description }}</p>

    <dl class="mt-4 text-sm space-y-1">
      <div v-if="fruit.taste">
        <dt class="text-gray-600 font-medium">Taste</dt>
        <dd>{{ fruit.taste }}</dd>
      </div>
      <div v-if="fruit.expires">
        <dt class="text-gray-600 font-medium">Expiration date</dt>
        <dd>{{ expirationDate }}</dd>
      </div>
      <div v-if="fruit.price">
        <dt class="text-gray-600 font-medium">Price</dt>
        <dd>&euro; {{ fruit.price }}</dd>
      </div>
      <div v-if="fruit.color">
        <dt class="text-gray-600 font-medium">Color</dt>
        <dd class="flex items-center">
          <span class="mr-1 inline-block w-4 h-4 border border-gray-300 rounded shadow" :style="{ backgroundColor: fruit.color }" />
          {{ fruit.color }}
        </dd>
      </div>
    </dl>

    <template v-slot:footer>
      <button type="button" class="button button-red" title="Remove fruit" @click="remove">Remove</button>
    </template>
  </Card>
</template>

<script>
import Card from '@/components/Card'
import Fruit from '@/classes/fruit'
import moment from 'moment'

export default {
  name: 'FruitCard',
  components: {
    Card
  },
  props: {
    fruit: {
      type: Fruit,
      required: true
    }
  },
  computed: {
    expirationDate () {
      return moment(this.fruit.expires).format('D MMMM YYYY')
    }
  },
  methods: {
    remove () {
      this.$store.dispatch('removeFruit', this.fruit.id)
        .then(() => this.$store.dispatch('loadFruits'))
        .then(() => this.$router.push({ name: 'ListFruit' }))
    }
  }
}
</script>
