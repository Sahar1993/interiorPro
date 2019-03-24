
$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNav');
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scrollNav');
        };
    });
    
   /*
    $('.workItem').mouseenter(function(){
        $('.inside').addClass('visible');
    });
    $('.workItem').mouseleave(function(){
        $('.inside').removeClass('visible');
    }); */
   
});