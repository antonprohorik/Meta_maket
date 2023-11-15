
function found() {
  const founders = document.getElementById('card-found');
  const partners = document.getElementById('card-part');
  const future = document.getElementById('card-fut');


  const found_btn = document.getElementById('found');
  const part_btn = document.getElementById('part');
  const fut_btn = document.getElementById('fut');

  found_btn.style.background = '#222'
  found_btn.style.color = '#8DFD1B'

  part_btn.style.background = '#000'
  part_btn.style.color = '#fff'

  fut_btn.style.background = '#000'
  fut_btn.style.color = '#fff'

  founders.style.display = 'flex';
  partners.style.display = 'none';
  future.style.display = 'none';
}

function panzerkampfwagen() {
  const founders = document.getElementById('card-found');
  const partners = document.getElementById('card-part');
  const future = document.getElementById('card-fut');


  const found_btn = document.getElementById('found');
  const part_btn = document.getElementById('part');
  const fut_btn = document.getElementById('fut');

  found_btn.style.background = '#000'
  found_btn.style.color = '#fff'

  part_btn.style.background = '#222'
  part_btn.style.color = '#8DFD1B'

  fut_btn.style.background = '#000'
  fut_btn.style.color = '#fff'


  founders.style.display = 'none';
  partners.style.display = 'flex';
  future.style.display = 'none';
}

function fut() {
  const founders = document.getElementById('card-found');
  const partners = document.getElementById('card-part');
  const future = document.getElementById('card-fut');


  const found_btn = document.getElementById('found');
  const part_btn = document.getElementById('part');
  const fut_btn = document.getElementById('fut');

  found_btn.style.background = '#000'
  found_btn.style.color = '#fff'

  part_btn.style.background = '#000'
  part_btn.style.color = '#fff'

  fut_btn.style.background = '#222'
  fut_btn.style.color = '#8DFD1B'


  founders.style.display = 'none';
  partners.style.display = 'none';
  future.style.display = 'flex';
}

/* slider */

class Slider {
  constructor(node) {
    this.node = node
    this.list = null
    this._counter = 0
    this.sides = 0
    this.step = 0
    this.shift = 0

    this.findParts()
    this.prepare()
    this.listen()
  }

  findParts() {
    this.list = this.node.querySelector('[data-slider-list]')
    this.items = [...this.list.children]
    this.step_buttons = [...this.node.querySelectorAll('[data-slider-step-button]')].map((button) => {
      return {
        node: button,
        value: !!button.dataset.sliderStepButton ? +button.dataset.sliderStepButton : 1
      }
    })
  }

  prepare() {
    this.sides = this.items.length
    this.step = 2 * Math.PI / this.sides
    this.shift = Math.PI / 2
    this.counter = 0
  }

  listen() {
    this.step_buttons.forEach(button => {
      button.node.addEventListener('click', () => {
        this.counter = this.counter + button.value
      })
    })
  }

  listenKeys(e) {
    if (e.key === 'ArrowLeft') {
      this.counter = this.counter - 1
    } else if (e.key === 'ArrowRight') {
      this.counter = this.counter + 1
    }
  }

  notify() {
    this.items.forEach((item, i) => {
      const pos = (i + this.counter) * this.step + this.shift
      const cos = Math.cos(pos)
      const sin = Math.sin(pos)
      const scale = Math.max(0.3, (sin + 1) / 5)

      item.style.setProperty('--cos', cos)
      item.style.setProperty('--sin', sin)
      item.style.setProperty('--scale', scale)
    })
  }

  get counter() {
    return this._counter
  }

  set counter(new_value) {
    this._counter = new_value < 0 ? this.sides + new_value : new_value % this.sides
    this.notify()
  }
}

const slider = new Slider(document.querySelector('.slider'))


/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    
  });
}

/*deviation*/
const join = document.getElementById('join');
const elWidth = join.offsetWidth / 2;
const elHeight = join.offsetHeight / 2;
let rotateY  = 0;
let notRotateY  = 0;
let rotateX  = 0;
let notRotateX  = 0;
let rotate = 0;
function deviation() {
  rotateY = 'rotateY(-' + ((event.clientX-793) / 10) + 'deg)';
  rotateX = 'rotateX(' + ((event.clientY-216) / 10) + 'deg)';
  rotate = 'skew('+((event.clientX-793) / 100)+'deg,'+((event.clientY-216) / 100)+'deg)';
  notRotateX = -rotateX;
  notRotateY = -rotateY;
  //if(event.clientX > 793){
  //  join.style.setProperty('transform',rotateY);
  //}
  //if((event.clientX-793) > elWidth){
  //  join.style.setProperty('transform',rotateY);
  //}
  //if(event.clientY>0){
  //  join.style.setProperty('transform',rotateX);
  //}
  join.style.transform = rotate;
  //rotX();
  //rotY();
  //if(event.clientY>elHeight){
  //  join.style.setProperty('transform',notRotateX);
  //}
}

function rotX(){
  join.style.transform = rotateX;
}
function rotY(){
  join.style.transform = rotateY;
}