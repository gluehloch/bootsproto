pipeline {
    agent any
    /*
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    } 
    */
    stages {
        stage('Build') { 
            steps {
                echo 'Start build...'
                sh 'nodejs -v'
                sh 'npm -v'
                sh 'java -version'
                sh 'javac -version'
                sh 'npm install'
                sh 'npm uninstall @angular/cli'
                // sh 'npm cache clean'
                sh 'npm install @angular/cli@latest'
                sh 'npm run ng -- build'
            }
        }
        stage('Test') { 
            steps {
                echo 'Start test...'
                // 
            }
        }
        stage('Deploy') { 
            steps {
                echo 'Start deploy ...'
                ftpPublisher alwaysPublishFromMaster: true, continueOnError: false, failOnError: false, publishers: [
                    [configName: 'andre-winkler-prelive', transfers: [
                        [asciiMode: false,
                        cleanRemote: false,
                        excludes: '',
                        flatten: false,
                        makeEmptyDirs: false,
                        noDefaultExcludes: false,
                        patternSeparator: '[, ]+',
                        remoteDirectory: "/www/andre-winkler-prelive",
                        remoteDirectorySDF: false,
                        removePrefix: '',
                        sourceFiles: './dist/angularapp/**.*, ./dist/angularapp/**.txt']
                    ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                ]                
            }
        }
    }
}
