
// betObj = {
// 	oddList : [
// 		2200,
// 		2800,
// 		2800,
// 	],

// 	evenList : [
// 		-200,
// 		-400,
// 	],

// 	oddSum: function() {
// 		console.log('this', this);
// 	},

// 	oddSumArrow : () => {
// 		console.log('this', this);
// 	}	// foreach

// };


// betObj.oddSum();
// betObj.oddSumArrow();

function betFunction() {
	this.oddList = [
		-13000,
		-17000,
		-15000,
	];

	this.evenList = [
	];

	this.getSum = function(arr) {

		let sum = 0;
		for(let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}

		return sum;
	};

	this.oddSumArrow  = () => {
		console.log('this', this);
	};

};

let a = new betFunction();

let oddSum = a.getSum(a.oddList);
console.log('oddSum', oddSum);

let evenSum = a.getSum(a.evenList);
console.log('evenSum', evenSum);

// a.oddSumArrow();

// console.log('oddList', a.oddList);