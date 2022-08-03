import $ from 'jquery';


import 'slick-carousel';
$('.carousel').slick({
  dots: true
})



function setListener(elem, type, handler) {
  if (!elem) {
    return
  }
  elem.addEventListener(type, handler);
  return () => {
    elem.removeEventListener(type, handler)
  }

}
const btn = document.getElementById('btn');
const text = document.querySelector('.color');

setListener(btn, 'click', getRandomRGB)

function getRandomRGB() {
  let r,g,b;
  
   r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
   g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
   b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;


  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  text.textContent = `RGB(${r}, ${g}, ${b})`
}





const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btnS = document.getElementById('btnTwo');
const colorNew = document.querySelector('.colors')
setListener(btnS, 'click', function () {

  let hexColor = '#';
  
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()]
  }
  colorNew.textContent = hexColor;
  document.body.style.backgroundColor = hexColor
})

function getRandomNum() {
  return Math.floor(Math.random() * hex.length)
}