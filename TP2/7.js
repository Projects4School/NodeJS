const child_process = require('child_process');

// Execute command with child process
child_process.exec('hostname', (error, output) => {
    console.log(output);
});