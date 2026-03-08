Client

# mount

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/mount.mdx)

`mount` is a method that calls either [`hydrate`](/reference/rendering/hydrate) (server rendering) or [`render`](/reference/rendering/render) (client rendering) depending on the configuration. It is used in [`entry-client.tsx`](/solid-start/reference/entrypoints/entry-client) to bootstrap an application.

```
import { mount, StartClient } from "@solidjs/start/client";
mount(() => <StartClient />, document.getElementById("app")!);
```

If you set `{ ssr: false }` in the [`defineConfig`](/solid-start/reference/config/define-config), effectively deactivating hydration, then `mount` becomes the same as [`render`](/reference/rendering/render).

***

## [Parameters](/solid-start/reference/client/mount#parameters)

Prop

type

description

fn

() => JSX.Element

Function that returns the application code.

el

MountableElement

DOM Element to mount the application to

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/client/mount.mdx\&page=https://docs.solidjs.com/solid-start/reference/client/mount)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/client/mount.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/client/mount.mdx\&page=https://docs.solidjs.com/solid-start/reference/client/mount)
