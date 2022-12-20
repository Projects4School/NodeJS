const fs = require('fs');

// Read file, edit, and replace edited content
fs.readFile('./test.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(err);
        return;
    }

    data = data.toUpperCase();

    fs.writeFile('./test.txt', data, (error) =>  {
        if(error) console.error(error);
    });
});