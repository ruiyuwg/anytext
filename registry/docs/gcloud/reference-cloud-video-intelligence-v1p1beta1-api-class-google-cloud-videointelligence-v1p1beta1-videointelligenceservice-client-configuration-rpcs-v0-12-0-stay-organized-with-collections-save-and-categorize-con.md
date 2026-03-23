-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Cloud Video Intelligence V1p1beta1 API - Class Google::Cloud::VideoIntelligence::V1p1beta1::VideoIntelligenceService::Client::Configuration::Rpcs (v0.12.0) Stay organized with collections Save and categorize content based on your preferences.

Version 0.12.0keyboard\_arrow\_down

-   [0.15.1 (latest)](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/latest/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.15.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.15.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.14.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.14.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.13.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.13.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.12.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.12.1/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.11.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.11.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.10.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.10.2/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.9.2](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.9.2/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.8.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.8.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.7.1](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.7.1/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.6.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.6.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.5.0](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.5.0/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)
-   [0.4.5](/ruby/docs/reference/google-cloud-video_intelligence-v1p1beta1/0.4.5/Google-Cloud-VideoIntelligence-V1p1beta1-VideoIntelligenceService-Client-Configuration-Rpcs)

Reference documentation and code samples for the Cloud Video Intelligence V1p1beta1 API class Google::Cloud::VideoIntelligence::V1p1beta1::VideoIntelligenceService::Client::Configuration::Rpcs.

Configuration RPC class for the VideoIntelligenceService API.

Includes fields providing the configuration for each RPC in this service. Each configuration object is of type `Gapic::Config::Method` and includes the following configuration fields:

-   `timeout` (_type:_ `Numeric`) - The call timeout in seconds
-   `metadata` (_type:_ `Hash{Symbol=>String}`) - Additional gRPC headers
-   `retry_policy (_type:_`Hash\`) - The retry policy. The policy fields include the following keys:
    -   `:initial_delay` (_type:_ `Numeric`) - The initial delay in seconds.
    -   `:max_delay` (_type:_ `Numeric`) - The max delay in seconds.
    -   `:multiplier` (_type:_ `Numeric`) - The incremental backoff multiplier.
    -   `:retry_codes` (_type:_ `Array<String>`) - The error codes that should trigger a retry.

## Inherits

-   Object

## Methods

### #annotate\_video

```
def annotate_video() -> ::Gapic::Config::Method
```

RPC-specific configuration for `annotate_video`

**Returns**

-   (::Gapic::Config::Method)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
