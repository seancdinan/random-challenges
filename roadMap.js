// Map of points [A,B,x] indicates road connecting A to B is x long.
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


function isDuplicate(array, value){
	// Returns true if there's a duplicate, false if there isn't
	var alreadyThere = false;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == value) {
			if (alreadyThere == false) {
				alreadyThere = true;
			}
			else return true
		}
	}
	return false;
}
function removeDuplicate(array, value){
	var result = [];
	var resultIndex = 0;
	for (var i = 0; i < array.length; i++){
		if (!isDuplicate(result, array[i])){
			result[resultIndex] = array[i];
			resultIndex++;
		}
	}
	return result
}
function isShortest(array){
	// Given a list of route options, chooses shortest distance. Distance should be last value in subarray.
	var pick = array[0][array[0].length-1];
	for (var i = 0; i < array.length; i++){
		if (array[i][array[i].length-1] < pick) {
			pick = array[i][array[i].length-1];
		}
	}
	return pick	
}
function directRoute(map,a,b){
	// If direct route exists, returns distance value. Returns undefined if no match exists. 
	for (var i = 0; i < map.length; i++){
		if (map[i][0] == a && map[i][1] == b) {return map[i][2]}
		else if (map[i][0] == b && map[i][1] == a){return map[i][2]}

	}
}
function findNeighbor(map,a){
	// Given a map and a node, returns any direct neighbors
	var matches = [], matchesIndex = 0;
	for (var i = 0; i < map.length; i++){
		if (map[i][0] == a){
			matches[matchesIndex] = map[i][1];
			matchesIndex++;
		}
		if (map[i][1] == a){
			matches[matchesIndex] = map[i][0];
			matchesIndex++;
		}
	}
	return matches;
}

function makeRoute(map,start,finish){
	// Creates a route from start to finish on map
	if (directRoute(map,start,finish) != undefined){
		var route = [start,finish,directRoute(map,start,finish)];
		console.log(route);
	}
	else {
		var neighbors = findNeighbor(map,start);
		for (var i = 0; i < neighbors.length; i++){
			makeRoute(map,neighbors[i],finish)
		}
	}
}

function condenser(array,a,b,c){
	// Get from A to C via B
	var x = findNeighbor(array, a);
	var y = findNeighbor(array, b);
	console.log(x);
	console.log(y);
	// for (var i = 0; i < y.length; i++){
	// 	if (y[i] == c){
	// 		var xdist = directRoute(roadMap,a,b);
	// 		var ydist = directRoute(roadMap,b,c);
	// 		return xdist + ydist;}}
	for (var i = 0; i < y.length; i++){
		console.log(findNeighbor(array,y[i]))
	}
}

console.log(condenser(roadMap,'A','B','D'));








