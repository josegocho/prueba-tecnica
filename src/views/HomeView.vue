<script setup lang="ts">
import { ref, type Ref, computed } from 'vue'

const inputText: Ref<string> = ref('')

const invertedText = computed(() => {
  return inputText.value.split('').reverse().join('')
})
</script>

<template>
  <main class="flex flex-col items-center justify-center p-5 gap-5">
    <h3 class="text-xl">Invierte el texto escrito en el input</h3>
    <input
      type="text"
      class="border-2 border-black border-solid rounded-md p-2"
      v-model="inputText"
    />

    <p class="mt-5">El texto escrito es: {{ invertedText }}</p>
  </main>
</template>
