const https = require('https');

https.get('https://api.gael.cl/general/public/clima',(resp)=>{
  resp.on('data',(data)=>{
    console.log(JSON.parse(data));
  })
})

console.log('jelow')