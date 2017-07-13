var SLIDER = '.js-slider';

this.App || (this.App = {});

this.App.Slider = {
  init: function() {
    this.initSlider();
    this.onResize();
  },

  initSlider: function() {
    $(SLIDER).slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    setTimeout(function () {
      App.Slider.calculateHeight();
    }, 100);
  },

  onResize: function() {
    $(window).on('resize', function() {
      setTimeout(function () {
        App.Slider.calculateHeight();
      }, 100);
    });
  },

  calculateHeight: function() {
    var maxHeight = Math.max.apply(null, $('.js-slider .b-slider__item').map(function(){
      return $(this).outerHeight();
    }).get());

    $('.js-slider .b-slider__item').css('min-height', maxHeight)
  }
};

$(function() {
  App.Slider.init();
});
