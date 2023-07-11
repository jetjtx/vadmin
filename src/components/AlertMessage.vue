<script setup>
import { ref, onBeforeUnmount } from 'vue';

defineProps({
    type: String,
    title: String,
    message: String
})

const asd = ref(!0)

onBeforeUnmount(() => {
})

const close = () => {
  asd.value = !1
}

</script>

<template>
<div v-if="asd" class="rounded-[6px] overflow-hidden">
  <div class="
    flex
    p-4
    border-l-4
  border-l-[#10b980]
  bg-gray-700
    "
  >
  <div class="w-full">
    <div class="flex justify-between w-full">
      <h1 class="text-base font-semibold">{{ title }}</h1>
      <button type="button" aria-label="Close" @click="close">
      
      <svg class="w-6 h-6 stroke-2 stroke-white fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>

      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"><g transform="translate(3.966 3.568)"><path d="m0-.001 17.435 18.213M0 18.212 17.435 0" style="opacity:1;fill:#eee;stroke:#eee;stroke-width:3.23161912;stroke-linecap:round;stroke-miterlimit:4;fill-opacity:1;stroke-opacity:1"/></g></svg> -->
      </button>
    </div>
    <div>
      <p class=" text-sm font-light">{{ message }}</p>
    </div>
  </div>
    
  </div>
</div>

</template>

<style>
</style>