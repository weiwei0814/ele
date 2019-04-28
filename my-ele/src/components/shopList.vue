<template>
    <div id='shopList'>
        <div class="sui"><Manage></Manage></div>
         <div id="shopList1">
              <header><p>首页/数据管理/商家列表</p><img src='//elm.cangdu.org/img/default.jpg'></header>
         <div id='from'>
         <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
     
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="name">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <button id='btn'>添加食品</button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete()">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
         </div>
         <div id="foo">
<el-pagination
  background
  layout="prev, pager, next"
  :total="240">
</el-pagination>
         </div>
         </div>
    </div>
</template>

<script>
import Manage from './manage.vue'
export default {
    data() {
      return {
          tableData:[]
      }
    },
components:{
    Manage
},
methods:{
    handleDelete(){
        this.$message({
          showClose: true,
          message: '亲，您的权限不足！',
          type: 'error'
        });
    }
},
mounted(){
    //数据
     this.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=20').then(res=>{
    //    console.log(res.data)
       this.tableData=res.data
    })
}
}
</script>

<style lang='less' scoped>
#shopList{
    width: 100%;
    height: 100%;
    display: flex;
    .sui{
        width: 250px;
    }
}
#a1{
    padding-left: 25px;
    padding-right: 25px;
}
#shopList1{
    flex: 1;
    float: right;
    height: 100%;
    box-sizing: border-box;
    header{
        width: 100%;
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
            width: 50px;
            border-radius: 50%;
        }
    }
    h1{
        margin-top: 35px;
        margin-bottom: 20px;
        text-align: center;
    }
}
#from{
    padding: 20px 20px 20px 20px;
}
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #btn{
      background-color: #fff;
      text-decoration: none;
      border: 1px solid #cccccc;
      font-size: 14px;

  }
</style>
