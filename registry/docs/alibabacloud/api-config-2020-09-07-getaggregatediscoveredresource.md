Queries the details of a specific resource in an account group.

## Operation description

This topic provides an example on how to query the details of an ECS instance `i-bp12g4xbl4i0brkn****` in the Hangzhou region within the account group `ca-5885626622af0008****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateDiscoveredResource)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateDiscoveredResource)

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

config:GetAggregateDiscoveredResource

get

\*Resource

`acs:config:*:{#accountId}:resource/{#ResourceId}`

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

For more information about how to obtain the resource ID, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/411691).

new-bucket

ResourceType

string

Yes

The resource type.

For more information about how to obtain the resource type, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/411691).

ACS::OSS::Bucket

Region

string

Yes

The region ID of the resource.

For more information about how to obtain the region ID of the resource, see [ListAggregateDiscoveredResources](/help/en/cloud-config/latest/411691).

cn-hangzhou

AggregatorId

string

Yes

The account group ID.

For more information about how to obtain the account group ID, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-5885626622af0008\*\*\*\*

ResourceAccountId

integer

No

Required. The ID of the Alibaba Cloud account to which the resource to be queried belongs in the account group.

100931896542\*\*\*\*

ComplianceOption

integer

No

Specifies whether to query the compliance results of the resource. Valid values:

-   0 (default): does not query the compliance results of the resource.
    
-   1: queries the compliance results of the resource.
    

0

For more information, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

None.

RequestId

string

The request ID.

E4D71ACE-6B0A-46E0-8352-56952378CC7F

DiscoveredResourceDetail

object

The details of the resource.

AvailabilityZone

string

The ID of the zone where the resource resides.

cn-hangzhou-h

ResourceType

string

The resource type.

ACS::OSS::BucketACS::CDN::Domain

Configuration

string

The configuration of the resource.

{\\"AccessControlList\\":{\\"Grant\\":\\"private\\"},\\"ServerSideEncryptionRule\\":{\\"SSEAlgorithm\\":\\"None\\"},\\"Comment\\":\\"\\",\\"CreationDate\\":\\"2021-06-29T10:05:12.000Z\\",\\"Owner\\":{\\"DisplayName\\":\\"100931896542\*\*\*\*\\",\\"ID\\":\\"100931896542\*\*\*\*\\"},\\"StorageClass\\":\\"Standard\\",\\"DataRedundancyType\\":\\"LRS\\",\\"AllowEmptyReferer\\":\\"true\\",\\"Name\\":\\"new-bucket\\",\\"BucketPolicy\\":{\\"LogPrefix\\":\\"\\",\\"LogBucket\\":\\"\\"},\\"ExtranetEndpoint\\":\\"oss-cn-hangzhou.aliyuncs.com\\",\\"IntranetEndpoint\\":\\"oss-cn-hangzhou-internal.aliyuncs.com\\",\\"Location\\":\\"oss-cn-hangzhou\\"}

Region

string

The region ID.

cn-hangzhou

ResourceCreationTime

integer

The timestamp when the resource was created.

1624961112000

Tags

string

The resource tags.

{\\"\\"hc\\"\\":\[\\"\\"value2\\"\\"\]}

AccountId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

100931896542\*\*\*\*

ResourceId

string

The resource ID.

new-bucket

ResourceDeleted

integer

Indicates whether the resource was deleted. Valid values:

-   1: The resource was not deleted.
    
-   0: The resource was deleted.
    

1

ResourceName

string

The resource name.

new-bucket

ResourceStatus

string

The resource status. The value of this parameter varies based on the resource type and may be empty. For example:

-   If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an ECS instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
    
-   If the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is left empty.
    

offline

ComplianceType

string

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule did not apply to your resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    

COMPLIANT

VpcId

string

The ID of the VPC to which the resource belongs, in the format of vpc-t4nhheyvay74fp7n0hxxx. If the resource does not belong to a VPC, an empty string is returned: ""

vpc-t4nhheyvay74fp7n0hxxx

VSwitchId

string

The ID of the vSwitch to which the resource belongs, in the format of vsw-t4n7pokxxxxxxxxxxxxxx. If the resource belongs to multiple vSwitches, the IDs are separated by commas, such as vsw-t4n7pokxxxxxxxxxxxxxx, vsw-t4n7pokxxxxxxxxxxxxxx. If the resource does not belong to any vSwitch, an empty string is returned: ""

vsw-t4n7pokxxxxxxxxxxxxxx

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E4D71ACE-6B0A-46E0-8352-56952378CC7F",
  "DiscoveredResourceDetail": {
    "AvailabilityZone": "cn-hangzhou-h",
    "ResourceType": "ACS::OSS::BucketACS::CDN::Domain",
    "Configuration": "{\\\"AccessControlList\\\":{\\\"Grant\\\":\\\"private\\\"},\\\"ServerSideEncryptionRule\\\":{\\\"SSEAlgorithm\\\":\\\"None\\\"},\\\"Comment\\\":\\\"\\\",\\\"CreationDate\\\":\\\"2021-06-29T10:05:12.000Z\\\",\\\"Owner\\\":{\\\"DisplayName\\\":\\\"100931896542****\\\",\\\"ID\\\":\\\"100931896542****\\\"},\\\"StorageClass\\\":\\\"Standard\\\",\\\"DataRedundancyType\\\":\\\"LRS\\\",\\\"AllowEmptyReferer\\\":\\\"true\\\",\\\"Name\\\":\\\"new-bucket\\\",\\\"BucketPolicy\\\":{\\\"LogPrefix\\\":\\\"\\\",\\\"LogBucket\\\":\\\"\\\"},\\\"ExtranetEndpoint\\\":\\\"oss-cn-hangzhou.aliyuncs.com\\\",\\\"IntranetEndpoint\\\":\\\"oss-cn-hangzhou-internal.aliyuncs.com\\\",\\\"Location\\\":\\\"oss-cn-hangzhou\\\"}",
    "Region": "cn-hangzhou",
    "ResourceCreationTime": 1624961112000,
    "Tags": "{\\\"\\\"hc\\\"\\\":[\\\"\\\"value2\\\"\\\"]}",
    "AccountId": 0,
    "ResourceId": "new-bucket",
    "ResourceDeleted": 1,
    "ResourceName": "new-bucket",
    "ResourceStatus": "offline",
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregateDiscoveredResource#workbench-doc-change-demo) for a complete list.
