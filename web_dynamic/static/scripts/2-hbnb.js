// After DOM loads, store checked amenities into dictionary.
$(function () {
  const dict = {};
  $(':checkbox').change(function () {
    if ($(this).is(':checked')) {
      dict[this.id] = this.name;
    } else {
      if (dict[this.id]) {
        delete dict[this.id];
      }
    }

    // Print selected amenities to the page.
    $('div.amenities h4').text($.map(dict, function (v, k) {
      return v;
    }).join(', '));
  });

  // Check API status.
  $.getJSON('http://localhost:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
