<!DOCTYPE html>Overview | TanStack DB Docs(function(){try{var t=localStorage.getItem('theme')||'auto';var v=['light','dark','auto'].includes(t)?t:'auto';if(v==='auto'){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}else{document.documentElement.classList.add(v)}}catch(e){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}})()

```
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5N57KQT4');
    window.googletag = window.googletag || { cmd: [] };
```

googletag.cmd.push(function () {
googletag.pubads().set("page\_url", "https://tanstack.com/ ");
});TanStackDB v0v0<a href="/cli/latest" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md
         bg-gradient-to-r from-indigo-600 to-violet-700
         hover:from-indigo-500 hover:to-violet-600
         text-white text-xs font-medium
         shadow-sm hover:shadow-md
         transition-all duration-200">AlphaTry TanStack CLISearch... KAuto<a href="/login" class="flex items-center gap-1 rounded-md px-2 py-1.5
         bg-black dark:bg-white text-white dark:text-black
         hover:bg-gray-800 dark:hover:bg-gray-200
         transition-colors duration-200 text-xs font-medium">Log InStartRCStartRCRouterRouterQueryQueryTableTableDBbetaDBbetaAIalphaAIalphaFormnewFormnewVirtualVirtualPacerbetaPacerbetaHotkeysalphaHotkeysalphaStorealphaStorealphaDevtoolsalphaDevtoolsalphaCLIalphaCLIalphaIntentalphaIntentalphaMore LibrariesMore LibrariesBuilderAlphaBuilderAlphaFeedBetaFeedBetaMaintainersMaintainersPartnersPartnersShowcaseShowcaseBlogBlogLearnNEWLearnNEWSupportSupportStatsStatsDiscordDiscordMerchMerchGitHubGitHubEthosEthosTenetsTenetsBrand GuideBrand Guide<div class="
       min-h-[calc(100dvh-var(--navbar-height))]
       flex flex-col sm:flex-row
       w-full transition-all duration-300
       [overflow-x:clip]"><div class="sm:hidden bg-white/50 sticky top-[var(--navbar-height)]
 max-h-[calc(100dvh-var(--navbar-height))] overflow-y-auto z-20 dark:bg-black/60 backdrop-blur-lg">DocsPartnersReactLatestSearch... KMenuHomeFrameworksContributorsNPM StatsGitHub Discord Getting StartedOverviewQuick StartInstallationGuidesLive QueriesMutationsSchemasError HandlingCreating Collection Options CreatorsCollectionsQuery CollectionElectric CollectionTrailBase CollectionRxDB CollectionPowerSync CollectionLocalStorage CollectionLocalOnly CollectionFrameworksReactVueAngularSolidSvelteCommunityResources & PackagesAPI ReferenceCore API ReferenceCollectioncreateCollectionliveQueryCollectionOptionscreateLiveQueryCollectioncreateOptimisticActioncreateTransactionElectric DB CollectionelectricCollectionOptionsQuery DB CollectionqueryCollectionOptionsRxDB DB CollectionrxdbCollectionOptionsPowerSync CollectionpowerSyncCollectionOptionsReact HooksuseLiveQuerylatestReactLatestMenuHomeFrameworksContributorsNPM StatsGitHub Discord Getting StartedOverviewQuick StartInstallationGuidesLive QueriesMutationsSchemasError HandlingCreating Collection Options CreatorsCollectionsQuery CollectionElectric CollectionTrailBase CollectionRxDB CollectionPowerSync CollectionLocalStorage CollectionLocalOnly CollectionFrameworksReactVueAngularSolidSvelteCommunityResources & PackagesAPI ReferenceCore API ReferenceCollectioncreateCollectionliveQueryCollectionOptionscreateLiveQueryCollectioncreateOptimisticActioncreateTransactionElectric DB CollectionelectricCollectionOptionsQuery DB CollectionqueryCollectionOptionsRxDB DB CollectionrxdbCollectionOptionsPowerSync CollectionpowerSyncCollectionOptionsReact HooksuseLiveQueryAI/LLM: This documentation page is available in plain markdown format at/db/latest/docs/overview.mdLearn about TanStack AdsHide AdsGetting StartedOn this pageOverviewCopy pageTanStack DB - Documentation
Welcome to the TanStack DB documentation.
TanStack DB is the reactive client store for your API. It solves the problems of building fast, modern apps, helping you:

avoid endpoint sprawl and network waterfalls by loading data into normalized collections
optimise client performance with sub-millisecond live queries and real-time reactivity
take the network off the interaction path with instant optimistic writes

Data loading is optimized. Interactions feel instantaneous. Your backend stays simple and your app stays blazing fast. No matter how much data you load.
Remove the complexity from building fast, modern apps
TanStack DB lets you query your data however your components need it, with a blazing-fast local query engine, real-time reactivity and instant optimistic updates.
Instead of choosing between the least of two evils:

view-specific APIs - complicating your backend and leading to network waterfalls
load everything and filter - leading to slow loads and sluggish client performance

TanStack DB enables a new way:

normalized collections - keep your backend simple
query-driven sync - optimizes your data loading
sub-millisecond live queries - keep your app fast and responsive

It extends TanStack Query with collections, live queries and optimistic mutations, working seamlessly with REST APIs, sync engines, or any data source.
Contents

How it works — understand the TanStack DB development model and how the pieces fit together
API reference — for the primitives and function interfaces
Usage examples — examples of common usage patterns
More info — where to find support and more information

How it works
TanStack DB works by:

defining collections typed sets of objects that can be populated with data
using live queries to query data from/across collections
making optimistic mutations using transactional mutators

tsx// Define collections to load data into
const todoCollection = createCollection({
// ...your config
onUpdate: updateMutationFn,
})

const Todos = () => {
// Bind data using live queries
const { data: todos } = useLiveQuery((q) =>
q.from({ todo: todoCollection }).where(({ todo }) => not(todo.completed))
)

const complete = (todo) => {
// Instantly applies optimistic state
todoCollection.update(todo.id, (draft) => {
draft.completed = true
})
}

return (
\<ul>
{todos.map((todo) => (
\<li key={todo.id} onClick={() => complete(todo)}>
{todo.text}
\</li>
))}
\</ul>
)
}

Defining collections
Collections are typed sets of objects that can be populated with data. They're designed to de-couple loading data into your app from binding data to your components.
Collections can be populated in many ways, including:

fetching data, for example from API endpoints using TanStack Query
syncing data, for example using a sync engine like ElectricSQL
storing local data, for example using localStorage for user preferences and settings or in-memory client data or UI state
from live collection queries, creating derived collections as materialised views

Once you have your data in collections, you can query across them using live queries in your components.
Sync Modes
Collections support three sync modes to optimize data loading:

