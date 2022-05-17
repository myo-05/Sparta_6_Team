

// const temp = document.querySelector('.clothes1')
const card = document.querySelector('#card2-b')


// $('.clothes1').css({"background":"url(./images/~28.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '1000px 100%'});

// 기온별 대표 옷차림.
    let temp = 38;
    alert(temp)
    // 여자
    if(temp <= 4 ){
      $('.clothes1').css({"background":"url(./images/~5.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '100% 100%'});
    } else if(temp <= 8){
      $('.clothes1').css({"background":"url(./images/8~5.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '100% 100%'});
    } else if (temp <= 11){
      $('.clothes1').css({"background":"url(./images/11~9.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '100% 100%'});
    } else if (temp <= 16){
      $('.clothes1').css({"background":"url(./images/12~16.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '60% 100%'});
    } else if(temp <= 19){
      $('.clothes1').css({"background":"url(./images/19~17.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '150% 120%'});
    } else if(temp <= 22){
      $('.clothes1').css({"background":"url(./images/22~20.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '150% 100%'});
    } else if(temp <=27){
      $('.clothes1').css({"background":"url(./images/27~23.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '100% 100%'});
    } else{temp >=28
      $('.clothes1').css({"background":"url(./images/~28.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '150% 120%'});
    }
    //남자
    

console.log($('.CurrIcon > i').attr('class'))

  
  
