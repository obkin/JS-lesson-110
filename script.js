import $ from 'jquery';

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });
});