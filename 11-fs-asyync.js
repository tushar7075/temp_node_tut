//one way to use directly the inner function
const {readFile, writeFile} = require('fs');
console.log('start');
// another way to use inner functions
// const fs = require('fs');
// fs.readFile

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Done with this task');
        })
    })
});
console.log('starting next task');