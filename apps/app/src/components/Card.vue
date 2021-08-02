<template>
  <div class="shadow rounded-md overflow-hidden">
    <div v-if="$slots.header">
      <slot name="header" />
    </div>

    <div class="p-4 bg-white sm:p-6">
      <slot />
    </div>

    <div v-if="$slots.footer" class="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <slot name="footer" />
    </div>
  </div>
</template>
