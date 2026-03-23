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

# Use containers for React.js development

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

## [Prerequisites](#prerequisites)

Complete [Containerize React.js application](https://docs.docker.com/guides/reactjs/containerize/).

***

## [Overview](#overview)

In this section, you'll learn how to set up both production and development environments for your containerized React.js application using Docker Compose. This setup allows you to serve a static production build via Nginx and to develop efficiently inside containers using a live-reloading dev server with Compose Watch.

You’ll learn how to:

- Configure separate containers for production and development
- Enable automatic file syncing using Compose Watch in development
- Debug and live-preview your changes in real-time without manual rebuilds

***

## [Automatically update services (Development Mode)](#automatically-update-services-development-mode)

Use Compose Watch to automatically sync source file changes into your containerized development environment. This provides a seamless, efficient development experience without needing to restart or rebuild containers manually.

## [Step 1: Create a development Dockerfile](#step-1-create-a-development-dockerfile)

Create a file named `Dockerfile.dev` in your project root with the following content:

```dockerfile
# =========================================
# Stage 1: Develop the React.js Application
# =========================================
ARG NODE_VERSION=24.12.0-alpine

# Use a lightweight Node.js image for development
FROM node:${NODE_VERSION} AS dev

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json package-lock.json* ./

# Install project dependencies
RUN --mount=type=cache,target=/root/.npm npm install

# Copy the rest of the application source code into the container
COPY . .

# Expose the port used by the Vite development server
EXPOSE 5173

# Use a default command, can be overridden in Docker compose.yml file
CMD ["npm", "run", "dev"]
```

This file sets up a lightweight development environment for your React app using the dev server.

### [Step 2: Update your `compose.yaml` file](#step-2-update-your-composeyaml-file)

Open your `compose.yaml` file and define two services: one for production (`react-prod`) and one for development (`react-dev`).

Here’s an example configuration for a React.js application:

```yaml
services:
  react-prod:
    build:
      context: .
      dockerfile: Dockerfile
    image: docker-reactjs-sample
    ports:
      - "8080:8080"

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
```

- The `react-prod` service builds and serves your static production app using Nginx.
- The `react-dev` service runs your React development server with live reload and hot module replacement.
- `watch` triggers file sync with Compose Watch.

> Note
>
> For more details, see the official guide: [Use Compose Watch](https://docs.docker.com/compose/how-tos/file-watch/).

### [Step 3: Update vite.config.ts to ensure it works properly inside Docker](#step-3-update-viteconfigts-to-ensure-it-works-properly-inside-docker)

To make Vite’s development server work reliably inside Docker, you need to update your vite.config.ts with the correct settings.

Open the `vite.config.ts` file in your project root and update it as follows:

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
});
```

> Note
>
> The `server` options in `vite.config.ts` are essential for running Vite inside Docker:
>
> - `host: true` allows the dev server to be accessible from outside the container.
> - `port: 5173` sets a consistent development port (must match the one exposed in Docker).
> - `strictPort: true` ensures Vite fails clearly if the port is unavailable, rather than switching silently.
>
> For full details, refer to the [Vite server configuration docs](https://vitejs.dev/config/server-options.html).

After completing the previous steps, your project directory should now contain the following files:

```text
├── docker-reactjs-sample/
│ ├── Dockerfile
│ ├── Dockerfile.dev
│ ├── .dockerignore
│ ├── compose.yaml
│ ├── nginx.conf
│ └── README.Docker.md
```

### [Step 4: Start Compose Watch](#step-4-start-compose-watch)

Run the following command from your project root to start your container in watch mode:

```console
$ docker compose watch react-dev
```

### [Step 5: Test Compose Watch with React](#step-5-test-compose-watch-with-react)

To verify that Compose Watch is working correctly:

1. Open the `src/App.tsx` file in your text editor.

2. Locate the following line:

   ```html
   Vite + React
   ```

3. Change it to:

   ```html
   Hello from Docker Compose Watch
   ```

4. Save the file.

5. Open your browser at <http://localhost:5173>.

You should see the updated text appear instantly, without needing to rebuild the container manually. This confirms that file watching and automatic synchronization are working as expected.

***

## [Summary](#summary)

In this section, you set up a complete development and production workflow for your React.js application using Docker and Docker Compose.

Here's what you achieved:

- Created a `Dockerfile.dev` to streamline local development with hot reloading
- Defined separate `react-dev` and `react-prod` services in your `compose.yaml` file
- Enabled real-time file syncing using Compose Watch for a smoother development experience
- Verified that live updates work seamlessly by modifying and previewing a component

With this setup, you're now equipped to build, run, and iterate on your React.js app entirely within containers—efficiently and consistently across environments.

***

## [Related resources](#related-resources)

Deepen your knowledge and improve your containerized development workflow with these guides:

- [Using Compose Watch](https://docs.docker.com/compose/how-tos/file-watch/) – Automatically sync source changes during development
- [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/) – Create efficient, production-ready Docker images
- [Dockerfile best practices](/build/building/best-practices/) – Write clean, secure, and optimized Dockerfiles.
- [Compose file reference](/compose/compose-file/) – Learn the full syntax and options available for configuring services in `compose.yaml`.
- [Docker volumes](/storage/volumes/) – Persist and manage data between container runs

## [Next steps](#next-steps)

In the next section, you'll learn how to run unit tests for your React.js application inside Docker containers. This ensures consistent testing across all environments and removes dependencies on local machine setup.

[Run React.js tests in a container »](https://docs.docker.com/guides/reactjs/run-tests/)

[Edit this page](https://github.com/docker/docs/edit/main/content/guides/reactjs/develop.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fguides%2freactjs%2fdevelop%2f\&labels=status%2Ftriage)

Table of contents
