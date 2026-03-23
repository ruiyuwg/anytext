-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Python](https://docs.cloud.google.com/python/docs)
-   [Client libraries](https://docs.cloud.google.com/python/docs/reference)

Send feedback

# Class SnapshotsV1Beta3AsyncClient (0.8.17) Stay organized with collections Save and categorize content based on your preferences.

Version 0.8.17keyboard\_arrow\_down

-   [0.11.0 (latest)](/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.10.0](/python/docs/reference/dataflow/0.10.0/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.9.0](/python/docs/reference/dataflow/0.9.0/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.8.17](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.7.0](/python/docs/reference/dataflow/0.7.0/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.6.2](/python/docs/reference/dataflow/0.6.2/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.5.5](/python/docs/reference/dataflow/0.5.5/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.4.1](/python/docs/reference/dataflow/0.4.1/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.3.1](/python/docs/reference/dataflow/0.3.1/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.2.0](/python/docs/reference/dataflow/0.2.0/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
-   [0.1.5](/python/docs/reference/dataflow/0.1.5/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)

```
SnapshotsV1Beta3AsyncClient(*, credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.transports.base.SnapshotsV1Beta3Transport, typing.Callable[[...], google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.transports.base.SnapshotsV1Beta3Transport]]] = 'grpc_asyncio', client_options: typing.Optional[google.api_core.client_options.ClientOptions] = None, client_info: google.api_core.gapic_v1.client_info.ClientInfo = <google.api_core.gapic_v1.client_info.ClientInfo object>)
```

Provides methods to manage snapshots of Google Cloud Dataflow jobs.

## Properties

### api\_endpoint

Return the API endpoint used by the client instance.

**Returns**

**Type**

**Description**

`str`

The API endpoint used by the client instance.

### transport

Returns the transport used by the client instance.

**Returns**

**Type**

**Description**

`SnapshotsV1Beta3Transport`

The transport used by the client instance.

### universe\_domain

Return the universe domain used by the client instance.

**Returns**

**Type**

**Description**

`str`

The universe domain used by the client instance.

## Methods

### SnapshotsV1Beta3AsyncClient

```
SnapshotsV1Beta3AsyncClient(*, credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.transports.base.SnapshotsV1Beta3Transport, typing.Callable[[...], google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.transports.base.SnapshotsV1Beta3Transport]]] = 'grpc_asyncio', client_options: typing.Optional[google.api_core.client_options.ClientOptions] = None, client_info: google.api_core.gapic_v1.client_info.ClientInfo = <google.api_core.gapic_v1.client_info.ClientInfo object>)
```

Instantiates the snapshots v1 beta3 async client.

**Parameters**

**Name**

**Description**

`credentials`

`Optional[google.auth.credentials.Credentials]`  

The authorization credentials to attach to requests. These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment.

`transport`

`Optional[Union[str,SnapshotsV1Beta3Transport,Callable[..., SnapshotsV1Beta3Transport]]]`  

The transport to use, or a Callable that constructs and returns a new transport to use. If a Callable is given, it will be called with the same set of initialization arguments as used in the SnapshotsV1Beta3Transport constructor. If set to None, a transport is chosen automatically.

`client_options`

`Optional[Union[google.api_core.client_options.ClientOptions, dict]]`  

Custom options for the client. 1. The `api_endpoint` property can be used to override the default endpoint provided by the client when `transport` is not explicitly provided. Only if this property is not set and `transport` was not explicitly provided, the endpoint is determined by the GOOGLE\_API\_USE\_MTLS\_ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value). 2. If the GOOGLE\_API\_USE\_CLIENT\_CERTIFICATE environment variable is "true", then the `client_cert_source` property can be used to provide a client certificate for mTLS transport. If not provided, the default SSL client certificate will be used if present. If GOOGLE\_API\_USE\_CLIENT\_CERTIFICATE is "false" or not set, no client certificate will be used. 3. The `universe_domain` property can be used to override the default "googleapis.com" universe. Note that `api_endpoint` property still takes precedence; and `universe_domain` is currently not supported for mTLS.

`client_info`

`google.api_core.gapic_v1.client_info.ClientInfo`  

The client info used to send a user-agent string along with API requests. If `None`, then default info will be used. Generally, you only need to set this if you're developing your own client library.

**Exceptions**

**Type**

**Description**

`google.auth.exceptions.MutualTlsChannelError`

If mutual TLS transport creation failed for any reason.

### common\_billing\_account\_path

```
common_billing_account_path(billing_account: str) -> str
```

Returns a fully-qualified billing\_account string.

### common\_folder\_path

```
common_folder_path(folder: str) -> str
```

Returns a fully-qualified folder string.

### common\_location\_path

```
common_location_path(project: str, location: str) -> str
```

Returns a fully-qualified location string.

### common\_organization\_path

```
common_organization_path(organization: str) -> str
```

Returns a fully-qualified organization string.

### common\_project\_path

```
common_project_path(project: str) -> str
```

Returns a fully-qualified project string.

### delete\_snapshot

```
delete_snapshot(
    request: typing.Optional[
        typing.Union[
            google.cloud.dataflow_v1beta3.types.snapshots.DeleteSnapshotRequest, dict
        ]
    ] = None,
    *,
    retry: typing.Optional[
        typing.Union[
            google.api_core.retry.retry_unary_async.AsyncRetry,
            google.api_core.gapic_v1.method._MethodDefault,
        ]
    ] = _MethodDefault._DEFAULT_VALUE,
    timeout: typing.Union[float, object] = _MethodDefault._DEFAULT_VALUE,
    metadata: typing.Sequence[typing.Tuple[str, typing.Union[str, bytes]]] = ()
) -> google.cloud.dataflow_v1beta3.types.snapshots.DeleteSnapshotResponse
```

Deletes a snapshot.

```
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
#   client as shown in:
#   https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataflow_v1beta3

async def sample_delete_snapshot():
    # Create a client
    client = dataflow_v1beta3.SnapshotsV1Beta3AsyncClient()

    # Initialize request argument(s)
    request = dataflow_v1beta3.DeleteSnapshotRequest(
    )

    # Make the request
    response = await client.delete_snapshot(request=request)

    # Handle the response
    print(response)
```

**Parameters**

**Name**

**Description**

`request`

`Optional[Union[[google.cloud.dataflow_v1beta3.types.DeleteSnapshotRequest](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.DeleteSnapshotRequest), dict]]`  

The request object. Request to delete a snapshot.

`retry`

`google.api_core.retry_async.AsyncRetry`  

Designation of what errors, if any, should be retried.

`timeout`

`float`  

The timeout for this request.

`metadata`

`Sequence[Tuple[str, Union[str, bytes]]]`  

Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type `str`, but for metadata keys ending with the suffix `-bin`, the corresponding values must be of type `bytes`.

**Returns**

**Type**

**Description**

`[google.cloud.dataflow_v1beta3.types.DeleteSnapshotResponse](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.DeleteSnapshotResponse)`

Response from deleting a snapshot.

### from\_service\_account\_file

```
from_service_account_file(filename: str, *args, **kwargs)
```

Creates an instance of this client using the provided credentials file.

**Parameter**

**Name**

**Description**

`filename`

`str`  

The path to the service account private key json file.

**Returns**

**Type**

**Description**

`SnapshotsV1Beta3AsyncClient`

The constructed client.

### from\_service\_account\_info

```
from_service_account_info(info: dict, *args, **kwargs)
```

Creates an instance of this client using the provided credentials info.

**Parameter**

**Name**

**Description**

`info`

`dict`  

The service account private key info.

**Returns**

**Type**

**Description**

`SnapshotsV1Beta3AsyncClient`

The constructed client.

### from\_service\_account\_json

```
from_service_account_json(filename: str, *args, **kwargs)
```

Creates an instance of this client using the provided credentials file.

**Parameter**

**Name**

**Description**

`filename`

`str`  

The path to the service account private key json file.

**Returns**

**Type**

**Description**

`SnapshotsV1Beta3AsyncClient`

The constructed client.

### get\_mtls\_endpoint\_and\_cert\_source

```
get_mtls_endpoint_and_cert_source(
    client_options: typing.Optional[
        google.api_core.client_options.ClientOptions
    ] = None,
)
```

Return the API endpoint and client cert source for mutual TLS.

The client cert source is determined in the following order: (1) if `GOOGLE_API_USE_CLIENT_CERTIFICATE` environment variable is not "true", the client cert source is None. (2) if `client_options.client_cert_source` is provided, use the provided one; if the default client cert source exists, use the default one; otherwise the client cert source is None.

The API endpoint is determined in the following order: (1) if `client_options.api_endpoint` if provided, use the provided one. (2) if `GOOGLE_API_USE_CLIENT_CERTIFICATE` environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.

More details can be found at [https://google.aip.dev/auth/4114](https://google.aip.dev/auth/4114).

**Parameter**

**Name**

**Description**

`client_options`

`google.api_core.client_options.ClientOptions`  

Custom options for the client. Only the `api_endpoint` and `client_cert_source` properties may be used in this method.

**Exceptions**

**Type**

**Description**

`google.auth.exceptions.MutualTLSChannelError`

If any errors happen.

**Returns**

**Type**

**Description**

`Tuple[str, Callable[[], Tuple[bytes, bytes]]]`

returns the API endpoint and the client cert source to use.

### get\_snapshot

```
get_snapshot(
    request: typing.Optional[
        typing.Union[
            google.cloud.dataflow_v1beta3.types.snapshots.GetSnapshotRequest, dict
        ]
    ] = None,
    *,
    retry: typing.Optional[
        typing.Union[
            google.api_core.retry.retry_unary_async.AsyncRetry,
            google.api_core.gapic_v1.method._MethodDefault,
        ]
    ] = _MethodDefault._DEFAULT_VALUE,
    timeout: typing.Union[float, object] = _MethodDefault._DEFAULT_VALUE,
    metadata: typing.Sequence[typing.Tuple[str, typing.Union[str, bytes]]] = ()
) -> google.cloud.dataflow_v1beta3.types.snapshots.Snapshot
```

Gets information about a snapshot.

```
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
#   client as shown in:
#   https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataflow_v1beta3

async def sample_get_snapshot():
    # Create a client
    client = dataflow_v1beta3.SnapshotsV1Beta3AsyncClient()

    # Initialize request argument(s)
    request = dataflow_v1beta3.GetSnapshotRequest(
    )

    # Make the request
    response = await client.get_snapshot(request=request)

    # Handle the response
    print(response)
```

**Parameters**

**Name**

**Description**

`request`

`Optional[Union[[google.cloud.dataflow_v1beta3.types.GetSnapshotRequest](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.GetSnapshotRequest), dict]]`  

The request object. Request to get information about a snapshot

`retry`

`google.api_core.retry_async.AsyncRetry`  

Designation of what errors, if any, should be retried.

`timeout`

`float`  

The timeout for this request.

`metadata`

`Sequence[Tuple[str, Union[str, bytes]]]`  

Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type `str`, but for metadata keys ending with the suffix `-bin`, the corresponding values must be of type `bytes`.

**Returns**

**Type**

**Description**

`[google.cloud.dataflow_v1beta3.types.Snapshot](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.Snapshot)`

Represents a snapshot of a job.

### get\_transport\_class

```
get_transport_class(
    label: typing.Optional[str] = None,
) -> typing.Type[
    google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.transports.base.SnapshotsV1Beta3Transport
]
```

Returns an appropriate transport class.

**Parameter**

**Name**

**Description**

`label`

`typing.Optional[str]`  

The name of the desired transport. If none is provided, then the first transport in the registry is used.

### list\_snapshots

```
list_snapshots(
    request: typing.Optional[
        typing.Union[
            google.cloud.dataflow_v1beta3.types.snapshots.ListSnapshotsRequest, dict
        ]
    ] = None,
    *,
    retry: typing.Optional[
        typing.Union[
            google.api_core.retry.retry_unary_async.AsyncRetry,
            google.api_core.gapic_v1.method._MethodDefault,
        ]
    ] = _MethodDefault._DEFAULT_VALUE,
    timeout: typing.Union[float, object] = _MethodDefault._DEFAULT_VALUE,
    metadata: typing.Sequence[typing.Tuple[str, typing.Union[str, bytes]]] = ()
) -> google.cloud.dataflow_v1beta3.types.snapshots.ListSnapshotsResponse
```

Lists snapshots.

```
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
#   client as shown in:
#   https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataflow_v1beta3

async def sample_list_snapshots():
    # Create a client
    client = dataflow_v1beta3.SnapshotsV1Beta3AsyncClient()

    # Initialize request argument(s)
    request = dataflow_v1beta3.ListSnapshotsRequest(
    )

    # Make the request
    response = await client.list_snapshots(request=request)

    # Handle the response
    print(response)
```

**Parameters**

**Name**

**Description**

`request`

`Optional[Union[[google.cloud.dataflow_v1beta3.types.ListSnapshotsRequest](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.ListSnapshotsRequest), dict]]`  

The request object. Request to list snapshots.

`retry`

`google.api_core.retry_async.AsyncRetry`  

Designation of what errors, if any, should be retried.

`timeout`

`float`  

The timeout for this request.

`metadata`

`Sequence[Tuple[str, Union[str, bytes]]]`  

Key/value pairs which should be sent along with the request as metadata. Normally, each value must be of type `str`, but for metadata keys ending with the suffix `-bin`, the corresponding values must be of type `bytes`.

**Returns**

**Type**

**Description**

`[google.cloud.dataflow_v1beta3.types.ListSnapshotsResponse](/python/docs/reference/dataflow/0.8.17/google.cloud.dataflow_v1beta3.types.ListSnapshotsResponse)`

List of snapshots.

### parse\_common\_billing\_account\_path

```
parse_common_billing_account_path(path: str) -> typing.Dict[str, str]
```

Parse a billing\_account path into its component segments.

### parse\_common\_folder\_path

```
parse_common_folder_path(path: str) -> typing.Dict[str, str]
```

Parse a folder path into its component segments.

### parse\_common\_location\_path

```
parse_common_location_path(path: str) -> typing.Dict[str, str]
```

Parse a location path into its component segments.

### parse\_common\_organization\_path

```
parse_common_organization_path(path: str) -> typing.Dict[str, str]
```

Parse a organization path into its component segments.

### parse\_common\_project\_path

```
parse_common_project_path(path: str) -> typing.Dict[str, str]
```

Parse a project path into its component segments.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
