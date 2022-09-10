import $ from 'jquery';


import 'slick-carousel';
$('.carousel').slick({
  dots: true
})


let hexLink = document.getElementById('hex');
let gradient = document.getElementById('gradient');
let render = document.getElementById('render');


function getRandomPercent(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getHex() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#';
   for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNum()];
    }
    function getRandomNum() {
      return Math.floor(Math.random() * hex.length)
    }
    return hexColor
}
function onGradient() {
  document.body.style.transition = `all 0.4s ease -in -out`;
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  document.body.style.background = `cover no - repeat; `

}
function createElemDiv(color, cls, id) {

  let div = document.createElement('div');
  div.innerHTML = `
                      <div class="flipper">
                       <a id="${id}" class="btn margin-left">click me</a>
                      <div class="flipper__inner">
                          <div class="render" >
                              <div class="displayRow">
                             
                                  <h3 class="flipper__title">background: <span class="${cls}">${color}</span></h3>
                                  
                              </div>
                            
                          </div> 
                          
                      </div>
                    `;
  render.append(div);
}
function createElementForRenderGradient(clas) {
  let div = document.createElement('div');
  div.innerHTML = `
                          <div class="grid">
                            <div class="left">
                                
                                <h3 class="flipper__title">background: <span class="${clas}">white</span></h3>
                            </div>
                            <div class="center">
                            </div>
                            <div class="rigth">
                                <a href="/" id='linear' class="btn btn_linear">Linear-gradient</a>
                                <a href="/" id ='radial'class="btn btn_radial">Radial-gradient</a>
                               
                                <a href="/" id='circleAt' class='btn'>Circle at 100%</a>
                                <div id="renderColor"></div>
                               
                            </>
                          </div>
                        `;
  render.append(div);
}

hexLink.addEventListener('click', hex)
function hex(e) {

  e.preventDefault();

  render.innerHTML = '';
  document.body.style.background = `#ffffff`;

  

  createElemDiv('#ffffff', 'codeGradient', 'btnTwo');

  const btnTwo = document.getElementById('btnTwo');
  const codeGradient = document.querySelector('.codeGradient');

  btnTwo.addEventListener('click', function() {

    codeGradient.textContent = getHex();
    document.body.style.backgroundColor = getHex();
  })

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


  linearBtn.addEventListener('click', setLinearGradient);
  radialBtn.addEventListener('click', setRadialGradient);
  circleAt.addEventListener('click', setCircleGradient);


  let renColor = document.getElementById('renderColor');
     function renderColor() {

      renColor.innerHTML = '';
      let div = document.createElement('div');

      div.classList.add('right-color')
      div.innerHTML = `
        <input type="color" class="objectColor colorOne">
        <input type="color" class="objectColor colorTwo">
        <input type="color" value="" class="objectColor colorThree">  
      `;
      renColor.append(div);
    }
 
  function setCircleGradient(e) {

  e.preventDefault();
    onGradient();
    renderColor();

    code.textContent = document.body.style.background = `radial-gradient(circle at 
      ${getRandomPercent(100, 0)}%,
      ${getHex()} ${getRandomPercent(36, 0)}%, 
      ${getHex()} ${getRandomPercent(70, 36)}%, 
      ${getHex()} ${getRandomPercent(100, 70)}%)`;
    
  }
  function setLinearGradient(e) {

  e.preventDefault();
    onGradient();
    renderColor();
    let perc = getRandomPercent(360, 0)
    let inputOne = document.querySelector('.colorOne');
    let inputTwo = document.querySelector('.colorTwo');
    let inputThree = document.querySelector('.colorThree');
    code.textContent = document.body.style.background = `linear-gradient(${perc}deg,
      ${inputOne.value = getHex()} ${getRandomPercent(36, 0)}%, 
      ${inputTwo.value = getHex()} ${getRandomPercent(70, 36)}%, 
      ${inputThree.value = getHex()} ${getRandomPercent(100, 70)}%)`;


      inputOne.addEventListener('input',function() {
        code.textContent = document.body.style.background = `linear-gradient(${perc}deg,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
    
      })
      inputTwo.addEventListener('input', function() {
        code.textContent = document.body.style.background = `linear-gradient(${perc}deg,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
      })
      inputThree.addEventListener('input', function() {
        code.textContent = document.body.style.background = `linear-gradient(${perc}deg,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
      })

  }

  function setRadialGradient(e) {

  e.preventDefault()
    onGradient()
    renderColor()
    
    let inputOne = document.querySelector('.colorOne');
    let inputTwo = document.querySelector('.colorTwo');
    let inputThree = document.querySelector('.colorThree');
    code.textContent = document.body.style.background = `radial-gradient(circle,
      ${inputOne.value = getHex()} ${getRandomPercent(36, 0)}%, 
      ${inputTwo.value = getHex()} ${getRandomPercent(70, 36)}%, 
      ${inputThree.value = getHex()} ${getRandomPercent(100, 70)}%)`;


      inputOne.addEventListener('input',function() {
        code.textContent = document.body.style.background = `radial-gradient(circle,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
    
      })
      inputTwo.addEventListener('input', function() {
        code.textContent = document.body.style.background = `radial-gradient(circle,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
      })
      inputThree.addEventListener('input', function() {
        code.textContent = document.body.style.background = `radial-gradient(circle,
          ${inputOne.value}, 
          ${inputTwo.value}, 
          ${inputThree.value})`;
      })

  }

}


