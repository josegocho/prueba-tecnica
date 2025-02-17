<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['login'])
const props = defineProps<{
  errorMsg: string | undefined
}>()

const loginForm = ref({
  email: '',
  password: '',
})
</script>
<template>
  <div class="flex flex-col items-center justify-center p-5 gap-5">
    <h2 class="text-4xl py-5">Bienvenido</h2>
    <p>Por favor, inicie sesión</p>
    <form class="flex flex-col gap-5" @submit.prevent="emit('login', loginForm)">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="loginForm.email"
        class="border-2 border-black border-solid rounded-md p-2"
      />
      <label for="password">Contraseña</label>
      <input
        type="password"
        name="password"
        v-model="loginForm.password"
        class="border-2 border-black border-solid rounded-md p-2"
      />
      <button type="submit" class="border-2 border-black border-solid rounded-md p-2">
        Iniciar sesión
      </button>
    </form>
    <div>{{ props.errorMsg }}</div>
  </div>
</template>
