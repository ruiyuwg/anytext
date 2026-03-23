Queries split bills.

## Operation description

-   Split bill data for the current month is for reference only and cannot be used for reconciliation. The final bill for the current month is available for query after 12:00 (UTC+8) on the fourth day of the next month. The split bill data for the current month does not include unsettled pay-as-you-go data.
    
-   You can query split bill data from the past 12 months.
    
-   Split bill data is updated with a 48-hour delay from the actual resource consumption. For products that support split billing, such as CDN, OSS, and Internet Shared Bandwidth, the costs of individual billable items, such as domain names, buckets, and EIPs, are updated with a 72-hour delay.
    
-   Split bill data is available only after you enable the split bill feature on the [Split Bill](https://usercenter2-intl.console.alibabacloud.com/finance/split-bill) page in the console. The data becomes available 24 hours after you enable the feature.
    
-   A single user can perform a maximum of 10 queries per second (QPS). If a timeout error occurs, retry the request.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/DescribeSplitItemBill)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/DescribeSplitItemBill)

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

bssapi:DescribeSplitItemBill

get

\*All Resource

`*`

bssapi:ProductCode

bssapi:ProductType

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

BillingCycle

string

Yes

The billing cycle. Format: YYYY-MM.

2020-03

ProductCode

string

No

The code of the product.

rds

ProductType

string

No

The type of the product.

rds

SubscriptionType

string

No

The billing method. Valid values:

-   Subscription: subscription.
    
-   PayAsYouGo: pay-as-you-go.
    

**Note**

This parameter must be used with the ProductCode parameter.

PayAsYouGo

NextToken

string

No

The token that is used to retrieve the next page of results. You do not need to specify this parameter for the first request. The value is the NextToken value that is returned in the previous API call. If a value is specified, the new query starts from the next page. If you leave this parameter empty, the query starts from the beginning.

CAESEgoQCg4KCmd

MaxResults

integer

No

The maximum number of entries to return. Default value: 20. Maximum value: 300.

20

BillOwnerId

integer

No

The ID of the account that owns the resource. The account that owns the resource is the account that actually uses the resource.

123

InstanceID

string

No

The ID of the instance.

i-kjhdskjgshfdlkjfdh

SplitItemID

string

No

The ID of the split item.

i-kjhdskjgshfdlkjfdh

Granularity

string

No

The granularity to query bills. Valid values:

-   MONTHLY: queries bills by month. The data is consistent with the data on the Billing Cycle tab of the Split Bill page in User Center.
    
-   DAILY: queries bills by day. The data is consistent with the data on the By Day tab of the Split Bill page in User Center.
    

**Note**

If you set this parameter to DAILY, you must specify the BillingDate parameter.

Monthly

BillingDate

string

No

The billing date. This parameter is required only when the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.

2020-03-02

TagFilter

array<object>

No

The tag filter. You can specify multiple tag values for the TagValues parameter. The relationship between multiple tag values is OR.

object

No

The tag filter.

TagValues

array

No

The tag values. A list of strings. TagValues.N can be 1 to 20, and 1 to 128 characters in length.

-   If you specify the TagValues.N parameter, you must also specify TagFilter.N.TagKey. Otherwise, an InvalidParameter.TagValues error is reported.
    
-   If you specify multiple tag values, bills that match any of the tag values are queried.
    

TestValue

string

No

The tag value.

TestValue

TagKey

string

No

Specifies the tag key for filtering cost allocation or billing data.

-   Valid range for N: 1 to 20 (you can define up to 20 tag filters).
    
-   Length: 1 to 128 characters.
    

Behavior:

-   If you specify only TagKey (without TagValue), the system returns bills for all resources that have that tag key assigned (regardless of value).
    
-   If you specify multiple TagKey+TagValue pairs, the system uses OR logic: bills are returned if any of the key-value pairs match.
    
-   Billing data reflects the tags as they existed during the billing period. If a tag is removed or changed, past bills are not re-evaluated.
    

TestKey

IsHideZeroCharge

boolean

No

Specifies whether to filter out bills for which the PretaxGrossAmount and PretaxAmount are both 0. Valid values:

