<template>
  <el-container direction="horizontal" class="home-container">
    <el-aside :style="{width:asideWidth}">
      <el-menu
          router
          :default-active="this.$router.path"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-switch size="large" active-color="#f6f0e0" inactive-color="#ff4949" v-model="isCollapse"></el-switch>
        <br>
        <label>地铁智行</label>
        <el-menu-item style="margin-top: 150px" index="/">
          <el-image style="padding-bottom: 20px" src="../src/assets/break.png"></el-image>
          <template #title>
            <span>Navigator One</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/com1">
          <el-image style="padding-bottom: 20px" src="../src/assets/map.png"></el-image>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="/hello">
          <el-image style="padding-bottom: 20px" src="../src/assets/icon3.png"></el-image>
          <template #title>Navigator Three</template>
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

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const asideWidth = ref("100px")
</script>

<style scoped>
.home-container {
  height: 100%;
  width: 1520px;
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