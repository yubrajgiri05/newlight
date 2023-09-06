
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        autoplayHoverPause:true,
        items: 1,
        singleItem: true,
        autoplay:true,
    });
    $('.owl-three').owlCarousel({
      loop:true,
      autoplayHoverPause:true,
      items: 1,
      singleItem: true,
      autoplay:true,
  });


    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        items: 5,
        dot:false,
        autoplay:true,
        responsive: {
          0:{
            items: 1
          },
          765:{
            items: 3
          },
          1124:{
            items: 5
          }
      }
    });
    $('.owl-three').owlCarousel({
        loop:true,
        autoplayHoverPause:true,
        items: 1,
        singleItem: true,
        autoplay:true,
    });
});

