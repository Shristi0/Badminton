$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
$(document).ready(function () {
  $(".navbar").on("click", function () {
    $(".navbar").toggleClass("active");
  });
});

$(".gallery-slider").owlCarousel({
  center: true,
  items: 2,
  loop: false,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});
//Owl Carousel
$(".all-banner-slide").owlCarousel({
  items: 1,
  smartSpeed: 1000,
  autoplay: false,
  lazyLoad: true,
  dots: false,
  loop: true,
  nav: true,
  arrow: true,
  infinity: true,
  autoplayTimeout: 3000,
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  dots: false,
  infinity: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1.5,
    },

    1000: {
      items: 3.5,
    },
  },
});
