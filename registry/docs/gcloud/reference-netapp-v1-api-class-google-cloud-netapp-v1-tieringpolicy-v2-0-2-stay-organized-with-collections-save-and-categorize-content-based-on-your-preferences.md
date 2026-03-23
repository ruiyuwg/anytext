-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# NetApp V1 API - Class Google::Cloud::NetApp::V1::TieringPolicy (v2.0.2) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.2keyboard\_arrow\_down

-   [2.8.0 (latest)](/ruby/docs/reference/google-cloud-netapp-v1/latest/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.7.0](/ruby/docs/reference/google-cloud-netapp-v1/2.7.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.6.1](/ruby/docs/reference/google-cloud-netapp-v1/2.6.1/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.5.0](/ruby/docs/reference/google-cloud-netapp-v1/2.5.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.4.0](/ruby/docs/reference/google-cloud-netapp-v1/2.4.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.3.0](/ruby/docs/reference/google-cloud-netapp-v1/2.3.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.2.0](/ruby/docs/reference/google-cloud-netapp-v1/2.2.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.1.0](/ruby/docs/reference/google-cloud-netapp-v1/2.1.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [2.0.2](/ruby/docs/reference/google-cloud-netapp-v1/2.0.2/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.6.0](/ruby/docs/reference/google-cloud-netapp-v1/1.6.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.5.0](/ruby/docs/reference/google-cloud-netapp-v1/1.5.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.4.0](/ruby/docs/reference/google-cloud-netapp-v1/1.4.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.3.0](/ruby/docs/reference/google-cloud-netapp-v1/1.3.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.2.0](/ruby/docs/reference/google-cloud-netapp-v1/1.2.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.1.1](/ruby/docs/reference/google-cloud-netapp-v1/1.1.1/Google-Cloud-NetApp-V1-TieringPolicy)
-   [1.0.0](/ruby/docs/reference/google-cloud-netapp-v1/1.0.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.6.0](/ruby/docs/reference/google-cloud-netapp-v1/0.6.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.5.2](/ruby/docs/reference/google-cloud-netapp-v1/0.5.2/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.4.2](/ruby/docs/reference/google-cloud-netapp-v1/0.4.2/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.3.0](/ruby/docs/reference/google-cloud-netapp-v1/0.3.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.2.0](/ruby/docs/reference/google-cloud-netapp-v1/0.2.0/Google-Cloud-NetApp-V1-TieringPolicy)
-   [0.1.0](/ruby/docs/reference/google-cloud-netapp-v1/0.1.0/Google-Cloud-NetApp-V1-TieringPolicy)

Reference documentation and code samples for the NetApp V1 API class Google::Cloud::NetApp::V1::TieringPolicy.

Defines tiering policy for the volume.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #cooling\_threshold\_days

```
def cooling_threshold_days() -> ::Integer
```

**Returns**

-   (::Integer) — Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31.

### #cooling\_threshold\_days=

```
def cooling_threshold_days=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31.

**Returns**

-   (::Integer) — Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31.

### #tier\_action

```
def tier_action() -> ::Google::Cloud::NetApp::V1::TieringPolicy::TierAction
```

**Returns**

-   ([::Google::Cloud::NetApp::V1::TieringPolicy::TierAction](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-netapp-v1/2.0.2/Google-Cloud-NetApp-V1-TieringPolicy-TierAction)) — Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED.

### #tier\_action=

```
def tier_action=(value) -> ::Google::Cloud::NetApp::V1::TieringPolicy::TierAction
```

**Parameter**

-   **value** ([::Google::Cloud::NetApp::V1::TieringPolicy::TierAction](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-netapp-v1/2.0.2/Google-Cloud-NetApp-V1-TieringPolicy-TierAction)) — Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED.

**Returns**

-   ([::Google::Cloud::NetApp::V1::TieringPolicy::TierAction](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-netapp-v1/2.0.2/Google-Cloud-NetApp-V1-TieringPolicy-TierAction)) — Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
