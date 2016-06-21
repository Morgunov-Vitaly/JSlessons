var n=+prompt("Enter N=", 2);
function FibN(n) {
	var Fn=1, Fnm1=1; Fnm2=1;
	for (var i =  2; i < n; i++) {
		Fn=Fnm1+Fnm2;
		Fnm2=Fnm1;
		Fnm1=Fn; 
	};
	return Fn;
}
alert("Fibonachie N="+FibN(n));