import $ from 'jquery';

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', () => {
        $('.image:even').fadeToggle('slow');
    });
});