// Removes the index.html file from the dist/ folder.
// Used in `npm run reset` script
const fs = require('fs');
if (fs.existsSync('./dist/index.html')) {
  fs.unlinkSync('./dist/index.html');
  console.log('/dist/ folder reset!');
}
