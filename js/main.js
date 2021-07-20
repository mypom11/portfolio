//조건에 따른 색상 변화 클래스
const wrap = document.querySelector('#wrap');
const nav = wrap.querySelector('#nav');
const main = wrap.querySelector('main');
const aside = wrap.querySelector('aside');
const footer = wrap.querySelector('footer');
let mainColor;
class Color{
    constructor(bg, main, sub, font){
        this.bg = bg;
        this.main = main;
        this.sub = sub;
        this.font = font;
    }
    aboutChange(){

    }
    backgroundChange(){
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
    new Color('#053742', '#A2DBFA', '#39A2DB', '#CFCFCF'),
    new Color('#52006A', '#CD113B', '#FF7600', '#FFA900'),
    new Color('#3A3A62', '#604FDD', '#26C6D0', '#E6E993'),
    new Color('#867AE9', '#C449C2', '#FFCEAD', '#FFF5AB'),
    new Color('#334257', '#548CA8', '#476072', '#EEEEEE'),
    new Color('#3C5186', '#9B72AA', '#C6B4CE', '#C6B4CE')
]
colors[0].backgroundChange()

$('#about').on('wheel', function(e){
    console.log(e.originalEvent.deltaY)
})

//header nav event


//about section


//project section


//contact section