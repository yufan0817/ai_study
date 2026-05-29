const stack = []

stack.push(1)
stack.push(2)
stack.push(3)
let index = stack.length - 1
while (index >= 0) {
    
    const val = stack[index]
    index--
    console.log(val)
}