Concepts

# Search parameters

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/search-parameters.mdx)

Search parameters are used to pass data to a route using the query string. The query string is the part of the URL that comes after the `?` character and is used to pass key-value pairs to the route.

In Solid Router, these query parameters can be accessed using [`useSearchParams`](/solid-router/reference/primitives/use-search-params). This primitive retrieves a tuple that contains a reactive object that reads the current search parameters and a function to update them.

```
import { useSearchParams } from "@solidjs/router";
export const App = () => {  const [searchParams, setSearchParams] = useSearchParams();
  return (    <div>      <span>Username: {searchParams.username}</span>      <input        type="text"        onChange={(e) => {          e.preventDefault();          setSearchParams({ username: e.target.value });        }}      />    </div>  );};
```

The getter, in this case `searchParams`, is used to read the current search parameters. `setSearchParams` works as the setter which accepts an *object* whose entries will be merged into the current query.

***

## [Multiple queries](/solid-router/concepts/search-parameters#multiple-queries)

Since `setSearchParams` accepts an object, you can pass multiple key-value pairs to update multiple search parameters at once.

```
setSearchParams({  username: "john",  page: 1,});
```

Empty or null values

If the value of a search parameter's key is `undefined`, `null`, or an empty string (`""`), it will be removed from the query string.

***

## [Accessing query strings](/solid-router/concepts/search-parameters#accessing-query-strings)

If you require accessing the query string directly, you can use the [`useLocation`](/solid-router/reference/primitives/use-location) primitive:

```
import { useLocation } from "@solidjs/router";
export const App = () => {  const location = useLocation();
  return (    <div>      <span>Query String: {location.search}</span>    </div>  );};
```

If the URL was `http://localhost:3000/users?username=john&page=1`, the output would be `Query String: ?username=john&page=1`.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/search-parameters.mdx\&page=https://docs.solidjs.com/solid-router/concepts/search-parameters)

On this page

1. [Overview](#_top)
2. [Multiple queries](#multiple-queries)
3. [Accessing query strings](#accessing-query-strings)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/concepts/search-parameters.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/concepts/search-parameters.mdx\&page=https://docs.solidjs.com/solid-router/concepts/search-parameters)
