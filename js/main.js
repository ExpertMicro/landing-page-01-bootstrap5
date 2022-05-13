jQuery(document).ready(function($) {
  window.onscroll = function() {
    if (window.pageYOffset > 140) {
      $('#header').addClass("active")
    }
    else {
      $('#header').removeClass("active")
    }
  }

  //ISOTOPE
  let btns = $("#servicos .button-group button");

  btns.click(function(e) {
    $("#servicos .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#servicos .grid").isotope({
      filter: selector,
    })
  });

  $(window).on("load", function() {
    $("#servicos .grid").isotope({
      filter: "*"
    })
  });

  // Magnify
  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enable: true,
      tPrev: "Anterior",
      tNext: "Proxima",
      tCounter: "%curr% de %total%",
    },
  });

  //OWL Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items:1,
      },
      1000: {
        items: 2,
      }
    }
  });
});

