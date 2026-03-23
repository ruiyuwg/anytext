Creates a custom operations report.

## Operation description

-   This operation allows you to create a custom operations report for a specific domain name. You can view the statistics about the domain name in the report.
-   You can call this operation up to three times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateCdnSubTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/CreateCdnSubTask)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:CreateCdnSubTask

create

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ReportIds

string

Yes

The IDs of the metrics that you want to include in the report. Separate multiple IDs with commas (,). Valid values:

-   **1**: frequently requested URLs (ranked by the number of requests)
-   **3**: frequently requested URLs (ranked by the amount of network traffic)
-   **5**: frequently used Referer headers (ranked by the number of requests)
-   **7**: frequently used Referer headers (ranked by the amount of network traffic)
-   **9**: frequently requested URLs that are redirected to the origin (ranked by the number of requests)
-   **11**: frequently requested URLs that are redirected to the origin (ranked by the amount of network traffic)
-   **13**: top client IP addresses (ranked by the number of requests)
-   **15**: top client IP addresses (ranked by the amount of network traffic)
-   **17**: domain names ranked by the amount of network traffic
-   **19**: page views and unique visitors
-   **21**: regions from which requests are initiated
-   **23**: Internet service providers (ISPs)

1,3,5

DomainName

string

No

The domain names to be tracked. Separate multiple domain names with commas (,). You can specify up to 500 domain names. If you want to specify more than 500 domain names, [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).

**Note** If you do not specify a domain name, the custom operations report is created for all domain names that belong to your Alibaba Cloud account.

www.example1.com,www.example2.com

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

04F0F334-1335-436C-A1D7-6C044FE73368

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter

The specified parameter is invalid.

\-

400

TimeParseFailed

Failed to parse the time parameter.

Failed to parse the time parameter.

400

SubscriptionAlreadyExists

The subscription already exists.

The subscription already exists.

400

SubscriptionNotFound

The subscription is not found.

The subscription is not found.

400

NameAlreadyExists

The name already exists.

The specified name already exists.

400

DeliverExceedLimit

The maximum number of subscribed tasks is exceeded.

The number of tracking tasks has reached the upper limit.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/CreateCdnSubTask?updateTime=2024-12-18#workbench-doc-change-demo)

2023-05-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/CreateCdnSubTask?updateTime=2023-05-18#workbench-doc-change-demo)
