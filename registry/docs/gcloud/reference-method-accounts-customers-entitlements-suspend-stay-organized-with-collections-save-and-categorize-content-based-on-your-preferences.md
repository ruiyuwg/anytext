-   [Home](https://docs.cloud.google.com/)
-   [Domaines technologiques](https://docs.cloud.google.com/docs)
-   [Channel Services](https://docs.cloud.google.com/channel/docs)
-   [API et documentation de référence](https://docs.cloud.google.com/channel/docs/reference/libraries)

Send feedback

# Method: accounts.customers.entitlements.suspend Stay organized with collections Save and categorize content based on your preferences.

 

Suspends a previously fulfilled entitlement.

An entitlement suspension is a long-running operation.

Possible error codes:

-   PERMISSION\_DENIED: The customer doesn't belong to the reseller.
-   INVALID\_ARGUMENT: Required request parameters are missing or invalid.
-   NOT\_FOUND: Entitlement resource not found.
-   NOT\_ACTIVE: Entitlement is not active.
-   INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.
-   UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support.

Return value: The ID of a long-running operation.

To get the results of the operation, call the operations.get method of CloudChannelOperationsService. The Operation metadata will contain an instance of `OperationMetadata`.

### HTTP request

`POST https://cloudchannel.googleapis.com/v1/{name=accounts/*/customers/*/entitlements/*}:suspend`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

 

Parameters

`name`

`string`

Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account\_id}/customers/{customer\_id}/entitlements/{entitlement\_id}

### Request body

The request body contains data with the following structure:

JSON representation

{
  "requestId": string
}

 

Fields

`requestId`

`string`

Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete.

For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request.

The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).

### Response body

If successful, the response body contains an instance of `[Operation](/channel/docs/reference/rest/Shared.Types/ListOperationsResponse#Operation)`.

### Authorization scopes

Requires the following OAuth scope:

-   `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authentication Overview](/docs/authentication#authorization-gcp).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-19 UTC.
