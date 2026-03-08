Preload functions

# preload

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/preload-functions/preload.mdx)

The `preload` function is a property on a route definition that initiates data fetching before a user navigates to the route.

`preload` runs in two separate phases:

- **Preload phase:** Triggered by user intent (e.g., hovering over a link), the function is called to initiate data fetching.
- **Rendering phase:** Triggered by actual navigation, the function is called a second time to provide the fetched data to the component.

***

## [Import](/solid-router/reference/preload-functions/preload#import)

```
import { Route } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/preload-functions/preload#type)

```
type RoutePreloadFunc<T = unknown> = (args: RoutePreloadFuncArgs) => T;
interface RoutePreloadFuncArgs {  params: Params;  location: Location;  intent: "initial" | "native" | "navigate" | "preload";}
```

***

## [Parameters](/solid-router/reference/preload-functions/preload#parameters)

### [`params`](/solid-router/reference/preload-functions/preload#params)

- **Type:** `Params`

An object containing the parameters for the matched route. It corresponds to the value returned by the [`useParams` primitive](/solid-router/reference/primitives/use-params).

### [`location`](/solid-router/reference/preload-functions/preload#location)

- **Type:** `Location`

The router's location object for the destination URL. It corresponds to the value returned by the [`useLocation` primitive](/solid-router/reference/primitives/use-location).

### [`intent`](/solid-router/reference/preload-functions/preload#intent)

- **Type:** `"initial" | "native" | "navigate" | "preload"`

A string indicating the context in which the function is called.

- `"preload"`: The function is running to initiate data fetching.
- `"navigate"`: The function is running during navigation to the route.
- `"initial"`: The function is running for the first route on page load.

***

## [Return value](/solid-router/reference/preload-functions/preload#return-value)

The value returned by `preload` is passed to the route's component as the `data` prop.

- In the **preload phase** (`intent: "preload"`), the return value is **ignored**.
- In the **rendering phase** (`intent: "navigate"` or `"initial"`), the return value is **captured** and provided to the component.

***

## [Examples](/solid-router/reference/preload-functions/preload#examples)

```
import { Route, query, createAsync } from "@solidjs/router";
const getProductQuery = query(async (id: string) => {  // ... Fetches a product from the server.}, "product");
function ProductPage(props) {  const product = createAsync(() => getProductQuery(props.params.id));
  return <div>{product()?.title}</div>;}
function preloadData({ params }) {  getProductQuery(params.id);}
function ProductRoutes() {  return (    <Route path="/products/:id" component={ProductPage} preload={preloadData} />  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/preload-functions/preload.mdx\&page=https://docs.solidjs.com/solid-router/reference/preload-functions/preload)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [params](#params)
   2. [location](#location)
   3. [intent](#intent)
5. [Return value](#return-value)
6. [Examples](#examples)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/preload-functions/preload.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/preload-functions/preload.mdx\&page=https://docs.solidjs.com/solid-router/reference/preload-functions/preload)
