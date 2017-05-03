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
});
