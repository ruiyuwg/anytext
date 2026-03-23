Queries log entries of rate limiting.

## Operation description

-   If you do not set the StartTime or EndTime parameter, the request returns the data collected in the last 24 hours. If you set both the StartTime and EndTime parameters, the request returns the data collected within the specified time range. You must set both parameters or leave both parameters empty.
    
-   You can specify up to 20 domain names in reach request. If you specify multiple domain names, separate them with commas (,).
    
-   You can query data collected over the last 30 days.
    
-   You can call this operation up to 50 times per second per account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainCcActivityLog)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeDomainCcActivityLog)

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

cdn:DescribeDomainCcActivityLog

get

\*Domain

`acs:cdn:*:{#accountId}:domain/{#DomainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainName

string

No

The accelerated domain name. You can specify multiple domain names and separate them with commas (,).

If you do not specify this parameter, data of all accelerated domain names under your account is queried.

example.com

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

The minimum time granularity of data collection is 5 minutes.

If you leave this parameter empty, the data collected over the last 24 hours is queried.

2018-12-10T20:00:00Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.

The end time must be later than the start time.

2018-12-10T21:00:00Z

TriggerObject

string

No

The trigger of rate limiting by which you want to query data.

If you leave this parameter empty, all events that triggered rate limiting are queried.

IP

Value

string

No

The value of the trigger.

If you leave this parameter empty, all events recorded for the trigger are queried.

1.2.3.4

RuleName

string

No

A custom rule name. Valid values:

-   default\_normal: rule for the normal mode
    
-   default\_attack: rule for the emergency mode
    

If you leave this parameter empty, events that triggered rate limiting based on all rules are queried.

test2

PageSize

integer

No

The number of entries to return on each page. Default value: **30**.

30

PageNumber

integer

No

The page number of the page to return. Default value: **1**.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageIndex

integer

The page number of the returned page.

1

RequestId

string

The ID of the request.

3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F

PageSize

integer

The number of entries returned per page.

30

Total

integer

The total number of entries returned.

20

ActivityLog

array<object>

The list of rate limiting logs.

object

Value

string

The value of the trigger for rate limiting.

1.2.3.4

Ttl

integer

The period of time during which rate limiting remains effective.

300

Action

string

The action that was triggered.

deny

TriggerObject

string

The trigger of rate limiting.

Ip

TimeStamp

string

The timestamp of the data returned.

2015-12-10T20:00:00Z

DomainName

string

The accelerated domain name.

example.com

RuleName

string

The name of the rule based on which rate limiting was triggered.

test

## Examples

Success response

`JSON` format

```
{
  "PageIndex": 1,
  "RequestId": "3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F",
  "PageSize": 30,
  "Total": 20,
  "ActivityLog": [
    {
      "Value": "1.2.3.4",
      "Ttl": 300,
      "Action": "deny",
      "TriggerObject": "Ip",
      "TimeStamp": "2015-12-10T20:00:00Z",
      "DomainName": "example.com",
      "RuleName": "test"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidStartTime.Malformed

Specified StartTime is malformed.

The specified start time is invalid. For more information, see the API references.

400

InvalidEndTime.Malformed

Specified EndTime is malformed.

The format of the end time is invalid. Specify a valid value.

400

InvalidStartTime.ValueNotSupported

The specified value of parameter StartTime is not supported.

400

InvalidEndTime.Mismatch

The specified EndTime is earlier than the StartTime.

EndTime is earlier than StartTime.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeDomainCcActivityLog#workbench-doc-change-demo) for a complete list.
