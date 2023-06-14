//one way to use directly the inner function
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// another way to use inner functions
// const fs = require('fs');
// fs.readFileSync

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);

//flag:'a' is an object and it used to append a new line or new file
writeFileSync('./content/result-sync.txt',`Here is the result: ${first},${second}`,{flag: 'a'})
console.log('done with this task');
console.log('starting the next one');

//syntax of readfilesync : readFileSync(path,font,callback function);
//syntax of writefilesync : writeFileSync(path of new file,content that we want ro add , objects);