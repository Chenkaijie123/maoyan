<template>
  <div class="app">
    <div class="star-box">
       <div class="star">
      <div v-for="item in typeClass" :class="item" :key="item.id" class="span"></div>
    </div>
    </div>
    <div class="time">{{distime}}</div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return {
        typeClass: [],
        distime:'asd'
      }
    },
    props: {
      index: {
        type: Number
      },
      time: {
        type: String
      }
    },
    methods: {
      computeNum(n){
        var num = Math.floor(n)
        if (num != 0) {
          for (var i = 0; i < num; i++) {
            this.typeClass.push('on')
          }
          if (n - num != 0) {
            this.typeClass.push('half')
          }
          var also = 5 - this.typeClass.length
          if (also != 0) {
            for (var j = 0; j < also; j++) {
              this.typeClass.push('off')
            }
          }
        } else {
          if (n > 0) {
            this.typeClass.push('half')
            for (var k = 0; k < 4; k++) {
              this.typeClass.push('off')
            }
          }
        }
      },
      dealTime(n){
        var now = parseInt(new Date().getTime())
        var old = n.replace(/-/g, '/')
        var oldStrick = parseInt(new Date(old).getTime())
        var dis=parseInt(now-oldStrick)
        if(dis>=172800){
            var str=n.substr(5,6)
          this.distime=str
          console.log(str)
        }else{
           if(dis<60){
               this.disTime='刚刚'
           }
           if(dis<3600&&dis>=60){
               var time=dis/60
               this.disTime=time+'分钟前'
           }
           if(dis>=3600&&dis<86400){
               var time1=dis/3600
               this.disTime=time+'小时前'
           }
           if(dis>=86400){
               this.disTime='一天前'
           }
        }
      }
    },
    created(){
      this.computeNum(this.index)
      this.dealTime(this.time)

    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .app {
    width: 100%;
    height: 28px;
    display: flex;
    .star-box{
      margin-top: 7px;
      flex: 0 0 60px;
      width: 100%;
      height: 14px;
      .star {
        height: 14px;
        width: 60px;
        display: flex;

        .span {
          flex: 1;
        }
        .on {
          background: url("../../common/img/star24_on@2x.png");
          background-size: 13px 13px;
          background-repeat: no-repeat;
        }
        .half {
          background: url("../../common/img/star24_half@2x.png");
          background-size: 13px 13px;
          background-repeat: no-repeat;
        }
        .off {
          background: url('../../common/img/star24_off@2x.png');
          background-size: 13px 13px;
          background-repeat: no-repeat;
        }
      }
    }
    .time{
      padding-left: 10px;
      display: inline-block;
      height: 100%;
      font-size: 14px;
      color: #000;
      width:200px;
      line-height: 28px;
      flex: 1;
    }
  }
</style>
