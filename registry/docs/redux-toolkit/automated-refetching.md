On this page

As seen under [Default Cache Behavior](/rtk-query/usage/cache-behavior#default-cache-behavior), when a subscription is added for a query endpoint, a request will be sent only if the cache data does not already exist. If it exists, the existing data will be served instead.

RTK Query uses a "cache tag" system to automate re-fetching for query endpoints that have data affected by mutation endpoints. This enables designing your API such that firing a specific mutation will cause a certain query endpoint to consider its cached data _invalid_, and re-fetch the data if there is an active subscription.

Each endpoint + parameter combination contributes its own `queryCacheKey`. The cache tag system enables the ability to inform RTK Query that a particular query cache has _provided_ specific tags. If a mutation is fired which is said to `invalidate` tags that a query cache has _provided_, the cached data will be considered _invalidated_, and re-fetch if there is an active subscription to the cached data.

For triggering re-fetching through other means, see [Manipulating Cache Behavior](/rtk-query/usage/cache-behavior#manipulating-cache-behavior).

## Definitions[​](#definitions "Direct link to Definitions")

### Tags[​](#tags "Direct link to Tags")

_see also: [tagTypes API reference](/rtk-query/api/createApi#tagtypes)_

For RTK Query, _tags_ are just a name that you can give to a specific collection of data to control caching and invalidation behavior for re-fetching purposes. It can be considered as a 'label' attached to cached data that is read after a mutation, to decide whether the data should be affected by the mutation.

Tags are defined in the `tagTypes` argument when defining an api. For example, in an application that has both `Posts` and `Users`, you might define `tagTypes: ['Post', 'User']` when calling `createApi`.

An individual `tag` has a `type`, represented as a `string` name, and an optional `id`, represented as a `string` or `number`. It can be represented as a plain string (such as `'Post'`), or an object in the shape `{type: string, id?: string|number}` (such as `[{type: 'Post', id: 1}]`).

### Providing tags[​](#providing-tags "Direct link to Providing tags")

_see also: [providesTags API reference](/rtk-query/api/createApi#providestags)_

A _query_ can have its cached data _provide_ tags. Doing so determines which 'tag' is attached to the cached data returned by the query.

The `providesTags` argument can either be an array of `string` (such as `['Post']`), `{type: string, id?: string|number}` (such as `[{type: 'Post', id: 1}]`), or a callback that returns such an array. That function will be passed the result as the first argument, the response error as the second argument, and the argument originally passed into the `query` method as the third argument. Note that either the result or error arguments may be undefined based on whether the query was successful or not.

### Invalidating tags[​](#invalidating-tags "Direct link to Invalidating tags")

_see also: [invalidatesTags API reference](/rtk-query/api/createApi#invalidatestags)_

A _mutation_ can _invalidate_ specific cached data based on the tags. Doing so determines which cached data will be either refetched or removed from the cache.

The `invalidatesTags` argument can either be an array of `string` (such as `['Post']`), `{type: string, id?: string|number}` (such as `[{type: 'Post', id: 1}]`), or a callback that returns such an array. That function will be passed the result as the first argument, the response error as the second argument, and the argument originally passed into the `query` method as the third argument. Note that either the result or error arguments may be undefined based on whether the mutation was successful or not.

## Cache tags[​](#cache-tags "Direct link to Cache tags")

RTK Query uses the concept of 'tags' to determine whether a mutation for one endpoint intends to _invalidate_ some data that was _provided_ by a query from another endpoint.

If cache data is being invalidated, it will either refetch the providing query (if components are still using that data) or remove the data from the cache.

When defining an API slice, `createApi` accepts an array of tag type names for the `tagTypes` property, which is a list of possible tag name options that the queries for the API slice could provide.

The example below declares that endpoints can possibly provide 'Posts' and/or 'Users' to the cache:

-   TypeScript
-   JavaScript

Example of declaring cache tags

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => '/posts',    }),    getUsers: build.query<User[], void>({      query: () => '/users',    }),    addPost: build.mutation<Post, Omit<Post, 'id'>>({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),    }),    editPost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

Example of declaring cache tags

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => '/posts',    }),    getUsers: build.query({      query: () => '/users',    }),    addPost: build.mutation({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),    }),    editPost: build.mutation({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

By declaring these tags as what can possibly be provided to the cache, it enables control for individual mutation endpoints to claim whether they affect specific portions of the cache or not, in conjunction with `providesTags` and `invalidatesTags` on individual endpoints.

### Providing cache data[​](#providing-cache-data "Direct link to Providing cache data")

Each individual `query` endpoint can have its cached data _provide_ particular tags. Doing so enables a relationship between cached data from one or more query endpoints and the behavior of one or more mutation endpoints.

The `providesTags` property on a `query` endpoint is used for this purpose.

info

Provided tags have no inherent relationship across separate `query` endpoints. Provided tags are used to determine whether cached data returned by an endpoint should be `invalidated` and either be refetched or removed from the cache. If two separate endpoints provide the same tags, they will still contribute their own distinct cached data, which could later both be invalidated by a single tag declared from a mutation.

The example below declares that the `getPosts` `query` endpoint `provides` the `'Post'` tag to the cache, using the `providesTags` property for a `query` endpoint.

-   TypeScript
-   JavaScript

Example of providing tags to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => '/posts',      providesTags: ['Post'],    }),    getUsers: build.query<User[], void>({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation<Post, Omit<Post, 'id'>>({      query: (body) => ({        url: 'posts',        method: 'POST',        body,      }),    }),    editPost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

Example of providing tags to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => '/posts',      providesTags: ['Post'],    }),    getUsers: build.query({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation({      query: (body) => ({        url: 'posts',        method: 'POST',        body,      }),    }),    editPost: build.mutation({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

For more granular control over the provided data, provided `tags` can have an associated `id`. This enables a distinction between 'any of a particular tag type', and 'a specific instance of a particular tag type'.

The example below declares that the provided posts are associated with particular IDs as determined by the result returned by the endpoint:

-   TypeScript
-   JavaScript

Example of providing tags with IDs to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']          : ['Post'],    }),    getUsers: build.query<User[], void>({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation<Post, Omit<Post, 'id'>>({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),    }),    editPost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

Example of providing tags with IDs to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']          : ['Post'],    }),    getUsers: build.query({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),    }),    editPost: build.mutation({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),    }),  }),})
```

Note that for the example above, the `id` is used where possible on a successful result. In the case of an error, no result is supplied, and we still consider that it has provided the general `'Post'` tag type rather than any specific instance of that tag.

Advanced List Invalidation

In order to provide stronger control over invalidating the appropriate data, you can use an arbitrary ID such as `'LIST'` for a given tag. See [Advanced Invalidation with abstract tag IDs](#advanced-invalidation-with-abstract-tag-ids) for additional details.

### Invalidating cache data[​](#invalidating-cache-data "Direct link to Invalidating cache data")

Each individual mutation endpoint can `invalidate` particular tags for existing cached data. Doing so enables a relationship between cached data from one or more query endpoints and the behavior of one or more mutation endpoints.

The `invalidatesTags` property on a mutation endpoint is used for this purpose.

The example below declares that the `addPost` and `editPost` mutation endpoints `invalidate` any cached data with the `'Post'` tag, using the `invalidatesTags` property for a mutation endpoint:

-   TypeScript
-   JavaScript

Example of invalidating tags in the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']          : ['Post'],    }),    getUsers: build.query<User[], void>({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation<Post, Omit<Post, 'id'>>({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),    editPost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),  }),})
```

Example of invalidating tags in the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']          : ['Post'],    }),    getUsers: build.query({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),    editPost: build.mutation({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),  }),})
```

For the example above, this tells RTK Query that after the `addPost` and/or `editPost` mutations are called and completed, any cache data supplied with the `'Post'` tag is no longer valid. If a component is currently subscribed to the cached data for a `'Post'` tag after the above mutations are called and complete, it will automatically re-fetch in order to retrieve up to date data from the server.

An example scenario would be like so:

1.  A component is rendered which is using the `useGetPostsQuery()` hook to subscribe to that endpoint's cached data
2.  The `/posts` request is fired off, and server responds with posts with IDs 1, 2 & 3
3.  The `getPosts` endpoint stores the received data in the cache, and internally registers that the following tags have been provided:
    
    ```
    [  { type: 'Post', id: 1 },  { type: 'Post', id: 2 },  { type: 'Post', id: 3 },]
    ```
    
4.  The `editPost` mutation is fired off to alter a particular post
5.  Upon completion, RTK Query internally registers that the `'Post'` tag is now invalidated, and removes the previously provided `'Post'` tags from the cache
6.  Since the `getPosts` endpoint has provided tags of type `'Post'` which now has invalid cache data, and the component is still subscribed to the data, the `/posts` request is automatically fired off again, fetching new data and registering new tags for the updated cached data

For more granular control over the invalidated data, invalidated `tags` can have an associated `id` in the same manner as `providesTags`. This enables a distinction between 'any of a particular tag type' and 'a specific instance of a particular tag type'.

The example below declares that the `editPost` mutation invalidates a specific instance of a `Post` tag, using the ID passed in when calling the mutation function:

-   TypeScript
-   JavaScript

Example of invalidating tags with IDs to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']          : ['Post'],    }),    getUsers: build.query<User[], void>({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation<Post, Omit<Post, 'id'>>({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),    editPost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],    }),  }),})
```

Example of invalidating tags with IDs to the cache

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => '/posts',      providesTags: (result, error, arg) =>        result          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']          : ['Post'],    }),    getUsers: build.query({      query: () => '/users',      providesTags: ['User'],    }),    addPost: build.mutation({      query: (body) => ({        url: 'post',        method: 'POST',        body,      }),      invalidatesTags: ['Post'],    }),    editPost: build.mutation({      query: (body) => ({        url: `post/${body.id}`,        method: 'POST',        body,      }),      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }],    }),  }),})
```

For the example above, rather than invalidating any tag with the type `'Post'`, calling the `editPost` mutation function will now only invalidate a tag for the provided `id`. I.e. if cached data from an endpoint does not provide a `'Post'` for that same `id`, it will remain considered as 'valid', and will not be triggered to automatically re-fetch.

Using abstract tag IDs

In order to provide stronger control over invalidating the appropriate data, you can use an arbitrary ID such as `'LIST'` for a given tag. See [Advanced Invalidation with abstract tag IDs](#advanced-invalidation-with-abstract-tag-ids) for additional details.

## Tag Invalidation Behavior[​](#tag-invalidation-behavior "Direct link to Tag Invalidation Behavior")

The matrix below shows examples of which invalidated tags will affect and invalidate which provided tags:

Provided

Invalidated

General tag A

\['Post'\]  
/  
\[{ type: 'Post' }\]

General tag B

\['User'\]  
/  
\[{ type: 'User' }\]

Specific tag A1

\[{ type: 'Post',  
id: 1 }\]

Specific tag A2

\[{ type: 'Post', id: 'LIST' }\]

Specific tag B1

\[{ type: 'User',  
id: 1 }\]

Specific tag B2

\[{ type: 'User',  
id: 2 }\]

General tag A

\['Post'\] / \[{ type: 'Post' }\]

✔️

✔️

✔️

General tag B

\['User'\] /  
\[{ type: 'User' }\]

✔️

✔️

✔️

Specific tag A1

\[{ type: 'Post', id: 1 }\]

✔️

Specific tag A2

\[{ type: 'Post', id: 'LIST' }\]

✔️

Specific tag B1

\[{ type: 'User', id: 1 }\]

✔️

Specific tag B2

\[{ type: 'User', id: 2 }\]

✔️

The invalidation behavior is summarized based on tag specificity in the sections below.

### General tag[​](#general-tag "Direct link to General tag")

e.g. `['Post'] / [{ type: 'Post' }]`

Will `invalidate` any `provided` tag with the matching type, including general and specific tags.

Example:  
If a general tag of `Post` was invalidated, endpoints whose data `provided` the following tags would all have their data invalidated:

-   `['Post']`
-   `[{ type: 'Post' }]`
-   `[{ type: 'Post' }, { type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }, { type: 'User' }]`
-   `[{ type: 'Post', id: 'LIST' }]`
-   `[{ type: 'Post', id: 1 }, { type: 'Post', id: 'LIST' }]`

Endpoints whose data `provided` the following tags would _not_ have their data invalidated:

-   `['User']`
-   `[{ type: 'User' }]`
-   `[{ type: 'User', id: 1 }]`
-   `[{ type: 'User', id: 'LIST' }]`
-   `[{ type: 'User', id: 1 }, { type: 'User', id: 'LIST' }]`

### Specific tag[​](#specific-tag "Direct link to Specific tag")

e.g. `[{ type: 'Post', id: 1 }]`

Will `invalidate` any `provided` tag with both the matching type, _and_ matching id. Will not cause a `general` tag to be invalidated directly, but _might_ invalidate data for an endpoint that provides a `general` tag _if_ it also provides a matching `specific` tag.

Example 1: If a specific tag of `{ type: 'Post', id: 1 }` was invalidated, endpoints whose data `provided` the following tags would all have their data invalidated:

-   `[{ type: 'Post' }, { type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }, { type: 'User' }]`
-   `[{ type: 'Post', id: 1 }, { type: 'Post', id: 'LIST' }]`

Endpoints whose data `provided` the following tags would _not_ have their data invalidated:

-   `['Post']`
-   `[{ type: 'Post' }]`
-   `[{ type: 'Post', id: 'LIST' }]`
-   `['User']`
-   `[{ type: 'User' }]`
-   `[{ type: 'User', id: 1 }]`
-   `[{ type: 'User', id: 'LIST' }]`
-   `[{ type: 'User', id: 1 }, { type: 'User', id: 'LIST' }]`

Example 2: If a specific tag of `{ type: 'Post', id: 'LIST' }` was invalidated, endpoints whose data `provided` the following tags would all have their data invalidated:

-   `[{ type: 'Post', id: 'LIST' }]`
-   `[{ type: 'Post', id: 1 }, { type: 'Post', id: 'LIST' }]`

Endpoints whose data `provided` the following tags would _not_ have their data invalidated:

-   `['Post']`
-   `[{ type: 'Post' }]`
-   `[{ type: 'Post' }, { type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }]`
-   `[{ type: 'Post', id: 1 }, { type: 'User' }]`
-   `['User']`
-   `[{ type: 'User' }]`
-   `[{ type: 'User', id: 1 }]`
-   `[{ type: 'User', id: 'LIST' }]`
-   `[{ type: 'User', id: 1 }, { type: 'User', id: 'LIST' }]`

## Recipes[​](#recipes "Direct link to Recipes")

### Advanced Invalidation with abstract tag IDs[​](#advanced-invalidation-with-abstract-tag-ids "Direct link to Advanced Invalidation with abstract tag IDs")

While using an 'entity ID' for a tag `id` is a common use case, the `id` property is not intended to be limited to database IDs alone. The `id` is simply a way to label a subset of a particular collection of data for a particular `tag type`.

A powerful use-case is to use an ID like `'LIST'` as a label for data provided by a bulk query, _as well as_ using entity IDs for the individual items. Doing so allows future `mutations` to declare whether they invalidate the data only if it contains a particular item (e.g. `{ type: 'Post', id: 5 }`), or invalidate the data if it is a `'LIST'` (e.g. `{ type: 'Post', id: 'LIST' }`).

'LIST' Tag and IDs

1.  `LIST` is an arbitrary string - technically speaking, you could use anything you want here, such as `ALL` or `*`. The important thing when choosing a custom id is to make sure there is no possibility of it colliding with an id that is returned by a query result. If you have unknown ids in your query results and don't want to risk it, you can go with point 3 below.
2.  You can add _many_ tag types for even more control
    -   `[{ type: 'Posts', id: 'LIST' }, { type: 'Posts', id: 'SVELTE_POSTS' }, { type: 'Posts', id: 'REACT_POSTS' }]`
3.  If the concept of using an `id` like 'LIST' seems strange to you, you can always add another `tagType` and invalidate its root, but we recommend using the `id` approach as shown.

We can compare the scenarios below to see how using a `'LIST'` id can be leveraged to optimize behavior.

#### Invalidating everything of a type[​](#invalidating-everything-of-a-type "Direct link to Invalidating everything of a type")

-   TypeScript
-   JavaScript

API Definition

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import type { Post, User } from './types'export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => 'posts',      providesTags: (result) =>        result ? result.map(({ id }) => ({ type: 'Posts', id })) : ['Posts'],    }),    addPost: build.mutation<Post, Partial<Post>>({      query: (body) => ({        url: `post`,        method: 'POST',        body,      }),      invalidatesTags: ['Posts'],    }),    getPost: build.query<Post, number>({      query: (id) => `post/${id}`,      providesTags: (result, error, id) => [{ type: 'Posts', id }],    }),  }),})export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = api
```

API Definition

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: (result) =>        result ? result.map(({ id }) => ({ type: 'Posts', id })) : ['Posts'],    }),    addPost: build.mutation({      query: (body) => ({        url: `post`,        method: 'POST',        body,      }),      invalidatesTags: ['Posts'],    }),    getPost: build.query({      query: (id) => `post/${id}`,      providesTags: (result, error, id) => [{ type: 'Posts', id }],    }),  }),})export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = api
```

App.tsx

```
function App() {  const { data: posts } = useGetPostsQuery()  const [addPost] = useAddPostMutation()  return (    <div>      <AddPost onAdd={addPost} />      <PostsList />      {/* Assume each PostDetail is subscribed via `const {data} = useGetPostQuery(id)` */}      <PostDetail id={1} />      <PostDetail id={2} />      <PostDetail id={3} />    </div>  )}
```

**What to expect**

When `addPost` is triggered, it would cause each `PostDetail` component to go back into a `isFetching` state because `addPost` invalidates the root tag, which causes _every query_ that provides 'Posts' to be re-run. In most cases, this may not be what you want to do. Imagine if you had 100 posts on the screen that all subscribed to a `getPost` query – in this case, you'd create 100 requests and send a ton of unnecessary traffic to your server, which we're trying to avoid in the first place! Even though the user would still see the last good cached result and potentially not notice anything other than their browser hiccuping, you still want to avoid this.

#### Selectively invalidating lists[​](#selectively-invalidating-lists "Direct link to Selectively invalidating lists")

-   TypeScript
-   JavaScript

API Definition

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import type { Post, User } from './types'export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),    addPost: build.mutation<Post, Partial<Post>>({      query(body) {        return {          url: `post`,          method: 'POST',          body,        }      },      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],    }),    getPost: build.query<Post, number>({      query: (id) => `post/${id}`,      providesTags: (result, error, id) => [{ type: 'Posts', id }],    }),  }),})export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery } = api
```

