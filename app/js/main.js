$(function(){
    $('.services__tab-button').on('click',
        function () {
            $('.services__tab-button').removeClass('services__tab-button_active');
            $('.services__tab-button').removeClass('active');
            $(this).addClass('services__tab-button_active');
        },
    );
    $('.tab-button').on('click', function () {
        var tabName = $(this).attr('data-tab');
        var tab = $('.tab-content[data-tab="'+tabName+'"]');
        $('.tab-content').removeClass('tab-content_active');
        tab.addClass('tab-content_active');
    })
    $('.header__burger-btn').on('click', function () {
        $('.header__burger-line').toggleClass('header__burger-line_active')
        $('.header__nav-burger').toggleClass('header__nav-burger_active')
    });
    
})