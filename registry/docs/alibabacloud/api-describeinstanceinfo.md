Queries the information about the Web Application Firewall (WAF) instance within your Alibaba Cloud account.

## Usage notes

You can call the DescribeInstanceInfo operation to query the information about the WAF instance within your Alibaba Cloud account. The information includes the ID, version, status, and expiration time of the instance.

## Limits

You can call this operation up to 50 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=waf-openapi&api=DescribeInstanceInfo&type=RPC&version=2019-09-10)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeInstanceInfo

The operation that you want to perform. Set the value to **DescribeInstanceInfo**.

InstanceId

String

No

waf-cn-tl32ast\*\*\*\*

The ID of the WAF instance.

If you do not configure this parameter, all WAF instances in the Chinese mainland or all WAF instances outside the Chinese mainland are queried.

ResourceGroupId

String

No

rg-atstuj3rtop\*\*\*\*

The ID of the resource group to which the WAF instance belongs in Resource Management. If you do not configure this parameter, the WAF instance belongs to the default resource group.

All Alibaba Cloud API operations must include common request parameters. For more information about common request parameters, see [Common parameters](/help/en/waf/web-application-firewall-2-0/developer-reference/common-parameters).

For more information about sample requests, see the **"Examples"** section of this topic.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

D7861F61-5B61-46CE-A47C-6B19160D5EB0

The ID of the request.

InstanceInfo

Object

The information about the WAF instance.

Status

Integer

1

Indicates whether the WAF instance expires. Valid values:

-   **0**: The instance expires.
-   **1**: The instance does not expire.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

EndDate

Long

1512921600

The expiration time of the WAF instance. This value is a UNIX timestamp. Unit: seconds.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

Version

String

version\_pro\_china

The edition of the WAF instance. Valid values:

-   **version\_pro\_china**: a WAF Pro instance in the Chinese mainland
    
-   **version\_business\_china**: a WAF Business instance in the Chinese mainland
    
-   **version\_enterprise\_china**: a WAF Enterprise instance in the Chinese mainland
    
-   **version\_exclusive\_china**: a WAF Exclusive instance in the Chinese mainland
    
-   **version\_hybrid\_cloud\_standard\_china**: a Hybrid Cloud WAF instance in the Chinese mainland
    
-   **version\_pro\_china**: a WAF Pro instance outside the Chinese mainland
    
-   **version\_business**: a WAF Business instance outside the Chinese mainland
    
-   **version\_enterprise**: a WAF Enterprise instance outside the Chinese mainland
    
-   **version\_exclusive**: a WAF Exclusive instance outside the Chinese mainland
    
-   **version\_hybrid\_cloud\_standard**: a Hybrid Cloud WAF instance outside the Chinese mainland

The preceding list contains all the editions of WAF instances within accounts that are created at the International site. If the returned version is not in the list, check whether your account is created at the International site.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

RemainDay

Integer

1

The number of remaining days before the trial period of the WAF instance ends.

**Note** This parameter is returned only if the value of **Trial** is **1**. The value 1 indicates that the free trial of a WAF instance is activated.

Region

String

cn

The region in which the WAF instance resides. Valid values:

-   **cn**: a region in the Chinese mainland
-   **cn-hongkong**: a region outside the Chinese mainland

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

PayType

Integer

1

The activation status of WAF. Valid values:

-   **0**: No WAF instances are purchased within the Alibaba Cloud account.
-   **1**: A subscription WAF instance is purchased within the Alibaba Cloud account.
    

InDebt

Integer

1

Indicates whether the WAF instance has overdue payments. Valid values:

-   **0**: The instance has overdue payments.
-   **1**: The instance does not have overdue payments.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

InstanceId

String

waf-cn-tl32ast\*\*\*\*

The ID of the WAF instance.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

SubscriptionType

String

Subscription

The billing method of the WAF instance: The value is fixed as **Subscription**.

**Note** If the value of **PayType** is **0**, this parameter is not returned. The value 0 indicates that no WAF instances are purchased.

Trial

Integer

1

Indicates whether a WAF instance of the free trial edition is activated within the Alibaba Cloud account. Valid values:

-   **0**: no
-   **1**: yes

**Note** This parameter is returned only if a WAF instance of the free trial edition is activated within the Alibaba Cloud account.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=DescribeInstanceInfo
&<Common request parameters>
```

Sample success response

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeInstanceInfoResponse>
    <RequestId>D7861F61-5B61-46CE-A47C-6B19160D5EB0</RequestId>
    <InstanceInfo>
        <Status>1</Status>
        <EndDate>1512921600</EndDate>
        <Version>version_3</Version>
        <Region>cn</Region>
        <PayType>1</PayType>
        <InDebt>1</InDebt>
        <InstanceId>waf-cn-tl32ast****</InstanceId>
        <SubscriptionType>Subscription</SubscriptionType>
    </InstanceInfo>
</DescribeInstanceInfoResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "D7861F61-5B61-46CE-A47C-6B19160D5EB0",
  "InstanceInfo" : {
    "Status" : 1,
    "EndDate" : 1512921600,
    "Version" : "version_3",
    "Region" : "cn",
    "PayType" : 1,
    "InDebt" : 1,
    "InstanceId" : "waf-cn-tl32ast****",
    "SubscriptionType" : "Subscription"
  }
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/waf-openapi).
