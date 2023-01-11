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
    <a href="index.html" class="ajax logo-holder"><img src="../../assets/images/logo.png" alt="" /></a>
    <!--  logo end -->
    <!--  navigation -->
    <div class="nav-holder main-menu">
      <nav>
        <ul>
          <li>
            <a href="index.html" class="ajax">Works</a>
          </li>
          <li>
            <a href="" class="ajax">About</a>
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
              <h2>About Page</h2>
            </div>
          </div>
          <!-- hero-section end -->
          <div class="clearfix"></div>
          <!-- container -->
          <div class="container small-container">
            <div class="fl-wrap content-item sec-anim">
              <div class="row">
                <div class="col-md-6">
                  <div class="column-wrapper_text fl-wrap">
                    <h4>
                      We cover a large range of creative digital projects, platforms, and campaigns to create
                      experiences.
                    </h4>
                    <p>
                      Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut
                      dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .
                    </p>
                    <p>
                      Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem
                      ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in
                      diem sed eius mod tempor incidunt ut labore et dolore magna aliqua.
                    </p>
                    <div class="inline-facts-holder fl-wrap">
                      <!-- inline-facts -->
                      <div class="inline-facts">
                        <div class="num">15</div>
                        <h6>Years of Experience</h6>
                      </div>
                      <!-- inline-facts end -->
                      <!-- inline-facts  -->
                      <div class="inline-facts">
                        <div class="num">24</div>
                        <h6>Awards win</h6>
                      </div>
                      <!-- inline-facts end -->
                      <!-- inline-facts  -->
                      <div class="inline-facts">
                        <div class="num">13k</div>
                        <h6>Awesome Photos</h6>
                      </div>
                      <!-- inline-facts end -->
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
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
                <h3>Services That I Provide</h3>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="column-wrapper_text services-item fl-wrap">
                    <span class="serv-number">01.</span>
                    <i class="fal fa-film-canister"></i>
                    <h4>Commercial Photography</h4>
                    <p>
                      Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut
                      dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .
                    </p>
                    <ul class="serv-list">
                      <li>Portraits</li>
                      <li>Weddings</li>
                      <li>Commercials</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="column-wrapper_text services-item fl-wrap">
                    <span class="serv-number">02.</span>
                    <i class="fal fa-camera-movie"></i>
                    <h4>Video Production</h4>
                    <p>
                      Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut
                      dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .
                    </p>
                    <ul class="serv-list">
                      <li>Montage</li>
                      <li>Slow motion</li>
                      <li>Filming</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="column-wrapper_text services-item fl-wrap">
                    <span class="serv-number">03.</span>
                    <i class="fal fa-rings-wedding"></i>
                    <h4>Wedding Photography</h4>
                    <p>
                      Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut
                      dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .
                    </p>
                    <ul class="serv-list">
                      <li>Commercials</li>
                      <li>Weddings</li>
                      <li>Portraits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- section end-->
            <!-- section -->
            <div class="section fl-wrap sec-anim" id="sec3">
              <div class="section-title">
                <h3>Awesome Clients</h3>
              </div>
              <div class="testilider fl-wrap">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <!-- swiper-slide -->
                    <div class="swiper-slide">
                      <div class="testi-item fl-wrap">
                        <span class="testi-number">01.</span>
                        <div class="testi-avatar"><img src="../../assets/images/1.jpg" alt="" /></div>
                        <h3>Liza Mirovsky</h3>
                        <p>
                          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                          making this the first true generator on the Internet. It uses a dictionary of over "
                        </p>
                        <a href="#" class="teti-link" target="_blank">Via Twitter</a>
                      </div>
                    </div>
                    <!-- swiper-slide end-->
                    <!-- swiper-slide -->
                    <div class="swiper-slide">
                      <div class="testi-item fl-wrap">
                        <span class="testi-number">02.</span>
                        <div class="testi-avatar"><img src="../../assets/images/23.jpg" alt="" /></div>
                        <h3>Andy Smith</h3>
                        <p>
                          "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula
                          suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet
                          sem non porta. "
                        </p>
                        <a href="#" class="teti-link" target="_blank">Via Facebook</a>
                      </div>
                    </div>
                    <!-- swiper-slide end-->
                    <!-- swiper-slide -->
                    <div class="swiper-slide">
                      <div class="testi-item fl-wrap">
                        <span class="testi-number">03.</span>
                        <div class="testi-avatar"><img src="../../assets/images/3.jpg" alt="" /></div>
                        <h3>Mery Trust</h3>
                        <p>
                          "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                          making this the first true generator on the Internet. It uses a dictionary of over "
                        </p>
                        <a href="#" class="teti-link" target="_blank">Via Twitter</a>
                      </div>
                    </div>
                    <!-- swiper-slide end-->
                    <!-- swiper-slide -->
                    <div class="swiper-slide">
                      <div class="testi-item fl-wrap">
                        <span class="testi-number">04.</span>
                        <div class="testi-avatar"><img src="../../assets/images/4.jpg" alt="" /></div>
                        <h3>Centa Simpson</h3>
                        <p>
                          "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula
                          suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet
                          sem non porta. "
                        </p>
                        <a href="#" class="teti-link" target="_blank">Via Facebook</a>
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
                    <a href="#" target="_blank"><img src="../../assets/images/1.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><img src="../../assets/images/2.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><img src="../../assets/images/3.png" alt="" /> </a>
                  </li>
                  <li>
                    <a href="#" target="_blank"><img src="../../assets/images/4.png" alt="" /> </a>
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
        <!-- share-wrapper-->
        <div class="share-wrapper">
          <div class="share-container isShare"></div>
        </div>
        <!-- share-wrapper  end -->
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
                <a class="scroll-link actscr-link" href="#sec1"><span>Story</span></a>
              </li>
              <li>
                <a class="scroll-link" href="#sec2"><span>Services</span></a>
              </li>
              <li>
                <a class="scroll-link" href="#sec3"><span>Clients</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <!--page-scroll-nav end-->
      </div>
      <!-- content-holder end-->
    </div>
    <!-- wrapper end-->
    <!-- social_links-->
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
    <!-- social_links end-->
    <!-- policy-box-->
    <div class="policy-box">
      <span>&#169; Endor 2021 - All rights reserved. </span>
    </div>
    <!-- policy-box end-->
    <!-- cursor-->
    <div class="element">
      <div class="element-item"></div>
    </div>
    <!-- cursor end-->
  </div>
  <!-- Main end -->
</template>

<script setup>
import '../../assets/js/scripts'

const testUrl = new URL('../../assets/images/2.jpg', import.meta.url).href
</script>

<style scoped lang="scss"></style>
