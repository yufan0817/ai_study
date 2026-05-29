function fn(a) {
  console.log(a);//Function a() {}
  var a = 123
  console.log(a);//123
  function a() {}
  var b = function() {}
  console.log(b);//Function b() {}
  function c() {}
  var c = a
  console.log(c);//123
}
fn(1)
