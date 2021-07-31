<template>
  <div>
    <BackButton />
    <div class="mt-10">
      <h2>Fill the form to add a new fruit to the list:</h2>

      <form @submit.prevent="submit">
        <div class="form-field">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="fruit.name" required>
        </div>

        <div class="form-field">
          <label for="description">Description</label>
          <textarea id="description" v-model="fruit.description" required />
        </div>

        <div class="form-field">
          <label for="image">Image URL</label>
          <input type="text" id="image" v-model="fruit.image">
        </div>

        <div class="flex items-center space-x-5">
          <div class="form-field">
            <label for="price">Price</label>
            <input type="text" id="price" v-model="fruit.price">
          </div>

          <div class="form-field">
            <label for="color">Color</label>
            <input type="text" id="color" v-model="fruit.color">
          </div>
        </div>

        <div class="flex items-center space-x-5">
          <div class="form-field">
            <label for="taste">Taste</label>
            <input type="text" id="taste" v-model="fruit.taste">
          </div>

          <div class="form-field">
            <label for="expires">Expiration date</label>
            <input type="text" id="expires" v-model="fruit.expires">
          </div>
        </div>

        <div class="mt-5 text-right">
          <button type="submit" class="button">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  name: 'AddFruit',
  components: {
    BackButton
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
