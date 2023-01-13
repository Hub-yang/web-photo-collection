<template>
  <!--  页脚链接 -->
  <div :class="[!isHomePage ? 'social_links' : 'index_container']">
    <div class="sc-links_clone">
      <span>导航</span>
      <ul>
        <li>
          <a href="javascript:;">
            <svg-icon name="bilibili" :width="normalSize" :height="normalSize" color="#fff"></svg-icon>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <svg-icon name="zhihu" :width="normalSize" :height="normalSize" color="#fff"></svg-icon>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <svg-icon name="github" :width="normalSize" :height="normalSize" color="#fff"></svg-icon>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <svg-icon name="google" :width="normalSize" :height="normalSize" color="#fff"></svg-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!--  页脚链接结束 -->
  <!--  页脚版权 -->
  <div class="policy-box">
    <span>&#169; Endor 2023 - 版权所有 </span>
  </div>
  <!--  页脚版权结束 -->
  <!-- 指针 -->
  <div class="element" ref="element">
    <div class="element-item"></div>
  </div>
  <!-- 指针结束 -->
</template>

<script setup>
const route = useRoute()
const isHide = ref(false)
const isHomePage = ref(false)
const normalSize = ref('20')
onBeforeMount(() => {
  resize()
  window.onresize = resize
})

const resize = () => {
  if (window.innerWidth >= 1066) {
    isHide.value = false
    normalSize.value = '18'
  } else {
    isHide.value = true
    normalSize.value = '20'
  }
}

watch(
  () => route.meta.isHomePage,
  (newVal) => {
    if (newVal && !isHide.value) isHomePage.value = true
    else {
      isHomePage.value = false
      normalSize.value = '20'
    }
  },
)
</script>

<style lang="scss">
.index_container {
  position: fixed;
  bottom: 33px;
  left: 50px;
  z-index: 20;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  span {
    margin-right: 10px;
  }
}

.index_container .sc-links_clone {
  display: flex;
  ul {
    display: flex;
    li {
      margin-left: 10px;
    }
  }
}
</style>
