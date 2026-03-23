Queries the details of a specific resource.

## Operation description

This topic provides an example of how to query the details of the ECS instance `i-bp12g4xbl4i0brkn****` in the China (Hangzhou) region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetDiscoveredResource)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetDiscoveredResource)

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

config:GetDiscoveredResource

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

ResourceId

string

Yes

The resource ID.

For more information about how to obtain the resource ID, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources-1).

i-bp12g4xbl4i0brkn\*\*\*\*

ResourceType

string

Yes

The resource type.

For more information about how to obtain the resource type, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources-1).

ACS::ECS::Instance

Region

string

Yes

The ID of the region where the resource resides.

For more information about how to obtain the region ID of the resource, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources-1).

cn-hangzhou

ComplianceOption

integer

No

Specifies whether to query the compliance results of the resource. Valid values:

-   0 (default): The compliance results are not queried.
    
-   1: The compliance results are queried.
    

0

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

E4D71ACE-6B0A-46E0-8352-56952378CC7F

DiscoveredResourceDetail

object

The details of the resource.

AvailabilityZone

string

The zone where the resource resides.

cn-hangzhou-h

ResourceType

string

The resource type.

ACS::ECS::Instance

Configuration

string

The complete configuration information of the resource.

{"ResourceGroupId":"","Memory":4096,"InstanceChargeType":"PostPaid","Cpu":2,"OSName":"Windows Server 2022 Datacenter 64-bit (Simplified Chinese)","InstanceNetworkType":"vpc","InnerIpAddress":{"IpAddress":\[\]},"ExpiredTime":"2099-12-31T15:59Z","ImageId":"win2022\_21H2\_x64\_dtc\_zh-cn\_40G\_alibase\_20240110.vhd","EipAddress":{"AllocationId":"","IpAddress":"","InternetChargeType":""},"ImageOptions":{},"VlanId":"","HostName":"iZl4i0brknq\*\*\*\*","Status":"Stopped","HibernationOptions":{"Configured":false},"MetadataOptions":{"HttpTokens":"","HttpEndpoint":""},"InstanceId":"i-bp12g4xbl4i0brkn\*\*\*\*","StoppedMode":"KeepCharging","CpuOptions":{"ThreadsPerCore":2,"Numa":"ON","CoreCount":1},"StartTime":"2024-02-29T07:08Z","DeletionProtection":false,"VpcAttributes":{"PrivateIpAddress":{"IpAddress":\["172.16.XX.XX"\]},"VpcId":"vpc-bp1wjaw8t272wwmkg\*\*\*\*","VSwitchId":"vsw-bp103i8xzww5132ul\*\*\*\*","NatIpAddress":""},"SecurityGroupIds":{"SecurityGroupId":\["sg-bp1h96fz9fagaegp\*\*\*\*"\]},"InternetChargeType":"PayByTraffic","InstanceName":"test123","DeploymentSetId":"","InternetMaxBandwidthOut":5,"SerialNumber":"6764f567-28fb-4a39-bfc3-48404995\*\*\*\*","OSType":"windows","CreationTime":"2024-02-29T07:08Z","AutoReleaseTime":"","Description":"","InstanceTypeFamily":"ecs.c7","DedicatedInstanceAttribute":{"Tenancy":"","Affinity":""},"PublicIpAddress":{"IpAddress":\["47.98.XX.XX"\]},"GPUSpec":"","NetworkInterfaces":{"NetworkInterface":\[{"Type":"Primary","PrimaryIpAddress":"172.16.XX.XX","MacAddress":"00:16:3e:0c:\*\*:\*\*","NetworkInterfaceId":"eni-bp19uj35v8won3x9\*\*\*\*","PrivateIpSets":{"PrivateIpSet":\[{"PrivateIpAddress":"172.16.XX.XX","Primary":true}\]}}\]},"SpotPriceLimit":0.0,"SaleCycle":"","DeviceAvailable":true,"InstanceType":"ecs.c7.large","OSNameEn":"Windows Server 2022 DataCenter Edition 64bit Chinese Edition","SpotStrategy":"NoSpot","IoOptimized":true,"ZoneId":"cn-hangzhou-b","ClusterId":"","EcsCapacityReservationAttr":{"CapacityReservationPreference":"","CapacityReservationId":""},"DedicatedHostAttribute":{"DedicatedHostId":"","DedicatedHostName":"","DedicatedHostClusterId":""},"GPUAmount":0,"OperationLocks":{"LockReason":\[\]},"InternetMaxBandwidthIn":2000,"Recyclable":false,"RegionId":"cn-hangzhou","CreditSpecification":""}

Region

string

The region ID.

cn-hangzhou

ResourceCreationTime

integer

The timestamp when the resource was created.

1709190480000

Tags

string

The tags of the resource.

{"key":"value"}

AccountId

integer

The ID of the Alibaba Cloud account that owns the resource.

120886317861\*\*\*\*

ResourceId

string

The resource ID.

i-bp12g4xbl4i0brkn\*\*\*\*

ResourceDeleted

integer

The deletion status of the resource. Valid values:

-   1: The resource is not deleted.
    
-   0: The resource is deleted.
    

1

ResourceName

string

The resource name.

test123

ResourceStatus

string

The status of the resource. The status of a resource is defined by the corresponding Alibaba Cloud service. This parameter can be empty. Examples:

-   If the resource type is ACS::ECS::Instance, the resource is stateful. In this case, the value of this parameter is Running or Stopped.
    
-   If the resource type is ACS::OSS::Bucket, the resource is stateless. In this case, this parameter is empty.
    

Stopped

ComplianceType

string

The compliance type.

COMPLIANT

VpcId

string

