<template>
  <div class="register">
    <div class="title">用户注册</div>
    <div class="is_existing_account">已有账号?立即登录</div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" v-model="form.password" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input placeholder="请输入邮箱" v-model="form.email" />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input placeholder="请输入姓名" v-model="form.realName" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input placeholder="请输入手机号" v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import 

const form = reactive({
  username: "",
  password: "",
  email: "",
  realName: "",
  phone: "",
});

const onSubmit = () => {
  
};
</script>

<style scoped>
.register {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
.title {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #999;
}
.is_existing_account {
  font-size: 14px;
  color: gray;
  margin: 10px 5px;
  display: flex;
  justify-content: right;
}
</style>