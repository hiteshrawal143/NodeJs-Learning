// const add= (a,b)=> {
//     return  a+b;
// }
// module.exports = add;



//if we want to 2 function to export so we can write
const add= (a,b)=> {
    return  a+b;
}
const sub= (a,b)=> {
    return  a-b;
}
const mul= (a,b)=> {
    return  a*b;
}
const name = "Hr"
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// in this file also we have to very long method like every function to  export use module.exports....
//so we can use
module.exports={add,sub,mul,name}