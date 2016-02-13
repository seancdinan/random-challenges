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

var testArray = [[['A','B'],['A','B','C']],[['D','E']],['F','G']];

function findNeighbor(map,x){
	// Returns: [[neighbor,distance],[etc]]
	var result = [], index = 0;
	for (var i = 0; i < map.length; i++){
		if (map[i][0] == x){
			result[index] = [map[i][1], map[i][2]];
			index++;
		}
	}
	for (var i = 0; i < map.length; i++){
		if (map[i][1] == x){
			result[index] = [map[i][0], map[i][2]];
			index++;
		}
	}
	return result
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

// Combination & Addition functions
function combineResults(array){
	// Combines a mismatched array of arrays and strings into one array holding all the strings.
	function allStrings(array){return array.every(function(i){return typeof(i) != 'object'})}
	if (allStrings(array) == true){return array}
	else {return combineResults(array.reduce(function(a,b){return a.concat(b)}))}
}
function addEveryOther(array,start){
	// Add every other element starting with either 0 or 1
	var sum = 0;
	for (var i = start; i < array.length; i=i+2){
		console.log(array[i])
		sum += array[i];
	}
	return sum
}
function addLast(array){
	// Adds values at last index of an array
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		last = array[i].length;
		sum += array[i][last-1]
	}
	return sum
}



























