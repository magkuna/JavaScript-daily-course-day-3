/*var calculate = function (number1, number2) {
    console.log(number1 + number2)
}

calculate(5,10);


// second way

var calculate = function (number1, number2){
return number1 + number2
}

console.log(calculate(5,10));*/


var sum;
var myFunction = function (number1, number2) {   
   sum = number1 + number2;
   return sum;
}
console.log(myFunction(5,10));
console.log(sum);


var myFunction1 = function (number1, number2) {   
 var sum1 = number1 + number2;
 return sum1;
}
console.log(myFunction1(5,10));
console.log(sum1);


//zadeklarowane poza funkcja wywołuje się tez w console log
// zadeklarowane w funkcji pokazuje się tylko raz 


