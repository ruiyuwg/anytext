Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Go language-specific guide](https://docs.docker.com/guides/golang/)

This guide teaches you how to containerize Go applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg "Go") Go

30 minutes

[1](https://docs.docker.com/guides/golang/build-images/)

[Build images](https://docs.docker.com/guides/golang/build-images/)

[2](https://docs.docker.com/guides/golang/run-containers/)

[Run containers](https://docs.docker.com/guides/golang/run-containers/)

[3](https://docs.docker.com/guides/golang/develop/)

[Develop your app](https://docs.docker.com/guides/golang/develop/)

[4](https://docs.docker.com/guides/golang/run-tests/)

[Run your tests](https://docs.docker.com/guides/golang/run-tests/)

[5](https://docs.docker.com/guides/golang/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/golang/configure-ci-cd/)

[6](https://docs.docker.com/guides/golang/deploy/)

[Test your deployment](https://docs.docker.com/guides/golang/deploy/)

[« Back to all guides](/guides/)

# Run your tests using Go test

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete the [Build your Go image](https://docs.docker.com/guides/golang/build-images/) section of this guide.

## [Overview](#overview)

Testing is an essential part of modern software development. Testing can mean a lot of things to different development teams. There are unit tests, integration tests and end-to-end testing. In this guide you take a look at running your unit tests in Docker when building.

For this section, use the `docker-gs-ping` project that you cloned in [Build your Go image](https://docs.docker.com/guides/golang/build-images/).

## [Run tests when building](#run-tests-when-building)

To run your tests when building, you need to add a test stage to the `Dockerfile.multistage`. The `Dockerfile.multistage` in the sample application's repository already has the following content:

```dockerfile
# syntax=docker/dockerfile:1

# Build the application from source
FROM golang:1.19 AS build-stage

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY *.go ./

RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

# Run the tests in the container
FROM build-stage AS run-test-stage
RUN go test -v ./...

# Deploy the application binary into a lean image
FROM gcr.io/distroless/base-debian11 AS build-release-stage

WORKDIR /

COPY --from=build-stage /docker-gs-ping /docker-gs-ping

EXPOSE 8080

USER nonroot:nonroot

ENTRYPOINT ["/docker-gs-ping"]
```

Run the following command to build an image using the `run-test-stage` stage as the target and view the test results. Include `--progress plain` to view the build output, `--no-cache` to ensure the tests always run, and `--target run-test-stage` to target the test stage.

```console
$ docker build -f Dockerfile.multistage -t docker-gs-ping-test --progress plain --no-cache --target run-test-stage .
```

You should see output containing the following.

```text
#13 [run-test-stage 1/1] RUN go test -v ./...
#13 4.915 === RUN   TestIntMinBasic
#13 4.915 --- PASS: TestIntMinBasic (0.00s)
#13 4.915 === RUN   TestIntMinTableDriven
#13 4.915 === RUN   TestIntMinTableDriven/0,1
#13 4.915 === RUN   TestIntMinTableDriven/1,0
#13 4.915 === RUN   TestIntMinTableDriven/2,-2
#13 4.915 === RUN   TestIntMinTableDriven/0,-1
#13 4.915 === RUN   TestIntMinTableDriven/-1,0
#13 4.915 --- PASS: TestIntMinTableDriven (0.00s)
#13 4.915     --- PASS: TestIntMinTableDriven/0,1 (0.00s)
#13 4.915     --- PASS: TestIntMinTableDriven/1,0 (0.00s)
#13 4.915     --- PASS: TestIntMinTableDriven/2,-2 (0.00s)
#13 4.915     --- PASS: TestIntMinTableDriven/0,-1 (0.00s)
#13 4.915     --- PASS: TestIntMinTableDriven/-1,0 (0.00s)
#13 4.915 PASS
```

## [Next steps](#next-steps)

In this section, you learned how to run tests when building your image. Next, you’ll learn how to set up a CI/CD pipeline using GitHub Actions.

[Configure CI/CD for your Go application »](https://docs.docker.com/guides/golang/configure-ci-cd/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/golang/run-tests.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fgolang%2frun-tests%2f\&labels=status%2Ftriage)

Table of contents
