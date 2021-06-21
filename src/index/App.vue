<template>
  <div class="index">
    <div class="header" ref="header" style="display:none;">
      <div class="header-box clearfix">
        <div class="fleft header-box-left" @click="jumpClick(1)">
          <div class="img fleft"><img src="../assets/img/index/logo.png" alt=""></div>
          <div class="app-name fleft">核桃返利</div>
        </div>
        <div class="fright header-box-right">
          <div class="fleft download positionR">
            <img class="ewmcode positionA" src="../assets/img/ewmcode.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header-box clearfix">
        <div class="fleft header-box-left">
          <div class="img fleft"><img src="../assets/img/index/logo.png" alt=""></div>
          <div class="app-name fleft">核桃返利</div>
        </div>
        <div class="fright header-box-right">
          <div class="fleft download" @mouseenter="mouseover" @mouseleave="mouseLeave" @click="goTop">
            <!-- <a href="javascript:;">下载App</a> -->
            <img class="ewmcode positionA" ref="ewmcode" style="display:none;" src="../assets/img/ewmcode.png" alt="">
          </div>
          <div class="fleft about">
            购物返利·一站式商城·全场包邮
          </div>
        </div>
      </div>
    </div>
    <div class="content w">
      <div class="content1">
        <img src="../assets/img/index/index1_bg1.jpg" alt="">
      </div>
      <div class="content3">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../assets/img/index/swiper1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="../assets/img/index/swiper2.jpg" alt="">
                </div>
                 <div class="swiper-slide">
                  <img src="../assets/img/index/swiper3.jpg" alt="">
                </div>
                 <div class="swiper-slide">
                  <img src="../assets/img/index/swiper4.jpg" alt="">
                </div>
                 <div class="swiper-slide">
                  <img src="../assets/img/index/swiper5.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="content7">
        <img src="../assets/img/index/content7.jpg" alt="">
      </div>
      <div class="content9">
        <div class="content9_cont">
          <div class="content9_cont_left">
            <div class="content9_cont_left_txt1">
              公司：郴州市昌瑞贸易有限公司
            </div>
            <div class="content9_cont_left_txt2">
              地址：湖南省郴州市嘉禾县珠泉镇中伟神农步行街4栋2单元501室
            </div>
            <div class="content9_cont_left_txt3">
              邮箱：q13396009274@163.com
            </div>
          </div>
          <div class="content9_cont_right">
            <div class="content9_cont_right_txt1">
              客服联系方式(APP内在线咨询)
            </div>
            <div class="content9_cont_right_txt2">
               客服工作时间
            </div>
            <div class="content9_cont_right_txt3">
               工作日：9：00-22：00
            </div>
            <div class="content9_cont_right_txt4">
               周末及节假日：9：00-21：00
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_cont">
        <a href="http://beian.miit.gov.cn/?spm=a2c4g.11186623.7y9jhqsfz.111.26b47243MaN2zM" target="_blank" data-spm-anchor-id="a2c4g.11186623.7y9jhqsfz.111">湘ICP备2021004451号</a>
              http://www.walnutmall.com/ @ 2021 核桃返利版权所有
      </div>
    </div>
  </div>
</template>

<script>
// import moduleName from 'module'
import $ from 'jquery';
// import Swiper from 'swiper';
import Swiper from '../../node_modules/swiper/dist/js/swiper.min';
import '../../node_modules/swiper/dist/css/swiper.min.css';

export default {
    name: '',
    components: {

    },
    data() {
        return {
            swiper: '',
            single_ww1: ''
        };
    },
    methods: {
        jumpClick(id) {
            if (id === 1) {
                this.swiper.slideTo(0);
            } else if (id === 2) {
                // this.$router.push('/about');
                window.location.href="/pc/aboutUs.html";
            }
        },
        goTop(){
           var sc=$(window).scrollTop();
            $('body,html').animate({scrollTop:0},500);
        },
        mouseover() {
            // this.$refs.ewmcode.style.display = 'block';
        },
        mouseLeave() {
            // this.$refs.ewmcode.style.display = 'none';
        }
    },
    created() {

    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container',{
            autoplay: {
              delay: 5000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            },
            loop: true,
            pagination : {
              el: '.swiper-pagination',
              clickable: false
            },
          })
    },
    updated() {

    }
};
</script>

