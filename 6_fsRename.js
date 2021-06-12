const fs = require('fs');

const dir = './data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.rename('test.txt', './data/newTest.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});