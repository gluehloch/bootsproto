
var targetPath = './target/';
var targetSourcePath = targetPath + 'src/';

// Moved to my-build.json
var pathLocalDevServer = 'E:/projects/apache-vhosts/tippdiekistebier.localhost/';

module.exports = function(grunt) {
    grunt.file.defaultEncoding = 'utf8';

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-bower-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');

    grunt.loadNpmTasks('grunt-ssh');
    grunt.loadNpmTasks('grunt-ssh-deploy');

    grunt.registerTask('default', ['clean:main', 'copy:main', 'jshint', 'compress', 'copy:localDevServer']);

    grunt.initConfig({
        buildProperties: grunt.file.readJSON('my-build.json'),

        jshint: {
            all: ['Gruntfile.js', targetSourcePath + 'js/**/*.js']
        },
        compress: {
            main: {
                options: {
                    archive: 'betoffice-admin.tgz',
                    mode: 'tgz'
                },
                files: [
                    {expand: true, cwd: targetSourcePath, src: ['**/*']}
                ]
            }
        },
        copy: {
            main: {
                files: [
                    {cwd: './src/', expand: true, src: ['**/*'], dest: targetSourcePath},
                    {src: ['bower_components/**'], dest: targetSourcePath}
                ],
            },
            localDevServer: {
                files: [
                    {src: ['betoffice-admin.tgz'], dest: '<%= buildProperties.pathLocalDevServer %>betoffice-admin.tgz'}
                ],
            }
        },
        clean: {
            options: { force: true },
            main:
                ["target"],
            localDevServer:
                [pathLocalDevServer + "**"]
        },
        watch: {
            // files: [ './src/js/**/*.js'],
            files: [ './src/**'],
            tasks: [/*'jshint',*/ 'copy'/*, 'sync'*/],
            options: { interval: 5007 }
        },
        sync: {
            main: {
                files: [{
                    cwd: targetSourcePath,
                    src: [
                        '**', /* Include everything */
                        '!**/*.txt' /* but exclude txt files */
                    ],
                    dest: pathLocalDevServer,
                }],
                //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
                verbose: true // Display log messages when copying files
            }
        }
    });

    grunt.registerTask('example', 'Example: ZIP all HTML- and Javascript files.', function(arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln(this.name + ", no args");
        } else {
            grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
        }
    });

    grunt.registerTask('copy-dist', 'Copy to distribution to the dev environment', function() {
        var buildProperties = grunt.file.readJSON('my-build.json');

        grunt.log.writeln('You are running ->' + this.name + '<-');
        grunt.log.writeln('Server location ->'+  buildProperties.pathLocalDevServer + '<-');
        // TODO Disabled. The work makes the sync task.
        // TODO grunt.file.copy('betoffice-admin.tgz',  buildProperties.pathLocalDevServer + '/betoffice-admin.tgz');
    });

};
