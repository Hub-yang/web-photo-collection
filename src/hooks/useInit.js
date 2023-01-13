import { getLoaderState, setLoaderState } from '@/utils/useRunLoader'
export const useInit = () => {
  const route = useRoute()
  const isHomePage = route.meta.isHomePage
  const isFirstLoad = !getLoaderState()

  onMounted(() => {
    function initEndor() {
      // preload------------------

      // 判断是否为首页
      if (isHomePage && isFirstLoad) {
        firstLoad()
      } else {
        pageLoad()
      }

      function pageLoad() {
        TweenMax.to('.ml-mask', 0.3, {
          xPercent: 100,
          repeat: 0,
          yoyo: false,
          repeatDelay: 0.2,
          ease: Linear.easeNone,
          onComplete: function () {
            initpageloadAnimation()
            nc()
          },
        })
      }

      function firstLoad() {
        TweenMax.to('.ml-mask', 1.7, {
          xPercent: 100,
          repeat: 0,
          yoyo: false,
          repeatDelay: 0.5,
          ease: Linear.easeNone,
          onComplete: function () {
            $('.main-loader').fadeOut(1300)
            initpageloadAnimation()
            nc()
          },
        })
      }
      // parallax------------------
      var n = $('.bg')
      n.each(function (a) {
        if ($(this).attr('data-bg')) $(this).css('background-image', 'url(' + $(this).data('bg') + ')')
      })
      $(window).on('scroll', function () {
        var scrolled = $(this).scrollTop()
        $('.hero-section_bg .bg').css('transform', 'translate3d(0, ' + +(scrolled * 0.25) + 'px, 0)')
      })
      //   clone ------------------
      $.fn.duplicate = function (a, b) {
        var c = []
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get())
        return this.pushStack(c)
      }
      $("<div class='filt-line'></div>").duplicate(4).appendTo('.filter-btn_container')
      $(window).on('resize', function () {
        setUpCarouselSlider()
        $('.fw-carousel .swiper-container').css({
          height: $('.fw-carousel').outerHeight(true),
        })
      })
      $('.fw-carousel .swiper-container').css({
        height: $('.fw-carousel').outerHeight(true),
      })
      //   sliders ------------------
      function setUpCarouselSlider() {
        $('.fw-carousel .swiper-wrapper').addClass('no-horizontal-slider')
        if ($('.fw-carousel').length > 0) {
          if ($(window).width() >= 1064 && j2 == undefined) {
            var j2 = new Swiper('.fw-carousel .swiper-container', {
              preloadImages: false,
              loop: false,
              freeMode: false,
              slidesPerView: 'auto',
              spaceBetween: 10,
              grabCursor: true,
              mousewheel: true,
              speed: 1400,
              direction: 'horizontal',
              scrollbar: {
                el: '.hs_init',
                draggable: true,
              },
              effect: 'slide',
              navigation: {
                nextEl: '.fw-carousel-button-next',
                prevEl: '.fw-carousel-button-prev',
              },
              on: {
                resize: function () {
                  if ($(window).width() < 1064) {
                    j2.update()
                  }
                },
              },
            })
          }
          if ($(window).width() < 1064 && j2 !== undefined) {
            j2.destroy()
            j2 = undefined
            $('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider')
            $('.swiper-slide').removeAttr('style')
          }
        }
      }
      setUpCarouselSlider()
      if ($('.testilider').length > 0) {
        var j2 = new Swiper('.testilider .swiper-container', {
          preloadImages: false,
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: false,
          pagination: {
            el: '.tc-pagination',
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
            },
          },
        })
      }
      if ($('.single-slider').length > 0) {
        var j2 = new Swiper('.single-slider .swiper-container', {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          autoHeight: true,
          grabCursor: false,
          mousewheel: false,
          pagination: {
            el: '.tc-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.ss-slider-cont-next',
            prevEl: '.ss-slider-cont-prev',
          },
        })
      }
      // isotope------------------
      function nc() {
        if ($('.gallery-items').length) {
          var $grid = $('.gallery-items').isotope({
            singleMode: true,
            columnWidth: '.grid-sizer, .grid-sizer-second, .grid-sizer-three',
            itemSelector: '.gallery-item',
            transformsEnabled: false,
            transitionDuration: '700ms',
          })
          $grid.imagesLoaded(function () {
            $grid.isotope('layout')
          })
          $('.gallery-filters').on('click', 'a.gallery-filter', function (b) {
            b.preventDefault()
            var c = $(this).attr('data-filter'),
              d = $(this).text()
            if ($('.gallery-items').hasClass('sf_true')) {
              TweenMax.to(portfolio, 1.0, {
                scrollTop: 0,
                force3D: true,
              })
              TweenMax.to(portfolio, 1.0, {
                scrollLeft: 0,
                force3D: true,
              })
              setTimeout(function () {
                $grid.isotope({
                  filter: c,
                })
              }, 1200)
            } else {
              $grid.isotope({
                filter: c,
              })
            }
            $('.gallery-filters a').removeClass('gallery-filter-active')
            $(this).addClass('gallery-filter-active')
          })
        }
        $('.gallery-items').isotope('on', 'layoutComplete', function (a, b) {
          var b = a.length
          $('.num-album').html(b)
        })
        var b = $('.gallery-item').length
        $('.all-album , .num-album').html(b)
        var portfolio = $('.hero-showcase'),
          wrapScreenHeight = portfolio.height(),
          wrapHeight = portfolio.height(),
          listHeight = portfolio.find('.gallery-items').height(),
          wrapScreenwidht = portfolio.width(),
          wrapwidth = portfolio.width(),
          listwidth = portfolio.find('.gallery-items').width()
        portfolio.on('mousemove', function (e) {
          var dP = e.pageY / wrapHeight
          var dP2 = e.pageX / wrapwidth
          TweenMax.to(portfolio, 2.9, {
            scrollTop: listHeight * dP - wrapScreenHeight / 2,
            force3D: true,
          })
          TweenMax.to(portfolio, 2.9, {
            scrollLeft: listwidth * dP2 - wrapScreenwidht / 2,
            force3D: true,
          })
        })
      }
      nc()
      // isotope------------------
      function postGrid() {
        if ($('.post-items').length) {
          var $grid2 = $('.post-items').isotope({
            singleMode: true,
            columnWidth: '.grid-sizer, .grid-sizer-second, .grid-sizer-three',
            itemSelector: '.post-item',
          })
          $grid2.imagesLoaded(function () {
            $grid2.isotope('layout')
          })
        }
      }
      postGrid()
      // scroll nav------------------
      $('.scroll-init ul').singlePageNav({
        filter: ':not(.external)',
        updateHash: false,
        offset: 170,
        threshold: 120,
        speed: 1200,
        currentClass: 'actscr-link',
      })
      $('.to-top-btn').on('click', function () {
        TweenLite.to(window, 2, {
          scrollTo: {
            y: 0,
            offsetY: 0,
            autoKill: false,
          },
        })
      })
      //   lightGallery------------------
      $('.image-popup').lightGallery({
        selector: 'this',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        download: true,
        counter: false,
      })
      var o = $('.lightgallery'),
        p = o.data('looped')
      o.lightGallery({
        selector: '.lightgallery a.popup-image',
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        download: true,
        loop: true,
        counter: false,
      })
      // filters / details------------------
      var gfw = $('.gallery-filters-wrap'),
        gfo = $('.gallery-filters-overlay'),
        filbtn = $('.filter-btn'),
        gfa = $('.gallery-filters a'),
        gfwcf = $('.gallery-filters-wrap .count-folio')

      function showFilters() {
        gfw.fadeIn(1)
        filbtn.removeClass('hid-filter')
        gfo.addClass('vis_overlay')
        setTimeout(function () {
          gfa.each(function (a) {
            var boi = $(this)
            setTimeout(function () {
              TweenMax.to(boi, 0.5, {
                force3D: true,
                ease: Power2.easeOut,
                opacity: '1',
                top: '0',
                onComplete: function () {
                  TweenMax.to(gfwcf, 1.0, {
                    force3D: false,
                    opacity: '1',
                  })
                },
              })
            }, 130 * a)
          })
        }, 400)
      }
      function hideFilters() {
        filbtn.addClass('hid-filter')
        gfo.removeClass('vis_overlay')
        TweenMax.to(gfa, 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          opacity: '0',
          top: '10px',
        })
        TweenMax.to(gfwcf, 0.5, {
          force3D: false,
          opacity: '0',
        })
        setTimeout(function () {
          gfw.fadeOut(1)
        }, 200)
      }
      filbtn.on('click', function () {
        if ($(this).hasClass('hid-filter')) showFilters()
        else hideFilters()
      })
      gfo.on('click', function () {
        hideFilters()
      })
      function showDetails() {
        $('.fw-carousel-wrap').addClass('viscale')
        $('.pr-det_wrapper').fadeIn(1)
        $('.pr-det_overlay').addClass('vis_detoverlay')
        TweenMax.to($('.pr-det_title'), 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          opacity: '1',
          left: '60px',
        })
        TweenMax.to($('.pr-det_box'), 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          opacity: '1',
          left: '0',
          delay: 0.3,
        })
      }
      function hideDetails() {
        $('.fw-carousel-wrap').removeClass('viscale')
        TweenMax.to($('.pr-det_title , .pr-det_box'), 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          opacity: '0',
          left: '-60px',
        })
        setTimeout(function () {
          $('.fw-carousel-wrap').removeClass('viscale')
          $('.pr-det_wrapper').fadeOut(1)
          $('.pr-det_overlay').removeClass('vis_detoverlay')
        }, 500)
      }
      $('.pr-det_btn').on('click', function () {
        showDetails()
      })
      $('.cpr_det').on('click', function () {
        hideDetails()
      })
      function showSidebar() {
        $('.sidebar-container').fadeIn(1)
        $('.sb-det_overlay').addClass('vis_sboverlay')
        TweenMax.to($('.sidebar-content '), 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          delay: 0.3,
          right: 0,
        })
      }
      function hideSidebar() {
        TweenMax.to($('.sidebar-content '), 0.5, {
          force3D: true,
          ease: Power2.easeOut,
          right: '-500px',
          onComplete: function () {
            $('.sidebar-container').fadeOut(1)
            $('.sb-det_overlay').removeClass('vis_sboverlay')
          },
        })
      }
      $('.sidebar-button-wrap').on('click', function () {
        showSidebar()
      })
      $('.sb-det_overlay').on('click', function () {
        hideSidebar()
      })
      //   Contact form------------------
      $('#contactform').submit(function () {
        var a = $(this).attr('action')
        $('#message').slideUp(750, function () {
          $('#message').hide()
          $('#submit').attr('disabled', 'disabled')
          $.post(
            a,
            {
              name: $('#name').val(),
              email: $('#email').val(),
              comments: $('#comments').val(),
            },
            function (a) {
              document.getElementById('message').innerHTML = a
              $('#message').slideDown('slow')
              $('#submit').removeAttr('disabled')
              if (null != a.match('success')) $('#contactform').slideDown('slow')
            },
          )
        })
        return false
      })
      $('#contactform input, #contactform textarea').on('keyup', function () {
        $('#message').slideUp(1500)
      })
      // mouse move animation------------------
      $(window).on('scroll', function (a) {
        var a = $(document).height()
        var b = $(window).height()
        var c = $(window).scrollTop()
        var d = (c / (a - b)) * 100
        $('.progress-bar').css({
          height: d + '%',
        })
      })
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
      //   cursor ------------------
      $(
        'a , .btn ,   textarea,   input  , .share-btn   , .closedet_style  , .nav-button , .swiper-pagination-bullet , .to-top-btn  , .gc-slider-cont , .fwcb , .pr-det_btn , .cl-det-btn , .share-icon',
      ).on({
        mouseenter: function () {
          $('.element-item').addClass('elem_hover')
        },
        mouseleave: function () {
          $('.element-item').removeClass('elem_hover')
        },
      })
      $(' .swiper-slide').on({
        mouseenter: function () {
          $('.element-item').addClass('slider_hover')
        },
        mouseleave: function () {
          $('.element-item').removeClass('slider_hover')
        },
      })
      $('.swiper-slide a , .next-project-swiper-link').on({
        mouseenter: function () {
          $('.element-item').removeClass('slider_hover')
        },
        mouseleave: function () {
          $('.element-item').addClass('slider_hover')
        },
      })
      $('.gallery-filters-overlay , .pr-det_overlay , .sb-det_overlay , .pr-det_title ').on({
        mouseenter: function () {
          $('.element-item').addClass('close-icon')
        },
        mouseleave: function () {
          $('.element-item').removeClass('close-icon')
        },
      })
      if ($('.content-holder').hasClass('no-vis_pol')) {
        $('.policy-box').addClass('hide_pol3')
      } else {
        $('.policy-box ').removeClass('hide_pol3')
      }
      if ($('.content-holder').hasClass('hide_footer')) {
        $('.policy-box , .social_links').addClass('hide_pol2')
        var newElem = $('.policy-box span').clone(),
          necon = $('.footer-bg_polcy'),
          newElem2 = $('.sc-links_clone').clone(),
          necon2 = $('.footer-bg_social_links')

        if (newElem2.length > 1) {
          newElem2.children().remove()
        }
        newElem.appendTo(necon)
        newElem2.appendTo(necon2)
      } else {
        $('.policy-box , .social_links').removeClass('hide_pol2')
      }
      if ($('.content-holder').hasClass('hide_footer2')) {
        if ($(window).width() < 1064) {
          $('.policy-box , .social_links').addClass('hide_pol').remove
          var newElem3 = $('.policy-box span').clone(),
            necon3 = $('.mob-footer_gal'),
            newElem4 = $('.sc-links_clone').clone(),
            necon4 = $('.mob-footer_gal')
          newElem3.appendTo(necon3)
          newElem4.appendTo(necon4)
        }
      }
    }
    function initpageloadAnimation() {
      TweenMax.to($('.hero-showcase'), 0.1, {
        scrollTop: 450,
        scrollLeft: 350,
        force3D: true,
      })
      TweenMax.to($('.hs_init-container'), 1.2, {
        force3D: true,
        delay: 0.5,
        bottom: '50px',
        opacity: 1,
        ease: Expo.easeInOut,
      })
      TweenMax.to($('.aside_anim'), 1.2, {
        force3D: true,
        delay: 0.5,
        right: 0,
        opacity: 1,
        ease: Expo.easeInOut,
      })
      TweenMax.to($('.fixed-aside-btn_item'), 1.2, {
        force3D: true,
        delay: 0.5,
        left: '-60px',
        opacity: 1,
        ease: Expo.easeInOut,
      })
      TweenMax.to($('.sidebar-button-wrap'), 1.9, {
        force3D: true,
        scale: '1.0',
        delay: 0.5,
        opacity: 1,
        ease: Expo.easeInOut,
      })
      TweenMax.to($('.pr-det_btn'), 1.2, {
        force3D: true,
        delay: 0.5,
        bottom: '30px',
        opacity: 1,
        ease: Expo.easeInOut,
      })
      setTimeout(function () {
        $('.anim-fw').each(function (ac) {
          var bp = $(this)
          setTimeout(function () {
            TweenMax.to(bp, 2.9, {
              force3D: true,
              scale: '1.0',
              opacity: 1,
              ease: Expo.easeInOut,
            })
          }, 80 * ac)
        })
      }, 600)
      $('.hov_box').each(function (ac2) {
        var bp2 = $(this)
        setTimeout(function () {
          TweenMax.to(bp2, 2.9, {
            force3D: true,
            scale: '1.0',
            opacity: 1,
            ease: Expo.easeInOut,
          })
        }, 80 * ac2)
      })
      $('.progress-bar-wrap').addClass('pbw_vis')
      setTimeout(function () {
        $('.page-scroll-nav li a').each(function (ac3) {
          var bp3 = $(this)
          setTimeout(function () {
            TweenMax.to(bp3, 1.0, {
              force3D: true,
              y: 0,
              opacity: 1,
              ease: Expo.easeInOut,
            })
          }, 100 * ac3)
        })
        TweenMax.to($('.hero-sec_anim'), 1.2, {
          force3D: true,
          bottom: '100%',
          ease: Expo.easeInOut,
        })
        TweenMax.to($('.hero-section_title'), 1.2, {
          force3D: true,
          delay: 0.5,
          y: 0,
          opacity: 1,
          ease: Expo.easeInOut,
        })
        TweenMax.to($('.sec-anim'), 1.2, {
          force3D: true,
          delay: 0.9,
          y: 0,
          opacity: 1,
          ease: Expo.easeInOut,
        })
      }, 500)
    }
    //   load animation------------------
    // function contentAnimShow() {
    //   $('.share-btn').removeClass('uncl-share')
    //   $('.element-item').addClass('loader_element')
    //   $('.main-menu').removeClass('vismobmenu')
    //   $('.page-load').fadeIn(1)
    //   TweenMax.to($('.page-load_bg'), 1.2, {
    //     force3D: true,
    //     bottom: 0,
    //     ease: Expo.easeInOut,
    //   })
    // }
    // function contentAnimHide() {
    //   setTimeout(function () {
    //     $('html, body').animate(
    //       {
    //         scrollTop: 0,
    //       },
    //       {
    //         queue: true,
    //         duration: 10,
    //       },
    //     )
    //   }, 60)
    //   initpageloadAnimation()
    //   setTimeout(function () {
    //     $('.page-load').fadeOut(1)
    //     TweenMax.to($('.page-load_bg'), 0.1, {
    //       force3D: true,
    //       bottom: '100%',
    //     })
    //     $('.element-item').removeClass('loader_element')
    //   }, 300)
    // }
    if ($('.element-item').length > 0) {
      var mouse = {
        x: 0,
        y: 0,
      }
      var pos = {
        x: 0,
        y: 0,
      }
      var ratio = 0.15
      var active = false
      var ball = document.querySelector('.element-item')
      TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50,
      })
      document.addEventListener('mousemove', mouseMove)
      function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        mouse.x = e.pageX
        mouse.y = e.pageY - scrollTop
      }
      TweenMax.ticker.addEventListener('tick', updatePosition)
      function updatePosition() {
        if (!active) {
          pos.x += (mouse.x - pos.x) * ratio
          pos.y += (mouse.y - pos.y) * ratio
          TweenMax.set(ball, {
            x: pos.x,
            y: pos.y,
          })
        }
      }
    }
    // mobMenu------------------
    $('.nav-button-wrap').on('click', function () {
      $('.main-menu').toggleClass('vismobmenu')
    })
    function mobMenuInit() {
      var ww = $(window).width()
      if (ww < 1064) {
        $('.menusb').remove()
        $('.main-menu').removeClass('nav-holder')
        $('.main-menu nav').clone().addClass('menusb').appendTo('.main-menu')
        $('.menusb').menu()
      } else {
        $('.menusb').remove()
        $('.main-menu').addClass('nav-holder')
      }
    }
    mobMenuInit()
    $('#menu').menu()
    $(window).on('resize', function () {
      mobMenuInit()
    })
    $("<div class='page-load'><span class='mob-spinner'></span><div class='page-load_bg'></div></div>").appendTo(
      '#main',
    )
    $('head').append(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">',
    )
    var a = {
      Android: function () {
        return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
        return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows()
      },
    }
    let trueMobile = true
    if (null === trueMobile) {
      //   Init Ajax------------------
      $(function () {
        $.coretemp({
          reloadbox: '#wrapper',
          outDuration: 1200,
          inDuration: 100,
        })
        readyFunctions()
        $(document).on({
          ksctbCallback: function () {
            readyFunctions()
          },
        })
      })
      //   Init All Functions------------------
      function readyFunctions() {
        initEndor()
      }
    }
    if (trueMobile) {
      $(document).ready(function () {
        initEndor()
      })
    }
  })
}
