import $ from 'jquery';


import 'slick-carousel';
$('.carousel').slick({
  dots: true
})


let simpleLink = document.getElementById('simple');
let hexLink = document.getElementById('hex');
let gradient = document.getElementById('gradient');
let render = document.getElementById('render');
let colorsArr = [];



function getRandomPercent(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomRgb() {
  return `rgb(${getRandomPercent(255, 0)},${getRandomPercent(255, 0)},${getRandomPercent(255, 0)})`
}

function createElemDiv(color, cls, id) {

  let div = document.createElement('div');
  div.innerHTML = `
                      <div class="flipper">
                       <a id="${id}" class="btn">click me</a>
                      <div class="flipper__inner">
                          <div class="render" >
                              <div class="displayRow">
                             
                                  <h3 class="flipper__title">Background: <span class="${cls}">$${color}</span></h3>
                                  
                              </div>
                            
                          </div> 
                          
                      </div>
                    `;
  render.append(div);
}
function createElementForRenderGradient(clas){
  let div = document.createElement('div');
        div.innerHTML = `
                          <div class="grid">
                            <div class="left">
                                
                                <h3 class="flipper__title">Background: <span class="${clas}">white</span></h3>
                            </div>
                            <div class="center">
                            </div>
                            <div class="rigth">
                                <a href="/" id='linear' class="btn btn_linear">Linear-gradient</a>
                                <a href="/" id ='radial'class="btn btn_radial">Radial-gradient</a>
                            </div>
                          </div>
                        `;
      render.append(div);
}

simpleLink.addEventListener('click', simple)
function simple(e) {
  //  hexLink.removeEventListener('click', hex)
  e.preventDefault();

  render.innerHTML = '';
  document.body.style.background = `rgb(255,255,255)`
  createElemDiv('rgb(255,255,255)', 'color', 'btn')

  const btn = document.getElementById('btn');
  const text = document.querySelector('.color');

  // setListener(btn, 'click', getRandomRGB)
  btn.addEventListener('click', getRandomRGB)
  function getRandomRGB() {

    let r, g, b;

    r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

    document.body.style.background = `rgb(${r},${g},${b})`;
    text.textContent = `RGB(${r}, ${g}, ${b})`;
    colorsArr.push(`rgb(${r}, ${g}, ${b})`);
    document.body.style.transition = `0.4s all ease-in-out`;

  }
}

// function setListener(elem, type, handler) {
//   if (elem) {
//     elem.addEventListener(type, handler)
//   }
//   if (!elem) {
//     elem.removeEventListener(type, handler)
//   }
// }



hexLink.addEventListener('click', hex)
function hex(e) {
  // simpleLink.removeEventListener('click', simple)
  e.preventDefault();

  render.innerHTML = '';
  document.body.style.background = `#ffffff`;
  

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  createElemDiv('#ffffff', 'colors', 'btnTwo');

  const btnTwo = document.getElementById('btnTwo');

  btnTwo.addEventListener('click', clickBtn)

  function clickBtn() {
    let hexColor = '#';
    const colorNew = document.querySelector('.colors');
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNum()];
    }
    colorNew.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  }

  function getRandomNum() {
    return Math.floor(Math.random() * hex.length)
  }
}


gradient.addEventListener('click', setGradient)
function setGradient(e) {
  e.preventDefault();
  render.innerHTML = '';
  document.body.style.background = '#ffffff'
  
  createElementForRenderGradient('codeGradient');

  let code = document.querySelector('.codeGradient');
 
  
 
  
  
  
  let linearBtn = document.getElementById('linear')
  let radialBtn = document.getElementById('radial')
  
   
  linearBtn.addEventListener('click',setLinearGradient);
  radialBtn.addEventListener('click', setRadialGradient)
  function setLinearGradient(e) {
    e.preventDefault();
    onGradient()
    code.textContent = document.body.style.background = `linear-gradient(${getRandomPercent(360,0)}deg, ${setRandomRgb()} ${getRandomPercent(36, 0)}%, ${setRandomRgb()} ${getRandomPercent(70, 36)}%, ${setRandomRgb()} ${getRandomPercent(100, 70)}%)`;
    
  }
  
  function setRadialGradient(e) {
    e.preventDefault()
    onGradient()
    code.textContent = document.body.style.background = `radial-gradient(circle, ${setRandomRgb()} ${getRandomPercent(36, 0)}%, ${setRandomRgb()} ${getRandomPercent(70, 36)}%, ${setRandomRgb()} ${getRandomPercent(100, 70)}%)`;
  }
  

function onGradient() {
  document.body.style.transition = `all 0.4s ease -in -out`;
  document.body.style.background = `#ffffff`
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.background = `cover no - repeat; `
  
}
  
 
  
  





}