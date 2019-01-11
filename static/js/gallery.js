$('.gallery .card-columns .card .img-thumbnail').each(function(i) {
  var title = $(this).attr("title");
  var src = $(this).attr("src");
  var srcset = $(this).attr("srcset");
  var sizes = $(this).attr("sizes");
  var alt = $(this).attr("alt");
  if (i === 0) { // set first item active
    $('.carousel-inner').append($('<div class="carousel-item active"><img class="img-fluid" sizes=\'' + sizes + '\' src=\'' + src + '\' srcset=\'' + srcset + '\' alt="' + alt + '" title="' + title + '"></div>'))
  } else {
    $('.carousel-inner').append($('<div class="carousel-item"><img class="img-fluid" src=\'' + sizes + '\' src=\'' + src + '\' srcset=\'' + srcset + '\' alt="' + alt + '" title="' + title + '"></div>'))
  }
});

$('.gallery .card-columns .card .img-thumbnail').click(function() {
  var idx = $(this).parents('div').index();
  var id = parseInt(idx);
  $('#gallery-modal').modal('show');
  $('#gallery-controls').carousel(id);
});
