function loadImg(data) {
    let background = document.querySelector('.flex-container');
    let currentTemp = data.main.temp;
    // let currentTemp = 17;

    let winter = currentTemp <= 4;
    let earlyWinter = currentTemp >= 5 && currentTemp < 9;
    let beginWinter = currentTemp >= 9 && currentTemp < 12; 
    let fall = currentTemp >= 12 && currentTemp < 17;
    let earlyFall = currentTemp >= 17 && currentTemp < 20;
    let earlySummer = currentTemp >= 20 && currentTemp < 23;
    let beginSummer = currentTemp >= 23 && currentTemp < 28;
    let summer = currentTemp >= 28;

    if(winter) {
        background.style.backgroundImage = "url('./img/winter.jpg')"
    } else if(earlyWinter) {
        background.style.backgroundImage = "url('./img/earlywinter.jpg')"
    } else if(beginWinter) {
        background.style.backgroundImage = "url('./img/beginwinter.jpg')"
    } else if(fall) {
        background.style.backgroundImage = "url('./img/fall.jpg')"
    } else if(earlyFall) {
        background.style.backgroundImage = "url('./img/earlyfall.jpg')"
    } else if(earlySummer) {
        background.style.backgroundImage = "url('./img/earlysummer.jpg')"
    } else if(beginSummer) {
        background.style.backgroundImage = "url('./img/beginsummer.jpg')"
    } else if(summer) {
        background.style.backgroundImage = "url('./img/summer.jpg')"    
    }
}