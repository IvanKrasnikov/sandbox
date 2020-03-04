
///////////////////////////////////////////////////////////////////////
const  circleComponent = document.getElementById('circleComponent');
let circ = document.querySelector('.circle__border');
let circleArr = circ.getTotalLength();

// console.log('circ', circ);
circleComponent.classList.add('hidden-element');

circ.setAttribute('stroke-dasharray', circleArr);
circ.setAttribute('stroke-dashoffset', circleArr);

document.querySelector(".circle__percents-value").addEventListener("input", function() {
    let offsetToSet = circleArr - (circleArr * this.value/100); 
    circ.setAttribute('stroke-dashoffset', offsetToSet);
}, false);
///////////////////////////////////////////////////////////////////////

// getBoundingClientRect 
const loaderBox = document.querySelector('.loader__box');
const loader = document.querySelector('.loader');

console.log('loaderBox', loaderBox, loaderBox.getBoundingClientRect());
console.log('loader', loader);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/*

-600 both score

-250 750 cyberbasket

-500 basket

150 volley


eur
19.09.2019	143,4 rub 2eur
// best rate: 72,2
// current rate: 70,6

usd
12.08.2019	66,5 rub   1$
09.10.2019	661,5 rub  10$
10.10.2019	658 rub    10$
// best rate: 65,8
// current rate: 62,95


*/
const bankRate = 0.06;
let tempRubs = 0;
let rubPerMonth = 10000;
let yearStart = 2020;
const yearFinish = 2020;
const monthsPerYear = 12;

for (let currentYear = yearStart; currentYear <= yearFinish; currentYear++) {
	// console.log('year -', currentYear);

	for(let counter = 0; counter < monthsPerYear; counter++) {
		tempRubs += rubPerMonth;
		let plusInAMonth = tempRubs * bankRate / 12;
		tempRubs += plusInAMonth;
		// console.log(`${currentYear} - ${counter}`, tempRubs);
	}
}
// console.log('result:', tempRubs);
// console.log('profit:', tempRubs - rubPerMonth * (monthsPerYear * (yearFinish - yearStart + 1)));

// LAVRIK 
window.onload = function() {
	let items = document.querySelectorAll('.item');

	// console.log(items);

	for(let item of items) {
		// console.log('var of item', item);
		item.onclick = thisFunction;
	}

	function thisFunction() {
		// console.log('thisFunction -> item', item);
		// console.log('thisFunction -> this', this);
		item.classList.toggle('item--active');
	}

}

var f1 = function() {
	this.x = 'f1';
	console.log('f1', this, this.x);
	f3();
};


function f3() {
	this.x = 'f3';
	console.log('f3', this, this.x);
}

// f1();
// f3();

var f = function() {
  this.x = 5;
  (function() {
    this.x = 3;
  })();
  console.log('2-', this);
  console.log(this.x);
};

// f();
///////////////////////////////////////////////////////////////////////

// gallery 
const galleryList = document.querySelectorAll('.gallery__item');
const buttonPrev = document.querySelector('.galleryPrevButton');
const buttonNext = document.querySelector('.galleryNextButton');

let galleryCounter = 0;

function testGallFunc() {
	console.log('testGallFunc this', this);
}

function handleNextClick() {
	console.log('handleNextClick this', this);
	testGallFunc();
}

buttonNext.addEventListener('click', handleNextClick);
buttonNext.addEventListener('click', testGallFunc);
///////////////////////////////////////////////////////////////////////
