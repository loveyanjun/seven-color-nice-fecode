<template lang="html">
  <div class="historySection">
    <div class="list-head">
      <span class="head-title">历史答题</span>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="todo in todos">
          <span class="tip">{{ $index+1 }}</span>
          <span class="text">{{ todo.text }}</span>
          <span class="num">98分</span>
          <span>2016/8/28</span>
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
        { text: '14年五年级数学下册第三单元达标测试题' },
        { text: '2014年三年级语文下册第一次阶段性测试题(北师大版)' }
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
.historySection {
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
.historySection .head-title {
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
  height: 40px;
  border-bottom: 1px dashed #80898a;
  line-height: 48px;
}
.list-content li span {
  margin-right: 40px;
}
.text{
  display: inline-block;
  width: 400px;
}
.tip {
  padding-left: 12px;
}
.num {
  color: red;
}
</style>
