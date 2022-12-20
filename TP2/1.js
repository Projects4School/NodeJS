const fs = require('fs');

// Read file and display content in console
fs.readFile('./TP1.js', 'utf8', (error, data) => {
    if (error) {
        console.error(err);
        return;
    }

    console.log(data);
});