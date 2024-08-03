const path = require("path");

console.log(path.dirname('F:\NodeJs Learning\PathModule\path.js'));
console.log(path.extname('F:\NodeJs Learning\PathModule\path.js'));
console.log(path.basename('F:\NodeJs Learning\PathModule\path.js'));
console.log(path.parse('F:\NodeJs Learning\PathModule\path.js'));

const mypath = path.parse('F:\NodeJs Learning\PathModule\path.js');
console.log(mypath.root);