-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Discovery Engine V1BETA API - Class Google::Longrunning::OperationInfo (v0.19.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.19.0keyboard\_arrow\_down

-   [0.23.1 (latest)](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/latest/Google-Longrunning-OperationInfo)
-   [0.23.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.23.0/Google-Longrunning-OperationInfo)
-   [0.22.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.22.0/Google-Longrunning-OperationInfo)
-   [0.21.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.21.0/Google-Longrunning-OperationInfo)
-   [0.20.1](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.20.1/Google-Longrunning-OperationInfo)
-   [0.19.1](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.19.1/Google-Longrunning-OperationInfo)
-   [0.18.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.18.0/Google-Longrunning-OperationInfo)
-   [0.17.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.17.0/Google-Longrunning-OperationInfo)
-   [0.16.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.16.0/Google-Longrunning-OperationInfo)
-   [0.15.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.15.0/Google-Longrunning-OperationInfo)
-   [0.14.2](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.14.2/Google-Longrunning-OperationInfo)
-   [0.13.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.13.0/Google-Longrunning-OperationInfo)
-   [0.12.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.12.0/Google-Longrunning-OperationInfo)
-   [0.11.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.11.0/Google-Longrunning-OperationInfo)
-   [0.10.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.10.0/Google-Longrunning-OperationInfo)
-   [0.9.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.9.0/Google-Longrunning-OperationInfo)
-   [0.8.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.8.0/Google-Longrunning-OperationInfo)
-   [0.7.2](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.7.2/Google-Longrunning-OperationInfo)
-   [0.6.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.6.0/Google-Longrunning-OperationInfo)
-   [0.5.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.5.0/Google-Longrunning-OperationInfo)
-   [0.4.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.4.0/Google-Longrunning-OperationInfo)
-   [0.3.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.3.0/Google-Longrunning-OperationInfo)
-   [0.2.1](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.2.1/Google-Longrunning-OperationInfo)
-   [0.1.0](/ruby/docs/reference/google-cloud-discovery_engine-v1beta/0.1.0/Google-Longrunning-OperationInfo)

Reference documentation and code samples for the Discovery Engine V1BETA API class Google::Longrunning::OperationInfo.

A message representing the message types used by a long-running operation.

Example:

```
rpc Export(ExportRequest) returns (google.longrunning.Operation) {
  option (google.longrunning.operation_info) = {
    response_type: "ExportResponse"
    metadata_type: "ExportMetadata"
  };
}
```

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #metadata\_type

```
def metadata_type() -> ::String
```

**Returns**

-   (::String) — Required. The message name of the metadata type for this long-running operation.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

### #metadata\_type=

```
def metadata_type=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The message name of the metadata type for this long-running operation.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

**Returns**

-   (::String) — Required. The message name of the metadata type for this long-running operation.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

### #response\_type

```
def response_type() -> ::String
```

**Returns**

-   (::String) — Required. The message name of the primary return type for this long-running operation. This type will be used to deserialize the LRO's response.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

### #response\_type=

```
def response_type=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The message name of the primary return type for this long-running operation. This type will be used to deserialize the LRO's response.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

**Returns**

-   (::String) — Required. The message name of the primary return type for this long-running operation. This type will be used to deserialize the LRO's response.
    
    If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. `google.protobuf.Struct`).
    
    Note: Altering this value constitutes a breaking change.
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
