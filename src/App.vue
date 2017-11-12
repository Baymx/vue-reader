<template>
  <div id="app">
    <keep-alive>

     <router-view  v-if="$route.meta.keepAlive"/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
