pipeline {
  agent any

  stages {
    stage('Build Docker') {
      steps {
        bat 'docker build -t cicd-app .'
      }
    }
  }
}
