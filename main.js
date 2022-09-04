const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');

const btn = document.querySelector('.btn');
const initialstate = document.querySelector('.initial-state');


one.addEventListener('click',oneactive);
two.addEventListener('click',twoactive);
three.addEventListener('click',threeactive);
four.addEventListener('click',fouractive);
five.addEventListener('click',fiveactive);

function oneactive(){
    one.setAttribute('style','background: var(--orange)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer');
}
function twoactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--orange)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer');
}
function threeactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--orange)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer');
}
function fouractive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--orange)');
    five.setAttribute('style','background: var(--darkblue)');
    btn.setAttribute('style','cursor: pointer');
}
function fiveactive(){
    one.setAttribute('style','background: var(--darkblue)');
    two.setAttribute('style','background: var(--darkblue)');
    three.setAttribute('style','background: var(--darkblue)');
    four.setAttribute('style','background: var(--darkblue)');
    five.setAttribute('style','background: var(--orange)');
    btn.setAttribute('style','cursor: pointer');
}

btn.addEventListener('click', show);

function show(){
    initialstate.classList.add('inactive');
}