API Definition

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts', id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),    addPost: build.mutation({      query(body) {        return {          url: `post`,          method: 'POST',          body,        }      },      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],    }),    getPost: build.query({      query: (id) => `post/${id}`,      providesTags: (result, error, id) => [{ type: 'Posts', id }],    }),  }),})export const { useGetPostsQuery, useAddPostMutation, useGetPostQuery } = api
```

App.tsx

```
function App() {  const { data: posts } = useGetPostsQuery()  const [addPost] = useAddPostMutation()  return (    <div>      <AddPost onAdd={addPost} />      <PostsList />      {/* Assume each PostDetail is subscribed via `const {data} = useGetPostQuery(id)` */}      <PostDetail id={1} />      <PostDetail id={2} />      <PostDetail id={3} />    </div>  )}
```

**What to expect**

When `addPost` is fired, it will only cause the `PostsList` to go into an `isFetching` state because `addPost` only invalidates the `'LIST'` id, which causes `getPosts` to rerun (because it provides that specific id). So in your network tab, you would only see 1 new request fire for `GET /posts`. As the singular `getPost` queries have not been invalidated, they will not re-run as a result of `addPost`.

info

If you intend for the `addPost` mutation to refresh all posts including individual `PostDetail` components while still only making 1 new `GET /posts` request, this can be done by selecting a part of the data using [`selectFromResult`](/rtk-query/usage/queries#selecting-data-from-a-query-result).

### Providing errors to the cache[​](#providing-errors-to-the-cache "Direct link to Providing errors to the cache")

The information provided to the cache is not limited to successful data fetches. The concept can be used to inform RTK Query that when a particular failure has been encountered, to `provide` a specific `tag` for that failed cache data. A separate endpoint can then `invalidate` the data for that `tag`, telling RTK Query to re-attempt the previously failed endpoints if a component is still subscribed to the failed data.

The example below demonstrates an example with the following behavior:

-   Provides an `UNAUTHORIZED` cache tag if a query fails with an error code of `401 UNAUTHORIZED`
-   Provides an `UNKNOWN_ERROR` cache tag if a query fails with a different error
-   Enables a 'login' mutation, which when _successful_, will `invalidate` the data with the `UNAUTHORIZED` tag.  
    This will trigger the `postById` endpoint to re-fire if:
    1.  The last call for `postById` had encountered an unauthorized error, and
    2.  A component is still subscribed to the cached data
-   Enables a 'refetchErroredQueries' mutation which when _called_, will `invalidate` the data with the `UNKNOWN_ERROR` tag.  
    This will trigger the `postById` endpoint to re-fire if:
    1.  The last call for `postById` had encountered an unknown error, and
    2.  A component is still subscribed to the cached data

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import { Post, LoginResponse } from './types'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'UNAUTHORIZED', 'UNKNOWN_ERROR'],  endpoints: (build) => ({    postById: build.query<Post, number>({      query: (id) => `post/${id}`,      providesTags: (result, error, id) =>        result          ? [{ type: 'Post', id }]          : error?.status === 401            ? ['UNAUTHORIZED']            : ['UNKNOWN_ERROR'],    }),    login: build.mutation<LoginResponse, void>({      query: () => '/login',      // on successful login, will refetch all currently      // 'UNAUTHORIZED' queries      invalidatesTags: (result) => (result ? ['UNAUTHORIZED'] : []),    }),    refetchErroredQueries: build.mutation<null, void>({      queryFn: () => ({ data: null }),      invalidatesTags: ['UNKNOWN_ERROR'],    }),  }),})
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'UNAUTHORIZED', 'UNKNOWN_ERROR'],  endpoints: (build) => ({    postById: build.query({      query: (id) => `post/${id}`,      providesTags: (result, error, id) =>        result          ? [{ type: 'Post', id }]          : error?.status === 401            ? ['UNAUTHORIZED']            : ['UNKNOWN_ERROR'],    }),    login: build.mutation({      query: () => '/login',      // on successful login, will refetch all currently      // 'UNAUTHORIZED' queries      invalidatesTags: (result) => (result ? ['UNAUTHORIZED'] : []),    }),    refetchErroredQueries: build.mutation({      queryFn: () => ({ data: null }),      invalidatesTags: ['UNKNOWN_ERROR'],    }),  }),})
```

