-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# License Manager V1 API - Class Google::Rpc::Status (v0.3.1) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.3.1 (latest)](/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Rpc-Status)
-   [0.3.0](/ruby/docs/reference/google-cloud-license_manager-v1/0.3.0/Google-Rpc-Status)
-   [0.2.0](/ruby/docs/reference/google-cloud-license_manager-v1/0.2.0/Google-Rpc-Status)
-   [0.1.0](/ruby/docs/reference/google-cloud-license_manager-v1/0.1.0/Google-Rpc-Status)

Reference documentation and code samples for the License Manager V1 API class Google::Rpc::Status.

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #code

```
def code() -> ::Integer
```

**Returns**

-   (::Integer) — The status code, which should be an enum value of \[google.rpc.Code\]\[google.rpc.Code\].

### #code=

```
def code=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — The status code, which should be an enum value of \[google.rpc.Code\]\[google.rpc.Code\].

**Returns**

-   (::Integer) — The status code, which should be an enum value of \[google.rpc.Code\]\[google.rpc.Code\].

### #details

```
def details() -> ::Array<::Google::Protobuf::Any>
```

**Returns**

-   (::Array<[::Google::Protobuf::Any](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Protobuf-Any)\>) — A list of messages that carry the error details. There is a common set of message types for APIs to use.

### #details=

```
def details=(value) -> ::Array<::Google::Protobuf::Any>
```

**Parameter**

-   **value** (::Array<[::Google::Protobuf::Any](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Protobuf-Any)\>) — A list of messages that carry the error details. There is a common set of message types for APIs to use.

**Returns**

-   (::Array<[::Google::Protobuf::Any](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Protobuf-Any)\>) — A list of messages that carry the error details. There is a common set of message types for APIs to use.

### #message

```
def message() -> ::String
```

**Returns**

-   (::String) — A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details](/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Rpc-Status#Google__Rpc__Status_details_instance_ "Google::Rpc::Status#details (method)") field, or localized by the client.

### #message=

```
def message=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details](/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Rpc-Status#Google__Rpc__Status_details_instance_ "Google::Rpc::Status#details (method)") field, or localized by the client.

**Returns**

-   (::String) — A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details](/ruby/docs/reference/google-cloud-license_manager-v1/latest/Google-Rpc-Status#Google__Rpc__Status_details_instance_ "Google::Rpc::Status#details (method)") field, or localized by the client.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
