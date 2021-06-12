const https = require('https');

https.get('https://api.gael.cl/general/public/clima',(resp)=>{
  resp.on('data',(data)=>{
    const info = JSON.parse(data);
    const conce = info.find((station) => station.Estacion == 'Concepción');
    console.log(conce);
  })
})