/**
 * Created by DecaHub on 9/27/16.
 */

let isPrime = (num) => {
	
	if (num < 2) {
		return false;
	}
	
	for (let i = 2; i < num; ++i) {
		if ((num % i) === 0) {
			return false;
		}
	}
	
	return true;
	
};

