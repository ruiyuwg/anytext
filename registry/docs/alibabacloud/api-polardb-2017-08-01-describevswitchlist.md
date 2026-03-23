Retrieves information about vSwitches.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeVSwitchList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeVSwitchList)

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

polardb:DescribeVSwitchList

none

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

The ID of the region where the vSwitch resides.

**Note**

Call [DescribeRegions](/help/en/anti-ddos/api-instances-describeregions) to query the IDs of all regions that support vSwitches.

cn-hangzhou

VpcId

string

No

The ID of the virtual private cloud (VPC).

**Note**

Call [DescribeVpcs](/help/en/vpc/api-describevpcs) to view the details of the VPC.

vpc-25cdvfeq58pl\*\*\*\*

VSwitchIds

array

No

A list of vSwitches in the VPC.

string

No

The ID of the vSwitch.

vsw-uf6quheh6ok8nbtj4\*\*\*\*

ZoneId

string

No

The ID of the zone where the vSwitch resides.

cn-hangzhou-g

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0. It cannot exceed the maximum value of the Integer data type.

1

PageSize

integer

No

The number of entries per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: 30.

30

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

6A2EE5B4-CC9F-46E1-A747-E43BC9\*\*\*\*\*\*

TotalCount

integer

The total number of entries.

1

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page. Valid values:

-   **30**
    
-   **50**
    
-   **100**
    

Default value: 30.

30

VSwitchs

array<object>

A list of vSwitches.

object

The details of the vSwitch.

CidrBlock

string

The vSwitch CIDR block.

172.16.0.0/24

Description

string

The description of the vSwitch.

vSwitchDescription

IsDefault

boolean

Indicates whether the vSwitch is the default vSwitch. Valid values:

-   **true**: The vSwitch is the default vSwitch.
    
-   **false**: The vSwitch is not the default vSwitch.
    

true

IzNo

string

The ID of the zone where the vSwitch resides.

cn-hangzhou-b

Status

string

The status of the vSwitch. Valid values:

-   **Pending**: The vSwitch is being configured.
    
-   **Available**: The vSwitch is available.
    

Available

VSwitchId

string

The ID of the vSwitch.

vsw-25bcdxs7pv1\*\*\*\*

VSwitchName

string

The name of the vSwitch.

vSwitch

AvailableIpAddressCount

integer

The number of available IP addresses in the vSwitch.

1

VpcId

string

The ID of the VPC.

vpc-bp1vbkkyt7apvy4j\*\*\*\*\*

ShareType

string

The sharing type.

Public

ResourceGroupId

string

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

OwnerId

string

The ID of the Alibaba Cloud account that owns the resource.

177563751276\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6A2EE5B4-CC9F-46E1-A747-E43BC9******",
  "TotalCount": 1,
  "PageNumber": 1,
  "PageSize": 30,
  "VSwitchs": [
    {
      "CidrBlock": "172.16.0.0/24",
      "Description": "vSwitchDescription\t\n",
      "IsDefault": true,
      "IzNo": "cn-hangzhou-b\t\n",
      "Status": "Available",
      "VSwitchId": "vsw-25bcdxs7pv1****\t\n",
      "VSwitchName": "vSwitch",
      "AvailableIpAddressCount": 1,
      "VpcId": "vpc-bp1vbkkyt7apvy4j*****",
      "ShareType": "Public",
      "ResourceGroupId": "rg-************",
      "OwnerId": "177563751276****"
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

InvalidVSwitchId.NotFound

Specified virtual switch is not found in specified VPC.

400

IncorrecttVpcId

The specified parameter VPCId is not valid.

400

InvalidIzNo.NotSupported

Specified VPC zone is not supported.

400

MissingParameter.RegionId

The parameter RegionId is mandatory.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeVSwitchList#workbench-doc-change-demo) for a complete list.
