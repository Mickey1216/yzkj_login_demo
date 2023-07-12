<template>
  <div class="list">
    <div class="logout">登出</div>
    <div class="title">用户基本信息展示</div>
    <el-table :data="state.userInfoList" style="width: 540px" stripe border>
      <el-table-column prop="userName" label="用户名" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="phone" label="手机号" width="180" />
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="totalSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import axios from "axios";

const currentPage = ref(1);
const pageSize = ref(10);
const totalSize = ref(1);

const state = reactive({
  userInfoList: []
});

const handleCurrentChange = (val) => {
  axios
    .get(
      `http://127.0.0.1:3000/user/list?page=${val}&pageSize=${pageSize.value}`
    )
    .then((res) => {
      totalSize.value = res.data.data.total;
      state.userInfoList = res.data.data.infos;
      currentPage.value = val;
    });
};

onMounted(() => {
  axios
    .get(
      `http://127.0.0.1:3000/user/list?page=${currentPage.value}&pageSize=${pageSize.value}`
    )
    .then((res) => {
      totalSize.value = res.data.data.total;
      state.userInfoList = res.data.data.infos;
    });
});
</script>

<style scoped>
。{
  
}
.list {
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  margin: 20px 0;
  font-size: 18px;
  color: grey;
  display: flex;
  justify-content: center;
}
</style>
