jQuery(function($) {'use strict';

    //#main-slider
    var slideHeight = $(window).height();
    $('#home-slider .item').css('height', slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider .item').css('height', slideHeight);
    });

    // wow.js being initiated
    new WOW().init();

    // match the intervals at which the image loader changes with the textual content
    var allCarousellsItems = $('.carousel-inner .item');
    var carouselElements = allCarousellsItems.length;

    if (allCarousellsItems[0].classList[1] == "active") alert("the 1st is up");

    for (let counter = 0; counter < carouselElements; counter++) {
        console.log(allCarousellsItems[counter]);

        


    }
    

        
    
});
