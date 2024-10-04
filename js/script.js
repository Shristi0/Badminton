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


//Owl Carousel
$(".all-banner-slide").owlCarousel({
  items: 1,
  smartSpeed: 1000,
  autoplay: true,
  lazyLoad: true,
  dots: false,
  loop: true,
  nav: true,
  arrow: true,
  infinity: true,
  autoplayTimeout: 3000,
});
$(".gallery-slider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: false,
  dots: false,
  infinity: true,
  responsive: {
    0: {
      items: 1.5,
    },

    1000: {
      items: 3.5,
    },
  },
});
$(".eventsDetail-slider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: false,
  nav: false,
  dots: false,
  infinity: true,
  responsive: {
    0: {
      items: 1.5,
    },

    1000: {
      items: 3.5,
    },
  },
});

$('.partner-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('.performer-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('.news-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
$('.testimonial-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
