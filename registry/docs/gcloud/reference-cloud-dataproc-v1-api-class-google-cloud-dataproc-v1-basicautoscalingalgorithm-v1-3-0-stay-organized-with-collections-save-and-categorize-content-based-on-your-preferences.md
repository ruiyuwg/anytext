-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Dataproc V1 API - Class Google::Cloud::Dataproc::V1::BasicAutoscalingAlgorithm (v1.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.3.0keyboard\_arrow\_down

-   [1.9.1 (latest)](/ruby/docs/reference/google-cloud-dataproc-v1/latest/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.9.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.9.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.8.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.8.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.7.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.7.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.6.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.6.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.5.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.5.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.4.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.4.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.3.1](/ruby/docs/reference/google-cloud-dataproc-v1/1.3.1/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.2.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.2.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.1.0](/ruby/docs/reference/google-cloud-dataproc-v1/1.1.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [1.0.2](/ruby/docs/reference/google-cloud-dataproc-v1/1.0.2/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.26.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.26.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.25.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.25.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.24.1](/ruby/docs/reference/google-cloud-dataproc-v1/0.24.1/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.23.1](/ruby/docs/reference/google-cloud-dataproc-v1/0.23.1/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.22.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.22.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.21.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.21.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.20.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.20.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.19.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.19.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.18.1](/ruby/docs/reference/google-cloud-dataproc-v1/0.18.1/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.17.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.17.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.16.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.16.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.15.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.15.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.14.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.14.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.13.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.13.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.12.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.12.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.11.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.11.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.10.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.10.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.9.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.9.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.8.0](/ruby/docs/reference/google-cloud-dataproc-v1/0.8.0/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)
-   [0.7.1](/ruby/docs/reference/google-cloud-dataproc-v1/0.7.1/Google-Cloud-Dataproc-V1-BasicAutoscalingAlgorithm)

Reference documentation and code samples for the Cloud Dataproc V1 API class Google::Cloud::Dataproc::V1::BasicAutoscalingAlgorithm.

Basic algorithm for autoscaling.

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #cooldown\_period

```
def cooldown_period() -> ::Google::Protobuf::Duration
```

**Returns**

-   ([::Google::Protobuf::Duration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Protobuf-Duration)) — Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.
    
    Bounds: \[2m, 1d\]. Default: 2m.
    

### #cooldown\_period=

```
def cooldown_period=(value) -> ::Google::Protobuf::Duration
```

**Parameter**

-   **value** ([::Google::Protobuf::Duration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Protobuf-Duration)) — Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.
    
    Bounds: \[2m, 1d\]. Default: 2m.
    

**Returns**

-   ([::Google::Protobuf::Duration](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Protobuf-Duration)) — Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.
    
    Bounds: \[2m, 1d\]. Default: 2m.
    

### #yarn\_config

```
def yarn_config() -> ::Google::Cloud::Dataproc::V1::BasicYarnAutoscalingConfig
```

**Returns**

-   ([::Google::Cloud::Dataproc::V1::BasicYarnAutoscalingConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Cloud-Dataproc-V1-BasicYarnAutoscalingConfig)) — Required. YARN autoscaling configuration.

### #yarn\_config=

```
def yarn_config=(value) -> ::Google::Cloud::Dataproc::V1::BasicYarnAutoscalingConfig
```

**Parameter**

-   **value** ([::Google::Cloud::Dataproc::V1::BasicYarnAutoscalingConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Cloud-Dataproc-V1-BasicYarnAutoscalingConfig)) — Required. YARN autoscaling configuration.

**Returns**

-   ([::Google::Cloud::Dataproc::V1::BasicYarnAutoscalingConfig](https://docs.cloud.google.com/ruby/docs/reference/google-cloud-dataproc-v1/1.3.0/Google-Cloud-Dataproc-V1-BasicYarnAutoscalingConfig)) — Required. YARN autoscaling configuration.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
