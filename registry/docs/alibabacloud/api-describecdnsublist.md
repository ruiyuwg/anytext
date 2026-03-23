The DescribeCdnSubList operation queries customized report tasks.

## Operation description

-   By default, this operation queries all customized report tasks. However, only one task is returned in the response.
    
-   The call frequency is limited to 3 calls per second for each user.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnSubList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnSubList)

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

cdn:DescribeCdnSubList

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

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Content

string

The customized report task.

{"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"成功","Content":{"data":\[{"subId":5,"reportId":\[1,2,3\],"createTime":"2020-09-25T09:39:33Z","domains"\["all"\],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}\]}}

RequestId

string

The request ID.

3250A51D-C11D-46BA-B6B3-95348EEDE652

**Data description**

Parameter

Type

Description

subId

Long

The request ID of the task.

reportId

Long\[\]

A list of report IDs.

createTime

String

The time when the report was created.

domains

String\[\]

A list of domain names for the customized report.

effectiveFrom

String

The start time of the customized task.

effectiveEnd

String

The end time of the customized task.

status

String

The status of the customized task. Valid values:  
**enable**: Enabled.  
**disable**: Disabled.  
  
  
  
  

## Examples

Success response

`JSON` format

```
{
  "Content": "{\"RequestId\":\"3250A51D-C11D-46BA-B6B3-95348EEDE652\",\"Description\":\"成功\",\"Content\":{\"data\":[{\"subId\":5,\"reportId\":[1,2,3],\"createTime\":\"2020-09-25T09:39:33Z\",\"domains\"[\"all\"],\"effectiveFrom\":\"2020-09-17T00:00:00Z\",\"effectiveEnd\":\"2020-11-17T00:00:00Z\",\"status\":\"enable\"}]}}",
  "RequestId": "3250A51D-C11D-46BA-B6B3-95348EEDE652"
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

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnSubList#workbench-doc-change-demo) for a complete list.
