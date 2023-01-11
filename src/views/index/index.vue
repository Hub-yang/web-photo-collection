<template>
  <!--main-loader  -->
  <div class="main-loader">
    <div class="ml-wrap">
      <div class="ml-mask"></div>
      <img src="../../assets/images/logo.png" alt="" />
    </div>
  </div>
  <!-- main-loader end -->
  <!-- main  -->
  <div id="main">
    <!--  logo -->
    <a href="" class="ajax logo-holder"><img src="../../assets/images/logo.png" alt="" /></a>
    <!--  logo end -->
    <!--  navigation -->
    <div class="nav-holder main-menu">
      <nav>
        <ul>
          <li>
            <a href="" class="ajax">Works</a>
          </li>
          <li>
            <router-link to="/about">
              <span class="ajax">About</span>
            </router-link>
          </li>
          <li>
            <a href="blog.html" class="ajax">News</a>
          </li>
          <li>
            <a href="contacts.html" class="ajax">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- navigation  end -->
    <!--  share btn -->
    <div class="share-btn">Share</div>
    <!--  share btn end -->
    <div class="nav-button-wrap">
      <div class="nav-button"><span></span><span></span><span></span></div>
    </div>
    <!--  navigation -->
    <!-- wrapper-->
    <div id="wrapper">
      <!--  content-holder -->
      <div class="content-holder hide_footer2">
        <div class="header-bg hb_mob"></div>
        <div class="filter-btn hid-filter">
          <div class="filter-btn_container aside_anim"></div>
          <span class="filt-title">筛选</span>
        </div>
        <!-- gallery-filters-wrap-->
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
        <!--gallery-filters-wrap end-->
        <!--  hero-showcase-wrap -->
        <div class="hero-showcase-wrap">
          <div class="hero-showcase">
            <div class="gallery-items sf_true">
              <div class="gallery-items-container fl-wrap">
                <!-- gallery-item -->
                <div v-for="(item, index) in imgList" :key="index" :class="['gallery-item', item.class]">
                  <div class="hov_box">
                    <img :src="item.url" alt="" />
                    <div class="overlay"></div>
                    <div class="hov_box-title">
                      <a href="portfolio-single.html" class="ajax">{{ item.title }}</a>
                      <div class="cat_item">{{ item.catName }}</div>
                    </div>
                  </div>
                </div>
                <!-- gallery-item end-->
              </div>
            </div>
          </div>
        </div>
        <!--  hero-showcase-wrap end -->
        <div class="mob-footer_gal mfg-2 fl-wrap">
          <div class="to-top-btn"><i class="fal fa-angle-up"></i></div>
        </div>
        <!-- share-wrapper-->
        <div class="share-wrapper">
          <div class="share-container isShare"></div>
        </div>
        <!-- share-wrapper  end -->
      </div>
      <!--  content-holder end -->
    </div>
    <!-- wrapper end-->
    <!--  social_links -->
    <div class="social_links">
      <div class="sc-links_clone">
        <span>Follow:</span>
        <ul>
          <li><a href="#" target="_blank">Fb</a></li>
          <li><a href="#" target="_blank">Ins</a></li>
          <li><a href="#" target="_blank">Tw</a></li>
          <li><a href="#" target="_blank">Vk</a></li>
        </ul>
      </div>
    </div>
    <!--  social_links end -->
    <!--  policy-box -->
    <div class="policy-box">
      <span>&#169; Endor 2021 - 版权所有 </span>
    </div>
    <!--  policy-box end-->
    <!-- cursor-->
    <base-cursor></base-cursor>
    <!-- cursor end-->
  </div>
  <!-- Main end -->
</template>
<script setup>
import '../../assets/js/scripts'

// 图片列表
const imgList = ref([
  {
    class: 'nature',
    url: new URL('../../assets/images/22.jpg', import.meta.url).href,
    title: 'Alone on Nature.',
    catName: '自然',
  },
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
])
</script>
