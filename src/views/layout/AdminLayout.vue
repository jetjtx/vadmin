<script setup>
import NavBar from '@/components/NavBar.vue'
import AdminNav from '@/components/AdminNav.vue'
import AppMain from '@/components/AppMain.vue'

</script>
<template>
    <div class="grid grid-rows-[auto,_minmax(0,_1fr)] h-screen text-gray-50">
        <NavBar />
        <div class="flex">
            <AdminNav />
            <AppMain />
        </div>
    </div>
</template>
