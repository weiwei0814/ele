<template>
    <div id='foodList'>
        <Manage></Manage>
        <div id='foodList1'>
            <header><p>首页</p><img src='//elm.cangdu.org/img/default.jpg'></header>
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
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      >
    </el-table-column>
    <el-table-column
      label="评分"
      prop="name">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    data(){
        return{
            tableData:[]
        }
    },
components:{
    Manage
},
mounted(){
    this.axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined").then((res)=>{
        console.log(res.data)
        this.tableData=res.data

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
#foodList{
    width: 100%;
    height: 100%;
    display: flex;
}

#foodList1{
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
            width: 50px;
            border-radius: 50%;
        }
    }
    }
</style>
