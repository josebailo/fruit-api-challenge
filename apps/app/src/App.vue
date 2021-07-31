<template>
  <div id="app" class="min-h-screen p-3 bg-gray-200">
    <section class="max-w-xl mx-auto">
      <router-view/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('loadFruits')
  }
}
</script>
