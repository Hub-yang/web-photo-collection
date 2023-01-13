<template>
  <!-- 首页加载动画  -->
  <!-- <div class="main-loader">
    <div class="ml-wrap">
      <div class="ml-mask"></div>
      <img src="../../assets/images/logo.png" alt="" />
    </div>
  </div> -->
  <!-- 首页加载动画结束 -->
  <div id="main">
    <!-- 筛选 -->
    <div id="wrapper">
      <div class="content-holder hide_footer2">
        <div class="header-bg hb_mob"></div>
        <div class="filter-btn hid-filter">
          <div class="filter-btn_container aside_anim"></div>
          <span class="filt-title">筛选</span>
        </div>
        <div class="gallery-filters-wrap">
          <div class="gallery-filters">
            <a href="#" class="gallery-filter gallery-filter-active" data-filter="*"><span>01.</span>全部照片</a>
            <a href="#" class="gallery-filter" data-filter=".nature"><span>02.</span>自然</a>
            <a href="#" class="gallery-filter" data-filter=".models"><span>03.</span>模特</a>
            <a href="#" class="gallery-filter" data-filter=".couples"><span>04.</span>景色</a>
            <a href="#" class="gallery-filter" data-filter=".outdoor"><span>05.</span>户外</a>
            <div class="count-folio">
              <div class="num-album"></div>
            </div>
          </div>
          <div class="gallery-filters-overlay"></div>
        </div>
        <!-- 主界面列表 -->
        <div class="hero-showcase-wrap">
          <div class="hero-showcase">
            <div class="gallery-items sf_true">
              <div class="gallery-items-container fl-wrap lightgallery">
                <div v-for="(item, index) in imgList" :key="index" :class="['gallery-item hov_zoom', item.class]">
                  <div class="hov_box">
                    <img :src="item.url" alt="" />
                    <a :href="item.url" class="box-media-zoom popup-image"><i class="fal fa-search"></i></a>
                    <div class="overlay"></div>
                    <div class="hov_box-title">
                      <!-- <a href="portfolio-single.html" class="ajax">{{ item.title }}</a> -->
                      <a href="javascript:;" class="ajax">{{ item.title }}</a>
                      <div class="cat_item">{{ item.catName }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 主界面列表结束 -->
        <!-- 返回顶部 -->
        <base-back-top></base-back-top>
        <!-- 返回顶部结束 -->
      </div>
    </div>
    <!-- 筛选结束 -->
  </div>
</template>
<script setup>
useInit()
// 图片列表数据
const imgList = ref([
  // {
  //   class: 'nature',
  //   url: new URL('../../assets/images/22.jpg', import.meta.url).href,
  //   title: 'Alone on Nature.',
  //   catName: '自然',
  // },
  {
    class: 'models',
    url: new URL('../../assets/images/24.jpg', import.meta.url).href,
    title: 'Old Cars On Streets.',
    catName: '模特',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/31.jpg', import.meta.url).href,
    title: 'Living my Dream.',
    catName: '景色',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/41.jpg', import.meta.url).href,
    title: 'Forever Young.',
    catName: '模特',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/5.jpg', import.meta.url).href,
    title: 'Sunny Side Up.',
    catName: '景色',
  },
  {
    class: 'outdoor couples',
    url: new URL('../../assets/images/6.jpg', import.meta.url).href,
    title: 'The Other Aide of Me.',
    catName: '景色|户外',
  },
  {
    class: 'nature outdoor',
    url: new URL('../../assets/images/21.jpg', import.meta.url).href,
    title: 'Discover Norway.',
    catName: '自然|户外',
  },
  {
    class: 'nature couples',
    url: new URL('../../assets/images/13.jpg', import.meta.url).href,
    title: 'A Wonderful Life.',
    catName: '景色|户外',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/14.jpg', import.meta.url).href,
    title: 'Happy Flashbacks.',
    catName: '户外',
  },
  {
    class: 'models outdoor',
    url: new URL('../../assets/images/9.jpg', import.meta.url).href,
    title: 'Go Green Morning.',
    catName: '模特|户外',
  },
  {
    class: 'couples',
    url: new URL('../../assets/images/10.jpg', import.meta.url).href,
    title: 'Travelling is Fun.',
    catName: '景色',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/8.jpg', import.meta.url).href,
    title: 'Life, here I Come.',
    catName: '模特',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/11.jpg', import.meta.url).href,
    title: 'My Blooming Backyard.',
    catName: '自然',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/12.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '户外',
  },
  {
    class: 'models',
    url: new URL('../../assets/images/16.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '模特',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/17.jpg', import.meta.url).href,
    title: 'Just Happy.',
    catName: '自然',
  },
  {
    class: 'outdoor',
    url: new URL('../../assets/images/18.jpg', import.meta.url).href,
    title: 'Happy Flashbacks.',
    catName: '户外',
  },
  {
    class: 'outdoor nature',
    url: new URL('../../assets/images/my1.jpg', import.meta.url).href,
    title: 'Beautiful.',
    catName: '户外|自然',
  },
  {
    class: 'nature',
    url: new URL('../../assets/images/my2.jpg', import.meta.url).href,
    title: 'Beautiful.',
    catName: '自然',
  },
])
</script>