-   false
    
-   true
    

false

PipCode

string

No

The code of the product. This code is consistent with the product code on the bill in User Center.

rds

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

The error message.

Successful!

RequestId

string

The ID of the request.

79EE7556-0CFD-44EB-9CD6-B3B526E3A85F

Success

boolean

Indicates whether the request was successful.

true

Data

object

The returned data.

NextToken

string

The token that is used to retrieve the next page of results. If this parameter is empty, all the results are returned. For the next query, pass the value of this parameter as the NextToken request parameter.

CAESEgoQCg4K

BillingCycle

string

The billing cycle. Format: YYYY-MM.

2020-03

MaxResults

integer

The maximum number of entries returned for the current request.

20

AccountID

string

The ID of the account.

185xxxx3489

TotalCount

integer

The total number of entries.

20

AccountName

string

The name of the account.

test@test.aliyunid.com

Items

array<object>

The details of the bill.

object

SplitAccountID

string

The ID of the account to which the split item belongs.

12\*\*122

BillAccountName

string

The name of the account to which the bill belongs.

test@test.aliyunid.com

SubscriptionType

string

The billing method. Valid values:

-   Subscription: subscription.
    
-   PayAsYouGo: pay-as-you-go.
    

PayAsYouGo

InstanceSpec

string

The instance type.

ecs.sn1ne.3xlarge

DeductedByCoupons

number

The amount deducted with coupons.

0

Region

string

The region.

China (Hangzhou)

OutstandingAmount

number

The outstanding amount.

0.1

PipCode

string

The code of the product. This code is consistent with the product code on the bill in User Center.

rds

CommodityCode

string

The code of the commodity. This code is consistent with the product detail code in User Center.

rds

NickName

string

The nickname of the instance.

nick

ProductDetail

string

The details of the product.

ApsaraDB RDS

Usage

string

The usage.

100

IntranetIP

string

The private IP address.

192.xx.xx.xx

UsageUnit

string

The unit of the usage.

GB

SplitCommodityCode

string

The commodity code of the split item.

rds

BillAccountID

string

The ID of the account to which the bill belongs.

185xxxx3489

ProductType

string

The type of the product.

rds

DeductedByResourcePackage

string

The amount deducted with resource plans.

0

PaymentAmount

number

The amount paid in cash. This amount includes the amount deducted from the credit refunds.

0

SplitBillingCycle

string

The month of the split bill.

2021-06

ServicePeriod

string

The service duration.

20

SplitItemName

string

The name of the split item.

iZ28bycvyb4Z

ListPrice

string

The unit price.

0.12

Zone

string

The zone.

Qingdao Zone B

PretaxGrossAmount

number

The pretax gross amount.

0

CashAmount

number

The amount paid in cash. This amount does not include the amount deducted from the credit refunds.

0

InstanceConfig

string

The instance configuration details.

CPU:12

BillingDate

string

The billing date. Format: YYYY-MM-DD. This parameter is not supported.

2020-01-20

InternetIP

string

The public IP address.

34.xx.x.x

Item

string

The type of the bill. Valid values:

-   SubscriptionOrder: subscription order.
    
-   PayAsYouGoBill: pay-as-you-go bill.
    
-   Refund: refund.
    
-   Adjustment: adjustment.
    

PayAsYouGoBill

SplitItemID

string

The ID of the split item.

i-28bycvyb4

InstanceID

string

The ID of the instance.

i-kjhdskjgshfdlkjfdh

Tag

string

The tag of the resource. If the tag of a resource is changed, the bill generated for the resource during the lifecycle of the tag contains the tag.

key:testKey value:testValue; key:testKey1 value:testValues1

Currency

string

The currency. Valid values:

-   CNY
    
-   USD
    
-   JPY
    

CNY

DeductedByCashCoupons

number

The amount deducted with cash coupons.

0

BizType

string

The business type.

trusteeship

BillingItem

string

The billable item.

Bandwidth

BillingItemCode

string

The code of the billable item.

disk

CostUnit

string

The cost center.

Not allocated

ListPriceUnit

string

The unit of the unit price.

CNY/GB

ResourceGroup

string

The resource group.

