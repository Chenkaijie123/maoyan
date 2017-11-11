<template>
  <div id="app">
    <HeadTop :text="getTitleName"></HeadTop>
    <div class="router" v-if="getTitleName==='猫眼电影'">
      <div class="link" @click="slideRight">
        <router-link to="/movies">影片</router-link>
      </div>
      <div class="link" @click="slideLeft">
        <router-link to="/ratting">影院</router-link>
      </div>
    </div>
    <div class="slide" v-if="getTitleName==='猫眼电影'">
      <div class="block" ref="slide"></div>
    </div>
    <transition name="slideIn">
      <router-view class="view" :moviesList="movies"
                                    :rattingData="ratting"
                                    :agr="getDetail"></router-view>
    </transition>
    <div class="mine" @click="changeTitleName('个人中心')">
      <router-link to="/mine" class="icon-box">
        <span class="glyphicon glyphicon-user mine-icon"></span>
        <span>我的</span>
      </router-link>
    </div>

  </div>
  </div>

</template>

<script>

  import HeaderTop from './components/head/header'
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'app',
    data(){
      return {
        movies: {},
        ratting:{}
      }
    },
    computed:{
      ...mapGetters(['getTitleName','getDetail'])
    },
    components:{
      HeadTop:HeaderTop
    },
    methods: {
      ...mapActions(['changeTitleName']),
      slideLeft(){
        this.$refs.slide.style.transform = 'translate3d(100%,0,0)'
      },
      slideRight(){
        this.$refs.slide.style.transform = 'translate3d(0,0,0)'
      }
    },

    created(){
      this.$axios.get('/api/data').then((res) => {
        this.movies = res.data.data
      })
      this.$axios.get('/api/ratting').then((res)=>{
          this.ratting=res.data
      })
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "./common/less/common";

  #app {
    width: 100%;
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
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #000;
        }
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
    .view {
      /*position: absolute;*/
      /*top: 94px;*/
      /*left: 0;*/
      /*right: 0;*/
      /*bottom: 0;*/
      transition: all .3s;
    }
    .mine{
      background-color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #ccc;
      position: fixed;
      right: 20px;
      bottom: 30px;
      font-size: 14px;
      text-align: center;
      color: @red;
      .mine-icon{
        display: block;
        padding-top: 7px;
        color: @red;
        margin-bottom: 2px;
        font-size: 20px;
        text-align: center;
      }
      span{
        color: @red;
      }
    }


  }
.slideIn-enter{
  transform: translate3d(100%,0,0);
  opacity: 1;
}
  .slideIn-leave-to{
    transform: translate3d(-100%,0,0);
    opacity: 1;
  }
</style>
