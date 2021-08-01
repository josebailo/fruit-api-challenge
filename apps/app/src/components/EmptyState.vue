<template>
  <div class="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p class="mt-1 font-medium"><slot /></p>
    <p v-if="$slots.description" class="mt-1 text-gray-500"><slot name="description" /></p>
  </div>
</template>
