When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[Java language-specific guide](https://docs.docker.com/guides/java/)

This guide demonstrates how to containerize Java applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg "Java") Java

20 minutes

[1](https://docs.docker.com/guides/java/containerize/)

[Containerize your app](https://docs.docker.com/guides/java/containerize/)

[2](https://docs.docker.com/guides/java/develop/)

[Develop your app](https://docs.docker.com/guides/java/develop/)

[3](https://docs.docker.com/guides/java/run-tests/)

[Run your tests](https://docs.docker.com/guides/java/run-tests/)

[4](https://docs.docker.com/guides/java/configure-ci-cd/)

[Configure CI/CD](https://docs.docker.com/guides/java/configure-ci-cd/)

[5](https://docs.docker.com/guides/java/deploy/)

[Test your deployment](https://docs.docker.com/guides/java/deploy/)

[« Back to all guides](/guides/)

# Run your Java tests

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete all the previous sections of this guide, starting with [Containerize a Java application](https://docs.docker.com/guides/java/containerize/).

## [Overview](#overview)

Testing is an essential part of modern software development. Testing can mean a lot of things to different development teams. There are unit tests, integration tests and end-to-end testing. In this guide you'll take a look at running your unit tests in Docker.

### [Multi-stage Dockerfile for testing](#multi-stage-dockerfile-for-testing)

In the following example, you'll pull the testing commands into your Dockerfile. Replace the contents of your Dockerfile with the following.

```dockerfile
# syntax=docker/dockerfile:1

FROM eclipse-temurin:21-jdk-jammy as base
WORKDIR /build
COPY --chmod=0755 mvnw mvnw
COPY .mvn/ .mvn/

FROM base as test
WORKDIR /build
COPY ./src src/
RUN --mount=type=bind,source=pom.xml,target=pom.xml \
    --mount=type=cache,target=/root/.m2 \
    ./mvnw test

FROM base as deps
WORKDIR /build
RUN --mount=type=bind,source=pom.xml,target=pom.xml \
    --mount=type=cache,target=/root/.m2 \
    ./mvnw dependency:go-offline -DskipTests

FROM deps as package
WORKDIR /build
COPY ./src src/
RUN --mount=type=bind,source=pom.xml,target=pom.xml \
    --mount=type=cache,target=/root/.m2 \
    ./mvnw package -DskipTests && \
    mv target/$(./mvnw help:evaluate -Dexpression=project.artifactId -q -DforceStdout)-$(./mvnw help:evaluate -Dexpression=project.version -q -DforceStdout).jar target/app.jar

FROM package as extract
WORKDIR /build
RUN java -Djarmode=layertools -jar target/app.jar extract --destination target/extracted

FROM extract as development
WORKDIR /build
RUN cp -r /build/target/extracted/dependencies/. ./
RUN cp -r /build/target/extracted/spring-boot-loader/. ./
RUN cp -r /build/target/extracted/snapshot-dependencies/. ./
RUN cp -r /build/target/extracted/application/. ./
ENV JAVA_TOOL_OPTIONS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:8000"
CMD [ "java", "-Dspring.profiles.active=postgres", "org.springframework.boot.loader.launch.JarLauncher" ]

FROM eclipse-temurin:21-jre-jammy AS final
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser
USER appuser
COPY --from=extract build/target/extracted/dependencies/ ./
COPY --from=extract build/target/extracted/spring-boot-loader/ ./
COPY --from=extract build/target/extracted/snapshot-dependencies/ ./
COPY --from=extract build/target/extracted/application/ ./
EXPOSE 8080
ENTRYPOINT [ "java", "-Dspring.profiles.active=postgres", "org.springframework.boot.loader.launch.JarLauncher" ]
```

First, you added a new base stage. In the base stage, you added common instructions that both the test and deps stage will need.

Next, you added a new test stage labeled `test` based on the base stage. In this stage you copied in the necessary source files and then specified `RUN` to run `./mvnw test`. Instead of using `CMD`, you used `RUN` to run the tests. The reason is that the `CMD` instruction runs when the container runs, and the `RUN` instruction runs when the image is being built. When using `RUN`, the build will fail if the tests fail.

Finally, you updated the deps stage to be based on the base stage and removed the instructions that are now in the base stage.

Run the following command to build a new image using the test stage as the target and view the test results. Include `--progress=plain` to view the build output, `--no-cache` to ensure the tests always run, and `--target test` to target the test stage.

Now, build your image and run your tests. You'll run the `docker build` command and add the `--target test` flag so that you specifically run the test build stage.

```console
$ docker build -t java-docker-image-test --progress=plain --no-cache --target=test .
```

You should see output containing the following

```console
...

#15 101.3 [WARNING] Tests run: 45, Failures: 0, Errors: 0, Skipped: 2
#15 101.3 [INFO]
#15 101.3 [INFO] ------------------------------------------------------------------------
#15 101.3 [INFO] BUILD SUCCESS
#15 101.3 [INFO] ------------------------------------------------------------------------
#15 101.3 [INFO] Total time:  01:39 min
#15 101.3 [INFO] Finished at: 2024-02-01T23:24:48Z
#15 101.3 [INFO] ------------------------------------------------------------------------
#15 DONE 101.4s
```

## [Next steps](#next-steps)

In the next section, you’ll take a look at how to set up a CI/CD pipeline using GitHub Actions.

[Configure CI/CD for your Java application »](https://docs.docker.com/guides/java/configure-ci-cd/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/java/run-tests.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2fjava%2frun-tests%2f\&labels=status%2Ftriage)

Table of contents
