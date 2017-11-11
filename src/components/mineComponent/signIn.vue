<template>
    <div class="app">
      <form action="">
        <div class="user">
          <input type="text" name="user" placeholder="帐户名/手机号/Email" >
        </div>
        <div class="psd">
          <input type="text" name="psd" placeholder="请输入你的密码">
        </div>
        <input type="button" value="登录" class="btn">
        <div class="box">
          <div class="sign">立即注册</div>
          <div class="find-back">找回密码</div>
        </div>
        <div class="phone">猫眼电影 客服电话:  <span class="number">400-670-5335</span></div>
      </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../common/less/common";
.app{
  width: 100%;
  padding: 0 10px;
  .user{
    width: 100%;
    height: 33px;
    padding-left: 5px;
    border-bottom: 1px solid #ccc;
    input  {
      display: block;
      width: 100%;
      height: 100%;
      outline: none;
      border:none;
    }
    input:focus{
      background-color: #e9e9e9;
    }
  }
  .psd{
      width: 100%;
      height: 33px;
      border-bottom: 1px solid #ccc;
      input  {
        padding-left: 5px;
        display: inline-block;
        width: 100%;
        height: 100%;
        outline: none;
        border:none;
      }
    input:focus{
      background-color: #e9e9e9;
    }
    }
  .btn{
    display: block;
    width: 100%;
    height: 33px;
    background-color: @red;
    color:white;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 700;
  }
  .box{
    width: 100%;
    height: 33px;
    display: flex;
    .sign,.find-back{
      flex: 1;
      height: 100%;
      font-size: 14px;
      line-height: 33px;
      color: @red;
    }
    .sign{
      text-align: left;
    }
    .find-back{
      text-align: right;
    }
  }
  .phone{
    width: 100%;
    height: 33px;
    text-align: center;
    .number{
      padding-left: 5px;
      color: @red;
    }
  }
}
</style>