Eager mode (default): Loads entire collection upfront. Best for <10k rows of mostly static data like user preferences or small reference tables.
On-demand mode: Loads only what queries request. Best for large datasets (>50k rows), search interfaces, and catalogs where most data won't be accessed.
Progressive mode: Loads query subset immediately, syncs full dataset in background. Best for collaborative apps needing instant first paint AND sub-millisecond queries.

With on-demand mode, your component's query becomes the API call:
tsxconst productsCollection = createCollection(
queryCollectionOptions({
queryKey: \['products'],
queryFn: async (ctx) => {
// Query predicates passed automatically in ctx.meta
const params = parseLoadSubsetOptions(ctx.meta?.loadSubsetOptions)
return api.getProducts(params) // e.g., GET /api/products?category=electronics\&price\_lt=100
},
syncMode: 'on-demand', // ← Enable query-driven sync
})
)

TanStack DB automatically collapses duplicate requests, performs delta loading when expanding queries, optimizes joins into minimal batched requests, and respects your TanStack Query cache policies. You often end up with fewer network requests than custom view-specific APIs.
See the Query Collection documentation for full predicate mapping details.
Using live queries
Live queries are used to query data out of collections. Live queries are reactive: when the underlying data changes in a way that would affect the query result, the result is incrementally updated and returned from the query, triggering a re-render.
TanStack DB live queries are implemented using d2ts, a TypeScript implementation of differential dataflow. This allows the query results to update incrementally (rather than by re-running the whole query). This makes them blazing fast, usually sub-millisecond, even for highly complex queries.
Performance: Updating one row in a sorted 100,000-item collection completes in ~0.7ms on an M1 Pro MacBook—fast enough that optimistic updates feel truly instantaneous, even with complex queries and large datasets.
Live queries support joins across collections. This allows you to:

load normalised data into collections and then de-normalise it through queries; simplifying your backend by avoiding the need for bespoke API endpoints that match your client
join data from multiple sources; for example, syncing some data out of a database, fetching some other data from an external API and then joining these into a unified data model for your front-end code

Every query returns another collection which can also be queried.
For more details on live queries, see the Live Queries documentation.
Making optimistic mutations
Collections support insert, update and delete operations. When called, by default they trigger the corresponding onInsert, onUpdate, onDelete handlers which are responsible for writing the mutation to the backend.
ts// Define collection with persistence handlers
const todoCollection = createCollection({
id: "todos",
// ... other config
onUpdate: async ({ transaction }) => {
const { original, changes } = transaction.mutations\[0]
await api.todos.update(original.id, changes)
},
})

// Immediately applies optimistic state
todoCollection.update(todo.id, (draft) => {
draft.completed = true
})

The collection maintains optimistic state separately from synced data. When live queries read from the collection, they see a local view that overlays the optimistic mutations on top of the immutable synced data.
The optimistic state is held until the handler resolves, at which point the data is persisted to the server and synced back. If the handler throws an error, the optimistic state is rolled back.
For more complex mutations, you can create custom actions with createOptimisticAction or custom transactions with createTransaction. See the Mutations guide for details.
Uni-directional data flow
This combines to support a model of uni-directional data flow, extending the redux/flux style state management pattern beyond the client, to take in the server as well:

With an instant inner loop of optimistic state, superseded in time by the slower outer loop of persisting to the server and syncing the updated server state back into the collection.
API reference
Collections
TanStack DB provides several built-in collection types for different data sources and use cases. Each collection type has its own detailed documentation page:
Built-in Collection Types
Fetch Collections

QueryCollection — Load data into collections using TanStack Query for REST APIs and data fetching.

Sync Collections

ElectricCollection — Sync data into collections from Postgres using ElectricSQL's real-time sync engine.

TrailBaseCollection — Sync data into collections using TrailBase's self-hosted backend with real-time subscriptions.

RxDBCollection — Integrate with RxDB for offline-first local persistence with powerful replication and sync capabilities.

PowerSyncCollection — Sync with PowerSync's SQLite-based database for offline-first persistence with real-time synchronization with PostgreSQL, MongoDB, and MySQL backends.

Local Collections

LocalStorageCollection — Store small amounts of local-only state that persists across sessions and syncs across browser tabs.

LocalOnlyCollection — Manage in-memory client data or UI state that doesn't need persistence or cross-tab sync.

Collection Schemas
All collections optionally (though strongly recommended) support adding a schema.
If provided, this must be a Standard Schema compatible schema instance, such as Zod, Valibot, ArkType, or Effect.
What schemas do:

Runtime validation - Ensures data meets your constraints before entering the collection
Type transformations - Convert input types to rich output types (e.g., string → Date)
Default values - Automatically populate missing fields
Type safety - Infer TypeScript types from your schema

Example:
typescriptconst todoSchema = z.object({
id: z.string(),
text: z.string(),
completed: z.boolean().default(false),
created\_at: z.string().transform(val => new Date(val)),  // string → Date
priority: z.number().default(0)
})

const collection = createCollection(
queryCollectionOptions({
schema: todoSchema,
// ...
})
)

// Users provide simple inputs
collection.insert({
id: "1",
text: "Buy groceries",
created\_at: "2024-01-01T00:00:00Z"  // string
// completed and priority filled automatically
})

// Collection stores and returns rich types
const todo = collection.get("1")
console.log(todo.created\_at.getFullYear())  // It's a Date!
console.log(todo.completed)  // false (default)

The collection will use the schema for its type inference. If you provide a schema, you cannot also pass an explicit type parameter (e.g., createCollection\<Todo>()).
Learn more: See the Schemas guide for comprehensive documentation on schema validation, type transformations, and best practices.
Creating Custom Collection Types
You can create your own collection types by implementing the Collection interface found in ../packages/db/src/collection/index.ts.
See the existing implementations in ../packages/db, ../packages/query-db-collection, ../packages/electric-db-collection and ../packages/trailbase-db-collection for reference. Also see the Collection Options Creator guide for a pattern to create reusable collection configuration factories.
Live queries
useLiveQuery hook
Use the useLiveQuery hook to assign live query results to a state variable in your React components:
tsimport { useLiveQuery } from '@tanstack/react-db'
import { eq } from '@tanstack/db'

const Todos = () => {
const { data: todos } = useLiveQuery((q) =>
q
.from({ todo: todoCollection })
.where(({ todo }) => eq(todo.completed, false))
.orderBy(({ todo }) => todo.created\_at, 'asc')
.select(({ todo }) => ({
id: todo.id,
text: todo.text
}))
)

return \<List items={ todos } />
}

You can also query across collections with joins:
tsimport { useLiveQuery } from '@tanstack/react-db'
import { eq } from '@tanstack/db'

const Todos = () => {
const { data: todos } = useLiveQuery((q) =>
q
.from({ todos: todoCollection })
.join(
{ lists: listCollection },
({ todos, lists }) => eq(lists.id, todos.listId),
'inner'
)
.where(({ lists }) => eq(lists.active, true))
.select(({ todos, lists }) => ({
id: todos.id,
title: todos.title,
listName: lists.name
}))
)

return \<List items={ todos } />
}

