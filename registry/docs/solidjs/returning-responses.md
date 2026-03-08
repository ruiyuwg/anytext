Advanced

# Returning responses

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/return-responses.mdx)

In SolidStart, it is possible to return a Response object from a server function. [`solid-router`](/solid-router) knows how to handle certain responses with its [`query`](/solid-router/reference/data-apis/query) and [`action`](/solid-router/reference/data-apis/action) APIs. For TypeScript, when returning a response using `solid-router`'s `redirect`, `reload`, or `json` helpers, they will not impact the return value of the server function.

While we suggest depending on the type of the function to handle errors differently, you can always return or throw a response.

***

## [Examples](/solid-start/advanced/return-responses#examples)

In the following example, the `hello` function will return a value of type `Promise<{ hello: string }>`:

```
import { json } from "@solidjs/router";import { GET } from "@solidjs/start";
const hello = GET(async (name: string) => {  "use server";  return json(    { hello: new Promise<string>((r) => setTimeout(() => r(name), 1000)) },    { headers: { "cache-control": "max-age=60" } }  );});
```

However, in this example, since `redirect` and `reload` return `never` as their type, `getUser` can only return a value of type `Promise<User>`:

```
export async function getUser() {  "use server";
  const session = await getSession();  const userId = session.data.userId;  if (userId === undefined) return redirect("/login");
  try {    const user: User = await db.user.findUnique({ where: { id: userId } });    // throwing can be awkward.    if (!user) return redirect("/login");    return user;  } catch {    // do stuff    throw redirect("/login");  }}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/return-responses.mdx\&page=https://docs.solidjs.com/solid-start/advanced/return-responses)

On this page

1. [Overview](#_top)
2. [Examples](#examples)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/return-responses.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/return-responses.mdx\&page=https://docs.solidjs.com/solid-start/advanced/return-responses)
