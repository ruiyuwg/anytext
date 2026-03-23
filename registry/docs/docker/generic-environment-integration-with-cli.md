When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Generic environment integration with CLI

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

You can create a generic environment integration by running the Docker Scout CLI client in your CI workflows. The CLI client is available as a binary on GitHub and as a container image on Docker Hub. Use the client to invoke the `docker scout environment` command to assign your images to environments.

For more information about how to use the `docker scout environment` command, refer to the [CLI reference](/reference/cli/docker/scout/environment/).

## [Examples](#examples)

Before you start, set the following environment variables in your CI system:

- `DOCKER_SCOUT_HUB_USER`: your Docker Hub username
- `DOCKER_SCOUT_HUB_PASSWORD`: your Docker Hub personal access token

Make sure the variables are accessible to your project.

Circle CI GitLab Azure DevOps Jenkins

```yaml
version: 2.1

jobs:
  record_environment:
    machine:
      image: ubuntu-2204:current
    image: namespace/repo
    steps:
      - run: |
          if [[ -z "$CIRCLE_TAG" ]]; then
            tag="$CIRCLE_TAG"
            echo "Running tag '$CIRCLE_TAG'"
          else
            tag="$CIRCLE_BRANCH"
            echo "Running on branch '$CI_COMMIT_BRANCH'"
          fi    
          echo "tag = $tag"
      - run: docker run -it \
          -e DOCKER_SCOUT_HUB_USER=$DOCKER_SCOUT_HUB_USER \
          -e DOCKER_SCOUT_HUB_PASSWORD=$DOCKER_SCOUT_HUB_PASSWORD \
          docker/scout-cli:1.0.2 environment \
          --org "<MY_DOCKER_ORG>" \
          "<ENVIRONMENT>" ${image}:${tag}
```

The following example uses the [Docker executor](https://docs.gitlab.com/runner/executors/docker.html).

```yaml
variables:
  image: namespace/repo

record_environment:
  image: docker/scout-cli:1.0.2
  script:
    - |
      if [[ -z "$CI_COMMIT_TAG" ]]; then
        tag="latest"
        echo "Running tag '$CI_COMMIT_TAG'"
      else
        tag="$CI_COMMIT_REF_SLUG"
        echo "Running on branch '$CI_COMMIT_BRANCH'"
      fi    
      echo "tag = $tag"
    - environment --org <MY_DOCKER_ORG> "PRODUCTION" ${image}:${tag}
```

```yaml
trigger:
  - main

resources:
  - repo: self

variables:
  tag: "$(Build.BuildId)"
  image: "namespace/repo"

stages:
  - stage: Docker Scout
    displayName: Docker Scout environment integration
    jobs:
      - job: Record
        displayName: Record environment
        pool:
          vmImage: ubuntu-latest
        steps:
          - task: Docker@2
          - script: docker run -it \
              -e DOCKER_SCOUT_HUB_USER=$DOCKER_SCOUT_HUB_USER \
              -e DOCKER_SCOUT_HUB_PASSWORD=$DOCKER_SCOUT_HUB_PASSWORD \
              docker/scout-cli:1.0.2 environment \
              --org "<MY_DOCKER_ORG>" \
              "<ENVIRONMENT>" $(image):$(tag)
```

```groovy
stage('Analyze image') {
    steps {
        // Install Docker Scout
        sh 'curl -sSfL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh | sh -s -- -b /usr/local/bin'
        
        // Log into Docker Hub
        sh 'echo $DOCKER_SCOUT_HUB_PASSWORD | docker login -u $DOCKER_SCOUT_HUB_USER --password-stdin'

        // Analyze and fail on critical or high vulnerabilities
        sh 'docker-scout environment --org "<MY_DOCKER_ORG>" "<ENVIRONMENT>" $IMAGE_TAG
    }
}
```

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/scout/integrations/environment/cli.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fscout%2fintegrations%2fenvironment%2fcli%2f\&labels=status%2Ftriage)

Table of contents
