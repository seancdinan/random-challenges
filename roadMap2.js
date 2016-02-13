var roadMap = [
	['A','B',12],
	['B','C',42],
	['B','K',19],
	['C','D',16],
	['D','E',14],
	['E','F',95],
	['E','G',32],
	['F','G',46],
	['G','K',12],
	['K','H',64],
	['H','I',34],
	['H','J',39],
	['J','L',27],
	['J','M',18],
	['J','Q',71],
	['M','N',68],
	['N','O',57],
	['N','S',64],
	['O','Q',32],
	['O','P',62],
	['P','R',91],
	['Q','R',47],
	['R','T',17],
	['T','S',22]
	];

var routeTest = [['A','B','C','D','E','F',179],
								['A','B','C','D','E','G','F',162],
								['A','B','K','G','F',89],
								['A','B','K','G','E','F',170]];

var testArray = [[['A','B'],['A','B','C']],[['A','B']],['A','B']];

function findNeighbor(map,x){
	// Returns: [[neighbor,distance],[etc]]
}

function directRoute(map,x,y){
	// Returns: true: distance / false: undefined
}
function isThere(array,x){
	// Returns true/false
}
function findNew(target,reference){
	// Returns: [new elements]
}
function findShortest(array,targetIndex){
	// Returns [minValue, index]
}
function arrayNavigator(array,ladder){
	if (ladder == undefined){ladder = [];}
	//console.log(array[0])
	//console.log(ladder)
	if (typeof(array[0]) != 'string'){console.log('Not a string'); ladder.push(array[0]); return arrayNavigator(array[0],ladder)}
	return ladder
}

function miracle(array){
	for(var i = 0; i < array.length; i++){
		newArray = array[i];
		if (typeof(newArray) == 'string'){
				console.log(newArray);
		}
		if (typeof(newArray) != 'string'){return miracle(newArray)}
	}
}


console.log(miracle(testArray));