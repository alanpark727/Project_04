const slide = document.querySelector('.slideWrap');

const prevBtn = document.querySelector('#prev_1');
const nextBtn = document.querySelector('#next_1');

let slideItems = document.querySelectorAll(".slideItem");

const maxSlide = slideItems.length;

let currSlide = 1;

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length -1];

const startElem = document.createElement('a');
const endElem = document.createElement('a');

endSlide.classList.forEach((c)=> endElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length -1].after(startElem);

slideItems = document.querySelectorAll(".slideItem");