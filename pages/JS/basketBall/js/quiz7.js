

// clickP2.onclick = function(){
//         if(0.5 <= Math.random()){
//             sub.innerHTML = '사용자가 2점슛을 성공하였습니다'
//             shoot--
//             return 2
//         }else{
//             sub.innerHTML = '사용자가 2점슛을 실패하였습니다'
//             shoot--
//             return 0
//         }
        
//     }
// clickP3.onclick = function(){
//         if(0.7 <= Math.random()){
//             sub.innerHTML = '사용자가 3점슛을 성공하였습니다'
//             shoot--
//             return 3
//         }else{
//             sub.innerHTML = '사용자가 3점슛을 실패하였습니다'
//             shoot--
//             return 0
//         }
// }
// clickCom.onclick = function(){
//     if(0.5 <= Math.random()){
//         if(0.5 <= Math.random()){
//             sub.innerHTML = '컴퓨터가 2점슛을 성공하였습니다'
//             return 2
//         }else{
//             sub.innerHTML = '컴퓨터가 2점슛을 실패하였습니다'
//             return 0
//         }
//     }else{
//         if(0.7 <= Math.random()){
//             sub.innerHTML = '컴퓨터가 3점슛을 성공하였습니다'
//             return 3
//         }else{
//             sub.innerHTML = '컴퓨터가 3점슛을 실패하였습니다'
//             return 0
//         }
//     }
// }
// if(shoot == 0){
//     if(comScore > plScore){
//         sub.innerHTML = '컴퓨터가 승리하였습니다'
//         return
//     }else if(comScore < plScore){
//         sub.innerHTML = '사용자가 승리하였습니다'
//         return
//     }else{
//         sub.innerHTML = '비겼습니다.'
//         return
//     }
//     }

function gameGo(){
    let shoot = 15
    let clickCom = document.querySelector('.com');
    let clickP2 = document.querySelector('.player2');
    let clickP3 = document.querySelector('.player3');
    let sub = document.querySelector('.sub')
    let comScore = 0;
    let plScore = 0; 
        

    clickP2.disabled = true;
    clickP3.disabled = true;
    clickCom.disabled = false;
    document.querySelector('.left').innerHTML = shoot
    document.querySelector('.plscore').innerHTML = plScore
    document.querySelector('.comscore').innerHTML = comScore
    clickP2.onclick = function(){
         if(0.5 <= Math.random()){
            sub.innerHTML = '사용자가 2점슛을 성공하였습니다'
            shoot -= 1
            plScore += 2
            document.querySelector('.plscore').innerHTML = plScore
            document.querySelector('.left').innerHTML = shoot
            clickP2.disabled = true;
            clickP3.disabled = true;
            clickCom.disabled = false;
            }else{
                sub.innerHTML = '사용자가 2점슛을 실패하였습니다'
                shoot -= 1
                plScore += 0
                document.querySelector('.plscore').innerHTML = plScore
                document.querySelector('.left').innerHTML = shoot
                clickP2.disabled = true;
                clickP3.disabled = true;
                clickCom.disabled = false;
            }
        }
    clickP3.onclick = function(){
         if(0.7 <= Math.random()){
                sub.innerHTML = '사용자가 3점슛을 성공하였습니다'
                shoot -= 1
                plScore += 3
                document.querySelector('.plscore').innerHTML = plScore
                document.querySelector('.left').innerHTML = shoot
                clickP2.disabled = true;
                clickP3.disabled = true;
                clickCom.disabled = false;
            }else{
                sub.innerHTML = '사용자가 3점슛을 실패하였습니다'
                shoot -= 1
                plScore += 0
                document.querySelector('.plscore').innerHTML = plScore
                document.querySelector('.left').innerHTML = shoot
                clickP2.disabled = true;
                clickP3.disabled = true;
                clickCom.disabled = false;
            }
        }    
    clickCom.onclick = function(){ 
         if(0.5 <= Math.random()){
                if(0.5 <= Math.random()){
                    sub.innerHTML = '컴퓨터가 2점슛을 성공하였습니다'
                    comScore +=2 ;
                    document.querySelector('.comscore').innerHTML = comScore
                    clickP2.disabled = false;
                    clickP3.disabled = false;
                    clickCom.disabled = true;
                }else{
                    sub.innerHTML = '컴퓨터가 2점슛을 실패하였습니다'
                    comScore += 0
                    document.querySelector('.comscore').innerHTML = comScore
                    clickP2.disabled = false;
                    clickP3.disabled = false;
                    clickCom.disabled = true;
                }
            }else{
                if(0.7 <= Math.random()){
                    sub.innerHTML = '컴퓨터가 3점슛을 성공하였습니다'
                    comScore += 3
                    document.querySelector('.comscore').innerHTML = comScore
                    clickP2.disabled = false;
                    clickP3.disabled = false;
                    clickCom.disabled = true;
                }else{
                    sub.innerHTML = '컴퓨터가 3점슛을 실패하였습니다'
                    comScore += 0
                    document.querySelector('.comscore').innerHTML = comScore
                    clickP2.disabled = false;
                    clickP3.disabled = false;
                    clickCom.disabled = true;
                }
            }  
    }
}
gameGo()