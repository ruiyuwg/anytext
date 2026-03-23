-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc V1 Client - Class ListAutoscalingPoliciesRequest (3.10.1) Stay organized with collections Save and categorize content based on your preferences.

3.14.0 (latest) 3.13.4 3.12.0 3.11.0 3.10.1 3.9.0 3.8.1 3.7.1 3.6.1 3.5.1 3.4.0 3.3.0 3.2.2 2.9.1 2.8.2 2.7.0 2.6.1 2.5.0 2.3.0 2.2.3 2.1.0 2.0.0

Reference documentation and code samples for the Google Cloud Dataproc V1 Client class ListAutoscalingPoliciesRequest.

A request to list autoscaling policies in a project.

Generated from protobuf message `google.cloud.dataproc.v1.ListAutoscalingPoliciesRequest`

## Namespace

Google \\ Cloud \\ Dataproc \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The "resource name" of the region or location, as described in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). \* For `projects.regions.autoscalingPolicies.list`, the resource name of the region has the following format: `projects/{project_id}/regions/{region}` \* For `projects.locations.autoscalingPolicies.list`, the resource name of the location has the following format: `projects/{project_id}/locations/{location}`

`↳ page_size`

`int`  

Optional. The maximum number of results to return in each response. Must be less than or equal to 1000. Defaults to 100.

`↳ page_token`

`string`  

Optional. The page token, returned by a previous call, to request the next page of results.

### getParent

Required. The "resource name" of the region or location, as described in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names).

-   For `projects.regions.autoscalingPolicies.list`, the resource name of the region has the following format: `projects/{project_id}/regions/{region}`
-   For `projects.locations.autoscalingPolicies.list`, the resource name of the location has the following format: `projects/{project_id}/locations/{location}`

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The "resource name" of the region or location, as described in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names).

-   For `projects.regions.autoscalingPolicies.list`, the resource name of the region has the following format: `projects/{project_id}/regions/{region}`
-   For `projects.locations.autoscalingPolicies.list`, the resource name of the location has the following format: `projects/{project_id}/locations/{location}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPageSize

Optional. The maximum number of results to return in each response.

Must be less than or equal to 1000. Defaults to 100.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. The maximum number of results to return in each response.

Must be less than or equal to 1000. Defaults to 100.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getPageToken

Optional. The page token, returned by a previous call, to request the next page of results.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. The page token, returned by a previous call, to request the next page of results.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`parent`

`string`  

Required. The "resource name" of the region or location, as described in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names).

-   For `projects.regions.autoscalingPolicies.list`, the resource name of the region has the following format: `projects/{project_id}/regions/{region}`
    
-   For `projects.locations.autoscalingPolicies.list`, the resource name of the location has the following format: `projects/{project_id}/locations/{location}` Please see [Google\\Cloud\\Dataproc\\V1\\AutoscalingPolicyServiceClient::regionName()](/php/docs/reference/cloud-dataproc/3.10.1/V1.AutoscalingPolicyServiceClient#_Google_Cloud_Dataproc_V1_AutoscalingPolicyServiceClient__regionName__) for help formatting this field.
    

**Returns**

**Type**

**Description**

`[Google\Cloud\Dataproc\V1\ListAutoscalingPoliciesRequest](/php/docs/reference/cloud-dataproc/3.10.1/V1.ListAutoscalingPoliciesRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
