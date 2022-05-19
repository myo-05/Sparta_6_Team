// const temp = document.querySelector('.clothes1')
const card = document.querySelector('#card2-b')
let man = document.querySelector('.manbtn')
man.addEventListener('click', function(){
  $('.manbtn').css({"background":"rgba(125, 125, 125)"})
  $('.womanbtn').css({"background":"#fff"})
  $('.clothes1_2').css({"display":"block"})
  $('.clothes1').css({"display":"none"})
});
let woman = document.querySelector('.womanbtn')
woman.addEventListener('click', function(){
  $('.manbtn').css({"background":"#fff"})
  $('.womanbtn').css({"background":"rgba(125, 125, 125)"})
  $('.clothes1').css({"display":"block"})
  $('.clothes1_2').css({"display":"none"})

})

