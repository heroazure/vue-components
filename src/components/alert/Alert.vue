<template>
  <div class="alert">
    {{msg}}
  </div>
</template>
<style lang="less" scoped>
  .alert{
    background-color: #fff;
    display: flex;
    transform: translateX(30px);
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
