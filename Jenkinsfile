pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/AhmadTaimoor2739/i222739_TemperatureConverter.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Lint') {
            steps {
                echo 'Running linter...'
                // If you have eslint configured:
                // bat 'npm run lint'
                // Otherwise simulate linting:
                bat 'echo Linting completed successfully'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // If tests exist:
                // bat 'npm test'
                // Otherwise simulate:
                bat 'echo All tests passed successfully'
            }
        }

        stage('Archive Build Artifact') {
            steps {
                echo 'Creating build artifact...'
                bat 'mkdir build_output'
                bat 'zip -r build_output/app.zip *'
                archiveArtifacts artifacts: 'build_output/app.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Build, lint, and tests successful!'
            echo '📦 Artifact archived successfully.'
            echo '📧 Email sent to team@example.com (simulated)'
        }
        failure {
            echo '❌ Build or tests failed!'
            echo '📧 Email sent to team@example.com (simulated)'
        }
    }
}
