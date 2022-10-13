$(function(){
    $('.services__tab-button').on('click',
        function () {
            $('.services__tab-button').removeClass('services__tab-button_active');
            $(this).addClass('services__tab-button_active');
        },
    );
    $('.services__tab-button').on('hover',
        function() {
            $('.services__tab-button').removeClass('services__tab-button_active');
        }, 
        function() {
            $(this).addClass('services__tab-button_active');
        }
    );
})