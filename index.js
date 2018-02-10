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

btns.click(function(e) {

  var text = $(this).text();


  //if(inArr.indexOf(text) > -1) { Arr.push(text); }

  Arr.push(text);

  screen.val(Arr.join(""));

});

equal.click(function(e) {
//  console.log(Arr);
  //var b = [+, -, *, /];

    var d = [];
    var s = -1;
    console.log(s);

   Arr.forEach(function(num){
      if(Number(num)) {
        d.push(Number(num));
      }else {
        d.push(num);
      }
   });

    console.log(d);

    var r = null;

    d.forEach(function(num) {

      if(Number(num)) {
        r += num;
      }else {
        if(num === "+") {
          r += '&plus';
        }
      }


    });



  //console.log(eval(a));

});


clear.click(function(e) {
  Arr = [];
  screen.val("").focus();
});



var arrayList = ["23", "+", "2", "-", "1", "/", "2"];
var result= null, skip= null, n= null, i= null, a  = null;

arrayList.forEach(function(num, index, arrayList) {

  n = Number(num);
  i = index+1;
  a = Number(arrayList[i]);

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

console.log(result);

// var y = 1;
// var g = "+";
// var re g= 4;
// console.log(re)
