let temperture = 23;
let UV = '높음';
let rain_degree = 40;
let humid_degree = 40;
let mise_degree = '좋음';
let king_mise_degree = '나쁨';
let today_weather = '맑음';

let UV_coment = '';
let mise_coment = '';
let rain_coment = '';

switch (UV){
    case '높음':
        UV_coment ='오늘 모자나 양산을 챙기는 건 어떨까요 ??'
        break;
    case '보통':
        UV_coment ='오늘 선크림을 바르는 건 어떨까요??'
}

if(rain_degree >= 50 || today_weather=='비'){
        rain_coment = '비 소식이 있으니, 우산을 챙기는 것이 좋을 것 같네요 !!'
}

if((mise_degree =='나쁨'&& king_mise_degree =='나쁨') || mise_degree == "매우 나쁨" || king_mise_degree == "매우 나쁨"){
        mise_coment = '공기가 좋지 않으니 마스크를 챙겨야 할 것 같아요 :('
}


switch (mise_degree){
    case '좋음':
        $(".mise_icon").attr("src", "images/good.png");
        break;
    case '나쁨':
        $(".mise_icon").attr("src", "images/bad.png");
        break;
    case '매우 나쁨':
        $(".mise_icon").attr("src", "images/worst.png");
        break;
}

switch (king_mise_degree){
    case '좋음':
        $(".king_mise_icon").attr("src", "images/good.png");
        break;
    case '나쁨':
        $(".king_mise_icon").attr("src", "images/bad.png");
        break;
    case '매우 나쁨':
        $(".king_mise_icon").attr("src", "images/worst.png");
        break;
}


$('.weather_coment_text').html( '현재 기온은 '+ temperture + '℃ 이고,<br>' +
    '자외선 지수는 ' + UV + ' 수준입니다.<br>' +
    UV_coment + '<br>' + rain_coment + mise_coment);

$('.rain_degree').html(rain_degree + ' %');
$('.humid_degree').html(humid_degree + ' %');
$('.mise_degree').html(mise_degree);
$('.king_mise_degree').html(king_mise_degree);