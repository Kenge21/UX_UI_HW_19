$(window).scroll(function() {
    var theta = $(window).scrollTop() / 800 % Math.PI;
    $('#background-logo-left-container').css({ transform: 'rotate(' + theta + 'rad)' });
    $('#background-logo-right-container').css({ transform: 'rotate(' + -theta + 'rad)' });
});
