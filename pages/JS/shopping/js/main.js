//loaditems함수
//data.json에 있는 데이터를 읽어와서 아이템 전달하기
//메인코드
loaditems()
.then(items=>{
    console.log(items);
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log('error'));
function loaditems(){
    //fetch()사용
    //json데이터를 fetch함수를 이용하여 받아옴
    return fetch('data/data.json')
    //성공시 받아온 데이터를 제이슨으로 변환
    .then(response => response.json())
    //변환이 성공하면 json안에 있는 items를 리턴
    .then(json => json.items)
}
//받아온 jason데이터를 items안에 innerHTML을 사용하여 html화면에 나타내기
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}
//html스트링으로 변경
function createHTMLString(item){
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="img_thumnail">
            <span class="item_description">${item.gender} ${item.size}</span>
        </li>
    `
}

//이벤트 발생
function setEventListeners(items){
    const logo= document.querySelector('.logo');
    const button= document.querySelector('.btnDiv');
    logo.addEventListener('click',()=>displayItems(items));
    button.addEventListener('click',event => onButtonClick(event, items))
}
//버튼이 클릭할때 실행되는 함수
function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    const filterd = items.filter(item => item[key] === value)
    displayItems(filterd)
}