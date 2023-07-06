<template>
  <div class="list">
    <div class="title">用户基本信息展示</div>
    <el-table :data="userInfoList" style="width: 700px;" stripe border>
      <el-table-column prop="username" label="用户名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="realName" label="姓名" width="180"/>
      <el-table-column prop="phone" label="手机号" width="180"/>
    </el-table>
    <el-pagination layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

onMounted(async () => {
  const 
})

const userInfoList = [
  {
    username: 'll',
    email: '383449174@qq.com',
    realName: 'liulu',
    phone: '18181599195'
  },
  {
    username: 'll',
    email: '383449174@qq.com',
    realName: 'liulu',
    phone: '18181599195'
  }
]
</script>

<style scoped>
.list{
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title{
  margin: 20px 0;
  font-size: 18px;
  color: grey;
  display: flex;
  justify-content: center;
}
</style>