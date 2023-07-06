<template>
  <div class="login">
    <div class="title">用户登录</div>
    <el-form :model="loginForm" label-width="120px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="form.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const loginForm = reactive({
  name: '',
  password: '','
})
</script>

<style scoped>
.login {
  width: 200px;
  height: 200px;
  border: 1px solid red;
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