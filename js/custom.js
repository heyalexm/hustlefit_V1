/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

            });
        }
    });

    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });

    var $imagePopup = $('[data-insta-image-popup]');
    /*Image*/
    $imagePopup.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});