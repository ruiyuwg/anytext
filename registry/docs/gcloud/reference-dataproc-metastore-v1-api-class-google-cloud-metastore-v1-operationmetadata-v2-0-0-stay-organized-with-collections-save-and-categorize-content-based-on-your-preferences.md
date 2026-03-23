-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Dataproc Metastore V1 API - Class Google::Cloud::Metastore::V1::OperationMetadata (v2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.3.1 (latest)](/ruby/docs/reference/google-cloud-metastore-v1/latest/Google-Cloud-Metastore-V1-OperationMetadata)
-   [2.3.0](/ruby/docs/reference/google-cloud-metastore-v1/2.3.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [2.2.0](/ruby/docs/reference/google-cloud-metastore-v1/2.2.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [2.1.0](/ruby/docs/reference/google-cloud-metastore-v1/2.1.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [2.0.1](/ruby/docs/reference/google-cloud-metastore-v1/2.0.1/Google-Cloud-Metastore-V1-OperationMetadata)
-   [1.2.0](/ruby/docs/reference/google-cloud-metastore-v1/1.2.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [1.1.0](/ruby/docs/reference/google-cloud-metastore-v1/1.1.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [1.0.1](/ruby/docs/reference/google-cloud-metastore-v1/1.0.1/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.13.0](/ruby/docs/reference/google-cloud-metastore-v1/0.13.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.12.2](/ruby/docs/reference/google-cloud-metastore-v1/0.12.2/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.11.0](/ruby/docs/reference/google-cloud-metastore-v1/0.11.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.10.0](/ruby/docs/reference/google-cloud-metastore-v1/0.10.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.9.0](/ruby/docs/reference/google-cloud-metastore-v1/0.9.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.8.1](/ruby/docs/reference/google-cloud-metastore-v1/0.8.1/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.7.0](/ruby/docs/reference/google-cloud-metastore-v1/0.7.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.6.0](/ruby/docs/reference/google-cloud-metastore-v1/0.6.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.5.0](/ruby/docs/reference/google-cloud-metastore-v1/0.5.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.4.0](/ruby/docs/reference/google-cloud-metastore-v1/0.4.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.3.0](/ruby/docs/reference/google-cloud-metastore-v1/0.3.0/Google-Cloud-Metastore-V1-OperationMetadata)
-   [0.2.2](/ruby/docs/reference/google-cloud-metastore-v1/0.2.2/Google-Cloud-Metastore-V1-OperationMetadata)

Reference documentation and code samples for the Dataproc Metastore V1 API class Google::Cloud::Metastore::V1::OperationMetadata.

Represents the metadata of a long-running operation.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #api\_version

```
def api_version() -> ::String
```

**Returns**

-   (::String) — Output only. API version used to start the operation.

### #create\_time

```
def create_time() -> ::Google::Protobuf::Timestamp
```

**Returns**

-   ([::Google::Protobuf::Timestamp](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-metastore-v1/2.0.0/Google-Protobuf-Timestamp)) — Output only. The time the operation was created.

### #end\_time

```
def end_time() -> ::Google::Protobuf::Timestamp
```

**Returns**

-   ([::Google::Protobuf::Timestamp](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-metastore-v1/2.0.0/Google-Protobuf-Timestamp)) — Output only. The time the operation finished running.

### #requested\_cancellation

```
def requested_cancellation() -> ::Boolean
```

**Returns**

-   (::Boolean) — Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have \[Operation.error\]\[\] value with a [google.rpc.Status.code](/ruby/docs/reference/google-cloud-metastore-v1/2.0.0/Google-Rpc-Status#Google__Rpc__Status_code_instance_ "Google::Rpc::Status#code (method)") of 1, corresponding to `Code.CANCELLED`.

### #status\_message

```
def status_message() -> ::String
```

**Returns**

-   (::String) — Output only. Human-readable status of the operation, if any.

### #target

```
def target() -> ::String
```

**Returns**

-   (::String) — Output only. Server-defined resource path for the target of the operation.

### #verb

```
def verb() -> ::String
```

**Returns**

-   (::String) — Output only. Name of the verb executed by the operation.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
