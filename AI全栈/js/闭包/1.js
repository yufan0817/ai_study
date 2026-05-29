//function bar() {
    //console.log(myName);
//}
//function foo() {
  //  var myName = '张三';
  //  bar();
//}
//var myName = '李四';
//foo();

let count = 1
function main() {
    let count = 2
    function bar() {
        let count = 3
        function foo() {
            console.log(count);
        }
        foo();
    }
    bar();
}
main();