## Changed Defaults

[Section titled “Changed Defaults”](#changed-defaults)

Some default behavior has changed in Astro v5.0 and your project code may need updating to account for these changes.

In most cases, the only action needed is to review your existing project’s deployment and ensure that it continues to function as you expect, making updates to your code as necessary. In some cases, there may be a configuration setting to allow you to continue to use the previous default behavior.

### CSRF protection is now set by default

[Section titled “CSRF protection is now set by default”](#csrf-protection-is-now-set-by-default)

[Implementation PR: change default value of checkOrigin (#11788)](https://github.com/withastro/astro/pull/11788)

In Astro v4.x, The default value of `security.checkOrigin` was `false`. Previously, you had to explicitly set this value to `true` to enable Cross-Site Request Forgery (CSRF) protection.

Astro v5.0 changes the default value of this option to `true`, and will automatically check that the “origin” header matches the URL sent by each request in on-demand rendered pages.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-10)

If you had previously configured `security.checkOrigin: true`, you no longer need this line in your Astro config. This is now the default.

To disable this behavior, you must explicitly set `security.checkOrigin: false`.

astro.config.mjs

```diff
export default defineConfig({
  output: "server",
+  security: {
+    checkOrigin: false
+  }
})
```

Read more about [security configuration options](/en/reference/configuration-reference/#security)

### Route priority order for injected routes and redirects

[Section titled “Route priority order for injected routes and redirects”](#route-priority-order-for-injected-routes-and-redirects)

[Implementation PR: Remove legacy route prioritization (#11798)](https://github.com/withastro/astro/pull/11798)

In Astro v4.x, `experimental.globalRoutePriority` was an optional flag that ensured that injected routes, file-based routes, and redirects were all prioritized using the [route priority order rules for all routes](/en/guides/routing/#route-priority-order). This allowed more control over routing in your project by not automatically prioritizing certain kinds of routes and standardizing the route priority order.

Astro v5.0 removes this experimental flag and makes this the new default behavior in Astro: redirects and injected routes are now prioritized equally alongside file-based project routes.

Note that this was already the default behavior in Starlight, and should not affect updated Starlight projects.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-11)

If your project includes injected routes or redirects, please check that your routes are building page URLs as expected. An example of the new expected behavior is shown below.

In a project containing the following routes:

- File-based route: `/blog/post/[pid]`
- File-based route: `/[page]`
- Injected route: `/blog/[...slug]`
- Redirect: `/blog/tags/[tag] -> /[tag]`
- Redirect: `/posts -> /blog`

The following URLs will be built (instead of following the route priority order of Astro v4.x):

- `/blog/tags/astro` is built by the redirect to `/tags/[tag]` (instead of the injected route `/blog/[...slug]`)
- `/blog/post/0` is built by the file-based route `/blog/post/[pid]` (instead of the injected route `/blog/[...slug]`)
- `/posts` is built by the redirect to `/blog` (instead of the file-based route `/[page]`)

In the event of route collisions, where two routes of equal route priority attempt to build the same URL, Astro will log a warning identifying the conflicting routes.

Read more about the [route priority order rules](/en/guides/routing/#route-priority-order).

### `<script>` tags are rendered directly as declared

[Section titled “\ tags are rendered directly as declared”](#script-tags-are-rendered-directly-as-declared)

[Implementation PR: Make directRenderScript the default (#11791)](https://github.com/withastro/astro/pull/11791)

In Astro v4.x, `experimental.directRenderScript` was an optional flag to directly render `<scripts>` as declared in `.astro` files (including existing features like TypeScript, importing `node_modules`, and deduplicating scripts). This strategy prevented scripts from being executed in places where they were not used. Additionally, conditionally rendered scripts were previously implicitly inlined, as if an `is:inline` directive was automatically added to them.

Astro 5.0 removes this experimental flag and makes this the new default behavior in Astro: scripts are no longer hoisted to the `<head>`, multiple scripts on a page are no longer bundled together, and a `<script>` tag may interfere with CSS styling. Additionally, conditionally rendered scripts are no longer implicitly inlined.

#### What should I do?

[Section titled “What should I do?”](#what-should-i-do-12)

Please review your `<script>` tags and ensure they behave as desired.

If you previously had conditionally rendered `<script>` tags, you will need to add an `is:inline` attribute to preserve the same behavior as before:

src/components/MyComponent.astro

```astro
---
type Props = {
  showAlert: boolean
}


const { showAlert } = Astro.props;
---
{
  showAlert && <script is:inline>alert("Some very important code!!")</script>
}
```

Read more about [using `script` tags in Astro](/en/guides/client-side-scripts/).
