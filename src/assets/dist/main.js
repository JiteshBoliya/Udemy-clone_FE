!(function (e) {
  var o = {};
  function s(r) {
    if (o[r]) return o[r].exports;
    var t = (o[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.m = e),
    (s.c = o),
    (s.d = function (e, o, r) {
      s.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: r });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, o) {
      if ((1 & o && (e = s(e)), 8 & o)) return e;
      if (4 & o && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & o && "string" != typeof e)
      )
        for (var t in e)
          s.d(
            r,
            t,
            function (o) {
              return e[o];
            }.bind(null, t)
          );
      return r;
    }),
    (s.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(o, "a", o), o;
    }),
    (s.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (s.p = ""),
    s((s.s = 0));
})([
  function (e, o, s) {
    s(1), (e.exports = s(2));
  },
  function (e, o, s) {
    "use strict";
    var r = document.querySelector(".menu-icon-container"),
      t = document.querySelector(".navbar-mobile"),
      n = document.querySelector(".navbar-mobile--cross"),
      i = document.querySelector(".menu-icon");
    r.addEventListener("click", function () {
      t.classList.toggle("show"), document.body.classList.toggle("over");
    }),
      n.addEventListener("click", function () {
        t.classList.remove("show"), i.classList.remove("transformed");
      });
    for (
      var l = [].slice.call(
          document.querySelectorAll(".navbar-mobile__menu-item")
        ),
        a = 0;
      a < l.length;
      a++
    )
      l[a].addEventListener("click", function () {
        p(this);
      });
    function p(e) {
      var o = e.classList.contains("open");
      l.forEach(function (e) {
        return e.classList.remove("open");
      }),
        o ? e.classList.remove("open") : e.classList.add("open");
    }
    !(function (e) {
      function o() {
        e("#mySidenav").css("left", "-300px"), s();
      }
      function s() {
        e("#overlayy").toggleClass("active");
      }
      e(".hamburger-menu a").on("click", function () {
        e("#mySidenav").css("left", "0"), s();
      }),
        e("#overlayy").on("click", function () {
          o();
        }),
        e(".closebtn").on("click", function () {
          o();
        }),
        e(".menu-icon-container").on("click", function () {
          e(".menu-icon").toggleClass("transformed");
        }),
        e(".eventsSlider").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !1,
          dots: !1,
          arrows: !0,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !0 } },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, arrows: !1, dots: !0 },
            },
            {
              breakpoint: 767,
              settings: { slidesToShow: 1, arrows: !1, dots: !0 },
            },
          ],
        }),
        e(".similar-events").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !1 } },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, arrows: !1, dots: !1 },
            },
            {
              breakpoint: 575,
              settings: { slidesToShow: 1, arrows: !1, dots: !1 },
            },
          ],
        }),
        e(".new__courses").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !0,
          dots: !1,
          arrows: !0,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !1 } },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, arrows: !1, dots: !1 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, arrows: !1, dots: !1 },
            },
          ],
        }),
        e(".student-slider").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !1,
          autoplaySpeed: 2e3,
          dots: !0,
          arrows: !0,
          centerMode: !0,
          centerPadding: "0px",
          prevArrow: ".student-slider-arrows .prev-arrow",
          nextArrow: ".student-slider-arrows .next-arrow",
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        }),
        e(".about__slider").slick({
          infinite: !0,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: !0,
          arrows: !0,
          dots: !0,
          autoplaySpeed: 2e3,
          nextArrow: ".about-slider-arrows .next-arrow",
          prevArrow: ".about-slider-arrows .prev-arrow",
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 769, settings: { slidesToShow: 1 } },
          ],
        }),
        e(".testimonial__slider--one").slick({
          autoplay: !0,
          autoplaySpeed: 2e3,
          infinite: !0,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: !0,
          dots: !0,
          prevArrow:
            ' <span class="slick-arrow--left "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1 } },
            { breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } },
          ],
        }),
        e(".testimonial__slider--two").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !0,
          arrows: !0,
          dots: !1,
          centerMode: !0,
          centerPadding: "0px",
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !0 } },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, arrows: !1, dots: !0 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, arrows: !1, dots: !0 },
            },
          ],
        }),
        e(".testimonial__slider--three").slick({
          infinite: !0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: !1,
          arrows: !0,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left"> \n      \n      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M17 7H1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M7 13L1 7L7 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n      </span>',
          nextArrow:
            ' <span class="slick-arrow--right">\n      <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M1 7L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M13 0.999999L19 7L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n      </span>',
          responsive: [
            { breakpoint: 1201, settings: { arrows: !1, dots: !0 } },
          ],
        }),
        e(".categories--box").slick({
          infinite: !0,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: !0,
          arrows: !0,
          dots: !1,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !0 } },
            {
              breakpoint: 1201,
              settings: { slidesToShow: 3, arrows: !1, dots: !0 },
            },
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, arrows: !1, dots: !0 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, arrows: !1, dots: !0 },
            },
          ],
        }),
        e(".categories__slider").slick({
          infinite: !0,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: !0,
          arrows: !0,
          autoplaySpeed: 2e3,
          centerMode: !0,
          centerPadding: "0px",
          dots: !1,
          prevArrow:
            ' <span class="slick-arrow--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !1 } },
            {
              breakpoint: 1260,
              settings: { slidesToShow: 4, slidesToScroll: 1, dots: !1 },
            },
            { breakpoint: 1080, settings: { slidesToShow: 3, dots: !1 } },
            { breakpoint: 992, settings: { slidesToShow: 2, dots: !1 } },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, dots: !0, arrows: !1 },
            },
          ],
        }),
        e(".brand-area").slick({
          infinite: !0,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: !1,
          autoplay: !0,
          autoplaySpeed: 1600,
          responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
          ],
        }),
        e(".ourinstructor-active").slick({
          infinite: !0,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: !1,
          autoplaySpeed: 2e3,
          prevArrow:
            ' <span class="slick-arrow--left"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>',
          nextArrow:
            ' <span class="slick-arrow--right"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>',
          responsive: [
            { breakpoint: 1441, settings: { arrows: !1, dots: !0 } },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
              },
            },
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: !0,
                centerPadding: "15px",
                arrows: !1,
                dots: !0,
              },
            },
          ],
        }),
        e(".ourevent-active").slick({
          infinite: !0,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: !1,
          arrows: !0,
          autoplaySpeed: 2e3,
          prevArrow: ".ourevent__wrapper .prev-arrow",
          nextArrow: ".ourevent__wrapper .next-arrow",
          responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        }),
        e(".browseCategories").slick({
          infinite: !0,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: !1,
          dots: !0,
          arrows: !0,
          autoplaySpeed: 2e3,
          nextArrow: " .browse__right--arrow",
          prevArrow: " .browse__left--arrow",
          responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ],
        }),
        e(".populercourse-ist").on("click", "li", function () {
          var o = e(this).attr("data-filter");
          r.isotope({ filter: o }),
            e(".populercourse-ist").on("click", "li", function () {
              var o = e(this).attr("data-filter");
              r.isotope({ filter: o });
            });
        }),
        e(".popup-video").magnificPopup({ type: "iframe" }),
        e(document).ready(function () {
          e("select").niceSelect();
        });
      var r = e(".populercourse-item").isotope({});
    })(jQuery);
  },
  function (e, o, s) {},
]);
