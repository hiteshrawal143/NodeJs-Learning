const fs= require("fs");

fs.writeFile('read.txt',"Today is good day\n",(err)=>{
    console.log("file is created");
    console.log(err)
});

fs.appendFile('read.txt', "Good Morning guys",(err)=>{
    console.log("task added");
});
  
fs.readFile('read.txt','utf8',(err,data)=> {
    console.log(data);
})


