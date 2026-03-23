Queries domain name groups.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomainGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomainGroups)

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

alidns:DescribeDomainGroups

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

Lang

string

No

The language of the response. Valid values:

-   zh: Chinese
    
-   en: English
    

Default value: zh

en

KeyWord

string

No

The keyword for the group name. The search uses the %KeyWord% pattern and is case-insensitive.

Group

PageNumber

integer

No

The page number. The start value is **1**. The default value is **1**.

1

PageSize

integer

No

The number of entries to return on each page. The maximum value is **100**. The default value is **20**.

20

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DomainGroups

object

DomainGroup

array<object>

The list of domain name groups.

object

GroupId

string

The ID of the domain name group.

-   defaultGroup: The default group. It contains domain names that are not assigned to any group.
    
-   An empty string (""): Represents all domain names.
    

defaultGroup

GroupName

string

The name of the domain name group.

MyGroup

DomainCount

integer

The number of domain names in the group.

2

TotalCount

integer

The total number of domain name groups.

1

PageSize

integer

The number of entries to return on each page. The maximum value is **100**. The default value is **20**.

20

RequestId

string

The unique ID of the request.

536E9CAD-DB30-4647-AC87-AA5CC38C5382

PageNumber

integer

The page number. The start value is **1**. The default value is **1**.

1

## Examples

Success response

`JSON` format

```
{
  "DomainGroups": {
    "DomainGroup": [
      {
        "GroupId": "defaultGroup",
        "GroupName": "MyGroup",
        "DomainCount": 2
      }
    ]
  },
  "TotalCount": 1,
  "PageSize": 20,
  "RequestId": "536E9CAD-DB30-4647-AC87-AA5CC38C5382",
  "PageNumber": 1
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Alidns/2015-01-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Alidns/2015-01-09/DescribeDomainGroups#workbench-doc-change-demo) for a complete list.
