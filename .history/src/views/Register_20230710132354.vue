<template>
  <div class="register_Ct">
    <div class="register">
    <div class="title">注册</div>
    <div class="form">
      <el-form
        :model="form"
        label-width="120px"
        ref="ruleFormRef"
        :rules="rules"
      >
        <div class="form_inputs">
          <el-form-item label-width="0" prop="userName">
            <el-input class="form_input" placeholder="请输入用户名" v-model="form.userName">
              <template #prepend>
                <el-button :icon="User" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="password">
            <el-input
              class="form_input"
              placeholder="请输入密码"
              v-model="form.password"
              type="password"
            >
              <template #prepend>
                <el-button :icon="Lock" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="email">
            <el-input class="form_input" placeholder="请输入邮箱" v-model="form.email">
              <template #prepend>
                <el-button :icon="Message"></el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="phone">
            <el-input class="form_input" placeholder="请输入手机号" v-model="form.phone">
              <template #prepend>
                <el-button :icon="Iphone" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label-width="0" prop="authCode">
            <div class="auth_area">
              <el-input class="form_input auth_input" placeholder="请输入验证码" v-model="form.authCode" />
              <img class="auth_code_img" :src="authcodeUrl" @click="refreshAuthCode"/>
            </div>
          </el-form-item>
        </div>
        <div class="btn">
          <el-form-item label-width="0">
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
  </div>
</template>

<script setup>
import { reactive, computed  } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { User, Lock, Avatar, Message, Iphone } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

const router = useRouter();

const form = reactive({
  userName: "",
  password: "",
  email: "",
  phone: "",
  authCode: "",
});

// 验证码的请求地址
let authcodeUrl = computed(() => {
  return `http://localhost:3000/user/authcode?${Math.random()}`;
});

// 验证码刷新
const refreshAuthCode = () => {
  authcodeUrl = `http://localhost:3000/user/authcode?${Math.random()}`;
};

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

// 邮箱的校验
const checkEmail = (rule, value, callback) => {
  let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的邮箱"));
  } else {
    callback();
  }
};

// 手机号码的校验
const checkPhone = (rule, value, callback) => {
  let reg =
    /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的手机号码"));
  } else {
    callback();
  }
};

// 验证码的校验
const checkAuthCode = (rule, value, callback) => {
  let reg =
    /^[0-9a-zA-Z]{4}$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正确的验证码"));
  } else {
    callback();
  }
};

const rules = reactive({
  userName: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入1-10位汉字或字母组成的用户名",
      trigger: "blur",
      validator: checkUserName,
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入6-8位数字和字母组成的密码",
      trigger: "blur",
      validator: checkPassword,
    },
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入正确的邮箱",
      trigger: "blur",
      validator: checkEmail,
    },
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入正确的手机号码",
      trigger: "blur",
      validator: checkPhone,
    },
  ],
  authCode: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
    {
      required: true,
      message: "请输入正确的验证码",
      trigger: "blur",
      validator: checkAuthCode,
    },
  ],
});

// 注册按钮
const onSubmit = () => {
  // ElMessage({
  //   message: '注册成功！',
  //   grouping: true,
  //   type: 'success',
  // })
  // router.push({
  //   path: "/login",
  // });

  axios
    .post("http://localhost:3000/user/register", {
      userName: form.userName,
      password: form.password,
      email: form.email,
      phone: form.phone,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.push({
          path: "/login",
        });
      }
    });
};
</script>

<style scoped>
.register_Ct{
  width: 100%;
  height: 100%;
  background: url('../assets/bgImg.jpg') no-repeat center center fixed;
  background-size: cover;
}
.register {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  box-shadow: -4px 4px 10px rgb(145, 137, 137);
  color: #3399ff;
}
.title {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  letter-spacing: 30px;
  font-weight: bolder;
}
.form_inputs{
  text-align: center;
}
.form_input{
  width: 220px;
  height: 34px;
  margin: 5px 0px;
}
:deep().el-input__inner::placeholder{
  color: #3399FF;
}
:deep().el-input-group__prepend {
  width: 30px;
  padding: 0px;
}
:deep().el-input-group__prepend > button {
  display: flex;
}
:deep().el-form-item__content{
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-button{
  width: 220px;
  height: 40px;
  border-radius: 20px;
  background-color:rgb(255, 255, 255, 0)
}
.auth_area{
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth_code_img{
  width: 100px;
  height: 34px;
}
.auth_code_img:hover{
  cursor: pointer;
}
.auth_input{
  width: 100%;
}
:deep().el-form-item__error{
  color:#FFCC99;
}
:deep().el-form-item.is-error .el-input__wrapper{
  box-shadow: 0 0 0 1px #FFCC99 inset;
}
</style>
