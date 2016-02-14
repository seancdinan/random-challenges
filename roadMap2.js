// Source material / Data
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

// Navigation Functions
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
	for (var i = 0; i < map.length; i++){
		if ((map[i][0] == x && map[i][1] == y) || (map[i][0] == y && map[i][1] == x)){
			return map[i][2]
		}
	}
}
function findNew(target,reference){
	// Returns: [elements in target that aren't in reference]
	var newElements = [];
	var counter = 0;
	for (var i = 0; i < target.length; i++){
		if (!isThere(reference,target[i])){
			newElements[counter] = target[i];
			counter++;
		}
	}
	return newElements;
}
function findShortest(array,targetIndex){
	// Takes array of [[name, dist], [name, dist]] and which index to check. Returns [minValue, indexOfMin]
	// array[min[1]] will be the location of the shortest option.
	var min = [array[0],0];
	var options = getEveryOther(combineResults(array),1);
	for (var i = 0; i < options.length; i++){
		if (options[i] < min[0][targetIndex]){min[0] = options[i]; min[1]= i;}
	}
	return min
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
function getEveryOther(array,start){
	// Returns an array w/ every other element starting at either [0] or [1]
	var result = [];
	for (var i = start; i < array.length; i=i+2){
		result.push(array[i])
	}
	return result
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
function isThere(array,x){
	// Returns true if value is in array, otherwise false
	if (array.indexOf(x) != -1){return true}
	else return false
}

// STILL GOTTA MAKE
function buildWeb(map,currentEntry,n,storeage){
	if (storeage == undefined){storeage = [];}
	for (var i = 0; i < currentEntry.length; i++){
		console.log(currentEntry[i])
		if (typeof(currentEntry) == 'string'){console.log('Its a string')}
		else return buildWeb(map,currentEntry[i],currentEntry.length)
	}
}

console.log(buildWeb(roadMap,testArray,4))























