const fs = require('fs');

// reading files
// fs.readFile('./docs/cihuy.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })



// writing files
// fs.writeFile('./docs/cihuy.txt', 'hello guys', () => {
//     console.log('file was writen');
// })
// fs.writeFile('./docs/cihuy2.txt', 'hello guys this is part 2', () => {
//     console.log('file was writen or created');
// })

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder Created');
//     })

// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files

if (fs.existsSync('./docs/cihuy3.txt')) {
    fs.unlink('./docs/cihuy3.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}