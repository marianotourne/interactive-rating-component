const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');

const btn = document.querySelector('.btn');
const initialstate = document.querySelector('.initial-state');
const finalstate = document.querySelector('.final-state');

const selection = document.querySelector('.selection');

one.addEventListener('click',oneactive);
two.addEventListener('click',twoactive);
three.addEventListener('click',threeactive);
four.addEventListener('click',fouractive);
five.addEventListener('click',fiveactive);

let x=0;

function oneactive(){
    one.setAttribute('style','background: var(--orange); color: var(--white)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');   
    btn.setAttribute('style','cursor: pointer; opacity: 1;background: var(--white); color: var(--orange);');
    x=1;
    message(x);
}
function twoactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--orange); color: var(--white)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer; opacity: 1;background: var(--white); color: var(--orange);');
    x=2;
    message(x);
}
function threeactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--orange); color: var(--white)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer; opacity: 1;background: var(--white); color: var(--orange);');
    x=3;
    message(x);
}
function fouractive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--orange); color: var(--white)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer; opacity: 1;background: var(--white); color: var(--orange);');
    x=4;
    message(x);
}
function fiveactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--orange); color: var(--white)');
    btn.setAttribute('style','cursor: pointer; opacity: 1;background: var(--white); color: var(--orange);');
    x=5;
    message(x);
}

btn.addEventListener('click', show);

function show(){
    if (x!==0) {
        initialstate.classList.add('inactive');
        finalstate.classList.remove('inactive');
    }
}

function message(option){
    selection.innerText = 'You selected ' + option + ' out of 5';
}