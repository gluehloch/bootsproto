var FtpDeploy = require('ftp-deploy');
var propertiesReader = require('properties-reader');

var ftpDeploy = new FtpDeploy();
var properties = propertiesReader('./build.properties');

console.info(__dirname, properties.get('ftp.username'), properties.get('ftp.remoteRoot'));

var config = {
    user: properties.get('ftp.username'),
    password: properties.get('ftp.password'),
    host: "andre-winkler.de",
    port: 21,
    localRoot: __dirname + '/dist/angularapp/',
    remoteRoot: properties.get('ftp.remoteRoot'),
    include: ['*', '**/*'],      // this would upload everything except dot files
    //include: ['*.php', 'dist/*']
    //exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps
    deleteRemote: true             // delete existing files at destination before uploading
};
 
ftpDeploy.on('uploading', function(data) {
    /*
    data.totalFilesCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.filename;             // partial path with filename being uploaded
    */
    console.log(" | " + data.filename + " | ", data);
});

ftpDeploy.deploy(config, function(err) {
    if (err) console.log(err);
    else console.log('finished');
});
