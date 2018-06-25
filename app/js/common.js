$(document).ready(function () {
    $('.border-wrapper').addEventListener("mouseout").on('click', function () {
       /* var text = $(this).find(h3).text().trim();
        var all_text = $('#type-of-work').val();
        var all_text_arr = all_text ? all_text.split(',') : [];*/
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            /*var tmp = [];
            if (text) {
                $.each(all_text_arr, function (key, value) {
                    if (value.trim()) {
                        if (text != value.trim()) {
                            tmp.push(value.trim());
                        }
                    }
                })
                $('#type-of-work').val(tmp.join(','));
            }*/
        } else {
            $(this).addClass('selected');
           /* if (text) {
                all_text_arr.push(text);
                $('#type-of-work').val(all_text_arr.join(','));
            }*/
        }
    });
})
