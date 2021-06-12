const https = require('https');

https.get('https://apisss.gael.cl/general/public/clima',(resp)=>{
  resp.on('data',(data)=>{
    const info = JSON.parse(data);
    const hotCities = info.filter((station) => station.Temp >= 15);
    console.log(hotCities);
  })
}).on('error', (e)=>{
  console.log(e)
})