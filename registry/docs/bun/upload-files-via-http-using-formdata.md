# Upload files via HTTP using FormData

Source: https://bun.com/docs/guides/http/file-uploads

To upload files via HTTP with Bun, use the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) API. Let's start with a HTTP server that serves a simple HTML web form.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const url = new URL(req.url);

    // return index.html for root path
    if (url.pathname === "/")
      return new Response(Bun.file("index.html"), {
        headers: {
          "Content-Type": "text/html",
        },
      });

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Listening on http://localhost:${server.port}`);
```

***

We can define our HTML form in another file, `index.html`.

```html index.html icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Form</title>
  </head>
  <body>
    <form action="/action" method="post" enctype="multipart/form-data">
      <input type="text" name="name" placeholder="Name" />
      <input type="file" name="profilePicture" />
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```

***

At this point, we can run the server and visit [`localhost:4000`](http://localhost:4000) to see our form.

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
Listening on http://localhost:4000
```

***

Our form will send a `POST` request to the `/action` endpoint with the form data. Let's handle that request in our server.

First we use the [`.formData()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/formData) method on the incoming `Request` to asynchronously parse its contents to a `FormData` instance. Then we can use the [`.get()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get) method to extract the value of the `name` and `profilePicture` fields. Here `name` corresponds to a `string` and `profilePicture` is a `Blob`.

Finally, we write the `Blob` to disk using [`Bun.write()`](/runtime/file-io#writing-files-bun-write).

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const url = new URL(req.url);

    // return index.html for root path
    if (url.pathname === "/")
      return new Response(Bun.file("index.html"), {
        headers: {
          "Content-Type": "text/html",
        },
      });

    // parse formdata at /action // [!code ++]
    if (url.pathname === "/action") { // [!code ++]
      const formdata = await req.formData(); // [!code ++]
      const name = formdata.get("name"); // [!code ++]
      const profilePicture = formdata.get("profilePicture"); // [!code ++]
      if (!profilePicture) throw new Error("Must upload a profile picture."); // [!code ++]
      // write profilePicture to disk // [!code ++]
      await Bun.write("profilePicture.png", profilePicture); // [!code ++]
      return new Response("Success"); // [!code ++]
    } // [!code ++]

    return new Response("Not Found", { status: 404 });
  },
});
```

# Hot reload an HTTP server

Source: https://bun.com/docs/guides/http/hot

Bun supports the [`--hot`](/runtime/watch-mode#hot-mode) flag to run a file with hot reloading enabled. When any module or file changes, Bun re-runs the file.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --hot run index.ts
```

***

Bun detects when you are running an HTTP server with `Bun.serve()`. It reloads your fetch handler when source files change, *without* restarting the `bun` process. This makes hot reloads nearly instantaneous.

Note that this doesn't reload the page on your browser.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello world");
  },
});
```
