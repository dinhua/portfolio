$(function(){
    // Loading
    document.body.classList.add('render');
    setTimeout(function(){
        // Image Loading
        imagesLoaded(document.body, function(){
            document.body.classList.remove('loading');
        })
    }, 1000);

    // 抓取目標按鈕
    var $btn = $('.cta-button');
      
    // 儲存目標按鈕的值
    var $desktopText = $btn.html();
    var $mobileText = $btn.attr('title');
      
    if ($(window).width() < 1024) {
        $btn.html($mobileText);
    } else {
        $btn.html($desktopText);
    }
      
    $(window).resize(function () {
        if ($(window).width() < 1024) {
            $btn.html($mobileText);
        } else {
            $btn.html($desktopText);
        }
    });

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