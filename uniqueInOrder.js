/**
 * Created by DecaHub on 9/27/16.
 */


let uniqueInOrder = (iterable) => {
	
	let arr = null;
	let finalArr = [];
	
	if (Array.isArray(iterable)) {
		
		arr = iterable;
		
	} else if (typeof iterable == 'string') {
		
		arr = iterable.split("");
		
	} else {
		
		return null;
		
	}
	
	if (arr.length == 0) {
		return [];
	} else {
		let current = arr[0];
		
		finalArr.push(current);
		
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] != current) {
				finalArr.push(arr[i]);
				current = arr[i];
			}
		}
		
		return finalArr;
	}
	
};