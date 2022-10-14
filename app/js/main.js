$(function(){
    $('.services__tab-button').on('click',
        function () {
            $('.services__tab-button').removeClass('services__tab-button_active');
            $(this).addClass('services__tab-button_active');
        },
    );
    $('.tab-button').on('click', function () {
        var tabName = $(this).attr('data-tab');
        var tab = $('.tab-content[data-tab="'+tabName+'"]');
        $('.tab-content').removeClass('tab-content_active');
        tab.addClass('tab-content_active');

        console.log(tabName);

    });
    // $('.services__tab-button').on('click', function () {
    //     $('.tab-content').css('display', 'flex');
    //     $(this).css('display', 'none');
    // });
})