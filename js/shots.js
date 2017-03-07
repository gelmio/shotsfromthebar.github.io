$('.grid').imagesLoaded( function(){
  $('.grid').masonry({
   	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
  });
});

$(document).ready(function(){
    $('#disappear').click(function(){
        $('#gone').hide();
    });
});