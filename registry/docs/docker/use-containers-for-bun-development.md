Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Bun language-specific guide](https://docs.docker.com/guides/bun/)

Learn how to containerize JavaScript applications with the Bun runtime.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg "JavaScript") JavaScript

10 minutes

[1](https://docs.docker.com/guides/bun/containerize/)

[Containerize your app](https://docs.docker.com/guides/bun/containerize/)

[2](https://docs.docker.com/guides/bun/develop/)

[Develop your app](https://docs.docker.com/guides/bun/develop/)

[3](https://docs.docker.com/guides/bun/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/bun/configure-ci-cd/)

[4](https://docs.docker.com/guides/bun/deploy/)

[Test your deployment](https://docs.docker.com/guides/bun/deploy/)

[« Back to all guides](/guides/)

# Use containers for Bun development

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete [Containerize a Bun application](https://docs.docker.com/guides/bun/containerize/).

## [Overview](#overview)

In this section, you'll learn how to set up a development environment for your containerized application. This includes:

- Configuring Compose to automatically update your running Compose services as you edit and save your code

## [Get the sample application](#get-the-sample-application)

Clone the sample application to use with this guide. Open a terminal, change directory to a directory that you want to work in, and run the following command to clone the repository:

```console
$ git clone https://github.com/dockersamples/bun-docker.git && cd bun-docker
```

## [Automatically update services](#automatically-update-services)

Use Compose Watch to automatically update your running Compose services as you edit and save your code. For more details about Compose Watch, see [Use Compose Watch](https://docs.docker.com/compose/how-tos/file-watch/).

Open your `compose.yml` file in an IDE or text editor and then add the Compose Watch instructions. The following example shows how to add Compose Watch to your `compose.yml` file.

```
 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
```

```yaml
services:
  server:
    image: bun-server
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    develop:
      watch:
        - action: rebuild
          path: .
```

Run the following command to run your application with Compose Watch.

```console
$ docker compose watch
```

Now, if you modify your `server.js` you will see the changes in real time without re-building the image.

To test it out, open the `server.js` file in your favorite text editor and change the message from `{"Status" : "OK"}` to `{"Status" : "Updated"}`. Save the file and refresh your browser at `http://localhost:3000`. You should see the updated message.

Press `ctrl+c` in the terminal to stop your application.

## [Summary](#summary)

In this section, you also learned how to use Compose Watch to automatically rebuild and run your container when you update your code.

Related information:

- [Compose file reference](/reference/compose-file/)
- [Compose file watch](https://docs.docker.com/compose/how-tos/file-watch/)
- [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/)

## [Next steps](#next-steps)

In the next section, you'll take a look at how to set up a CI/CD pipeline using GitHub Actions.

[Configure CI/CD for your Bun application »](https://docs.docker.com/guides/bun/configure-ci-cd/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/bun/develop.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fbun%2fdevelop%2f\&labels=status%2Ftriage)

Table of contents
