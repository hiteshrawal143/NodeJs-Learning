// const oper = require('./oper');  //here we can write anything at  add 
// console.log(oper.add(5,6));
// console.log(oper.sub(10,4));

//now we see it works properly but if we have lot of thing so every time oper. , oper. ...  
//is like very lengthy so we have to simple way to get this .

const {sub,add,mul,name} = require('./oper'); 
console.log(add(5,6));
console.log(sub(10,4));
console.log(mul(8,4));
console.log(name)