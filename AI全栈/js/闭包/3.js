//function a() {
  //console.log(myname);
//}
//function b() {
  //var myname = '汐汐'
  //a()
//}
//var myname = '琪琪'
//b()

//function c() {
  //console.log(1);
//}
//c()


function foo() {
   var myName = 'coke'
   var age = 18
   function bar() {
        console.log(myName);
    }
    return bar
}
var baz = foo()
baz()
