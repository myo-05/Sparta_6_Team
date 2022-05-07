const card1 = document.querySelector('.card1');
card1.addEventListener('click', click);

const card2 = document.querySelector('.card2');
card2.addEventListener('click', click);

const input_val = document.querySelector('.input_city');
const form = document.querySelector('#changeC');
form.addEventListener('submit', ChangeCity);

let city = "Seoul";

function click(event) {
    let elem = event.currentTarget;
    if (elem.style.transform == "rotateY(180deg)") {
        elem.style.transform = "rotateY(0deg)";
    } else {
        elem.style.transform = "rotateY(180deg)";
    }
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
            let $city = data.name;

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>');
            $('.CurrTemp').text($Temp);
            $('.City').text($city);
            $('.weather_con').css('background', 'url(' + background[$Icon] + ')');
            $('.weather_con').css('background-size', 'cover');
            $('.weather_con').css('background-repeat', 'no-repeat');
        }
    })
}


function ChangeCity(event) {
    event.preventDefault();
    city = input_val.value;
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
            let $city = data.name;

            $('.CurrIcon').html('<i class="' + weatherIcon[$Icon] + '"></i>')
            $('.CurrTemp').text($Temp);
            $('.City').text($city);
            $('.weather_con').css('background', 'url(' + background[$Icon] + ')');
            $('.weather_con').css('background-size', 'cover');
            $('.weather_con').css('background-repeat', 'no-repeat');
        }
    })
}


function showtime() {
    let date = new Date();
    let currhour = addZeros(date.getHours(), 2);
    let currminu = addZeros(date.getMinutes(), 2);
    let time = document.querySelector('.Time');
    time.innerHTML = currhour + ":" + currminu;

    setTimeout("showtime()", 1000);
}

function addZeros(num, digit) { // 자릿수 맞춰주기
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;
}

showtime();