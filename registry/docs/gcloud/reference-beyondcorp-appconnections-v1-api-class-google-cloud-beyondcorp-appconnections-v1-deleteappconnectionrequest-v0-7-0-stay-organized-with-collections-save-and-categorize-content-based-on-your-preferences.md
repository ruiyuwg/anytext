-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# BeyondCorp AppConnections V1 API - Class Google::Cloud::BeyondCorp::AppConnections::V1::DeleteAppConnectionRequest (v0.7.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.7.0keyboard\_arrow\_down

-   [0.10.1 (latest)](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/latest/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.10.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.10.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.9.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.9.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.8.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.8.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.7.1](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.7.1/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.6.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.6.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.5.2](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.5.2/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.4.2](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.4.2/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.3.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.2.0](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.2.0/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)
-   [0.1.1](/ruby/docs/reference/google-cloud-beyond_corp-app_connections-v1/0.1.1/Google-Cloud-BeyondCorp-AppConnections-V1-DeleteAppConnectionRequest)

Reference documentation and code samples for the BeyondCorp AppConnections V1 API class Google::Cloud::BeyondCorp::AppConnections::V1::DeleteAppConnectionRequest.

Request message for BeyondCorp.DeleteAppConnection.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #name

```
def name() -> ::String
```

**Returns**

-   (::String) — Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}`

### #name=

```
def name=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}`

**Returns**

-   (::String) — Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}`

### #request\_id

```
def request_id() -> ::String
```

**Returns**

-   (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #request\_id=

```
def request_id=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

**Returns**

-   (::String) — Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.
    
    For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
    
    The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
    

### #validate\_only

```
def validate_only() -> ::Boolean
```

**Returns**

-   (::Boolean) — Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.

### #validate\_only=

```
def validate_only=(value) -> ::Boolean
```

**Parameter**

-   **value** (::Boolean) — Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.

**Returns**

-   (::Boolean) — Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
