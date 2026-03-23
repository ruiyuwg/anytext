-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Security Compliance V1 API - Class Google::Cloud::CloudSecurityCompliance::V1::FrameworkReference (v0.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.2.0 (latest)](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/latest/Google-Cloud-CloudSecurityCompliance-V1-FrameworkReference)
-   [0.1.1](/ruby/docs/reference/google-cloud-cloud_security_compliance-v1/0.1.1/Google-Cloud-CloudSecurityCompliance-V1-FrameworkReference)

Reference documentation and code samples for the Cloud Security Compliance V1 API class Google::Cloud::CloudSecurityCompliance::V1::FrameworkReference.

The reference of a framework, in the format `organizations/{organization}/locations/{location}/frameworks/{framework}`. The only supported location is `global`.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #framework

```
def framework() -> ::String
```

**Returns**

-   (::String) — Required. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

### #framework=

```
def framework=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

**Returns**

-   (::String) — Required. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

### #major\_revision\_id

```
def major_revision_id() -> ::Integer
```

**Returns**

-   (::Integer) — Optional. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

### #major\_revision\_id=

```
def major_revision_id=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — Optional. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

**Returns**

-   (::Integer) — Optional. The major version of the framework. If not specified, the version corresponds to the latest version of the framework.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
