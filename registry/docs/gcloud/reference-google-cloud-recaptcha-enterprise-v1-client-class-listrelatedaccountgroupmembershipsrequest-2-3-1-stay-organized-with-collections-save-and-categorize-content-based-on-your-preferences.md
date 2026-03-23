-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Recaptcha Enterprise V1 Client - Class ListRelatedAccountGroupMembershipsRequest (2.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.3.1 (latest) 2.3.0 2.2.1 2.1.3 2.0.1 1.17.2 1.16.1 1.15.0 1.14.0 1.13.0 1.12.2 1.8.0 1.7.0 1.6.0 1.5.2 1.4.2 1.3.2 1.2.6

Reference documentation and code samples for the Google Cloud Recaptcha Enterprise V1 Client class ListRelatedAccountGroupMembershipsRequest.

The request message to list memberships in a related account group.

Generated from protobuf message `google.cloud.recaptchaenterprise.v1.ListRelatedAccountGroupMembershipsRequest`

## Namespace

Google \\ Cloud \\ RecaptchaEnterprise \\ V1

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

Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.

`↳ page_size`

`int`  

Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.

`↳ page_token`

`string`  

Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.

### getParent

Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.

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

Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.

**Returns**

**Type**

**Description**

`int`

### setPageSize

Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.

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

Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call.

When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.

**Returns**

**Type**

**Description**

`string`

### setPageToken

Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call.

When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.

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

Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`. Please see RecaptchaEnterpriseServiceClient::relatedAccountGroupName() for help formatting this field.

**Returns**

**Type**

**Description**

`[ListRelatedAccountGroupMembershipsRequest](/php/docs/reference/cloud-recaptcha-enterprise/latest/V1.ListRelatedAccountGroupMembershipsRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
