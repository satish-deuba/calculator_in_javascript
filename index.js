//PROBLEM - basic calculator which takes multiple expressions to processs & output the result
//SOLUTION - take the input make it array then process & output the result


var screen = $("#calculator-screen");
var btns = $(".calculator-buttons__li");
var equal = $(".calculator-buttons__li-equal");
var clear = $(".calculator-buttons__li-clear");
var Arr = [];
var Ar = [];
var val = "";
var inArr = ["+", "-", "/", "*"];

btns.click(calculatorInput);
//screen.on("change", calculatorInput);

function calculatorInput(e) {

  var text = $(this).text();
      text = $.trim(text);

  //if(inArr.indexOf(text) > -1) { Arr.push(text); }

  if(!text.length >0 ) {
    console.log(1);
  }

  Arr.push(text);

  console.log(Arr);

  screen.val(Arr.join(""));

}

equal.click(function(e) {

  var result= null, skip= null, n= null, i= null, a  = null;

   Arr.forEach(function calculate(num, index, Arr) {

     n = Number(num);
     i = index+1;
     a = Number(Arr[i]);

     if(n) {
       if(skip !== index) {
         result += n;
       }
     }else {

       if(num.indexOf(inArr)) { skip = i; }

       if(num === "+") { result += a; }
       if(num === "-") { result -= a; }
       if(num === "*") { result *= a; }
       if(num === "/") { result /= a; }

     }

  });

  screen.val(result);

});




clear.click(function(e) {
  Arr = [];
  screen.val("").focus();
});



// var arrayList = ["23", "+", "2", "-", "1", "/", "2"];
//
