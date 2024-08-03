//if we have 2 work 1st want to complete in 10 min and 2nd in 3 min 
//so in sync it complete 1st work then go for 2nd  so it is basically Sync
const fs= require("fs");

//creating anew file
fs.writeFileSync("read.txt","welcome hr");
fs.writeFileSync("read.txt","HII MY NAME IS HR");  //this is create new file and when reuse then it overwrite data


fs.appendFileSync("read.txt","Welcome bhai");

const buf_data =fs.readFileSync('read.txt');
org_data=buf_data.toString();
console.log(org_data);

//to rename the file
fs.renameSync('read.txt','write.txt');