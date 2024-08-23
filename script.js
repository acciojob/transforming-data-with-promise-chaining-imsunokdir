//your JS code here. If required.
const button = document.getElementById("btn");
const output = document.getElementById("output");


function updateResult(res) {
	output.textContent=`Result: ${res}`
}

button.addEventListener("click",()=>{
	let input = document.getElementById("ip").value;
	
	new Promise((resolve)=>{
		setTimeout(()=>{
			updateResult(input)
			resolve(input)
		},2000)
	}).then((num)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const multipliedNo = num*2;
		updateResult(multipliedNo)
		resolve(multipliedNo);
	},1000)
	})
}).then((mulNo)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const subtractedNo = mulNo-3;
		updateResult(subtractedNo)
		resolve(subtractedNo);
	},1000)
	})
}).then((subNo)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
		const dividedNo = subNo/2;
		updateResult(dividedNo);
		resolve(dividedNo);
	},1000)
	})
}).then((divNo)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			let addedNo = divNo+10;
			updateResult(addedNo);
			resolve(addedNo)
		},1000)
	})
}).then((finalNum)=>{
		output.textContent = `Final Result: ${finalNum}`;
})
})




















