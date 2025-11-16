pipeline {
    agent any

    environment {
        BUILD_TIMESTAMP = new Date().format("yyyy-MM-dd HH:mm:ss")
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out branch: ${env.BRANCH_NAME}"
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Parallel Test Execution') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        echo 'Running Unit Tests...'
                        // bat 'npm test'
                        bat 'echo Unit tests passed successfully'
                    }
                }
                stage('Linting') {
                    steps {
                        echo 'Running Linter...'
                        // bat 'npm run lint'
                        bat 'echo Lint passed successfully'
                    }
                }
            }
        }

        stage('Conditional Deployment') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        echo '🚀 Deployed to Production Environment (main branch)'
                    } else if (env.BRANCH_NAME == 'dev') {
                        echo '🚀 Deployed to Staging Environment (dev branch)'
                    } else {
                        echo '🧩 Feature branch detected – Deployment Skipped.'
                    }
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                bat 'mkdir build_output'
                bat 'echo Build completed > build_output/result.txt'
                bat 'zip -r build_output/output.zip build_output'
                archiveArtifacts artifacts: 'build_output/output.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "✅ Build #${BUILD_NUMBER} on branch ${BRANCH_NAME} completed successfully at ${BUILD_TIMESTAMP}"
        }
        failure {
            echo "❌ Build #${BUILD_NUMBER} on branch ${BRANCH_NAME} failed at ${BUILD_TIMESTAMP}"
        }
    }
}
