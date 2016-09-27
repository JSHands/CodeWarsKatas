/**
 * Created by DecaHub on 9/27/16.
 */

let digital_root = (n) => {
	
	let workingArray = String(n).split("");
	
	while (workingArray.length > 1) {
		
		let amount = 0;
		
		workingArray.forEach((value) => {
			value = Number(value);
			amount = amount + value;
		});
		
		workingArray = String(amount).split("");
		
	}
	
	return Number(workingArray[0]);
	
};
