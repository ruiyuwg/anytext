Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Integrate Docker Scout with Jenkins

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

You can add the following stage and steps definition to a `Jenkinsfile` to run Docker Scout as part of a Jenkins pipeline. The pipeline needs a `DOCKER_HUB` credential containing the username and password for authenticating to Docker Hub. It also needs an environment variable defined for the image and tag.

```groovy
pipeline {
    agent {
        // Agent details
    }

    environment {
        DOCKER_HUB = credentials('jenkins-docker-hub-credentials')
        IMAGE_TAG  = 'myorg/scout-demo-service:latest'
    }

    stages {
        stage('Analyze image') {
            steps {
                // Install Docker Scout
                sh 'curl -sSfL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh | sh -s -- -b /usr/local/bin'

                // Log into Docker Hub
                sh 'echo $DOCKER_HUB_PSW | docker login -u $DOCKER_HUB_USR --password-stdin'

                // Analyze and fail on critical or high vulnerabilities
                sh 'docker-scout cves $IMAGE_TAG --exit-code --only-severity critical,high'
            }
        }
    }
}
```

This installs Docker Scout, logs into Docker Hub, and then runs Docker Scout to generate a CVE report for an image and tag. It only shows critical or high-severity vulnerabilities.

> Note
>
> If you're seeing a `permission denied` error related to the image cache, try setting the [`DOCKER_SCOUT_CACHE_DIR`](https://docs.docker.com/scout/how-tos/configure-cli/) environment variable to a writable directory. Or alternatively, disable local caching entirely with `DOCKER_SCOUT_NO_CACHE=true`.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/scout/integrations/ci/jenkins.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fscout%2fintegrations%2fci%2fjenkins%2f\&labels=status%2Ftriage)
