<!-- <template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template> -->

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter, .fade-enter-from {
  opacity: 0;
}
</style>
