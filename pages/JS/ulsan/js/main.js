$(document).ready(function(){
    //slide_imgs width를 li 갯수로
    let imgNum = $('.slide_imgs li').length
    $('.slide_imgs ul').css('width',imgNum*404)
    let index = 0;
    let timer;

    startSlide()
    function slide(slideIndex){    
        $('.slide_imgs ul').css('left',`${slideIndex *-404}px`);
        index = slideIndex
    }
     //slide 왼쪽버튼을 누르면 슬라이드 이미지 왼쪽으로 이동
    $('#visual .arrow span').on('click',function(){
        let direction = $(this).attr('class');
        if(direction == 'left'){
            if(index == imgNum-1){
            }else{
                let slideleft = (index+1)
                slide(slideleft);
            }
        }else{
            if(index == 0 ){
            }else{
                let slideright = (index-1)
                slide(slideright);
            }
        }
    })
    //이미지 누를시 visual화면 변경
    $('.slide_imgs li').on('click',function(){
        let imgSrc = $(this).children('img').attr('src')
        index = $(this).index();
        $('.visual_main').css('background-image',`url(${imgSrc})`)
        if(index == imgNum-1){
            slide(5)
        }else{
            slide(index)
        }
    })
    
    //이미지 자동 슬라이드
    function startSlide(){
        timer = setInterval(function(){
            let nextSlide = (index+1) % (imgNum)
            slide(nextSlide)
            let img = $('.slide_imgs li').eq(index).children('img').attr('src');
            console.log(img)
            $('.visual_main').css('background-image',`url(${img})`)
        },5000)
    }
    $('.slide_imgs, .arrow').on('mouseenter',function(){
        clearInterval(timer)
    })
    $('.slide_imgs, .arrow').on('mouseleave',function(){
        startSlide()
    })
})