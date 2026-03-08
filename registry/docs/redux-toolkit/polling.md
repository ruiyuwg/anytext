On this page

## Polling Overview[​](#polling-overview "Direct link to Polling Overview")

Polling gives you the ability to have a 'real-time' effect by causing a query to run at a specified interval. To enable polling for a query, pass a `pollingInterval` to the `useQuery` hook or action creator with an interval in milliseconds:

tip

Polling additionally has the ability to skip sending requests while the window is out of focus. To enable this behavior, pass `skipPollingIfUnfocused: true` to the `useQuery` hook or action creator.

_Note: `skipPollingIfUnfocused` requires [`setupListeners`](/rtk-query/api/setupListeners) to have been called._

src/Pokemon.tsx

```
import * as React from 'react'import { useGetPokemonByNameQuery } from './services/pokemon'export const Pokemon = ({ name }: { name: string }) => {  // Automatically refetch every 3s unless the window is out of focus  const { data, status, error, refetch } = useGetPokemonByNameQuery(name, {    pollingInterval: 3000,    skipPollingIfUnfocused: true,  })  return <div>{data}</div>}
```

In an action creator without React Hooks:

```
const { data, status, error, refetch } = store.dispatch(  endpoints.getCountById.initiate(id, {    subscriptionOptions: { pollingInterval: 3000 },  }),)
```

## Polling Without React Hooks[​](#polling-without-react-hooks "Direct link to Polling Without React Hooks")

If you use polling without the convenience of React Hooks, you will need to manually call `updateSubscriptionOptions` on the promise ref to update the interval. This approach varies by framework but is possible everywhere. See the [Svelte Example](/rtk-query/usage/examples#svelte) for one possibility, and the [Usage Without React Hooks](/rtk-query/usage/usage-without-react-hooks) page for more details on working with subscriptions manually.

```
queryRef.updateSubscriptionOptions({ pollingInterval: 0 })
```

## Polling Example[​](#polling-example "Direct link to Polling Example")
