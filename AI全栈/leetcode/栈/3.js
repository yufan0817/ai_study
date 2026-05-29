var isValid = function(s) {
   const match = {
  
   '(' : ')',
   '[' : ']',
   '{' : '}',
   } 
   const stack = []
   for (let i = 0; i<s.length; i++){
    const cur = s[i]
   //判断是左括号就入栈，否则出栈一个值进行配对
   if (cur == '(' || cur == '[' || cur == '{'){
    stack.push(cur)
   } else{
    if (stack.length == 0 || match[stack.pop()] !== cur) {
        return false
    }
   }
};
return !stack.length
}