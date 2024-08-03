//in the learn we use module.exports so ho to work in the behind the scene

(function(exports, require, module, _filename, _dirname){
    const name ="Hr";    //means when we write this 4,5,.. line so 
    console.log(name);   //behind the scene it actually work like this 
    //in this IIFE FUNCTION when we define any variable or const so 
    //(IIFE=immediatly invoked function expression)
    //they all are only and only accessable in this function 
    //we can`t access out side the file even out side the function
})();



const name ="Hr";   
console.log(name);

//both are same