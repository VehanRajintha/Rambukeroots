! function (e) {
  "use strict";
  e(window).on("load", (function () {
    e(".preloader").fadeOut()
  })), e(".preloader").length > 0 && e(".preloaderCls").each((function () {
    e(this).on("click", (function (t) {
      t.preventDefault(), e(".preloader").css("display", "none")
    }))
  })), e(".mobile-menu-active").vsmobilemenu({
    menuContainer: ".vs-mobile-menu",
    expandScreenWidth: 992,
    menuToggleBtn: ".vs-menu-toggle"
  });
  var t, a, i, n = "",
    o = ".scrollToTop";

  function s(t, a) {
    t.each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault();
        var i = e(this);
        i.hasClass("active") ? i.removeClass("active").next(a).removeClass("show").slideUp() : i.addClass("active").next(a).addClass("show").slideDown()
      }))
    }))
  }
  e(window).on("scroll", (function () {
      var t, a, i;
      t = e(".sticky-header"), a = "active", i = e(window).scrollTop(), e(window).scrollTop() > 600 ? i > n ? t.removeClass(a) : t.addClass(a) : t.removeClass(a), n = i, e(this).scrollTop() > 400 ? e(o).addClass("show") : e(o).removeClass("show")
    })), e(o).on("click", (function (t) {
      return t.preventDefault(), e("html, body").animate({
        scrollTop: 0
      }, 3e3), !1
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function () {
      var t = e(this).attr("data-bg-src");
      e(this).css({
        "background-image": "url(" + t + ")"
      })
    })), t = ".sidemenu-wrapper", a = ".sideMenuCls", i = "show", e(".sideMenuToggler").on("click", (function (a) {
      a.preventDefault(), e(t).addClass(i)
    })), e(t).on("click", (function (a) {
      a.stopPropagation(), e(t).removeClass(i)
    })), e(t + " > div").on("click", (function (a) {
      a.stopPropagation(), e(t).addClass(i)
    })), e(a).on("click", (function (a) {
      a.preventDefault(), a.stopPropagation(), e(t).removeClass(i)
    })),
    function (t, a, i, n) {
      e(a).on("click", (function (a) {
        a.preventDefault(), e(t).addClass(n)
      })), e(t).on("click", (function (a) {
        a.stopPropagation(), e(t).removeClass(n)
      })), e(t).find("form").on("click", (function (a) {
        a.stopPropagation(), e(t).addClass(n)
      })), e(i).on("click", (function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(n)
      }))
    }(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"), e(".vs-hero-carousel").each((function () {
      var t = e(this);

      function a(e) {
        return t.data(e)
      }
      var i = ".thumb",
        n = "data-slide-go";
      t.on("sliderDidLoad", (function (a, o) {
        var s = o.slides.current.index,
          r = 1;
        t.find(i).each((function () {
          e(this).attr(n, r), r++, e(this).on("click", (function (a) {
            a.preventDefault();
            var i = e(this).attr(n);
            t.layerSlider(parseInt(i))
          }))
        })), e(".thumb[" + n + '="' + s + '"').addClass("active")
      })).on("slideChangeDidComplete", (function (t, a) {
        var i = a.slides.current.index,
          o = ".thumb[" + n + '="' + i + '"';
        e(o).addClass("active"), e(o).siblings().removeClass("active")
      })), t.on("sliderWillLoad", (function (e, t) {
        var a = jQuery(this).find(".ls-responsive"),
          i = jQuery(window).width();
        a.each((function () {
          var e = jQuery(this);

          function t(t) {
            return "" === e.data(t) ? e.data(null) : e.data(t)
          }
          var a = t(i < 768 ? "ls-mobile" : i < 993 ? "ls-tablet" : i < 1025 ? "ls-laptop" : "ls-desktop"),
            n = void 0 !== e.attr("style") ? e.attr("style") : " ";
          e.attr("style", n + a)
        }))
      })), t.find("[data-ls-go]").each((function () {
        e(this).on("click", (function (a) {
          a.preventDefault();
          var i = e(this).data("ls-go");
          t.layerSlider(i)
        }))
      })), t.layerSlider({
        allowRestartOnResize: !0,
        globalBGImage: !!a("globalbgimage") && a("globalbgimage"),
        maxRatio: a("maxratio") ? a("maxratio") : 1,
        type: a("slidertype") ? a("slidertype") : "responsive",
        pauseOnHover: !!a("pauseonhover"),
        navPrevNext: !!a("navprevnext"),
        hoverPrevNext: !!a("hoverprevnext"),
        hoverBottomNav: !!a("hoverbottomnav"),
        navStartStop: !!a("navstartstop"),
        navButtons: !!a("navbuttons"),
        loop: 0 != a("loop"),
        autostart: !!a("autostart"),
        height: e(window).width() < 767 ? a("sm-height") ? a("sm-height") : a("height") : a("height") ? a("height") : 1080,
        responsiveUnder: a("responsiveunder") ? a("responsiveunder") : 1220,
        layersContainer: a("container") ? a("container") : 1220,
        showCircleTimer: !!a("showcircletimer"),
        skinsPath: "layerslider/skins/",
        thumbnailNavigation: 0 != a("thumbnailnavigation")
      })
    })), e(".dateTime-pick").datetimepicker({
      timepicker: !0,
      datepicker: !0,
      format: "y-m-d H:i",
      hours12: !1,
      step: 30
    }), e(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "m-d-y",
      step: 10
    }), e(".time-pick").datetimepicker({
      datepicker: !1,
      timepicker: !0,
      format: "H:i",
      hours12: !1,
      step: 10
    }), e(".popup-image").magnificPopup({
      type: "image",
      gallery: {
        enabled: !0
      }
    }), e(".popup-video").magnificPopup({
      type: "iframe"
    }), e("#ship-to-different-address-checkbox").on("change", (function () {
      e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
    })), e(".woocommerce-form-login-toggle a").on("click", (function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle()
    })), e(".woocommerce-form-coupon-toggle a").on("click", (function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
    })), e(".shipping-calculator-button").on("click", (function (t) {
      t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
    })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function () {
      e(this).on("change", (function () {
        e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
      }))
    })), e(".rating-select .stars a").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
      }))
    })), e(".filter-active").imagesLoaded((function () {
      var t = ".filter-active",
        a = ".grid-item",
        i = ".filter-menu-active";
      if (e(t).length > 0) var n = e(t).isotope({
        itemSelector: a,
        filter: "*",
        masonry: {
          columnWidth: a
        }
      });
      e(i).length > 0 && (e(i).on("click", "button", (function () {
        var t = e(this).attr("data-filter");
        n.isotope({
          filter: t
        })
      })), e(i).on("click", "button", (function (t) {
        t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
      })))
    })), e(".filter-active2").imagesLoaded((function () {
      var t = ".filter-active2";
      e(t).length > 0 && e(t).isotope({
        itemSelector: ".grid-item",
        filter: "*",
        masonry: {
          columnWidth: 1
        }
      })
    })), e("#slider-range").slider({
      range: !0,
      min: 40,
      max: 300,
      values: [60, 570],
      slide: function (t, a) {
        e("#minAmount").text("$" + a.values[0]), e("#maxAmount").text("$" + a.values[1])
      }
    }), e("#minAmount").text("$" + e("#slider-range").slider("values", 0)), e("#maxAmount").text("$" + e("#slider-range").slider("values", 1)), e(".quantity-plus").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          i = parseInt(a.val());
        isNaN(i) || a.val(i + 1)
      }))
    })), e(".quantity-minus").each((function () {
      e(this).on("click", (function (t) {
        t.preventDefault();
        var a = e(this).siblings(".qty-input"),
          i = parseInt(a.val());
        !isNaN(i) && i > 1 && a.val(i - 1)
      }))
    })), e.fn.countdown = function () {
      e(this).each((function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime(),
          i = '<span class="number"></span>';

        function n(e) {
          return t.find(e)
        }
        n(".day").prepend(i), n(".hour").prepend(i), n(".minute").prepend(i), n(".second").prepend(i);
        var o = setInterval((function () {
          var e = (new Date).getTime(),
            i = a - e,
            s = Math.floor(i / 864e5),
            r = Math.floor(i % 864e5 / 36e5),
            l = Math.floor(i % 36e5 / 6e4),
            c = Math.floor(i % 6e4 / 1e3);
          s < 10 && (s = "0" + s), r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), c < 10 && (c = "0" + c), i < 0 ? (clearInterval(o), t.addClass("expired"), t.find(".message").css("display", "block")) : (n(".day .number").html(s + " "), n(".hour .number").html(r + " "), n(".minute .number").html(l + " "), n(".second .number").html(c + " "))
        }), 1e3)
      }))
    }, e(".flash-counter").length && e(".flash-counter").countdown(), e(".deal-counter").length && e(".deal-counter").countdown(), e(".offer-counter").length && e(".offer-counter").countdown(), e.fn.boxNav = function (t, a, i) {
      var n = e(this),
        o = e(t),
        r = n.find(a);
      e(window).width() < 1199.99 && (s(o, n), s(r, i))
    }, e(".vs-box-nav").length > 0 && e(".vs-box-nav").boxNav(".box-nav-btn", ".menu-item-has-children > a", "ul"), (new WOW).init();
  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function (e) {
    return new bootstrap.Tooltip(e)
  }));
  e.fn.vsTab = function (t) {
    var a = e.extend({
      sliderTab: !1,
      tabButton: "button"
    }, t);
    e(this).each((function () {
      var t = e(this),
        i = t.find(a.tabButton);
      t.append('<span class="indicator"></span>');
      var n = t.find(".indicator");
      if (i.on("click", (function (t) {
          t.preventDefault();
          var i = e(this);
          i.addClass("active").siblings().removeClass("active"), a.sliderTab ? e(o).slick("slickGoTo", i.data("slide-go-to")) : r()
        })), a.sliderTab) {
        var o = t.data("asnavfor"),
          s = 0;
        i.each((function () {
          var i = e(this);
          i.attr("data-slide-go-to", s), s++, i.hasClass("active") && e(o).slick("slickGoTo", i.data("slide-go-to")), e(o).on("beforeChange", (function (e, i, n, o) {
            t.find(a.tabButton + '[data-slide-go-to="' + o + '"]').addClass("active").siblings().removeClass("active"), r()
          }))
        }))
      }

      function r() {
        var o = t.find(a.tabButton + ".active"),
          s = o.css("height"),
          r = o.css("width"),
          l = o.position().top + "px",
          c = o.position().left + "px";
        n.get(0).style.setProperty("--height-set", s), n.get(0).style.setProperty("--width-set", r), n.get(0).style.setProperty("--pos-y", l), n.get(0).style.setProperty("--pos-x", c), e(i).first().position().left == o.position().left ? n.addClass("start").removeClass("center").removeClass("end") : e(i).last().position().left == o.position().left ? n.addClass("end").removeClass("center").removeClass("start") : n.addClass("center").removeClass("start").removeClass("end")
      }
      r()
    }))
  }, e(".testi-slideTab").length && e(".testi-slideTab").vsTab({
    sliderTab: !0,
    tabButton: ".tab-btn"
  }), e(".vs-slideTab").length && e(".vs-slideTab").vsTab({
    sliderTab: !0,
    tabButton: ".tab-btn"
  }), e.fn.shapeMockup = function () {
    e(this).each((function () {
      var t = e(this),
        a = t.data("top"),
        i = t.data("right"),
        n = t.data("bottom"),
        o = t.data("left");
      t.css({
        top: a,
        right: i,
        bottom: n,
        left: o
      }).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")
    }))
  }, e(".shape-mockup") && e(".shape-mockup").shapeMockup(), e(".accordion-button").each((function () {
    e(this).on("click", (function () {
      e(this).closest(".accordion-item").toggleClass("active").siblings().removeClass("active")
    }))
  })), e('[data-bs-toggle="tab"], [data-bs-toggle="pill"]').on("shown.bs.tab", (function (t) {
    var a = e(t.target).attr("data-bs-target"),
      i = e(a).find(".vs-carousel");
    i && i.slick("refresh")
  }))
}(jQuery);
