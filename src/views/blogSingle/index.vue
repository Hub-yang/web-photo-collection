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
          <div class="hero-section fl-wrap single-post_title">
            <div class="hero-section_bg fl-wrap">
              <div class="bg" :data-bg="testUrl1"></div>
              <div class="overlay"></div>
              <div class="hero-sec_anim"></div>
            </div>
            <div class="hero-section_title fl-wrap">
              <h4>Outdoor , Traveling</h4>
              <h2>Snowy Mountains Trip</h2>
              <h5>May 9, 2021</h5>
            </div>
          </div>
          <!-- hero-section end-->
          <div class="clearfix"></div>
          <!-- container -->
          <div class="container small-container">
            <div class="fl-wrap content-item sec-anim">
              <!-- single-post-container-->
              <div class="single-post-container">
                <h4 class="bold-title">Cras lacinia magna vel molestie faucibus.</h4>
                <p>
                  Vestibulum lacinia mi non lacus tincidunt accumsan. Nunc venenatis erat ac enim facilisis pulvinar.
                  Donec placerat et velit nec bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Donec luctus, augue vitae blandit lobortis, augue urna varius tellus, et viverra
                  odio ipsum id velit. Morbi pellentesque scelerisque dignissim. In dignissim luctus augue. Phasellus
                  viverra nibh vel sapien facilisis, id placerat nunc congue. Aliquam erat volutpat. Aenean semper dui
                  id accumsan pulvinar. Aliquam congue mollis turpis, a volutpat metus lobortis nec. Integer in mollis
                  quam. Cras nisl mi, dapibus a ante non, accumsan luctus augue.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet
                  vitae eget dolor. Proin eu ultrices libero. Aliquam erat volutpat. Aenean semper dui id accumsan
                  pulvinar. Aliquam congue mollis turpis, a volutpat metus lobortis nec. Integer in mollis quam. Cras
                  nisl mi, dapibus a ante non, accumsan luctus augue.
                </p>
                <!-- blog media -->
                <div class="blog-media fl-wrap">
                  <div class="single-slider-wrap">
                    <div class="single-slider fl-wrap">
                      <div class="swiper-container">
                        <div class="swiper-wrapper lightgallery">
                          <div class="swiper-slide hov_zoom">
                            <img :src="testUrl4" alt="" /><a :href="testUrl4" class="box-media-zoom popup-image"
                              ><i class="fal fa-search"></i
                            ></a>
                          </div>
                          <div class="swiper-slide hov_zoom">
                            <img :src="testUrl5" alt="" /><a :href="testUrl5" class="box-media-zoom popup-image"
                              ><i class="fal fa-search"></i
                            ></a>
                          </div>
                          <div class="swiper-slide hov_zoom">
                            <img :src="testUrl6" alt="" /><a :href="testUrl6" class="box-media-zoom popup-image"
                              ><i class="fal fa-search"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tc-pagination fl-wrap"></div>
                    <div class="ss-slider-cont ss-slider-cont-prev"><i class="fal fa-long-arrow-left"></i></div>
                    <div class="ss-slider-cont ss-slider-cont-next"><i class="fal fa-long-arrow-right"></i></div>
                  </div>
                </div>
                <!-- blog media end -->
                <p>
                  Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum
                  elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.
                </p>
                <blockquote>
                  <p>
                    Cras lacinia magna vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cras lacinia magna vel molestie faucibus.Cras lacinia magna vel
                    molestie faucibus. Donec auctor et urnaLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                    lacinia magna vel molestie faucibus.Cras lacinia magna vel molestie faucibus.
                  </p>
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi et nibh sollicitudin
                  pellentesque vitae sit amet tortor. Vestibulum lacinia mi non lacus tincidunt accumsan. Nunc venenatis
                  erat ac enim facilisis pulvinar. Donec placerat et velit nec bibendum. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Donec luctus, augue vitae blandit lobortis, augue
                  urna varius tellus, et viverra odio ipsum id velit. Morbi pellentesque scelerisque dignissim. In
                  dignissim luctus augue. Phasellus viverra nibh vel sapien facilisis, id placerat nunc congue. Aliquam
                  erat volutpat. Aenean semper dui id accumsan pulvinar. Aliquam congue mollis turpis, a volutpat metus
                  lobortis nec. Integer in mollis quam. Cras nisl mi, dapibus a ante non, accumsan luctus augue.
                </p>
                <div class="pr-tags fl-wrap">
                  <span>Tags : </span>
                  <ul>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Photography</a></li>
                    <li><a href="#">Fasion</a></li>
                  </ul>
                </div>
              </div>
              <!-- single-post-container end-->
            </div>
            <!-- section end-->
          </div>
          <!--content-nav_holder-->
          <div class="content-nav_holder fl-wrap sec-anim">
            <div class="content-nav">
              <ul>
                <li>
                  <a href="" class="ln ajax"
                    ><i class="fal fa-long-arrow-left"></i><span>Prev <strong>- Post Title</strong></span></a
                  >
                  <div class="content-nav-media">
                    <div class="bg" :data-bg="testUrl2"></div>
                  </div>
                </li>
                <li>
                  <a href="" class="rn ajax"
                    ><span>Next <strong>- Post Title</strong></span> <i class="fal fa-long-arrow-right"></i
                  ></a>
                  <div class="content-nav-media">
                    <div class="bg" :data-bg="testUrl3"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--content-nav_holder end -->
          <div class="single-post-container sec-anim">
            <div class="comment-container fl-wrap">
              <div id="comments" class="single-post-comm fl-wrap">
                <!--title-->
                <ul class="commentlist clearafix"></ul>
                <div class="clearfix"></div>
                <div id="respond" class="clearafix">
                  <h4 class="bold-title">Leave A Review</h4>
                  <form class="custom-form" name="commentform">
                    <fieldset>
                      <input type="text" name="name" id="name2" placeholder="Your Name *" value="" />
                      <input type="text" name="email" id="email2" placeholder="Email Address *" value="" />
                      <textarea
                        name="comments"
                        id="comments2"
                        cols="40"
                        rows="3"
                        placeholder="Your Message:"
                      ></textarea>
                      <button class="btn float-btn" id="submit">Add Comment</button>
                    </fieldset>
                  </form>
                </div>
                <!--end respond-->
              </div>
              <!--comments end -->
            </div>
          </div>
          <!-- sidebar-button -->
          <div class="sidebar-button-wrap vis-m">
            <span>Open Sidebar</span>
          </div>
          <!-- sidebar-button end-->
          <div class="sidebar-container">
            <div class="sb-det_overlay"></div>
            <div class="sidebar-content">
              <div class="sidebar-item fl-wrap">
                <!-- main-sidebar-widget-->
                <div class="main-sidebar-widget">
                  <div class="search-widget fl-wrap">
                    <form action="#">
                      <input
                        name="se"
                        id="se"
                        type="text"
                        class="search-inpt-item"
                        placeholder="Search.."
                        value="Search..."
                      />
                      <button class="search-submit color-bg" id="submit_btn"><i class="fal fa-search"></i></button>
                    </form>
                  </div>
                </div>
                <!-- main-sidebar-widget end-->
                <!-- main-sidebar-widget-->
                <div class="main-sidebar-widget">
                  <h3>Categories</h3>
                  <div class="category-widget">
                    <ul class="cat-item">
                      <li><a href="#">Seafood</a><span>12</span></li>
                      <li><a href="#">Receipts</a><span>21</span></li>
                      <li><a href="#">Dishes</a><span>34</span></li>
                      <li><a href="#">Travel</a><span>8</span></li>
                      <li><a href="#">Photos</a><span>9</span></li>
                    </ul>
                  </div>
                </div>
                <!-- main-sidebar-widget end-->
                <!-- main-sidebar-widget-->
                <div class="main-sidebar-widget">
                  <h3>Recent Posts</h3>
                  <div class="recent-post-widget">
                    <ul>
                      <li>
                        <div class="recent-post-img">
                          <a href="#"><img src="../../assets/images/51.jpg" alt="" /></a>
                        </div>
                        <div class="recent-post-content">
                          <h4><a href="#">Snowy Mountains Trip</a></h4>
                          <div class="recent-post-opt">
                            <span class="post-date">3 May 2016</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="recent-post-img">
                          <a href="#"><img src="../../assets/images/61.jpg" alt="" /></a>
                        </div>
                        <div class="recent-post-content">
                          <h4><a href="#">Snowy Mountains Trip</a></h4>
                          <div class="recent-post-opt">
                            <span class="post-date">3 May 2016</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="recent-post-img">
                          <a href="#"><img src="../../assets/images/7.jpg" alt="" /></a>
                        </div>
                        <div class="recent-post-content">
                          <h4><a href="#">Snowy Mountains Trip</a></h4>
                          <div class="recent-post-opt">
                            <span class="post-date">3 May 2016</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- main-sidebar-widget end-->
                <!-- main-sidebar-widget-->
                <div class="main-sidebar-widget">
                  <h3>Resent tags</h3>
                  <div class="tags-widget">
                    <div class="tagcloud">
                      <a href="#">Lifystyle</a>
                      <a href="#">Travel</a>
                      <a href="#">Trip</a>
                      <a href="#">Outdoor</a>
                      <a href="#">Camping</a>
                      <a href="#">Photos</a>
                      <a href="#">Adventure</a>
                    </div>
                  </div>
                </div>
                <!-- main-sidebar-widget end-->
              </div>
            </div>
          </div>
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
      </div>
      <!-- content-holder end-->
    </div>
    <!-- wrapper end-->
  </div>
  <!-- Main end -->
</template>

<script setup>
useInit()

const testUrl4 = new URL('../../assets/images/61.jpg', import.meta.url).href
const testUrl5 = new URL('../../assets/images/91.jpg', import.meta.url).href
const testUrl6 = new URL('../../assets/images/7.jpg', import.meta.url).href

const testUrl1 = new URL('../../assets/images/2.jpg', import.meta.url).href
const testUrl2 = new URL('../../assets/images/5.jpg', import.meta.url).href
const testUrl3 = new URL('../../assets/images/8.jpg', import.meta.url).href
</script>

<style scoped lang="scss"></style>
