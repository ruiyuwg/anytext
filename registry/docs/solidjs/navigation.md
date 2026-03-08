Concepts

# Navigation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/navigation.mdx)

When using Solid Router, you can use the standard standard HTML [`<a>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a), which triggers [soft navigation](/solid-router/reference/components/a#soft-navigation). In addition to using this, Solid Router offers other options for navigating between routes:

- The [`<A>` component](/solid-router/reference/components/a).
- The [`useNavigate` primitive](/solid-router/reference/primitives/use-navigate).
- The [`redirect` function](/solid-router/reference/response-helpers/redirect).

***

## [`<A>` component](/solid-router/concepts/navigation#a-component)

The `<A>` component extends the native `<a>` element by automatically applying the base URL path and, additionally, supports relative paths.

```
import { A } from "@solidjs/router";
function DashboardPage() {  return (    <main>      <nav>        <A href="/">Home</A>      </nav>      {/* This is a relative path that, from /dashboard, links to /dashboard/users */}      <A href="users">Users</A>    </main>  );}
```

See the [`<A>` API reference](/solid-router/reference/components/a) for more information.

### [Styling](/solid-router/concepts/navigation#styling)

The `<A>` component allows you to style links based on their active state using the `activeClass` and `inactiveClass` props. When provided, these props apply the corresponding CSS classes to the link. If omitted, the default classes `active` and `inactive` are used.

By default, a link is considered active when the current route matches the link's `href` or any of its descendant routes. For example, a link with `href="/dashboard"` is active when the current route is `/dashboard`, `/dashboard/users`, or `/dashboard/users/1/profile`.

To match an exact route, the prop `end` can be used. When `true`, it ensures that the link is only considered active if the `href` exactly matches the current route. This is useful for root route links (href="/"), which might otherwise match all routes.

```
import { A } from "@solidjs/router";
function Navbar() {  return (    <nav>      <A href="/" end={true}>        Home      </A>      <A        href="/login"        activeClass="text-blue-900"        inactiveClass="text-blue-500"      >        Login      </A>    </nav>  );}
```

***

## [`useNavigate` primitive](/solid-router/concepts/navigation#usenavigate-primitive)

The `useNavigate` primitive allows for programmatically navigating to a specified route.

```
import { useNavigate } from "@solidjs/router";
function LoginPage() {  const navigate = useNavigate();
  return (    <button      onClick={() => {        // Login logic        navigate("/dashboard", { replace: true });      }}    >      Login    </button>  );}
```

This example redirects the user to `/dashboard` after login. By using `replace: true`, the login page is removed from the browser's history stack and replaced with the `/dashboard` route. This prevents the user from navigating back to the login page using the back button.

See the [`useNavigate` API reference](/solid-router/reference/primitives/use-navigate) for more information.

***

## [`redirect` function](/solid-router/concepts/navigation#redirect-function)

The `redirect` function returns a [`Response` object](https://developer.mozilla.org/en-US/docs/Web/API/Response), which enables navigation to a specified route within [query](/solid-router/reference/data-apis/query) or [action](/solid-router/reference/data-apis/action).

```
import { action, redirect } from "@solidjs/router";
const logout = action(async () => {  localStorage.remove("token");  throw redirect("/");});
```

See the [`redirect` API reference](/solid-router/reference/response-helpers/redirect) for more information.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/navigation.mdx\&page=https://docs.solidjs.com/solid-router/concepts/navigation)

On this page

1. [Overview](#_top)
2. [ component](#a-component)
   1. [Styling](#styling)
3. [useNavigate primitive](#usenavigate-primitive)
4. [redirect function](#redirect-function)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/navigation.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/navigation.mdx\&page=https://docs.solidjs.com/solid-router/concepts/navigation)
