# 对象
- 万物皆对象

1. 原始类型： string, number, boolean, undefined, null, bigint, Symbol
2. 引用类型： object,array,function

- 创建对象的方式
1. 字面量
2. 构造函数 new Object()
3. new 一个构造函数

- 函数有二义性：可以普通调用，也可以 new 调用

- new 的工作原理：
1. new 会往函数内凭空创建一个对象
2. 执行函数中的代码
3. 让这个对象的原型等于函数的原型  this.__proto__ = Xxx.prototype
3. return 这个this对象

# 包装类
- 原始类型是不能添加属性和方法的

- V8 在对象中查找属性，如果找不到，一定会去它的原型上找

1. 当用户创建一个字面量，V8 会默认执行成 new Xxx()
2. 又因为原始类型不能增加属性和方法，所以V8 在new出这个实例对象后，立即会做一个拆箱动作
3. str.length length是 String 函数原型上的属性，并不是给字符串增加的属性