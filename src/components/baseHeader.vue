<template>
  <!--  logo -->
  <a href="/" class="ajax logo-holder"><img src="../assets/images/logo.png" alt="" /></a>
  <!--  logo结束 -->
  <!-- 背景时间 -->
  <div class="bg-clock">
    <span>{{ curDate }}</span>
    <span>{{ curClock }}</span>
  </div>
  <!--  导航栏 -->
  <div class="nav-holder main-menu">
    <nav>
      <ul>
        <li>
          <router-link to="/about" replace>
            <span class="ajax">关于我</span>
          </router-link>
        </li>
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
      <div class="share-icon"><icons-friendscircle></icons-friendscircle></div>
      <div class="share-icon"><icons-wechat></icons-wechat></div>
      <div class="share-icon"><icons-sina></icons-sina></div>
      <div class="share-icon" @click="handlerLinkShare"><icons-link></icons-link></div>
    </div>
  </div>
  <!--  分享结束 -->
</template>

<script setup>
const { curDate, curClock } = useDate()

onMounted(() => {
  // 分享按钮交互相关
  // Share   ------------------
  var shrcn = $('.share-container'),
    shic = $('.share-icon'),
    ssbtn = $('.share')
  function showShare() {
    ssbtn.addClass('uncl-share')
    shrcn.removeClass('isShare')
    shic.each(function (a) {
      var boi = $(this)
      setTimeout(function () {
        TweenMax.to(boi, 0.5, {
          force3D: false,
          opacity: '1',
        })
      }, 130 * a)
    })
  }
  function hideShare() {
    ssbtn.removeClass('uncl-share')
    shrcn.addClass('isShare')
    TweenMax.to($('.share-icon'), 1.0, {
      force3D: false,
      opacity: '0',
    })
  }
  ssbtn.on('click', function () {
    if ($('.share-container').hasClass('isShare')) showShare()
    else hideShare()
  })
})

const handlerLinkShare = () => {
  ElMessage({ message: '链接已复制到剪切板', duration: 3000, type: 'success' })
}
</script>

<style scoped lang="scss"></style>
