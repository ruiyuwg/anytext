Advanced

# Auth

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/auth.mdx)

Server functions can be used to protect sensitive resources like user data.

```
"use server"
async function getPrivatePosts() {  const user = await getUser()  if(!user) {    return null  // or throw an error  }
  return db.getPosts({ userId: user.id, private: true })}
```

The `getUser` function can be [implemented using sessions](/solid-start/advanced/session).

***

## [Protected Routes](/solid-start/advanced/auth#protected-routes)

Routes can be protected by checking the user or session object during data fetching. This example uses [Solid Router](/solid-router).

```
const getPrivatePosts = query(async function() {  "use server"  const user = await getUser()  if(!user) {    throw redirect("/login");  }
  return db.getPosts({ userId: user.id, private: true })})
export default function Page() {  const posts = createAsync(() => getPrivatePosts(), { deferStream: true });}
```

Once the user hits this route, the router will attempt to fetch `getPrivatePosts` data. If the user is not signed in, `getPrivatePosts` will throw and the router will redirect to the login page.

To prevent errors when opening the page directly, set `deferStream: true`. This would ensure `getPrivatePosts` resolves before the page loads since server-side redirects cannot occur after streaming has started.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/auth.mdx\&page=https://docs.solidjs.com/solid-start/advanced/auth)

On this page

1. [Overview](#_top)
2. [Protected Routes](#protected-routes)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/auth.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/auth.mdx\&page=https://docs.solidjs.com/solid-start/advanced/auth)
