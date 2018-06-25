$(document).ready(function () {
    $('.element__buy').on('click', function () {
        $(this).parents('.element').toggleClass('selected');
        $(this).parents('.element').toggleClass('clicked');
    });

    $('.element__wrapper').on('click', function () {
        $(this).parents('.element').toggleClass('clicked');
    });
    $('.element__wrapper').mouseleave(function () {
        if ($(this).parents('.element').hasClass('clicked')) {
            $(this).parents('.element').addClass('selected');
        } else {
            $(this).parents('.element').removeClass('selected');
        }
    })

});

