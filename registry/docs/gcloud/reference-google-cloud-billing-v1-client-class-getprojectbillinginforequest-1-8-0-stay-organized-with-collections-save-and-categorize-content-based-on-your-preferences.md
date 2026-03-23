-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Billing V1 Client - Class GetProjectBillingInfoRequest (1.8.0) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.3 2.0.1 1.9.8 1.8.0 1.7.5 1.6.0 1.5.6

Reference documentation and code samples for the Google Cloud Billing V1 Client class GetProjectBillingInfoRequest.

Request message for `GetProjectBillingInfo`.

Generated from protobuf message `google.cloud.billing.v1.GetProjectBillingInfoRequest`

## Namespace

Google \\ Cloud \\ Billing \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.

### getName

Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.

**Returns**

**Type**

**Description**

`string`

### setName

Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`.

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

`name`

`string`  

Required. The resource name of the project for which billing information is retrieved. For example, `projects/tokyo-rain-123`. Please see [Google\\Cloud\\Billing\\V1\\CloudBillingClient::projectName()](/php/docs/reference/cloud-billing/1.8.0/V1.CloudBillingClient#_Google_Cloud_Billing_V1_CloudBillingClient__projectName__) for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\Billing\V1\GetProjectBillingInfoRequest](/php/docs/reference/cloud-billing/1.8.0/V1.GetProjectBillingInfoRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
