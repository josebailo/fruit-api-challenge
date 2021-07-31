<template>
  <div id="app" class="bg-gray-200 p-3">
    <section>
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
