-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class ListGroupsResponse (1.5.1) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class ListGroupsResponse.

The `ListGroups` response.

Generated from protobuf message `google.monitoring.v3.ListGroupsResponse`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ group`

`array<[Google\Cloud\Monitoring\V3\Group](/php/docs/reference/cloud-monitoring/1.5.1/V3.Group)>`  

The groups that match the specified filters.

`↳ next_page_token`

`string`  

If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as `page_token` in the next call to this method.

### getGroup

The groups that match the specified filters.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGroup

The groups that match the specified filters.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Monitoring\V3\Group](/php/docs/reference/cloud-monitoring/1.5.1/V3.Group)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as `page_token` in the next call to this method.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as `page_token` in the next call to this method.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
