// JSON stand for JavaScript Object Notation.
//JSON is a lightweight
//formate for storing and transporting data.
//JSON is often used when data is sent from a server to web page.

const bioData ={
    name : "Hitesh",
    age : 50,
    college : "PIET"
};
console.log(bioData.college);
//this is simple but if i want to this bioData object convert into JSON then =>

//1. object convert into JSON then use JSON.stringify() method
const jsonData = JSON.stringify(bioData);
console.log(jsonData,"This is a json"); 
  //i>. {"name":"Hitesg","age":50,"college":"PIET"} in JSON-properties also have double quots "name",..
  //ii>. and when we called property so its also not eligible in the JSON like (JSON.name) 

//2. if we want to convert JSON to object or JS string then use JSON.parse() method=>
const objData = JSON.parse(jsonData);
console.log(objData,"This is object or js String");
console.log(objData.name);