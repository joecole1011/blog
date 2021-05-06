(function (d, s, id) {
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    const js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v10.0';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$( window ).on('scroll', function(){
    var scrollTop = $(this).scrollTop()
    var score = '15px'
    if (scrollTop > 1) {
        score = '5px 15px'
    }
    $('#navbar').css('padding', score)
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav:false,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        }
    });
});