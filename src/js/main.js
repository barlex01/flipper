import $ from 'jquery';


import 'slick-carousel';
$('.carousel').slick({
  dots: true
})

let customGradientLink = document.getElementById('customGradient');
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

  
function onGradient() {
  document.body.style.transition = `all 0.4s ease -in -out`;
  document.body.style.background = `#ffffff`
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.background = `cover no - repeat; `
  
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
                                <div id='renderTwo'>
                                  <a href="/" id='circleAt' class='btn'>Circle at 100%</a>
                                  
                                </div>
                            </div>
                          </div>
                        `;
      render.append(div);
}
function createElementForCusomGradient(clas) {
  let div = document.createElement('div');
        div.innerHTML = `
                          <div class="grid">
                            <div class="left">
                                
                                <h3 class="flipper__title">Background: <span class="${clas}">white</span></h3>
                            </div>
                            <div class="center">
                            </div>
                            <div class="rigth">
                                
                            <div class="color">
                            <input class="colors" type="color" id="color1" value="#00bfa5">
                            <input class="colors" type="color" id="color2" value="#00332e">
                        </div>
                
                        <div class="directions">
                            <button value="down" class="active">
                                <ion-icon name="arrow-down"></ion-icon>
                            </button>
                            <button value="up">
                                <ion-icon name="arrow-up"></ion-icon>
                            </button>
                            <button value="left">
                                <ion-icon name="arrow-forward"></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="arrow-back"></ion-icon>
                            </button>
                            <button class="rotate">
                                <ion-icon name="arrow-down"></ion-icon>
                            </button>
                            <button class="rotate">
                                <ion-icon name="arrow-up"></ion-icon>
                            </button>
                            <button class="rotate">
                                <ion-icon name="arrow-forward"></ion-icon>
                            </button>
                            <button class="rotate">
                                <ion-icon name="arrow-back"></ion-icon>
                            </button>
                        </div>
                        <div class="result">
                            <textarea class="code" ></textarea>
                            <button class="copy">Copy</button>
                        </div>
                            </div>
                          </div>
                        `;
      render.append(div);
}




simpleLink.addEventListener('click', simple)
function simple(e) {
 
  e.preventDefault();

  render.innerHTML = '';
  document.body.style.background = `rgb(255,255,255)`
  createElemDiv('rgb(255,255,255)', 'color', 'btn')

  const btn = document.getElementById('btn');
  const text = document.querySelector('.color');


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
  let circleAt = document.getElementById('circleAt')
  let elipse = document.getElementById('ellipse');
  
  
  
  linearBtn.addEventListener('click',setLinearGradient);
  radialBtn.addEventListener('click', setRadialGradient);
  circleAt.addEventListener('click', setCircleGradient);
  
  
  function setCircleGradient(e){
    e.preventDefault();
    onGradient()
   
    code.textContent = document.body.style.background = `radial-gradient(circle at ${getRandomPercent(100, 0)}%,${setRandomRgb()} ${getRandomPercent(36, 0)}%, ${setRandomRgb()} ${getRandomPercent(70, 36)}%, ${setRandomRgb()} ${getRandomPercent(100, 70)}%)`;
    console.log(code);

  }
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

}
customGradientLink.addEventListener('click', setCustomGradient)
function setCustomGradient(e) {
  e.preventDefault();
  render.innerHTML = '';
  document.body.style.background = `rgb(255,255,255)`;
    onGradient();
    createElementForCusomGradient('codeGradient');
    let code = document.querySelector('.codeGradient')
  let firstColor = document.getElementById('color1');  
  let secondColor = document.getElementById('color2');  
  firstColor.addEventListener('input', function(){
    firstColor = this.value;
      code.textContent = document.body.style.background = `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`;
    console.log(firstColor)
    
  })
  secondColor.addEventListener('input', function() {
    secondColor = this.value;
    code.textContent = document.body.style.background = `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`;
  })
  console.log(secondColor.value);
  
  

}