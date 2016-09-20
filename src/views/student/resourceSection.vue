<template lang="html">
  <div class="resourceSection">
    <div class="list-head">
      <span class="head-title">资源推送</span>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="todo in todos">
          <span class="tip">{{ $index+1 }}</span>
          <span class="text">{{ todo.text }}</span>
          <button class="resourceDetail">查看详情</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
        { text: '六年级奥数上册：第八讲 应用同余解题 习题一' },
        { text: '六年级奥数上册：第八讲 应用同余解题 习题二 ' }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.resourceSection {
  float: right;
  width: 888px;
  height: 700px;
  border: 1px solid #ccc;
  border-right-width: 0;
  font-family: "微软雅黑";
  background: #51d1dd;
}
.list-head {
  width: 888px;
  height: 70px;
  /*border-bottom: 1px dashed #ccc;*/
  margin-top: 40px;
}
.resourceSection .head-title {
  font-size: 28px;
  letter-spacing: 20px;
  margin-left: 300px;
}
.list-content {
  width: 750px;
  height: 550px;
  /*border: 1px solid green;*/
  margin: 0 auto;
  margin-top: 40px;
  font-size: 16px;
  color: #2c3e50;
}
.list-content ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.list-content li{
  width: 750px;
  min-height: 40px;
  border-bottom: 1px dashed #80898a;
  line-height: 48px;
}
.list-content li span {
  margin-right: 40px;
}
.tip {
  padding-left: 12px;
}
.text {
  display: inline-block;
  margin-left: 30px;
  width: 400px;
}
.resourceDetail{
  margin-left: 50px;
}
</style>
