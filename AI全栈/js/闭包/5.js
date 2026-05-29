function bar() {
    console.log(myName);
}
function foo() {
    var myName = '唐三'
    bar()
}
var myName = '小舞'
foo()