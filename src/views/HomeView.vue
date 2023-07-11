<script setup>
import { ref } from 'vue'

const email = ref(null)
const password = ref(null)
const err = ref(!1)

</script>
<template>
  <main class=" grid items-center bg-zinc-700 text-gray-100 h-screen">

    <div class="bg-black border border-gray-800 rounded-md max-w-[380px] p-7 mx-auto">
      <h1 class="text-3xl font-bold text-zinc-400">Welcome back</h1>
      <p class="mt-5 text-sm text-gray-400">Sign in to your account</p>
      <div class="grid gap-4 mt-10">
        <label class="grid font-light text-[13px] text-gray-400">Email <input v-autofocus class="text-gray-300 border border-gray-500 rounded px-3 min-h-[39px] bg-transparent outline-none text-base mt-1" type="email" v-model="email"></label>
        <label class="grid font-light text-[13px] text-gray-400">Password <input class="text-gray-300 border border-gray-500 rounded px-3 min-h-[39px] bg-transparent outline-none text-base mt-1" type="password" v-model="password"></label>
        <button class="mt-3 bg-blue-700 px-3 rounded min-h-[35px] text-gray-100">Sign in</button>
      </div>
      <div :class="err ? '' : 'hidden'" class="grid items-center  mt-5 rounded bg-red-700 text-center text-xs min-h-[28px]">
        Invalid email/password.
      </div>
      <div class="text-center text-sm mt-8 text-gray-400">
        Don't have an account? <RouterLink to="/" class="text-blue-600">Sign up</RouterLink>
      </div>
    </div>
  </main>
</template>