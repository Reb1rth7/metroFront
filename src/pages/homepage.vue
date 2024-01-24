<template>
  <el-container direction="horizontal" class="home-container">
    <el-aside :style="{width:asideWidth}" style="z-index: 9000">
      <el-menu
          :default-active="$router.path"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          router
      >
        <el-switch size="large" active-color="#f6f0e0" inactive-color="#ff4949" v-model="isCollapse"></el-switch>
        <br>
        <label>地铁智行</label>
        <el-menu-item style="margin-top: 150px" index="/statistics">
          <el-image style="padding-bottom: 20px" src="../src/assets/break.png"></el-image>
          <template #title>
            <span>统计信息可视化</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/com1">
          <el-image style="padding-bottom: 20px" src="../src/assets/map.png"></el-image>
          <template #title>地铁网与异常情况</template>
        </el-menu-item>
        <el-menu-item index="/adminPortal">
          <el-image style="padding-bottom: 20px;height: 60px" src="../src/assets/icon3.png"></el-image>
          <template #title>管理员后台</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="height: 100%;background-color:  #f6f0e0;">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {routerKey, useRoute, useRouter} from "vue-router";

const router = useRouter();
const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const asideWidth = ref("100px")
const getDefaultRouter = () => {
  router.push({
    path: '/statistics'
  })
}
getDefaultRouter();
</script>

<style scoped>
.home-container {
  height: 100%;
  width: 100vw;
  overflow: hidden;
}

.el-menu-vertical-demo {
  color: white;
  background: #444137;
  padding: 15px;
  width: 100px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item.is-active {
  background-color: #fceab9 !important;
  color: white;
  padding: 10px;
  border-radius: 15px;
}


</style>
<style>
.el-menu-item {
  margin-bottom: 20px;
}

.el-menu-item:hover {
  --color: red;
  background: #fceab9 !important;
  border-radius: 15px;
  opacity: 0.5;

  el-image {
    background-color: red;
  }
}
</style>