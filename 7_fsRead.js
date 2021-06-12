const fs = require('fs');

fs.readFile('./data/newTest.txt','utf-8',(err,data)=>{
  console.log(data);
})