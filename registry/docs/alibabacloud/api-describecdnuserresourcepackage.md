You can call the DescribeCdnUserResourcePackage operation to query information about your current resource plans for CDN.

## Operation description

**Note**

The call frequency is limited to 30 calls per second per user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnUserResourcePackage)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnUserResourcePackage)

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

cdn:DescribeCdnUserResourcePackage

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

Status

string

No

The status of the resource plan. The default value is valid. Valid values:

-   **valid**: Active.
    
-   **closed**: Inactive.
    
-   **exhaust**: Used up.
    

valid

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

84839536-2B7E-457D-9D8C-82E6C7D4E1A3

ResourcePackageInfos

object

ResourcePackageInfo

array<object>

An array of ResourcePackageInfo objects.

object

EndTime

string

The expiration time.

2018-07-01T08:00:00Z

Status

string

The status of the resource plan. Valid values:

-   **valid**: Active.
    
-   **closed**: Inactive.
    
-   **exhaust**: Used up.
    

valid

DisplayName

string

The name of the resource plan.

Data Transfer Plan in Asia Pacific 1

StartTime

string

The effective time.

2017-12-05T19:10:58Z

CommodityCode

string

The commodity code of the resource plan.

cdnflowbag

InstanceId

string

The instance ID.

FP-ilttxc23a

TemplateName

string

The template name.

FPT\_cdn\_bag\_intl\_deadlineAcc\_1569491944

CurrCapacity

string

The remaining capacity of the instance.

-   For data transfer plans, the unit is Byte.
    
-   For request plans, the unit is requests.
    

53661095687

InitCapacity

string

The total capacity of the resource plan.

-   For data transfer plans, the unit is Byte.
    
-   For request plans, the unit is requests.
    

107374182400

Region

string

The region.

CN

CurrCapacityShowValue

string

The displayed remaining capacity of the instance.

49.975789

CurrCapacityShowUnit

string

The unit of the displayed remaining capacity.

GB

CurrCapacityBaseUnit

string

The base unit of the remaining capacity.

Byte

InitCapacityShowValue

string

The displayed total capacity of the resource plan.

100.000000

InitCapacityShowUnit

string

The unit of the displayed total capacity.

GB

InitCapacityBaseUnit

string

The unit of the initial capacity of the resource plan.

Byte

## Examples

Success response

`JSON` format

```
{
  "RequestId": "84839536-2B7E-457D-9D8C-82E6C7D4E1A3",
  "ResourcePackageInfos": {
    "ResourcePackageInfo": [
      {
        "EndTime": "2018-07-01T08:00:00Z",
        "Status": "valid",
        "DisplayName": "Data Transfer Plan in Asia Pacific 1",
        "StartTime": "2017-12-05T19:10:58Z",
        "CommodityCode": "cdnflowbag",
        "InstanceId": "FP-ilttxc23a",
        "TemplateName": "FPT_cdn_bag_intl_deadlineAcc_1569491944",
        "CurrCapacity": "53661095687",
        "InitCapacity": "107374182400",
        "Region": "CN",
        "CurrCapacityShowValue": "49.975789",
        "CurrCapacityShowUnit": "GB",
        "CurrCapacityBaseUnit": "Byte",
        "InitCapacityShowValue": "100.000000",
        "InitCapacityShowUnit": "GB",
        "InitCapacityBaseUnit": "Byte"
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

403

CdnServiceNotFound

Your account does not open CDN service yet.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnUserResourcePackage#workbench-doc-change-demo) for a complete list.
