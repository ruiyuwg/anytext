-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud AutoML V1beta1 API - Class Google::Cloud::AutoML::V1beta1::UpdateColumnSpecRequest (v0.13.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.13.0keyboard\_arrow\_down

-   [0.16.1 (latest)](/ruby/docs/reference/google-cloud-automl-v1beta1/latest/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.16.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.16.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.15.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.15.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.14.1](/ruby/docs/reference/google-cloud-automl-v1beta1/0.14.1/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.13.1](/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.1/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.12.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.12.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.11.1](/ruby/docs/reference/google-cloud-automl-v1beta1/0.11.1/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.10.2](/ruby/docs/reference/google-cloud-automl-v1beta1/0.10.2/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.9.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.9.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.8.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.8.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.7.0](/ruby/docs/reference/google-cloud-automl-v1beta1/0.7.0/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.6.1](/ruby/docs/reference/google-cloud-automl-v1beta1/0.6.1/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)
-   [0.5.5](/ruby/docs/reference/google-cloud-automl-v1beta1/0.5.5/Google-Cloud-AutoML-V1beta1-UpdateColumnSpecRequest)

Reference documentation and code samples for the Cloud AutoML V1beta1 API class Google::Cloud::AutoML::V1beta1::UpdateColumnSpecRequest.

Request message for [AutoMl.UpdateColumnSpec](/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Cloud-AutoML-V1beta1-AutoML-Client#Google__Cloud__AutoML__V1beta1__AutoML__Client_update_column_spec_instance_ "Google::Cloud::AutoML::V1beta1::AutoML::Client#update_column_spec (method)")

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #column\_spec

```
def column_spec() -> ::Google::Cloud::AutoML::V1beta1::ColumnSpec
```

**Returns**

-   ([::Google::Cloud::AutoML::V1beta1::ColumnSpec](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Cloud-AutoML-V1beta1-ColumnSpec)) — Required. The column spec which replaces the resource on the server.

### #column\_spec=

```
def column_spec=(value) -> ::Google::Cloud::AutoML::V1beta1::ColumnSpec
```

**Parameter**

-   **value** ([::Google::Cloud::AutoML::V1beta1::ColumnSpec](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Cloud-AutoML-V1beta1-ColumnSpec)) — Required. The column spec which replaces the resource on the server.

**Returns**

-   ([::Google::Cloud::AutoML::V1beta1::ColumnSpec](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Cloud-AutoML-V1beta1-ColumnSpec)) — Required. The column spec which replaces the resource on the server.

### #update\_mask

```
def update_mask() -> ::Google::Protobuf::FieldMask
```

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Protobuf-FieldMask)) — The update mask applies to the resource.

### #update\_mask=

```
def update_mask=(value) -> ::Google::Protobuf::FieldMask
```

**Parameter**

-   **value** ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Protobuf-FieldMask)) — The update mask applies to the resource.

**Returns**

-   ([::Google::Protobuf::FieldMask](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-automl-v1beta1/0.13.0/Google-Protobuf-FieldMask)) — The update mask applies to the resource.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
