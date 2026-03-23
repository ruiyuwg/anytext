Queries information about Alibaba Cloud products.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/QueryProductList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/QueryProductList)

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

bss:QueryProductList

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

QueryTotalCount

boolean

No

Specifies whether to return the total number of products. The default value is false.

true

PageNum

integer

Yes

The page number.

1

PageSize

integer

No

The number of records per page. The maximum value is 300. The default value is 20.

10

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

Code

string

The status code.

Success

Message

string

The returned message.

This API is not applicable for caller.

RequestId

string

The request ID.

94858229-2758-4663-A7D0-99490D541F15

Success

boolean

Indicates whether the request was successful.

true

Data

object

The information about Alibaba Cloud products.

PageNum

integer

The page number.

1

PageSize

integer

The number of records displayed per page.

10

TotalCount

integer

The total number of product records.

449

ProductList

object

Product

array<object>

The list of product definitions.

object

ProductName

string

The product name.

CDN (Pay-as-you-go)

ProductType

string

The product type.

CDN

SubscriptionType

string

The billing method. Valid values:

-   Subscription: subscription.
    
-   PayAsYouGo: pay-as-you-go.
    

PayAsYouGo

ProductCode

string

The product code.

cdn

## Examples

Success response

`JSON` format

```
{
  "Code": "Success",
  "Message": "This API is not applicable for caller.",
  "RequestId": "94858229-2758-4663-A7D0-99490D541F15",
  "Success": true,
  "Data": {
    "PageNum": 1,
    "PageSize": 10,
    "TotalCount": 449,
    "ProductList": {
      "Product": [
        {
          "ProductName": "CDN (Pay-as-you-go)\n",
          "ProductType": "CDN",
          "SubscriptionType": "PayAsYouGo",
          "ProductCode": "cdn"
        }
      ]
    }
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/QueryProductList#workbench-doc-change-demo) for a complete list.
