$(window).on('scroll', function() {
    // Efecto1
    var scrolled = $(this).scrollTop();
    $('.efecto1').css({
        'transform': 'translate3d(0, ' + (scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 400
    });

    // Efecto2 (Descubrir)
    var descubrirTop = $('#descubrir').offset().top - 300;
    var descubrirScrolled = descubrirTop - $(window).scrollTop();
    $('.efecto2').css({
        'transform': 'translate3d(0, ' + (-descubrirScrolled * 0.20) + 'px, 0)',
        'opacity': 1 - descubrirScrolled / 400
    });

    // Efecto3 (Surfing)
    var surfingTop = $('#surfing').offset().top - 300;
    var surfingScrolled = surfingTop - $(window).scrollTop();
    $('.efecto3').css({
        'transform': 'translate3d(0, ' + (surfingScrolled * 0.30) + 'px, 0)',
        'opacity': 1 - (-surfingScrolled) / 900
    });

    // Efecto4 (Es Ahora)
    var esahoraTop = $('#esahora').offset().top - 100;
    var esahoraScrolled = esahoraTop - $(window).scrollTop();
    $('.efecto4').css({
        'transform': 'translate3d(0, ' + (esahoraScrolled * 0.30) + 'px, 0)',
        'opacity': 1 - esahoraScrolled / 900
    });
});