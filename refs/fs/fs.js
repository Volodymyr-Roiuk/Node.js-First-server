const path = require('path');
const fs = require('fs');

// fs.mkdir(path.resolve(__dirname, './notes'), err => {
//     if (err) throw err;

//     console.log('Папка була створена');
// });


fs.writeFile(path.resolve(__dirname, './notes/myNote.txt'), 'Hello world ', err => {
    if (err) throw err;

    console.log('Файл був створений');
    

});

fs.appendFile(path.resolve(__dirname, './notes/myNote.txt'), 'from append file', err => {
    if (err) throw err;

    console.log('Файл було змінено');
})

fs.readFile(path.resolve(__dirname, './notes/myNote.txt'), 'utf-8', (err, data) => {
    if (err) throw err;

    //console.log(Buffer.from(data).toString());
    console.log(data);
    
})


// fs.rename(path.resolve(__dirname, './notes/note.txt'), path.resolve(__dirname, './notes/MyNote.txt'), err => {
//     if (err) throw err;

//     console.log('Файл було перейменовано');
    
// });