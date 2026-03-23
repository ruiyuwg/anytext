You can call the DescribeMonitorGroups operation to query a list of application groups.

## Operation description

This topic provides an example of how to query a list of application groups. The response shows that two application groups are returned: `testGroup124` and `test123`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMonitorGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMonitorGroups)

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

cms:DescribeMonitorGroups

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

SelectContactGroups

boolean

No

Specifies whether to include alert contact groups in the response. Valid values:

-   true
    
-   false
    

true

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Pages start from page 1. Default value: 30.

30

Keyword

string

No

The keyword for the search.

test

InstanceId

string

No

The ID of the instance. This parameter is used to query the application group to which the specified instance belongs.

i-abcdefgh12\*\*\*\*

GroupName

string

No

The name of the application group.

testGroup124

IncludeTemplateHistory

boolean

No

Specifies whether to include the history of alert templates that are applied to the application group in the response. Valid values:

-   true
    
-   false
    

true

Type

string

No

The type of the application group. Valid values:

-   custom: a custom application group.
    
-   ehpc\_cluster: an application group that is synchronized from an E-HPC cluster.
    
-   kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
    

custom

DynamicTagRuleId

string

No

The ID of the dynamic tag rule.

6b882d9a-5117-42e2-9d0c-4749a0c6\*\*\*\*

GroupFounderTagKey

string

No

The tag key of the application group that is created using a dynamic tag rule.

GroupKey1

GroupFounderTagValue

string

No

The tag value of the application group that is created using a dynamic tag rule.

GroupValue1

GroupId

string

No

The IDs of the application groups. Separate multiple IDs with commas (,).

92\*\*\*\*

Tag

array<object>

No

The tags of the application group.

object

No

The tags of the application group.

Key

string

No

The key of tag N. Valid values of N: 1 to 5.

tagKey1

Value

string

No

The value of tag N. Valid values of N: 1 to 5.

tagValue1

Types

string

No

The type of the application group. Valid values:

-   custom: a custom application group.
    
-   ehpc\_cluster: an application group that is synchronized from an E-HPC cluster.
    
-   kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
    
-   tag: an application group that is automatically created based on tags.
    
-   resMgr: an application group that is created based on a resource group.
    
-   ess: an application group that is synchronized from Auto Scaling (ESS).
    

custom

For more information about common parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response data.

RequestId

string

The request ID.

F02B299A-D374-4595-9F55-7534D604F132

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true: The operation was successful.
    
-   false: The operation failed.
    

true

Code

integer

The status code.

**Note**

A value of 200 indicates that the operation was successful.

200

Message

string

The error message.

The specified resource is not found.

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries returned per page.

30

Total

integer

The total number of entries.

10

Resources

object

Resource

array<object>

The resources that are associated with the monitor group.

array<object>

The details of the linked instance.

Type

string

The type of the application group. Valid values:

-   custom: a custom application group.
    
-   ehpc\_cluster: an application group that is synchronized from an E-HPC cluster.
    
-   kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
    

custom

GroupFounderTagValue

string

The tag value of the application group that is created using a dynamic tag rule.

GroupValue1

BindUrl

string

The URL that is synchronized from the ACK cluster.

https://aliyun.com

GroupName

string

The name of the application group.

test123

GroupId

integer

The ID of the application group.

12345

ServiceId

string

The ID of the Alibaba Cloud service.

49\*\*\*\*

DynamicTagRuleId

string

The ID of the dynamic tag rule.

6b882d9a-5117-42e2-9d0c-4749a0c6\*\*\*\*

GmtCreate

integer

The timestamp when the application group was created. Unit: milliseconds.

1603181891000

GroupFounderTagKey

string

The tag key of the application group that is created using a dynamic tag rule.

GroupKey1

GmtModified

integer

The timestamp when the application group was modified. Unit: milliseconds.

1603181891000

ContactGroups

object

ContactGroup

array<object>

The alert contact groups.

object

An alert contact group.

Name

string

The name of the alert contact group.

CloudMonitor

Tags

object

Tag

array<object>

The tags that are attached to the application group.

object

A tag that is attached to the application group.

Key

string

The tag key of the application group.

tagKey1

Value

string

The tag value of the application group.

tagValue1

TemplateIds

object

TemplateId

array

The IDs of the alert templates.

string

The alert template applied to the application group.

92\*\*\*\*

ResourceGroupId

string

The ID of the resource group.

rg-aek2hopjh\*\*\*\*\*\*\*

TemplateInfos

object

TemplateInfo

array<object>

The information about the alert templates.

object

The information about an alert template.

EffectTime

integer

The effective period.

1603181891000

TemplateId

string

The ID of the alert template.

123\*\*\*

Ver

string

The version of the alert template.

0

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F02B299A-D374-4595-9F55-7534D604F132",
  "Success": true,
  "Code": 200,
  "Message": "The specified resource is not found.",
  "PageNumber": 1,
  "PageSize": 30,
  "Total": 10,
  "Resources": {
    "Resource": [
      {
        "Type": "custom",
        "GroupFounderTagValue": "GroupValue1",
        "BindUrl": "https://aliyun.com",
        "GroupName": "test123",
        "GroupId": 12345,
        "ServiceId": "49****",
        "DynamicTagRuleId": "6b882d9a-5117-42e2-9d0c-4749a0c6****",
        "GmtCreate": 1603181891000,
        "GroupFounderTagKey": "GroupKey1",
        "GmtModified": 1603181891000,
        "ContactGroups": {
          "ContactGroup": [
            {
              "Name": "CloudMonitor"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "Key": "tagKey1",
              "Value": "tagValue1"
            }
          ]
        },
        "TemplateIds": {
          "TemplateId": [
            "92****"
          ]
        },
        "ResourceGroupId": "rg-aek2hopjh*******",
        "TemplateInfos": {
          "TemplateInfo": [
            {
              "EffectTime": 1603181891000,
              "TemplateId": "123***",
              "Ver": "0"
            }
          ]
        }
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

%s

401

AccessDeniedException

You donot have sufficient access to perform this action.

500

InternalError

The request processing has failed due to some unknown error.

402

LimitExceeded

The quota for this customer had been reached.

403

AccessForbidden

The X.509 certificate or cms access key ID provided does not exist in our records.

206

%s

%s

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

503

%s

%s

406

%s

%s

429

Throttli∂ngException

The request was denied due to request throttling.

409

%s

%s

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMonitorGroups#workbench-doc-change-demo) for a complete list.
