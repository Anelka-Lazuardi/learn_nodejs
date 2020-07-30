const fs = require('fs');
const readStream = fs.createReadStream('./docs/cihuy.txt', {
    encoding: 'utf8'
});
const writeStream = fs.createWriteStream('./docs/cihuy4.txt');
// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK --------');
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })
// piping
readStream.pipe(writeStream)