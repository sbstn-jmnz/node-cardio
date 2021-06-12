const fs = require('fs');

fs.readFile('./data/newTest.txt','utf-8',(err,data)=>{
  fs.writeFile('./data/newTest.txt', data + '\nsegunda prueba', 'utf8',()=>{
    console.log('Archivo actualizado');
  })
})