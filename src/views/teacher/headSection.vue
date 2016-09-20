<template lang="html">
  <div class="headSection">
     <h1 class="head-title">助学派</h1>
     <div class="identity">
       <span>老师：<span class="name">Toney</span></span>
     </div>
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
.headSection {
  width: 1200px;
  height: 100px;
  border-top: 1px solid #c7bdbb;
  border-bottom: 2px solid #c7bdbb;
  text-align: center;
  margin-bottom: 10px;
  /*为什么这里一定要加border-top才能跟顶端对齐*/
  background: #51d1dd;
}
.head-title {
  font-size: 44px;
  letter-spacing: 25px;
}
.identity {
  text-align: right;
  margin-top: -50px;
  margin-right: 70px;
  font-weight: bold;
}
.name {
  color: red;
}
</style>
