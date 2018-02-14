$('.js-rating').raty({
  score: 3,
  path:  "/assets/"
});

$('.js-datepicker').datepicker();

$('.js-popup-link').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  },
  image: {
    titleSrc: function(item) {
      var title = item.el.attr('title'),
          text = item.el.data('description');
			return  '<span>' + title + '</span>' + '<div>' + text + '<div>';
		}
  }
});

$('.js-popup-activity-link').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
})

$('.js-toggle-policy').on('click', function() {
  $('.js-policy').toggle(300);
});
