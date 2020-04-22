<template>
  <div class="aboutUs">
    <div class="header1">
      <div class="header-box clearfix">
        <div class="fleft header-box-left" @click="jumpClick(1)">
          <div class="img fleft"><img src="../../assets/img/index/logo.png" alt=""></div>
          <div class="app-name fleft">亿呗购</div>
        </div>
        <div class="fright header-box-right">
          <div class="fleft about active" @click="jumpClick(2)">
            <a href="javascript:;">关于我们</a>
          </div>
          <div class="fleft download positionR">
            <a href="javascript:;" @mouseenter="mouseover" @mouseleave="mouseLeave" >下载App</a>
            <img class="ewmcode positionA" ref="ewmcode" style="display:none;" src="../../assets/img/ewmcode.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <!-- <el-image
      style="width: 100%; height: 420px"
      :src="imgUrl"
      :fit="none"></el-image> -->
      <img src="../../assets/img/about/bg.png" alt="">
    </div>
    <div class="content_about">
      <div class="text1">关于我们</div>
      <div class="text2 textall1">亿呗购，一家专为年轻时尚用户服务的购物应用。商城聚合海量品牌直供厂家，提供优质产品，为您提供贴心无忧的享购体验。
      </div>
      <div class="text3 textall2">
        [海量商品]
      </div>
       <div class="text4 textall1">涵盖运动户外、服装配饰、鞋靴箱包、钟表珠宝、生活家居、数码家电、食品超市、美妆个护、母婴童装等品类, 纯人工筛选验货，品类多多，任您挑选。
      </div>
      <div class="text5 textall2">[放心比价]</div>
      <div class="text6 textall1">再也不用安装多个电商的App，购物安全防黑客，京东亚马逊苏宁比价轻松省百元，亿呗购-您的省钱专家。</div>
      <div class="text7 textall2">[严选好物]</div>
      <div class="text8 textall1">严选特价实惠好货，品质有保障，让您放心购。</div>
    </div>
    <div class="footer">
      <div class="footer-box w1200">
        <div class="footer-box-top clearfix">
          <div class="top_txt1 fleft">官方客服热线</div>
          <div class="top_txt2 fleft">
            <div class="fleft top_txt2_child1"><img src="../../assets/img/tel1.png" alt=""></div>
            <!-- <div class="fleft top_txt2_child2">400-161-2999</div>
            <span></span> -->
          </div>
          <div class="top_txt3 fleft">
            <div>(周一至周五 9:00-22:00)</div>
            <div class="top_txt3_child2">(周六至周日 9:00-21:00)</div>
          </div>
        </div>
        <div class="footer-box-bottom">
          浙ICP备20002460号 © 2020 亿呗购，All Rigths Reserved
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
// import moduleName from 'module'

export default {
    name: '',
    components: {

    },
    data() {
        return {
            imgUrl: require('../../assets/img/about/bg.png')
        };
    },
    methods: {
        jumpClick(id) {
            if (id === 1) {
                // this.$router.push('/');
                window.location.href="/pc/index.html"
            }
        },
        mouseover() {
            this.$refs.ewmcode.style.display = 'block';
        },
        mouseLeave() {
            this.$refs.ewmcode.style.display = 'none';
        }
    },
    mounted() {

    }
};
</script>
<style lang="scss" scropd>
body{
  min-width: 1000px;
  min-height: 600px;
  overflow: scroll;
  &::-webkit-scrollbar {display:none}
}
#app{
  overflow: scroll;
  &::-webkit-scrollbar {display:none}
}
.header1{
  background:#ffffff;
  width: 100%;
}
.bg{
  // margin-top: 110px;
  img{
    // height: 420px;
    width: 100%;
    min-width: 1200px;
  }
}
.header-box{
  width: 1200px;
  margin: 0 auto;
  height: 110px;
  .header-box-left{
    height: 100%;
    cursor: pointer;
    .img{
      height: 100%;
      img{
        margin-top: 18px;
      }
    }
    .app-name{
      height: 100%;
      line-height: 110px;
      font-size:27px;
      font-weight:bold;
      color:rgba(255,71,21,1);
      margin-left: 15px;
    }

  }
  .header-box-right{
    height: 100%;
    .about,.download{
      font-size:30px;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height: 110px;
      position: relative;
      &.active{
        a{
          color: #FF7E05;
        }
        &::after{
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #FF7E05;
        }

      }
    }
    .download{
      margin:0 110px 0 120px;
      .ewmcode{
        width: 120px;
        height: 154px;
        bottom: -154px;
        left: 0;
      }
    }

  }
}

.content_about{
  width: 1200px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 127px;
  .text1{
    width:220px;
    height:86px;
    font-size:48px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:86px;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width:135px;
      height:6px;
      background:rgba(255,126,5,1);
    }
  }
  .text2,.textall1{
    font-size:24px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:34px;
    text-indent: 2em;
  }
  .text2{
    padding-top: 30px;
  }
  .text3,.textall2{
    font-size:24px;
    font-family:PingFang SC;
    font-weight:400;
    color:#FF7E05;
    line-height:34px;
    text-indent: 2em;
    padding-top: 34px;
  }
}
.footer{
  width: 100%;
  min-width: 1200px;
  height: 360px;
  background: #BFBFBF;
  .footer-box{
    height: 100%;
    .footer-box-top{
      height: 187px;
      width: 100%;
      border-bottom:1px dashed rgba(245,245,245,1);
      .top_txt1{
        font-size:52px;
        font-weight:500;
        color:rgba(255,255,255,1);
        padding-top: 68px;
      }
      .top_txt2{
        padding-top: 77px;
        height: 52px;
        margin-left: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        .top_txt2_child1{
          height: 100%;
          margin-right: 6px;
          img{
            width: 100%;
            height: 47px;
            // padding-top: 10px;
          }
        }
        .top_txt2_child2{
          font-size:48px;
          font-weight:600;
          color:rgba(255,255,255,1);
        }
      }
      .top_txt3{
        padding-top: 74px;
        font-size:24px;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-left: 60px;
      }
    }
    .footer-box-bottom{
      font-size:30px;
      font-weight:400;
      color:rgba(255,255,255,1);
      padding: 52px 0 0 104px;
    }
  }
}
</style>
