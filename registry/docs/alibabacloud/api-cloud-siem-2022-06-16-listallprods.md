Lists the cloud products supported by Threat Analysis for data ingestion.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/cloud-siem/2022-06-16/ListAllProds)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/cloud-siem/2022-06-16/ListAllProds)

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

yundun-sas:DescribeProdCount

list

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

RoleType

integer

No

The view type.

-   0: The view of the current Alibaba Cloud account.
    
-   1: The view of all accounts that belong to the enterprise.
    

1

RoleFor

integer

No

The user ID of a member. An administrator can specify this parameter to switch to the member's view.

113091674488\*\*\*\*

RegionId

string

No

The region of the Data Management hub for Threat Analysis. Select the region that corresponds to the location of your assets. Valid values:

-   cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
    
-   ap-southeast-1: Your assets are in a region outside China.
    

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

CloudSiemSuccessResponse

Data

object

The data returned.

TotalCount

integer

The total number of logs.

19

PageSize

integer

The number of entries per page.

10

CurrentPage

integer

The current page number.

1

ProdList

array<object>

The list of products.

1

object

ProdCode

string

The code of the cloud product.

sas

TotalLogCount

integer

The total number of logs for the product.

19

ImportedLogCount

integer

The number of ingested logs for the product.

10

ModifyTime

string

The time when logs were last ingested for the product.

2023-11-23 12:12:12

CloudCode

string

The multicloud code. Valid values:

-   qcloud: Tencent Cloud.
    
-   aliyun: Alibaba Cloud.
    
-   hcloud: Huawei Cloud.
    

hcloud

RequestId

string

The request ID.

6276D891-\*\*\*\*\*-55B2-87B9-74D413F7\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Data": {
    "TotalCount": 19,
    "PageSize": 10,
    "CurrentPage": 1,
    "ProdList": [
      {
        "ProdCode": "sas",
        "TotalLogCount": 19,
        "ImportedLogCount": 10,
        "ModifyTime": "2023-11-23 12:12:12",
        "CloudCode": "hcloud"
      }
    ]
  },
  "RequestId": "6276D891-*****-55B2-87B9-74D413F7****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InternalError

The request processing has failed due to some unknown error.

See [Error Codes](https://api.alibabacloud.com/document/cloud-siem/2022-06-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/cloud-siem/2022-06-16/ListAllProds#workbench-doc-change-demo) for a complete list.
