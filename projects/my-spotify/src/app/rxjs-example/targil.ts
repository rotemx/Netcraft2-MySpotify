//observable = stream

//  ----*-----*----------------------*-*-----*----*
// let numebrs = [1,2,3,4,5,6,7,8,9];
// numebrs.filter(x=>x%3)

import {filter, map, merge, Observable, Subscription} from "rxjs";

const everySecond = new Observable<number>(subscriber => {
	let i = 1;
	
	const timer = setInterval(() => {
		subscriber.next(i++);
	}, 500);
	
	return () => {
		clearInterval(timer);
		console.log("Tear down logic.");
	};  //teardown logic
});

// const subscription = everySecond.subscribe(data => {
// 	console.log(data);
// });

// setTimeout(() => {
// 	console.log("unsubscribing...");
// 	subscription.unsubscribe();
// }, 5000);


const everySecondWithout3 = everySecond.pipe(
	filter(x => !!(x % 3))
);

const BoomEvery3Seconds = everySecond.pipe(
	filter(x => !(x % 3)),
	map(x => "Boom")
);


const oneTwoBoom = merge(
	everySecondWithout3, BoomEvery3Seconds
);

const subscription = oneTwoBoom.subscribe(data => {
	console.log(data);
});

setTimeout(() => {
	console.log("unsubscribing...");
	subscription.unsubscribe();
}, 30000);


// create a multiply function factory that creates a function that multiplies a given number.
// ex.
// multiplierFnFactory(7) = multi7;
// multi7(9) // 63

const multiplierFnFactory: (num: number) => (num: number) => number = y => x => x * y;

const multi7  = multiplierFnFactory(7);
console.log('multi7(9):' + multi7(9));

const eightyOne = multiplierFnFactory(9)(9);   // CURRYING



// imperative
// [client]  =>  [shop]
// setInterval(()=>fetch('/newProducts'), 2000);
// polling

// reactive programming - (rxjs) - reactiveX for JS
// [client] (subscribe)   <=   [shop] - next();

