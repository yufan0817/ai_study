var arr = ['a','b',1,2]
//arr.push(3)
//arr.pop()//删除数组最后一个元素
//arr.unshift(0)//在数组第一个位置插入元素
//arr.shift()//删除数组第一个元素
//arr.splice(1, 1)//删除数组第二个元素,第一个下标是位置，第二个下标是长度
//arr.splice(2,0,0)//在数组第二个位置插入元素0
//arr[2] = 10



//console.log(arr);

var a = 1
var b = 'hello'
var obj = {
  name: '猪猪侠',
  age: 18,
  like:  {
    one: 'eat',
    two: {
      sport: ['篮球','跑步']
    }

  }
}
obj.girlFriend = '章若楠'
delete obj.girlFriend
console.log(obj);
