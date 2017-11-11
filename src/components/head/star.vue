<template>
  <div class="app" >
    <span class="star" >
      <span v-for="item in typeClass" :class="item" :key="item.id"></span>
    </span>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data(){
      return {
        typeClass: []
      }
    },
    props:{
        fNumber:{
            type:Number
        }
    },
    computed:{
      ...mapGetters(['getCount'])
    },
    methods: {
      computeNum(n){
        var num = Math.floor(n / 2)
        for (var i = 0; i < num; i++) {
          this.typeClass.push('on')
        }
        var bool=n/2-num
        if(bool>=.5){
          this.typeClass.push('half')
        }
        while((5-this.typeClass.length)>0){
            this.typeClass.push('off')
        }
      }
    },
    created(){
        this.computeNum(this.getCount)
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .app {
    width: 100px;
    height: 15px;
    .star{
      height: 15px;
      width: 75px;
      display: flex;
      overflow: hidden;
      span{
        flex: 1;
      }
      .on,.half,.off{
        background-repeat: no-repeat;

      }
      .on {
        background: url("../../common/img/star24_on@2x.png");
        background-size: 15px 15px;
      }
      .half {
        background: url("../../common/img/star24_half@2x.png");
        background-size: 15px 15px;
      }
      .off {
        background: url('../../common/img/star24_off@2x.png');
        background-size: 15px 15px;
      }
    }

  }
</style>
