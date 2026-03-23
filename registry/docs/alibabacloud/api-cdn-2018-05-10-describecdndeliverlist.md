Call the DescribeCdnDeliverList operation to query a list of report tracking tasks. This operation returns all tracking tasks under your account.

## Operation description

**Note**

The call frequency for a single user is limited to 3 calls per second.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDeliverList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnDeliverList)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cdn:DescribeCdnDeliverList

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DeliverId

integer

No

The ID of the tracking task to query. If you do not specify this parameter, all tracking tasks are returned.

3

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response entity.

RequestId

string

The request ID.

12345

Content

string

The list of tracking tasks.

"data": \[{"deliverId": 1,"status": "enable","createTime": "2020-10-14T11:19:26Z","crontab": "0 0 0 \* \* ?","frequency": "d","name": "域名订阅","dmList": \["www.example.com"\],"reports": \[{"reportId": 1,"conditions": \[{"op": "in","field": "prov","value": \["黑龙江","北京"\]}\]},{"reportId": 2}\],"deliver": {"email": {"subject": "主题","to": \["example@alibaba-inc.com","example@alibaba-inc.com"\]}}}\]}}

**The data parameter**

Parameter

Type

Description

deliverId

Long

The ID of the tracking task.

status

String

The status of the tracking task. Valid values:  
**enable**: The task is enabled.  
**disable**: The task is disabled.  
  
  
  
  

createTime

String

The time when the tracking task was created.

crontab

String

The execution schedule of the tracking task.

frequency

String

The execution frequency. Valid values:  
**h**: hourly  
**d**: daily  
**M**: monthly  
  
  
  
  
  
  
  

name

String

The name of the tracking task.

dmList

String\[\]

The list of domain names for the tracking task.

reports

String\[\]

The list of subscribed reports. This parameter contains the following subparameters:  
reportId: The report ID.  
conditions: The filter conditions for the report. This parameter is empty if no filter conditions are specified. The filter conditions include the operation (\`op\`), field (\`field\`), and value (\`value\`). Only the **in** operation is supported.  
  
  
  
  

deliver

String

The delivery method. This parameter contains information such as the email subject and recipients.  
email: The email delivery details.  
subject: The email subject.  
to: The list of recipients.  
copy: The list of CC recipients.  
  
  
  
  
  
  
  
  
  
  

**The reports parameter**

Parameter

Type

Description

deliverId

Long

The ID of the tracking task.

status

String

The status of the tracking task. Valid values:  
**enable**: The task is enabled.  
**disable**: The task is disabled.  
  
  
  
  

## Examples

Success response

`JSON` format

```
{
  "RequestId": "12345",
  "Content": "\"data\": [{\"deliverId\": 1,\"status\": \"enable\",\"createTime\": \"2020-10-14T11:19:26Z\",\"crontab\": \"0 0 0 * * ?\",\"frequency\": \"d\",\"name\": \"域名订阅\",\"dmList\": [\"www.example.com\"],\"reports\": [{\"reportId\": 1,\"conditions\": [{\"op\": \"in\",\"field\": \"prov\",\"value\": [\"黑龙江\",\"北京\"]}]},{\"reportId\": 2}],\"deliver\": {\"email\": {\"subject\": \"主题\",\"to\": [\"example@alibaba-inc.com\",\"example@alibaba-inc.com\"]}}}]}}"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is invalid.

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

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnDeliverList#workbench-doc-change-demo) for a complete list.
