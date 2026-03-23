Describes the details of one or more shared or dedicated instances in a region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/CloudAPI/2016-07-14/DescribeInstances)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/CloudAPI/2016-07-14/DescribeInstances)

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

apigateway:DescribeInstances

get

\*Instance

`acs:apigateway:{#regionId}:{#accountId}:instance/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

No

The instance ID. If you do not specify this parameter, all instances are queried.

api-shared-vpc-001

Language

string

No

The language of the response. The descriptions of system policies are returned in this language.

-   en: English.
    
-   zh: Chinese.
    
-   ja: Japanese.
    

zh

InstanceType

string

No

EnableTagAuthorization

boolean

No

Indicates whether to enable tag-based authorization.

false

Tag

array<object>

No

The tags that are attached to the instance.

object

No

The tags that are attached to the instance.

Key

string

No

The tag key.

key1

Value

string

No

The tag value.

value

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageNumber

integer

The current page number.

1

RequestId

string

The request ID.

CEB6EC62-B6C7-5082-A45A-45A204724AC2

PageSize

integer

The number of entries per page.

10

TotalCount

integer

The total number of entries.

1

Instances

object

InstanceAttribute

array<object>

The details of the instances.

array<object>

The details of the instances.

Status

string

The instance status.

RUNNING

VpcSlbIntranetEnable

boolean

Indicates whether the internal-facing SLB for the VPC is enabled.

true

ClassicEgressAddress

string

The egress IP address of the classic network.

10.0.0.1

ZoneLocalName

string

The name of the zone.

多可用区 2

UserVpcId

string

The ID of the user's VPC.

vpc-t\*\*\*hx\*\*\*\*yu9\*\*\*\*t0g4

VpcIntranetEnable

boolean

Indicates whether the internal-facing VPC is enabled.

true

VpcOwnerId

integer

The ID of the Alibaba Cloud account to which the VPC belongs.

1408453217640291\*\*\*\*

InstanceId

string

The instance ID.

api-shared-vpc-020

InstanceRpsLimit

integer

The records per second (RPS) limit of the instance.

500

InstanceType

string

The type of the instance. Valid values:

-   VPC\_SHARED: shared instance (VPC)
    
-   VPC\_DEDICATED: dedicated instance (VPC)
    

VPC\_SHARED

RegionId

string

The ID of the region where the instance resides.

cn-beijing

InstanceSpec

string

The instance specification.

api.s1.small

InstanceChargeType

string

The billing method of the instance. Valid values:

-   PrePaid: subscription.
    
-   PayAsYouGo: pay-as-you-go.
    

PrePaid

HttpsPolicies

string

The HTTPS security policy.

HTTPS2\_TLS1\_2

VpcEgressAddress

string

The egress CIDR block of the internal-facing VPC.

100.104.254.0/26

NewVpcEgressAddress

string

The new egress CIDR block of the internal-facing VPC.

100.104.253.0/26

EgressIpv6Enable

boolean

Indicates whether IPv6 egress is enabled.

true

ExpiredTime

string

The expiration time of the instance.

1659801600000

InstanceName

string

The instance name.

test

ZoneId

string

The zone ID.

cn-hangzhou-MAZ5(g,h)

SupportIpv6

boolean

Indicates whether IPv6 is supported.

true

InternetEgressAddress

string

The public egress IP address.

47.241.89.244

CreatedTime

string

The time when the instance was created.

2021-10-22 15:36:53.0

InstanceSpecAttributes

object

SpecAttribute

array<object>

The details of the instance specifications.

object

The details of the instance specifications.

Value

string

The value of the specification.

2500

LocalName

string

The name of the variable.

最大每秒请求数

UserVswitchId

string

The ID of the user's vSwitch.

vsw-t4\*\*\*eh\*\*\*\*d7q\*\*\*\*i2f

AclName

string

The name of the access control list (ACL).

test

AclType

string

The type of the ACL. Valid values:

-   black: blacklist
    
-   white: whitelist
    

white

AclStatus

string

Indicates whether the ACL is enabled. Valid values:

-   **on**: enabled.
    
-   **off**: disabled.
    

on

AclId

string

The ID of the ACL.

acl-uf6f9zfxfxtp5j9ng3yv4

IntranetSegments

string

The internal network CIDR blocks from which the API Gateway instance can be accessed.

\[\\"172.36.0.0/16\\",\\"172.31.16.0/20\\"\]

IPV6AclName

string

The name of the IPv6 ACL.

testIPV6

IPV6AclId

string

The ID of the IPv6 ACL.

acl-124resFfs235

IPV6AclType

string

The type of the IPv6 ACL. Valid values:

-   black: blacklist
    
-   white: whitelist
    

black

IPV6AclStatus

string

Indicates whether the IPv6 ACL is enabled. Valid values:

-   **on**: enabled.
    
-   **off**: disabled.
    

off

DedicatedInstanceType

string

The type of the dedicated instance. Valid values:

-   vpc\_connect: VPC-connected dedicated instance
    
-   normal: classic network-based dedicated instance
    

vpc\_connect

InstanceCidrBlock

string

The CIDR block where the dedicated instance resides.

-   172.16.0.0/12
    
-   192.168.0.0/16
    

192.168.0.0/16

ConnectVpcId

string

The ID of the user VPC that is connected to the VPC-connected dedicated instance.

vpc-m5eo7khlb4h4f8y9egsdg

NetworkInterfaceAttributes

object

NetworkInterfaceAttribute

array<object>

The network interface details of the user VPC connected to the dedicated instance.

object

The network interface details of the user VPC connected to the dedicated instance.

VswitchId

string

The ID of the vSwitch.

vsw-2zeqals6rbj51bhjn8b89

SecurityGroupId

string

The ID of the security group. Services in the same security group can access each other.

sg-2zeehz13zcyj1kfk3o85

CidrBlock

string

The CIDR block of the vSwitch.

192.168.17.0/24

ZoneId

string

The zone ID.

cn-shenzhen-d

InstanceClusterId

string

The ID of the dedicated instance cluster that manages this dedicated instance.

apigateway-cluster-sh-1523cafbgffd

MaintainStartTime

string

The start time of the maintenance window. The time is in the HH:mmZ format and is in UTC.

22:00Z

MaintainEndTime

string

The end time of the maintenance window. The time is in the HH:mmZ format and is in UTC.

01:00Z

ConnectCidrBlocks

string

The internal CIDR blocks of the user VPC that can be accessed by the VPC-connected dedicated instance.

\[\\"172.16.0.0/24\\",\\"172.16.1.0/24\\"\]

PrivateDnsList

object

PrivateDns

array

A list of internal domain names.

string

The internal domain name.

www.private.com

Tags

object

TagInfo

array<object>

A list of tags.

object

Key

string

The tag key.

tag3

Value

string

The tag value.

50699\_0

## Examples

Success response

`JSON` format

```
{
  "PageNumber": 1,
  "RequestId": "CEB6EC62-B6C7-5082-A45A-45A204724AC2",
  "PageSize": 10,
  "TotalCount": 1,
  "Instances": {
    "InstanceAttribute": [
      {
        "Status": "RUNNING",
        "VpcSlbIntranetEnable": true,
        "ClassicEgressAddress": "10.0.0.1",
        "ZoneLocalName": "多可用区 2",
        "UserVpcId": "vpc-t***hx****yu9****t0g4",
        "VpcIntranetEnable": true,
        "VpcOwnerId": 0,
        "InstanceId": "api-shared-vpc-020",
        "InstanceRpsLimit": 500,
        "InstanceType": "VPC_SHARED",
        "RegionId": "cn-beijing",
        "InstanceSpec": "api.s1.small",
        "InstanceChargeType": "PrePaid",
        "HttpsPolicies": "HTTPS2_TLS1_2",
        "VpcEgressAddress": "100.104.254.0/26",
        "NewVpcEgressAddress": "100.104.253.0/26",
        "EgressIpv6Enable": true,
        "ExpiredTime": "1659801600000",
        "InstanceName": "test",
        "ZoneId": "cn-hangzhou-MAZ5(g,h)",
        "SupportIpv6": true,
        "InternetEgressAddress": "47.241.89.244",
        "CreatedTime": "2021-10-22 15:36:53.0",
        "InstanceSpecAttributes": {
          "SpecAttribute": [
            {
              "Value": "2500",
              "LocalName": "最大每秒请求数"
            }
          ]
        },
        "UserVswitchId": "vsw-t4***eh****d7q****i2f",
        "AclName": "test",
        "AclType": "white",
        "AclStatus": "on",
        "AclId": "acl-uf6f9zfxfxtp5j9ng3yv4",
        "IntranetSegments": "[\\\"172.36.0.0/16\\\",\\\"172.31.16.0/20\\\"]",
        "IPV6AclName": "testIPV6",
        "IPV6AclId": "acl-124resFfs235",
        "IPV6AclType": "black",
        "IPV6AclStatus": "off",
        "DedicatedInstanceType": "vpc_connect",
        "InstanceCidrBlock": "192.168.0.0/16",
        "ConnectVpcId": "vpc-m5eo7khlb4h4f8y9egsdg",
        "NetworkInterfaceAttributes": {
          "NetworkInterfaceAttribute": [
            {
              "VswitchId": "vsw-2zeqals6rbj51bhjn8b89",
              "SecurityGroupId": "sg-2zeehz13zcyj1kfk3o85",
              "CidrBlock": "192.168.17.0/24",
              "ZoneId": "cn-shenzhen-d"
            }
          ]
        },
        "InstanceClusterId": "apigateway-cluster-sh-1523cafbgffd",
        "MaintainStartTime": "22:00Z",
        "MaintainEndTime": "01:00Z",
        "ConnectCidrBlocks": "[\\\"172.16.0.0/24\\\",\\\"172.16.1.0/24\\\"]",
        "PrivateDnsList": {
          "PrivateDns": [
            "www.private.com"
          ]
        },
        "Tags": {
          "TagInfo": [
            {
              "Key": "tag3",
              "Value": "50699_0"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/CloudAPI/2016-07-14/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/CloudAPI/2016-07-14/DescribeInstances#workbench-doc-change-demo) for a complete list.
