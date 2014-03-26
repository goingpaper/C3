function calc(){


	var input = document.getElementById("calc_form").elements;
	var num1=input[0];
	var num2 =input[2];
	var operator=input[1];
	var value = 0;
	if(operator=='+'){
		value = num1+num2;
	}

	if(operator=='-'){
		value =num1-num2;
	}
	if(operator=='*'){
		value =num1*num2;
	}
	if(operator=='/'){
		value = num1/num2;
	}
	document.write("<p>"+value+"</p>");
}
