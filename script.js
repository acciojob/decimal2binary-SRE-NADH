function decimalToBinary(num) {
  //Write you code here
	let s ="";
  while(num>0){
	  let b = num%2;
	  s+=b;
	  num=num/2;
  }
	return s;
}

window.decimalToBinary = decimalToBinary;
