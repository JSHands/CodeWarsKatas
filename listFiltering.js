/**
 * Created by DecaHub on 9/27/16.
 */

let filter_list = (l) => {
	
	return l.filter((elem) => {
		return !(typeof elem == 'string');
	})
	
};
