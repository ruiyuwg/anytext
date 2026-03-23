Gets the details of one or more instances.

## Operation description

-   API Request Rate: 800 requests per second.
    
-   Single-User Request Rate: 100 requests per second.
    
-   Request parameters function as filters and are combined using a logical AND. Empty parameters are ignored. However, if the `InstanceIds` parameter is an empty JSON array, the API applies this filter and returns an empty list.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ens/2017-11-10/DescribeInstances)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ens/2017-11-10/DescribeInstances)

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

ens:DescribeInstances

list

\*Instance

`acs:ens:*:{#accountId}:instance/{#InstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

EnsRegionId

string

No

The ID of the edge node.

cn-beijing-cmcc

InstanceId

string

No

The ID of the instance.

i-5iqczfxps7csjrxeca\*\*\*\*

EnsRegionIds

string

No

A JSON array of edge node IDs. You can specify up to 100 IDs.

\["cn-suzhou-telecom","cn-chengdu-telecom"\]

InstanceIds

string

No

A JSON array of instance IDs. You can specify up to 100 IDs.

\["i-5iqczfxps7csjrxeca07\*\*\*\*", "i-5iqczfxps7csjrxeca07\*\*\*\*"\]

InstanceName

string

No

The name of the instance.

TestName

ImageId

string

No

The ID of the image.

centos\_6\_08\_64\_20G\_alibase\_\*\*\*\*

PageNumber

integer

No

The page number. Pages start from **1**.

Default value: **1**.

1

PageSize

string

No

The number of entries per page. Maximum value: **100**.

Default value: **10**.

10

Status

string

No

The status of the instance. Valid values:

-   `Running`
    
-   `Stopped`
    
-   `Expired`
    

Running

OrderByParams

string

No

The sort order for the results, specified in JSON format.

You can sort by instance name, expiration time, edge node ID, or creation time.

{ "InstanceNameSort": "asc", "ExpireTimeSort": "asc", "CreationTimeSort": "desc", "EnsRegionId": "desc" }

EnsServiceId

string

No

The ID of the edge service. Use this parameter to find instances created by the service.

ens-20190730202316s\*\*\*\*

InstanceResourceType

string

No

The type of resource to filter by. Valid values:

-   `EnsInstance`: an individually purchased instance.
    
-   `EnsService`: an instance created by an edge service.
    
-   `BuildMachine`: a build machine.
    
-   `EnsPostPaidInstance`: an individually purchased post-paid instance.
    

EnsService

SearchKey

string

No

The keyword for the search. You can search by **IP address**, **Instance Name**, or **Instance ID**.

Joshua

NetworkId

string

No

The ID of the network.

n-2zeuphj08tt7q3brd\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch.

vsw-2zeh0r1pabwtg6wcs\*\*\*\*

SecurityGroupId

string

No

The ID of the security group.

sg-5kyicq2kfcapxrdds6tar7jqb

IntranetIp

string

No

The private IP address.

47.100.XX.XX

Tags

array<object>

No

The tags to filter resources by. You can specify up to 20 tags. This operation uses these tags for filtering but does not include them in the response. To manage tags, use the dedicated tag API operations.

object

No

A tag key-value pair.

Key

string

No

The key of the tag.

tag

Value

string

No

The value of the tag.

2

InstanceType

string

No

The instance type.

ens.se1.tiny

ServiceStatus

array

No

The service status of the instance. This does not represent the actual runtime status of the instance.

string

No

Valid values:

-   `Expired`: the instance has expired.
    
-   `Arrears`: the instance has an overdue payment.
    

Expired

EipAddresses

array

No

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

integer

The response code. A value of 0 indicates a successful request.

0

PageSize

integer

The number of entries returned per page.

60

PageNumber

integer

The page number of the returned page.

1

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TotalCount

integer

The total number of instances that match the query.

2

Instances

object

Instance

array<object>

A list of instances and their details.

array<object>

The details of an instance.

CreationTime

string

The time the instance was created. The time is displayed in UTC and follows the ISO 8601 standard, formatted as yyyy-MM-ddTHH:mm:ssZ.

2019-07-26T06:40:43Z

Status

string

The status of the instance. Valid values:

-   Running
    
-   Expired
    
-   Stopped
    

Running

SpecName

string

The instance type.

ens.sn1.stiny

InstanceTypeFamily

string

The instance type family. Valid values:

-   `x86_vm`: x86 compute
    
-   `x86_pm`: x86 Bare Metal
    
-   `x86_bmi`: x86 Bare Metal instance
    
-   `x86_bm`: Bare Metal instance with a smart NIC
    
-   `pc_bmi`: Heterogeneous Bare Metal instance
    
-   `pc_vm`: Heterogeneous virtual machine
    
-   `arm_bmi`: ARM compute
    

x86\_vm

InstanceResourceType

string

The resource type of the instance. Valid values:

-   `EnsInstance`: An individually purchased instance.
    
-   `EnsService`: An instance created by an edge service.
    
-   `BuildMachine`: A machine used for building images.
    
-   `EnsPostPaidInstance`: An individually purchased post-paid instance.
    

EnsService

HostName

string

The hostname of the instance.

-   A period (.) or a hyphen (-) cannot be the first or last character, and they cannot be used consecutively.
    
-   For Windows instances, the hostname must be 2 to 15 characters long, cannot contain periods (.), and cannot consist of only digits. It can contain uppercase letters, lowercase letters, digits, and hyphens (-).
    
-   For other instance types, such as Linux, the hostname must be 2 to 64 characters long and can contain multiple periods (.). Each segment separated by a period can contain uppercase letters, lowercase letters, digits, and hyphens (-).
    

testHostName

InstanceId

string

The ID of the instance.

i-instanc\*\*\*\*

InternetMaxBandwidthIn

integer

The maximum inbound public bandwidth, in Mbit/s.

40

InternetMaxBandwidthOut

integer

The maximum outbound public bandwidth, in Mbit/s.

100

EnsRegionId

string

The ID of the region where the instance is located.

cn-hangzhou-telecom

Cpu

string

The number of vCPUs.

2

ExpiredTime

string

The expiration time. The time is displayed in UTC and follows the ISO 8601 standard, formatted as yyyy-MM-ddTHH:mm:ssZ.

2119-07-13T02:38:57Z

InstanceName

string

The name of the instance.

i-5itef0f28t17bcdw9deu6meub

Disk

integer

The total size of disks, in MiB.

71680

OSName

string

The name of the operating system.

centos 6.8 x86\_64

Memory

integer

The memory size, in MiB.

2048

ImageId

string

The ID of the image.

m-\*\*\*\*

DataDisk

object

The data disks.

DataDisk

array<object>

A list of data disks.

object

The details of a data disk.

device\_type

string

An extended field for `Category`. Valid values:

-   **file**: local disk
    
-   **pangu**: Ultra Disk
    
-   **local\_hdd**: local HDD
    

pangu

disk\_type

string

The type of the disk. Valid values:

**system**: system disk **data**: data disk

system

Size

integer

The size of the disk, in MiB.

51200

DiskName

string

The name of the disk.

DiskName

uuid

string

The UUID of the disk.

5431f898-1323-4e64-8ce1-6cad50ed\*\*\*\*

storage

integer

The size of the disk, in MiB.

20480

DiskId

string

The ID of the disk.

d-5ip4c2dhmas0vjd5u1r\*\*\*\*

Category

string

The category of the disk. Valid values:

-   **file**: local disk
    
-   **pangu**: Ultra Disk
    
-   **local\_hdd**: local HDD
    

file

name

string

The name of the disk.

name

DiskSize

integer

The size of the disk, in GiB.

100

EncryptKeyId

string

The ID of the KMS key used for the disk.

0e478b7a-4262-4802-b8cb-00d3fxxxxx

Encrypted

boolean

Indicates whether the disk is encrypted.

true

PublicIpAddresses

object

The public IP addresses.

PublicIpAddress

array<object>

A list of public IP addresses.

object

The details of a public IP address.

Ip

string

The public IP address.

119.147.xx.xx

GateWay

string

The gateway.

119.147.xx.xx

Isp

string

The Internet Service Provider (ISP).

unicom

PrivateIpAddresses

object

The private IP addresses.

PrivateIpAddress

array<object>

A list of private IP addresses.

object

The details of a private IP address.

Ip

string

The private IP address.

119.147.xx.xx

GateWay

string

The gateway.

119.147.xx.xx

Isp

string

The ISP.

cmcc

SecurityGroupIds

object

The IDs of the security groups with which the instance is associated.

SecurityGroupId

array

A list of security group IDs.

string

The ID of the security group.

sg-5kyicq2kfcapxrdds6ta\*\*\*\*

InnerIpAddress

object

The private IP addresses.

IpAddress

array

A list of the instance's private IP addresses.

string

The private IP address of the instance.

10.170.xx.xx

PublicIpAddress

object

The public IP addresses.

IpAddress

array

A list of public IP addresses.

string

The public IP address.

119.147.xx.xx

SystemDisk

object

The details of the system disk.

device\_type

string

An extended field for `Category`. Valid values:

-   **file**: local disk
    
-   **pangu**: Ultra Disk
    
-   **local\_hdd**: local HDD
    

pangu

disk\_type

string

The type of the disk. Valid values:

-   **system**: system disk
    
-   **data**: data disk
    

system

Size

integer

The size of the disk, in MiB.

51200

DiskName

string

The name of the disk.

DiskName

uuid

string

The UUID of the disk.

5431f898-1323-4e64-8ce1-6cad50ed\*\*\*\*

storage

integer

The size of the disk, in MiB.

20480

DiskId

string

The ID of the disk.

d-5ip4c2dhmas0rn7rt0p9\*\*\*\*

Category

string

The category of the disk. Valid values:

-   **file**: local disk
    
-   **pangu**: Ultra Disk
    
-   **local\_hdd**: local HDD
    

file

name

string

The name of the disk.

DiskName

NetworkAttributes

object

The network attributes.

NetworkId

string

The network ID.

n-2zeuphj08tt7q3brd\*\*\*\*

VSwitchId

string

The VSwitch ID.

vsw-2zeh0r1pabwtg6wcs\*\*\*\*

PrivateIpAddress

object

IpAddress

array

The private network information of the instance.

string

The private IP address of the instance. A maximum of one private IP address can be specified. The IP address must be an available address in the CIDR block of the VSwitch (VSwitchId).

172.17.\*\*.\*\*

Tags

object

Tags

array<object>

A collection of tags for the instance.

**Important** This API does not currently return tag information. Use this API with the APIs in the Tag directory.

object

The tag information.

**Important** This API does not currently return tag information. Use the APIs in the Tag section to get tag information.

TagValue

string

Tag Value

value1

TagKey

string

The tag key of the instance.

key1

AutoReleaseTime

string

The time when the instance is automatically released.

2023-06-28T14:38:52Z

SpotStrategy

string

The preemptible instance strategy.

NoSpot

KeyPairName

string

The name of the key pair.

TestKeyPairName

NetworkInterfaces

object

NetworkInterfaces

array<object>

The information about the Elastic Network Interfaces (ENIs).

array<object>

An array of Elastic Network Interface (ENI) objects.

Type

string

The type of the elastic network interface (ENI). Valid values:

-   Primary: The primary ENI.
    
-   Secondary: The secondary ENI.
    

Primary

MacAddress

string

The MAC address of the Elastic Network Interface (ENI).

00:16:XXX:XXX:60:0a

PrimaryIpAddress

string

The primary private IP address.

10.XXX.XXX.25

NetworkInterfaceId

string

The ID of the Elastic Network Interface (ENI).

eni-53afk8a0t5lklbi8m7j8iczdg

PrivateIpSets

object

PrivateIpSet

array<object>

A collection of PrivateIpSet objects.

object

An array of PrivateIpSet objects.

PrivateIpAddress

string

The private IP address.

192.XXX.XXX.130

Primary

boolean

Indicates whether the IP address is a primary private IP address. Valid values:

-   true: Primary private IP address.
    
-   false: Secondary private IP address.
    

true

Ipv6Sets

object

Ipv6Set

array<object>

The IPv6 addresses assigned to the Elastic Network Interface (ENI).

object

The set of IPv6 addresses assigned to the Elastic Network Interface (ENI).

Ipv6Address

string

The IPv6 address assigned to the Elastic Network Interface (ENI).

2605:340:cdb1:XXXX:XXXX:XXXX:XXXX:e2d6

ServiceStatus

string

The service status of the instance. This does not represent the actual running state of the instance.

Expired

DeletionProtection

boolean

## Examples

Success response

`JSON` format

```
{
  "Code": 0,
  "PageSize": 60,
  "PageNumber": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TotalCount": 2,
  "Instances": {
    "Instance": [
      {
        "CreationTime": "2019-07-26T06:40:43Z",
        "Status": "Running",
        "SpecName": "ens.sn1.stiny",
        "InstanceTypeFamily": "x86_vm",
        "InstanceResourceType": "EnsService",
        "HostName": "testHostName",
        "InstanceId": "i-instanc****",
        "InternetMaxBandwidthIn": 40,
        "InternetMaxBandwidthOut": 100,
        "EnsRegionId": "cn-hangzhou-telecom",
        "Cpu": "2",
        "ExpiredTime": "2119-07-13T02:38:57Z",
        "InstanceName": "i-5itef0f28t17bcdw9deu6meub",
        "Disk": 71680,
        "OSName": "centos 6.8 x86_64",
        "Memory": 2048,
        "ImageId": "m-****",
        "DataDisk": {
          "DataDisk": [
            {
              "device_type": "pangu",
              "disk_type": "system",
              "Size": 51200,
              "DiskName": "DiskName",
              "uuid": "5431f898-1323-4e64-8ce1-6cad50ed****",
              "storage": 20480,
              "DiskId": "d-5ip4c2dhmas0vjd5u1r****",
              "Category": "file",
              "name": "name",
              "DiskSize": 100,
              "EncryptKeyId": "0e478b7a-4262-4802-b8cb-00d3fxxxxx",
              "Encrypted": true
            }
          ]
        },
        "PublicIpAddresses": {
          "PublicIpAddress": [
            {
              "Ip": "119.147.xx.xx",
              "GateWay": "119.147.xx.xx",
              "Isp": "unicom"
            }
          ]
        },
        "PrivateIpAddresses": {
          "PrivateIpAddress": [
            {
              "Ip": "119.147.xx.xx",
              "GateWay": "119.147.xx.xx",
              "Isp": "cmcc"
            }
          ]
        },
        "SecurityGroupIds": {
          "SecurityGroupId": [
            "sg-5kyicq2kfcapxrdds6ta****"
          ]
        },
        "InnerIpAddress": {
          "IpAddress": [
            "10.170.xx.xx"
          ]
        },
        "PublicIpAddress": {
          "IpAddress": [
            "119.147.xx.xx"
          ]
        },
        "SystemDisk": {
          "device_type": "pangu",
          "disk_type": "system",
          "Size": 51200,
          "DiskName": "DiskName",
          "uuid": "5431f898-1323-4e64-8ce1-6cad50ed****",
          "storage": 20480,
          "DiskId": "d-5ip4c2dhmas0rn7rt0p9****",
          "Category": "file",
          "name": "DiskName"
        },
        "NetworkAttributes": {
          "NetworkId": "n-2zeuphj08tt7q3brd****",
          "VSwitchId": "vsw-2zeh0r1pabwtg6wcs****",
          "PrivateIpAddress": {
            "IpAddress": [
              "172.17.**.**"
            ]
          }
        },
        "Tags": {
          "Tags": [
            {
              "TagValue": "value1",
              "TagKey": "key1"
            }
          ]
        },
        "AutoReleaseTime": "2023-06-28T14:38:52Z",
        "SpotStrategy": "NoSpot",
        "KeyPairName": "TestKeyPairName",
        "NetworkInterfaces": {
          "NetworkInterfaces": [
            {
              "Type": "Primary",
              "MacAddress": "00:16:XXX:XXX:60:0a",
              "PrimaryIpAddress": "10.XXX.XXX.25",
              "NetworkInterfaceId": "eni-53afk8a0t5lklbi8m7j8iczdg",
              "PrivateIpSets": {
                "PrivateIpSet": [
                  {
                    "PrivateIpAddress": "192.XXX.XXX.130",
                    "Primary": true
                  }
                ]
              },
              "Ipv6Sets": {
                "Ipv6Set": [
                  {
                    "Ipv6Address": "2605:340:cdb1:XXXX:XXXX:XXXX:XXXX:e2d6"
                  }
                ]
              }
            }
          ]
        },
        "ServiceStatus": "Expired",
        "DeletionProtection": false
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

400

MissingParameter

The input parameter domainName that is mandatory for processing this request is not supplied.

400

InstanceIdNotFound

The input parameter instancdId that is not found.

The specified instance ID does not exist.

400

NoPermission

Permission denied.

400

CallInterface

Call Interface Happen Error.

An error occurred when you call the operation.

400

InvalidParameter.%s

The specified field %s invalid. Please check it again.

See [Error Codes](https://api.alibabacloud.com/document/Ens/2017-11-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ens/2017-11-10/DescribeInstances#workbench-doc-change-demo) for a complete list.
