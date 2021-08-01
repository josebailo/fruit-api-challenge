<template>
  <div>
    <BackButton />
    <div class="mt-5">
      <FruitCard v-if="fruit" :fruit="fruit" />

      <EmptyState v-else class="mt-10">
        The fruit doesn't exists
      </EmptyState>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'
import EmptyState from '@/components/EmptyState'
import FruitCard from '@/components/FruitCard'

export default {
  name: 'ShowFruit',
  components: {
    BackButton,
    EmptyState,
    FruitCard
  },
  computed: {
    fruit () {
      return this.$store.getters.getFruitById(this.$route.params.id)
    }
  }
}
</script>
