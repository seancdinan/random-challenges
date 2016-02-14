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

function tester(n,x,holder){
	if (holder == undefined){holder = [];}
	if (x == undefined){x = 0}
	while(x < 3){
		for (var i  = 0; i <= n; i++){
			holder[i] = tester(n,x,holder);
		}
		x++;
	}
	return holder
}

console.log(tester(5))