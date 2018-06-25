$(document).ready(function () {
    $('.border-wrapper').on('click', function () {
        $(this).toggleClass('clicked');
    });
    $('.border-wrapper').mouseleave(function () {
        if ($(this).hasClass('clicked')) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    });
});
