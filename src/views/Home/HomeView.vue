<template>
  <div class="home">
    <div class="left">
      <el-menu default-active="/dashboard" router class="el-menu-vertical-demo" :collapse="isCollapse"
        @select="handleSelect" active-background-color="#ffd04b" background-color="#545c64" text-color="#fff">
        <div class="log" :class="[isCollapse?'openLog':'closeLog']">
          <img src="@/assets/img/app/猫咪.png" alt="">
          淋雨的猫
        </div>

        <el-menu-item :index="item.path" v-for="item in list" :key="item.name">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>{{item.meta.title}}</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <header>
        <div class="headerLeft">
          <li class="firstLi" @click="qiehuan">
            <img src="@/assets/img/app/收起侧边栏.png" alt="" v-show="!isCollapse">
            <img src="@/assets/img/app/展开侧边栏.png" alt="" v-show="isCollapse">
          </li>
          <li class="firstLi">
            <img src="@/assets/img/app/刷新.png" alt="">
          </li>
          <li>
            Dashboard / {{selectMean}}
          </li>
        </div>
        <div class="headerRight">
          <li class="firstLi">
            <img src="@/assets/img/app/博客.png" alt="">
          </li>
          <li class="lastLi">
            <img src="@/assets/img/app/猫咪.png" alt="">
          </li>
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue'
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

let isCollapse = ref<boolean>(false)

const qiehuan = () => {
  isCollapse.value = !isCollapse.value
}

//获取路由列表
const list = useRouter().getRoutes().filter(item => item.meta.isbar === true)
let selectMean = ref<string>('主控台')
const handleSelect = (key: string) => {
  let router = list.find(item => item.path === key)
  
  if(key === '/dashboard'){
    return selectMean.value = '主控台'
  }
  selectMean.value = router?.meta.title as string
}


</script>
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;

  .left {
    height: 100%;

    .el-menu {
      height: 100%;
      border: 0;

      .log {
        color: #fff;
        height: 70px;
        line-height: 60px;
        overflow: hidden;

        img {
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
      }

      .openLog {
        padding-left: 8px;
      }

      .closeLog {
        padding-left: 30px;
      }
    }
  }

  .right {
    flex: 1;
    height: 100%;

    header {
      height: 70px;
      box-shadow: 0px 0px 6px 1px rgb(208, 205, 205);

      .headerLeft {
        display: flex;
        float: left;
      }

      .headerRight {
        display: flex;
        float: right;
      }

      li {
        height: 100%;
        line-height: 70px;
        font-size: 18px;
      }

      .firstLi {
        width: 60px;
        text-align: center;

        img {
          width: 50%;
          height: 50%;
          vertical-align: middle;
        }
      }

      .lastLi {
        width: 90px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 20px;

        img {
          width: 70%;
          vertical-align: middle;
        }
      }
    }

    main {
      height: 100%;
      background-color: rgba(227, 235, 235,.3);
      overflow: hidden;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
