<template>

    <div class="app">
      <div class="bg-box">
        <div class="bg" :style="{background: 'url('+detail.img+')'}"></div>
        <div class="bg-cover"></div>
        <div class="show-pic" v-if="detail">
          <div class="pic-left"><img :src="detail.img" alt=""></div>
          <div class="text-right">
            <div class="name">{{detail.nm}}</div>
            <div class="eng"></div>
            <div class="star">
            <span class="star-com">
              <Star/>
            </span>
              <span class="star-c">{{detail.sc}}</span>
            </div>
            <div class="count" v-if="detail.snum/10000>=1">({{parseInt(detail.snum/10000*10)/10}}万人参与评论)</div>
            <div class="count" v-if="detail.snum/10000<1">({{detail.snum}}参与评论)</div>
            <div class="type">{{detail.cat}}</div>
            <div class="country">{{detail.src}}</div>
            <div class="time">{{detail.rt}}</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button>立即购票</button>
      </div>
      <div class="movie-detail">
        <div class="text" :class="{up:showText }" v-html="detail.dra"></div>
        <div class="icon glyphicon glyphicon-chevron-down" @click="toggleUD" v-if="showText"></div>
        <div class="icon glyphicon glyphicon-chevron-up" @click="toggleUD" v-if="!showText"></div>
      </div>
      <div class="box-block"></div>
      <div class="video" v-if="detail.vd">
        <div class="text">媒体库</div>
        <div class="video-box">
          <video width="120px" :src="detail.vd" ref="video" @click="videoClick">
          </video>
          <div class="stop-icon "v-if="this.videoCrl"><div class="icon icon-play3" @click="videoClick"></div></div>
        </div>
      </div>
      <div class="box-block"></div>
      <div class="title">短评</div>
      <div class="rantting">
        <div class="rantting-box" v-for="(rantting,index) in CommentResponseModel.hcmts">
          <div class="rantting-star">
            <RanttingStar :index="rantting.score" :time="rantting.time"/>
          </div>
          <div class="text">{{rantting.content}}</div>
          <div class="bottom">
            <div class="b-left">
              <div class="pic">
                <img :src="rantting.avatarurl" alt="">
              </div>
              <div class="author">{{rantting.nickName}}</div>
              <div class="icon">购</div>
            </div>
            <div class="b-right">
              <div class="box">
                <span class="good glyphicon glyphicon-thumbs-up"></span>
                <span class="count">{{rantting.approve}}</span>
                <span class="rant icon-bubbles4"></span>
                <span class="r-count">{{rantting.reply}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  import Star from './head/star'
  import RanttingStar from './head/ranttingStar'
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    data(){
      return {
        detail: {},
        CommentResponseModel:{},
        showText: true,
        videoCrl: true
      }
    },

    props: {
      agr: {
        type: Number
      }
    },
    components: {
      Star,
      RanttingStar
    },
    created(){
      $.ajax({
        type: 'get',
        url: '/api/movie/detail/' + this.agr
      }).then((res) => {
        this.detail = res.MovieDetailModel
        console.log(res)
        this.CommentResponseModel=res.CommentResponseModel
        //TODO other data
      })
    },
    methods: {
      toggleUD(){
        this.showText = !this.showText
      },
      videoClick(){
        this.videoCrl = !this.videoCrl
        if (!this.videoCrl) {
          this.$refs.video.play()
          this.$refs.video.webkitRequestFullScreen();
        } else {
          this.$refs.video.pause()
        }
      }
    }

  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
  @import "../common/less/common";

  .app {
    width: 100%;
    position: relative;
    overflow: hidden;
    .bg-box {
      width: 100%;
      height: 150px;
      overflow: hidden;
      .show-pic {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 150px;
        padding: 10px;
        width: 100%;
        display: flex;
        .pic-left {
          flex: 0 0 100px;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text-right {
          flex: 1;
          padding-left: 8px;
          text-align: left;
          .name {
            color: white;
            font-size: 16px;
            font-weight: 700;
          }
          .star {
            color: white;
            overflow: hidden;
            font-size: 14px;
            .star-com {
              float: left;
              display: inline-block;
              width: 100px;
              height: 15px;
            }
            .star-c {
              float: left;
              color: #fc0;
              font-size: 15px;
            }
          }
          .count {
            color: white;
            font-size: 12px;
          }
          .type, .country, .time {
            color: white;
            font-size: 13px;
          }
        }
      }
      .bg {
        z-index: -5;
        width: 100%;
        height: 150px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 220px 280px;
        /*-webkit-filter: blur(15px);*/
        /*-moz-filter: blur(15px);*/
        /*-o-filter: blur(15px);*/
        /*-ms-filter: blur(15px);*/
        filter: blur(10px);
      }
      .bg-cover {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 0;
        height: 150px;
        left: 0;
        right: 0;
        float: left;
        background-color: rgba(0, 0, 0, 0.43);
      }
    }
    .btn {
      width: 100%;
      height: 50px;
      padding: 6px;
      button {
        width: 100%;
        height: 100%;
        background-color: @red;
        border: none;
        outline: none;
        color: white;
        border-radius: 3px;
      }
    }
    .movie-detail {
      border-bottom: 1px solid #ccc;
      width: 100%;
      overflow: hidden;
      .text {
        width: 100%;
        padding: 6px;
        font-size: 14px;
      }
      .up {
        height: 66px;
        overflow: hidden;
      }
      .icon {
        width: 100%;
        text-align: center;
        height: 20px;

      }
    }
    .box-block {
      width: 100%;
      height: 12px;
      background-color: rgba(224, 224, 224, 0.37);
    }
    .video {
      border-top: 1px solid #ccc;
      width: 100%;
      height: 120px;
      padding: 0 10px;
      border-bottom: 1px solid #ccc;
      .video-box{
        width: 100%;
        height: 68px;
        position: relative;
        .stop-icon{
          width: 120px;
          height: 68px;
          .icon{
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            line-height: 68px;
            font-size: 30px;
            width: 120px;
            height: 68px;
          }
        }
      }

      .text {
        width: 100%;
        height: 30px;
        line-height: 30px;
      }
    }
    .title{
      width: 100%;
      height: 30px;
      line-height: 30px;
      /*font-size: 15px;*/
      font-weight: 700;
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      padding-left: 10px;
    }
    .rantting{
      width: 100%;
      padding: 0 10px;
      .rantting-box{
        width: 100%;
        border-bottom: 1px solid #ccc;
        .rantting-star{
          width: 100%;
          height: 26px;
          line-height: 26px;
        }
        .text{
          font-size: 13px;
          padding: 6px 0;
        }
        .bottom{
          width: 100%;
          height: 40px;
          display: flex;
          .b-left{
            flex: 1;
            .pic{
              display: inline-block;
              margin-top: 7px;
              width: 26px;
              height: 26px;
              border-radius: 50%;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .author{
              display: inline-block;
              padding-left: 6px;
            }
            .icon{
              display: inline-block;
              width: 18px;
              height: 18px;
              background-color: orange;
              color: white;
              font-size: 15px;
              text-align: center;
              line-height: 18px;
              border-radius: 2px;
              transform: scale(.8);
            }
          }
          .b-right{
            flex: 0 0 100px;
            position: relative;
            .box{
              position: absolute;
              right: 0;
              height: 100%;
              .good,.count,.r-count,.rant{
                display: inline-block;
                height: 18px;
                margin-top: 11px;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
  }


</style>
