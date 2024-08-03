// Task -
//1. Create a folder name it Hitesh
//2. create a file in it name math.txt and data into it
//3. add more data into the file at the end of the existing data.
//4. Read the data without getting the buffer data at first
//5. Rename th file name and the folder 
//6. now delete both the file and the folder 

const fs= require("fs");
// fs.mkdirSync('Hitesh')
//2
fs.writeFileSync('Hitesh/math.txt','Welcome to Maths Stream \n');
//3
fs.appendFileSync('Hitesh/math.txt','Maths is amazing subject');
//4
const data =fs.readFileSync('Hitesh/math.txt',);
odata=data.toString();
console.log(odata);

// other way we use 'utf8' and it is very short & simple
const data1 = fs.readFileSync('Hitesh/math.txt','utf8');
console.log(data1);

//5
fs.renameSync('Hitesh/math.txt','Hitesh/bio.txt');

//6
// fs.unlinkSync('Hitesh/bio.txt');
//  fs.rmdirSync('Hitesh');