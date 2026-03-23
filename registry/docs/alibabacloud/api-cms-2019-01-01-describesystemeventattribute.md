Queries the details of a system event.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeSystemEventAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeSystemEventAttribute)

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

cms:DescribeSystemEventAttribute

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

Product

string

No

The abbreviation of the service name.

**Note**

You can call the [DescribeSystemEventMetaList](/help/en/cms/cloudmonitor-1-0/api-describesystemeventmetalist) operation to query the abbreviations of service names.

oss

EventType

string

No

The type of the system event.

**Note**

You can call the [DescribeSystemEventMetaList](/help/en/cms/cloudmonitor-1-0/api-describesystemeventmetalist) operation to query the types of system events.

Exception

Name

string

No

The name of the system event.

**Note**

You can call the [DescribeSystemEventMetaList](/help/en/cms/cloudmonitor-1-0/api-describesystemeventmetalist) operation to query the names of system events.

BucketIngressBandwidth

Level

string

No

The level of the system event. Valid values:

-   CRITICAL: critical
    
-   WARN: warning
    
-   INFO: information
    

CRITICAL

Status

string

No

The status of the system event.

**Note**

You can call the [DescribeSystemEventMetaList](/help/en/cms/cloudmonitor-1-0/api-describesystemeventmetalist) operation to query the statuses of system events.

normal

GroupId

string

No

The ID of the application group.

12346

SearchKeywords

string

No

The keywords that are used to search for the system event. Valid values:

-   If you want to search for the system event whose content contains a and b, set the value to `a and b`.
    
-   If you want to search for the system event whose content contains a or b, set the value to `a or b`.
    

cms

StartTime

string

No

The beginning of the time range to query.

The value must be a UNIX timestamp. It is the number of seconds that have elapsed since 00:00:00 UTC, January 1, 1970.

1552199984949

EndTime

string

No

The end of the time range to query.

The value must be a UNIX timestamp. It is the number of seconds that have elapsed since 00:00:00 UTC, January 1, 1970.

1552221584949

PageNumber

integer

No

The number of the page to return.

Valid values: 1 to 100000000.

Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100.

Default value: 10

10

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The HTTP status code.

**Note**

The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, `success` is returned. If the call fails, an error message is returned.

success

RequestId

string

The ID of the request.

60912C8D-B340-4253-ADE7-61ACDFD25CFC

Success

string

Indicates whether the call is successful. Valid values: True: The call is successful. false: The call fails.

true

SystemEvents

object

SystemEvent

array<object>

The details of the event.

object

Status

string

The status of the event.

normal

Time

integer

The time when the event occurred. The value is a timestamp.

Unit: milliseconds.

1552199984000

GroupId

string

The ID of the application group.

12345

Product

string

The abbreviation of the service name.

CloudMonitor

InstanceName

string

The instance name.

instanceId1

ResourceId

string

The resource ID.

xxxxx-1

Name

string

The event name.

Agent\_Status\_Stopped

Content

string

The details of the event.

\[{"product":"CloudMonitor","content":"{\\"ipGroup\\":\\"112.126.XX.XX,10.163.XX.XX\\",\\"tianjimonVersion\\":\\"1.2.22\\"}","groupId":"176,177,178,179,180,692,120812,1663836,96,2028302","time":"1552209568000","resourceId":"acs:ecs:cn-beijing:173651113438\*\*\*\*:instance/i-25k35\*\*\*\*","level":"CRITICAL","status":"stopped","instanceName":"cmssiteprobebj-6","name":"Agent\_Status\_Stopped","regionId":"cn-beijing"}\]

Level

string

The level of the event. Valid values:

-   CRITICAL
    
-   WARN
    
-   INFO
    

WARN

RegionId

string

The region ID.

cn-hangzhou

Id

string

The event ID.

b936efc9-f621-4e8a-a6eb-076be40e\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "success",
  "RequestId": "60912C8D-B340-4253-ADE7-61ACDFD25CFC",
  "Success": "true",
  "SystemEvents": {
    "SystemEvent": [
      {
        "Status": "normal",
        "Time": 1552199984000,
        "GroupId": "12345",
        "Product": "CloudMonitor",
        "InstanceName": "instanceId1",
        "ResourceId": "xxxxx-1",
        "Name": "Agent_Status_Stopped",
        "Content": "[{\"product\":\"CloudMonitor\",\"content\":\"{\\\"ipGroup\\\":\\\"112.126.XX.XX,10.163.XX.XX\\\",\\\"tianjimonVersion\\\":\\\"1.2.22\\\"}\",\"groupId\":\"176,177,178,179,180,692,120812,1663836,96,2028302\",\"time\":\"1552209568000\",\"resourceId\":\"acs:ecs:cn-beijing:173651113438****:instance/i-25k35****\",\"level\":\"CRITICAL\",\"status\":\"stopped\",\"instanceName\":\"cmssiteprobebj-6\",\"name\":\"Agent_Status_Stopped\",\"regionId\":\"cn-beijing\"}]",
        "Level": "WARN",
        "RegionId": "cn-hangzhou",
        "Id": "b936efc9-f621-4e8a-a6eb-076be40e****"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ParameterInvalid

Parameter invalid.

500

InternalError

The request processing has failed due to some unknown error.

403

AccessForbidden

User not authorized to operate on the specified resource.

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeSystemEventAttribute#workbench-doc-change-demo) for a complete list.
