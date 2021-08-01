<template>
  <div>
    <BackButton />
    <div class="mt-10">
      <h2>Fill the form to add a new fruit to the list:</h2>

      <form @submit.prevent="submit">
        <Card>
          <div class="space-y-6">
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" v-model="fruit.name">
            </div>

            <div>
              <label for="description">Description</label>
              <textarea id="description" v-model="fruit.description" />
            </div>

            <div>
              <label for="image">Image URL</label>
              <input type="text" id="image" v-model="fruit.image">
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <label for="price">Price</label>
                <input type="text" id="price" v-model="fruit.price">
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label for="color">Color</label>
                <input type="text" id="color" v-model="fruit.color">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <label for="taste">Taste</label>
                <input type="text" id="taste" v-model="fruit.taste">
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label for="expires">Expiration date</label>
                <input type="text" id="expires" v-model="fruit.expires">
              </div>
            </div>
          </div>

          <template v-slot:footer>
            <button type="submit" class="button">Send</button>
          </template>
        </Card>
      </form>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'
import Card from '@/components/Card'

export default {
  name: 'AddFruit',
  components: {
    BackButton,
    Card
  },
  data () {
    return {
      fruit: {
        name: '',
        image: '',
        price: '',
        color: '',
        description: '',
        taste: '',
        expires: '',
        isFruit: true
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('storeFruit', this.fruit)
        .then(() => this.$store.dispatch('loadFruits'))
        .then(() => this.$router.push({ name: 'Home' }))
    }
  }
}
</script>
