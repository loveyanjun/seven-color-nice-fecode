<template lang="html">
  <div class="upload rightSection">
    <!-- <button class="upload-but">上传</button> -->
    <form class="" action="" method="post">
      <input class="upload-but" type="file" />
    </form>
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
.rightSection {
  float: right;
  width: 888px;
  min-height: 1000px;
  border: 1px solid #ccc;
  border-right-width: 0;
  font-family: "微软雅黑";
}
.upload-but {
  width: 550px;
  height: 34px;
  margin-left: 100px;
  margin-top: 50px;
  font-size: 20px;
  letter-spacing: 10px;
  text-align: center;
}
</style>
