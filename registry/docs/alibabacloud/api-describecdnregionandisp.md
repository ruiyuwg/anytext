You can call the DescribeCdnRegionAndIsp operation to query regions and carriers.

## Operation description

-   The list of regions and carriers that are supported by Alibaba Cloud CDN is updated periodically. For the latest information, follow the updates on the official website.
    
-   Each user can make up to 30 calls per second.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnRegionAndIsp)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnRegionAndIsp)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cdn:DescribeCdnRegionAndIsp

none

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

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2387C335-932C-4E1E-862C-1C4363B6DE72

Regions

object

Region

array<object>

The list of regions.

object

NameEn

string

The English name.

liaoning

NameZh

string

The Chinese name.

辽宁省

Isps

object

Isp

array<object>

The list of carriers.

object

NameEn

string

The English name.

unicom

NameZh

string

The Chinese name.

联通

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2387C335-932C-4E1E-862C-1C4363B6DE72",
  "Regions": {
    "Region": [
      {
        "NameEn": "liaoning",
        "NameZh": "辽宁省"
      }
    ]
  },
  "Isps": {
    "Isp": [
      {
        "NameEn": "unicom",
        "NameZh": "联通"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnRegionAndIsp#workbench-doc-change-demo) for a complete list.