useLiveSuspenseQuery hook
For React Suspense support, use useLiveSuspenseQuery. This hook suspends rendering during initial data load and guarantees that data is always defined:
tsximport { useLiveSuspenseQuery } from '@tanstack/react-db'
import { Suspense } from 'react'

const Todos = () => {
// data is always defined - no need for optional chaining
const { data: todos } = useLiveSuspenseQuery((q) =>
q
.from({ todo: todoCollection })
.where(({ todo }) => eq(todo.completed, false))
)

return \<List items={ todos } />
}

const App = () => (
\<Suspense fallback={\<div>Loading...\</div>}>
\<Todos />
\</Suspense>
)

See the React Suspense section in Live Queries for detailed usage patterns and when to use useLiveSuspenseQuery vs useLiveQuery.
queryBuilder
You can also build queries directly (outside of the component lifecycle) using the underlying queryBuilder API:
tsimport { createLiveQueryCollection, eq } from "@tanstack/db"

const completedTodos = createLiveQueryCollection({
startSync: true,
query: (q) =>
q
.from({ todo: todoCollection })
.where(({ todo }) => eq(todo.completed, true)),
})

const results = completedTodos.toArray

Note also that:

the query results are themselves a collection
the useLiveQuery automatically starts and stops live query subscriptions when you mount and unmount your components; if you're creating queries manually, you need to manually manage the subscription lifecycle yourself

See the Live Queries documentation for more details.
Transactional mutators
For more complex mutations beyond simple CRUD operations, TanStack DB provides createOptimisticAction and createTransaction for creating custom mutations with full control over the mutation lifecycle.
See the Mutations guide for comprehensive documentation on:

Creating custom actions with createOptimisticAction
Manual transactions with createTransaction
Mutation merging behavior
Controlling optimistic vs non-optimistic updates
Handling temporary IDs
Transaction lifecycle states

Usage examples
Here we illustrate two common ways of using TanStack DB:

using TanStack Query with an existing REST API
using the ElectricSQL sync engine for real-time sync with your existing API

TipYou can combine these patterns. One of the benefits of TanStack DB is that you can integrate different ways of loading data and handling mutations into the same app. Your components don't need to know where the data came from or goes.

1. TanStack Query
   You can use TanStack DB with your existing REST API via TanStack Query.
   The steps are to:

create QueryCollections that load data using TanStack Query
implement mutation handlers that handle mutations by posting them to your API endpoints

tsximport { useLiveQuery, createCollection } from "@tanstack/react-db"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

