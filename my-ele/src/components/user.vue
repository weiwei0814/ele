<template>
    <div id='user'>
        <div class="sui"><Manage></Manage></div>
        <div id='user1'>
            <header><p>首页</p><img src='//elm.cangdu.org/img/default.jpg'></header>
            <h1>数据统计</h1>
            <div id='a1'>
            <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">当日数据：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.count}}新增用户</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.order}}新增订单</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.orderName}}新增管理员</div></el-col>
            </el-row>
            <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">总数据：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.zcUser}}注册用户</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.dd}}订单</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">{{this.every}}管理员</div></el-col>
            </el-row>
            </div>
            <Address></Address>
        </div>

    </div>
</template>

<script>
import Manage from './manage.vue'
import Adress from './adress.vue'
export default {
    data(){
        return{
            count:'',//用户
            order:'',//订单
            orderName:'',//管理员
            zcUser:'',//注册用户
            dd:'',
            every:''//管理员
        }
    },
components:{
    Manage,Adress
},
mounted(){
    //新增用户
    this.axios.get('https://elm.cangdu.org/statis/user/2019-04-28/count').then(res=>{
        this.count=res.data.count
    })
    //新增订单
     this.axios.get('https://elm.cangdu.org/statis/order/2019-04-28/count').then(res=>{
        this.order=res.data.count
    })
    //新增管理员
     this.axios.get('https://elm.cangdu.org/statis/admin/2019-04-28/count').then(res=>{
        this.orderName=res.data.count
    })
    //注册用户
     this.axios.get('https://elm.cangdu.org/v1/users/count').then(res=>{
        this.zcUser=res.data.count
    })
    //订单
     this.axios.get('https://elm.cangdu.org/bos/orders/count').then(res=>{
        this.dd=res.data.count
    })
    //管理员
     this.axios.get('https://elm.cangdu.org/admin/count').then(res=>{
        this.every=res.data.count
    })
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
#user{
    width: 100%;
    height: 100%;
    display: flex;
}
#a1{
    padding-left: 25px;
    padding-right: 25px;
}
.sui{
    width: 21%;
}
#user1{
    // margin-left: 250px;
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    header{
        height: 50px;
        padding: 0px 20px 0px 20px;
        display: flex;
        justify-content: space-between;
        background-color: #EFF2F7;
        p{
            line-height: 50px;
        }
        img{
            vertical-align: middle;
            width: 60px;
            border-radius: 50%;
        }
    }
    h1{
        margin-top: 35px;
        margin-bottom: 20px;
        text-align: center;
    }
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content[data-v-7b4b534a] {
      line-height: 35px;
      text-align: center;
      margin-bottom: 10px;
  }
</style>
