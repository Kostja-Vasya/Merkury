import $ from 'jquery';
$( document ).ready(function () {
    $('.toggle-sidebar').on('click', function () {
        $('.sidebar').toggleClass('hidden');
        $('.content').toggleClass('sidebar-hidden');
        $('.toggle-sidebar i:first-child').toggleClass('fa-rotate-180');
    });
});