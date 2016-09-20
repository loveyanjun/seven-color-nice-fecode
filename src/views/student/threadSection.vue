<template lang="html">
  <div class="threadSection">
    <ul>
      <!-- <li v-for="todo in todos">{{ todo.text }}</li> -->
      <li v-link="{ path: '/historySection'}">历史答题</li>
      <li v-link="{ path: '/addSection'}">新增答题</li>
      <li v-link="{ path: '/resourceSection'}">资源推送</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
.threadSection {
  float: left;
  width: 300px;
  height: 700px;
  border: 1px solid #ccc;
  border-left-width: 0;
  background: #51d1dd;
  /*background: #f47d99;*/
}
.threadSection ul {
  list-style: none;
}
.threadSection ul li {
  width: 220px;
  height: 50px;
  border: 1px solid #ccc;
  margin-top: 70px;
  background: white;
  text-align: center;
  line-height: 45px;
  letter-spacing: 6px;
  font-weight: bold;
  font-size: 22px;
}
</style>
