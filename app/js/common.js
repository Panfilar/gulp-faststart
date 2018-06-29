$(document).ready(function () {
    var textDef = 'Чего сидишь? Порадуй котэ, <span class="element__buy">купи</span>';
    var textSelect = ['Печень утки разварная с артишоками.', 'Головы щучьи с чесноком да свежайшая сёмгушка.', 'Печень утки разварная с артишоками.']
    var elCount = 0;

    $('.element').each(function () {
        $(this).attr('data-id', elCount++);
        $(this).find('.text').html(textDef);
    });

    $('body').on('click', ".element__buy", clickOnBuy);
    $('body').on('click', ".element__wrapper", function () {
        $(this).parents('.element').toggleClass('clicked');
    });

    $('.element__wrapper').mouseleave(function () {
        var elNomber = $(this).parents('.element').data('id');
        if ($(this).parents('.element').hasClass('disabled')) {
        } else if (
            $(this).parents('.element').hasClass('clicked')) {
            $(this).parents('.element').addClass('selected');
            $(this).parents('.element').data('id', elNomber).children('p.text').html(textSelect[elNomber])
        } else {
            $(this).parents('.element').removeClass('selected');
            var elNomber = $(this).parents('.element').data('id');
            $(this).parents('.element').data('id', elNomber).children('p.text').html(textDef);
        }
    });

    $('.element.disabled').each(function () {
        $(this).find('.text').html('Печалька, ' + $(this).find('.element__key-title').html() + ' закончился.');
    });
    $('.element.disabled').on('click', function () {
        $(this).removeClass('clicked');
    });

    function clickOnEl() {
        $(this).parents('.element').toggleClass('clicked');
        var elNomber = $(this).parents('.element').data('id');
        $(this).parents('.element').data('id', elNomber).children('p.text').toggleText(textDef, textSelect[elNomber]);
    }

    function clickOnBuy() {
        $(this).parents('.element').addClass('selected');
        $(this).parents('.element').addClass('clicked');
        var elNomber = $(this).parents('.element').data('id');
        $(this).parents('.element').data('id', elNomber).children('p.text').toggleText(textSelect[elNomber], textDef);

    };

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
});


