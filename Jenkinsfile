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
                sh 'npm build'
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
            }
        }
    }
}
