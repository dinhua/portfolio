$(function(){
    // Load components
    $('#nav').load('page/component/index-navigation.html');
    $('#footer').load('page/component/index-footer.html');

    // Work state
    $('[data-state="hidden"]').remove();
});