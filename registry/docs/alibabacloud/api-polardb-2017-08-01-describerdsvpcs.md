Describes a list of VPCs.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeRdsVpcs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeRdsVpcs)

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

polardb:DescribeRdsVpcs

get

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID. > You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query the available regions.

cn-hangzhou

ZoneId

string

No

The ID of the zone.

cn-hangzhou-k

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Vpcs

object

A list of VPCs.

Vpc

array<object>

The VPC details.

array<object>

The VPC details.

Status

string

The status of the VPC. Valid values:

-   Pending: The VPC is being configured.
    
-   Available: The VPC is available.
    

Available

VpcName

string

The name of the VPC.

fc-webide

VpcId

string

The ID of the VPC.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*

IsDefault

boolean

Indicates whether the VPC is the default VPC.

true

CidrBlock

string

The CIDR block of the VPC.

10.21.0.0/16

RegionNo

string

The region ID.

cn-hangzhou

GmtCreate

string

The time when the VPC was created.

2025-08-28T02:25:41Z

AliUid

string

The ID of the Alibaba Cloud account.

1485293698\*\*\*\*\*\*

VSwitchs

array<object>

The details of the vSwitches in the VPC.

object

The vSwitch details.

Status

string

The status of the vSwitch. **Available** indicates that the vSwitch is available.

Available

VSwitchId

string

The ID of the vSwitch.

vsw-\*\*\*\*\*\*\*\*\*\*

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**: The vSwitch is the default vSwitch.
    
-   **false**: The vSwitch is not the default vSwitch.
    

true

CidrBlock

string

The vSwitch CIDR block.

192.168.7.0/24

GmtCreate

string

The time when the vSwitch was created.

2025-05-12 18:17:25

GmtModified

string

The time when the vSwitch was last modified.

2025-01-07T15:10:32+08:00

IzNo

string

The ID of the zone.

cn-hangzhou-k

VSwitchName

string

The name of the vSwitch.

test

GmtModified

string

The time when the VPC was last modified.

2025-04-30T09:41:14+08:00

Bid

string

The business type of the account. This parameter indicates whether the account is an Alibaba Finance Cloud account, an Alibaba Gov Cloud account, or a public cloud account.

26842

RequestId

string

The request ID.

B45E8D29-EA17-5141-AE09-F7A399760C9E

## Examples

Success response

`JSON` format

```
{
  "Vpcs": {
    "Vpc": [
      {
        "Status": "Available",
        "VpcName": "fc-webide",
        "VpcId": "vpc-*************",
        "IsDefault": true,
        "CidrBlock": "10.21.0.0/16",
        "RegionNo": "cn-hangzhou",
        "GmtCreate": "2025-08-28T02:25:41Z",
        "AliUid": "1485293698******",
        "VSwitchs": [
          {
            "Status": "Available",
            "VSwitchId": "vsw-**********",
            "IsDefault": true,
            "CidrBlock": "192.168.7.0/24",
            "GmtCreate": "2025-05-12 18:17:25",
            "GmtModified": "2025-01-07T15:10:32+08:00",
            "IzNo": "cn-hangzhou-k",
            "VSwitchName": "test"
          }
        ],
        "GmtModified": "2025-04-30T09:41:14+08:00",
        "Bid": "26842"
      }
    ]
  },
  "RequestId": "B45E8D29-EA17-5141-AE09-F7A399760C9E"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeRdsVpcs#workbench-doc-change-demo) for a complete list.
