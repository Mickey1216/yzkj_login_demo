<template>
  <div class="login">
    <div class="title">用户登录</div>
    <el-form :model="loginForm" label-width="120px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const loginForm = reactive({
  username: '',
  password: ''
})

const onLogin = () => {
  console.log("login!");
};
</script>

<style scoped>
.login {
  margin: 0 auto;
  width: 400px;
  height: 200px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title{
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #999;
}
</style>