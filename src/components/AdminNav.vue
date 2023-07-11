<script setup>
import { ref } from '@vue/reactivity';

const isOpen = ref(null);

function collapse(str = '') {
  isOpen.value = isOpen.value == str ? '' : str
}
</script>
<template>
    <div class="px-4 absolute md:relative md:w-min bg-neutral-800 text-gray-200">
      <nav aria-label="Main" class="
        select-none
        grid
        grid-cols-1
        justify-start
        items-center
        text-xl
        lg:text-sm
        min-w-[12rem]
        mt-4
        [&>*]:px-2
        [&>*]:py-2
        text-zinc-300
      ">

      
        <RouterLink to="/today" class="flex items-center">
          <div class="min-w-[40px]">
            <svg role="presentation" class="w-5 h-5 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24">
              <path d="M14 4h6v6h-6z"/>
              <path d="M4 14h6v6h-6z"/>
              <circle cx="17" cy="17" r="3"/>
              <circle cx="7" cy="7" r="3"/>
            </svg>
            <!-- <svg role="presentation" class="w-5 h-5 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
            </svg> -->
          </div>
          Today
        </RouterLink>

        <RouterLink to="/sales" class="flex items-center"
          :aria-expanded="isOpen == 'sales'" aria-controls="sales" @click="collapse('sales')"
        >
          <div class="min-w-[40px]">
            <svg role="presentation" class="w-5 h-5 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="2"></rect>
              <path d="M9 17v-5"/>
              <path d="M12 17v-1"/>
              <path d="M15 17v-3"/>
            </svg>
          </div>
          Sales
        </RouterLink>
        <div
          role="region"
          :class="{'hidden': isOpen != 'sales'}"
          class="grid gap-2 overflow-hidden mb-1"
        >
          <RouterLink to="/today">Sub Menu 1</RouterLink>
        </div>

        
        <RouterLink to="/products" class="flex items-center">
          <div class="min-w-[40px]">
            <svg role="presentation" class="w-5 h-5 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
          Products
        </RouterLink>
        <RouterLink to="/finance" class="flex items-center">
          <div class="min-w-[40px]">
            <svg role="presentation" class="mr-2.5 w-6 h-6 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
              <line x1="9" y1="7" x2="10" y2="7"/>
              <line x1="9" y1="13" x2="15" y2="13"/>
              <line x1="13" y1="17" x2="15" y2="17"/>
            </svg>
          </div>
          Finance
        </RouterLink>

        <RouterLink to="/customers" class="flex items-center">
          <div class="min-w-[40px]">
            <svg role="presentation" class="w-5 h-5 stroke-zinc-400 fill-none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="7" r="4"/>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
            </svg>
          </div>
          Customers
        </RouterLink>

        <RouterLink to="/documentations" class="flex items-center">
        <div class="min-w-[40px]">
          <svg role="presentation" class="w-5 h-5 stroke-zinc-400 stroke-[1.75] fill-none" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="m11 7h-5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5"/>
            <line x1="10" x2="20" y1="14" y2="4"/>
            <polyline points="15 4 20 4 20 9"/>
          </svg>
        </div>
        Documentations
        </RouterLink>

        <RouterLink to="/customers" class="flex items-center">
          <div class="min-w-[40px]">
            <svg role="presentation" class="w-5 h-5 stroke-zinc-400 fill-none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="9"/>
              <path d="M9 12l2 2l4 -4"/>
            </svg>
          </div>
          Tick
        </RouterLink>


      </nav>
    </div>
  </template>