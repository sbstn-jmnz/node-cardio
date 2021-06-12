const childProcess = require('child_process');

let numOne = null;
let numTwo = null;

function execute(file) {
  return new Promise((resolve)=>{
    childProcess.exec(`node ${file}`, (error, result)=>{
      resolve(parseInt(result))
    })
  })
}

execute('00_num-one.js').then((num)=>{
  numOne = num
  execute('00_num-two.js').then((num)=>{
    numTwo = num
    console.log(numOne + numTwo);
  })
})