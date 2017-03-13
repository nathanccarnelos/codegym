//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
//typewriter
  document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0
      });
  });


var size = $(window).height();
$('#intro').css('min-height', size);
$('#about').css('min-height', size);
$('#contact').css('min-height', size);
$('#services').css('min-height', size);

