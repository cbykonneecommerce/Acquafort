

$(document).ready(function() {
 
    

$("#carousel-depoimentos").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    navigation: true,
    stopOnHover: true

});
$("#carouselmarcas").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 5,
    itemsDesktop : [1199,5],
    itemsMobile : [479,2],
    navigation: true,
    stopOnHover: true

});

$("#carouseldeptos").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 5,
    itemsDesktop : [1199,5],
    itemsMobile : [479,2],
    navigation: true,
    stopOnHover: true

});





$("#carouselpropostas").owlCarousel({
 
    autoPlay: 2000, //Set AutoPlay to 3 seconds

    items : 2,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,2],
    itemsMobile : [479,2],
    navigation: true,
    stopOnHover: true

});


$(".owl-prev").html("<img src='/arquivos/awwor-left.png' />");
$(".owl-next").html("<img src='/arquivos/awwor-right.png' />");
$(".fullbanner .owl-prev").html("<img src='/arquivos/awwor-left-white.png' />");
$(".fullbanner .owl-next").html("<img src='/arquivos/awwor-right-white.png' />");
$("#carousel-depoimentos .owl-prev").html("<img src='/arquivos/awwor-left-white.png' />");
$("#carousel-depoimentos .owl-next").html("<img src='/arquivos/awwor-right-white.png' />");
   
   
  });

  