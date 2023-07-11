<script setup>
import PageTitle from '@/components/PageTitle.vue'
import Table from '@/components/Table.vue'

import { defineAsyncComponent, h } from 'vue'
const notifications = new Map()
const AlertMessage = defineAsyncComponent(() => import('@/components/AlertMessage.vue'))
notifications.set(notifications.size, h(AlertMessage, 
  { title: 'What\'s New', message: 'Hello World' }
))
</script>

<template>
  <div class="px-5 w-full overflow-scroll">
    
    <PageTitle title="Today" />
    <div>

      <component :is="node" v-for="[el, node] in notifications" :key="el"></component>
  
    </div>
  
  </div>
</template>
  
<style>
:root{ scrollbar-color: rgb(128,128,128) rgb(38,63,82) }
* { scrollbar-width: thin }
</style>
