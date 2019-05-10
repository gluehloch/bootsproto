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
                sh 'node  -v'
                sh 'npm -v'
                sh 'java -version'
                sh 'javac -version'
                sh 'npm install'
                sh 'npm uninstall @angular/cli'
                // sh 'npm cache clean'
                sh 'npm install @angular/cli@latest'
                sh 'ng build --prod'
            }
        }
        stage('Test') { 
            steps {
                echo 'Start test...'
                // 
            }
        }
        stage('Deploy Prelive') { 
            steps {
                echo 'Start deploy prelive ...'
                ftpPublisher masterNodeName: 'master', alwaysPublishFromMaster: true, continueOnError: false, failOnError: false,
                    paramPublish:[parameterName:''],
                    publishers: [
                        [configName: 'andre-winkler-prelive', transfers: [
                            [asciiMode: false,
                            cleanRemote: false,
                            excludes: '',
                            flatten: true,
                            makeEmptyDirs: false,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: '',
                            remoteDirectorySDF: false,
                            removePrefix: '',
                            sourceFiles: 'dist/angularapp/**.*, dist/angularapp/**.txt, src/profil_andre_winkler.*']
                        ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                    ]
            }
        }
        stage('Deploy Production') { 
            steps {
                echo 'Start deploy production ...'
                ftpPublisher masterNodeName: 'master', alwaysPublishFromMaster: true, continueOnError: false, failOnError: false,
                    paramPublish:[parameterName:''],
                    publishers: [
                        [configName: 'andre-winkler', transfers: [
                            [asciiMode: false,
                            cleanRemote: false,
                            excludes: '',
                            flatten: true,
                            makeEmptyDirs: false,
                            noDefaultExcludes: false,
                            patternSeparator: '[, ]+',
                            remoteDirectory: '',
                            remoteDirectorySDF: false,
                            removePrefix: '',
                            sourceFiles: 'dist/angularapp/**.*, dist/angularapp/**.txt, src/profil_andre_winkler.*']
                        ], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true]
                ]                
            }
        }        
    }
}
