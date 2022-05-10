const input_val = document.querySelector('.input_city');
const form = document.querySelector('#changeC');
form.addEventListener('submit', ChangeCity);

let city = "Seoul";
let city_name = {
    '서울': 'seoul',
    '부산': 'busan',
    '제주': 'jeju',
    '광주': 'gwangju',
    '대전': 'daejeon',
    '대구': 'daegu',
    '세종': 'sejong',
    '제주': 'jeju',
    '인천' : 'incheon'
}

let city_name_reverse = {
    'Seoul': '서울',
    'busan': '부산',
    'jeju': '제주',
    'gwangju': '광주',
    'daejeon': '대전',
    'daegu': '대구',
    'sejong': '세종',
    'jeju': '제주',
    'incheon': '인천'
}


$(document).ready(function () {
    firstCall();
});

function firstCall() {
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
        '01': 'img/01.jpg',
        '02': 'img/02.jpg',
        '03': 'img/03.jpg',
        '04': 'img/04.jpg',
        '09': 'img/09.jpg',
        '10': 'img/10.jpg',
        '11': 'img/11.jpg',
        '13': 'img/13.jpg',
        '50': 'img/50.jpg'
    }

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec9cd6710da1e9cecf9b13dfaad54c36&units=metric`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            let $Icon = (data.weather[0].icon).substring(0, 2);
            let $Temp = Math.floor(data.main.temp) + 'º';
            let $city = city_name_reverse[data.name];
            let $MaxTemp = Math.floor(data.main.temp_max) + 'º';
            let $MinTemp = Math.floor(data.main.temp_min) + 'º';
            let $feel = Math.floor(data.main.feels_like) + 'º';

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>');
            $('.CurrTemp').text($Temp);
            $('.City').text($city);
            $('.Max_Temp').text($MaxTemp);
            $('.Min_Temp').text($MinTemp);
            $('.feel').text($feel);

            $('.weather_con').css('background', 'url(' + background[$Icon] + ')');
            $('.weather_con').css('background-size', 'cover');
            $('.weather_con').css('background-repeat', 'no-repeat');
        }
    })
}


function ChangeCity(event) {
    event.preventDefault();
    city = city_name[input_val.value];
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
        '01': 'img/01.jpg',
        '02': 'img/02.jpg',
        '03': 'img/03.jpg',
        '04': 'img/04.jpg',
        '09': 'img/09.jpg',
        '10': 'img/10.jpg',
        '11': 'img/11.jpg',
        '13': 'img/13.jpg',
        '50': 'img/50.jpg'
    }

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec9cd6710da1e9cecf9b13dfaad54c36&units=metric`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            let $Icon = (data.weather[0].icon).substring(0, 2);
            let $Temp = Math.floor(data.main.temp) + 'º';
            let $city = city;
            let $MaxTemp = Math.floor(data.main.temp_max) + 'º';
            let $MinTemp = Math.floor(data.main.temp_min) + 'º';
            let $feel = Math.floor(data.main.feels_like) + 'º';

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')
            $('.CurrTemp').text($Temp);
            $('.City').text(city_name_reverse[$city]);
            $('.Max_Temp').text($MaxTemp);
            $('.Min_Temp').text($MinTemp);
            $('.feel').text($feel);

            $('.weather_con').css('background', 'url(' + background[$Icon] + ')');
            $('.weather_con').css('background-size', 'cover');
            $('.weather_con').css('background-repeat', 'no-repeat');


        }
    })
}



