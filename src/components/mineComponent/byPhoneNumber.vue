<template>
  <div class="app">
    <form action="">
      <div class="user">
        <input type="text" name="user" placeholder="请输入手机号" >
        <span class="get-number"><span>获取验证码</span></span>
      </div>
      <div class="psd">
        <input type="text" name="psd" placeholder="请输入短信验证码">
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
      display: flex;
      input  {
        flex: 1;
        display: block;
        width: 100%;
        height: 100%;
        outline: none;
        border:none;
      }
      .get-number{
        flex: 0 0 80px;
        padding: 5px 3px;
        span{
          width: 100%;
          height: 100%;
          text-align: center;
          display: inline-block;
          color: #ccc;
          background-color: antiquewhite;
        }
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
