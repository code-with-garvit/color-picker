//set random colours
$('.refresh').click(function(){
  $('.color').each(function(){
    var rColour = '#' + Math.random().toString(16).substr(2,6);
    $(this).css('background-color',rColour);
    $(this).children('.color-hex').text(rColour)
  });
}).trigger('click');

//copy to clipboard
$('.color').click(function(){
  var input =  $("<input>");
  var colour = $(this).children('.color-hex').text();
  $('body').append(input);
  input.val(colour).select();
  document.execCommand('copy');
  input.remove();
  $('.copied').fadeIn().delay(2000).fadeOut();
});