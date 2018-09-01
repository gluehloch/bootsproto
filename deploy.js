var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
console.info(__dirname);

var config = {
    user: "...",
    password: "...",
    host: "andre-winkler.de",
    port: 21,
    localRoot: __dirname + '/',
    remoteRoot: '.',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['dist/*'],   // ['*.php', 'dist/*']
    //exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRemote: false             // delete existing files at destination before uploading
};
 
// use with promises
/*
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))
*/

// use with callback
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
