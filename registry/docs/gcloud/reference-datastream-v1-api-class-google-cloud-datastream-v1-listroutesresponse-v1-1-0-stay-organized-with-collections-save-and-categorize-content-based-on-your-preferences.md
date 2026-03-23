-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Datastream V1 API - Class Google::Cloud::Datastream::V1::ListRoutesResponse (v1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.5.1 (latest)](/ruby/docs/reference/google-cloud-datastream-v1/latest/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.5.0](/ruby/docs/reference/google-cloud-datastream-v1/1.5.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.4.0](/ruby/docs/reference/google-cloud-datastream-v1/1.4.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.3.0](/ruby/docs/reference/google-cloud-datastream-v1/1.3.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.2.1](/ruby/docs/reference/google-cloud-datastream-v1/1.2.1/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.1.1](/ruby/docs/reference/google-cloud-datastream-v1/1.1.1/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [1.0.0](/ruby/docs/reference/google-cloud-datastream-v1/1.0.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.13.0](/ruby/docs/reference/google-cloud-datastream-v1/0.13.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.12.0](/ruby/docs/reference/google-cloud-datastream-v1/0.12.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.11.0](/ruby/docs/reference/google-cloud-datastream-v1/0.11.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.10.1](/ruby/docs/reference/google-cloud-datastream-v1/0.10.1/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.9.2](/ruby/docs/reference/google-cloud-datastream-v1/0.9.2/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.8.0](/ruby/docs/reference/google-cloud-datastream-v1/0.8.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.7.0](/ruby/docs/reference/google-cloud-datastream-v1/0.7.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.6.0](/ruby/docs/reference/google-cloud-datastream-v1/0.6.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.5.0](/ruby/docs/reference/google-cloud-datastream-v1/0.5.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.4.0](/ruby/docs/reference/google-cloud-datastream-v1/0.4.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.3.0](/ruby/docs/reference/google-cloud-datastream-v1/0.3.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.2.0](/ruby/docs/reference/google-cloud-datastream-v1/0.2.0/Google-Cloud-Datastream-V1-ListRoutesResponse)
-   [0.1.0](/ruby/docs/reference/google-cloud-datastream-v1/0.1.0/Google-Cloud-Datastream-V1-ListRoutesResponse)

Reference documentation and code samples for the Datastream V1 API class Google::Cloud::Datastream::V1::ListRoutesResponse.

Route list response.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #next\_page\_token

```
def next_page_token() -> ::String
```

**Returns**

-   (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### #next\_page\_token=

```
def next_page_token=(value) -> ::String
```

**Parameter**

-   **value** (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

**Returns**

-   (::String) — A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.

### #routes

```
def routes() -> ::Array<::Google::Cloud::Datastream::V1::Route>
```

**Returns**

-   (::Array<[::Google::Cloud::Datastream::V1::Route](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastream-v1/1.1.0/Google-Cloud-Datastream-V1-Route)\>) — List of Routes.

### #routes=

```
def routes=(value) -> ::Array<::Google::Cloud::Datastream::V1::Route>
```

**Parameter**

-   **value** (::Array<[::Google::Cloud::Datastream::V1::Route](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastream-v1/1.1.0/Google-Cloud-Datastream-V1-Route)\>) — List of Routes.

**Returns**

-   (::Array<[::Google::Cloud::Datastream::V1::Route](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-datastream-v1/1.1.0/Google-Cloud-Datastream-V1-Route)\>) — List of Routes.

### #unreachable

```
def unreachable() -> ::Array<::String>
```

**Returns**

-   (::Array<::String>) — Locations that could not be reached.

### #unreachable=

```
def unreachable=(value) -> ::Array<::String>
```

**Parameter**

-   **value** (::Array<::String>) — Locations that could not be reached.

**Returns**

-   (::Array<::String>) — Locations that could not be reached.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
