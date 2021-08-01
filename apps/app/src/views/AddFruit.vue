<template>
  <div>
    <BackButton />
    <div class="mt-10">
      <form @submit.prevent="submit">
        <Card>
          <div class="space-y-6">
            <h2 class="font-medium">New fruit</h2>

            <div>
              <label for="name">Name</label>
              <input type="text" id="name" v-model="$v.fruit.name.$model">
              <FieldValidation v-if="$v.fruit.name.$dirty && $v.fruit.name.$invalid" :field="$v.fruit.name" />
            </div>

            <div>
              <label for="description">Description</label>
              <textarea id="description" v-model="$v.fruit.description.$model" />
              <FieldValidation v-if="$v.fruit.description.$dirty && $v.fruit.description.$invalid" :field="$v.fruit.description" />
            </div>

            <div>
              <label for="image">Image URL</label>
              <input type="text" id="image" v-model="$v.fruit.image.$model">
              <FieldValidation v-if="$v.fruit.image.$dirty && $v.fruit.image.$invalid" :field="$v.fruit.image" />
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <label for="price">Price</label>
                <input type="text" id="price" v-model="$v.fruit.price.$model">
                <FieldValidation v-if="$v.fruit.price.$dirty && $v.fruit.price.$invalid" :field="$v.fruit.price" />
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label for="color">Color</label>
                <input type="text" id="color" v-model="$v.fruit.color.$model">
                <FieldValidation v-if="$v.fruit.color.$dirty && $v.fruit.color.$invalid" :field="$v.fruit.color" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="col-span-2 sm:col-span-1">
                <label for="taste">Taste</label>
                <input type="text" id="taste" v-model="$v.fruit.taste.$model">
                <FieldValidation v-if="$v.fruit.taste.$dirty && $v.fruit.taste.$invalid" :field="$v.fruit.taste" />
              </div>

              <div class="col-span-2 sm:col-span-1">
                <label for="expires">Expiration date</label>
                <input type="date" id="expires" v-model="$v.fruit.expires.$model">
                <FieldValidation v-if="$v.fruit.expires.$dirty && $v.fruit.expires.$invalid" :field="$v.fruit.expires" />
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
import FieldValidation from '@/components/FieldValidation'
import { decimal, minValue, required, url } from 'vuelidate/lib/validators'
import { validatorHexadecimalColor } from '@/helpers'

export default {
  name: 'AddFruit',
  components: {
    BackButton,
    Card,
    FieldValidation
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
  validations: {
    fruit: {
      name: {
        required
      },
      image: {
        required,
        url
      },
      price: {
        required,
        decimal,
        minValue: minValue(0.00000001)
      },
      color: {
        required,
        validatorHexadecimalColor
      },
      description: {
        required
      },
      taste: {
        required
      },
      expires: {
        required
      }
    }
  },
  methods: {
    submit () {
      this.$v.$touch()

      if (this.$v.$invalid) {
        return false
      }

      this.$store.dispatch('storeFruit', this.fruit)
        .then(() => this.$store.dispatch('loadFruits'))
        .then(() => this.$router.push({ name: 'Home' }))
    }
  }
}
</script>
