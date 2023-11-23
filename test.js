const cache_dir = process.env.CACHE_DIR || '/api2-cache';
const fs = require('fs');
const path = require('path');

const testFile = path.join(cache_dir, 'test.txt');
console.log('Starting the app...')
console.log('cache_dir', cache_dir)

try {
  fs.mkdirSync(cache_dir, { recursive: true });
} catch (e) {
  console.log('Error creating cache dir', e)
}

setInterval(() => {
  const timeString = new Date().toISOString();
  fs.appendFileSync(testFile, '\n'+timeString);
}, 5 * 1000)

setInterval(() => {
  console.log('Reading file', testFile)
  console.log(fs.readFileSync(testFile, 'utf8'))
}, 10 * 1010)