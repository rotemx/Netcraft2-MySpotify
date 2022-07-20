// write a function that returns a counter from 1 to 10 on every run:

// count() //1
// count() //2
// count() //3
// count() //4


//TS type alias
// type numberFunctionFactory = (initialValue?:number) => () => Number;

const countFnFactory = (initialValue = 1) => {
	// let i = initialValue; //closure
	return (() => {
		debugger;
		return initialValue++;
	});
}

// usage:
const count = countFnFactory(77);

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

const count2 = countFnFactory(99);

console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());


