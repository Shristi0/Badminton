const myFunction = () => {
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
};
