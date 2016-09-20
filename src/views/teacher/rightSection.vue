<template lang="html">
  <div class="rightSection">
    <div class="list-head">
      <span class="head-title">题目列表</span>
      <button class="head-button" v-link="{ path: '/setQuestion'}">选择出题</button>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="question in questionList">
          <span class="tip">{{ $index+1 }}</span>
          <span>{{ question.text }}</span>
          <span class="num">35/33</span>
          <!-- <span>2016/8/28</span> -->
          <span>{{ nowTime }}</span>
          <span>{{ time | json }}</span>
          <button v-link="{ path: '/seeDetail'}">查看详情</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getList } from '../../vuex/actions/uc'
import {
  questionList
} from '../../vuex/getters/uc'

export default {
  data () {
    var nowTime = new Date()
    var year = nowTime.getFullYear()
    var month = nowTime.getMonth() + 1
    var date = nowTime.getDate()
    nowTime = year + '-' + month + '-' + date
    return {
      nowTime,
      time: { aa: 'hello world' }
    }
    // nowTime.getMonth()
      // questionList: [
      //   { text: '六年级奥数上册：第八讲 应用同余解题 习题一' },
      //   { text: '六年级奥数上册：第八讲 应用同余解题 习题二' }
      // ]
  },
  computed: {},
  filters: {
    // reverse ("reverse", function (value) {
    //   return value.split('').reverse().join()
    // })
  },
  ready () {
    this.getList()
    this.getNowTime()
  },
  watch: {
    // 'nowTime' () {
    //   var time = new Date()
    //   return time
    // }
    time () {
      console.log('hello')
      return new Date()
    }
  },
  attached () {},
  methods: {
    getNowTime () {
      var myDate = new Date()
      var year = myDate.getYear()
      return year
    }
  },
  components: {},
  vuex: {
    actions: {
      getList
    },
    getters: {
      questionList
    }
  }
}
</script>

<style lang="css">
.rightSection {
  float: right;
  width: 888px;
  height: 1000px;
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
.num {
  color: red;
}
</style>
