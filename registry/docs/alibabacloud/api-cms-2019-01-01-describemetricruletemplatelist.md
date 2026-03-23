Queries alert templates.

## Operation description

This topic provides an example on how to query alert templates. In this example, the following alert templates are returned in the response: `ECS_Template1` and `ECS_Template2`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricRuleTemplateList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricRuleTemplateList)

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

cms:DescribeMetricRuleTemplateList

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

Name

string

No

The name of the alert template.

ECS\_Template1

Keyword

string

No

The keyword of the alert template name.

ECS

TemplateId

integer

No

The ID of the alert template.

70\*\*\*\*

PageNumber

integer

No

The page number.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

10

History

boolean

No

Specifies whether to display the history of applying the alert templates to application groups. Valid values:

-   true
    
-   false (default)
    

false

Order

boolean

No

The sorting order. Valid values:

-   true (default): ascending order
    
-   false: descending order
    

true

OrderBy

string

No

The sorting basis. Valid values:

-   gmtMotified: sorts alert templates by modification time
    
-   gmtCreate (default): sorts alert templates by creation time
    

gmtCreate

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The error message.

The Request is not authorization.

RequestId

string

The request ID.

659401C0-6214-5C02-972A-CFA929D717B7

Total

integer

The total number of entries returned.

2

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Templates

object

Template

array<object>

The queried alert templates.

array<object>

None

Description

string

The description of the alert template.

ECS的CPU使用率

GmtCreate

integer

The timestamp when the alert template was created.

Unit: milliseconds.

1646018798000

Name

string

The name of the alert template.

ECS\_Template1

RestVersion

integer

The version of the alert template.

Default value: 0.

0

GmtModified

integer

The timestamp when the alert template was modified.

Unit: milliseconds.

1646054798000

TemplateId

integer

The ID of the alert template.

70\*\*\*\*

ApplyHistories

object

ApplyHistory

array<object>

The history of applying the alert templates to application groups.

object

None

GroupId

integer

The ID of the application group.

3607\*\*\*\*

GroupName

string

The name of the application group.

ECS\_Group

ApplyTime

integer

The timestamp when the alert template was applied to the application group.

Unit: milliseconds.

1646055898000

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "The Request is not authorization.",
  "RequestId": "659401C0-6214-5C02-972A-CFA929D717B7",
  "Total": 2,
  "Success": true,
  "Templates": {
    "Template": [
      {
        "Description": "ECS的CPU使用率",
        "GmtCreate": 1646018798000,
        "Name": "ECS_Template1",
        "RestVersion": 0,
        "GmtModified": 1646054798000,
        "TemplateId": 0,
        "ApplyHistories": {
          "ApplyHistory": [
            {
              "GroupId": 0,
              "GroupName": "ECS_Group",
              "ApplyTime": 1646055898000
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

Illegal parameters.

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

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricRuleTemplateList#workbench-doc-change-demo) for a complete list.
