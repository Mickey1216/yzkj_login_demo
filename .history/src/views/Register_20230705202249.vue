<template>
  <div class="register">
    <div class="title">用户注册</div>
    <el-form
      :model="form"
      label-width="120px"
      ref="ruleFormRef"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入用户名" v-model="form.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password" type="password"/>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input placeholder="请输入邮箱" v-model="form.email" />
      </el-form-item>
      <el-form-item label="姓名" prop="realName">
        <el-input placeholder="请输入姓名" v-model="form.realName" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
  userName: "",
  password: "",
  email: "",
  realName: "",
  phone: ""
});

// 用户名的校验
const checkUserName = (rule, value, callback) => {
  let reg = /[\u4e00-\u9fa5a-zA-Z]{1,10}/
  if(!reg.test(value)){
    callback(new Error("请输入1-10位汉字或字母组成的用户名"))
  }else{
    callback()
  }
}

// 密码的校验
const checkPassword = (rule, value, callback) => {
  let reg = /[0-9a-zA-Z]{6,8}/
  if(!reg.test(value)){
    callback(new Error("请输入6-8位数字和字母组成的密码"))
  }else{
    callback()
  }
}

// 邮箱的校验
const checkEmail = (rule, value, callback) => {
  let reg = /[0-9a-zA-Z]{6,8}/
  if(!reg.test(value)){
    callback(new Error("请输入正确的邮箱"))
  }else{
    callback()
  }
}

// 姓名的校验
const checkRealName = (rule, value, callback) => {
  let reg = /[0-9a-zA-Z]{6,8}/
  if(!reg.test(value)){
    callback(new Error("请输入2-4位汉字"))
  }else{
    callback()
  }
}

// 手机号码的校验
const checkPhone = (rule, value, callback) => {
  let reg = /[0-9a-zA-Z]{6,8}/
  if(!reg.test(value)){
    callback(new Error("请输入正确的手机号码"))
  }else{
    callback()
  }
}


const rules = reactive({
  userName: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    { required: true, message: '请输入1-10位汉字或字母组成的用户名', trigger: 'blur', validator: checkUserName}
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    { required: true, message: '请输入6-8位数字和字母组成的密码', trigger: 'blur', validator: checkPassword}
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
      trigger: "blur"
    },
    { required: true, message: '请输入正确的邮箱', trigger: 'blur', validator: checkEmail }
  ],
  realName: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    },
    { required: true, message: '请输入2-4位汉字', trigger: 'blur', validator: checkRealName }
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    },
    { required: true, message: '请输入正确的手机号码', trigger: 'blur', validator: checkPhone }
  ]
});

// 注册按钮
const onSubmit = () => {
  axios.post('http://192.168.0.215:8080/web/api/v1/user/register', {
    userName: form.userName,
    password: form.password,
    email: form.email,
    realName: form.realName,
    phone: form.phone
  }).then(res => {
    console.log(res)
    if(res.status === 200) {
      router.push('/login')
    }
  })
};

// 取消按钮
const onCancel = () => {
  form.userName = ''
  form.password = ''
  form.email = ''
  form.realName = ''
  form.phone = ''
};

</script>

<style scoped>
.register {
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 1px solid #eee;
}
.title {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
.is_existing_account {
  font-size: 14px;
  color: gray;
  margin: 10px 5px;
  display: flex;
  justify-content: right;
}
</style>