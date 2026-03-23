Queries the details of a license order.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLicenseOrderDetails)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLicenseOrderDetails)

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

polardb:DescribeLicenseOrderDetails

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AliyunOrderId

string

Yes

The ID of the Alibaba Cloud order or virtual order.

239618016570503

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

ActivatedCodeCount

integer

The number of activation codes that have been generated.

2

ActivationCodeQuota

integer

The quota for requesting activation codes.

8

AliyunOrderId

string

The ID of the Alibaba Cloud order, including the virtual order ID.

239618016570503

AllowEmptySystemIdentifier

boolean

Indicates whether you can leave the System Identifier parameter empty when you generate an activation code.

false

Engine

string

The database type, such as PG, Oracle, or MySQL.

PG

GmtCreated

string

The time when the order was created.

2021-10-19 01:13:45

GmtModified

string

The time when the order was last updated.

2024-10-16 16:46:20

IsVirtualOrder

boolean

Indicates whether the order is a virtual order. You can pre-generate activation codes for virtual orders.

false

IsVirtualOrderFrozen

boolean

Indicates whether the virtual order is frozen. If a virtual order is frozen, you can no longer generate activation codes.

false

PackageType

string

The package type. Valid values:

-   single\_node\_subscribe: single-node (subscription)
    
-   single\_node\_long\_term: single-node (long-term)
    
-   primary\_backup\_subscribe: primary/standby (subscription)
    
-   primary\_backup\_long\_term: primary/standby (long-term)
    
-   pre\_generation\_long\_term: pre-generation (long-term)
    

pre\_generation\_long\_term

PackageValidity

string

The validity period of the package. The validity period is typically one year or a long-term period of 30 years.

1 year

PurchaseChannel

string

The purchase channel. Valid values: \`aliyun\_market\` (Alibaba Cloud Marketplace) and \`aliyun\_public\` (standard purchase page).

aliyun\_market

RequestId

string

The request ID.

22C0ACF0-DD29-4B67-9190-B7A48C\*\*\*\*\*\*

VirtualOrderId

string

The virtual order ID.

239618016570503

## Examples

Success response

`JSON` format

```
{
  "ActivatedCodeCount": 2,
  "ActivationCodeQuota": 8,
  "AliyunOrderId": "239618016570503",
  "AllowEmptySystemIdentifier": false,
  "Engine": "PG",
  "GmtCreated": "2021-10-19 01:13:45",
  "GmtModified": "2024-10-16 16:46:20",
  "IsVirtualOrder": false,
  "IsVirtualOrderFrozen": false,
  "PackageType": "pre_generation_long_term",
  "PackageValidity": "1 year",
  "PurchaseChannel": "aliyun_market",
  "RequestId": "22C0ACF0-DD29-4B67-9190-B7A48C******",
  "VirtualOrderId": "239618016570503"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeLicenseOrderDetails#workbench-doc-change-demo) for a complete list.
