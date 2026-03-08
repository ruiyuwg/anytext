Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Extension UI API

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

***

The extensions UI runs in a sandboxed environment and doesn't have access to any electron or nodejs APIs.

The extension UI API provides a way for the frontend to perform different actions and communicate with the Docker Desktop dashboard or the underlying system.

JavaScript API libraries, with Typescript support, are available in order to get all the API definitions in to your extension code.

- [@docker/extension-api-client](https://www.npmjs.com/package/@docker/extension-api-client) gives access to the extension API entrypoint `DockerDesktopClient`.
- [@docker/extension-api-client-types](https://www.npmjs.com/package/@docker/extension-api-client-types) can be added as a dev dependency in order to get types auto-completion in your IDE.

```Typescript
import { createDockerDesktopClient } from '@docker/extension-api-client';

export function App() {
  // obtain Docker Desktop client
  const ddClient = createDockerDesktopClient();
  // use ddClient to perform extension actions
}
```

The `ddClient` object gives access to various APIs:

- [Extension Backend](https://docs.docker.com/extensions/extensions-sdk/dev/api/backend/)
- [Docker](https://docs.docker.com/extensions/extensions-sdk/dev/api/docker/)
- [Dashboard](https://docs.docker.com/extensions/extensions-sdk/dev/api/dashboard/)
- [Navigation](https://docs.docker.com/extensions/extensions-sdk/dev/api/dashboard-routes-navigation/)

See also the [Extensions API reference](https://docs.docker.com/reference/api/extensions-sdk/).

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/extensions/extensions-sdk/dev/api/overview.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fextensions%2fextensions-sdk%2fdev%2fapi%2foverview%2f\&labels=status%2Ftriage)
