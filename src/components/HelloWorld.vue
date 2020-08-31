<template>
  <div class="hello">
    <aa></aa>
    <bb></bb>
    <cc></cc>
    <dd></dd>
    <el-input v-model="input"
              placeholder="请输入内容"></el-input>
    <el-input-number v-model="input"
                     :min="1"
                     :max="10"
                     label="描述文字"></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      input: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
