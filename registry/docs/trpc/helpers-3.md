## Helpers

These are the helpers you'll get access to via `useUtils`. The table below will help you know which tRPC helper wraps which `@tanstack/react-query` helper method. Each react-query method will link to its respective docs/guide:

| tRPC helper wrapper   | `@tanstack/react-query` helper method                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `fetch`               | [`queryClient.fetchQuery`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientfetchquery)                       |
| `prefetch`            | [`queryClient.prefetchQuery`](https://tanstack.com/query/v5/docs/framework/react/guides/prefetching)                             |
| `fetchInfinite`       | [`queryClient.fetchInfiniteQuery`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientfetchinfinitequery)       |
| `prefetchInfinite`    | [`queryClient.prefetchInfiniteQuery`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientprefetchinfinitequery) |
| `ensureData`          | [`queryClient.ensureData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientensurequerydata)                  |
| `invalidate`          | [`queryClient.invalidateQueries`](https://tanstack.com/query/v5/docs/framework/react/guides/query-invalidation)                  |
| `refetch`             | [`queryClient.refetchQueries`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientrefetchqueries)               |
| `cancel`              | [`queryClient.cancelQueries`](https://tanstack.com/query/v5/docs/framework/react/guides/query-cancellation)                      |
| `setData`             | [`queryClient.setQueryData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientsetquerydata)                   |
| `setQueriesData`      | [`queryClient.setQueriesData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientsetqueriesdata)               |
| `getData`             | [`queryClient.getQueryData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientgetquerydata)                   |
| `setInfiniteData`     | [`queryClient.setInfiniteQueryData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientsetquerydata)           |
| `getInfiniteData`     | [`queryClient.getInfiniteData`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientgetquerydata)                |
| `setMutationDefaults` | [`queryClient.setMutationDefaults`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientsetmutationdefaults)     |
| `getMutationDefaults` | [`queryClient.getMutationDefaults`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientgetmutationdefaults)     |
| `isMutating`          | [`queryClient.isMutating`](https://tanstack.com/query/v5/docs/reference/QueryClient#queryclientismutating)                       |

### ❓ The function I want isn't here!

`@tanstack/react-query` has a lot of functions that we haven't put in the tRPC context yet. If you need a function that isn't here, feel free to [open a feature request](https://github.com/trpc/trpc/issues/new/choose) requesting it.

In the meantime, you can import and use the function directly from `@tanstack/react-query`. We also provide a [getQueryKey](https://trpc.io/docs/getQueryKey) which you can use to get the correct queryKey on the filters when using these functions.

## Proxy client

In addition to the above react-query helpers, the context also exposes your tRPC proxy client. This lets you call your procedures with `async`/`await` without needing to create an additional vanilla client.

```tsx
import { trpc } from '../utils/trpc';

function MyComponent() {
  const [apiKey, setApiKey] = useState();
  const utils = trpc.useUtils();

  return (
    <Form
      handleSubmit={async (event) => {
        const apiKey = await utils.client.apiKey.create.mutate(event);
        setApiKey(apiKey);
      }}
    >
      ...
    </Form>
  );
}
```
