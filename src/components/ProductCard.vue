<script lang="ts" setup>
import type { Product } from '@/Interfaces'
const props = defineProps<{
  product: Product
}>()
</script>
<template>
  <div class="">
    <img :src="props.product.images[0]" :alt="props.product.title" class="w-full" />
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold">{{ props.product.title }}</h3>
      <p class="text-sm">{{ props.product.description }}</p>
    </div>
    <div class="flex flex-col gap-5 pt-3">
      <p class="text-sm">
        <span class="font-bold">Precio:</span>
        ${{ props.product.price }}
      </p>
      <span class="font-bold">Categoría: {{ props.product.category.name }}</span>
    </div>
  </div>
</template>
