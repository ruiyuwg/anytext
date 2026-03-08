On this page

## Overview[​](#overview "Direct link to Overview")

A core action instantiated during (buildThunks). `queryThunk` leverages `createAsyncThunk` to initiate the query process and is used extensively throughout the codebase both as a match case and to initiate queries. The payload for the query is built using \[executeEndpoint\]

## Functions[​](#functions "Direct link to Functions")

Before executing the payload creator function in \[executeEndpoint\], `queryThunk` executes two functions:

### `getPendingMeta()`[​](#getpendingmeta "Direct link to getpendingmeta")

1.  `getPendingMeta()` - adds additional metadata to the action to be used in reducers or middleware.
    1.  `startedTimeStamp`
    2.  `SHOULD_AUTOBATCH`

### `condition()`[​](#condition "Direct link to condition")

Performs conditional checks based on the provided args to decide whether the query should continue or not. (also attaches the field `dispatchConditionRejected: true` as confirmation that the condition was checked)

```
if (isUpsertQuery(queryThunkArgs)) { return true }if (requestState?.status === "pending") { return false }if (isForcedQuery(queryThunkArgs, state)) { return true }if (isQueryDefinition(endpointDefinition) && endpointDefinition?.forceRefetch?.({ return true }if (fulfilledVal) { return false }else return true
```

## Middleware Uses[​](#middleware-uses "Direct link to Middleware Uses")

### buildSlice[​](#buildslice "Direct link to buildSlice")

The query endpoint is built almost entirely off of the `extraReducers` matching a `queryThunk` pending/fulfilled/rejected actions and updates the `querySubstate` plus meta data accordingly. The query slice utilises the condition and attached metadata created by a `queryThunk`.

`buildSlice` additionally matches resolved (rejected OR fulfilled) `queryThunks` to update providedTags.

### invalidationByTags[​](#invalidationbytags "Direct link to invalidationByTags")

matches against all rejected/fulfilled cases for `queryThunk`

### Polling[​](#polling "Direct link to Polling")

matches against multiple queryThunk cases

```
if (  queryThunk.pending.match(action) ||  (queryThunk.rejected.match(action) && action.meta.condition)) {  updatePollingInterval(action.meta.arg, mwApi)}if (  queryThunk.fulfilled.match(action) ||  (queryThunk.rejected.match(action) && !action.meta.condition)) {  startNextPoll(action.meta.arg, mwApi)}
```

### cacheLifecycle[​](#cachelifecycle "Direct link to cacheLifecycle")

uses `queryThunk` matching to differentiate between mutation cache and query cache handling

### queryLifecycle[​](#querylifecycle "Direct link to queryLifecycle")

leverages the createAsyncThunk pending/fulfilled/rejected to extend the lifecycle with query specific traits, also uses it to handle onQueryStarted

### batchedActions[​](#batchedactions "Direct link to batchedActions")

### buildMiddleware[​](#buildmiddleware "Direct link to buildMiddleware")

`refetchQuery` refires queryThunk with arguments for the `queryThunk` to determine if the query should be sent or not
