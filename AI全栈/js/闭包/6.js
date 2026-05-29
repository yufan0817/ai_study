var arr = []

for (var i = 1; i <= 5; i++) {
  arr.push(function() {
    console.log(i);
  })
}



for (let n = 0; n < arr.length; n++) {
  arr[n]()  // function() {console.log(i)} ()
}