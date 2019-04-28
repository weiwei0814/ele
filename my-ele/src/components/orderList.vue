<template>
    <div id='orderlist'>
         <Manage></Manage>
         <div id="orderlist1">
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
      label="订单ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="address_id"
      >
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar.title">
    </el-table-column>
  </el-table>
         </div>
         <div id="foo">
<el-pagination
 @current-change="handleCurrentChange"
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
methods: {
  handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
  },
  handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
    this.num=(val-1)*5
    this.axios.get('https://elm.cangdu.org/bos/orders?offset='+this.num+'&limit=20&restaurant_id=undefined').then(res=>{
      console.log(res.data);
      this.tableData=res.data
    })

  }
},
mounted(){
    this.axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined').then((res)=>{
        // console.log(res.data)
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
#orderlist{
    width: 100%;
    height: 100%;
    display: flex;
}

#orderlist1{
    flex: 1;
    height: 100%;
    
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
    #foo{
        margin-top: 20px;
    }
</style>
