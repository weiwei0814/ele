<template>
  <div class="hello">
  <h1>elm后台管理系统</h1>
  <div id='login'>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.psw" auto-complete="off"></el-input>
  </el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
<p>温馨提示：</p>
<p>未登录过的新用户，自动注册</p>
<p>注册过的用户可凭账号密码登录</p>
</div>
  </div>
</template>
<script>
import axios from "axios";
  export default {
    data() {
      return {
        ruleForm: {
          name: '',//用户名
          psw:'',//密码
          type: [],
          data:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
          ],
          psw: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
      let data={user_name:this.ruleForm.name,password:this.ruleForm.psw}
      // data.name=this.ruleForm.name
      // data.psw=this.ruleForm.psw
      console.log(data)
      this.axios
      .post(
        "https://elm.cangdu.org/admin/login",data)
      .then(res => {
        console.log(res)
        if(res.data.status==1){
          this.$router.push({path:'/manage1'})
            
        }else if(res.data.status==0){
          this.$notify.error({
          title: '错误',
          message: '请输入正确的用户名和密码'
        });
        }
      });
      },
    },
  }
</script>


<style lang='less' scoped>
*{
  box-sizing: border-box;
}
body,html{
  width:100%;
height:100%;
}
.hello{
  padding-top: 220px;
width:100%;
height:100%;
background-color: #324057;
text-align: center;
h1{
  color:#FFF;
 margin: 0px auto;
}
}
#login{
  border-radius: 5px;
  margin: 40px auto;
  text-align: center;
  padding: 20px 20px 20px 20px;
  width: 450px;
  background-color: #fff;
  .el-button{
    width: 400px;
    margin-bottom: 20px;
  }
  p{
    font-size: 12px;
    color: red;
  }
}

</style>
