$(function () {
  const handleChangeHeight = height => {
    $('.tab__container').height(height);
  };

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
});
