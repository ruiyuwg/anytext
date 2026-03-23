When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Guides](https://docs.docker.com/guides/)

- [Get started](/get-started/)
- [Manuals](/manuals/)
- [Reference](/reference/)

[React.js language-specific guide](https://docs.docker.com/guides/reactjs/)

This guide explains how to containerize React.js applications using Docker.

![](https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg "JavaScript") JavaScript

20 minutes

[1](https://docs.docker.com/guides/reactjs/containerize/)

[Containerize](https://docs.docker.com/guides/reactjs/containerize/)

[2](https://docs.docker.com/guides/reactjs/develop/)

[Develop your app](https://docs.docker.com/guides/reactjs/develop/)

[3](https://docs.docker.com/guides/reactjs/run-tests/)

[Run your tests](https://docs.docker.com/guides/reactjs/run-tests/)

[4](https://docs.docker.com/guides/reactjs/configure-github-actions/)

[Automate your builds with GitHub Actions](https://docs.docker.com/guides/reactjs/configure-github-actions/)

[5](https://docs.docker.com/guides/reactjs/deploy/)

[Test your deployment](https://docs.docker.com/guides/reactjs/deploy/)

[« Back to all guides](/guides/)

# Run React.js tests in a container

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete all the previous sections of this guide, starting with [Containerize React.js application](https://docs.docker.com/guides/reactjs/containerize/).

## [Overview](#overview)

Testing is a critical part of the development process. In this section, you'll learn how to:

- Run unit tests using Vitest inside a Docker container.
- Use Docker Compose to run tests in an isolated, reproducible environment.

You’ll use [Vitest](https://vitest.dev) — a blazing fast test runner designed for Vite — along with [Testing Library](https://testing-library.com/) for assertions.

***

## [Run tests during development](#run-tests-during-development)

`docker-reactjs-sample` application includes a sample test file at location:

```console
$ src/App.test.tsx
```

This file uses Vitest and React Testing Library to verify the behavior of `App` component.

### [Step 1: Install Vitest and React Testing Library](#step-1-install-vitest-and-react-testing-library)

If you haven’t already added the necessary testing tools, install them by running:

```console
$ npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

Then, update the scripts section of your `package.json` file to include the following:

```json
"scripts": {
  "test": "vitest run"
}
```

***

### [Step 2: Configure Vitest](#step-2-configure-vitest)

Update `vitest.config.ts` file in your project root with the following configuration:

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
13
14
15
16
17
18
19
```

```ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
});
```

> Note
>
> The `test` options in `vitest.config.ts` are essential for reliable testing inside Docker:
>
> - `environment: "jsdom"` simulates a browser-like environment for rendering and DOM interactions.
> - `setupFiles: "./src/setupTests.ts"` loads global configuration or mocks before each test file (optional but recommended).
> - `globals: true` enables global test functions like `describe`, `it`, and `expect` without importing them.
>
> For more details, see the official [Vitest configuration docs](https://vitest.dev/config/).

### [Step 3: Update compose.yaml](#step-3-update-composeyaml)

Add a new service named `react-test` to your `compose.yaml` file. This service allows you to run your test suite in an isolated containerized environment.

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
13
14
15
16
17
18
19
20
21
22
23
24
25
26
```

```yaml
services:
  react-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    develop:
      watch:
        - action: sync
          path: .
          target: /app

  react-prod:
    build:
      context: .
      dockerfile: Dockerfile
    image: docker-reactjs-sample
    ports:
      - "8080:8080"

  react-test:
    build:
      context: .
      dockerfile: Dockerfile.dev
    command: ["npm", "run", "test"]
```

The react-test service reuses the same `Dockerfile.dev` used for [development](https://docs.docker.com/guides/reactjs/develop/) and overrides the default command to run tests with `npm run test`. This setup ensures a consistent test environment that matches your local development configuration.

After completing the previous steps, your project directory should contain the following files:

```text
├── docker-reactjs-sample/
│ ├── Dockerfile
│ ├── Dockerfile.dev
│ ├── .dockerignore
│ ├── compose.yaml
│ ├── nginx.conf
│ └── README.Docker.md
```

### [Step 4: Run the tests](#step-4-run-the-tests)

To execute your test suite inside the container, run the following command from your project root:

```console
$ docker compose run --rm react-test
```

This command will:

- Start the `react-test` service defined in your `compose.yaml` file.
- Execute the `npm run test` script using the same environment as development.
- Automatically remove the container after the tests complete [`docker compose run --rm`](/reference/cli/docker/compose/run/) command.

> Note
>
> For more information about Compose commands, see the [Compose CLI reference](/reference/cli/docker/compose/).

***

## [Summary](#summary)

In this section, you learned how to run unit tests for your React.js application inside a Docker container using Vitest and Docker Compose.

What you accomplished:

- Installed and configured Vitest and React Testing Library for testing React components.
- Created a `react-test` service in `compose.yaml` to isolate test execution.
- Reused the development `Dockerfile.dev` to ensure consistency between dev and test environments.
- Ran tests inside the container using `docker compose run --rm react-test`.
- Ensured reliable, repeatable testing across environments without relying on local machine setup.

***

## [Related resources](#related-resources)

Explore official references and best practices to sharpen your Docker testing workflow:

- [Dockerfile reference](/reference/dockerfile/) – Understand all Dockerfile instructions and syntax.
- [Best practices for writing Dockerfiles](/develop/develop-images/dockerfile_best-practices/) – Write efficient, maintainable, and secure Dockerfiles.
- [Compose file reference](/compose/compose-file/) – Learn the full syntax and options available for configuring services in `compose.yaml`.
- [`docker compose run` CLI reference](/reference/cli/docker/compose/run/) – Run one-off commands in a service container.

***

## [Next steps](#next-steps)

Next, you’ll learn how to set up a CI/CD pipeline using GitHub Actions to automatically build and test your React.js application in a containerized environment. This ensures your code is validated on every push or pull request, maintaining consistency and reliability across your development workflow.

[Automate your builds with GitHub Actions »](https://docs.docker.com/guides/reactjs/configure-github-actions/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/reactjs/run-tests.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2freactjs%2frun-tests%2f\&labels=status%2Ftriage)

Table of contents
