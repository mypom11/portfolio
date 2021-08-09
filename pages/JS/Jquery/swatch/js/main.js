$(document).ready(function(){
    $('section').on('mousewheel',function(event,delta){
        if(delta > 0){
            let secPrev = $(this).prev().offset().top;
            $('body,html').stop().animate({scrollTop:secPrev},1400,'easeOutBounce')
        }else {
            let secNext = $(this).next().offset().top;
            $('body,html').stop().animate({scrollTop:secNext},1400,'easeOutBounce')
        }
    })

    $('#menu li').on('click',function(){
        let winh = $(window).height();
        let liNum = $(this).index();
        $('body,html').stop().animate({scrollTop:winh*liNum}, 1400);
    })

    $(window).on('scroll',function(){
        let winh = $(window).height();
        let sct = Math.ceil($(this).scrollTop());
        for(let i=0; i<4; i++){
            if(sct >= winh*i && sct < winh*(i+1)){
                $('#menu li').removeClass('on');
                $('#menu li').eq(i).addClass('on');
            }
        }
    })
    $('section').on('mousemove',function(e){
        let posx = e.pageX;
        let posy = e.pageY;
        $('.img11').css({'right': 20-(posx/30) ,'bottom':20-(posy/30)})
        $('.img12').css({'right': 130+(posx/30) ,'bottom':-40+(posy/30)})
        $('.img13').css({'right': 60+(posx/30) ,'bottom':180+(posy/30)})
        $('.img21').css({'right': -180-(posx/30) ,'bottom':-480-(posy/30)})
        $('.img22').css({'right': 130+(posx/30) ,'bottom':-40+(posy/30)})
        $('.img31').css({'right': 180+(posx/30) ,'bottom':30+(posy/30)})
        $('.img32').css({'right': 110-(posx/30) ,'bottom':-270-(posy/30)})
        $('.img33').css({'right': -70+(posx/30) ,'bottom':-130+(posy/30)})
        $('.img41').css({'right': 20+(posx/30) ,'bottom':-120+(posy/30)})
        $('.img42').css({'right': 0+(posx/30) ,'bottom':-180+(posy/30)})
    })
})
