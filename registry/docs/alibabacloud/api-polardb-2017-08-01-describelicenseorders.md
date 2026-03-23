This operation queries a list of license orders.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLicenseOrders)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLicenseOrders)

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

polardb:DescribeLicenseOrders

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

PageSize

integer

No

The number of records to return on each page.

30

PageNumber

integer

No

The page number to query.

1

AliyunOrderId

string

No

The Alibaba Cloud order ID. This can be a virtual order ID.

239618016570503

PurchaseChannel

string

No

The purchase channel. Valid values: \`aliyun\_market\` (Alibaba Cloud Marketplace) and \`aliyun\_public\` (standard purchase page).

aliyun\_market

PackageType

string

No

The package type. Valid values:

-   single\_node\_subscribe: single node (subscription)
    
-   single\_node\_long\_term: single node (long-term)
    
-   primary\_backup\_subscribe: primary/standby (subscription)
    
-   primary\_backup\_long\_term: primary/standby (long-term)
    
-   pre\_generation\_long\_term: pre-generated (long-term)
    

single\_node\_subscribe

VirtualOrder

boolean

No

Specifies whether to query only virtual orders.

**Valid values:**

-   true :
    
    true
    
-   false :
    
    false
    

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

Items

array<object>

The list of orders.

object

ActivatedCodeCount

integer

The number of activation codes that have been generated.

10

ActivationCodeQuota

integer

The quota for requesting activation codes.

10

AliyunOrderId

string

The Alibaba Cloud order ID or virtual order ID.

227638319690519

AllowEmptySystemIdentifier

boolean

Specifies whether the System Identifier can be left empty when an activation code is generated.

false

Engine

string

The database type, such as PG, Oracle, or MySQL.

PG

GmtCreated

string

The creation time.

2022-02-11 03:14:15

GmtModified

string

The update time.

2022-02-11 03:14:15

IsVirtualOrder

boolean

Indicates whether the order is a virtual order. Virtual orders allow for pre-generating activation codes.

false

IsVirtualOrderFrozen

boolean

Indicates whether the virtual order is frozen. No more activation codes can be generated from a frozen order.

false

PackageType

string

The package type. Valid values:

-   single\_node\_subscribe: single node (subscription)
    
-   single\_node\_long\_term: single node (long-term)
    
-   primary\_backup\_subscribe: primary/standby (subscription)
    
-   primary\_backup\_long\_term: primary/standby (long-term)
    
-   pre\_generation\_long\_term: pre-generated (long-term)
    

single\_node\_subscribe

PackageValidity

string

The validity period of the package. Common options are one year or long-term (30 years).

1 year

PurchaseChannel

string

The purchase channel. Valid values: \`aliyun\_market\` (Alibaba Cloud Marketplace) and \`aliyun\_public\` (standard purchase page).

aliyun\_public

VirtualAliyunOrderId

string

The virtual order ID.

227638319690519

PageNumber

integer

The current page number.

1

PageRecordCount

integer

The number of records on the current page.

12

RequestId

string

The request ID.

34458CD3-33E0-4624-BFEF-840C15\*\*\*\*\*\*

TotalRecordCount

integer

The total number of records.

50

## Examples

Success response

`JSON` format

```
{
  "Items": [
    {
      "ActivatedCodeCount": 10,
      "ActivationCodeQuota": 10,
      "AliyunOrderId": "227638319690519",
      "AllowEmptySystemIdentifier": false,
      "Engine": "PG",
      "GmtCreated": "2022-02-11 03:14:15",
      "GmtModified": "2022-02-11 03:14:15",
      "IsVirtualOrder": false,
      "IsVirtualOrderFrozen": false,
      "PackageType": "single_node_subscribe",
      "PackageValidity": "1 year",
      "PurchaseChannel": "aliyun_public",
      "VirtualAliyunOrderId": "227638319690519"
    }
  ],
  "PageNumber": 1,
  "PageRecordCount": 12,
  "RequestId": "34458CD3-33E0-4624-BFEF-840C15******",
  "TotalRecordCount": 50
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeLicenseOrders#workbench-doc-change-demo) for a complete list.
