Queries the details of one or more VPCs.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeVpcs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeVpcs)

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

polardb:DescribeVpcs

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

ZoneId

string

No

The ID of the zone.

**Note**

You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query zones.

cn-hangzhou-i

Product

string

No

The name of the cloud product.

VPN

PageSize

integer

No

The number of entries per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: **30**.

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. Default value: **1**.

3

ResourceGroupId

string

No

The ID of the resource group to which the VPC belongs.

rg-acfmzh544n3j3bi

VpcId

string

No

The ID of the VPC.

**Note**

You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query the details of VPCs.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageNumber

integer

The page number of the returned page. The default value is 1.

2

PageSize

integer

The number of entries returned per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    
    **30**
    

50

RequestId

string

The request ID.

11FDB5A0-84F5-5361-B729-5770B0AEB9D5

TotalCount

integer

The total number of entries.

50

Vpcs

array<object>

A list of VPCs.

array<object>

The details of the VPC.

AliUid

string

The ID of the Alibaba Cloud account.

1868512340232755

Bid

string

Indicates whether the account is an Alibaba Finance Cloud account, an Alibaba Gov Cloud account, or a public cloud account.

26842

CidrBlock

string

The IPv4 CIDR block of the VPC.

57.100.6.59/32

GmtCreate

string

The time when the VPC was created.

2021-04-18T15:02:37Z

GmtModified

string

The time when the VPC was last modified.

2021-04-18T15:02:37Z

IsDefault

boolean

Indicates whether the VPC is the default VPC. Valid values:

-   **true**: The VPC is the default VPC.
    
-   **false**: The VPC is not the default VPC.
    

true

RegionNo

string

The ID of the region to which the VPC belongs.

cn-chengdu-wt97-a01

Status

string

The status of the VPC. Valid values:

-   `Pending`: The VPC is being configured.
    
-   `Available`: The VPC is active.
    

Pending

VSwitchs

array<object>

A list of vSwitches.

object

The details of the vSwitch.

CidrBlock

string

The IPv4 CIDR block of the vSwitch.

47.118.126.0/25

GmtCreate

string

The time when the vSwitch was created.

2021-04-18T15:02:37Z

GmtModified

string

The time when the vSwitch was last modified.

2021-04-18T15:02:37Z

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**: The vSwitch is the default vSwitch.
    
-   **false**: The vSwitch is not the default vSwitch.
    

false

IzNo

string

The zone to which the vSwitch belongs.

cn-shenzhen-f

Status

string

The status of the vSwitch. Valid values:

-   **Pending**: The vSwitch is being configured.
    
-   **Available**: The vSwitch is active.
    

Pending

VSwitchId

string

The ID of the vSwitch.

vsw-uf6fus5py6hbvxqwzwnk8

VSwitchName

string

The name of the vSwitch.

default-sw

VpcId

string

The ID of the VPC.

**Note**

You can call the [DescribeVpcs](/help/en/vpc/api-describevpcs) operation to query the details of VPCs.

vpc-bp16efwqjzyumc23c647v

VpcName

string

The name of the VPC.

vpc-e2e-10341f3

## Examples

Success response

`JSON` format

```
{
  "PageNumber": 2,
  "PageSize": 50,
  "RequestId": "11FDB5A0-84F5-5361-B729-5770B0AEB9D5",
  "TotalCount": 50,
  "Vpcs": [
    {
      "AliUid": "1868512340232755",
      "Bid": "26842",
      "CidrBlock": "57.100.6.59/32",
      "GmtCreate": "2021-04-18T15:02:37Z\n",
      "GmtModified": "2021-04-18T15:02:37Z\n",
      "IsDefault": true,
      "RegionNo": "cn-chengdu-wt97-a01",
      "Status": "Pending",
      "VSwitchs": [
        {
          "CidrBlock": "47.118.126.0/25",
          "GmtCreate": "2021-04-18T15:02:37Z",
          "GmtModified": "2021-04-18T15:02:37Z",
          "IsDefault": false,
          "IzNo": "cn-shenzhen-f",
          "Status": "Pending",
          "VSwitchId": "vsw-uf6fus5py6hbvxqwzwnk8",
          "VSwitchName": "default-sw"
        }
      ],
      "VpcId": "vpc-bp16efwqjzyumc23c647v",
      "VpcName": "vpc-e2e-10341f3"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

PARAMETER\_MUST\_NOT\_NULL

Miss mandatory parameter.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeVpcs#workbench-doc-change-demo) for a complete list.
