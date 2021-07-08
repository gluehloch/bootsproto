var FtpDeploy = require('ftp-deploy');
var propertiesReader = require('properties-reader');

var properties = propertiesReader('./build.properties');
var ftpDeploy = new FtpDeploy();
 
console.info(__dirname);

var config = {
    user: "x",
    password: "x",
    host: "andre-winkler.de",
    port: 21,
    localRoot: __dirname + '/dist/angularapp/',
    remoteRoot: '/www/andre-winkler-prelive',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: ['*'],   // ['*.php', 'dist/*']
    //exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRemote: true             // delete existing files at destination before uploading
};
 
// use with promises
/*
ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err))
*/
ftpDeploy.on('uploading', function(data) {
    data.totalFilesCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename;             // partial path with filename being uploaded

    console.log(" | " + data.filename + " | ");
});

// use with callback
ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err)
    else console.log('finished');
});