The ID of the VPC to which the resource belongs. The ID is in the vpc-t4nhheyvay74fp7n0hxxx format. If the resource does not belong to a VPC, an empty string "" is returned.

vpc-t4nhheyvay74fp7n0hxxx

VSwitchId

string

The ID of the vSwitch to which the resource belongs. The ID is in the vsw-t4n7pokxxxxxxxxxxxxxx format. If multiple vSwitch IDs are returned, they are separated by commas (,). Example: vsw-t4n7pokxxxxxxxxxxxxxx,vsw-t4n7pokxxxxxxxxxxxxxx. If the resource does not belong to a vSwitch, an empty string "" is returned.

vsw-t4n7pokxxxxxxxxxxxxxx

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E4D71ACE-6B0A-46E0-8352-56952378CC7F",
  "DiscoveredResourceDetail": {
    "AvailabilityZone": "cn-hangzhou-h",
    "ResourceType": "ACS::ECS::Instance",
    "Configuration": "{\"ResourceGroupId\":\"\",\"Memory\":4096,\"InstanceChargeType\":\"PostPaid\",\"Cpu\":2,\"OSName\":\"Windows Server 2022 Datacenter 64-bit (Simplified Chinese)\",\"InstanceNetworkType\":\"vpc\",\"InnerIpAddress\":{\"IpAddress\":[]},\"ExpiredTime\":\"2099-12-31T15:59Z\",\"ImageId\":\"win2022_21H2_x64_dtc_zh-cn_40G_alibase_20240110.vhd\",\"EipAddress\":{\"AllocationId\":\"\",\"IpAddress\":\"\",\"InternetChargeType\":\"\"},\"ImageOptions\":{},\"VlanId\":\"\",\"HostName\":\"iZl4i0brknq****\",\"Status\":\"Stopped\",\"HibernationOptions\":{\"Configured\":false},\"MetadataOptions\":{\"HttpTokens\":\"\",\"HttpEndpoint\":\"\"},\"InstanceId\":\"i-bp12g4xbl4i0brkn****\",\"StoppedMode\":\"KeepCharging\",\"CpuOptions\":{\"ThreadsPerCore\":2,\"Numa\":\"ON\",\"CoreCount\":1},\"StartTime\":\"2024-02-29T07:08Z\",\"DeletionProtection\":false,\"VpcAttributes\":{\"PrivateIpAddress\":{\"IpAddress\":[\"172.16.XX.XX\"]},\"VpcId\":\"vpc-bp1wjaw8t272wwmkg****\",\"VSwitchId\":\"vsw-bp103i8xzww5132ul****\",\"NatIpAddress\":\"\"},\"SecurityGroupIds\":{\"SecurityGroupId\":[\"sg-bp1h96fz9fagaegp****\"]},\"InternetChargeType\":\"PayByTraffic\",\"InstanceName\":\"test123\",\"DeploymentSetId\":\"\",\"InternetMaxBandwidthOut\":5,\"SerialNumber\":\"6764f567-28fb-4a39-bfc3-48404995****\",\"OSType\":\"windows\",\"CreationTime\":\"2024-02-29T07:08Z\",\"AutoReleaseTime\":\"\",\"Description\":\"\",\"InstanceTypeFamily\":\"ecs.c7\",\"DedicatedInstanceAttribute\":{\"Tenancy\":\"\",\"Affinity\":\"\"},\"PublicIpAddress\":{\"IpAddress\":[\"47.98.XX.XX\"]},\"GPUSpec\":\"\",\"NetworkInterfaces\":{\"NetworkInterface\":[{\"Type\":\"Primary\",\"PrimaryIpAddress\":\"172.16.XX.XX\",\"MacAddress\":\"00:16:3e:0c:**:**\",\"NetworkInterfaceId\":\"eni-bp19uj35v8won3x9****\",\"PrivateIpSets\":{\"PrivateIpSet\":[{\"PrivateIpAddress\":\"172.16.XX.XX\",\"Primary\":true}]}}]},\"SpotPriceLimit\":0.0,\"SaleCycle\":\"\",\"DeviceAvailable\":true,\"InstanceType\":\"ecs.c7.large\",\"OSNameEn\":\"Windows Server  2022 DataCenter Edition 64bit Chinese Edition\",\"SpotStrategy\":\"NoSpot\",\"IoOptimized\":true,\"ZoneId\":\"cn-hangzhou-b\",\"ClusterId\":\"\",\"EcsCapacityReservationAttr\":{\"CapacityReservationPreference\":\"\",\"CapacityReservationId\":\"\"},\"DedicatedHostAttribute\":{\"DedicatedHostId\":\"\",\"DedicatedHostName\":\"\",\"DedicatedHostClusterId\":\"\"},\"GPUAmount\":0,\"OperationLocks\":{\"LockReason\":[]},\"InternetMaxBandwidthIn\":2000,\"Recyclable\":false,\"RegionId\":\"cn-hangzhou\",\"CreditSpecification\":\"\"}",
    "Region": "cn-hangzhou",
    "ResourceCreationTime": 1709190480000,
    "Tags": "{\"key\":\"value\"}",
    "AccountId": 0,
    "ResourceId": "i-bp12g4xbl4i0brkn****",
    "ResourceDeleted": 1,
    "ResourceName": "test123",
    "ResourceStatus": "Stopped",
    "ComplianceType": "COMPLIANT",
    "VpcId": "vpc-t4nhheyvay74fp7n0hxxx",
    "VSwitchId": "vsw-t4n7pokxxxxxxxxxxxxxx"
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

400

MemberNotBelongToMaster

The specified member does not belong to your organization.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetDiscoveredResource#workbench-doc-change-demo) for a complete list.
