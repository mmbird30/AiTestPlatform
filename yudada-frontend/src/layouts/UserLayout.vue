<template>
  <div id="userLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img class="logo" src="../assets/AILogo.png" />
          <div>AI答题应用平台</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">作者：黄金鹏</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/**
#userLayout {
  text-align: center;
  background: url("D:/图片/水墨背景.png");
  box-shadow: #eee 1px 1px 5px;
}

 */
#userLayout {
  width: 100%;
  height: 100vh;
  font-size: 87.5%;
  text-align: center;
  background: url("D:/图片/水墨背景.png") no-repeat;
  background-size: cover;
}

#userLayout .logo {
  width: 48px;
  height: 48px;
}

#userLayout .header {
  margin-top: 16px;
  font-size: 21px;
}

.content {
  margin-bottom: 28px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  color: #666;
  font-size: 14px;
  text-align: center;
  background: #efefef;
  border-top: 1px solid #ddd;
}
</style>
