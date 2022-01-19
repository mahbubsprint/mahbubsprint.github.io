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
// function scrollOnPageLoad() {
//     // to top right away
//     if (window.location.hash) scroll(0, 0);
//     // void some browsers issue
//     setTimeout(scroll(0, 0), 1);
//     var hashLink = window.location.hash;
//       if ($(hashLink).length) {
//           console.log(hashLink);
//         $(function () {
//             // *only* if we have anchor on the url
//             // smooth scroll to the anchor id
//             $("#top-nav").css("background","#211307");
//             //$("#top-nav ul.navbar-list li").addClass('active').siblings().removeClass('active');
//             $('html, body').animate({
//               scrollTop: $(window.location.hash).offset().top
//             }, 'slow');
//         });
//       }
//   }
  
//   scrollOnPageLoad();

///

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    console.log(windscroll);
    if (windscroll >= 100) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 1) {
                console.log($(this).position().top);
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });

    } else {

        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }

    }).scroll();
/* js for testimonials*/

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    autoplay:true,
    dots:true
})