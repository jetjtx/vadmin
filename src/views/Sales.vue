<script setup>
import { ref } from 'vue'
import PageTitle from '../components/PageTitle.vue'

let tab = ref('sales');
const optiopop = ref(!1)

</script>

<template>
  <div class="flex w-full">
    
    <div class="px-5 w-full overflow-auto">
      <PageTitle title="Sales" />
      
      <!-- Tab -->
      <div class="mb-4 flex gap-3">
        <button
          :class="tab != 'sales' ? 'text-[#c7c5c3]' : 'border-b-[3px] border-blue-500'"
          class="px-2 py-1"
          @click="tab = 'sales'"
          aria-selected="false"
          role="tab"
          type="button"
          tabindex="0">Live</button>
        <button
          :class="tab != 'forecast' ? 'text-[#c7c5c3]' : 'border-b-[3px] border-blue-500'"
          class="px-2 py-1"
          @click="tab = 'forecast'"
          aria-selected="false"
          role="tab"
          type="button"
          tabindex="0">Forecast</button>
      </div>

      <div class="grid gap-3">
        <div v-show="tab == 'forecast'">
          <p>Forcast</p>
        </div>

        <div class="grid gap-3" v-show="tab == 'sales'">
          <div class="px-4 py-3 rounded-md bg-zinc-600 w-full min-h-[10rem]">
            <p class="text-xl font-bold">Daily Revenue</p>
            <p class="text-3xl font-bold">$ 2.2K</p>
          </div>

          <div class="flex gap-3">
            <div class="px-4 py-3 rounded-md bg-zinc-600 w-full min-h-[10rem]">
              <p class="text-xl font-bold">Daily Orders</p>
              
            </div>
            <div class="px-4 py-3 rounded-md bg-zinc-600 w-full min-h-[10rem]">
              <p class="text-xl font-bold">New Customers</p>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>
  
<style>
</style>
