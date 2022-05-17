



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
            let $Temp = Math.round(data.main.temp) + 'º';
            let $city = data.name;
            let $MaxTemp = Math.round(data.main.temp_max) + 'º';
            let $MinTemp = Math.round(data.main.temp_min) + 'º';
            let $feel = Math.round(data.main.feels_like) + 'º';

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')
            
            
            // 배경화면


            //  if(weatherIcon[$Icon] =='fas fa-sun'){
            //    $('#wrap').css({"background":"url(./images/쾌청.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'});
            //    }else if(weatherIcon[$Icon] =='fas fa-cloud-sun'){
            //     $('#wrap').css({"background":"url(./images/맑음.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'});
            //    }else if(weatherIcon[$Icon] =='fas fa-cloud fa-cloud-meatball'){
            //     $('#wrap').css({"background":"url(./images/흐림.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'});
            //    }else if(weatherIcon[$Icon] =='fas fa-cloud-sun-rain fa-cloud-showers-heavy'){
            //     $('#wrap').css({"background":"url(./images/비.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'})
            //    }else if(weatherIcon[$Icon] =='fas fa-poo-storm'){
            //     $('#wrap').css({"background":"url(./images/번개.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'}) 
            //    }else if(weatherIcon[$Icon] =='far fa-snowflake'){
            //     $('#wrap').css({"background":"url(./images/눈.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'})  
            //    }else if(weatherIcon[$Icon] =='fas fa-smog'){
            //     $('#wrap').css({"background":"url(./images/안개.gif)", 'background-repeat' : 'no-repeat', 'background-position':'center center','background-size': 'cover'})  
            //    }

              
              

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
            

        }
    })
}





