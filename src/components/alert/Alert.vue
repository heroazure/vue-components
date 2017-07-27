<template>
  <transition name="fade">
    <div class="hx-alert">

    </div>
  </transition>

</template>
<style lang="less">
  .hx-alert{

  }
</style>
<script>
  export default{
    name: 'hx-alert',
    data(){
      return {
        msg: '我就试试可以吗？'
      }
    }
  }
</script>
