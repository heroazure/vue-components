<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hx-alert></hx-alert>
    <hx-editor
      upload-url="http://localhost:8080/upload"
      v-model="content"
      file-name="file"
      file-upload-way="thirdParty"
      :max-size="1024">
    </hx-editor>
    <div v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '组件化',
        content:'<h2>我是标题</h2>'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