Default resource group

PretaxAmount

number

The pretax amount.

0

ServicePeriodUnit

string

The unit of the service duration.

Hour

SplitBillingDate

string

The day of the split bill.

2021-06-01

ProductName

string

The name of the product.

ApsaraDB RDS

SplitProductDetail

string

The name of the split item's product detail.

ApsaraDB RDS

AdjustAmount

number

The amount deducted from the credit refunds.

0

OwnerID

string

The ID of the account that owns the resource. This parameter is returned in multi-account payment scenarios.

169\*\*\*013

DeductedByPrepaidCard

number

The amount deducted with prepaid cards.

0

InvoiceDiscount

number

The discount.

0

SplitAccountName

string

The name of the account to which the split item belongs.

test\*\*1122

BillingType

string

The billing method.

Other

ProductCode

string

The code of the product.

rds

ItemName

string

The name of the item.

iZ28bycvyb4Z

AfterDiscountAmount

number

The amount after a discount. This is the amount payable after a discount is applied. Formula: Amount after discount = List price - Discount.

## Examples

Success response

`JSON` format

```
{
  "Code": "Success",
  "Message": "Successful!",
  "RequestId": "79EE7556-0CFD-44EB-9CD6-B3B526E3A85F",
  "Success": true,
  "Data": {
    "NextToken": "CAESEgoQCg4K",
    "BillingCycle": "2020-03",
    "MaxResults": 20,
    "AccountID": "185xxxx3489",
    "TotalCount": 20,
    "AccountName": "test@test.aliyunid.com",
    "Items": [
      {
        "SplitAccountID": "12**122",
        "BillAccountName": "test@test.aliyunid.com",
        "SubscriptionType": "PayAsYouGo",
        "InstanceSpec": "ecs.sn1ne.3xlarge",
        "DeductedByCoupons": 0,
        "Region": "China (Hangzhou)\n",
        "OutstandingAmount": 0.1,
        "PipCode": "rds",
        "CommodityCode": "rds",
        "NickName": "nick",
        "ProductDetail": "ApsaraDB RDS\n",
        "Usage": "100",
        "IntranetIP": "192.xx.xx.xx",
        "UsageUnit": "GB",
        "SplitCommodityCode": "rds",
        "BillAccountID": "185xxxx3489",
        "ProductType": "rds",
        "DeductedByResourcePackage": "0",
        "PaymentAmount": 0,
        "SplitBillingCycle": "2021-06",
        "ServicePeriod": "20",
        "SplitItemName": "iZ28bycvyb4Z",
        "ListPrice": "0.12",
        "Zone": "Qingdao Zone B\n",
        "PretaxGrossAmount": 0,
        "CashAmount": 0,
        "InstanceConfig": "CPU:12",
        "BillingDate": "2020-01-20",
        "InternetIP": "34.xx.x.x",
        "Item": "PayAsYouGoBill",
        "SplitItemID": "i-28bycvyb4",
        "InstanceID": "i-kjhdskjgshfdlkjfdh",
        "Tag": "key:testKey value:testValue; key:testKey1 value:testValues1",
        "Currency": "CNY",
        "DeductedByCashCoupons": 0,
        "BizType": "trusteeship",
        "BillingItem": "Bandwidth\n",
        "BillingItemCode": "disk",
        "CostUnit": "Not allocated\n",
        "ListPriceUnit": "CNY/GB\n",
        "ResourceGroup": "Default resource group\n",
        "PretaxAmount": 0,
        "ServicePeriodUnit": "Hour\n",
        "SplitBillingDate": "2021-06-01",
        "ProductName": "ApsaraDB RDS\n",
        "SplitProductDetail": "ApsaraDB RDS\n",
        "AdjustAmount": 0,
        "OwnerID": "169***013",
        "DeductedByPrepaidCard": 0,
        "InvoiceDiscount": 0,
        "SplitAccountName": "test**1122",
        "BillingType": "Other\n",
        "ProductCode": "rds",
        "ItemName": "iZ28bycvyb4Z",
        "AfterDiscountAmount": 0
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/DescribeSplitItemBill#workbench-doc-change-demo) for a complete list.
