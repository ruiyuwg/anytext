The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new [Oracle and Google Cloud strategic partnership offerings](/bare-metal/docs/explore-oracle-partnership-offerings).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud)
-   [Bare Metal](https://docs.cloud.google.com/bare-metal/docs)
-   [Reference](https://docs.cloud.google.com/bare-metal/docs/reference)

Send feedback

# REST Resource: projects.locations.operations Stay organized with collections Save and categorize content based on your preferences.

 

## Resource: Operation

This resource represents a long-running operation that is the result of a network API call.

JSON representation

{
  "name": string,
  "metadata": {
    "@type": string,
    field1: ...,
    ...
  },
  "done": boolean,

  // Union field `result` can be only one of the following:
  "error": {
    object (`[Status](/bare-metal/docs/reference/rest/v2/projects.locations.operations#Status)`)
  },
  "response": {
    "@type": string,
    field1: ...,
    ...
  }
  // End of list of possible types for union field `result`.
}

 

Fields

`name`

`string`

The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.

`metadata`

`object`

Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.

`done`

`boolean`

If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.

Union field `result`. The operation result, which can be either an `error` or a valid `response`. If `done` == `false`, neither `error` nor `response` is set. If `done` == `true`, exactly one of `error` or `response` may be set. Some services might not provide the result. `result` can be only one of the following:

`error`

``object (`[Status](/bare-metal/docs/reference/rest/v2/projects.locations.operations#Status)`)``

The error result of the operation in case of failure or cancellation.

`response`

`object`

The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

## Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

JSON representation

{
  "code": integer,
  "message": string,
  "details": \[
    {
      "@type": string,
      field1: ...,
      ...
    }
  \]
}

 

Fields

`code`

`integer`

The status code, which should be an enum value of `google.rpc.Code`.

`message`

`string`

A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the `[google.rpc.Status.details](/bare-metal/docs/reference/rest/v2/projects.locations.operations#Status.FIELDS.details)` field, or localized by the client.

`details[]`

`object`

A list of messages that carry the error details. There is a common set of message types for APIs to use.

 

## Methods

### `[get](/bare-metal/docs/reference/rest/v2/projects.locations.operations/get)`

Get details about an operation.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2025-05-30 UTC.
