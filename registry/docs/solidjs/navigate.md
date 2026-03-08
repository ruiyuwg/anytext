Components

# Navigate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/navigate.mdx)

Solid Router provides a `Navigate` component that works similarly to [`<A>`](/solid-router/reference/components/a), but it will *immediately* navigate to the provided path as soon as the component is rendered. It also uses the `href` prop, but with the additional option of passing a function to `href` that returns a path to navigate to:

```
function getPath({ navigate, location }) {  // navigate is the result of calling useNavigate(); location is the result of calling useLocation().  // You can use those to dynamically determine a path to navigate to  return "/some-path";}
// Navigating to /redirect will redirect you to the result of getPath<Route path="/redirect" component={() => <Navigate href={getPath} />} />;
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/components/navigate.mdx\&page=https://docs.solidjs.com/solid-router/reference/components/navigate)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/components/navigate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/components/navigate.mdx\&page=https://docs.solidjs.com/solid-router/reference/components/navigate)
