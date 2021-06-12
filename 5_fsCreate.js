const fs = require('fs');

fs.writeFile('test.txt', 'prueba de contenido', 'utf8',()=>{
  console.log('archivo creado');
})