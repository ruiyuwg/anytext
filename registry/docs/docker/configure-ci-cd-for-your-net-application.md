When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[.NET language-specific guide](https://docs.docker.com/guides/dotnet/)

Learn how to containerize .NET applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg "C#") C#

20 minutes

[1](https://docs.docker.com/guides/dotnet/containerize/)

[Containerize your app](https://docs.docker.com/guides/dotnet/containerize/)

[2](https://docs.docker.com/guides/dotnet/develop/)

[Develop your app](https://docs.docker.com/guides/dotnet/develop/)

[3](https://docs.docker.com/guides/dotnet/run-tests/)

[Run your tests](https://docs.docker.com/guides/dotnet/run-tests/)

[4](https://docs.docker.com/guides/dotnet/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/dotnet/configure-ci-cd/)

[5](https://docs.docker.com/guides/dotnet/deploy/)

[Test your deployment](https://docs.docker.com/guides/dotnet/deploy/)

[« Back to all guides](/guides/)

# Configure CI/CD for your .NET application

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete all the previous sections of this guide, starting with [Containerize a .NET application](https://docs.docker.com/guides/dotnet/containerize/). You must have a [GitHub](https://github.com/signup) account and a verified [Docker](https://hub.docker.com/signup) account to complete this section.

## [Overview](#overview)

In this section, you'll learn how to set up and use GitHub Actions to build and test your Docker image as well as push it to Docker Hub. You will complete the following steps:

1. Create a new repository on GitHub.
2. Define the GitHub Actions workflow.
3. Run the workflow.

## [Step one: Create the repository](#step-one-create-the-repository)

Create a GitHub repository, configure the Docker Hub credentials, and push your source code.

1. [Create a new repository](https://github.com/new) on GitHub.

2. Open the repository **Settings**, and go to **Secrets and variables** > **Actions**.

3. Create a new **Repository variable** named `DOCKER_USERNAME` and your Docker ID as a value.

4. Create a new [Personal Access Token (PAT)](https://docs.docker.com/security/access-tokens/#create-an-access-token) for Docker Hub. You can name this token `docker-tutorial`. Make sure access permissions include Read and Write.

5. Add the PAT as a **Repository secret** in your GitHub repository, with the name `DOCKERHUB_TOKEN`.

6. In your local repository on your machine, run the following command to change the origin to the repository you just created. Make sure you change `your-username` to your GitHub username and `your-repository` to the name of the repository you created.

   ```console
   $ git remote set-url origin https://github.com/your-username/your-repository.git
   ```

7. In your local repository on your machine, run the following command to rename the branch to main.

   ```console
   $ git branch -M main
   ```

8. Run the following commands to stage, commit, and then push your local repository to GitHub.

   ```console
   $ git add -A
   $ git commit -m "my first commit"
   $ git push -u origin main
   ```

## [Step two: Set up the workflow](#step-two-set-up-the-workflow)

Set up your GitHub Actions workflow for building, testing, and pushing the image to Docker Hub.

1. Go to your repository on GitHub and then select the **Actions** tab.

2. Select **set up a workflow yourself**.

   This takes you to a page for creating a new GitHub actions workflow file in your repository, under `.github/workflows/main.yml` by default.

3. In the editor window, copy and paste the following YAML configuration.

   ```yaml
   name: ci

   on:
     push:
       branches:
         - main

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Login to Docker Hub
           uses: docker/login-action@v4
           with:
             username: ${{ vars.DOCKER_USERNAME }}
             password: ${{ secrets.DOCKERHUB_TOKEN }}

         - name: Set up Docker Buildx
           uses: docker/setup-buildx-action@v4

         - name: Build and test
           uses: docker/build-push-action@v7
           with:
             target: build
             load: true

         - name: Build and push
           uses: docker/build-push-action@v7
           with:
             platforms: linux/amd64,linux/arm64
             push: true
             target: final
             tags: ${{ vars.DOCKER_USERNAME }}/${{ github.event.repository.name }}:latest
   ```

   For more information about the YAML syntax for `docker/build-push-action`, refer to the [GitHub Action README](https://github.com/docker/build-push-action/blob/master/README.md).

## [Step three: Run the workflow](#step-three-run-the-workflow)

Save the workflow file and run the job.

1. Select **Commit changes...** and push the changes to the `main` branch.

   After pushing the commit, the workflow starts automatically.

2. Go to the **Actions** tab. It displays the workflow.

   Selecting the workflow shows you the breakdown of all the steps.

3. When the workflow is complete, go to your [repositories on Docker Hub](https://hub.docker.com/repositories).

   If you see the new repository in that list, it means the GitHub Actions successfully pushed the image to Docker Hub.

## [Summary](#summary)

In this section, you learned how to set up a GitHub Actions workflow for your application.

Related information:

- [Introduction to GitHub Actions](https://docs.docker.com/guides/gha/)
- [Docker Build GitHub Actions](https://docs.docker.com/build/ci/github-actions/)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

## [Next steps](#next-steps)

Next, learn how you can locally test and debug your workloads on Kubernetes before deploying.

[Test your .NET deployment »](https://docs.docker.com/guides/dotnet/deploy/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/dotnet/configure-ci-cd.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fdotnet%2fconfigure-ci-cd%2f\&labels=status%2Ftriage)

Table of contents
