<template>
    <div class="app">
      <div class="header">
        <router-link to="" class="span" v-if="text==='猫眼电影'">广州</router-link>
        <router-link to="/movies" class="span" v-if="text!='猫眼电影'" ><div @click="changeTitleName({text:'猫眼电影'})" class="glyphicon glyphicon-chevron-left"></div></router-link>
        {{text}}
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        data(){
            return {}
        },
      methods:{
        ...mapActions(['changeTitleName']),

      },
      props:{
            text:{
                type:String
            }
      }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../../common/less/common";
  .app{
    .header {
      padding-right: 50px;
      width: 100%;
      height: 47px;
      background-color: @red;
      text-align: center;
      line-height: 47px;
      overflow: hidden;
      color: white;
      font-size: 16px;
      .span {
        padding-left: 10px;
        float: left;
        display: inline-block;
        width: 50px;
        height: 47px;
        line-height: 47px;
        color: white;
      }
    }
  }

</style>