<style lang="scss">
html, body {
  position: relative;
  height: 100%;
}
body{
  height: 100%;
  min-width: 1000px;
  min-height: 600px;
}
.header{
  // position: fixed;
  // z-index: 10;
  // top: 0;
  background:#ffffff;
  width: 100%;
  height: 100px;
}
.header-box{
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  .header-box-left{
    cursor: pointer;
    height: 100%;
    .img{
      height: 62px;
      width: 62px;
      img{
        margin-top: 18px;
        width: 100%;
      }
    }
    .app-name{
      height: 100%;
      line-height: 100px;
      font-size:18px;
      font-weight:bold;
      color:#FF7002;
      margin-left: 15px;
    }

  }
  .header-box-right{
    height: 100%;
    .download{
      font-size:18px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height: 100px;
      margin:0 100px 0 120px;

    }
    .about{
      line-height: 100px;
      font-size:18px;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
    .ewmcode{
      z-index: 111;
    }
  }
}
.content{

}
.content1{
  img{
    width: 100%;
  }
}
.content2{
  height: 320px;
  background:rgba(242,242,242,1);
  text-align: center;
  &_txt1{
    top: 77px;
    z-index: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  &_txt2{
    top: 92px;
    font-size:26px;
    font-family:Source Han Sans CN;
    font-weight:bold;
    color:rgba(0,0,0,1);
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  &_txt3{
    top: 133px;
    font-size:16px;
    font-family:Source Han Sans CN;
    font-weight:500;
    color:rgba(220,55,49,1);
    z-index: 1;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  &_txt4{
    top: 190px;
    left: 0;
    right: 0;
    margin: 0 auto;
    p{
      font-size:14px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(174,174,174,1);
    }
  }
}
.content3{
  width: 100%;
  .swiper-container{
    height: 100%;
    .swiper-slide{
      img{
        width: 100%;
        height: auto;
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        // color: #DC3731;
      }
      .swiper-pagination-bullet-active{
         background: #DC3731;
      }
    }
  }
}
.content5{
  height: 586px;
  width: 100%;
  margin: 0 auto;
  .content5_cont{
    width: 1000px;
    margin: 0 auto;
    .content5_cont_left{
      .content5_cont_left_txt1{
        width:160px;
        height:63px;
        line-height: 63px;
        text-align: center;
        background:rgba(220,55,49,1);
        font-size:26px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-top: 77px;
      }
      .content5_cont_left_txt2{
        font-size:22px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:rgba(77,77,77,1);
         padding-top: 66px;
      }
      .content5_cont_left_txt3{
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#333333;
        width: 360px;
        padding-top: 39px;
        span{
          color:#AEAEAE;
        }
      }
      .content5_cont_left_txt4{
        font-size:18px;
        font-family:Source Han Sans CN;
        font-weight:400;
        color:#333333;
        width: 360px;
      }
    }
    .content5_cont_right{
      padding-left: 64px;
      padding-top: 135px;
      img{
        width: 270px;
        height: 306px;
        &:nth-of-type(1){
          margin-right: 14px;
        }
      }
    }
  }
}
.content7{
  img{
    width: 100%;
    height: auto;
  }
}
.content9{
  height: 282px;
  width: 100%;
  margin: 0 auto;
  background: #626262;
  .content9_cont{
    width: 1200px;
    margin: 0 auto;
    clear: both;
    .content9_cont_left{
      float: left;
      .content9_cont_left_txt1{
        margin-top: 90px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .content9_cont_left_txt2{
        margin-top: 14px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .content9_cont_left_txt3{
        margin-top: 14px;
        font-size: 18px;
        color: #FFFFFF;
      }
    }
    .content9_cont_right{
      float: right;
      .content9_cont_right_txt1{
        margin-top: 90px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .content9_cont_right_txt2{
        margin-top: 10px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .content9_cont_right_txt3{
        margin-top: 10px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .content9_cont_right_txt4{
        margin-top: 10px;
        font-size: 18px;
        color: #FFFFFF;
      }
    }
  }
}
.content11{
  img{
    width: 100%;
    height: auto;
  }
}
.content13{
  height: 646px;
  width: 100%;
  margin: 0 auto;
  .content13_cont{
    width: 1200px;
    margin: 0 auto;
    .content13_cont_left{
      width: 524px;
      .content13_cont_left_txt1{
        height: 113px;
        // background: rgba(220,55,49,1);
        overflow: hidden;
        img{
          width: 75px;
          height: 76px;
          margin-left: 56px;
          margin-top: 18px;
        }
        .content13_cont_left_txt1_p{
          padding-top: 16px;
          padding-left: 24px;
          p{
            height: 25px;
            font-size: 26px;
            font-weight: normal;
            color: #333333;
            padding-top: 5px;
          }
        }
      }
      .content13_cont_left_txt2{
        margin-left: 55px;
        height: 121px;
        border-bottom: 1px solid #E4E4E4;
        img{
          width: 43px;
          height: 36px;
          margin-top: 40px;
        }
        .content13_cont_left_txt2_p{
          margin-top: 40px;
          padding-left: 24px;
          p{
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102,102,102,1);
          }
        }
      }
      .content13_cont_left_txt3{
        margin-left: 55px;
        height: 121px;
        border-bottom: 1px solid #E4E4E4;
        img{
          width: 43px;
          height: 42px;
          margin-top: 40px;
        }
        .content13_cont_left_txt3_p{
          margin-top: 40px;
          padding-left: 24px;
          p{
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102,102,102,1);
          }
        }
      }
      .content13_cont_left_txt4{
        margin-left: 55px;
        height: 121px;
        img{
          width: 42px;
          height: 31px;
          margin-top: 40px;
        }
        .content13_cont_left_txt4_p{
          margin-top: 22px;
          padding-left: 24px;
          p{
            font-size: 15px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102,102,102,1);
          }
        }
      }

    }
    .content13_cont_right{
      img{
        width: 644px;
        height: 481px;
      }
    }
  }
}
.footer{
  width: 100%;
  margin: 0 auto;
  background:rgba(22,28,32,1);
  height: 90px;
  .footer_cont{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 90px;
    font-size:14px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(102,102,102,1);
      a{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        &:hover{
          color: #ff4715;
        }
      }
    }
  }

  </style>
