<script setup>
import { ref, onBeforeMount } from 'vue';
import Table from '../components/Table.vue';
import PageTitle from '../components/PageTitle.vue';

const listing = ref([])
const isError = ref(null)
const searchData = ''
const isDialogOpen = ref(!0)

function setIsOpen(value) {
  isDialogOpen.value = value
}

async function filterName(v = '') {
  v = v.trim();
  if (v == "") {
    loadListing()
    return
  }
  v = v.replace(/\s/g, '+');
  const s = await fetch(`https://retoolapi.dev/ONtGME/contact?Name=${v}`, {
    cache: 'no-cache',
  }).catch(() => {
    isError.value = "Error. Cannot retrieve."
  })
  if (s.status === 200) {
    const t = await s.json();
    isError.value = null
    listing.value = []
    listing.value = t
  }
}

async function loadListing () {
  const s = await fetch('https://retoolapi.dev/ONtGME/contact', {
    cache: 'no-cache',
    credentials: 'include',
  })
  .then((r) => r.json())
  .then((r) => {
    isError.value = null
    listing.value = []
    listing.value = r
  })
  .catch((e) => {
    console.log(e)
    isError.value = "Error. Cannot retrieve."
  })
}

onBeforeMount(() => {
  loadListing()
})

</script>

<template>
  <div class="px-5 w-full overflow-scroll">
    <PageTitle title="Customers" />
      <label class="flex gap-4 items-center px-3 border border-[#777] max-w-xl rounded w-full">
        <svg class="w-6 h-6 fill-none stroke-2 stroke-zinc-400">
          <circle cx="10" cy="10" r="7"></circle>
          <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>

        <input v-autofocus class="
          disabled:opacity-50
          disabled:cursor-not-allowed
          bg-transparent
          focus:outline-none
          min-h-[38px]
          placeholder-gray-400
          text-gray-200
          text-sm
          font-normal
          w-full"
        v-model="searchData"
        @input="filterName(searchData)"
        type="text" placeholder="Search">
      </label>
      
    <div class="grid gap-5">

      <div class="my-5">
        <div v-if="isError">{{ isError }}</div>
        <Table :data="listing" />
        <div v-if="listing != ''">
          <a href="" rel="prev">&larr; Previous</a>
          <a href="" rel="next">Next &rarr;</a>
        </div>
      </div>
      
    </div>
  </div>
</template>