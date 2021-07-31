<template>
  <div id="app" class="min-h-screen p-3 pb-10 bg-gray-300 text-black antialiased">
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
