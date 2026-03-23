Queries a list of orders.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ListOrders)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ListOrders)

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

polardb:ListOrders

list

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

RegionId

string

No

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view the details of regions.

cn-hangzhou

ProductCode

string

No

The product code.

polardb

Category

string

No

The [edition](/help/en/polardb/polardb-for-mysql/enterprise-edition-product-series) of the cluster. Valid values:

-   **Normal**: Cluster Edition
    
-   **Basic**: single node
    
-   **Archive**: X-Engine
    
-   **NormalMultimaster**: Multi-master Cluster Edition
    
-   **SENormal**: Standard Edition
    

**Note**

-   The single node edition is not supported on PolarDB for PostgreSQL clusters that run PostgreSQL 11.
    
-   The Standard Edition is supported on PolarDB for MySQL clusters that run MySQL 8.0 or 5.7, and on PolarDB for PostgreSQL clusters that run PostgreSQL 14.
    
-   PolarDB for MySQL clusters that run MySQL 8.0 support X-Engine and the Multi-master Cluster Edition.
    

Normal

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

InstanceId

string

No

The ID of the current instance.

pc-2zed3m89cw\*\*\*

OrderStatus

string

No

The status of the order.

-   **pending**: The task is waiting to start.
    
-   **create**: The order is placed and is being processed.
    
-   **fail**: The instance failed to be created.
    
-   **cancel**: The order is canceled.
    
-   **success**: The instance is created.
    

success

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: 30.

30

PageNumber

integer

No

The page number.

1

MaxResults

integer

No

The maximum number of entries to return for the current request. Default value: 10.

10

NextToken

string

No

A pagination token. If the query results are not returned in a single call, this token is returned. Use this token in a subsequent call to retrieve the remaining results.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

MaxResults

integer

The maximum number of entries returned for the current request. Default value: 10.

10

NextToken

string

A pagination token. If the query results are not returned in a single call, this token is returned. Use this token in a subsequent call to retrieve the remaining results.

212db86sca4384811e0b5e8707e\*\*\*\*\*\*

OrderList

array<object>

The list of orders.

object

The information about the order instance.

AliUid

string

The ID of the Alibaba Cloud account.

1910740440664\*\*\*\*

ChargeType

string

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
    
-   **Prepaid**: subscription
    

Prepaid

CommodityCode

string

The commodity code. Valid values:

-   polardb\_sub: subscription in the Chinese mainland.
    
-   polardb\_sub\_intl: subscription in Hong Kong (China) and regions outside China.
    
-   polardb\_payg: pay-as-you-go in the Chinese mainland.
    
-   polardb\_payg\_intl: pay-as-you-go in Hong Kong (China) and regions outside China.
    
-   polardb\_sub\_jushita: Jushita subscription.
    
-   polardb\_payg\_jushita: Jushita pay-as-you-go.
    
-   polardb\_sub\_cainiao: Cainiao subscription.
    
-   polardb\_payg\_cainiao: Cainiao pay-as-you-go.
    

**Note**

-   If you use an Alibaba Cloud account for the China site, you can view only the commodity codes for the Chinese mainland.
    
-   If you use an Alibaba Cloud international site account, you can view only the commodity codes for regions outside the Chinese mainland.
    
-   If you use a Jushita account, you can view only the commodity codes for Jushita.
    
-   If you use a Cainiao account, you can view only the commodity codes for Cainiao.
    

polardb\_payg\_intl

CreatedTime

string

The time when the order was created.

2021-03-31T16:09:13

InstanceId

string

The cluster ID.

pc-uf6k532gav\*\*\*\*\*\*\*

OrderId

string

The order ID.

25808743077\*\*\*\*\*

OrderStatus

string

The status of the order.

-   **pending**: The task is waiting to start.
    
-   **create**: The order is placed and is being processed.
    
-   **fail**: The instance failed to be created.
    
-   **cancel**: The order is canceled.
    
-   **success**: The instance is created.
    

success

OrderType

string

The type of the order. Valid values:

-   BUY: The instance is purchased.
    
-   UPGRADE: The instance configuration is changed.
    
-   RENEW: The subscription is renewed.
    
-   CONVERT: The billing method is changed.
    

BUY

ProduceCode

string

The product code.

polardb

Region

string

The region information

cn-hangzhou

PageNumber

integer

The page number of the returned page. Default value: 1.

1

PageSize

integer

The number of entries returned per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: 30.

30

RequestId

string

The request ID.

3AA69096-757C-4647-B36C-29EBC2\*\*\*\*\*\*

TotalCount

integer

The total number of entries.

7

## Examples

Success response

`JSON` format

```
{
  "MaxResults": 10,
  "NextToken": "212db86sca4384811e0b5e8707e******",
  "OrderList": [
    {
      "AliUid": "1910740440664****",
      "ChargeType": "Prepaid",
      "CommodityCode": "polardb_payg_intl",
      "CreatedTime": "2021-03-31T16:09:13",
      "InstanceId": "pc-uf6k532gav*******",
      "OrderId": "25808743077*****",
      "OrderStatus": "success",
      "OrderType": "BUY",
      "ProduceCode": "polardb",
      "Region": "cn-hangzhou"
    }
  ],
  "PageNumber": 1,
  "PageSize": 30,
  "RequestId": "3AA69096-757C-4647-B36C-29EBC2******",
  "TotalCount": 7
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

403

OperationDenied.Product

The product code is not supported.

This operation is not supported for the product.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ListOrders#workbench-doc-change-demo) for a complete list.
