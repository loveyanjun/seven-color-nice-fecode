<template lang="html">
<div class="seeDetail rightSection">
  <div class="see-content">
    <div class="con-box">
      <span class="same"><input type="checkbox" name="all" value="全部">全部</span>
      <span class="same"><input type="checkbox" name="none" value="全无">全无</span>
    </div>
    <div class="con-stu">
      <ul>
        <li v-for="student in students">
          <span class="tip">{{{ student.text }}}</span>
          <span class="num">94</span>
          <span>2016/8/28</span>
          <button>答题情况</button>
        </li>
      </ul>
      <button class="con-but">推送资源</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      students: [
        { text: '<input type="checkbox" name="name" value="学生A">学生A</li>' },
        { text: '<input type="checkbox" name="name" value="学生A">学生A</li>' }
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
  min-height: 1000px;
  border: 1px solid #ccc;
  border-right-width: 0;
  font-family: "微软雅黑";
}
.see-content {
  width: 750px;
  height: 550px;
  margin: 0 auto;
  margin-top: 70px;
  /*background: red;*/
}
.con-box {
  padding-top: 10px;
  padding-bottom: 15px;
  border-top: 3px solid #ccc;
  border-bottom: 1px dashed #ccc;
}
.same {
  margin-right: 50px;
  margin-left: 30px;
}

.con-stu {
  width: 750px;
  height: 480px;
  /*border: 1px solid red;*/
  margin: 0 auto;
  /*margin-top: 40px;*/
  font-size: 16px;
  color: #2c3e50;
}
.con-stu ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.con-stu li{
  width: 750px;
  height: 40px;
  border-bottom: 1px dashed #ccc;
  line-height: 48px;
}
.con-stu li span {
  margin-right: 140px;
}
.tip {
  padding-left: 30px;
}
.num {
  color: red;
}
.con-but {
  font-family: "微软雅黑";
  width: 130px;
  height: 40px;
  margin-top: 40px;
  margin-left: 300px;
  font-size: 18px;
}
</style>
