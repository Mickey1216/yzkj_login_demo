<template>
  <div class="login_ct">
    <div class="login">
      <div class="title">登录</div>
      <div class="form">
        <el-form :model="loginForm" label-width="120px" :rules="rules">
          <div class="form_inputs">
            <el-form-item label-width="0" prop="userName">
              <el-input
                class="form_input"
                placeholder="请输入用户名"
                v-model="loginForm.userName"
              >
                <template #prepend>
                  <el-button :icon="User" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label-width="0" prop="password">
              <el-input
                class="form_input"
                placeholder="请输入密码"
                v-model="loginForm.password"
                type="password"
              >
                <template #prepend>
                  <el-button :icon="Lock" />
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class="form_btns">
            <el-form-item label-width="0">
              <el-button type="primary" @click="onLogin">登录</el-button>
            </el-form-item>
          </div>
        </el-form>
        <div class="noAccount">
          没有账户?<router-link to="register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Lock } from "@element-plus/icons-vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { reactive } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const loginForm = reactive({
  userName: "",
  password: "",
});

// 用户名的校验
const checkUserName = (rule, value, callback) => {
  let reg = /[\u4e00-\u9fa5a-zA-Z]{1,10}/;
  if (!reg.test(value)) {
    callback(new Error("请输入1-10位汉字或字母组成的用户名"));
  } else {
    callback();
  }
};

// 密码的校验
const checkPassword = (rule, value, callback) => {
  let reg = /[0-9a-zA-Z]{6,8}/;
  if (!reg.test(value)) {
    callback(new Error("请输入6-8位数字和字母组成的密码"));
  } else {
    callback();
  }
};

const rules = reactive({
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      required: true,
      message: "请输入1-10位汉字或字母组成的用户名",
      trigger: "blur",
      validator: checkUserName,
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      required: true,
      message: "请输入6-8位数字和字母组成的密码",
      trigger: "blur",
      validator: checkPassword,
    },
  ],
});

const onLogin = () => {
  let userName = loginForm.userName.trim();
  let password = loginForm.password.trim();

  axios
    .post("http://127.0.0.1:3000/auth/login", {
      userName,
      password,
    })
    .then((res) => {
      console.log("login", res);
      if (res.data.code === 200) {
        ElMessage({
          message: `欢迎您，尊敬的${userName}`,
          type: "success",
          duration: 2000
        });
        localStorage.setItem("token", res.data.data.access_token);
        router.push("/list");
      } else {
        ElMessage({
          message: "登录失败，请检查用户名和密码",
          type: "error",
          duration: 2000
        });
        loginForm.password = "";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped>
.login_ct {
  width: 100%;
  height: 100%;
  background: url("../assets/bgImg.jpg") no-repeat center center fixed;
  background-size: cover;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  box-shadow: -4px 4px 10px rgb(145, 137, 137);
  color: #3399ff;
}
.title {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  letter-spacing: 30px;
  font-weight: bolder;
}
.form {
  width: 300px;
  margin: 30px 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form_inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep().el-input__inner::placeholder {
  color: #3399ff;
}
.form_btns {
  width: 280px;
}
.form_input {
  width: 220px;
  height: 34px;
  margin: 5px 0px;
}
.noAccount {
  color: #fff;
}
a {
  color: #3399ff;
  text-decoration: none;
  padding-left: 10px;
}
:deep().el-input-group__prepend {
  width: 30px;
  padding: 0px;
}
:deep().el-input-group__prepend > button {
  display: flex;
}
.el-button {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255, 0);
}
:deep().el-form-item__error {
  color: #ffcc99;
}
:deep().el-form-item.is-error .el-input__wrapper {
  box-shadow: 0 0 0 1px #ffcc99 inset;
}
</style>
