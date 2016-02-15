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
	var holder = [];
	var index = 0;
	for (var i = 0; i < map.length; i++){
		if (map[i][0] == x){holder[index] = map[i][1]; index++}
		else if (map [i][1] == x){holder[index] = map[i][0]; index++}
	}
	return holder
}
function removeRoute(array,route){
	// Removes any elements from 'array' that are already in 'route'
	var index;
	for (var i = 0; i < route.length; i++){
		index = array.indexOf(route[i]);
		if (index != -1){
			array.splice(index,1)
		}
	}
	return array
}

function buildRoute(map,array,n,m){
	console.log('Start of buildRoute')
	while (n < 5){
		console.log('Start of while loop')
		console.log(n)
		console.log(m)
		m++;n++;
		buildRoute(map,array,n,m)
		console.log('End of while loop')
	}
}

function tester(map, array, result){
	if (result == undefined){result = [];}
	for (var i = 0; i < array.length; i++){
		if (typeof(array[i]) != 'string'){return tester(roadMap,array[i])}
		console.log(array[i])
	}
	return true
}
console.log(tester(roadMap,[['A','B'],'B','C']))





