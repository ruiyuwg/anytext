[Guides](/guides/debugging "Guides")[Pages](/guides/pages/built-in-pages "Pages")Custom Error

# Custom error page

Auth.js can be configured to display a custom error page when something goes wrong during the user authentication flow (sign in, sign out, etc..).

In order to override Auth.js’s `/api/auth/error` page we have to define our custom page in the AuthConfig:

Next.jsQwikSvelteKitExpress

./auth.ts

```
const authConfig: NextAuthConfig = {
...
  pages: {
    error: "/error",
  }
...
};
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

SvelteKit not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Using the [example app](https://github.com/nextauthjs/next-auth-example), let’s build a simple custom error page by creating `app/error/page.tsx`

Next.jsQwikSvelteKitExpress

app/error/page.tsx

```
export default function AuthErrorPage() {
  return <>Oops</>
}
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

SvelteKit not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Auth.js forwards the following errors as error query parameters in the URL to our custom error page:

Query Param

Example URL

Description

`Configuration`

`/auth/error?error=Configuration`

There is a problem with the server configuration. Check if your options are correct.

`AccessDenied`

`/auth/error?error=AccessDenied`

Usually occurs, when you restricted access through the signIn callback, or redirect callback.

`Verification`

`/auth/error?error=Verification`

Related to the Email provider. The token has expired or has already been used.

`Default`

`/auth/error?error=Default`

Catch all, will apply, if none of the above matched.

So now we can update our custom error page with it:

Next.jsQwikSvelteKitExpress

app/error/page.tsx

```
"use client"
 
import { useSearchParams } from "next/navigation"
 
enum Error {
  Configuration = "Configuration",
}
 
const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="rounded-sm bg-slate-100 p-1 text-xs">Configuration</code>
    </p>
  ),
}
 
export default function AuthErrorPage() {
  const search = useSearchParams()
  const error = search.get("error") as Error
 
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <a
        href="#"
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Something went wrong
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          {errorMap[error] || "Please contact us if this error persists."}
        </div>
      </a>
    </div>
  )
}
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

SvelteKit not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/guides/pages/error.mdx).

Now, when an error happens, Auth.js will redirect the user to our custom error page:

![Custom Error Page](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustom-error-page.d70cb1d2.webp&w=3840&q=75)

[Custom Signout](/guides/pages/signout "Custom Signout")[Environment Variables](/guides/environment-variables "Environment Variables")
