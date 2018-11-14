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

    //# Reservas timer
    const day = document.querySelector('#day'),
          hour = document.querySelector('#hour'),
          minute = document.querySelector('#minute'),
          seconds = document.querySelector('#second');

    var secCounter = 60;

    var firstCounter = 0, secondCounter = 0, diffCounter = 1;

    function setTimer() {
        firstCounter++;
        secondCounter++;

        setSec();

        function setSec() {
          if (secondCounter % 60 == 0) {

            if ((firstCounter - (secondCounter - diffCounter)) < 10) {
              seconds.innerText = `0${firstCounter - (secondCounter - diffCounter)}`;
            } else {
              seconds.innerText = `${firstCounter - (secondCounter - diffCounter)}`;
            }

            diffCounter++;

            if (firstCounter % 3600 == 0) diffCounter = 0;  // turning point

          }
        }

        function setMin() {
          if (secondCounter % 60 == 0) {

            if ((firstCounter - (secondCounter - diffCounter)) < 10) {
              seconds.innerText = `0${firstCounter - (secondCounter - diffCounter)}`;
            } else {
              seconds.innerText = `${firstCounter - (secondCounter - diffCounter)}`;
            }

            diffCounter++;

            if (firstCounter % 3600 == 0) diffCounter = 0;  // turning point

          }
        }

        function setHor() {
          if (secondCounter % 60 == 0) {

            if ((firstCounter - (secondCounter - diffCounter)) < 10) {
              seconds.innerText = `0${firstCounter - (secondCounter - diffCounter)}`;
            } else {
              seconds.innerText = `${firstCounter - (secondCounter - diffCounter)}`;
            }

            diffCounter++;

            if (firstCounter % 3600 == 0) diffCounter = 0;  // turning point

          }
        }

        function setDay() {
          if (secondCounter % 60 == 0) {

            if ((firstCounter - (secondCounter - diffCounter)) < 10) {
              seconds.innerText = `0${firstCounter - (secondCounter - diffCounter)}`;
            } else {
              seconds.innerText = `${firstCounter - (secondCounter - diffCounter)}`;
            }

            diffCounter++;

            if (firstCounter % 3600 == 0) diffCounter = 0;  // turning point

          }
        }

        requestAnimationFrame(setTimer);
    }

    requestAnimationFrame(setTimer);
});
