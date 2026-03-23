-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Reference](https://docs.cloud.google.com/workflows/docs/apis)

Send feedback

# Method: googleapis.aiplatform.v1beta1.projects.locations.operations.wait Stay organized with collections Save and categorize content based on your preferences.

**Preview**

This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the [Service Specific Terms](/terms/service-terms#1). Pre-GA features are available "as is" and might have limited support. For more information, see the [launch stage descriptions](https://cloud.google.com/products/#product-launch-stages).

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

This method waits—the workflow execution is paused—until the operation is complete, fails, or times out. The default timeout value is `1800` seconds (30 minutes) and can be changed to a maximum value of `31536000` seconds (one year) for long-running operations using the `connector_params` field. See the [Connectors reference](/workflows/docs/reference/googleapis).

The connector uses polling to monitor the long-running operation, which might generate additional billable steps. For more information about retries and long-running operations, refer to [Understand connectors](/workflows/docs/connectors).

The polling policy for the long-running operation can be configured. To set the connector-specific parameters (`connector_params`), refer to [Invoke a connector call](/workflows/docs/reference/googleapis#invoke_a_connector_call).

## Arguments

Parameters

`name`

`string`

Required. The name of the operation resource to wait on.

`timeout`

`string ([Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) format)`

The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.

`region`

`string`

Required. Region of the HTTP endpoint. For example, if region is set to `us-central1`, the endpoint https://us-central1-integrations.googleapis.com will be used. See [service endpoints](https://cloud.google.com/vertex-ai/docs/reference/rest#rest_endpoints).

## Raised exceptions

Exceptions

`ConnectionError`

In case of a network problem (such as DNS failure or refused connection).

`HttpError`

If the response status is >= 400 (excluding 429 and 503).

`TimeoutError`

If a long-running operation takes longer to finish than the specified timeout limit.

`TypeError`

If an operation or function receives an argument of the wrong type.

`ValueError`

If an operation or function receives an argument of the right type but an inappropriate value. For example, a negative timeout.

`OperationError`

If the long-running operation finished unsuccessfully.

`ResponseTypeError`

If the long-running operation returned a response of the wrong type.

## Response

If successful, the response contains an instance of [`GoogleLongrunningOperation`](https://cloud.google.com/workflows/docs/reference/googleapis/aiplatform/v1beta1/Overview#GoogleLongrunningOperation).

## Subworkflow snippet

Some fields might be optional or required. To identify required fields, refer to the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1beta1/projects.locations.operations/wait).

### YAML

\- wait:
    call: googleapis.aiplatform.v1beta1.projects.locations.operations.wait
    args:
        name: ...
        timeout: ...
        region: ...
    result: waitResult

### JSON

\[
  {
    "wait": {
      "call": "googleapis.aiplatform.v1beta1.projects.locations.operations.wait",
      "args": {
        "name": "...",
        "timeout": "...",
        "region": "..."
      },
      "result": "waitResult"
    }
  }
\]

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
