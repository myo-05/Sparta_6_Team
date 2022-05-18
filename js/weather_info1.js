



const input_val = document.querySelector('.input_city');
const form = document.querySelector('#changeC');
form.addEventListener('submit', ChangeCity);

let city = "Seoul";
let city_name = {
    '서울': 'Seoul',
    '부산': 'busan',
    '제주': 'jeju',
    '광주': 'gwangju',
    '대전': 'daejeon',
    '대구': 'daegu',
    '세종': 'sejong',
    '인천': 'incheon',
    '울산': 'ulsan',
    '순천': 'Suncheon'
};

let city_name_reverse = {
    'Seoul': '서울',
    'busan': '부산',
    'jeju': '제주',
    'gwangju': '광주',
    'daejeon': '대전',
    'daegu': '대구',
    'sejong': '세종',
    'incheon': '인천',
    'ulsan': '울산',
    'Suncheon': '순천'
};


$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = String(position.coords.latitude);
            const longitude = String(position.coords.longitude);
            firstCall(longitude, latitude);
        }, showError);
    } else {
        alert("geolocation을 브라우저가 지원하지않습니다.");
    }
});

function showError(error) {
    switch (error.code) {

        case error.PERMISSION_DENIED:
            alert("사용자가 정보제공을 거부했습니다. 서울기준으로 출력합니다.");
            cityCall();
            break;

        case error.POSITION_UNAVAILABLE:
            alert("위치정보 이용 불가,서울기준으로 출력합니다.");
            cityCall();
            break;

        case error.TIMEOUT:
            alert("위치정보 얻기 요청 시간초과,서울기준으로 출력합니다.");
            cityCall();
            break;

        case error.UNKNOWN_ERROR:
            alert("예상치 못한 에러 발생");
            cityCall();
            break;
    }
}

