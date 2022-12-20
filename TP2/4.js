const fs = require('fs');

// Read directory
fs.readdir(__dirname, (error, files) => {
    if (error) {
        console.error(err);
        return;
    }
    // Display all files in console
    files.forEach((file) => {
        console.log(file);
    });
});