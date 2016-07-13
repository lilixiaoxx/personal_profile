// $("#carousel-example-generic .carousel-inner > .item").css("display","block");

// $(document).ready(function() {
//     $('item').hover(
//        function () {
//           $(this).css({"background-color":"red"});
//        },
//        function () {
//           $(this).css({"background-color":"blue"});
//        }
//      );
//  });

// $(document).ready(function($) {
//   $('.carousel').carousel({
//     interval: false;
// });
// });

$(document).ready(function(){
  $('.nav a').click(function(){
    $('div.active').removeClass('active')
    var id = $(this).attr('href')
    $(id).addClass('active')
  })
})
