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
const pageBtn = wrap.querySelector('.scroll_btn');
const pageBtns = pageBtn.querySelectorAll('span');
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
        pageBtns.forEach(function(item){
            item.style.background = '#fff'
        })
        pageBtn.querySelectorAll('.on').forEach(function(item){
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
        item.classList.remove('on');
    })
    texts.forEach(function(item){
        item.classList.remove('on')
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
    if(currentSection == 1){
        texts[0].classList.add('on')
        colors[currentSection-1].bgChange();
        videos.forEach(function(item){
            item.pause()
        })
    }else if(currentSection != 0){
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
let speed = 5;
$('html').on('wheel', function(e){
    if(currentSection == 0){
        if(e.originalEvent.deltaY > 0){
            speedhandler++
            if(speedhandler > speed){
                speedhandler = 0
                current++;
                pageAnimaiton()
                btnChange()
            }
        }else{
            speedhandler--;
            if(speedhandler < -speed){
                speedhandler = 0;
                current--;
                pageAnimaiton()
                btnChange()
            }
        }
    }else if(currentSection == 1){
        if(e.originalEvent.deltaY > 0){
            speedhandler++
            if(speedhandler > speed){
                currentSlide++
                currentNum()
                mover(currentSlide)
                speedhandler = 0
            }
        }else{
            speedhandler--
            if(speedhandler <-speed){
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

//skills 탭 이벤트
const can = document.querySelector('.can');
const skill = document.querySelector('.depth');
const skills = document.querySelectorAll('.depth > div');
const cancel = document.querySelector('.cancel');
const subImg = document.querySelectorAll('.subimgs');
const containerBtn = document.querySelectorAll('.containerBtn');
const lists = document.querySelectorAll('.lists');
const imgDom = document.querySelectorAll('.subimg');

subImg.forEach(function(item){
    item.style.width = `${item.children.length*100}%`
})
let opener = 0;
let currentSub=0;

can.addEventListener('click',function(e){
    opener = e.target.dataset.num;
    skill.style.visibility = 'visible'
    skill.style.opacity = '1'
    skills[opener].style.visibility = 'visible'
    className = skills[opener].className
    nav.style.display = 'none';
    pageBtn.style.display = 'none'
    lists[opener].childNodes.forEach(function(item){
        item.addEventListener('mouseenter',function(e){
            imgnum = e.target.dataset.num
            imgDom[opener].children[0].setAttribute('src',`pages/${className}/sub${imgnum}.jpg`)
        })
    })
})
cancel.addEventListener('click',function(){
    skill.style.visibility = 'hidden'
    skill.style.opacity = '0'
    skills.forEach(function(item){
        item.style.visibility = 'hidden'
    })
    nav.style.display = 'flex';
    pageBtn.style.display = 'flex'
    currentSub = 0;
})

containerBtn.forEach(function(item){
    item.addEventListener('click',function(e){
       if(e.target.classList[0] == 'right'){
           if(currentSub >= 0 && currentSub < subImg[opener-3].children.length-1){
            currentSub++
            subImg[opener-3].style.left = `${-currentSub*100}%`
           }
       }else{
           if(currentSub < subImg[opener-3].children.length && currentSub > 0){
            currentSub--
            subImg[opener-3].style.left = `${-currentSub*100}%`
           }
       }
    })
})



//스크롤바 이벤트
pageBtn.addEventListener('click', function(e){
    current = e.target.dataset.num;
    btnChange(current)
    pageAnimaiton()
})

function btnChange(){
    pageBtns.forEach(function(item){
        item.classList.remove('on');
    })
    pageBtns[current].classList.add('on');
}


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
    texts[current].classList.add('on');
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
let profileCurrent = 0;
const profileContainer = document.querySelector('.profile_img')
const imgClone = profileContainer.children[0].cloneNode(true);
profileContainer.appendChild(imgClone)
const profileimg = document.querySelectorAll('.profile_img li')


profileimg.forEach(function(item, index){
    item.style.left = `${index*100}%`;
})
let timer = setInterval(function(){
    profileMove()
},5000)

function profileMove(){
    profileCurrent++
    profileimg.forEach(function(item, index){
        item.style.transition = '1s ease-in'
        item.style.left = `${(index-profileCurrent)*100}%`;
    })
    if(profileCurrent == profileimg.length){
        profileimg.forEach(function(item, index){
            item.style.transition = 'none';
            profileCurrent = 0;
            item.style.left = `${(index-profileCurrent)*100}%`;
        })
    }
}