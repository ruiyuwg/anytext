Queries the configurations of a resource within the management account or a member of a resource directory.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeZones)

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

resourcecenter:GetMultiAccountResourceConfiguration

get

All resources

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AccountId

string

Yes

The ID of the management account or member.

1619302\*\*\*\*

ResourceRegionId

string

Yes

The ID of the region where the resource resides.

cn-shanghai

ResourceType

string

Yes

The resource type.

ACS::VPC::RouteTable

ResourceId

string

Yes

The resource ID.

m-eb3hji\*\*\*\*

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

AccountId

string

The ID of the management account or member.

1619302\*\*\*\*

CreateTime

string

The time when the resource was created.

2023-02-14T03:12:11Z

ExpireTime

string

The time when the resource expires.

2023-09-18T07:04:21Z

IpAddressAttributes

array

The properties of the IP addresses.

object

The properties of the IP address.

Version

string

The version of the IP address.

Ipv4

NetworkType

string

The network type. Valid values:

-   **Public**: Internet
    
-   **Private**: internal network
    

Public

IpAddress

string

The IP address.

172.27.199.42

IpAddresses

array

The IP addresses.

**Note**

Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.

string

The IP address.

**Note**

Whether this parameter is returned is determined by the Alibaba Cloud service to which the resource belongs.

\['192.168.1.2'\]

RegionId

string

The ID of the region where the resource resides.

cn-shanghai

RequestId

string

The request ID.

B2DCC08B-C12A-5705-879C-5A1450016156

ResourceGroupId

string

The ID of your Alibaba Cloud resource group.

rg-acfmzy6d\*\*\*\*

ResourceId

string

The resource ID.

m-eb3hji\*\*\*\*

ResourceName

string

The resource name.

test\_resource

ResourceType

string

The resource type.

ACS::VPC::RouteTable

Tags

array

The tags.

object

The tag.

Value

string

The tag value.

tag-value

Key

string

The tag key.

tag-key

ZoneId

string

The zone ID.

cn-shanghai-a

Configuration

object

The configurations of the resource.

any

The configurations of the resource.

{\\"uid\\":\\"140874204639\*\*\*\*\\",\\"groupId\\":\\"3zLxraq7qE9dRakjoQYI00\*\*\*\*\\"}

## Examples

Success response

`JSON` format

```
{
  "AccountId": "1619302****",
  "CreateTime": "2023-02-14T03:12:11Z",
  "ExpireTime": "2023-09-18T07:04:21Z",
  "IpAddressAttributes": [
    {
      "Version": "Ipv4",
      "NetworkType": "Public",
      "IpAddress": "172.27.199.42"
    }
  ],
  "IpAddresses": [
    "['192.168.1.2']"
  ],
  "RegionId": "cn-shanghai",
  "RequestId": "B2DCC08B-C12A-5705-879C-5A1450016156",
  "ResourceGroupId": "rg-acfmzy6d****",
  "ResourceId": "m-eb3hji****",
  "ResourceName": "test_resource",
  "ResourceType": "ACS::VPC::RouteTable",
  "Tags": [
    {
      "Value": "tag-value",
      "Key": "tag-key"
    }
  ],
  "ZoneId": "cn-shanghai-a",
  "Configuration": {
    "key": "{\\\"uid\\\":\\\"140874204639****\\\",\\\"groupId\\\":\\\"3zLxraq7qE9dRakjoQYI00****\\\"}"
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

400

MultiAccountServiceNotEnabled

Multi account ResourceCenter service is not enabled.

403

NoPermission.AccountScope

The operator is not permitted for this account scope.

You do not have the required permissions to manage accounts within this resource directory.

404

NotExists.Resource

The specified resource does not exist.

The specified resource does not exist.

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

409

InvalidParameter.AccountId

The specified parameter AccountId is not valid.

409

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.aliyun.com/document/Ecs/2014-05-26/RunInstances?updateTime=2025-01-17#workbench-doc-change-demo) for a complete list.
