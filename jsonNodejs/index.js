//Task
//1. convert to JSON
//2. Add into other file
//3. read file
//4. again convert back to js Object original
//5. consol.log

const bioData ={
    name : "Hitesh",
    age : 40,
    class : "S class",
};

//1.
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//2. for creating file (not directly) so use fs module
const fs = require("fs");
fs.writeFile("json1.json",jsonData , (err)=> {
    console.log("done");
});

//3. & 4.
fs.readFile("json1.json","utf-8",(err,data)=>{
    const objData = JSON.parse(data);
    console.log(data);
    console.log(objData);
});