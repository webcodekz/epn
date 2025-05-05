(function ($) {
 "use strict";
 
 
/*
Preloader
------------------------------ */

setTimeout(function () {
	$('#preloader').fadeToggle();
}, 1500);
 
/*
Tooltip
------------------------------ */

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

/*
Countdown Clock
------------------------------ */
var endTime = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

function makeTimer() {
    var now = new Date();
    var timeLeft = endTime - now;

    if (timeLeft < 0) {
        document.getElementById("days").innerHTML = "00<h6>Days</h6>";
        document.getElementById("hours").innerHTML = "00<h6>Hrs</h6>";
        document.getElementById("minutes").innerHTML = "00<h6>Min</h6>";
        document.getElementById("seconds").innerHTML = "00<h6>Sec</h6>";
        return;
    }

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("days").innerHTML = days + "<h6>Days</h6>";
    document.getElementById("hours").innerHTML = hours + "<h6>Hrs</h6>";
    document.getElementById("minutes").innerHTML = minutes + "<h6>Min</h6>";
    document.getElementById("seconds").innerHTML = seconds + "<h6>Sec</h6>";
}

setInterval(makeTimer, 1000);


/*
Prognroll 
------------------------------ */
$(function() {
  $("#scrollbar-right").prognroll({
    height: 2, //Progress bar height
    color: "#fd6802", //Progress bar background color
    custom: true //If you make it true, you can add your custom div and see it's scroll progress on the page
  });
});

/*
Expend 
------------------------------ */
$(".notify-btn,.close-icon").click(function() {
	$("body,#scrollbar-right,.close-icon").toggleClass("active");
});

 
 })(jQuery)