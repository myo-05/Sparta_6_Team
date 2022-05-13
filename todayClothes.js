function todayClothes(data) {
    let clothes = document.querySelector('.today-clothes')
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
        clothes.innerHTML = 
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>패딩</h2></li>
        <li><h2>두꺼운 코트</h2></li>
        <li><h2>목도리</h2></li>
        <li><h2>기모의류</h2></li>
            `;
    } else if(earlyWinter) {
        clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>코트</h2></li>
        <li><h2>가죽자켓</h2></li>
        <li><h2>발열내의</h2></li>
        <li><h2>내의</h2></li>
        <li><h2>레깅스</h2></li>
            `;
    } else if(beginWinter) {
        clothes.innerHTML = `
        <li><h1>지금 날씨엔..</h1></li>
        <li><h2>자켓</h2></li>
        <li><h2>트렌치코트 코트</h2></li>
        <li><h2>야상</h2></li>
        <li><h2>니트</h2></li>
        <li><h2>청바지</h2></li>
        <li><h2>스타킹</h2></li>
            `;            
    } else if(fall) {
        clothes.innerHTML = `
    <li><h1>지금 날씨엔..</h1></li>
    <li><h2>얇은 니트</h2></li>
    <li><h2>맨투맨</h2></li>
    <li><h2>가디건</h2></li>
    <li><h2>청바지</h2></li>
        `;       
    } else if(earlyFall) {
        clothes.innerHTML = `
    <li><h1>지금 날씨엔..</h1></li>
    <li><h2>얇은 가디건</h2></li>
    <li><h2>긴팔</h2></li>
    <li><h2>면바지</h2></li>
    <li><h2>청바지</h2></li>
        `;
    } else if(earlySummer) {
        clothes.innerHTML = `
    <li><h1>지금 날씨엔..</h1></li>
    <li><h2>얇은 가디건</h2></li>
    <li><h2>얇은 셔츠</h2></li>
    <li><h2>반바지</h2></li>
    <li><h2>면바지</h2></li>
        `;            
    } else if(beginSummer) {
        clothes.innerHTML = `
    <li><h1>지금 날씨엔..</h1></li>
    <li><h2>반팔</h2></li>
    <li><h2>얇은 셔츠</h2></li>
    <li><h2>반바지</h2></li>
    <li><h2>면바지</h2></li>
        `;       
    } else if(summer) {
        clothes.innerHTML = `
    <li><h1>지금 날씨엔..</h1></li>
    <li><h2>민소매</h2></li>
    <li><h2>반팔</h2></li>
    <li><h2>반바지</h2></li>
    <li><h2>면바지</h2></li>
    <li><h2>원피스</h2></li>
        `;   
    }
}
