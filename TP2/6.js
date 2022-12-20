const os = require('os');

// Get current user's personnal repo path
const userdir = os.userInfo().homedir;
console.log(userdir);