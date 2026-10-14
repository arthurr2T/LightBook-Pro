const https = require('https');
https.get('https://imgur.com/a/PU66Bcu', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/i\.imgur\.com\/[a-zA-Z0-9]{7}\.(jpg|jpeg|png|webp)/g);
    if(matches) {
       console.log([...new Set(matches)]);
    } else {
       console.log("no matches");
    }
  });
});
