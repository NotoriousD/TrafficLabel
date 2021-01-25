$(function () {
  const handleChangeHeight = height => {
    $('.tab__container').height(height);
  };

  $('.hamburger').on('click', function() {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  const wW = $(window).width();

  if(wW <= 950){
    $(window).on('scroll', function(){
      if($(window).scrollTop() > 90){
        $('.header__menu').removeClass('active');
      }
    })
  }

  const currentTabHeight = $('.tab.active').outerHeight();
  handleChangeHeight(currentTabHeight);

  $('.open-tab').on('click', function (e) {
    e.preventDefault();
    const id = $(this).attr('href');
    const height = $(id).outerHeight();
    handleChangeHeight(height);
    $(this).toggleClass('active').siblings('.open-tab').removeClass('active');
    $(id).toggleClass('active').siblings('.tab').removeClass('active');
  });

  $('.open-popup').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $('.popup__close').on('click', () => {
    $.magnificPopup.close();
  });

  const casinos = $('.casinos__list').slick({
    dots: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    centerMode: true,
    infinite: false, 
    initialSlide: 2,
    variableWidth: true,
    speed: 1200,
    responsive: [
      {
        breakpoint:600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  })
});
