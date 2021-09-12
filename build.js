const fs = require('fs');
const path = require('path');
const globals = require('./dist');

const output = path.resolve(__dirname, 'dist/globals.json');
const data = JSON.stringify(globals, null, 2);

fs.writeFileSync(output, data, 'utf8');
