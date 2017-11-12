<template>
  <mt-search
    v-model="searchValue"
    cancel-text="取消"
    placeholder="搜索">
  </mt-search>
</template>


<script>
  import { Search } from 'mint-ui';
  export  default {
    data(){
      return{
        searchValue:'',
      }
    }
  }
</script>

<style>

</style>