// Load data into collections using TanStack Query.
// It's common to define these in a `collections` module.
const todoCollection = createCollection(
queryCollectionOptions({
queryKey: \["todos"],
queryFn: async () => fetch("/api/todos"),
getKey: (item) => item.id,
schema: todoSchema, // any standard schema
onInsert: async ({ transaction }) => {
const { changes: newTodo } = transaction.mutations\[0]

```
  // Handle the local write by sending it to your API.
  await api.todos.create(newTodo)
},
// also add onUpdate, onDelete as needed.
```

})
)
const listCollection = createCollection(
queryCollectionOptions({
queryKey: \["todo-lists"],
queryFn: async () => fetch("/api/todo-lists"),
getKey: (item) => item.id,
schema: todoListSchema,
onInsert: async ({ transaction }) => {
const { changes: newTodo } = transaction.mutations\[0]

```
  // Handle the local write by sending it to your API.
  await api.todoLists.create(newTodo)
},
// also add onUpdate, onDelete as needed.
```

})
)

const Todos = () => {
// Read the data using live queries. Here we show a live
// query that joins across two collections.
const { data: todos } = useLiveQuery((q) =>
q
.from({ todo: todoCollection })
.join(
{ list: listCollection },
({ todo, list }) => eq(list.id, todo.list\_id),
"inner"
)
.where(({ list }) => eq(list.active, true))
.select(({ todo, list }) => ({
id: todo.id,
text: todo.text,
status: todo.status,
listName: list.name,
}))
)

// ...
}

This pattern allows you to extend an existing TanStack Query application, or any application built on a REST API, with blazing fast, cross-collection live queries and local optimistic mutations with automatically managed optimistic state.
2\. ElectricSQL sync
One of the most powerful ways of using TanStack DB is with a sync engine, for a fully local-first experience with real-time sync. This allows you to incrementally adopt sync into an existing app, whilst still handling writes with your existing API.
Why Sync Engines?
While TanStack DB works great with REST APIs, sync engines provide powerful benefits:

Easy real-time updates: No WebSocket plumbing—write to your database and changes stream automatically to all clients
Automatic side-effects: When a mutation triggers cascading changes across tables, all affected data syncs automatically without manual cache invalidation
Efficient delta updates: Only changed rows cross the wire, making it practical to load large datasets client-side

This pattern enables the "load everything once" approach that makes apps like Linear and Figma feel instant.
Here, we illustrate this pattern using ElectricSQL as the sync engine.
tsximport type { Collection } from "@tanstack/db"
import type {
MutationFn,
PendingMutation,
createCollection,
} from "@tanstack/react-db"
import { electricCollectionOptions } from "@tanstack/electric-db-collection"

export const todoCollection = createCollection(
electricCollectionOptions({
id: "todos",
schema: todoSchema,
// Electric syncs data using "shapes". These are filtered views
// on database tables that Electric keeps in sync for you.
shapeOptions: {
url: "https://api.electric-sql.cloud/v1/shape",
params: {
table: "todos",
},
},
getKey: (item) => item.id,
schema: todoSchema,
onInsert: async ({ transaction }) => {
const response = await api.todos.create(transaction.mutations\[0].modified)

```
  return { txid: response.txid }
},
// You can also implement onUpdate, onDelete as needed.
```

})
)

const AddTodo = () => {
return (
\<Button
onClick={() => todoCollection.insert({ text: "🔥 Make app faster" })}
/>
)
}

React Native
When using TanStack DB with React Native, you need to install and configure a UUID generation library since React Native doesn't include crypto.randomUUID() by default.
Install the react-native-random-uuid package:
shnpm install react-native-random-uuid

Then import it at the entry point of your React Native app (e.g., in your App.js or index.js):
javascriptimport "react-native-random-uuid"

This polyfill provides the crypto.randomUUID() function that TanStack DB uses internally for generating unique identifiers.
More info
If you have questions / need help using TanStack DB, let us know on the Discord or start a GitHub discussion:

\#db channel in the TanStack discord
GitHub discussions
Edit on GitHubPreviousNPM StatsNextQuick StartOn this pageTanStack DB - DocumentationRemove the complexity from building fast, modern appsContentsHow it worksDefining collectionsSync ModesUsing live queriesMaking optimistic mutationsUni-directional data flowAPI referenceCollectionsBuilt-in Collection TypesCollection SchemasCreating Custom Collection TypesLive queriesuseLiveQuery hookuseLiveSuspenseQuery hookqueryBuilderTransactional mutatorsUsage examples1. TanStack Query2. ElectricSQL syncWhy Sync Engines?React NativeMore infoLearn about TanStack AdsHide Ads<div class="w-full sm:w-[300px] shrink-0 sm:sticky
       sm:top-[var(--navbar-height)]
       ">PartnersBecome a Partner<a href="https://coderabbit.link/tanstack?utm_source=tanstack&amp;via=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:100%;flex-grow:1;flex-shrink:0"><a href="https://www.cloudflare.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:86%;flex-grow:1;flex-shrink:0"><a href="https://ag-grid.com/react-data-grid/?utm_source=reacttable&amp;utm_campaign=githubreacttable" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:50%;flex-grow:1;flex-shrink:0"><a href="https://serpapi.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:41%;flex-grow:1;flex-shrink:0"><a href="https://netlify.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:34%;flex-grow:1;flex-shrink:0"><a href="https://neon.tech?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:30%;flex-grow:1;flex-shrink:0"><a href="https://workos.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:31%;flex-grow:1;flex-shrink:0"><a href="https://go.clerk.com/wOwHtuJ" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:29%;flex-grow:1;flex-shrink:0"><a href="https://convex.dev?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:29%;flex-grow:1;flex-shrink:0"><a href="https://electric-sql.com" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:28%;flex-grow:1;flex-shrink:0"><a href="https://powersync.com?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://sentry.io?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:23%;flex-grow:1;flex-shrink:0"><a href="https://railway.com/?utm_medium=sponsor&amp;utm_source=oss&amp;utm_campaign=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://www.prisma.io/?utm_source=tanstack&amp;via=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:14%;flex-grow:1;flex-shrink:0"><a href="https://strapi.link/tanstack-start" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:7%;flex-grow:1;flex-shrink:0"><a href="https://www.unkey.com/?utm_source=tanstack" target="_blank" rel="noreferrer" class="flex items-center justify-center px-3 py-2
                         border-r border-b border-gray-500/20
                         hover:bg-gray-500/10 transition-colors duration-150 ease-out" style="flex-basis:5%;flex-grow:1;flex-shrink:0">Learn about TanStack AdsHide Ads(self.$R=self.$R||{})\["tsr"]=\[];self.$\_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&\&this.streamEnded&&(delete self.$\_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:\[]};
;$\_TSR.router=($R=>$R\[0]={manifest:$R\[1]={routes:$R\[2]={**root**:$R\[3]={preloads:$R\[4]=\["/assets/main-BLpUAM3f.js","/assets/d3-charts-C\_pWHZ\_e.js","/assets/search-DPeAlcMs.js","/assets/icons-DFHKXUS4.js"],assets:$R\[5]=\[$R\[6]={tag:"script",attrs:$R\[7]={type:"module",async:!0},children:"import('/assets/main-BLpUAM3f.js')"}]},"/$libraryId":$R\[8]={preloads:$R\[9]=\["/assets/route-BM1blYlL.js","/assets/useMounted-q\_aRKA8j.js"]},"/$libraryId/$version":$R\[10]={preloads:$R\[11]=\["/assets/\_version-Cn\_1Fnwe.js","/assets/useLocalStorage-BK1IHjof.js","/assets/index-DXA8nvQF.js"]},"/$libraryId/$version/docs":$R\[12]={preloads:$R\[13]=\["/assets/*version.docs-Q1ra12-Q.js","/assets/DocsLayout-yFXxYAAM.js","/assets/frameworks-Cb8o9l0W.js","/assets/solid-logo-CT0JE-mv.js","/assets/LogoQueryGG-vdSraSzq.js","/assets/useQueryGGPPPDiscount-Dz6Vmyyw.js","/assets/partners-BvX3VFQs.js","/assets/AdsContext-KdS9VYu3.js","/assets/index-B3W54GeV.js","/assets/FrameworkSelect-BMasBWoM.js","/assets/Dropdown-CNqrQe7s.js","/assets/users.server-DqzYSbEt.js"]},"/$libraryId/$version/docs/$":$R\[14]={preloads:$R\[15]=\["/assets/*version.docs.*-1P05oGL*.js","/assets/Doc-lfeBU0lE.js","/assets/docs-CRqI39kb.js","/assets/DocContainer-BEmkHgoz.js","/assets/Breadcrumbs-DeP6cHlj.js","/assets/DocTitle-DEdqE1CX.js","/assets/Markdown-DivBGZsY.js","/assets/processor-DJYQWpXP.js","/assets/CodeBlock-ZSiKhi-G.js","/assets/bundle-full-CwUCBn9w.js","/assets/installCommand-Oh0cimkr.js","/assets/useMutation-DRi2yvBX.js","/assets/DocFeedbackNote-QJrnYy-U.js","/assets/docFeedback.functions-DzD8ddvB.js","/assets/docFeedback-B\_PzsLvE.js","/assets/queryOptions-CXd7YBrc.js"]}}},matches:$R\[16]=\[$R\[17]={i:"**root**/",u:1772952642437,s:"success",ssr:!0},$R\[18]={i:"/$libraryId/db",u:1772952642437,s:"success",ssr:!0},$R\[19]={i:"/$libraryId/$version/db/latest",u:1772952642439,s:"success",l:$R\[20]={config:$R\[21]={sections:$R\[22]=\[$R\[23]={label:"Getting Started",children:$R\[24]=\[$R\[25]={label:"Overview",to:"overview"},$R\[26]={label:"Quick Start",to:"quick-start"},$R\[27]={label:"Installation",to:"installation"}]},$R\[28]={label:"Guides",children:$R\[29]=\[$R\[30]={label:"Live Queries",to:"guides/live-queries"},$R\[31]={label:"Mutations",to:"guides/mutations"},$R\[32]={label:"Schemas",to:"guides/schemas"},$R\[33]={label:"Error Handling",to:"guides/error-handling"},$R\[34]={label:"Creating Collection Options Creators",to:"guides/collection-options-creator"}]},$R\[35]={label:"Collections",children:$R\[36]=\[$R\[37]={label:"Query Collection",to:"collections/query-collection"},$R\[38]={label:"Electric Collection",to:"collections/electric-collection"},$R\[39]={label:"TrailBase Collection",to:"collections/trailbase-collection"},$R\[40]={label:"RxDB Collection",to:"collections/rxdb-collection"},$R\[41]={label:"PowerSync Collection",to:"collections/powersync-collection"},$R\[42]={label:"LocalStorage Collection",to:"collections/local-storage-collection"},$R\[43]={label:"LocalOnly Collection",to:"collections/local-only-collection"}]},$R\[44]={label:"Frameworks",children:$R\[45]=\[$R\[46]={label:"React",to:"framework/react/overview"},$R\[47]={label:"Vue",to:"framework/vue/overview"},$R\[48]={label:"Angular",to:"framework/angular/overview"},$R\[49]={label:"Solid",to:"framework/solid/overview"},$R\[50]={label:"Svelte",to:"framework/svelte/overview"}]},$R\[51]={label:"Community",children:$R\[52]=\[$R\[53]={label:"Resources & Packages",to:"community/resources"}]},$R\[54]={label:"API Reference",children:$R\[55]=\[$R\[56]={label:"Core API Reference",to:"reference/index"},$R\[57]={label:"Collection",to:"reference/interfaces/Collection"},$R\[58]={label:"createCollection",to:"reference/functions/createCollection"},$R\[59]={label:"liveQueryCollectionOptions",to:"reference/functions/liveQueryCollectionOptions"},$R\[60]={label:"createLiveQueryCollection",to:"reference/functions/createLiveQueryCollection"},$R\[61]={label:"createOptimisticAction",to:"reference/functions/createOptimisticAction"},$R\[62]={label:"createTransaction",to:"reference/functions/createTransaction"},$R\[63]={label:"Electric DB Collection",to:"reference/electric-db-collection/index"},$R\[64]={label:"electricCollectionOptions",to:"reference/electric-db-collection/functions/electricCollectionOptions"},$R\[65]={label:"Query DB Collection",to:"reference/query-db-collection/index"},$R\[66]={label:"queryCollectionOptions",to:"reference/query-db-collection/functions/queryCollectionOptions"},$R\[67]={label:"RxDB DB Collection",to:"reference/rxdb-db-collection/index"},$R\[68]={label:"rxdbCollectionOptions",to:"reference/rxdb-db-collection/functions/rxdbCollectionOptions"},$R\[69]={label:"PowerSync Collection",to:"reference/powersync-db-collection/index"},$R\[70]={label:"powerSyncCollectionOptions",to:"reference/powersync-db-collection/functions/powerSyncCollectionOptions"}],frameworks:$R\[71]=\[$R\[72]={label:"react",children:$R\[73]=\[$R\[74]={label:"React Hooks",to:"framework/react/reference/index"},$R\[75]={label:"useLiveQuery",to:"framework/react/reference/functions/useLiveQuery"}]},$R\[76]={label:"solid",children:$R\[77]=\[$R\[78]={label:"Solid Hooks",to:"framework/solid/reference/index"},$R\[79]={label:"useLiveQuery",to:"framework/solid/reference/functions/useLiveQuery"}]},$R\[80]={label:"vue",children:$R\[81]=\[$R\[82]={label:"Vue Composables",to:"framework/vue/reference/index"},$R\[83]={label:"useLiveQuery",to:"framework/vue/reference/functions/useLiveQuery"},$R\[84]={label:"UseLiveQueryReturn",to:"framework/vue/reference/interfaces/UseLiveQueryReturn"},$R\[85]={label:"UseLiveQueryReturnWithCollection",to:"framework/vue/reference/interfaces/UseLiveQueryReturnWithCollection"}]},$R\[86]={label:"angular",children:$R\[87]=\[$R\[88]={label:"Angular Functions",to:"framework/angular/reference/index"},$R\[89]={label:"injectLiveQuery",to:"framework/angular/reference/functions/injectLiveQuery"}]}]}]}},ssr:!0},$R\[90]={i:"/$libraryId/$version/docs/db/latest/docs",u:1772952642437,s:"success",ssr:!0},$R\[91]={i:"/$libraryId/$version/docs/$/db/latest/docs/overview",u:1772952642458,s:"success",l:$R\[92]={title:"Overview",description:"TanStack DB Documentation Welcome to the TanStack DB documentation. TanStack DB is the reactive client store for your API. It solves the problems of building fast, modern apps, helping you: avoid endp...",filePath:"docs/overview.md",content:"\n# TanStack DB - Documentation\n\nWelcome to the TanStack DB documentation.\n\nTanStack DB is the reactive client store for your API. It solves the problems of building fast, modern apps, helping you:\n\n- avoid endpoint sprawl and network waterfalls by loading data into normalized collections\n- optimise client performance with sub-millisecond live queries and real-time reactivity\n- take the network off the interaction path with instant optimistic writes\n\nData loading is optimized. Interactions feel instantaneous. Your backend stays simple and your app stays blazing fast. No matter how much data you load.\n\n## Remove the complexity from building fast, modern apps\n\nTanStack DB lets you query your data however your components need it, with a blazing-fast local query engine, real-time reactivity and instant optimistic updates.\n\nInstead of choosing between the least of two evils:\n\n1. **view-specific APIs** - complicating your backend and leading to network waterfalls\n2. **load everything and filter** - leading to slow loads and sluggish client performance\n\nTanStack DB enables a new way:\n\n3. **normalized collections** - keep your backend simple\n4. **query-driven sync** - optimizes your data loading\n5. **sub-millisecond live queries** - keep your app fast and responsive\n\nIt extends TanStack Query with collections, live queries and optimistic mutations, working seamlessly with REST APIs, sync engines, or any data source.\n\n## Contents\n\n- [How it works](#how-it-works) — understand the TanStack DB development model and how the pieces fit together\n- [API reference](#api-reference) — for the primitives and function interfaces\n- [Usage examples](#usage-examples) — examples of common usage patterns\n- [More info](#more-info) — where to find support and more information\n\n## How it works\n\nTanStack DB works by:\n\n- [defining collections](#defining-collections) typed sets of objects that can be populated with data\n- [using live queries](#using-live-queries) to query data from/across collections\n- [making optimistic mutations](#making-optimistic-mutations) using transactional mutators\n\n`tsx\n// Define collections to load data into\nconst todoCollection = createCollection({\n  // ...your config\n  onUpdate: updateMutationFn,\n})\n\nconst Todos = () => {\n  // Bind data using live queries\n  const { data: todos } = useLiveQuery((q) =>\n    q.from({ todo: todoCollection }).where(({ todo }) => not(todo.completed))\n  )\n\n  const complete = (todo) => {\n    // Instantly applies optimistic state\n    todoCollection.update(todo.id, (draft) => {\n      draft.completed = true\n    })\n  }\n\n  return (\n    \x3Cul>\n      {todos.map((todo) => (\n        \x3Cli key={todo.id} onClick={() => complete(todo)}>\n          {todo.text}\n        \x3C/li>\n      ))}\n    \x3C/ul>\n  )\n}\n`\n\n### Defining collections\n\nCollections are typed sets of objects that can be populated with data. They're designed to de-couple loading data into your app from binding data to your components.\n\nCollections can be populated in many ways, including:\n\n- fetching data, for example [from API endpoints using TanStack Query](https://tanstack.com/query/latest)\n- syncing data, for example [using a sync engine like ElectricSQL](https://electric-sql.com/)\n- storing local data, for example [using localStorage for user preferences and settings](./collections/local-storage-collection.md) or [in-memory client data or UI state](./collections/local-only-collection.md)\n- from live collection queries, creating [derived collections as materialised views](#using-live-queries)\n\nOnce you have your data in collections, you can query across them using live queries in your components.\n\n#### Sync Modes\n\nCollections support three sync modes to optimize data loading:\n\n- **Eager mode** (default): Loads entire collection upfront. Best for \x3C10k rows of mostly static data like user preferences or small reference tables.\n- **On-demand mode**: Loads only what queries request. Best for large datasets (>50k rows), search interfaces, and catalogs where most data won't be accessed.\n- **Progressive mode**: Loads query subset immediately, syncs full dataset in background. Best for collaborative apps needing instant first paint AND sub-millisecond queries.\n\nWith on-demand mode, your component's query becomes the API call:\n\n`tsx\nconst productsCollection = createCollection(\n  queryCollectionOptions({\n    queryKey: ['products'],\n    queryFn: async (ctx) => {\n      // Query predicates passed automatically in ctx.meta\n      const params = parseLoadSubsetOptions(ctx.meta?.loadSubsetOptions)\n      return api.getProducts(params) // e.g., GET /api/products?category=electronics&price_lt=100\n    },\n    syncMode: 'on-demand', // ← Enable query-driven sync\n  })\n)\n`\n\nTanStack DB automatically collapses duplicate requests, performs delta loading when expanding queries, optimizes joins into minimal batched requests, and respects your TanStack Query cache policies. You often end up with *fewer* network requests than custom view-specific APIs.\n\nSee the [Query Collection documentation](./collections/query-collection.md#queryfn-and-predicate-push-down) for full predicate mapping details.\n\n### Using live queries\n\nLive queries are used to query data out of collections. Live queries are reactive: when the underlying data changes in a way that would affect the query result, the result is incrementally updated and returned from the query, triggering a re-render.\n\nTanStack DB live queries are implemented using [d2ts](https://github.com/electric-sql/d2ts), a TypeScript implementation of differential dataflow. This allows the query results to update *incrementally* (rather than by re-running the whole query). This makes them blazing fast, usually sub-millisecond, even for highly complex queries.\n\n**Performance:** Updating one row in a sorted 100,000-item collection completes in ~0.7ms on an M1 Pro MacBook—fast enough that optimistic updates feel truly instantaneous, even with complex queries and large datasets.\n\nLive queries support joins across collections. This allows you to:\n\n1. load normalised data into collections and then de-normalise it through queries; simplifying your backend by avoiding the need for bespoke API endpoints that match your client\n2. join data from multiple sources; for example, syncing some data out of a database, fetching some other data from an external API and then joining these into a unified data model for your front-end code\n\nEvery query returns another collection which can *also* be queried.\n\nFor more details on live queries, see the [Live Queries](./guides/live-queries.md) documentation.\n\n### Making optimistic mutations\n\nCollections support `insert`, `update` and `delete` operations. When called, by default they trigger the corresponding `onInsert`, `onUpdate`, `onDelete` handlers which are responsible for writing the mutation to the backend.\n\n`ts\n// Define collection with persistence handlers\nconst todoCollection = createCollection({\n  id: \"todos\",\n  // ... other config\n  onUpdate: async ({ transaction }) => {\n    const { original, changes } = transaction.mutations[0]\n    await api.todos.update(original.id, changes)\n  },\n})\n\n// Immediately applies optimistic state\ntodoCollection.update(todo.id, (draft) => {\n  draft.completed = true\n})\n`\n\nThe collection maintains optimistic state separately from synced data. When live queries read from the collection, they see a local view that overlays the optimistic mutations on top of the immutable synced data.\n\nThe optimistic state is held until the handler resolves, at which point the data is persisted to the server and synced back. If the handler throws an error, the optimistic state is rolled back.\n\nFor more complex mutations, you can create custom actions with `createOptimisticAction` or custom transactions with `createTransaction`. See the [Mutations guide](./guides/mutations.md) for details.\n\n### Uni-directional data flow\n\nThis combines to support a model of uni-directional data flow, extending the redux/flux style state management pattern beyond the client, to take in the server as well:\n\n\x3Cfigure>\n  \x3Ca href="https://raw.githubusercontent.com/TanStack/db/main/docs/unidirectional-data-flow.lg.png" target="\_blank">\n    \x3Cimg src="https://raw.githubusercontent.com/TanStack/db/main/docs/unidirectional-data-flow.png" />\n  \x3C/a>\n\x3C/figure>\n\nWith an instant inner loop of optimistic state, superseded in time by the slower outer loop of persisting to the server and syncing the updated server state back into the collection.\n\n## API reference\n\n### Collections\n\nTanStack DB provides several built-in collection types for different data sources and use cases. Each collection type has its own detailed documentation page:\n\n#### Built-in Collection Types\n\n**Fetch Collections**\n\n- **[QueryCollection](./collections/query-collection.md)** — Load data into collections using TanStack Query for REST APIs and data fetching.\n\n**Sync Collections**\n\n- **[ElectricCollection](./collections/electric-collection.md)** — Sync data into collections from Postgres using ElectricSQL's real-time sync engine.\n\n- **[TrailBaseCollection](./collections/trailbase-collection.md)** — Sync data into collections using TrailBase's self-hosted backend with real-time subscriptions.\n\n- **[RxDBCollection](./collections/rxdb-collection.md)** — Integrate with RxDB for offline-first local persistence with powerful replication and sync capabilities.\n\n- **[PowerSyncCollection](./collections/powersync-collection.md)** — Sync with PowerSync's SQLite-based database for offline-first persistence with real-time synchronization with PostgreSQL, MongoDB, and MySQL backends.\n\n**Local Collections**\n\n- **[LocalStorageCollection](./collections/local-storage-collection.md)** — Store small amounts of local-only state that persists across sessions and syncs across browser tabs.\n\n- **[LocalOnlyCollection](./collections/local-only-collection.md)** — Manage in-memory client data or UI state that doesn't need persistence or cross-tab sync.\n\n#### Collection Schemas\n\nAll collections optionally (though strongly recommended) support adding a `schema`.\n\nIf provided, this must be a [Standard Schema](https://standardschema.dev) compatible schema instance, such as [Zod](https://zod.dev), [Valibot](https://valibot.dev), [ArkType](https://arktype.io), or [Effect](https://effect.website/docs/schema/introduction/).\n\n**What schemas do:**\n\n1. **Runtime validation** - Ensures data meets your constraints before entering the collection\n2. **Type transformations** - Convert input types to rich output types (e.g., string → Date)\n3. **Default values** - Automatically populate missing fields\n4. **Type safety** - Infer TypeScript types from your schema\n\n**Example:**\n`typescript\nconst todoSchema = z.object({\n  id: z.string(),\n  text: z.string(),\n  completed: z.boolean().default(false),\n  created_at: z.string().transform(val => new Date(val)),  // string → Date\n  priority: z.number().default(0)\n})\n\nconst collection = createCollection(\n  queryCollectionOptions({\n    schema: todoSchema,\n    // ...\n  })\n)\n\n// Users provide simple inputs\ncollection.insert({\n  id: \"1\",\n  text: \"Buy groceries\",\n  created_at: \"2024-01-01T00:00:00Z\"  // string\n  // completed and priority filled automatically\n})\n\n// Collection stores and returns rich types\nconst todo = collection.get(\"1\")\nconsole.log(todo.created_at.getFullYear())  // It's a Date!\nconsole.log(todo.completed)  // false (default)\n`\n\nThe collection will use the schema for its type inference. If you provide a schema, you cannot also pass an explicit type parameter (e.g., `createCollection\x3CTodo>()`).\n\n**Learn more:** See the [Schemas guide](./guides/schemas.md) for comprehensive documentation on schema validation, type transformations, and best practices.\n\n#### Creating Custom Collection Types\n\nYou can create your own collection types by implementing the `Collection` interface found in [`../packages/db/src/collection/index.ts`](https://github.com/TanStack/db/blob/main/packages/db/src/collection/index.ts).\n\nSee the existing implementations in [`../packages/db`](https://github.com/TanStack/db/tree/main/packages/db), [`../packages/query-db-collection`](https://github.com/TanStack/db/tree/main/packages/query-db-collection), [`../packages/electric-db-collection`](https://github.com/TanStack/db/tree/main/packages/electric-db-collection) and [`../packages/trailbase-db-collection`](https://github.com/TanStack/db/tree/main/packages/trailbase-db-collection) for reference. Also see the [Collection Options Creator guide](./guides/collection-options-creator.md) for a pattern to create reusable collection configuration factories.\n\n### Live queries\n\n#### `useLiveQuery` hook\n\nUse the `useLiveQuery` hook to assign live query results to a state variable in your React components:\n\n`ts\nimport { useLiveQuery } from '@tanstack/react-db'\nimport { eq } from '@tanstack/db'\n\nconst Todos = () => {\n  const { data: todos } = useLiveQuery((q) =>\n    q\n      .from({ todo: todoCollection })\n      .where(({ todo }) => eq(todo.completed, false))\n      .orderBy(({ todo }) => todo.created_at, 'asc')\n      .select(({ todo }) => ({\n        id: todo.id,\n        text: todo.text\n      }))\n  )\n\n  return \x3CList items={ todos } />\n}\n`\n\nYou can also query across collections with joins:\n\n`ts\nimport { useLiveQuery } from '@tanstack/react-db'\nimport { eq } from '@tanstack/db'\n\nconst Todos = () => {\n  const { data: todos } = useLiveQuery((q) =>\n    q\n      .from({ todos: todoCollection })\n      .join(\n        { lists: listCollection },\n        ({ todos, lists }) => eq(lists.id, todos.listId),\n        'inner'\n      )\n      .where(({ lists }) => eq(lists.active, true))\n      .select(({ todos, lists }) => ({\n        id: todos.id,\n        title: todos.title,\n        listName: lists.name\n      }))\n  )\n\n  return \x3CList items={ todos } />\n}\n`\n\n#### `useLiveSuspenseQuery` hook\n\nFor React Suspense support, use `useLiveSuspenseQuery`. This hook suspends rendering during initial data load and guarantees that `data` is always defined:\n\n`tsx\nimport { useLiveSuspenseQuery } from '@tanstack/react-db'\nimport { Suspense } from 'react'\n\nconst Todos = () => {\n  // data is always defined - no need for optional chaining\n  const { data: todos } = useLiveSuspenseQuery((q) =>\n    q\n      .from({ todo: todoCollection })\n      .where(({ todo }) => eq(todo.completed, false))\n  )\n\n  return \x3CList items={ todos } />\n}\n\nconst App = () => (\n  \x3CSuspense fallback={\x3Cdiv>Loading...\x3C/div>}>\n    \x3CTodos />\n  \x3C/Suspense>\n)\n`\n\nSee the [React Suspense section in Live Queries](./guides/live-queries#using-with-react-suspense) for detailed usage patterns and when to use `useLiveSuspenseQuery` vs `useLiveQuery`.\n\n#### `queryBuilder`\n\nYou can also build queries directly (outside of the component lifecycle) using the underlying `queryBuilder` API:\n\n`ts\nimport { createLiveQueryCollection, eq } from \"@tanstack/db\"\n\nconst completedTodos = createLiveQueryCollection({\n  startSync: true,\n  query: (q) =>\n    q\n      .from({ todo: todoCollection })\n      .where(({ todo }) => eq(todo.completed, true)),\n})\n\nconst results = completedTodos.toArray\n`\n\nNote also that:\n\n1. the query results [are themselves a collection](#derived-collections)\n2. the `useLiveQuery` automatically starts and stops live query subscriptions when you mount and unmount your components; if you're creating queries manually, you need to manually manage the subscription lifecycle yourself\n\nSee the [Live Queries](./guides/live-queries.md) documentation for more details.\n\n### Transactional mutators\n\nFor more complex mutations beyond simple CRUD operations, TanStack DB provides `createOptimisticAction` and `createTransaction` for creating custom mutations with full control over the mutation lifecycle.\n\nSee the [Mutations guide](./guides/mutations.md) for comprehensive documentation on:\n\n- Creating custom actions with `createOptimisticAction`\n- Manual transactions with `createTransaction`\n- Mutation merging behavior\n- Controlling optimistic vs non-optimistic updates\n- Handling temporary IDs\n- Transaction lifecycle states\n\n## Usage examples\n\nHere we illustrate two common ways of using TanStack DB:\n\n1. [using TanStack Query](#1-tanstack-query) with an existing REST API\n2. [using the ElectricSQL sync engine](#2-electricsql-sync) for real-time sync with your existing API\n\n> \[!TIP]\n> You can combine these patterns. One of the benefits of TanStack DB is that you can integrate different ways of loading data and handling mutations into the same app. Your components don't need to know where the data came from or goes.\n\n### 1. TanStack Query\n\nYou can use TanStack DB with your existing REST API via TanStack Query.\n\nThe steps are to:\n\n1. create [QueryCollection](./collections/query-collection.md)s that load data using TanStack Query\n2. implement mutation handlers that handle mutations by posting them to your API endpoints\n\n``tsx\nimport { useLiveQuery, createCollection } from \"@tanstack/react-db\"\nimport { queryCollectionOptions } from \"@tanstack/query-db-collection\"\n\n// Load data into collections using TanStack Query.\n// It's common to define these in a `collections` module.\nconst todoCollection = createCollection(\n  queryCollectionOptions({\n    queryKey: [\"todos\"],\n    queryFn: async () => fetch(\"/api/todos\"),\n    getKey: (item) => item.id,\n    schema: todoSchema, // any standard schema\n    onInsert: async ({ transaction }) => {\n      const { changes: newTodo } = transaction.mutations[0]\n\n      // Handle the local write by sending it to your API.\n      await api.todos.create(newTodo)\n    },\n    // also add onUpdate, onDelete as needed.\n  })\n)\nconst listCollection = createCollection(\n  queryCollectionOptions({\n    queryKey: [\"todo-lists\"],\n    queryFn: async () => fetch(\"/api/todo-lists\"),\n    getKey: (item) => item.id,\n    schema: todoListSchema,\n    onInsert: async ({ transaction }) => {\n      const { changes: newTodo } = transaction.mutations[0]\n\n      // Handle the local write by sending it to your API.\n      await api.todoLists.create(newTodo)\n    },\n    // also add onUpdate, onDelete as needed.\n  })\n)\n\nconst Todos = () => {\n  // Read the data using live queries. Here we show a live\n  // query that joins across two collections.\n  const { data: todos } = useLiveQuery((q) =>\n    q\n      .from({ todo: todoCollection })\n      .join(\n        { list: listCollection },\n        ({ todo, list }) => eq(list.id, todo.list_id),\n        \"inner\"\n      )\n      .where(({ list }) => eq(list.active, true))\n      .select(({ todo, list }) => ({\n        id: todo.id,\n        text: todo.text,\n        status: todo.status,\n        listName: list.name,\n      }))\n  )\n\n  // ...\n}\n``\n\nThis pattern allows you to extend an existing TanStack Query application, or any application built on a REST API, with blazing fast, cross-collection live queries and local optimistic mutations with automatically managed optimistic state.\n\n### 2. ElectricSQL sync\n\nOne of the most powerful ways of using TanStack DB is with a sync engine, for a fully local-first experience with real-time sync. This allows you to incrementally adopt sync into an existing app, whilst still handling writes with your existing API.\n\n#### Why Sync Engines?\n\nWhile TanStack DB works great with REST APIs, sync engines provide powerful benefits:\n\n- **Easy real-time updates**: No WebSocket plumbing—write to your database and changes stream automatically to all clients\n- **Automatic side-effects**: When a mutation triggers cascading changes across tables, all affected data syncs automatically without manual cache invalidation\n- **Efficient delta updates**: Only changed rows cross the wire, making it practical to load large datasets client-side\n\nThis pattern enables the "load everything once" approach that makes apps like Linear and Figma feel instant.\n\nHere, we illustrate this pattern using [ElectricSQL](https://electric-sql.com) as the sync engine.\n\n`tsx\nimport type { Collection } from \"@tanstack/db\"\nimport type {\n  MutationFn,\n  PendingMutation,\n  createCollection,\n} from \"@tanstack/react-db\"\nimport { electricCollectionOptions } from \"@tanstack/electric-db-collection\"\n\nexport const todoCollection = createCollection(\n  electricCollectionOptions({\n    id: \"todos\",\n    schema: todoSchema,\n    // Electric syncs data using \"shapes\". These are filtered views\n    // on database tables that Electric keeps in sync for you.\n    shapeOptions: {\n      url: \"https://api.electric-sql.cloud/v1/shape\",\n      params: {\n        table: \"todos\",\n      },\n    },\n    getKey: (item) => item.id,\n    schema: todoSchema,\n    onInsert: async ({ transaction }) => {\n      const response = await api.todos.create(transaction.mutations[0].modified)\n\n      return { txid: response.txid }\n    },\n    // You can also implement onUpdate, onDelete as needed.\n  })\n)\n\nconst AddTodo = () => {\n  return (\n    \x3CButton\n      onClick={() => todoCollection.insert({ text: \"🔥 Make app faster\" })}\n    />\n  )\n}\n`\n\n## React Native\n\nWhen using TanStack DB with React Native, you need to install and configure a UUID generation library since React Native doesn't include crypto.randomUUID() by default.\n\nInstall the `react-native-random-uuid` package:\n\n`bash\nnpm install react-native-random-uuid\n`\n\nThen import it at the entry point of your React Native app (e.g., in your `App.js` or `index.js`):\n\n`javascript\nimport \"react-native-random-uuid\"\n`\n\nThis polyfill provides the `crypto.randomUUID()` function that TanStack DB uses internally for generating unique identifiers.\n\n## More info\n\nIf you have questions / need help using TanStack DB, let us know on the Discord or start a GitHub discussion:\n\n- [`#db` channel in the TanStack discord](https://discord.gg/yjUNbvbraC)\n- [GitHub discussions](https://github.com/tanstack/db/discussions)\n",frontmatter:$R\[93]={title:"Overview",id:"overview",description:"TanStack DB Documentation Welcome to the TanStack DB documentation. TanStack DB is the reactive client store for your API. It solves the problems of building fast, modern apps, helping you: avoid endp..."}},ssr:!0}],lastMatchId:"/$libraryId/$version/docs/$/db/latest/docs/overview",dehydratedData:$R\[94]={queryStream:$R\[95]=($R\[96]=(e) => new ReadableStream({ start: (r) => {
e.on({ next: (a) => {
try {
r.enqueue(a);
} catch (t) {
}
}, throw: (a) => {
r.error(a);
}, return: () => {
try {
r.close();
} catch (a) {
}
} });
} }))($R\[97]=($R\[98]=() => {
let e = \[], r = \[], t = true, n2 = false, a = 0, s = (l, g, S) => {
for (S = 0; S < a; S++) r\[S] && r\[S][g](l);
}, i = (l, g, S, d) => {
for (g = 0, S = e.length; g < S; g++) d = e\[g], !t && g === S - 1 ? l[n2 ? "return" : "throw"](d) : l.next(d);
}, u = (l, g) => (t && (g = a++, r\[g] = l), i(l), () => {
t && (r\[g] = r\[a], r\[a--] = void 0);
});
return { **SEROVAL\_STREAM**: true, on: (l) => u(l), next: (l) => {
t && (e.push(l), s(l, "next"));
}, throw: (l) => {
t && (e.push(l), s(l, "throw"), t = false, n2 = false, r.length = 0);
}, return: (l) => {
t && (e.push(l), s(l, "return"), t = false, n2 = true, r.length = 0);
} };
})())}})($R\["tsr"]);document.currentScript.remove()import('/assets/main-BLpUAM3f.js')($R=>$R\[97].return(void 0))($R\["tsr"]);$\_TSR.e();document.currentScript.remove()