function firstCall(lon, lat) {
    let weatherIcon = {
        '01': 'fas fa-sun',
        '02': 'fas fa-cloud-sun',
        '03': 'fas fa-cloud',
        '04': 'fas fa-cloud-meatball',
        '09': 'fas fa-cloud-sun-rain',
        '10': 'fas fa-cloud-showers-heavy',
        '11': 'fas fa-poo-storm',
        '13': 'far fa-snowflake',
        '50': 'fas fa-smog'
    };

    let background = {
      '01': './images/쾌청.gif',
      '02': './images/맑음.gif',
      '03': './images/흐림.gif',
      '04': './images/흐림.gif',
      '09': './images/비.gif',
      '10': './images/뇌우.gif',
      '11': './images/번개.gif',
      '13': './images/눈.gif',
      '50': './images/안개.gif'
    };

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ae2cb83e59342ff01977d51d6104c10a`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            let $Icon = (data.weather[0].icon).substring(0, 2);
            let temp = Math.round(data.main.temp)
            let $Temp = Math.round(data.main.temp) + 'º';
            let $city = data.name;
            let $MaxTemp = Math.round(data.main.temp_max) + 'º';
            let $MinTemp = Math.round(data.main.temp_min) + 'º';
            let $feel = Math.round(data.main.feels_like) + 'º';

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')

            $('.CurrTemp').text($Temp);
            if ($city in city_name_reverse) {
                $('.City').text(city_name_reverse[$city]);
            } else {
                $('.City').text($city);
            }
            $('.Max_Temp').text($MaxTemp);
            $('.Min_Temp').text($MinTemp);
            $('.feel').text($feel);


            $('#wrap').css('background', 'url(' + background[$Icon] + ')');
            $('#wrap').css('background-size', 'cover');
            $('#wrap').css('background-repeat', 'no-repeat');

            // 기온별 대표 옷차림.
            
          
            // 여자
            if(temp <= 4 ){
              $('.clothes1').css({"background":"url(./images/~5.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '80% 85%'});
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
            if(temp <= 4 ){
              $('.clothes1_2').css({"background":"url(./images/~4남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <= 8){
              $('.clothes1_2').css({"background":"url(./images/5~8남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 90%'});
            } else if (temp <= 11){
              $('.clothes1_2').css({"background":"url(./images/9~11남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if (temp <= 16){
              $('.clothes1_2').css({"background":"url(./images/12~16남.png)", 'background-repeat' : 'no-repeat', 'background-position':'45% 50%','background-size': '50% 80%'});
            } else if(temp <= 19){
              $('.clothes1_2').css({"background":"url(./images/17~19남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if(temp <= 22){
              $('.clothes1_2').css({"background":"url(./images/20~22남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <=27){
              $('.clothes1_2').css({"background":"url(./images/23~27남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else{temp >=28
              $('.clothes1_2').css({"background":"url(./images/~28남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            }
            
            let temp_html1 = `<p>28도 이상의 날씨는한여름 날씨입니다.<br>
            최대한 얇고 가볍게 입는 것이 좋겠죠?<br>
            이렇게 더운 날일수록 <br>
            실내에서는 에어컨을 강하게 틀기도 하니 <br>
            추위를 많이 타시는 분의 경우 <br>
            얇은 가디건을 챙기시는 것도 추천드려요 :)</p>`
            let temp_html2 = `<p>27도에서 23도 사이의 날씨는
            한여름은 아니지만<br>
            그래도 더운 날씨라고 생각됩니다.<br>
            상의로는 반팔이나 얇은 셔츠를 추천드리며<br>
            하의는 반바지 혹은 면바지를 추천드립니다!<br>
            냉방이 센 실내에선 추울 수 있으니
            얇은 셔츠를 입는것도 좋아요.
            여름 감기가 더 무서운 거 알고 있죠?<br>
            여름엔 액세서리도 최대한 가볍게.<br>
            여름엔 시원해 보이는 은색 아이템이 예뻐요.</p>`
            let temp_html3 = `<p>이때부터는 스트라이프나 래글런 같이
            포인트가 될 만한 기본 티셔츠 코디가 빛을 내는 시기에요.<br>
            셔츠나 얇은 긴팔을 입어도 좋을 날씨에요!
            긴팔이나 얇은 소재의 가디건,
            셔츠, 맨투맨, 바람막이를 추천드립니다!<br>
            하의의 경우 기본 슬랙스나 청바지
            모두 추천드려요 :)<br>
            하지만 날씨가 조금 시원해졌지만<br>
            여전히 여름 같은 날씨라는 점, 잊지 말기!</p>`
            let temp_html4 = `<p>이 정도 날씨가 되면
            패션을 좋아하시는 분들이<br>
            여러 스타일로 꾸밀 수 있는 계절입니다!<br>
            이 날에 경우는 
            대부분의 옷을 다 입을 수 있습니다.<br>
            상의는 두꺼운 소재만 아니라면
            가디건, 셔츠, 맨투맨, 후드
            등 다 추천드려요!<br>
            황금 날씨! 나들이 가기 딱 좋은 기온.
            샤랄라, 멋진스타일을 뽐내기 적절한 날씨에요.<br>
            가을바람이 쓸쓸하다면 카디건을 꺼내 봐요.<br>
            니트 조끼를 활용한 코디도 좋고요!
            롱롱한 아이템을 입기에도 딱 좋은 날씨입니다!</p>`
            let temp_html5 = `<p>16도에서 12도 사이의 경우
            일교차가 더욱 커지는 시기이므로<br>
            여러 겹을 겹쳐 입어
            기온에 맞게, 장소에 맞게
            입거나 벗는 것이 중요합니다!<br>
            지금부터는 얇은 아우터를 꼭 챙기도록 해요!<br>
            대표적인 얇은 아우터인 재킷과 트렌치코트는
            바로 이때 뽕을 빼야 해요, 가을날씨는 짧으니까요🍂😢<br>
            기온이 14도 이하로 내려가면 여성분은
            스타킹을 신어도 덥지 않을 거예요.
            </p>`
            let temp_html6 = `<p>
            11도와 9도 사이의 날씨는
            아우터는 아직 괜찮지만, 적절한 레이어드로
            껴입기에 도전하기 좋은날씨 날이죠! <br>
            트렌치코트나 야상, 점퍼
            등을 많이 입는 시기입니다!<br>
            사실, 이런 날씨가 아니면 트렌치코트를
            입지 못하기 때문에
            많은 분들이 이때다! 싶어
            트렌치코트를 입으시는 듯 합니다!<br> 또,
            히트택과 니트를 쟁여놓아야 할 시기에요.<br>
            본격적인 월동준비의 시작이죠.
            기모 나와라 오바. <br>
            되도록 기모 있는 상의를 입는 게 좋아요.
            </p>`
            let temp_html7 = `<p>8도부터 5도 사이의 날씨는
            가을에서 겨울로 넘어가는
            시기이기 때문에
            제법 춥습니다.<br>
            아직 영하로 내려가지 않은 날씨지만
            코트를 입어도 어색하지 않은 기온.<br>
            아껴둔 항공 점퍼를 꺼내 입어요!<br>
            도톰한 야상 재킷도 좋아요.
            신발은 츠를 신으면 예쁠 거에요.<br>
            머플러를 두르는 것도 잊지 말아요~<br>
            감기 예방에 신경 써야 해요!
            겨울 코트나 두툼한 울 소재의 아우터,
            목폴라 정도를 입기 좋습니다.<br>
            추위를 타시는 분이라면
            히트택이나 내복을 입어
            체온 유지를 하셔도 좋아요.</p>`
            let temp_html8 = `<p>으악 춥다 추워!
            4도 이하의 날씨는 겨울이죠!<br>
            겨울하면 먼저 생각나는 옷은?<br>
            바로 패딩입니다.
            추운 겨울 체온 유지를 위해서
            껴입을 수 있을 만큼 껴입으세요.<br>
            두꺼운 코트나,퉁실퉁실한 근육맨 패딩은 필수.<br>
            히트택,누빔옷, 기모, 니트, 후리스, 목도리 등등, 
            발열을 위한 모든 아이템을 총출동 시켜요.<br>
            장갑과 귀마개 그리고 비니까지.<br>
            겨울의 액세서리도 잊지 말고 챙기기.
            </p>`
            var front = $('.front')

            if(temp <= 4 ){
              front.append(temp_html8);
            } else if(temp <= 8){
              front.append(temp_html7);
            } else if (temp <= 11){
              front.append(temp_html6);
            } else if (temp <= 16){
              front.append(temp_html5);
            } else if(temp <= 19){
              front.append(temp_html4);
            } else if(temp <= 22){
              front.append(temp_html3);
            } else if(temp <=27){
              front.append(temp_html2);
            } else{temp >=28
              front.append(temp_html1);
            }
          
  
        }
    })
}


function cityCall() {
    let weatherIcon = {
        '01': 'fas fa-sun',
        '02': 'fas fa-cloud-sun',
        '03': 'fas fa-cloud',
        '04': 'fas fa-cloud-meatball',
        '09': 'fas fa-cloud-sun-rain',
        '10': 'fas fa-cloud-showers-heavy',
        '11': 'fas fa-poo-storm',
        '13': 'far fa-snowflake',
        '50': 'fas fa-smog'
    };

    let background = {
      '01': './images/쾌청.gif',
      '02': './images/맑음.gif',
      '03': './images/흐림.gif',
      '04': './images/흐림.gif',
      '09': './images/비.gif',
      '10': './images/뇌우.gif',
      '11': './images/번개.gif',
      '13': './images/눈.gif',
      '50': './images/안개.gif'
    }

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec9cd6710da1e9cecf9b13dfaad54c36&units=metric`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            let $Icon = (data.weather[0].icon).substring(0, 2);
            let $Temp = Math.round(data.main.temp) + 'º';
            let $city = city;
            let $MaxTemp = Math.round(data.main.temp_max) + 'º';
            let $MinTemp = Math.round(data.main.temp_min) + 'º';
            let $feel = Math.round(data.main.feels_like) + 'º';

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')
            $('.CurrTemp').text($Temp);
            if ($city in city_name_reverse) {
                $('.City').text(city_name_reverse[$city]);
            } else {
                $('.City').text($city);
            }
            $('.Max_Temp').text($MaxTemp);
            $('.Min_Temp').text($MinTemp);
            $('.feel').text($feel);

            $('#wrap').css('background', 'url(' + background[$Icon] + ')');
            $('#wrap').css('background-size', 'cover');
            $('#wrap').css('background-repeat', 'no-repeat');
            

            // 기온별 대표 옷차림.
            
            alert(temp)
            // 여자
            if(temp <= 4 ){
              $('.clothes1').css({"background":"url(./images/~5.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '80% 85%'});
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
            if(temp <= 4 ){
              $('.clothes1_2').css({"background":"url(./images/~4남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <= 8){
              $('.clothes1_2').css({"background":"url(./images/5~8남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 90%'});
            } else if (temp <= 11){
              $('.clothes1_2').css({"background":"url(./images/9~11남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if (temp <= 16){
              $('.clothes1_2').css({"background":"url(./images/12~16남.png)", 'background-repeat' : 'no-repeat', 'background-position':'45% 50%','background-size': '50% 80%'});
            } else if(temp <= 19){
              $('.clothes1_2').css({"background":"url(./images/17~19남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if(temp <= 22){
              $('.clothes1_2').css({"background":"url(./images/20~22남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <=27){
              $('.clothes1_2').css({"background":"url(./images/23~27남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else{temp >=28
              $('.clothes1_2').css({"background":"url(./images/~28남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            }
            
            let temp_html1 = `<p>28도 이상의 날씨는한여름 날씨입니다.<br>
            최대한 얇고 가볍게 입는 것이 좋겠죠?<br>
            이렇게 더운 날일수록 <br>
            실내에서는 에어컨을 강하게 틀기도 하니 <br>
            추위를 많이 타시는 분의 경우 <br>
            얇은 가디건을 챙기시는 것도 추천드려요 :)</p>`
            let temp_html2 = `<p>27도에서 23도 사이의 날씨는
            한여름은 아니지만<br>
            그래도 더운 날씨라고 생각됩니다.<br>
            상의로는 반팔이나 얇은 셔츠를 추천드리며<br>
            하의는 반바지 혹은 면바지를 추천드립니다!<br>
            냉방이 센 실내에선 추울 수 있으니
            얇은 셔츠를 입는것도 좋아요.
            여름 감기가 더 무서운 거 알고 있죠?<br>
            여름엔 액세서리도 최대한 가볍게.<br>
            여름엔 시원해 보이는 은색 아이템이 예뻐요.</p>`
            let temp_html3 = `<p>이때부터는 스트라이프나 래글런 같이
            포인트가 될 만한 기본 티셔츠 코디가 빛을 내는 시기에요.<br>
            셔츠나 얇은 긴팔을 입어도 좋을 날씨에요!
            긴팔이나 얇은 소재의 가디건,
            셔츠, 맨투맨, 바람막이를 추천드립니다!<br>
            하의의 경우 기본 슬랙스나 청바지
            모두 추천드려요 :)<br>
            하지만 날씨가 조금 시원해졌지만<br>
            여전히 여름 같은 날씨라는 점, 잊지 말기!</p>`
            let temp_html4 = `<p>이 정도 날씨가 되면
            패션을 좋아하시는 분들이<br>
            여러 스타일로 꾸밀 수 있는 계절입니다!<br>
            이 날에 경우는 
            대부분의 옷을 다 입을 수 있습니다.<br>
            상의는 두꺼운 소재만 아니라면
            가디건, 셔츠, 맨투맨, 후드
            등 다 추천드려요!<br>
            황금 날씨! 나들이 가기 딱 좋은 기온.
            샤랄라, 멋진스타일을 뽐내기 적절한 날씨에요.<br>
            가을바람이 쓸쓸하다면 카디건을 꺼내 봐요.<br>
            니트 조끼를 활용한 코디도 좋고요!
            롱롱한 아이템을 입기에도 딱 좋은 날씨입니다!</p>`
            let temp_html5 = `<p>16도에서 12도 사이의 경우
            일교차가 더욱 커지는 시기이므로<br>
            여러 겹을 겹쳐 입어
            기온에 맞게, 장소에 맞게
            입거나 벗는 것이 중요합니다!<br>
            지금부터는 얇은 아우터를 꼭 챙기도록 해요!<br>
            대표적인 얇은 아우터인 재킷과 트렌치코트는
            바로 이때 뽕을 빼야 해요, 가을날씨는 짧으니까요🍂😢<br>
            기온이 14도 이하로 내려가면 여성분은
            스타킹을 신어도 덥지 않을 거예요.
            </p>`
            let temp_html6 = `<p>
            11도와 9도 사이의 날씨는
            아우터는 아직 괜찮지만, 적절한 레이어드로
            껴입기에 도전하기 좋은날씨 날이죠! <br>
            트렌치코트나 야상, 점퍼
            등을 많이 입는 시기입니다!<br>
            사실, 이런 날씨가 아니면 트렌치코트를
            입지 못하기 때문에
            많은 분들이 이때다! 싶어
            트렌치코트를 입으시는 듯 합니다!<br> 또,
            히트택과 니트를 쟁여놓아야 할 시기에요.<br>
            본격적인 월동준비의 시작이죠.
            기모 나와라 오바. <br>
            되도록 기모 있는 상의를 입는 게 좋아요.
            </p>`
            let temp_html7 = `<p>8도부터 5도 사이의 날씨는
            가을에서 겨울로 넘어가는
            시기이기 때문에
            제법 춥습니다.<br>
            아직 영하로 내려가지 않은 날씨지만
            코트를 입어도 어색하지 않은 기온.<br>
            아껴둔 항공 점퍼를 꺼내 입어요!<br>
            도톰한 야상 재킷도 좋아요.
            신발은 츠를 신으면 예쁠 거에요.<br>
            머플러를 두르는 것도 잊지 말아요~<br>
            감기 예방에 신경 써야 해요!
            겨울 코트나 두툼한 울 소재의 아우터,
            목폴라 정도를 입기 좋습니다.<br>
            추위를 타시는 분이라면
            히트택이나 내복을 입어
            체온 유지를 하셔도 좋아요.</p>`
            let temp_html8 = `<p>으악 춥다 추워!
            4도 이하의 날씨는 겨울이죠!<br>
            겨울하면 먼저 생각나는 옷은?<br>
            바로 패딩입니다.
            추운 겨울 체온 유지를 위해서
            껴입을 수 있을 만큼 껴입으세요.<br>
            두꺼운 코트나,퉁실퉁실한 근육맨 패딩은 필수.<br>
            히트택,누빔옷, 기모, 니트, 후리스, 목도리 등등, 
            발열을 위한 모든 아이템을 총출동 시켜요.<br>
            장갑과 귀마개 그리고 비니까지.<br>
            겨울의 액세서리도 잊지 말고 챙기기.
            </p>`
            var front = $('.front')

            if(temp <= 4 ){
              front.append(temp_html8);
            } else if(temp <= 8){
              front.append(temp_html7);
            } else if (temp <= 11){
              front.append(temp_html6);
            } else if (temp <= 16){
              front.append(temp_html5);
            } else if(temp <= 19){
              front.append(temp_html4);
            } else if(temp <= 22){
              front.append(temp_html3);
            } else if(temp <=27){
              front.append(temp_html2);
            } else{temp >=28
              front.append(temp_html1);
            }
          
    

        }
    })
}








function ChangeCity(event) {
    event.preventDefault();
    if (input_val.value in city_name) {
        city = city_name[input_val.value];
    } else {
        city = input_val.value;
    }
    input_val.value = null;
    let weatherIcon = {
        '01': 'fas fa-sun',
        '02': 'fas fa-cloud-sun',
        '03': 'fas fa-cloud',
        '04': 'fas fa-cloud-meatball',
        '09': 'fas fa-cloud-sun-rain',
        '10': 'fas fa-cloud-showers-heavy',
        '11': 'fas fa-poo-storm',
        '13': 'far fa-snowflake',
        '50': 'fas fa-smog'
    };

    let background = {
      '01': './images/쾌청.gif',
      '02': './images/맑음.gif',
      '03': './images/흐림.gif',
      '04': './images/흐림.gif',
      '09': './images/비.gif',
      '10': './images/뇌우.gif',
      '11': './images/번개.gif',
      '13': './images/눈.gif',
      '50': './images/안개.gif'
    }

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec9cd6710da1e9cecf9b13dfaad54c36&units=metric`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            let $Icon = (data.weather[0].icon).substring(0, 2);
            let $Temp = Math.round(data.main.temp) + 'º';
            let $city = city;
            let $MaxTemp = Math.round(data.main.temp_max) + 'º';
            let $MinTemp = Math.round(data.main.temp_min) + 'º';
            let $feel = Math.round(data.main.feels_like) + 'º';
            
            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')
            $('.CurrTemp').text($Temp);
            if ($city in city_name_reverse) {
                $('.City').text(city_name_reverse[$city]);
            } else {
                $('.City').text($city);
            }
            $('.Max_Temp').text($MaxTemp);
            $('.Min_Temp').text($MinTemp);
            $('.feel').text($feel);

            $('#wrap').css('background', 'url(' + background[$Icon] + ')');
            $('#wrap').css('background-size', 'cover');
            $('#wrap').css('background-repeat', 'no-repeat');

            console.log(city);

            // 기온별 대표 옷차림.
            
            
            // 여자
            if(temp <= 4 ){
              $('.clothes1').css({"background":"url(./images/~5.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '80% 85%'});
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
            if(temp <= 4 ){
              $('.clothes1_2').css({"background":"url(./images/~4남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <= 8){
              $('.clothes1_2').css({"background":"url(./images/5~8남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 90%'});
            } else if (temp <= 11){
              $('.clothes1_2').css({"background":"url(./images/9~11남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if (temp <= 16){
              $('.clothes1_2').css({"background":"url(./images/12~16남.png)", 'background-repeat' : 'no-repeat', 'background-position':'45% 50%','background-size': '50% 80%'});
            } else if(temp <= 19){
              $('.clothes1_2').css({"background":"url(./images/17~19남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            } else if(temp <= 22){
              $('.clothes1_2').css({"background":"url(./images/20~22남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else if(temp <=27){
              $('.clothes1_2').css({"background":"url(./images/23~27남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '40% 80%'});
            } else{temp >=28
              $('.clothes1_2').css({"background":"url(./images/~28남.png)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': '50% 80%'});
            }
            
            let temp_html1 = `<p>28도 이상의 날씨는한여름 날씨입니다.<br>
            최대한 얇고 가볍게 입는 것이 좋겠죠?<br>
            이렇게 더운 날일수록 <br>
            실내에서는 에어컨을 강하게 틀기도 하니 <br>
            추위를 많이 타시는 분의 경우 <br>
            얇은 가디건을 챙기시는 것도 추천드려요 :)</p>`
            let temp_html2 = `<p>27도에서 23도 사이의 날씨는
            한여름은 아니지만<br>
            그래도 더운 날씨라고 생각됩니다.<br>
            상의로는 반팔이나 얇은 셔츠를 추천드리며<br>
            하의는 반바지 혹은 면바지를 추천드립니다!<br>
            냉방이 센 실내에선 추울 수 있으니
            얇은 셔츠를 입는것도 좋아요.
            여름 감기가 더 무서운 거 알고 있죠?<br>
            여름엔 액세서리도 최대한 가볍게.<br>
            여름엔 시원해 보이는 은색 아이템이 예뻐요.</p>`
            let temp_html3 = `<p>이때부터는 스트라이프나 래글런 같이
            포인트가 될 만한 기본 티셔츠 코디가 빛을 내는 시기에요.<br>
            셔츠나 얇은 긴팔을 입어도 좋을 날씨에요!
            긴팔이나 얇은 소재의 가디건,
            셔츠, 맨투맨, 바람막이를 추천드립니다!<br>
            하의의 경우 기본 슬랙스나 청바지
            모두 추천드려요 :)<br>
            하지만 날씨가 조금 시원해졌지만<br>
            여전히 여름 같은 날씨라는 점, 잊지 말기!</p>`
            let temp_html4 = `<p>이 정도 날씨가 되면
            패션을 좋아하시는 분들이<br>
            여러 스타일로 꾸밀 수 있는 계절입니다!<br>
            이 날에 경우는 
            대부분의 옷을 다 입을 수 있습니다.<br>
            상의는 두꺼운 소재만 아니라면
            가디건, 셔츠, 맨투맨, 후드
            등 다 추천드려요!<br>
            황금 날씨! 나들이 가기 딱 좋은 기온.
            샤랄라, 멋진스타일을 뽐내기 적절한 날씨에요.<br>
            가을바람이 쓸쓸하다면 카디건을 꺼내 봐요.<br>
            니트 조끼를 활용한 코디도 좋고요!
            롱롱한 아이템을 입기에도 딱 좋은 날씨입니다!</p>`
            let temp_html5 = `<p>16도에서 12도 사이의 경우
            일교차가 더욱 커지는 시기이므로<br>
            여러 겹을 겹쳐 입어
            기온에 맞게, 장소에 맞게
            입거나 벗는 것이 중요합니다!<br>
            지금부터는 얇은 아우터를 꼭 챙기도록 해요!<br>
            대표적인 얇은 아우터인 재킷과 트렌치코트는
            바로 이때 뽕을 빼야 해요, 가을날씨는 짧으니까요🍂😢<br>
            기온이 14도 이하로 내려가면 여성분은
            스타킹을 신어도 덥지 않을 거예요.
            </p>`
            let temp_html6 = `<p>
            11도와 9도 사이의 날씨는
            아우터는 아직 괜찮지만, 적절한 레이어드로
            껴입기에 도전하기 좋은날씨 날이죠! <br>
            트렌치코트나 야상, 점퍼
            등을 많이 입는 시기입니다!<br>
            사실, 이런 날씨가 아니면 트렌치코트를
            입지 못하기 때문에
            많은 분들이 이때다! 싶어
            트렌치코트를 입으시는 듯 합니다!<br> 또,
            히트택과 니트를 쟁여놓아야 할 시기에요.<br>
            본격적인 월동준비의 시작이죠.
            기모 나와라 오바. <br>
            되도록 기모 있는 상의를 입는 게 좋아요.
            </p>`
            let temp_html7 = `<p>8도부터 5도 사이의 날씨는
            가을에서 겨울로 넘어가는
            시기이기 때문에
            제법 춥습니다.<br>
            아직 영하로 내려가지 않은 날씨지만
            코트를 입어도 어색하지 않은 기온.<br>
            아껴둔 항공 점퍼를 꺼내 입어요!<br>
            도톰한 야상 재킷도 좋아요.
            신발은 츠를 신으면 예쁠 거에요.<br>
            머플러를 두르는 것도 잊지 말아요~<br>
            감기 예방에 신경 써야 해요!
            겨울 코트나 두툼한 울 소재의 아우터,
            목폴라 정도를 입기 좋습니다.<br>
            추위를 타시는 분이라면
            히트택이나 내복을 입어
            체온 유지를 하셔도 좋아요.</p>`
            let temp_html8 = `<p>으악 춥다 추워!
            4도 이하의 날씨는 겨울이죠!<br>
            겨울하면 먼저 생각나는 옷은?<br>
            바로 패딩입니다.
            추운 겨울 체온 유지를 위해서
            껴입을 수 있을 만큼 껴입으세요.<br>
            두꺼운 코트나,퉁실퉁실한 근육맨 패딩은 필수.<br>
            히트택,누빔옷, 기모, 니트, 후리스, 목도리 등등, 
            발열을 위한 모든 아이템을 총출동 시켜요.<br>
            장갑과 귀마개 그리고 비니까지.<br>
            겨울의 액세서리도 잊지 말고 챙기기.
            </p>`
            var front = $('.front')

            if(temp <= 4 ){
              front.append(temp_html8);
            } else if(temp <= 8){
              front.append(temp_html7);
            } else if (temp <= 11){
              front.append(temp_html6);
            } else if (temp <= 16){
              front.append(temp_html5);
            } else if(temp <= 19){
              front.append(temp_html4);
            } else if(temp <= 22){
              front.append(temp_html3);
            } else if(temp <=27){
              front.append(temp_html2);
            } else{temp >=28
              front.append(temp_html1);
            }
          
            

        }
    })
}





