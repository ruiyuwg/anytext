## usePayloadAPI

The `usePayloadAPI` hook is a useful tool for making REST API requests to your Payload instance and handling responses reactively. It allows you to fetch and interact with data while automatically updating when parameters change.

This hook returns an array with two elements:

1. An object containing the API response.
2. A set of methods to modify request parameters.

**Example:**

```tsx
'use client'
import { usePayloadAPI } from '@payloadcms/ui'

const MyComponent: React.FC = () => {
  // Fetch data from a collection item using its ID
  const [{ data, isError, isLoading }, { setParams }] = usePayloadAPI(
    '/api/posts/123',
    {
      initialParams: { depth: 1 },
    },
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error occurred while fetching data.</p>

  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={() => setParams({ cacheBust: Date.now() })}>
        Refresh Data
      </button>
    </div>
  )
}
```

**Arguments:**

| Property      | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`url`**     | The API endpoint to fetch data from. Relative URLs will be prefixed with the Payload API route. |
| **`options`** | An object containing initial request parameters and initial state configuration.                |

The `options` argument accepts the following properties:

| Property            | Description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| **`initialData`**   | Uses this data instead of making an initial request. If not provided, the request runs immediately. |
| **`initialParams`** | Defines the initial parameters to use in the request. Defaults to an empty object `{}`.             |

**Returned Value:**

The first item in the returned array is an object containing the following properties:

| Property        | Description                                              |
| --------------- | -------------------------------------------------------- |
| **`data`**      | The API response data.                                   |
| **`isError`**   | A boolean indicating whether the request failed.         |
| **`isLoading`** | A boolean indicating whether the request is in progress. |

The second item is an object with the following methods:

| Property        | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **`setParams`** | Updates request parameters, triggering a refetch if needed. |

#### Updating Data

The `setParams` function can be used to update the request and trigger a refetch:

```tsx
setParams({ depth: 2 })
```

This is useful for scenarios where you need to trigger another fetch regardless of the `url` argument changing.

## useRouteTransition

Route transitions are useful in showing immediate visual feedback to the user when navigating between pages. This is especially useful on slow networks when navigating to data heavy or process intensive pages.

By default, any instances of `Link` from `@payloadcms/ui` will trigger route transitions by default.

```tsx
import { Link } from '@payloadcms/ui'

const MyComponent = () => {
  return <Link href="/somewhere">Go Somewhere</Link>
}
```

You can also trigger route transitions programmatically, such as when using `router.push` from `next/router`. To do this, wrap your function calls with the `startRouteTransition` method provided by the `useRouteTransition` hook.

```ts
'use client'
import React, { useCallback } from 'react'
import { useTransition } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'

const MyComponent: React.FC = () => {
  const router = useRouter()
  const { startRouteTransition } = useRouteTransition()

  const redirectSomewhere = useCallback(() => {
    startRouteTransition(() => router.push('/somewhere'))
  }, [startRouteTransition, router])

  // ...
}
```
