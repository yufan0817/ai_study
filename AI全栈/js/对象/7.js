Number.prototype.abc = function () {
    return this * 20
}
const n = 123

n.abc()

Array.prototype = {
    push: function (item) {
        this[this.length] = item
        this.length++
    }
}
const arr = []
arr.push(1)