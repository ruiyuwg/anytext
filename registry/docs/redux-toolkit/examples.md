On this page

## Examples Overview[​](#examples-overview "Direct link to Examples Overview")

We have a variety of examples that demonstrate various aspects of using RTK Query.

These examples are not meant to be what you base your application on, but exist to show _very specific_ behaviors that you may not actually want or need in your application. For most users, the basic examples in the [Queries](/rtk-query/usage/queries) and [Mutations](/rtk-query/usage/mutations) sections will cover the majority of your needs.

tip

Please note that when playing with the examples in CodeSandbox that you can experience quirky behavior, especially if you fork them and start editing files. Hot reloading, CSB service workers and [`msw`](https://mswjs.io/) sometimes have trouble getting on the right page -- when that happens, just refresh in the CSB browser pane.

## Kitchen Sink[​](#kitchen-sink "Direct link to Kitchen Sink")

## React Optimistic Updates[​](#react-optimistic-updates "Direct link to React Optimistic Updates")

In the example below you'll notice a few things. There are two `Posts` list on the sidebar. The top one will only update _after_ a successful mutation and resync with the server. The _subscribed_ one will update immediately due to the optimistic update. In the event of an error, you'll see this get rolled back.

info

The example has some intentionally wonky behavior... when editing the name of a post, there is a decent chance you'll get a random error.

## React with GraphQL[​](#react-with-graphql "Direct link to React with GraphQL")

## Authentication[​](#authentication "Direct link to Authentication")

There are several ways to handle authentication with RTK Query. This is a very basic example of taking a JWT from a login mutation, then setting that in our store. We then use `prepareHeaders` to inject the authentication headers into every subsequent request.

### Dispatching an action to set the user state[​](#dispatching-an-action-to-set-the-user-state "Direct link to Dispatching an action to set the user state")

This example dispatches a `setCredentials` action to store the user and token information.

### Using `extraReducers`[​](#using-extrareducers "Direct link to using-extrareducers")

This example uses a matcher from the endpoint and `extraReducers` in the `authSlice`.

## React Class Components[​](#react-class-components "Direct link to React Class Components")

Check out the `PostDetail` component for an example of Class Component usage.

## Svelte[​](#svelte "Direct link to Svelte")
