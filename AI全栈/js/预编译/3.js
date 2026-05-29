function foo(a, b) {
  console.log(b);  //function b() {}
  c = 0
  var c
  a = 3
  b = 2
  console.log(b);  //2
  function b() {}
  console.log(b);  //2
}
foo(1)


