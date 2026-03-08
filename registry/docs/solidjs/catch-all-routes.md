Concepts

# Catch-all routes

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/catch-all.mdx)

Catch-all routes are used to match any URL that does not match any other route in the application. This is useful for displaying a 404 page or redirecting to a specific route when a user enters an invalid URL.

To create a catch-all route, place a route with an asterisk (`*`) as the path at the end of the route list. Optionally, you can name the parameter to access the unmatched part of the URL.

```
import { Router, Route } from "@solidjs/router";
import Home from "./Home";import About from "./About";import NotFound from "./NotFound";
const App = () => (  <Router>    <Route path="/home" component={Home} />    <Route path="/about" component={About} />    <Route path="*404" component={NotFound} />  </Router>);
```

Now, if a user navigates to a URL that does not match `/home` or `/about`, the `NotFound` component will be rendered.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/catch-all.mdx\&page=https://docs.solidjs.com/solid-router/concepts/catch-all)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/catch-all.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/catch-all.mdx\&page=https://docs.solidjs.com/solid-router/concepts/catch-all)
