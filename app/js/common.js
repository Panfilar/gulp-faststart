$(document).ready(function () {
    var textDef = 'Чего сидишь? Порадуй котэ, <span class="element__buy">купи</span>';
    var textSelect = 'Печень утки разварная с артишоками.';





    $('.element__buy').on('click', function () {
        $(this).parents('.element').toggleClass('selected');
        $(this).parents('.element').toggleClass('clicked');
    });

    $('.element__wrapper').on('click', function () {
        $(this).parent('.element').toggleClass('clicked');
        $(this).closest(".element").children('p.text').toggleText(textDef, textSelect);

    });

    $('.element.disabled').on('click', function () {
        var defText=$(this).children('p.text');
        $(this).removeClass('clicked');
        $(this).closest(".element").children('p.text').html('Печалька, ' + $(this).find('.element__key-title').html() + ' закончился.');
    });
    
    $('.element.disabled').each(function () {
        $(this).find('.text').html('Печалька, ' + $(this).find('.element__key-title').html() + ' закончился.');

    });


    $('.element__wrapper').mouseleave(function () {
        if ($(this).parents('.element').hasClass('clicked')) {
            $(this).parents('.element').addClass('selected');
        } else {
            $(this).parents('.element').removeClass('selected');
        }
    })


});

jQuery.fn.extend({
    toggleText: function (a, b) {
        var that = this;
        if (that.html() != a && that.html() != b) {
            that.html(a);
        }
        else if (that.html() == a) {
            that.html(b);
        }
        else if (that.html() == b) {
            that.html(a);
        }
        return this;
    }
});

