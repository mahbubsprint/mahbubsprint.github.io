
// Portfolio filter

$(function () {
    'use strict';
    $('#portfolio ul.portfolio-filter li').on('click', function () {
        // var linkValue = $(this).attr()
        $(this).addClass('active').siblings().removeClass('active');
    });
});

$(function () {
    'use strict';
    $('#portfolio ul.portfolio-filter li:first-of-type').on('click', function () {
        $('#portfolio .portfolio-items .item').hide(0).fadeIn(0);
    });
});


$(function () {
    'use strict';
    $('#portfolio ul.portfolio-filter li:not(:first-of-type)').on('click', function () {
        $('#portfolio .portfolio-items .item').hide(0);
        $('.' + $(this).data('value')).show(0);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $("#top-nav").css("background","#211307");
        }  
        else{
            $("#top-nav").css("background" , "transparent");
  	
        }
    })
  })

/* js for testimonials*/

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})