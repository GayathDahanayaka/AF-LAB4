console.log("This is app.js file");

// Reading a file using fs module
const fs = require('fs');
fs.readFile('Read.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

// Writing to a file using fs module
fs.writeFile('Read.txt', 'Hello World!', (err) => {
    if (err) throw err;
    console.log('File saved');
});