### Abstracting common provides/invalidates usage[​](#abstracting-common-providesinvalidates-usage "Direct link to Abstracting common provides/invalidates usage")

The code written to `provide` & `invalidate` tags for a given API slice will be dependent on multiple factors, including:

-   The shape of the data returned by your backend
-   Which tags you expect a given query endpoint to provide
-   Which tags you expect a given mutation endpoint to invalidate
-   The extent that you wish to use the invalidation feature for

When declaring your API slice, you may feel as though you're duplicating your code. For instance, for two separate endpoints that both provide a list of a particular entity, the `providesTags` declaration may only differ in the `tagType` provided.

e.g.

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => `posts`,      providesTags: (result) =>        result          ? [              { type: 'Post', id: 'LIST' },              ...result.map(({ id }) => ({ type: 'Post' as const, id })),            ]          : [{ type: 'Post', id: 'LIST' }],    }),    getUsers: build.query<User[], void>({      query: () => `users`,      providesTags: (result) =>        result          ? [              { type: 'User', id: 'LIST' },              ...result.map(({ id }) => ({ type: 'User' as const, id })),            ]          : [{ type: 'User', id: 'LIST' }],    }),  }),})
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => `posts`,      providesTags: (result) =>        result          ? [              { type: 'Post', id: 'LIST' },              ...result.map(({ id }) => ({ type: 'Post', id })),            ]          : [{ type: 'Post', id: 'LIST' }],    }),    getUsers: build.query({      query: () => `users`,      providesTags: (result) =>        result          ? [              { type: 'User', id: 'LIST' },              ...result.map(({ id }) => ({ type: 'User', id })),            ]          : [{ type: 'User', id: 'LIST' }],    }),  }),})
```

You may find it beneficial to define helper functions designed for your particular api to reduce this boilerplate across endpoint definitions, e.g.

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'function providesList<R extends { id: string | number }[], T extends string>(  resultsWithIds: R | undefined,  tagType: T,) {  return resultsWithIds    ? [        { type: tagType, id: 'LIST' },        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),      ]    : [{ type: tagType, id: 'LIST' }]}const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => `posts`,      providesTags: (result) => providesList(result, 'Post'),    }),    getUsers: build.query({      query: () => `users`,      providesTags: (result) => providesList(result, 'User'),    }),  }),})
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'function providesList(resultsWithIds, tagType) {  return resultsWithIds    ? [        { type: tagType, id: 'LIST' },        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),      ]    : [{ type: tagType, id: 'LIST' }]}const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => `posts`,      providesTags: (result) => providesList(result, 'Post'),    }),    getUsers: build.query({      query: () => `users`,      providesTags: (result) => providesList(result, 'User'),    }),  }),})
```

An example of various abstractions for tag providing/invalidating designed for common rest data formats can be seen in the following gist, including typescript support, and factoring both ['LIST' style advanced tag invalidation](#advanced-invalidation-with-abstract-tag-ids) and ['error' style tag invalidation](#providing-errors-to-the-cache): **[RTK Query cache utils](https://gist.github.com/Shrugsy/6b6af02aef1f783df9d636526c1e05fa)**.
