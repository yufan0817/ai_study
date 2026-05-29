var a = 1
var b = 2
function a () {
  console.log(a); 
  var c = 3
  var a = b
  function c() {}
  console.log(c);
}
a()
console.log(a);