      // Burger menu

$(function() {
  $("#burger").click(function() {
    $("#burger__item").toggleClass("active");
    $("#burger__subitem").slideToggle(200);
  });
});

$(function() {
  $(".intro, .block__header, .catalog, .stuff, .gallery, .footer").click(function() {
    $("#burger__item").removeClass("active");
    $("#burger__subitem").slideUp(200);
  });
});

$(window).scroll(function() {
  $("#burger__item").removeClass("active");
  $("#burger__subitem").slideUp(200);

});

      // Dark Mode
$(function() {
  $("#btn--light").click(function() {
    $("body").toggleClass("darkmode");
    $(".phone__number").toggleClass("phone__number--dark");
    $(".catalog__title").toggleClass("catalog__title--dark");
    $(".gallery__text").toggleClass("gallery__text--dark");
    $(".intro").toggleClass("intro--dark");
  });
});

$(function() {
  $("#btn--light2").click(function() {
    $("body").toggleClass("darkmode");
    $(".phone__number").toggleClass("phone__number--dark");
    $(".catalog__title").toggleClass("catalog__title--dark");
    $(".gallery__text").toggleClass("gallery__text--dark");
    $(".intro").toggleClass("intro--dark");
  });
});

      // Smooth Scroll

$(function() {

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top-100;

    console.log(elementOffset)

    $("html, body").animate({
      scrollTop: elementOffset
    });
  });

});

      // Slick slider reviews

  $(document).ready(function(){
    $('.reviews').slick({
      dots: true,
      infinite: true,
  // centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4,
        slidesToScroll: 4,
      }
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          // centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 3,

        }
    },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
    },
    {
      breakpoint: 630,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '90px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 413,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 361,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 321,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
  ]
});
});
