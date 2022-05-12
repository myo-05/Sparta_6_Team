const APIKEY = '4a992b233723cebcd77991cb28f2bd39'
 
const elInput = document.querySelector('input')
const elSearch = document.querySelector('#search')
const elCity = document.querySelector('#city')
const elIcon = document.querySelector('#icon')
const elStatus = document.querySelector('#status')
const elTemp = document.querySelector('#temp')
 
//전송받은 객체데이터를 토대로 화면에 날씨정보를 출력합니다.
function printWeatherData(data){
//도시이름을 제대로 입력안했을 때
  if(data.weather === undefined){
    elCity.textContent = 'Fail to load'
    elIcon.src = 'fail.png'
    elStatus.textContent = '도시 이름을 찾을 수 없습니다.'
    elTemp.textContent = '영어로 제대로 입력해주세요 :)'
  }
 
  elCity.textContent = data.name
  elIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  elStatus.textContent = data.weather[0].description
  elTemp.textContent = `${data.main.temp}ºC`
}
 
//위치정보를 기반으로 데이터를요청하는 함수
function getDataByLocating(la, lon){
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lon}&units=metric&appid=4a992b233723cebcd77991cb28f2bd39`
 
  fetch(URL).then(function(resp){
    return resp.json();
  })
  .then(function(json){
    printWeatherData(json);
  })
}
 
//위치정보를 불러오는데 실패했을때 실행되는 함수
function failLocating(){
  elCity.textContent = '위치 정보를 불러오는데 실패했습니다.'
  elIcon.src = 'fail.png'
  elStatus.textContent = 'Fail to load'
  elTemp.textContent = '정보공유가 싫으시면 검색을 이용해주세요 :)'
}
 
//검색을 기반으로 데이터를 요청하는 함수
function getDataBySearching(city){
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a992b233723cebcd77991cb28f2bd39`
 
  fetch(URL).then(function(resp){
    return resp.json();
  })
  .then(function(json){
    printWeatherData(json);
  })
}
 
//첫번째인자에는 getDataByLocating 함수가 , 두번째인자에는 failLocating 함수가 들어간다.
navigator.geolocation.getCurrentPosition(function (position){
  const latitude = String(position.coords.latitude)
  const longitude = String(position.coords.longitude)
  getDataByLocating(latitude, longitude);
}, failLocating);
 
//검색어를 입력하고 돋보기 버튼을 눌렀을 때 Input밸류값을 인자로 넣어 getDataBySearching함수를 호출한다.
elSearch.onclick = function(){
  getDataBySearching(elInput.value.toLowerCase())
  elInput.value = ''
}
 
//검색어를 입력하고 엔터키를 눌렀을 때 Input밸류값을 인자로 넣어 getDataBySearching함수를 호출한다.
elInput.addEventListener('keydown', function(){
  if(window.event.keyCode === 13){ 
    getDataBySearching(elInput.value.toLowerCase())
    elInput.value = ''
  }
});
