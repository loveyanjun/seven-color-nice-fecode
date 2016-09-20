<template>
  <div id="app">
    <!-- <login></login> -->
    <head-Section></head-Section>
    <left-Section></left-Section>
    <!-- <thread-Section></thread-Section> -->
    <router-view></router-view>
    <!-- <right-Section></right-Section> -->
    <!-- <set-Question></set-Question>
    <see-Detail></see-Detail>
    <upload></upload> -->
  </div>
</template>

<script>
import Hello from './components/Hello'
import login from './views/login'
import headSection from './views/teacher/headSection'
import leftSection from './views/teacher/leftSection'
import store from './vuex/mutations/uc'
// import rightSection from './views/rightSection'
// import setQuestion from './views/setQuestion'
// import seeDetail from './views/seeDetail'
// import upload from './views/upload'
import threadSection from './views/student/threadSection'

export default {
  components: {
    Hello,
    login,
    headSection,
    leftSection,
    threadSection
    // rightSection
    // setQuestion,
    // seeDetail
    // upload
  },
  store
}
</script>

<style>
html {
  /*height: 100%;*/
}

body {
  margin: 0 auto;
  height: 100%;
  /*background: #b4c99e;*/
  /*background: #c7bdbb;*/
  /*background: #4b636d;*/
}

#app {
  width: 1200px;
  /*border:1px solid #ccc;*/
  margin: 0 auto;
  font-family: "宋体";
}

#app a {
  color: #42b983;
  text-decoration: none;
}
ul {
  list-style: none;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
