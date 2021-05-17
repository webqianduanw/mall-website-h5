<template>
  <div class="index">

    <div class="content w">
      <div class="content1">
        <img src="../assets/img/index/1.jpg" alt="">
        <img src="../assets/img/index/2.jpg" alt="">
        <img src="../assets/img/index/3.jpg" alt="">
        <img src="../assets/img/index/4.jpg" alt="">
      </div>
    </div>
    <div class="footer">
      <div class="footer_cont">
        <a href="http://beian.miit.gov.cn/?spm=a2c4g.11186623.7y9jhqsfz.111.26b47243MaN2zM" target="_blank" data-spm-anchor-id="a2c4g.11186623.7y9jhqsfz.111">杭ICP备 18325478号</a>
              www.changruimaoyi.com  @ 2021 杭州昌瑞贸易版权所有
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
  position: fixed;
  z-index: 10;
  top: 0;
  background:#ffffff;
  width: 100%;
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
      color:#DC3731;
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
    color:rgba(46, 214, 167, 1);
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
        background:rgba(46, 214, 167, 1);
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
  margin: 112px 0 146px 0;
  img{
    width: 100%;
    height: auto;
  }
}
.content9{
  height: 486px;
  width: 100%;
  margin: 0 auto;
  .content9_cont{
    width: 1200px;
    margin: 0 auto;
    .content9_cont_left{
      margin-right: 45px;
      margin-top: 26px;
      img{
        width: 350px;
        height: 350px;
      }
    }
    .content9_cont_right{
      .content9_cont_right_txt1{
        margin-top: 126px;
        p{
          font-size:42px;
          font-family:Source Han Sans CN;
          font-weight:bold;
          color:rgba(46, 214, 167, 1);
        }
        margin-right: 30px;
      }
      .content9_cont_right_txt2{
        margin-top: 124px;
        width:4px;
        height:119px;
        background:rgba(228,228,228,1);
        margin-right: 40px;
      }
      .content9_cont_right_txt3{
        margin-top: 115px;
        .content9_cont_right_txt3_child1{
          font-size:24px;
          font-family:Adobe Heiti Std;
          font-weight:normal;
          color:rgba(51,51,51,1);
          line-height: 30px;
        }
        .content9_cont_right_txt3_child2{
          width:340px;
          height:4px;
          background:rgba(46, 214, 167, 1);
          margin-bottom: 42px;
        }
        .content9_cont_right_txt3_child3{
          width:582px;
          height:41px;
          font-size:16px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          line-height:24px;
        }
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
        // background: rgba(46, 214, 167, 1);
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
