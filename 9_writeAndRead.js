// Crear un programa que cree un archivo con el texto "Hola Mundo"
// Inmediatamante después de creado el archivo, leerlo e imprimir su
// contenido en la terminal

const fs = require('fs');

fs.writeFile('./data/jelow.txt', 'Hola Mundo cruel', 'utf-8', ()=> {
  fs.readFile('./data/jelow.txt','utf-8',(err, data)=>{
    console.log(data);
  })
})