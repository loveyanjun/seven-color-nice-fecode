<template lang="html">
  <div class="leftSection">
    <ul>
      <!-- <li v-for="todo in todos">{{ todo.text }}</li> -->
      <li v-link="{ path: '/rightSection'}">题目列表</li>
      <li v-link="{ path: '/upload'}">上传题目</li>
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
.leftSection {
  float: left;
  width: 300px;
  min-height: 1000px;
  border: 1px solid #ccc;
  border-left-width: 0;
  /*background: #5dc1f3;*/
  background: #51d1dd;
}
.leftSection ul {
  list-style: none
}
.leftSection ul li {
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
