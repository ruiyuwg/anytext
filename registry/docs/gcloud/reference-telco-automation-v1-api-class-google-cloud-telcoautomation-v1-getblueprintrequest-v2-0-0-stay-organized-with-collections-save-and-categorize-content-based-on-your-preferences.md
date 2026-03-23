-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Telco Automation V1 API - Class Google::Cloud::TelcoAutomation::V1::GetBlueprintRequest (v2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.3.1 (latest)](/ruby/docs/reference/google-cloud-telco_automation-v1/latest/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [2.3.0](/ruby/docs/reference/google-cloud-telco_automation-v1/2.3.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [2.2.0](/ruby/docs/reference/google-cloud-telco_automation-v1/2.2.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [2.1.0](/ruby/docs/reference/google-cloud-telco_automation-v1/2.1.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [2.0.1](/ruby/docs/reference/google-cloud-telco_automation-v1/2.0.1/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [1.2.0](/ruby/docs/reference/google-cloud-telco_automation-v1/1.2.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [1.1.0](/ruby/docs/reference/google-cloud-telco_automation-v1/1.1.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [1.0.2](/ruby/docs/reference/google-cloud-telco_automation-v1/1.0.2/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [0.4.0](/ruby/docs/reference/google-cloud-telco_automation-v1/0.4.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [0.3.0](/ruby/docs/reference/google-cloud-telco_automation-v1/0.3.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [0.2.1](/ruby/docs/reference/google-cloud-telco_automation-v1/0.2.1/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)
-   [0.1.0](/ruby/docs/reference/google-cloud-telco_automation-v1/0.1.0/Google-Cloud-TelcoAutomation-V1-GetBlueprintRequest)

Reference documentation and code samples for the Telco Automation V1 API class Google::Cloud::TelcoAutomation::V1::GetBlueprintRequest.

Request object for `GetBlueprint`.

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

-   (::String) — Required. The name of the blueprint. Case 1: If the name provided in the request is {blueprint\_id}@{revision\_id}, then the revision with revision\_id will be returned. Case 2: If the name provided in the request is {blueprint}, then the current state of the blueprint is returned.

### #name=

```
def name=(value) -> ::String
```

**Parameter**

-   **value** (::String) — Required. The name of the blueprint. Case 1: If the name provided in the request is {blueprint\_id}@{revision\_id}, then the revision with revision\_id will be returned. Case 2: If the name provided in the request is {blueprint}, then the current state of the blueprint is returned.

**Returns**

-   (::String) — Required. The name of the blueprint. Case 1: If the name provided in the request is {blueprint\_id}@{revision\_id}, then the revision with revision\_id will be returned. Case 2: If the name provided in the request is {blueprint}, then the current state of the blueprint is returned.

### #view

```
def view() -> ::Google::Cloud::TelcoAutomation::V1::BlueprintView
```

**Returns**

-   ([::Google::Cloud::TelcoAutomation::V1::BlueprintView](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-telco_automation-v1/2.0.0/Google-Cloud-TelcoAutomation-V1-BlueprintView)) — Optional. Defines the type of view of the blueprint. When field is not present BLUEPRINT\_VIEW\_BASIC is considered as default.

### #view=

```
def view=(value) -> ::Google::Cloud::TelcoAutomation::V1::BlueprintView
```

**Parameter**

-   **value** ([::Google::Cloud::TelcoAutomation::V1::BlueprintView](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-telco_automation-v1/2.0.0/Google-Cloud-TelcoAutomation-V1-BlueprintView)) — Optional. Defines the type of view of the blueprint. When field is not present BLUEPRINT\_VIEW\_BASIC is considered as default.

**Returns**

-   ([::Google::Cloud::TelcoAutomation::V1::BlueprintView](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-telco_automation-v1/2.0.0/Google-Cloud-TelcoAutomation-V1-BlueprintView)) — Optional. Defines the type of view of the blueprint. When field is not present BLUEPRINT\_VIEW\_BASIC is considered as default.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
