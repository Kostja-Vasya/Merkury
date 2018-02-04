import $ from 'jquery';
$( document ).ready(function () {
    $('.toggle-sidebar').on('click', function () {
        $('.sidebar').toggleClass('hidden');
        $('.content').toggleClass('sidebar-hidden');
    });
});