<template>
  <!-- main  -->
  <div id="main">
    <!-- wrapper-->
    <div id="wrapper">
      <!-- content-holder-->
      <div class="content-holder hide_footer">
        <div class="header-bg"></div>
        <!-- content -->
        <div class="content fl-wrap">
          <!-- hero-section -->
          <div class="hero-section fl-wrap">
            <div class="hero-section_bg fl-wrap">
              <div class="bg" :data-bg="testUrl"></div>
              <div class="overlay"></div>
              <div class="hero-sec_anim"></div>
            </div>
            <div class="hero-section_title fl-wrap" id="sec1">
              <h2>关 于 我</h2>
            </div>
          </div>
          <!-- hero-section end -->
          <div class="clearfix"></div>
          <!-- container -->
          <div class="container small-container">
            <div class="fl-wrap content-item sec-anim">
              <div class="row">
                <div class="col-md-7">
                  <div class="column-wrapper_text fl-wrap">
                    <h4>MoCheng.shuai&nbsp;&nbsp;&nbsp;我的个人摄影作品展示集</h4>
                    <p>
                      嗨，你好，<br />
                      如你所见，我是一名前端开发程序员，你正在浏览的是我个人网站集合的其中之一，我计划将它完善为一个个人拍摄作品展示集，这只是一个开始。
                    </p>
                    <p>
                      最初版本将仅仅作为我的主站页面之一展示我的个人作品，在未来的版本中，我将逐步为其添加新功能，或将其上线为一个可用的集上传、分享、交流等功能的个人摄影展示站点。
                      逐步开发正在进行中...
                    </p>
                    <br />
                    <h4>如你感兴趣，可以通过如下方式联系我或关注我的平台</h4>
                    <div class="inline-facts-holder fl-wrap">
                      <!-- inline-facts -->
                      <div class="inline-facts">
                        <div class="num">@邮箱</div>
                        <h6>18830279823@163.com</h6>
                      </div>
                      <!-- inline-facts end -->
                      <!-- inline-facts  -->
                      <div class="inline-facts">
                        <div class="num">@手机</div>
                        <h6>15932130680</h6>
                      </div>
                      <!-- inline-facts end -->
                      <!-- inline-facts  -->
                      <div class="inline-facts">
                        <div class="num">github</div>
                        <h6>https://github.com/Mochenghualei</h6>
                      </div>
                      <!-- inline-facts end -->
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="image-collage-wrap fl-wrap">
                    <div class="image-collage-wrap">
                      <div class="image-collage-wrap_container">
                        <img src="../../assets/images/2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- section end-->
            <!-- section -->
            <div class="section fl-wrap sec-anim" id="sec2">
              <div class="section-title">
                <h3>我的其他站点</h3>
              </div>
              <div class="row">
                <div class="col-md-4" v-for="(item, index) in webCardsList" :key="index">
                  <div class="column-wrapper_text services-item fl-wrap">
                    <span class="serv-number">{{ `0${index + 1}.` }}</span>
                    <i class="fal">
                      <icons-i-e width="70" height="70"></icons-i-e>
                    </i>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.content }}</p>
                    <ul class="serv-list">
                      <a href="javascript:;">点击进入</a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- section end-->
            <!-- section -->
            <div class="section fl-wrap sec-anim" id="sec3">
              <div class="section-title">
                <h3>反馈 & 建议</h3>
              </div>
              <div class="testilider fl-wrap">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <!-- swiper-slide -->
                    <div class="swiper-slide" v-for="(item, index) in feedbackList" :key="index">
                      <div class="testi-item fl-wrap">
                        <span class="testi-number">{{ `0${index + 1}.` }}</span>
                        <div class="testi-avatar">
                          <icons-avatar width="150" height="150"></icons-avatar>
                        </div>
                        <h3>{{ item.username }}</h3>
                        <p>
                          {{ `"${item.content}"` }}
                        </p>
                        <a href="javascript:;" class="teti-link">github</a>
                      </div>
                    </div>
                    <!-- swiper-slide end-->
                  </div>
                </div>
              </div>
              <div class="tc-pagination fl-wrap"></div>
              <!-- client-list -->
              <div class="fl-wrap client-list">
                <ul>
                  <li>
                    <a href="javascript:;"><img src="../../assets/images/1.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../../assets/images/2.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../../assets/images/3.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="javascript:;"><img src="../../assets/images/4.png" alt="" /> </a>
                  </li>
                </ul>
                <!-- client-list end-->
              </div>
            </div>
            <!-- section end-->
          </div>
          <!-- container end-->
        </div>
        <!-- content end-->
        <div class="footer-bg fl-wrap">
          <div class="footer-bg_polcy"></div>
          <div class="footer-bg_social_links"></div>
          <div class="to-top-btn"><i class="fal fa-angle-up"></i></div>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar color-bg"></div>
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
        <!--page-scroll-nav-->
        <div class="page-scroll-nav">
          <nav class="scroll-init">
            <ul>
              <li>
                <a class="scroll-link actscr-link" href="#sec1"><span>简介</span></a>
              </li>
              <li>
                <a class="scroll-link" href="#sec2"><span>跳转</span></a>
              </li>
              <li>
                <a class="scroll-link" href="#sec3"><span>反馈 & 建议</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <!--page-scroll-nav end-->
      </div>
      <!-- content-holder end-->
    </div>
    <!-- wrapper end-->
  </div>
  <!-- Main end -->
</template>

<script setup>
useInit()
const testUrl = new URL('../../assets/images/bg.jpeg', import.meta.url).href

// 我的其他站点
const webCardsList = ref([
  { title: '我的个人主页', content: '持续开发中...' },
  { title: '个人健身管理平台', content: '持续开发中...' },
  { title: '实用开发工具导航集合', content: '持续开发中...' },
])

// 反馈列表
const feedbackList = ref([
  { username: '用户名', content: '这里是反馈内容...' },
  { username: '用户名', content: '这里是反馈内容...' },
  { username: '用户名', content: '这里是反馈内容...' },
  { username: '用户名', content: '这里是反馈内容...' },
])
</script>

<style scoped lang="scss"></style>
