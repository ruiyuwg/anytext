On this page

## Overview[​](#overview "Direct link to Overview")

Query hooks automatically begin fetching data as soon as the component is mounted. But, there are use cases where you may want to delay fetching data until some condition becomes true. RTK Query supports conditional fetching to enable that behavior.

If you want to prevent a query from automatically running, you can use the `skip` parameter in a hook.

tip

TypeScript users may wish to use [`skipToken`](/rtk-query/api/created-api/hooks#skiptoken) as an alternative to the `skip` option in order to skip running a query, while still keeping types for the endpoint accurate.

## Conditional Fetching Example[​](#conditional-fetching-example "Direct link to Conditional Fetching Example")
