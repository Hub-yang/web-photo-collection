<template>
  <!--  logo -->
  <a href="/" class="ajax logo-holder"><img src="../assets/images/logo.png" alt="" /></a>
  <!--  logo结束 -->
  <!--  导航栏 -->
  <div class="nav-holder main-menu">
    <nav>
      <ul>
        <!-- <li>
          <a href="" class="ajax">Works</a>
        </li> -->
        <li>
          <router-link to="/about" replace>
            <span class="ajax">关于我</span>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/blog" replace>
            <span class="ajax">消息</span>
          </router-link>
        </li> -->
        <li>
          <router-link to="/contacts" replace>
            <span class="ajax">联系我</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <div class="nav-button-wrap">
    <div class="nav-button"><span></span><span></span><span></span></div>
  </div>
  <!-- 导航栏结束 -->
  <!--  分享 -->
  <div class="share">分 享</div>
  <div class="share-wrapper1">
    <div class="share-container isShare">
      <div class="share-icon"><RiBilibiliFill></RiBilibiliFill></div>
      <div class="share-icon"></div>
      <div class="share-icon"></div>
      <div class="share-icon">888</div>
    </div>
  </div>
  <!--  分享结束 -->
</template>

<style scope lang="scss"></style>
