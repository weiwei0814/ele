<template>
<div id='userlist'>
    <div class="sui"><Manage></Manage></div>
    <div  id='right'>
    <header><p>首页/数据管理/用户列表</p><img src='//elm.cangdu.org/img/default.jpg'></header>
  <div id="a1">
  <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
 </div>
  </div>
</template>
<script>
import Manage from './manage.vue'
  export default {
      components:{
    Manage
},
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },
     
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
#a1{
    padding-left: 25px;
    padding-right: 25px;
}
.sui{
    // width: 21%;
}
#right{
    flex: 1;
}
#userlist{
     width: 100%;
    height: 100%;
display: flex;
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
}

</style>
