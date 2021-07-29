//조건에 따른 색상 변화 클래스
const wrap = document.querySelector('#wrap');
const section = wrap.querySelectorAll('section');
const nav = wrap.querySelector('#nav');
const main = wrap.querySelector('main');
const aside = wrap.querySelector('aside');
const footer = wrap.querySelector('footer');
const text_box = wrap.querySelectorAll('.text_box');
const page = document.querySelectorAll('.page');
const slider = wrap.querySelector('.slider');
const btn = slider.querySelector('.btn');
const windows = slider.querySelectorAll('.window');
const scrollBar = wrap.querySelector('.scrollbar');
const scrollBtn = wrap.querySelector('.scrollbar span');
const texts = wrap.querySelectorAll('.texts li');
const contentSlider = document.querySelectorAll('.content_list');
const videos = document.querySelectorAll('.video video');
let mainColor;
let subColor;
let currentSection = 0;
let current = 0;
let aboutColor;

class Color{
    constructor(bg, main, sub, font){
        this.bg = bg;
        this.main = main;
        this.sub = sub;
        this.font = font;
    }
    aboutChange(){
        mainColor = this.main;
        subColor = this.sub;
        this.bgChange();
        text_box.forEach(function(item){
            item.children[0].style.color = mainColor;
            item.children[1].style.color = subColor;
        })
    }
    bgChange(){
        mainColor = this.main
        wrap.style.background = this.bg;
        nav.style.color = this.font;
        nav.querySelectorAll('.under_bar').forEach(function(item){
            item.style.background = mainColor;
        })
        main.style.borderTopColor = this.sub;
        main.style.borderBottomColor = this.sub;
        aside.style.color = this.font;
        footer.style.color = this.font;
    }
}
colors = [
    new Color('#000033', '#0066CC', '#0099FF', '#EDEDED'),
    new Color('#0A1931', '#185ADB', '#EFEFEF', '#FFC947'),
    new Color('#000000', '#BD4B4B', '#EFB7B7', '#EEEEEE'),
    new Color('#211572', '#24BDDF', '#F4F4F4', '#FFFDBB'),
    new Color('#3A3A62', '#604FDD', '#26C6D0', '#E6E993'),
    new Color('#293462', '#F7BE16', '#216583', '#00818A'),   
]

//header nav event
colors[2].aboutChange()
nav.addEventListener('click',function(e){
    //nav에 클래스 달기
    nav.querySelectorAll('li').forEach(function(item){
        event.preventDefault()
        item.classList.remove('on');
    })
    e.target.classList.add('on');
    //currentSection 수정
    currentSection = e.target.dataset.section
    //section에 클래스 달기
    section.forEach(function(item){
        item.classList.remove('on');
    })
    section[currentSection].classList.add('on');
    //section 배경 가져오기
    if(currentSection != 0){
        colors[currentSection-1].bgChange();
        videos.forEach(function(item){
            item.pause()
        })
    }else{
        colors[aboutColor].bgChange()
        page[aboutColor-2].querySelector('video').play()
    }
})
//about section
//마우스 휠 이벤트
let speedhandler = 0;
$('html').on('wheel', function(e){
    if(currentSection == 0){
        if(e.originalEvent.deltaY > 0){
            speedhandler++
            if(speedhandler > 50){
                speedhandler = 0
                current++;
                pageAnimaiton()
            }
        }else{
            speedhandler--;
            if(speedhandler < -50){
                speedhandler = 0;
                current--;
                pageAnimaiton()
            }
        }
    }else if(currentSection == 1){
        if(e.originalEvent.deltaY > 0){
            speedhandler++
            if(speedhandler > 50){
                currentSlide++
                currentNum()
                mover(currentSlide)
                speedhandler = 0
            }
        }else{
            speedhandler--
            if(speedhandler <-35){
                currentSlide--
                currentNum()
                mover(currentSlide)
                speedhandler=0
            }
        }
    }else{
        return
    }
})

function pageAnimaiton(){
    //current 범위 정하기
    if(current < 0){
        current = 0;
    }else if(current > page.length-1){
        current = page.length-1;
    }
    //current에 따라 움직이는 #pages
    $('#pages').css('left',`${current * -100}vw`)
    //page 이벤트
    for(let i= 0; i < page.length; i++){
        if(current == i){
            setTimeout(function(){
                colors[i+2].aboutChange();
                aboutColor = i+2;
                videoStop()
                page[i].querySelector('video').play()
            },800)
            page.forEach(function(item){
                item.classList.remove('on');
            })
            page[i].classList.add('on');
        }
    }
}

function videoStop(){
    videos.forEach(function(item){
        item.pause()
    })
}
//project section



//slide 이벤트
let currentSlide = 0
let contentsCurrent = 0;

slider.addEventListener('click',function(e){
    textNum = e.target.parentNode.parentNode.dataset.class
    //중앙버튼 클릭시 rotateY 0
    if(e.target.classList == 'center'){
        e.target.parentNode.parentNode.classList.toggle('on'); 
    }else if(e.target.classList != 'window page0' && e.target.classList != 'window page0 on'){
        currentSlide++
        currentNum()
        mover(currentSlide)        
    }
    
})

function currentNum(){
    if(currentSlide < 0){
        currentSlide = 0
    }else if(currentSlide > 3){
        currentSlide = 3;
    }
}

function mover(current) {
    let num;
    num = -current;
    windows.forEach(function(item){
        item.className = `window page${num}`;
        num += 1;
    });
    scrollBtn.style.left = `${current*25}%`;
    texts.forEach(function(item){
        item.classList.remove('on')
    })
    texts[current].classList.toggle('on');
}


scrollBar.addEventListener('mousedown', function(e){
     if(e.offsetX/scrollBar.clientWidth < 0.25){
        currentSlide = 0;
        currentNum()
        mover(currentSlide)
    }else if(e.offsetX/scrollBar.clientWidth < 0.5){
        currentSlide = 1;
        currentNum()
        mover(currentSlide)
    }else if(e.offsetX/scrollBar.clientWidth < 0.75){
        currentSlide = 2;
        currentNum()
        mover(currentSlide)
    }else if(e.offsetX/scrollBar.clientWidth > 0.75){
        currentSlide = 3;
        currentNum()
        mover(currentSlide)
    }  
})

//contents slider
function contentSlide(num ,index){
    if(index < 0){
        contentsCurrent = 0;
    }else if(index > contentSlider[num].children.length-1){
        contentsCurrent = contentSlider[num].children.length-1;
    }else{
        contentSlider[num].style.left = `${index*-100}%`;
    }
}
contentSlider.forEach(function(item){
    item.style.width = `${item.children.length*100}%`;
})
//contact section
