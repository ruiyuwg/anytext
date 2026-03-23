Queries a list of vSwitches.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeRdsVSwitchs)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeRdsVSwitchs)

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

polardb:DescribeRdsVSwitchs

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

RegionId

string

Yes

The region ID. Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view available regions.

cn-hangzhou

VpcId

string

No

The ID of the virtual private cloud (VPC) where the endpoint is located.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*

ZoneId

string

No

The zone ID.

cn-hangzhou-i

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A0450B18-BBD4-5DF9-8E71-610F1A921CDE

VSwitches

object

The vSwitch information.

VSwitch

array<object>

The vSwitch information.

object

The vSwitch information.

Status

string

The status of the vSwitch. Valid values: _**Pending**_\*: The vSwitch is being configured.\* **Available**: The vSwitch is available.

Available

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**: The vSwitch is the default vSwitch.
    
-   **false**: The vSwitch is not the default vSwitch.
    

false

VSwitchId

string

The vSwitch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

CidrBlock

string

The CIDR block of the vSwitch.

192.168.8.0/24

RegionNo

string

The ID of the region to which the vSwitch belongs.

cn-hangzhou

GmtCreate

string

The time when the vSwitch was created.

2024-12-23 10:15:38

AliUid

string

The user ID.

175358919\*\*\*\*

GmtModified

string

The time when the vSwitch was last modified.

2025-04-30T09:41:14+08:00

Bid

string

Identifies the cloud service type, such as Alibaba Finance Cloud, Alibaba Gov Cloud, or public cloud.

26842

IzNo

string

The ID of the zone to which the vSwitch belongs.

ch-hangzhou-g

VSwitchName

string

The name of the vSwitch.

sw01

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A0450B18-BBD4-5DF9-8E71-610F1A921CDE",
  "VSwitches": {
    "VSwitch": [
      {
        "Status": "Available",
        "IsDefault": false,
        "VSwitchId": "vsw-**************",
        "CidrBlock": "192.168.8.0/24",
        "RegionNo": "cn-hangzhou",
        "GmtCreate": "2024-12-23 10:15:38",
        "AliUid": "175358919****",
        "GmtModified": "2025-04-30T09:41:14+08:00",
        "Bid": "26842",
        "IzNo": "ch-hangzhou-g",
        "VSwitchName": "sw01"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeRdsVSwitchs#workbench-doc-change-demo) for a complete list.
