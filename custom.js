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
        if (scroll > 100) {
            console.log('scroll down')
          $("#top-nav").css({"background":"#211307"});
        }  
        else{
            console.log('scroll up')
            //$("#top-nav").css("background" , "red");
            $("#top-nav").css({"background":"transparent"});
  	
        }
    })
})
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    console.log(windscroll);
    if (windscroll >= 50) {
        console.log('from if');
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 1) {
                //console.log($(this).position().top);
                $('nav #main-menue #top-menu li.active').removeClass('active');
                $('nav #main-menue #top-menu li').eq(i).addClass('active');

                $('nav #menuToggle #menu li.active').removeClass('active');
                $('nav #menuToggle #menu li').eq(i).addClass('active');
                console.log($('nav #menuToggle #menu li.active'));

            }
        });

    } else {
        console.log('from else');
        $('nav #main-menue #top-menu li.active').removeClass('active');
        $('nav #main-menue #top-menu li:first').addClass('active');

        $('nav #menuToggle #menu li.active').removeClass('active');
        $('nav #menuToggle #menu li:first').addClass('active');

    }
    }).scroll();
/* js for testimonials*/
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})