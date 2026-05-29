function add() {
    let count = 0
    return function () {
        count++
        return count
    }
}
var baz = add()
console.log(baz());
console.log(baz());
console.log(baz());

