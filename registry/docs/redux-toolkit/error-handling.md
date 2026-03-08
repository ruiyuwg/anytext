On this page

## Overview[​](#overview "Direct link to Overview")

If your query or mutation happens to throw an error when using [fetchBaseQuery](/rtk-query/api/fetchBaseQuery), it will be returned in the `error` property of the respective hook. The component will re-render when that occurs, and you can show appropriate UI based on the error data if desired.

### Error Display Examples[​](#error-display-examples "Direct link to Error Display Examples")

Query Error

```
function PostsList() {  const { data, error } = useGetPostsQuery()  return (    <div>      {error.status} {JSON.stringify(error.data)}    </div>  )}
```

Mutation Error

```
function AddPost() {  const [addPost, { error }] = useAddPostMutation()  return (    <div>      {error.status} {JSON.stringify(error.data)}    </div>  )}
```

tip

If you need to access the error or success payload immediately after a mutation, you can chain `.unwrap()`.

Using .unwrap

```
addPost({ id: 1, name: 'Example' })  .unwrap()  .then((payload) => console.log('fulfilled', payload))  .catch((error) => console.error('rejected', error))
```

Manually selecting an error

```
function PostsList() {  const { error } = useSelector(api.endpoints.getPosts.select())  return (    <div>      {error.status} {JSON.stringify(error.data)}    </div>  )}
```

## Errors with a custom `baseQuery`[​](#errors-with-a-custom-basequery "Direct link to errors-with-a-custom-basequery")

Whether a response is returned as `data` or `error` is dictated by the `baseQuery` provided.

Ultimately, you can choose whatever library you prefer to use with your `baseQuery`, but it's important that you return the correct response format. If you haven't tried [`fetchBaseQuery`](/rtk-query/api/fetchBaseQuery) yet, give it a chance! Otherwise, see [Customizing Queries](/rtk-query/usage/customizing-queries) for information on how to alter the returned errors.

## Handling errors at a macro level[​](#handling-errors-at-a-macro-level "Direct link to Handling errors at a macro level")

There are quite a few ways that you can manage your errors, and in some cases, you may want to show a generic toast notification for any async error. Being that RTK Query is built on top of Redux and Redux-Toolkit, you can easily add a middleware to your store for this purpose.

tip

Redux Toolkit has [action matching utilities](/api/matching-utilities) that we can leverage for additional custom behaviors.

Error catching middleware example

```
import { isRejectedWithValue } from '@reduxjs/toolkit'import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'import { toast } from 'your-cool-library'/** * Log a warning and show a toast! */export const rtkQueryErrorLogger: Middleware =  (api: MiddlewareAPI) => (next) => (action) => {    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!    if (isRejectedWithValue(action)) {      console.warn('We got a rejected action!')      toast.warn({        title: 'Async error!',        message:          'data' in action.error            ? (action.error.data as { message: string }).message            : action.error.message,      })    }    return next(action)  }
```
