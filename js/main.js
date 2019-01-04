jQuery(function($) {'use strict';

    //#main-slider
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height', slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider .item').css('height', slideHeight);
    });

    // wow.js being initiated
    new WOW().init();

    // the register section
    var registerSection = $('.register');

    // match the intervals at which the image loader changes with the textual content
    var allCarousellsItems = $('.carousel-inner .item');

    

        
    
});
