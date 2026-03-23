-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Channel V1 Client - Class ListReportsResponse (1.8.2) Stay organized with collections Save and categorize content based on your preferences.

2.4.1 (latest) 2.4.0 2.3.1 2.2.1 2.1.4 2.0.0 1.9.5 1.8.2 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.1 1.1.1 1.0.1

Reference documentation and code samples for the Google Cloud Channel V1 Client class ListReportsResponse.

Response message for [CloudChannelReportsService.ListReports](/php/docs/reference/cloud-channel/1.8.2/V1.CloudChannelReportsServiceClient#_Google_Cloud_Channel_V1_CloudChannelReportsServiceClient__listReports__).

Generated from protobuf message `google.cloud.channel.v1.ListReportsResponse`

## Namespace

Google \\ Cloud \\ Channel \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ reports`

`array<[Google\Cloud\Channel\V1\Report](/php/docs/reference/cloud-channel/1.8.2/V1.Report)>`  

The reports available to the partner.

`↳ next_page_token`

`string`  

Pass this token to [FetchReportResultsRequest.page\_token](/php/docs/reference/cloud-channel/1.8.2/V1.FetchReportResultsRequest#_Google_Cloud_Channel_V1_FetchReportResultsRequest__getPageToken__) to retrieve the next page of results.

### getReports

The reports available to the partner.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setReports

The reports available to the partner.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Channel\V1\Report](/php/docs/reference/cloud-channel/1.8.2/V1.Report)>`  

**Returns**

**Type**

**Description**

`$this`

### getNextPageToken

Pass this token to [FetchReportResultsRequest.page\_token](/php/docs/reference/cloud-channel/1.8.2/V1.FetchReportResultsRequest#_Google_Cloud_Channel_V1_FetchReportResultsRequest__getPageToken__) to retrieve the next page of results.

**Returns**

**Type**

**Description**

`string`

### setNextPageToken

Pass this token to [FetchReportResultsRequest.page\_token](/php/docs/reference/cloud-channel/1.8.2/V1.FetchReportResultsRequest#_Google_Cloud_Channel_V1_FetchReportResultsRequest__getPageToken__) to retrieve the next page of results.

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

Last updated 2026-03-19 UTC.
