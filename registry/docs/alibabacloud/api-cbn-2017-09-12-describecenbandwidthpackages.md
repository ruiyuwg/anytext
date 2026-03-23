Queries the information about bandwidth plans.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenBandwidthPackages)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeCenBandwidthPackages)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a RAM policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys applicable across all RAM-supported services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:DescribeCenBandwidthPackages

get

\*CenBandwidthPackage

`acs:cen:*:{#accountId}:cenbandwidthpackage/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

IncludeReservationData

boolean

No

Specifies whether to include renewal data. Valid values:

-   **true**
    
-   **false**
    

true

PageNumber

integer

No

The number of the page to return. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Maximum value: **50**. Default value: **10**.

2

IsOrKey

boolean

No

The logical operator between the filter conditions. Valid values:

-   **false** (default): **AND** Bandwidth plans that meet all filter conditions are returned.
    
-   **true**: **OR** Bandwidth plans that meet one of the filter conditions are returned.
    

false

ResourceGroupId

string

No

The ID of the resource group.

rg-acfnwjeo4tv\*\*\*\*

Filter

array

No

The filter configurations.

object

No

Key

string

No

The filter conditions. You can use filter conditions to filter the bandwidth plans that you want to query. The following filter conditions are supported:

-   **CenId**: CEN instance ID
    
-   **Status**: bandwidth plan status. Valid values:
    
    -   **Idle**: not associated with a CEN instance.
        
    -   **InUse**: associated with a CEN instance.
        
-   **CenBandwidthPackageId**: bandwidth plan ID
    
-   **Name**: bandwidth plan name You can specify one or more filter conditions. The maximum value of **N** is **5**.
    

CenId

Value

array

No

Specify a filter value based on the **Key** parameter. You can specify multiple filter values for each **Key**. The logical operator between filter values is **OR**. If one filter value is matched, the filter condition is matched.

Idle

string

No

Specify a filter value based on the **Key** parameter. You can specify multiple filter values for each **Key**. The logical operator between filter values is **OR**. If a bandwidth plan matches one of the filter values, the bandwidth plan is a match.

cen-xxjsjfkffkfkfjkf\*\*\*\*

Tag

array

No

The information about the tags.

You can specify at most 20 tags in each call.

object

No

Key

string

No

The tag keys.

The tag keys cannot be an empty string. The tag keys can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

You can specify at most 20 tag keys.

TagKey

Value

string

No

The tag values.

The tag values can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

The tag value of each tag key must be unique. You can specify at most 20 tag values in each call.

TagValue

## **Response parameters**

**Parameter**

**Type**

**Description**

**Example**

object

PageSize

integer

The number of entries returned per page.

2

RequestId

string

The request ID.

9D7E2400-2755-4AF5-9B73-12565E4F73A0

PageNumber

integer

The number of the returned page.

1

TotalCount

integer

The total number of entries returned.

2

CenBandwidthPackages

object

CenBandwidthPackage

array

The details about the bandwidth plan.

object

ReservationActiveTime

string

The expiration time of the temporary upgrade.

2021-08-30T16:00Z

Status

string

Indicates whether the bandwidth plan is associated with a CEN instance.

-   **Idle**
    
-   **InUse**
    

InUse

CreationTime

string

The time when the bandwidth plan was created. The time is displayed in the ISO8601 standard in the YYYY-MM-DDThh:mmZ format.

2021-02-01T11:14Z

ReservationOrderType

string

The renewal method.

-   **TEMP\_UPGRADE**: temporary upgrade
    
-   **UPGRADE**: upgrade
    

UPGRADE

BandwidthPackageChargeType

string

The billing method of the bandwidth plan.

PREPAY

CenBandwidthPackageId

string

The ID of the bandwidth plan.

cenbwp-4c2zaavbvh5x\*\*\*\*

ReservationInternetChargeType

string

The new billing method.

PREPAY

GeographicRegionAId

string

The ID of the area that you want to query. Valid values:

-   **china**: Chinese mainland.
    
-   **asia-pacific**: Asia Pacific
    
-   **europe**: Europe
    
-   **north-america**: North America
    

china

Bandwidth

integer

The maximum bandwidth of the bandwidth plan.

2

Description

string

The description of the bandwidth plan.

cen

ExpiredTime

string

The time when the bandwidth plan expires.

2021-09-08T16:00Z

ReservationBandwidth

string

The bandwidth value to which the bandwidth plan is restored when the temporary upgrade ends.

10

GeographicSpanId

string

The ID of the connected area.

north-america\_china

GeographicRegionBId

string

The ID of the other area connected by the bandwidth plan. Valid values:

-   **china**: Chinese mainland.
    
-   **asia-pacific**: Asia Pacific
    
-   **europe**: Europe
    
-   **north-america**: North America
    

north-america

ResourceGroupId

string

The ID of the resource group to which the ACL belongs.

rg-aekzoyr5k36\*\*\*\*

IsCrossBorder

boolean

Indicates whether the bandwidth plan supports cross-border communication.

-   **false**
    
-   **true**
    

false

BusinessStatus

string

The status of the bandwidth plan. Valid values:

-   **Normal**: running as expected.
    
-   **FinancialLocked**: locked due to overdue payments.
    
-   **SecurityLocked**: locked due to security reasons
    

Normal

Name

string

The name of the bandwidth plan.

test

HasReservationData

string

Indicates whether renewal data is included.

-   **true**
    
-   **false**
    

**Note**

This parameter returns **true** only when the **IncludeReservationData** parameter is set to **true** and a pending order exists.

false

OrginInterRegionBandwidthLimits

object

OrginInterRegionBandwidthLimit

array

The details about the connected regions.

object

BandwidthLimit

string

The maximum bandwidth value for the inter-region connection.

1

OppositeRegionId

string

The ID of the peer region.

us-west-1

GeographicSpanId

string

The connected regions.

north-america\_china

LocalRegionId

string

The ID of the local region.

cn-hangzhou

Tags

object

Tag

array

The tags of the bandwidth plan.

object

Key

string

The tag key.

TagKey

Value

string

The tag value.

TagValue

CenIds

object

CenId

array

A list of CEN instances that are associated with the bandwidth plan.

string

The ID of the CEN instance that is associated with the bandwidth plan.

cen-xxjsjfkffkfkfjkf\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "PageSize": 2,
  "RequestId": "9D7E2400-2755-4AF5-9B73-12565E4F73A0",
  "PageNumber": 1,
  "TotalCount": 2,
  "CenBandwidthPackages": {
    "CenBandwidthPackage": [
      {
        "ReservationActiveTime": "2021-08-30T16:00Z",
        "Status": "InUse",
        "CreationTime": "2021-02-01T11:14Z",
        "ReservationOrderType": "UPGRADE",
        "BandwidthPackageChargeType": "PREPAY",
        "CenBandwidthPackageId": "cenbwp-4c2zaavbvh5x****",
        "ReservationInternetChargeType": "PREPAY",
        "GeographicRegionAId": "china",
        "Bandwidth": 2,
        "Description": "cen",
        "ExpiredTime": "2021-09-08T16:00Z",
        "ReservationBandwidth": "10",
        "GeographicSpanId": "north-america_china",
        "GeographicRegionBId": "north-america",
        "ResourceGroupId": "rg-aekzoyr5k36****",
        "IsCrossBorder": false,
        "BusinessStatus": "Normal",
        "Name": "test",
        "HasReservationData": "false",
        "OrginInterRegionBandwidthLimits": {
          "OrginInterRegionBandwidthLimit": [
            {
              "BandwidthLimit": "1",
              "OppositeRegionId": "us-west-1",
              "GeographicSpanId": "north-america_china",
              "LocalRegionId": "cn-hangzhou"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "Key": "TagKey",
              "Value": "TagValue"
            }
          ]
        },
        "CenIds": {
          "CenId": [
            "cen-xxjsjfkffkfkfjkf****"
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

IllegalParam.TagValue

The tag values are not valid.

The error message returned because the specified tag value is invalid.

400

IllegalParam.TagKey

The tag keys are not valid.

The error message returned because the specified tag key is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeCenBandwidthPackages#workbench-doc-change-demo) for a complete list.
