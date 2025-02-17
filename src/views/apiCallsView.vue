<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { ApiCalls } from '@/service/apiCalls'
import type { Product, ApiCallListResponse } from '@/Interfaces'
import ProductCard from '@/components/ProductCard.vue'

const apiCalls = new ApiCalls()

const status = ref('loading')
const products: Ref<Product[]> = ref([])

async function getProducts() {
  const response: ApiCallListResponse = await apiCalls.getProductsList()
  console.log(response)
  products.value = response.data.slice(response.data.length - 10, response.data.length)
}

async function getProductById(id: number) {
  const response = await apiCalls.getProductById(id)
  console.log(response)
  //products.value = response.data
}

async function deleteProduct(id: number) {
  const response = await apiCalls.deleteProduct(id)
  console.log(response)
  //products.value = response.data
}

getProducts()
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold">API Calls</h1>
    <p>Aquí se pueden ver las llamadas a la API</p>

    <h2 class="text-2xl font-bold pt-5">Productos</h2>

    <div class="flex flex-row gap-5 items-center justify-center pt-10">
      <button
        type="button"
        class="border-2 border-black border-solid rounded-md p-2"
        @click="getProducts"
      >
        Get Products
      </button>
      <button
        type="button"
        class="border-2 border-black border-solid rounded-md p-2"
        @click="getProductById(1)"
      >
        Get Product By Id
      </button>
      <button
        type="button"
        class="border-2 border-black border-solid rounded-md p-2"
        @click="deleteProduct(1)"
      >
        Delete Product
      </button>
      <button type="button" class="border-2 border-black border-solid rounded-md p-2">
        New Product
      </button>
    </div>

    <main class="resp">
      <section class="flex flex-col pt-5" v-if="products.length > 0">
        <div class="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <div v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </section>
      <section v-else class="flex justify-center items-center py-20">
        <p v-if="status == 'loading'">Cargando...</p>
        <p v-else>No hay productos</p>
      </section>
    </main>
  </div>
</template>
