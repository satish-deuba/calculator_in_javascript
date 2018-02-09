//PROBLEM - basic calculator which takes multiple expressions to processs & output the result
//Solution - take the input make it array then process & output the result



var screen = $("#calculator-screen");
var btns = $(".calculator-buttons__li");
var equal = $(".calculator-buttons__li-equal");
var clear = $(".calculator-buttons__li-clear");
var Arr = [];
var Ar = [];
var val = "";
var inArr = ["+", "-", "/", "*"];

btns.click(function(e) {

  var text  = $(this).text();
  var last = Arr

  console.log(last);

  //if(inArr.indexOf(text) > -1) { Arr.push(text); }
  //c
  //if() {  }

  Arr.push(text);


  //val += text;
  screen.val(Arr.join(""));

});

equal.click(function(e) {
//  console.log(Arr);
  //var b = [+, -, *, /];

  var d = val.split("+");

  console.log(Arr);

  //var a = Arr.join("");
  // var b = Ar;
  // console.log(a);
  ///Arr.forEach(function(num, index) {

  //    console.log(index);
  //    console.log(num);



      // if(num === "+") {
      //   a += Number(num)+(Number(num));
      // }
      // if(num === "-") {
      //   a += ""-"";
      // }
      // if(num === "*") {
      //   a += ""*"";
      // }
      // if(num === "/") {
      //   a += ""/"";
      // }
      //
      // if(Number(num)) {
      //   a += Number(num);
      // }

  //});


  //console.log(eval(a));

});


clear.click(function(e) {
  Arr = [];
  screen.val("").focus();
});
var n = ["23", "+", "2"];

var e = "";

n.forEach(function(num) {

  e = num
  console.log(typeof Number(num));
})

n.forEach(function(num, index) {
  //e = num n[index+1] n[index+2];
  if(num === "+") {
    e = Number(n[index-1]) + Number(n[index+1]);
  }

  if(num === "-") {

  }

  if(num === "*") {

  }

  if(num === "/") {

  }

});

console.log(Arr);
