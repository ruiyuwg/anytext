Updates a tracking task.

## Operation description

**Note** You can call this operation up to three times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/UpdateCdnDeliverTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/UpdateCdnDeliverTask)

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

cdn:UpdateCdnDeliverTask

update

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

DeliverId

long

Yes

The ID of the tracking task that you want to update.

3

Name

string

No

The name of the tracking task.

Domain name report

Reports

string

No

The operations reports that are tracked by the task. The data must be escaped in JSON.

\\\[{\\\\"reportId\\\\":1,\\\\"conditions\\\\":\\\[{\\\\"field\\\\":\\\\"prov\\\\",\\\\"op\\\\":\\\\"in\\\\",\\\\"value\\\\":\\\[\\\\"Heilongjiang\\\\",\\\\"Beijing\\\\"\]}\]}\]

DomainName

string

No

The domain name that you want to track. You can specify up to 500 domain names in each request. Separate multiple domain names with commas (,). If you do not specify a domain name, the task collects data from all domain names that belong to your Alibaba Cloud account.

www.example.com

Deliver

string

No

The method that is used to send operations reports. Operations reports are sent to you only by email. The settings must be escaped in JSON.

{\\\\"email\\\\":{\\\\"subject\\\\":\\\\"The email subject\\\\",\\\\"to\\\\":\\\[\\\\"songmingyuan@alibaba-inc.com\\\\",\\\\"songmingyuan@alibaba-inc.com\\\\"\]}}"

Schedule

string

No

The parameters that specify the time interval at which the tracking task sends operations reports. The settings must be escaped in JSON.

"{\\\\"schedName\\\\":\\\\"The name of the tracking task\\\\",\\\\"description\\\\":\\\\"The description\\\\",\\\\"crontab\\\\":\\\\"000\\\*\\\*?\\\\",\\\\"frequency\\\\":\\\\"d\\\\",\\\\"status\\\\":\\\\"enable\\\\",\\\\"effectiveFrom\\\\":\\\\"2020-09-17T00:00:00Z\\\\",\\\\"effectiveEnd\\\\":\\\\"2020-11-17T00:00:00Z\\\\"}"

**Fields in the ReDatas parameter**

Field

Type

Required

Description

reportId

String

Yes

The ID of the report.

conditions

ConDatas\[\]

No

The filter conditions for the report.

**Fields in the ConDatas parameter**

Field

Type

Required

Description

field

String

No

The filter field.

op

String

No

The filter operation.

value

String\[\]

No

The array of field values.

**Fields in the email parameter**

Field

Type

Required

Description

subject

String

Yes

The email subject.

to

String\[\]

Yes

The email addresses to which operations reports are sent.

**Fields in the Deliver parameter**

Field

Type

Required

Description

subject

String

No

The email subject.

to

String\[\]

Yes

The email addresses to which operations reports are sent.

**Fields in the Schedule parameter**

Field

Type

Required

Description

schedName

String

No

The name of the tracking task.

description

String

No

The description of the tracking task.

crontab

String

Yes

Specifies the cycle in which the tracking task is scheduled to run.

frequency

String

Yes

The interval at which the reports are sent. Valid values:  
**h**: by hour  
**d**: by day  
**w**: by week

status

String

No

The status of the tracking task. Valid values:  
**enable**  
**disable**

effectiveFrom

String

No

The start time of the tracking task.

effectiveEnd

String

No

The end time of the tracking task.

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

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/UpdateCdnDeliverTask?updateTime=2024-12-18#workbench-doc-change-demo)
