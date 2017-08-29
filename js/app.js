var SLIDER = '.js-slider';

this.App || (this.App = {});

this.App.Slider = {
  init: function() {
    this.initSlider();
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
        @media only screen (min-width: 321px) and (max-width: 480px) {
    .b-item__title {
        font-size: 10px;
    }
}
      ]
    });
  }
};

$(function() {
  App.Slider.init();
});
