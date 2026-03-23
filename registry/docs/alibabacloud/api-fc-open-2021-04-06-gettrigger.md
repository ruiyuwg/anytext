Queries the information about a trigger.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/FC-Open/2021-04-06/GetTrigger)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/FC-Open/2021-04-06/GetTrigger)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

fc:GetTrigger

get

\*All Resources

`*`

none

none

## Request syntax

```
GET /2021-04-06/services/{serviceName}/functions/{functionName}/triggers/{triggerName} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

serviceName

string

Yes

The name of the service.

demoService

functionName

string

Yes

The name of the function.

demoFunction

triggerName

string

Yes

The name of the trigger.

demoTrigger

X-Fc-Account-Id

string

No

The ID of your Alibaba Cloud account.

188077086902\*\*\*\*

X-Fc-Date

string

No

The time when the request is initiated on the client. The format of the value is: **EEE,d MMM yyyy HH:mm:ss GMT**.

Wed, 11 May 2022 09:00:00 GMT

X-Fc-Trace-Id

string

No

The custom request ID.

my-test-trace-id

## Response parameters

Parameter

Type

Description

Example

headers

object

ETag

string

The ETag that is used to modify the trigger. This parameter is used to ensure that the modified trigger is consistent with the trigger to be modified.

5e547e5605e1dc17a78a6191bc18fbc5

object

The details of the trigger.

createdTime

string

The time when the trigger was created.

2016-08-15T15:00:00.000+0000

invocationRole

string

The ARN of the RAM role that is used by the event source to invoke the function.

acs:ram::123456xxxx:role/fc-test

lastModifiedTime

string

The time when the trigger was last modified.

016-08-15T17:00:00.000+0000

qualifier

string

The version or alias of the service.

LATEST

sourceArn

string

The ARN of the event source.

acs:oss:cn-shanghai:123456xxxx:mybucket

triggerConfig

string

The configurations of the trigger. The configurations vary based on the trigger type. For more information about the format, see the following topics:

-   Object Storage Service (OSS) trigger: [OSSTriggerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-osstriggerconfig) .
-   Simple Log Service trigger: [LogTriggerConfig](/help/en/doc-detail/415694.html) .
-   Time trigger: [TimeTriggerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-timetriggerconfig) .
-   HTTP trigger: [HTTPTriggerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-httptriggerconfig) .
-   Tablestore trigger: Specify the **SourceArn** parameter and leave this parameter empty.
-   Alibaba Cloud CDN event trigger: [CDNEventsTriggerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-cdneventstriggerconfig) .
-   Message Service (MNS) topic trigger: [MnsTopicTriggerConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-mnstopictriggerconfig) .
-   EventBridge triggers: [EventBridgeTriggerConfig](/help/en/doc-detail/2508622.html) .

{"events": \["oss:ObjectCreated:\*"\], "filter": {"key": {"prefix": "/prefix", "suffix": ".zip"}}}

triggerName

string

The name of the trigger.

demoTrigger

triggerType

string

The trigger type. Example values: **oss**, **log**, **tablestore**, **timer**, **http**, **cdn\_events**, **mns\_topic**, and **eventbridge**.

oss

description

string

The description of the trigger.

trigger for test

triggerId

string

The unique ID of the trigger.

3e270f2f-cef2-421a-bc86-ff4e8088476a

domainName

string

The domain name used to invoke the function by using HTTP. You can add this domain name as the prefix to the endpoint of Function Compute. This way, you can invoke the function that corresponds to the trigger by using HTTP. For example, `{domainName}.cn-shanghai.fc.aliyuncs.com`.

demo-service-demo-function-jkhksh

urlInternet

string

The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.

https://svc-func-xxxxxxxx.cn-hangzhou.fcapp.run

urlIntranet

string

The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.

https://svc-func-xxxxxxxx.cn-hangzhou-vpc.fcapp.run

## Examples

Sample success responses

`JSON`format

```
{
  "createdTime": "2016-08-15T15:00:00.000+0000",
  "invocationRole": "acs:ram::123456xxxx:role/fc-test",
  "lastModifiedTime": "016-08-15T17:00:00.000+0000",
  "qualifier": "LATEST",
  "sourceArn": "acs:oss:cn-shanghai:123456xxxx:mybucket",
  "triggerConfig": {
    "events": [
      "oss:ObjectCreated:*"
    ],
    "filter": {
      "key": {
        "prefix": "/prefix",
        "suffix": ".zip"
      }
    }
  },
  "triggerName": "demoTrigger",
  "triggerType": "oss",
  "description": "trigger for test",
  "triggerId": "3e270f2f-cef2-421a-bc86-ff4e8088476a",
  "domainName": "demo-service-demo-function-jkhksh",
  "urlInternet": "https://svc-func-xxxxxxxx.cn-hangzhou.fcapp.run",
  "urlIntranet": "https://svc-func-xxxxxxxx.cn-hangzhou-vpc.fcapp.run"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/FC-Open/2021-04-06/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-06-30

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/FC-Open/2021-04-06/GetTrigger?updateTime=2021-06-30#workbench-doc-change-demo)

2021-06-30

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/FC-Open/2021-04-06/GetTrigger?updateTime=2021-06-30#workbench-doc-change-demo)

2021-06-30

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/FC-Open/2021-04-06/GetTrigger?updateTime=2021-06-30#workbench-doc-change-demo)
