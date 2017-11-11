<template>
  <div class="app" ref="scroll">
    <ul>
      <li class="box" v-for="item in moviesList.movies" :key="item.id" @click="getData(item.id,item.nm,item.sc)">
        <div class="img-left">
          <img :src='item.img' alt="">
        </div>
        <div class="box-middle">
          <div class="title"><span class="name">{{item.nm+'  '}}</span><span class="icon"
                                                                             v-if="item['3d']&&item.imax"><span
            class="i-l" v-if="item['3d']">3D</span><span class="i-r" v-if="item.imax">IMAX</span></span></div>
          <div class="type">{{item.cat}}</div>
          <div class="actor">{{item.star}}</div>
          <div class="info">{{item.showInfo}}</div>
        </div>
        <div class="box-right">
          <div class="score" v-if="item.sc!=0">{{item.sc}}<span>分</span></div>
          <div class="score" v-if="item.sc==0">{{item.wish}}<span>人想看</span></div>
          <div class="buy" v-if="item.sc!=0"><input class="input1" type="button" value="购票"/>
          </div>
          <div class="buy" v-if="item.sc==0"><input class="input2" type="button" value="预售"/></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    import IScroll from 'iscroll/build/iscroll-probe'
  import axios from 'axios'
  import {mapActions} from 'vuex'
  import Router from '../router'


  export default {
    props: {
      moviesList: {
        type: Object
      }
    },
    methods: {
      ...mapActions(['changeTitleName','addDetail']),
      getData(a, b,c){
        this.addDetail({data:a})
        Router.push('/detail')
        this.changeTitleName({text:b,num:c})
      },
      createScroll(){
        if(this.$refs.scroll){
            this.scrollGo=new IScroll(this.$refs.scroll,{
                click:true
            })
        }
      }
    },
    created(){
        this.$nextTick(()=>{
            setTimeout(()=>{
              this.createScroll()
            },500)
        })
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../common/less/common";
  .app {
    padding: 0 10px;
    width: 100%;
    position: absolute;
    top: 94px;
    bottom: 0;
    overflow: hidden;
    /*height: 100%;*/
    .box {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      width: 100%;
      height: 120px;
      display: flex;
      overflow: hidden;
      .img-left {
        flex: 0 0 80px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          display: inline-block;
        }
      }
      .box-middle {
        padding-left: 10px;
        overflow: hidden;
        flex: 1;
        height: 100%;
        .title {
          width: 100%;
          height: 25px;
          line-height: 25px;
          overflow: hidden;
          .icon {
            border: 1px solid cadetblue;
            font-size: 12px;
            .i-l {
              background-color: cadetblue;
              color: white;
            }
            .i-r {
              color: cadetblue;
              font-size: 12px;
            }
          }
          .name {
            max-width: 100%;
            font-size: 15px;
            font-weight: 600;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .type, .actor, .info {
          margin-top: 4px;
          height: 22px;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .box-right {
        flex: 0 0 80px;
        height: 100%;
        position: relative;
        .score {
          font-size: 15px;
          color: @yellow;
          text-align: right;
          span {
            font-size: 12px;
          }
        }
        .buy {
          position: absolute;
          bottom: 0;
          right: 0;
          .input1, .input2 {
            display: inline-block;
            width: 50px;
            height: 27px;
            text-align: center;
            color: white;
            line-height: 27px;
            outline: none;
            border: none;
          }
          .input1 {
            background-color: @red;
          }
          .input2 {
            background-color: cornflowerblue;
          }
        }
      }
    }
  }
</style>
