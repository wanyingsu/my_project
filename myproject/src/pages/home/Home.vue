<template>
  <div id="home">
    <header id="headerContainer">
      <div class="header">
        <img class="header_logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"/>
        <input class="header_search" type="text" placeholder="搜索商品，共有234232件商品"/>
        <div class="header_btn">登录</div>
      </div>
      <div>
        <cube-scroll-nav-bar class="home_nav" :current="current" :labels="labels" @change="changeHandler" />
      </div>
    </header>
    <!--主题内容-->
    <div id="homeContainer">
      <!--轮播图-->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="./images/list/j1.jpg">
          </li>
          <li class="swiper-slide">
            <img src="./images/list/j2.jpg">
          </li>
          <li class="swiper-slide">
            <img src="./images/list/j3.jpg">
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--提示-->
      <div class="home_hint">
        <span class="home_hint_size">网易自营品牌</span>
        <span class="home_hint_size">30天无忧退货</span>
        <span class="home_hint_size">48小时快速退款</span>
      </div>
      <!--导航列表-->
      <div class="home_nev">
        <ul class="home_list">
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png"/>
            <span class="home_living">居家</span>
          </li>
          <li class="home_item">
            <img class="homeImg" src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png"/>
            <span class="home_living">居家</span>
          </li>
        </ul>
      </div>
      <!--商品提示-->
      <div class="home_shop">
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png"/>
      </div>
      <!--商品列表-->
      <ul class="home_shopList">
        <li class="home_shopItem">
          <p class="home_shop_top">实时好评榜</p>
          <p class="home_shop_center">精选优质好物</p>
          <div class="home_shopImgContainer">
            <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png"/>
            <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png"/>
          </div>
        </li>
        <li class="home_shopItem">
          <p>实时好评榜</p>
          <p>精选优质好物</p>
          <div class="home_shopImgContainer">
            <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png"/>
            <img src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png"/>
          </div>
        </li>
        <li class="home_shopItem">
          <p>实时好评榜</p>
          <p>精选优质好物</p>
          <div class="home_shopImgContainer">
            <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png"/>
            <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png"/>
          </div>
        </li>
        <li class="home_shopItem">
          <p>实时好评榜</p>
          <p>精选优质好物</p>
          <div class="home_shopImgContainer">
            <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png"/>
            <img src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png"/>
          </div>
        </li>
      </ul>
      <!--私人订制-->
      <div class="home_private">
        <div class="home_privateTitle">私人订制</div>
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/4462d78e094d81c02278fdc02e4ddbfa.jpg"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
            </li>
            <li class="swiper-slide">
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
              <div class="swiper-slideItem">
                <img src="http://yanxuan.nosdn.127.net/52b4876b561380e42ff5aa1342545523.png"/>
                <div class="swipe_text">
                  <span>日本制造 24K金T型美容棒 </span>
                  <span class="jiage">¥459</span>
                </div>
              </div>
            </li>
          </ul>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
data() {
    return {
      current: '推荐',
      labels: ['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','礼品特色']
    }
  },
  methods: {
    //导航栏滑动
    changeHandler(cur) {
      this.current = cur
    }
  },

    mounted() {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
@import '../../common/css/reset.css'

  #home
    width 100%
    height 100%
    #headerContainer
      width 100%
      .header
        display flex
        width 100%
        padding 4px 7px
        align-items center
        .header_logo
          width 69px
        .header_search
          //border 1px solid #333
          width 224px
          height: 28px
          margin 0 4px
          padding-left 18px
          border-radius 2px
          font-size 14px
          background #EDEDED
        .header_btn
          width 38px
          height 20px
          border-radius 2px
          border 1px solid #D99295
          font-size 10px
          text-align center
          line-height 20px
          color #d99295
      
    #homeContainer
      width 100%
      .swiper-container
        width 100%
        height 180px
        .swiper-wrapper
          img
            width 100%
            height 100%
      .home_hint
        display flex
        width 100%
        height: 36px
        align-items center
        justify-content center
        .home_hint_size
          font-size 10px
          margin-right 12px
          color #b4282d
      .home_nev
        width 100%
        height 167px
        .home_list
          display flex
          flex-wrap wrap
          width 100%
          height 100%
          margin-bottom 20px
          .home_item
            display flex
            flex-direction column
            align-items center
            width 55px
            height 76px
            margin 5px 10px 0
            .homeImg
              width 100%
              margin-bottom 2px
            .home_living
              font-size 10px



      .home_shop
        height 80px
        margin-bottom 20px
        img
          height 100%
      .home_shopList
        width 100%
        display flex
        flex-wrap wrap
        justify-content center
        .home_shopItem
          width 170px
          height 130px
          background-color #f5f5f5
          margin 2px 0 0 2px
          padding 10px 0 0 10px
          box-sizing border-box
          .home_shop_top
            padding-left 5px
            color #333
            font-size 16px
          .home_shop_center
            margin 5px 0
            padding-left 5px
            color #7f7f7f
            font-size 12px
          .home_shopImgContainer
            display flex
            justify-content center
            img
              width 75px
              height 75px
              margin-right 2px
      .home_private
        width 100%
        margin-bottom 40px
        .home_privateTitle
          width 100%
          height 50px
          line-height 50px
          padding 0 15px
          font-size 16px
        .swiper-container
          position relative
          width 100%
          height 100%
          padding-bottom 24px
          .swiper-wrapper
            width  100%
            .swiper-slide
              width 100%
              .swiper-slideItem
                float left
                width 105px
                margin-left 10px
                img
                  width 108px
                  height 108px
                  margin-bottom 6px
                  background-color #f5f5f5
                .swipe_text
                  margin-top 0
                  margin-bottom 5px
                  font-size 12px
                  .jiage
                    font-size 11px
                    color #b4282d
          .swiper-pagination
            position absolute
            bottom 0px
 
</style>
