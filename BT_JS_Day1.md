
- What are the differences between a variable that is: `null`, `undefined`?
 	+undefined means a variable has not been declared, or has been declared but has not yet 	been assigned a value.
	+null is an assignment value that means "no value"
-  What is `use strict`?
	“Use Strict” is a new feature introduced in ECMAScript 5. The purpose of “use strict” is 	to indicate that the code should be executed in “strict mode”. For example, with strict 		mode, you cannot use undeclared variables.
- what are the advantages and disadvantages to using it?
	+advantages :
		-It catches some common coding bloopers, throwing exceptions.
		-It prevents, or throws errors, when relatively “unsafe” actions are taken (such 			as gaining access to the global object).
		-It disables features that are confusing or poorly thought out.
	+disadvantages : 
		-It will not allow us to use the “with” statement. This statement will causes 			 security and performance problems.
                -It will not allow us to use the “arguments.caller” property, due to security 			 concernsWe do not have an alternate to this property, 
		but we can hard code an additional parameter.

- What are the differences between `==` and `===`? Write an example for each case (if any)?
	== : equal value
	=== : equal value and equal type
	+example :
		2=='2' (true)
		2==='2'(false)
- What is different between declaration: `var`, `const` and `let`?
	+var : is now the weakest signal available when you define a variable in JavaScript. The 	variable may or may not be reassigned, and the variable may or may not be used for an 		entire function, or just for the purpose of a block or loop.
	+const :is a signal that the identifier won’t be reassigned.
	+let : is a signal that the variable may be reassigned, such as a counter in a loop, or a 		value swap in an algorithm. It also signals that the variable will be used only in the 		block it’s defined in, which is not always the entire containing function.

1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	function tinhTong(a,b){
	    var sum = 0;
	    if(a==b){
		return sum=3*(a+b);
	    }else{
		return sum = a+b;
	    }
	}
	document.write(tinhTong(2,2));
2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
	function absolute(n){
		    
	    if(n>19){
	      return 3*(n-19);
	    }else 
	      return 19-n;
	}
	document.write(absolute(20));
	
3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.
	function findnumber(a) {
	  let result = [];
	  let index = 0;
	 for(let i =0; i<10; i++){
	     let num = a.replace("*", i);
	   if(num%3 == 0){
	       result[index] = num;
		  index++;
	     }
	  }
	  return result;
	}
	  console.log(findnumber('1*9'));

4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

	function findnumber(a) {
	  let result = [];
	  let index = 0;
	 for(let i =0; i<10; i++){
	     let num = a.replace("*", i);
	   if(num%6 == 0){
	       result[index] = num;
		  index++;
	     }
	  }
	  return result;
	}
	  console.log(findnumber('1234567890*'));

		




















