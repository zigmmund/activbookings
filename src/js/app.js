$('.js-rating').raty({
  score: 3,
  path:  "/assets/"
});

$('.js-datepicker').datepicker({
  showOtherMonths: true
});

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
  },
  image: {
    markup: '<div class="mfp-figure">'+
              '<div class="mfp-close"></div>'+
              '<div class="mfp-img"></div>'+
            '</div>'
  }
})

$('.js-toggle-policy').on('click', function() {
  $('.js-policy').toggle(300);
});


function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal)) {
    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data('field');
  var parent = $(e.target).closest('div');
  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
  } else {
    parent.find('input[name=' + fieldName + ']').val(0);
  }
}

$('.input-group').on('click', '.button-plus', function(e) {
  incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function(e) {
  decrementValue(e);
});

$('.js-truncate').dotdotdot({
  height: 72
});
