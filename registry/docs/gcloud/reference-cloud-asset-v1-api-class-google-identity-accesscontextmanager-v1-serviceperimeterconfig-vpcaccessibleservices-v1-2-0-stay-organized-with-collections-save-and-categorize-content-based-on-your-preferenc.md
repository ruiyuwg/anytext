-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Asset V1 API - Class Google::Identity::AccessContextManager::V1::ServicePerimeterConfig::VpcAccessibleServices (v1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.6.1 (latest)](/ruby/docs/reference/google-cloud-asset-v1/latest/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.6.0](/ruby/docs/reference/google-cloud-asset-v1/1.6.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.5.0](/ruby/docs/reference/google-cloud-asset-v1/1.5.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.4.1](/ruby/docs/reference/google-cloud-asset-v1/1.4.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.3.1](/ruby/docs/reference/google-cloud-asset-v1/1.3.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.2.0](/ruby/docs/reference/google-cloud-asset-v1/1.2.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.1.0](/ruby/docs/reference/google-cloud-asset-v1/1.1.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [1.0.2](/ruby/docs/reference/google-cloud-asset-v1/1.0.2/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.32.0](/ruby/docs/reference/google-cloud-asset-v1/0.32.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.31.0](/ruby/docs/reference/google-cloud-asset-v1/0.31.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.30.0](/ruby/docs/reference/google-cloud-asset-v1/0.30.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.29.3](/ruby/docs/reference/google-cloud-asset-v1/0.29.3/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.28.1](/ruby/docs/reference/google-cloud-asset-v1/0.28.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.27.0](/ruby/docs/reference/google-cloud-asset-v1/0.27.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.26.1](/ruby/docs/reference/google-cloud-asset-v1/0.26.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.25.0](/ruby/docs/reference/google-cloud-asset-v1/0.25.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.24.0](/ruby/docs/reference/google-cloud-asset-v1/0.24.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.23.0](/ruby/docs/reference/google-cloud-asset-v1/0.23.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.22.0](/ruby/docs/reference/google-cloud-asset-v1/0.22.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.21.1](/ruby/docs/reference/google-cloud-asset-v1/0.21.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.20.1](/ruby/docs/reference/google-cloud-asset-v1/0.20.1/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.19.0](/ruby/docs/reference/google-cloud-asset-v1/0.19.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.18.0](/ruby/docs/reference/google-cloud-asset-v1/0.18.0/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)
-   [0.17.3](/ruby/docs/reference/google-cloud-asset-v1/0.17.3/Google-Identity-AccessContextManager-V1-ServicePerimeterConfig-VpcAccessibleServices)

Reference documentation and code samples for the Cloud Asset V1 API class Google::Identity::AccessContextManager::V1::ServicePerimeterConfig::VpcAccessibleServices.

Specifies how APIs are allowed to communicate within the Service Perimeter.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #allowed\_services

```
def allowed_services() -> ::Array<::String>
```

**Returns**

-   (::Array<::String>) — The list of APIs usable within the Service Perimeter. Must be empty unless 'enable\_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.

### #allowed\_services=

```
def allowed_services=(value) -> ::Array<::String>
```

**Parameter**

-   **value** (::Array<::String>) — The list of APIs usable within the Service Perimeter. Must be empty unless 'enable\_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.

**Returns**

-   (::Array<::String>) — The list of APIs usable within the Service Perimeter. Must be empty unless 'enable\_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.

### #enable\_restriction

```
def enable_restriction() -> ::Boolean
```

**Returns**

-   (::Boolean) — Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed\_services'.

### #enable\_restriction=

```
def enable_restriction=(value) -> ::Boolean
```

**Parameter**

-   **value** (::Boolean) — Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed\_services'.

**Returns**

-   (::Boolean) — Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed\_services'.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
