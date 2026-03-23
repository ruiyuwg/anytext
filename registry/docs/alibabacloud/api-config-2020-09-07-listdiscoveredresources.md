Queries a list of resources that are aggregated across regions in the current Alibaba Cloud account.

## Operation description

### Limits

Cloud Config supports only specific Alibaba Cloud services and resource types. The returned resource list includes only these supported resources. For more information about supported services and resource types, see [Supported resource types and resource relationships](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config).

### Usage notes

This topic provides an example of how to query the resources in your account. The sample response shows that eight resources are returned.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListDiscoveredResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListDiscoveredResources)

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

config:ListDiscoveredResources

list

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

No

The resource ID.

eni-hp31cqoba96jagtz\*\*\*\*

ResourceName

string

No

The resource name.

test-resource-name

ResourceDeleted

integer

No

The status of the resource. Valid values:

-   0: The resource is deleted. If you delete a resource in the corresponding Alibaba Cloud service, Cloud Config displays the resource as **Deleted**.
    
-   1 (Default): The resource is active. If a resource is managed, Cloud Config displays the resource as **Active**.
    

1

MaxResults

integer

Yes

The maximum number of entries to return on each page. Valid values: 1 to 100.

10

ResourceTypes

string

No

The resource type. Separate multiple resource types with commas (,).

ACS::ECS::NetworkInterface

Regions

string

No

The ID of the region where the resource resides. Separate multiple region IDs with commas (,).

cn-hangzhou

NextToken

string

No

A pagination token. If the response is truncated, use this token in a subsequent request to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

StartUpdateTimestamp

integer

No

The start of the time range to query resources, specified as a UNIX timestamp in milliseconds. Note:

-   The value cannot be later than EndUpdateTimestamp.
    
-   The time interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
    
-   Specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both blank.
    

1722441600000

EndUpdateTimestamp

integer

No

The end of the time range to query resources, specified as a UNIX timestamp in milliseconds. Note:

-   The value cannot be earlier than StartUpdateTimestamp.
    
-   The time interval between StartUpdateTimestamp and EndUpdateTimestamp cannot exceed 30 days.
    
-   Specify both StartUpdateTimestamp and EndUpdateTimestamp, or leave both blank.
    

1724947200000

ExcludeResourceTypes

string

No

The resource types to exclude. Separate multiple resource types with commas (,). This parameter takes precedence over the ResourceTypes parameter.

ACS::ECS::Instance,ACS::ECS::NetworkInterface

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

No data is returned.

DiscoveredResourceProfiles

object

The list of resources.

DiscoveredResourceProfileList

array<object>

The details of the resources.

object

None.

AccountId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

161259599160\*\*\*\*

AvailabilityZone

string

The availability zone of the resource.

cn-hangzhou-h

Region

string

The region ID.

cn-hangzhou

ResourceCreationTime

integer

The time when the resource was created. This is a UNIX timestamp in milliseconds.

1618675206000

ResourceDeleted

integer

The status of the resource. Valid values:

-   0: Deleted.
    
-   1: Active.
    

1

ResourceId

string

The resource ID.

eni-hp31cqoba96jagtz\*\*\*\*

ResourceName

string

The resource name.

Cloud Firewall

ResourceStatus

string

The status of the resource. The status is defined by the corresponding Alibaba Cloud service. This parameter can be empty. For example:

-   If the resource type is ACS::ECS::Instance, the resource is stateful. The value can be Running or Stopped.
    
-   If the resource type is ACS::OSS::Bucket, the resource is stateless. The value is empty.
    

InUse

ResourceType

string

The resource type.

ACS::ECS::NetworkInterface

Tags

string

The tags of the resource.

{\\"key1\\":\[\\"value2\\"\]}

UpdateTime

integer

The time when the resource was last updated. This is a UNIX timestamp in milliseconds.

1722441600000

Version

integer

The version of the resource change.

1

VpcId

string

The ID of the virtual private cloud (VPC) to which the resource belongs. An empty string ("") is returned if the resource does not belong to a VPC.

vpc-t4nhheyvay74fp7n0hxxx

VSwitchId

string

The ID of the vSwitch to which the resource belongs. Multiple vSwitch IDs are separated by commas (,). An empty string ("") is returned if the resource does not belong to a vSwitch.

vsw-t4n7pokxxxxxxxxxxxxxx

ResourceGroupId

string

The ID of the resource group to which the resource belongs. Example: rg-acfmvoh45rhxxxx

rg-acfmvoh45rhxxxx

MaxResults

integer

The maximum number of entries returned on each page.

10

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

TotalCount

integer

The total number of resources.

8

RequestId

string

The request ID.

C7817373-78CB-4F9A-8AFA-E7A88E9D64A2

## Examples

Success response

`JSON` format

```
{
  "DiscoveredResourceProfiles": {
    "DiscoveredResourceProfileList": [
      {
        "AccountId": 0,
        "AvailabilityZone": "cn-hangzhou-h",
        "Region": "cn-hangzhou",
        "ResourceCreationTime": 1618675206000,
        "ResourceDeleted": 1,
        "ResourceId": "eni-hp31cqoba96jagtz****",
        "ResourceName": "Cloud Firewall",
        "ResourceStatus": "InUse",
        "ResourceType": "ACS::ECS::NetworkInterface",
        "Tags": "{\\\"key1\\\":[\\\"value2\\\"]}",
        "UpdateTime": 1722441600000,
        "Version": 1,
        "VpcId": "vpc-t4nhheyvay74fp7n0hxxx",
        "VSwitchId": "vsw-t4n7pokxxxxxxxxxxxxxx",
        "ResourceGroupId": "rg-acfmvoh45rhxxxx"
      }
    ],
    "MaxResults": 10,
    "NextToken": "IWBjqMYSy0is7zSMGu16****",
    "TotalCount": 8
  },
  "RequestId": "C7817373-78CB-4F9A-8AFA-E7A88E9D64A2"
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListDiscoveredResources#workbench-doc-change-demo) for a complete list.
