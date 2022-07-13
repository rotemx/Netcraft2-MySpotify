//observable = stream

//  ----*-----*----------------------*-*-----*----*

import {Observable, Subscription} from "rxjs";

const obs = new Observable(subscriber => {
	let i = 1;
	
	const timer = setInterval(() => {
		// if (i >= 5){
		// 	console.log('End !');
		// 	clearInterval(timer);
		// 	subscriber.complete();
		// }
		subscriber.next("Ping " + i++);
	}, 1000);
	
	return ()=> {
		clearInterval(timer)
		console.log("Tear down logic.");
	};
});

const subscription = obs.subscribe(data => {
	console.log(data);
});

setTimeout(() => {
	console.log("unsubscribing...");
	subscription.unsubscribe();
}, 5000);



