
console.log('starting...');


function wait(seconds:number, cb:Function):Promise<any>{
	
	return new Promise<number>((resolve, reject) => {
		setTimeout(()=>{
			console.log('Running the cb...');
			cb();
			resolve(88);
		}, seconds * 1000);
		
	})
}

(async ()=>{
	await wait(3,()=>{
	    console.log('waited...');
	});
	
	wait(3, ()=>{
	
	}).then(data=>console.log(data) //88 = resolve value
	)
	console.log('Done! after 3s');
}
)() //IIFE


