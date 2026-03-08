Guides

# Migration from v0.9.x

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/guides/migration.mdx)

v0.10.0 brings some big changes to support the future of routing including Islands/Partial Hydration hybrid solutions. Most notably there is no Context API available in non-hydrating parts of the application.

The biggest changes are around *removed APIs* that need to be replaced.

***

## [`<Outlet>`, `<Routes>`, `useRoutes`](/solid-router/guides/migration#outlet-routes-useroutes)

These components are no longer present in the new router version. Instead, `props.children` is passed into the page components in the place of outlets. This keeps the outlet directly passed from its page and avoids trying to use context across Islands boundaries. Similarly, nested `<Routes>` components cause waterfalls and are `<Outlets>` themselves thus sharing the same concerns.

With no `<Routes>` means the `<Router>` API has changed. The `<Router>` component acts as the `<Routes>` component now and its children must now be `<Route>` components. The top-level layout should go in the root prop of the router [as shown here](/solid-router/concepts/layouts#root-level-layouts).

***

## [`element` prop removed from `Route`](/solid-router/guides/migration#element-prop-removed-from-route)

Related without Outlet component it has to be passed in manually. At which point the `element` prop has less value. Removing the second way to define route components to reduce confusion and edge cases.

***

## [`data` functions & `useRouteData`](/solid-router/guides/migration#data-functions--useroutedata)

`data` functions & `useRouteData` have been replaced by a load mechanism. This allows link hover preloads, since the preload function can be run as much as wanted without worrying about reactivity.

This supports deduping/cache APIs which give more control over how things are cached. It also addresses TypeScript issues with getting the right types in the Component without `typeof` checks.

That being said the old pattern can be reproduced by turning off preloads at the router level and then injecting your own Context:

```
import { lazy } from "solid-js";import { Router, Route } from "@solidjs/router";
const User = lazy(() => import("./pages/users/[id].js"));
// preload functionfunction preloadUser({ params, location }) {  const [user] = createResource(() => params.id, fetchUser);  return user;}
// Pass it in the route definition<Router preload={false}>  <Route path="/users/:id" component={User} preload={preloadUser} /></Router>;
```

And then in your component taking the page props and putting them in a Context.

```
import { createContext, useContext } from "solid-js";
const UserContext = createContext();
function User(props) {  <UserContext.Provider value={props.data()}>    {/* my component content that includes <UserDetails /> in any depth  */}  </UserContext.Provider>;}
function UserDetails() {  const user = useContext(UserContext);  // render stuff}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/guides/migration.mdx\&page=https://docs.solidjs.com/solid-router/guides/migration)

On this page

1. [Overview](#_top)
2. [, , useRoutes](#outlet-routes-useroutes)
3. [element prop removed from Route](#element-prop-removed-from-route)
4. [data functions & useRouteData](#data-functions--useroutedata)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/guides/migration.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/guides/migration.mdx\&page=https://docs.solidjs.com/solid-router/guides/migration)
