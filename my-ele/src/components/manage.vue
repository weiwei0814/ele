<template>
  <div class="manage">
    <el-row class="tac">
     <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#ccc"
      active-text-color="#BFCBC0">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link tag='span' to='/user'>首页</router-link></span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/userlist'>用户列表</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag='span' to='/shoplist'>商家列表</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag='span' to='/foodlist'>食品列表</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag='span' to='/orderlist'>订单列表</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>添加商铺</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>添加商品</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>用户分布</router-link></el-menu-item>
      </el-submenu>
     <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>文本编辑</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>管理员设置</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-warning"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
        </el-menu-item-group>
          <el-menu-item index="1-3"><router-link tag='span' to='/'>说明</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>


<style lang='less' scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
     width: 100%;
    height: 100%;
}
.manage{
 height: 100%;
 width: 21%;
 div{
   width: 250px;
   height: 100%;
   ul{
     width: 250px;
     height: 100%;
    background-color: #324157;
   }
 }
}
.el-submenu__title {
    font-size: 14px;
    color: #BFCBD9;
    line-height: 155px;
    }
.el-col-8{
  color: #BFCBD9;
  // background-color: #324157;
}

</style>
