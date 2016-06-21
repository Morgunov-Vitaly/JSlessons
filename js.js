var n=+prompt('Enter N', 2);
// Recursion method
function SumN (n) {
	if (n==1) return n; 
	return n+SumN(n-1);
};

// Mathematical method
// function SumN (n) {
// 	return (1+n)*n/2;
// };

// Cycle method
// function SumN(n) {
// 	var x=0;
// 	for (var i = 1; i <= n; i++) {
// 		x+=i;
// 	};
// 	return x;
// };

// Recursion method
// function FucN (n) {
// 	if (n==1) return n; 
// 	return n*FucN(n-1);
// };
// Alternative 1:
// (n != 1)? n*FucN(n-1):1;
// Alternative 2:
// n ? n*FucN(n-1):1;

// Mathematical method
// function FucN (n) {
// 	return (1+n)*n/2;
// };

// Cycle method
function FucN(n) {
	var x=1;
	for (var i = 1; i <= n; i++) {
		x*=i;
	};
	return x;
};

// Show Result 
if (n>=1){
	alert ('SumN = '+ SumN(n)+' '+'FucN= '+FucN(n));
} else alert("Введено недопустимое значение N");

