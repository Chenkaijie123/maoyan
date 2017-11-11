<template>
    <div class="app">
      <div class="router" >
        <div class="link" @click="slideRight">
          <div :class='{active:bool}'>美团账号登录</div>
        </div>
        <div class="link" @click="slideLeft">
          <div :class='{active:!bool}'>手机验证登录</div>
        </div>
      </div>
      <div class="slide" >
        <div class="block" ref="slide"></div>
      </div>
      <component :is="show"></component>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import SignIn from '../components/mineComponent/signIn'
  import Phone from '../components/mineComponent/byPhoneNumber'
    export default {
      methods: {
        ...mapActions(['changeTitleName']),
        slideLeft(){
          this.bool=false
          this.show='Phone'
          this.$refs.slide.style.transform = 'translate3d(100%,0,0)'
        },
        slideRight(){
          this.bool=true
          this.show='SignIn'
          this.$refs.slide.style.transform = 'translate3d(0,0,0)'
        }
      },
      components:{
          SignIn,Phone
      },
        data(){
            return {
                bool:true,
                show:'SignIn'
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../common/less/common";
.app{
  .router {
    width: 100%;
    height: 44px;
    display: flex;
    .link {
      flex: 1;
      height: 44px;
      font-size: 14px;
      line-height: 44px;
      text-align: center;
      .active {
        color: @red
      }
    }

  }
  .slide {
    width: 100%;
    height: 3px;
    background-color: #ccc;
    .block {
      width: 50%;
      height: 100%;
      background-color: @red;
      transition: all .4s;
    }
  }
}
</style>
