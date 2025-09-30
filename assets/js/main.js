$(document).ready(function() {
    // Smooth scrolling para los enlaces de anclaje
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('.main-header').outerHeight() // Ajustar por la altura del header sticky
            }, 800);
        }
    });

    // Menú de navegación responsive (hamburguesa)
    const navToggle = $('.nav-toggle');
    const mainNav = $('.main-nav');

    navToggle.on('click', function() {
        mainNav.toggleClass('active');
        $(this).toggleClass('active');
    });

    // Cerrar menú al hacer clic en un enlace (solo en móvil)
    mainNav.find('a').on('click', function() {
        if (navToggle.is(':visible')) { // Si el botón de toggle es visible (modo móvil)
            mainNav.removeClass('active');
            navToggle.removeClass('active');
        }
    });

    // Añadir clase 'active' a los enlaces de navegación al hacer scroll
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('section').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('id')); // Obtener el ID de la sección
            if (refElement && refElement.offset().top - $('.main-header').outerHeight() <= scrollPos + 100) {
                $('.main-nav ul li a').removeClass('active');
                $('.main-nav a[href="#' + currLink.attr('id') + '"]').addClass('active');
            }
        });
    }).scroll(); // Ejecutar al cargar para establecer el estado inicial
});