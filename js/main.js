$(document).ready(function () {

    // kode od SKILLS bara

    $(window).scroll(function () {
        bar();
    });
    bar();

    function bar() {

        var wh = $(window).height();
        var scroll = $(window).scrollTop();

        $('.blue-bar').each(function () {
            var position = $(this).offset().top;

            if (position < wh + scroll - 100) {

                $('.blue-bar').each(function () {
                    var skill = $(this).attr('data-skill');
                    $(this).find('.white-bar').css({'width': skill + '%'});
                });
            }
        });
    }







});