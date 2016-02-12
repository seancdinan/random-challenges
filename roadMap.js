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
function isIn(array,value){
	for (var i = 0; i < array.length; i++){
		if (array[i] == value)
			return true
	}
	return false
}
function removeRepeats(array) {
	var filteredArray = [array[0]];
	var filterIndex = 1;
	var alreadyExists;
	for (var i = 1; i < array.length; i++) {
		for (var k = 0; k < filteredArray.length; k++) {
			if (array[i] == filteredArray[k]) {alreadyExists = true; break}
			else alreadyExists = false	
		}
		if (alreadyExists == false) {
			filteredArray[filterIndex] = array[i];
			filterIndex++;
		}
	}
	return filteredArray;
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


function withinX(map,start,finish,moves){
	var nodes = [];
	var neighbors = [];
	var temp= [];
	// With one move
	nodes[0] = findNeighbor(roadMap,start);
	console.log('\nNodes[0]: ')
	console.log(nodes[0]);

	// With 2 moves
	for (var i = 0; i < nodes[0].length;i++){
		temp[i] = findNeighbor(roadMap,nodes[0][i]);
		if(isIn(temp[i],finish)){console.log('Sucess!')}
	}
	nodes[1] = temp;
	console.log('\nNodes[1]: ')
	console.log(nodes[1]);

	// With 3 moves
	temp = [];
	for (var i = 0; i < nodes[1][0].length;i++){
		temp[i] = findNeighbor(roadMap,nodes[1][0][i]);
		if(isIn(temp[i],finish)){['Sucess! Node: ',nodes[1][0][i]].join('')}
	}
	nodes[2] = temp;
	console.log('\nNodes[2]: ')
	console.log(nodes[2]);


	// With 4 moves
	temp = [];
	var temp2 = [];
	for (j = 0; j < nodes[2].length; j++){
		temp2 = [];
		for (k = 0; k < nodes[2][j].length; k++){
			temp2[k] = findNeighbor(roadMap,nodes[2][j][k]);
			if(isIn(temp2[k],finish)){['Sucess! Node: ',nodes[2][j][k]].join('')}
		}
		temp[j] = temp2;
	}
	nodes[3] = temp;
	console.log('\nNodes[3]: ')
	console.log(nodes[3]);

	var temp3 = [];
	for (i = 0; i < nodes[3].length; i++){
		temp2 = [];
		for (j = 0; j < nodes[3][i].length; j++){
			temp3 = [];
			for (k = 0; k < nodes[3][i][j].length; k++){
				temp3[k] = findNeighbor(roadMap,nodes[3][i][j][k]);
				if(isIn(temp3[k],finish)){console.log(['Sucess! Map: ',nodes[0],' --> ',nodes[1][0][i],' --> ',nodes[2][i][j],' --> ',nodes[3][i][j][k]].join(''))}
			}
			temp2[j] = temp3;
		}
		temp[i] = temp2;
	}
	nodes[4] = temp;
	// console.log('\nNodes[4]: ')
	// console.log(nodes[4])

}
withinX(roadMap,'A','F',4)






