<template lang="html">
  <div class="rightSection">
    <div class="list-head">
      <span class="head-title">新增答题</span>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="todo in todos">
          <span class="tip">{{ $index+1 }}</span>
          <span>{{ todo.text }}</span>
          <span class="teacherName">李莉老师</span>
          <span>2016/8/28</span>
          <button>查看</button>
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
        { text: '六年级奥数上册：第八讲 应用同余解题 习题二' }
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
.rightSection {
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
.rightSection .head-title {
  font-size: 28px;
  letter-spacing: 20px;
  margin-left: 300px;
}
.head-button {
  width: 100px;
  height: 40px;
  font-size: 20px;
  margin-left: 680px;
  margin-top: -120px;
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
  height: 40px;
  border-bottom: 1px dashed #80898a;
  line-height: 48px;
}
.list-content li span {
  margin-right: 40px;
}
.tip {
  padding-left: 12px;
}
.teacherName {
  color: red;
}
</style>
