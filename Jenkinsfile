pipeline {

    agent any

    tools {

        nodejs 'NodeJS-26'

    }

    stages {

        stage('Checkout') {

            steps {

                checkout scm

            }

        }

        stage('Install Dependencies') {

            steps {

                bat 'call npm install'

            }

        }

        stage('Install Browsers') {

            steps {

                bat 'call npx playwright install'

            }

        }

        stage('Run Playwright Tests') {

            steps {

                
                bat 'call npx playwright test login.spec.js --headed --project=chromium'
                bat 'call npx playwright test dashboard.spec.js --headed --project=chromium'

            }
            

        }
        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
        }
    }
}


