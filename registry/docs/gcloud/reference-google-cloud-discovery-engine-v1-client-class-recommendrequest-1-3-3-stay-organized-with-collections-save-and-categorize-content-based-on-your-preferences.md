-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Discovery Engine V1 Client - Class RecommendRequest (1.3.3) Stay organized with collections Save and categorize content based on your preferences.

1.11.1 (latest) 1.11.0 1.10.1 1.9.1 1.8.0 1.7.0 1.6.1 1.5.1 1.4.0 1.3.3 1.2.0 1.1.0 1.0.0 0.11.3 0.8.0 0.7.1 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.1

Reference documentation and code samples for the Google Cloud Discovery Engine V1 Client class RecommendRequest.

Request message for Recommend method.

Generated from protobuf message `google.cloud.discoveryengine.v1.RecommendRequest`

## Namespace

Google \\ Cloud \\ DiscoveryEngine \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ serving_config`

`string`  

Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your [RecommendationService.Recommend](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Client.RecommendationServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_RecommendationServiceClient__recommend__) requests.

`↳ user_event`

`[UserEvent](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent)`  

Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) or [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) to a random unique ID and leave [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) unset.

`↳ page_size`

`int`  

Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service chooses a reasonable default. The maximum allowed value is 100. Values above 100 are set to 100.

`↳ filter`

`string`  

Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: \* \* `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))` \* \* `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: \* \* (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie")) \* \* (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API returns generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to `true` in [RecommendRequest.params](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendRequest#_Google_Cloud_DiscoveryEngine_V1_RecommendRequest__getParams__) to receive empty results instead. Note that the API never returns [Document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Document)s with `storageStatus` as `EXPIRED` or `DELETED` regardless of filter choices.

`↳ validate_only`

`bool`  

Use validate only mode for this recommendation query. If set to `true`, a fake model is used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready.

`↳ params`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

Additional domain specific parameters for the recommendations. Allowed values: \* \* `returnDocument`: Boolean. If set to `true`, the associated Document object is returned in [RecommendResponse.RecommendationResult.document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getDocument__). \* \* `returnScore`: Boolean. If set to true, the recommendation score corresponding to each returned Document is set in [RecommendResponse.RecommendationResult.metadata](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getMetadata__). The given score indicates the probability of a Document conversion given the user's context and history. \* \* `strictFiltering`: Boolean. True by default. If set to `false`, the service returns generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. \* \* `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: \* \* `no-diversity` \* \* `low-diversity` \* \* `medium-diversity` \* \* `high-diversity` \* \* `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category. \* \* `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax.

`↳ user_labels`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

The user labels applied to a resource must meet the following requirements: \* \* Each resource can have multiple labels, up to a maximum of 64. \* \* Each label must be a key-value pair. \* \* Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. \* \* Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. \* \* The key portion of a label must be unique. However, you can use the same key with multiple resources. \* \* Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

### getServingConfig

Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your [RecommendationService.Recommend](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Client.RecommendationServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_RecommendationServiceClient__recommend__) requests.

**Returns**

**Type**

**Description**

`string`

### setServingConfig

Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your [RecommendationService.Recommend](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Client.RecommendationServiceClient#_Google_Cloud_DiscoveryEngine_V1_Client_RecommendationServiceClient__recommend__) requests.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getUserEvent

Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

Don't set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) or [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) to a random unique ID and leave [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) unset.

**Returns**

**Type**

**Description**

`[UserEvent](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent)|null`

### hasUserEvent

### clearUserEvent

### setUserEvent

Required. Context about the user, what they are looking at and what action they took to trigger the Recommend request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

Don't set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) or [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set [UserEvent.user\_pseudo\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent#_Google_Cloud_DiscoveryEngine_V1_UserEvent__getUserPseudoId__) to a random unique ID and leave [UserEvent.user\_info.user\_id](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserInfo#_Google_Cloud_DiscoveryEngine_V1_UserInfo__getUserId__) unset.

**Parameter**

**Name**

**Description**

`var`

`[UserEvent](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.UserEvent)`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service chooses a reasonable default. The maximum allowed value is 100. Values above 100 are set to 100.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service chooses a reasonable default. The maximum allowed value is 100. Values above 100 are set to 100.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFilter

Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported.

Examples:

-   `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))`
-   `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples:
-   (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie"))
-   (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API returns generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to `true` in [RecommendRequest.params](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendRequest#_Google_Cloud_DiscoveryEngine_V1_RecommendRequest__getParams__) to receive empty results instead. Note that the API never returns [Document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Document)s with `storageStatus` as `EXPIRED` or `DELETED` regardless of filter choices.

**Returns**

**Type**

**Description**

`string`

### setFilter

Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported.

Examples:

-   `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))`
-   `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples:
-   (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie"))
-   (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API returns generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to `true` in [RecommendRequest.params](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendRequest#_Google_Cloud_DiscoveryEngine_V1_RecommendRequest__getParams__) to receive empty results instead. Note that the API never returns [Document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.Document)s with `storageStatus` as `EXPIRED` or `DELETED` regardless of filter choices.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getValidateOnly

Use validate only mode for this recommendation query. If set to `true`, a fake model is used that returns arbitrary Document IDs.

Note that the validate only mode should only be used for testing the API, or if the model is not ready.

**Returns**

**Type**

**Description**

`bool`

### setValidateOnly

Use validate only mode for this recommendation query. If set to `true`, a fake model is used that returns arbitrary Document IDs.

Note that the validate only mode should only be used for testing the API, or if the model is not ready.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getParams

Additional domain specific parameters for the recommendations.

Allowed values:

-   `returnDocument`: Boolean. If set to `true`, the associated Document object is returned in [RecommendResponse.RecommendationResult.document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getDocument__).
-   `returnScore`: Boolean. If set to true, the recommendation score corresponding to each returned Document is set in [RecommendResponse.RecommendationResult.metadata](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getMetadata__). The given score indicates the probability of a Document conversion given the user's context and history.
-   `strictFiltering`: Boolean. True by default. If set to `false`, the service returns generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results.
-   `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of:
    -   `no-diversity`
    -   `low-diversity`
    -   `medium-diversity`
    -   `high-diversity`
    -   `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category.
-   `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setParams

Additional domain specific parameters for the recommendations.

Allowed values:

-   `returnDocument`: Boolean. If set to `true`, the associated Document object is returned in [RecommendResponse.RecommendationResult.document](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getDocument__).
-   `returnScore`: Boolean. If set to true, the recommendation score corresponding to each returned Document is set in [RecommendResponse.RecommendationResult.metadata](/php/docs/reference/cloud-discoveryengine/1.3.3/V1.RecommendResponse.RecommendationResult#_Google_Cloud_DiscoveryEngine_V1_RecommendResponse_RecommendationResult__getMetadata__). The given score indicates the probability of a Document conversion given the user's context and history.
-   `strictFiltering`: Boolean. True by default. If set to `false`, the service returns generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results.
-   `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of:
    -   `no-diversity`
    -   `low-diversity`
    -   `medium-diversity`
    -   `high-diversity`
    -   `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category.
-   `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

### getUserLabels

The user labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
    
-   Each label must be a key-value pair.
    
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`

### setUserLabels

The user labels applied to a resource must meet the following requirements:

-   Each resource can have multiple labels, up to a maximum of 64.
    
-   Each label must be a key-value pair.
    
-   Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters.
-   Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed.
-   The key portion of a label must be unique. However, you can use the same key with multiple resources.
-   Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.

**Parameter**

**Name**

**Description**

`var`

`array|[Google\Protobuf\Internal\MapField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/MapField)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
