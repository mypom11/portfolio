//조건에 따른 색상 변화 클래스
const wrap = document.querySelector('#wrap');
const section = wrap.querySelectorAll('section');
const nav = wrap.querySelector('#nav');
const main = wrap.querySelector('main');
const aside = wrap.querySelector('aside');
const footer = wrap.querySelector('footer');
const text_box = wrap.querySelectorAll('.text_box');
const page = document.querySelectorAll('.page')
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
    new Color('#52006A', '#CD113B', '#FF7600', '#FFA900'),
    new Color('#211572', '#24BDDF', '#F4F4F4', '#FFFDBB'),
    new Color('#3A3A62', '#604FDD', '#26C6D0', '#E6E993'),
    new Color('#293462', '#F7BE16', '#216583', '#00818A'),   
]

//header nav event
colors[2].aboutChange()
nav.addEventListener('click',function(e){
    //nav에 클래스 달기
    nav.querySelectorAll('li').forEach(function(item){
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
    }else{
        colors[aboutColor].bgChange()
    }
})
//about section
//마우스 휠 이벤트
$('html, body').on('wheel', function(e){
    if(currentSection == 0){
        if(e.originalEvent.deltaY > 0){
            current++;
            pageAnimaiton()
        }else{
            current--;
            pageAnimaiton()
        }
    }else{
        return;
    }
})

function pageAnimaiton(){
    //current 범위 정하기
    if(current < 0){
        current = 0;
    }else if(current > 6){
        current = 6;
    }
    //current에 따라 움직이는 #pages
    $('#pages').css('left',`${current * -50}vw`)
    //page 이벤트
    for(let i= 0; i < 5; i++){
        if(current == i*2){
            setTimeout(function(){
                colors[i+2].aboutChange();
                aboutColor = i+2;
            },800)
            page.forEach(function(item){
                item.classList.remove('on');
            })
            page[i].classList.add('on');
        }
    }
}


//project section

//

//slide 이벤트



//contact section
