<template lang="html">
  <div class="setQuestion rightSection">
    <div class="set-head">
      <p class="set-title">选择出题</p>
    </div>
    <div class="set-content">
      <form class="setting" action="" method="post">
        <div class="con-select">
          <select class="select" name="subject">
            <option value="语文">语文</option>
            <option value="数学">数学</option>
            <option value="英语">英语</option>
            <option value="物理">物理</option>
            <option value="化学">化学</option>
            <option value="历史">历史</option>
          </select>
          <select class="select" name="subject">
            <option value="语文">风筝</option>
            <option value="数学">从百草园到三味书屋</option>
            <option value="英语">社戏</option>
            <option value="物理">祝福</option>
            <option value="化学">藤野先生</option>
            <option value="历史">狂人日记</option>
          </select>
          <button class="set-but" type="button" name="button">确定</button>
        </div>
        <div class="con-box">
          <span class="same"><input type="checkbox" name="all" value="全部">全部</span>
          <span class="same"><input type="checkbox" name="none" value="全无">全无</span>
        </div>
        <div class="con-radio">
          <!-- <input type="radio" name="name" value="">一年级语文期末复习题（上册）<br>
          <input type="radio" name="name" value="">一年级语文期末复习题（上册） -->
          <ul>
            <li v-for="item in items">{{{ item.text }}}</li>
          </ul>
          <button class="con-but">出题</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { text: '<input type="checkbox" name="name" value="">一年级语文期末复习题（上册）' },
        { text: '<input type="checkbox" name="name" value="">一年级语文期末复习题（下册）' }
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
  border: 1px solid #80898a;
  border-right-width: 0;
  font-family: "微软雅黑";
  background: #51d1dd;
}
.set-head {
  width: 888px;
  height: 50px;
  /*border-bottom: 1px dashed #ccc;*/
  /*background: red;*/
  margin-top: 18px;
}
.rightSection .set-title {
  font-size: 28px;
  letter-spacing: 20px;
  margin-left: 300px;
}
.set-content {
  width: 750px;
  height: 550px;
  /*最后height应该设置为auto*/
  margin: 0 auto;
  /*border: 1px solid red;*/
}
.con-select {
  border-bottom: 3px solid #ccc;
}
.select {
  width: 180px;
  height: 30px;
  font-size: 16px;
  margin: 20px 20px 20px 40px;
}
.set-but {
  width: 70px;
  height: 30px;
}
.con-box {
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 3px solid #ccc;
}
.same {
  margin-right: 50px;
  margin-left: 30px;
}
.con-radio {
  width: 750px;
  height: 400px;
  margin: 0 auto;
  margin-top: 5px;
  font-size: 16px;
  color: #2c3e50;
  /*background: red;*/
}
.con-radio ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
.con-radio li{
  width: 750px;
  height: 40px;
  border-bottom: 1px dashed #80898a;
  line-height: 48px;
  padding-left: 10px;
}
.con-but {
  width: 100px;
  height: 40px;
  margin-top: 40px;
  margin-left: 300px;
  font-size: 20px;
  letter-spacing: 10px;
}
</style>
