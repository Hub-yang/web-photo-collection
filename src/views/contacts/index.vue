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
            <a href="about.html" class="ajax">About</a>
          </li>
          <li>
            <a href="blog.html" class="ajax">News</a>
          </li>
          <li>
            <a href="" class="ajax">Contacts</a>
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
        <!-- content -->
        <div class="header-bg"></div>
        <!-- content-->
        <div class="content fl-wrap">
          <!-- hero-section -->
          <div class="hero-section fl-wrap">
            <div class="hero-section_bg fl-wrap">
              <div class="bg" data-bg="images/bg/1.jpg"></div>
              <div class="overlay"></div>
              <div class="hero-sec_anim"></div>
            </div>
            <div class="hero-section_title fl-wrap">
              <h2>Contact Page</h2>
            </div>
          </div>
          <!-- hero-section end-->
          <div class="clearfix"></div>
          <!-- container-->
          <div class="container small-container">
            <div class="fl-wrap content-item sec-anim" style="margin-bottom: 150px">
              <div class="row">
                <div class="col-md-6">
                  <div class="column-wrapper_text fl-wrap">
                    <p>
                      Praesent nec leo venenatis elit semper aliquet id ac enim. Maecenas nec mi leo. Etiam venenatis ut
                      dui non hendrerit. Integer dictum, diam vitae blandit accumsan, dolor odio tempus arcu .
                    </p>
                    <div class="contact-details fl-wrap">
                      <ul>
                        <li><span>Mail :</span><a href="#" target="_blank">yourmail@domain.com</a></li>
                        <li><span>Adress :</span><a href="#" target="_blank">USA 27TH Brooklyn NY</a></li>
                        <li><span>Phone :</span><a href="#">+7(111)123456789</a> , <a href="#">+8(222)987654321</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div id="contact-form" class="fl-wrap">
                    <div id="message"></div>
                    <form class="custom-form" action="php/contact.php" name="contactform" id="contactform">
                      <fieldset>
                        <input type="text" name="name" id="name" placeholder="Your Name *" class="cnt-anim" value="" />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address *"
                          class="cnt-anim"
                          value=""
                        />
                        <textarea
                          name="comments"
                          id="comments"
                          cols="40"
                          rows="3"
                          placeholder="Your Message:"
                          class="cnt-anim"
                        ></textarea>
                        <button class="cnt-anim" id="submit">Send Message</button>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
        <div class="fixed-aside-btn">
          <a href="about.html" class="ajax fixed-aside-btn_item">About Page <i class="far fa-chevron-right"></i></a>
        </div>
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
</script>

<style scoped lang="scss"></style>
