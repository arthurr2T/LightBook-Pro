const fs = require('fs');
const html = fs.readFileSync('pu66.html', 'utf8');
const regex = /hash\\?":\\?"([a-zA-Z0-9]+)\\?",\\?"ext\\?":\\?"(\.[a-zA-Z]+)\\?"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(`https://i.imgur.com/${match[1]}${match[2]}`);
}
