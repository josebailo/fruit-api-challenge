<template>
  <div>
    <BackButton />
    <div class="mt-5">
      <FruitCard v-if="fruit" :fruit="fruit" />
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'
import FruitCard from '@/components/FruitCard'

export default {
  name: 'Fruit',
  components: {
    BackButton,
    FruitCard
  },
  computed: {
    fruit () {
      return this.$store.getters.getFruitById(this.$route.params.id)
    }
  }
}
</script>
