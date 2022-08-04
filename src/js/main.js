import $ from 'jquery';


import 'slick-carousel';
$('.carousel').slick({
  dots: true
})
let simpleLink = document.getElementById('simple');
let hexLink = document.getElementById('hex');
let render = document.getElementById('render');
let colorsArr = [];

simpleLink.addEventListener('click', (e) => {

  e.preventDefault()
  render.innerHTML = '';



  let div = document.createElement('div');
  div.innerHTML = `
                        <h3 class="flipper__title">Background: <span class="color">rgb(255, 255, 255)</span></h3>
                        <a id="btn" class="btn">click me</a>
                     `;
  render.append(div);



  const btn = document.getElementById('btn');
  const text = document.querySelector('.color');

  setListener(btn, 'click', getRandomRGB)
  function getRandomPercent() {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  }
  function getRandomRGB() {
    let r, g, b;

    r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;


    document.body.style.background = `rgb(${r},${g},${b})`;
    text.textContent = `RGB(${r}, ${g}, ${b})`;
    colorsArr.push(`rgb(${r}, ${g}, ${b})`);

    document.body.style.transition = `0.4s all ease-in-out`;
    if (colorsArr.length == 3) {

      let one = Math.floor(Math.random() * (34 - 0 + 1)) + 0;
      let two = Math.floor(Math.random() * (65 - 34 + 1)) + 34;
      let three = Math.floor(Math.random() * (100 - 65 + 1)) + 65;
      let deg = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
      
      document.body.style.background = `cover no-repeat;`
      document.body.style.background = `linear-gradient(${deg}deg, ${colorsArr[0]} ${one}%, ${colorsArr[1]} ${two}%, ${colorsArr[2]} ${three}%)`;
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      text.textContent = `linear-gradient(${deg}deg, ${colorsArr[0]} ${one}%, ${colorsArr[1]} ${two}%, ${colorsArr[2]} ${three}%)`
     
    }
    if (colorsArr.length > 3) {
      colorsArr = []
    }
  }
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

hexLink.addEventListener('click', (e) => {
  e.preventDefault();
  render.innerHTML = '';
  let div = document.createElement('div');
  div.innerHTML = `
                    <h3 class="flipper__title">Background: <span class="colors">#ffffff</span></h3>
                    <a id="btnTwo" class="btn-two">click me</a>
                     `;
  render.append(div);

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
})

