Version: 30.0

On this page

Jest sets the following environment variables:

### `NODE_ENV`[​](#node_env "Direct link to node_env")

Set to `'test'` if it's not already set to something else.

### `JEST_WORKER_ID`[​](#jest_worker_id "Direct link to jest_worker_id")

Each worker process is assigned a unique id (index-based that starts with `1`). This is set to `1` for all tests when [`runInBand`](/docs/cli#--runinband) is set to true.
