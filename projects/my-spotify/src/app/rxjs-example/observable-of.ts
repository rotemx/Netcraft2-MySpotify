import {from, Observable, of} from "rxjs";


let arr = [1, 2, 3, 4];

let observable = new Observable(subscriber => {
	for (let i = 0; i < arr.length; i++) {
		subscriber.next(arr[i]);
	}
})


observable.subscribe(data=>{
	console.log('event happened!');
	console.log(data);
})
arr.push(999)

arr.push(222)
