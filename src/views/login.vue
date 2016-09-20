<template lang="html">
  <div class="login">
    <h1 class="login_title">助学派</h1>
    <form class="login_form" class="" action="index.html" method="post">
      <label for="">用户名</label>
      <input class="login_input" type="text" name="user" value=""><br><br>
      <label for="" class="psw">密码</label>
      <input class="login_input" type="text" name="password" value=""><br><br>
      <!-- <input class="login_rs" type="reset" name="name" value="重置"> -->
      <input class="login_sub" type="button" @click="login" name="name" value="登录">
      <input class="login_sub" type="button" @click="handleGetUser" name="name" value="获取用户">
    </form>
    <div class="login_end">
      <span class="forget">忘记密码</span>
      <span class="free">免费注册</span>
    </div>
  </div>
</template>

<script>
import { getUser } from '../vuex/actions/uc'
import store from '../vuex/mutations/uc'
export default {
  data () {
    return {
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    login () {

    },
    handleGetUser () {
      this.getUser({ id: '2107147937' })
    }
  },
  components: {},
  vuex: {
    actions: {
      getUser
    }
  },
  store
}
</script>

<style lang="css">
.login {
  width: 450px;
  height: 350px;
  border: 2px solid #c7bdbb;
  margin: 0 auto;
  margin-top: 300px;
  font-family: "华文楷体";
  /*color: #2c2f2f;*/
  background: #51d1dd;
}
.login_title {
  font-size: 44px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px dashed #80898a;
  letter-spacing: 10px;
}
.login_form {
  margin-left: 70px;
  font-size: 22px;
}
.psw {
  letter-spacing: 11px;
}
.login_input {
  width: 200px;
  height: 28px;
  margin-left: 20px;
}
.login_sub {
  width: 302px;
  height: 45px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  /*border: 1px solid #c7bdbb;*/
  border-style: none;
  letter-spacing: 10px;
  background: #4ce9f8;
  font-weight: bold;
}
.login_end {
  margin-left: 230px;
  margin-top: 15px;
  font-size: 16px;
}
.forget {
  margin-right: 20px;
}
</style>
