$(function(){
    // Fancybox Effect
    var $fancybox = $('[data-fancybox="gallery"]');

    // Fancybox Options
    $fancybox.fancybox({
        loop: true,
        infobar: true,
        toolbar: true,
        arrow: true,
        buttons: [
            "zoom",
            "close"
        ]
    });

    // Fancybox Target Href
    $fancybox.each(function(){
        var $fancyboxHref = $(this).find('img').attr('src');
        $(this).attr('href', $fancyboxHref);
    });
});