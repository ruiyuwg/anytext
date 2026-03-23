Queries detailed historical events.

## Operation description

**Note**

Do not call this operation frequently. To query events in near-real time, you can create a trail to deliver events to Simple Log Service (SLS) and use its real-time consumption feature. For more information, see [Create a single-account trail](/help/en/actiontrail/user-guide/create-a-single-account-trail), [Create a multi-account trail](/help/en/actiontrail/user-guide/create-a-multi-account-trail), and [Real-time consumption](/help/en/sls/overview-of-real-time-consumption).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Actiontrail/2020-07-06/LookupEvents)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Actiontrail/2020-07-06/LookupEvents)

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

actiontrail:LookupEvents

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

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

**Note**

You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD\*\*\*\*

MaxResults

string

No

The maximum number of results to return.  
Valid values: 1 to 50.

20

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

**Note**

You must specify both `StartTime` and `EndTime`, or leave both unspecified. If you leave them unspecified, the default value of `StartTime` is 7 days before the current time.

2020-10-08T11:00:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

**Note**

You must specify both `StartTime` and `EndTime`, or leave both unspecified. If you leave them unspecified, the default value of `EndTime` is the current time.

2020-10-15T11:00:00Z

Direction

string

No

The order in which events are retrieved. Valid values:

-   FORWARD: Chronological order.
    
-   BACKWARD (default): Reverse chronological order.
    

BACKWARD

LookupAttribute

array<object>

No

The filter conditions.

**Note**

You can specify one or two filter conditions at a time. For more information, see [Limitations](/help/en/actiontrail/support/how-to-set-the-lookupattribute-parameter).

object

No

Key

string

No

The attribute key. For information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](/help/en/actiontrail/support/how-to-set-the-lookupattribute-parameter)

ServiceName

Value

string

No

The attribute value. For information about valid values, see [How do I configure the LookupAttribute parameter when calling LookupInsightEvents?](/help/en/actiontrail/support/how-to-set-the-lookupattribute-parameter)

Ecs

For information about common request parameters, see [Common parameters](/help/en/doc-detail/185885.html).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

EndTime

string

The end of the time range of the retrieved events.

2020-07-22T14:00:00Z

Events

array<object>

The list of retrieved events.

object

The details about the retrieved event.

For more information about the event fields in the list, see [Management event structure](/help/en/actiontrail/user-guide/management-event-structure).

{ "eventId": "6EEC3A76-C207-5075-889D-A909E62F\*\*\*\*", "eventVersion": 1, "eventName": "GetTemplate" }

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

**Note**

If NextToken is empty, no next page exists.

eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD\*\*\*\*

RequestId

string

The request ID.

FD79665A-CE8B-49D4-82E6-5EE2E0E7\*\*\*\*

StartTime

string

The start of the time range of the retrieved events.

2020-07-15T14:00:00Z

## Examples

Success response

`JSON` format

```
{
  "EndTime": "2020-07-22T14:00:00Z",
  "Events": [
    {
      "eventId": "6EEC3A76-C207-5075-889D-A909E62F****",
      "eventVersion": 1,
      "eventName": "GetTemplate"
    }
  ],
  "NextToken": "eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****",
  "RequestId": "FD79665A-CE8B-49D4-82E6-5EE2E0E7****",
  "StartTime": "2020-07-15T14:00:00Z"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IncompleteSignature

The request signature does not conform to Alibaba Cloud standards.

The request signature does not conform to Alibaba Cloud standards.

400

InvalidParameterCombination

The end time must be later than the start time.

The end time must be greater than the start time.

400

InvalidQueryParameter

The specified query parameter is invalid.

The specified query parameter is not valid.

400

InvalidParameterEndTime

The specified EndTime is invalid.

400

InvalidParameterStartTime

The specified StartTime is invalid.

See [Error Codes](https://api.alibabacloud.com/document/Actiontrail/2020-07-06/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Actiontrail/2020-07-06/LookupEvents#workbench-doc-change-demo) for a complete list.
