<template>
  <div class="list">
    <div class="title">用户基本信息展示</div>
    <el-table :data="userInfoList" style="width: 800px;">
      <el-table-column prop="username" label="用户名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="realName" label="姓名" width="180"/>
      <el-table-column prop="phone" label="手机号" width="180"/>
    </el-table>
  </div>
</template>

<script setup>
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
  width: 1000px;
  height: 100%;
  border: 1px solid ;
}
.title{
  margin: 20px 0;
  font-size: 18px;
  color: grey;
  display: flex;
  justify-content: center;
}
</style>