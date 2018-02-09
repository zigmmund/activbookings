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
