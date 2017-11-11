<template>
  <div class="app" ref="scrolls">
    <div class="box">
      <ul v-for="item in rattingData" :key="item.id">
        <li v-for="li in item">
          <div class="name">
            <span class="text">{{li.nm}}</span>
            <span class="price">{{li.sellPrice}}<span class="price-text">元起</span></span>
          </div>
          <div class="address">{{li.addr}}</div>
          <div class="icon">
            <span class="sit">座</span>
            <span v-if="li.imax" class="imax">IMAX厅</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //  import {mapActions} from 'vuex'
  import IScroll from 'iscroll'
  import axios from 'axios'
  export default {
    props: {
      rattingData: {
        type: Object
      }
    },
    methods:{
      createScroll(){
        if(this.$refs.scrolls){
          this.scrollGo=new IScroll(this.$refs.scrolls,{
            click:true
          })
        }
      }
    },
    created(){
        this.$nextTick(()=>{
            setTimeout(()=>{
              this. createScroll()
            },500)

        })
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../common/less/common";
.app{
  width: 100%;
  position: absolute;
  top: 94px;
  overflow: hidden;
  bottom: 0;
  .box{
    width: 100%;
    padding: 0 10px;
    ul{
      width: 100%;
      li{
        width: 100%;
        height: 120px;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
        .name{
          width: 100%;
          height: 40px;
          .text{
            display: inline-block;
            height: 40px;
            line-height: 40px;
            font-weight: 700;
            font-size: 17px;
            max-width: 75%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price{
            vertical-align: top;
            display: inline-block;
            padding-left: 15px;
            height: 100%;
            line-height: 40px;
            color: @red;
            font-size: 16px;
            font-weight: 700;
            .price-text{
              padding-left: 5px;
              font-size: 12px;
              font-weight: 200;

            }
          }
        }
        .address{
          width: 100%;
          height: 30px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
          color: #a7a7a7;
          max-width: 85%;
        }
        .icon{
          width: 100%;
          height: 30px;
          line-height: 30px;
          padding: 6px 0;
          .sit{
            margin-right: 5px;
            /*display: inline-block;*/
            /*width: 18px;*/
            padding: 2px;
            height: 25px;
            border-radius: 3px;
            line-height: 25px;
            text-align: center;
            color: cornflowerblue;
            border: 1px solid cornflowerblue;
            font-size: 13px;
          }
          .imax{
            margin-right: 5px;
            padding: 2px;
            border-radius: 3px;
            line-height: 25px;
            text-align: center;
            color: cornflowerblue;
            border: 1px solid cornflowerblue;
            font-size: 13px;
          }
        }
      }
    }
  }

}
</style>
