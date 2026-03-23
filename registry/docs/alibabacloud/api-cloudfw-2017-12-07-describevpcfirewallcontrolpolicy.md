Queries all access control policies for a specified VPC firewall.

## Operation description

You can call this operation to query the access control policies of a VPC firewall. VPC firewalls use different access control policies for traffic between VPCs connected over a Cloud Enterprise Network (CEN) instance and for traffic between VPCs connected over an Express Connect circuit.

## QPS limit

The queries per second (QPS) limit for a single user is 10. If you exceed the limit, your API calls are throttled. Throttling can affect your business. Plan your API calls to avoid exceeding the limit.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallControlPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeVpcFirewallControlPolicy)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the request and response.

Valid values:

-   **zh** (default): Chinese
    
-   **en**: English
    

zh

VpcFirewallId

string

Yes

The instance ID of the VPC firewall.

-   If the VPC firewall protects traffic between two VPCs connected over a Cloud Enterprise Network (CEN) instance, use the CEN instance ID.
    
-   If the VPC firewall protects traffic between two VPCs connected over an Express Connect circuit, use the VPC firewall instance ID.
    

**Note**

Call the [DescribeVpcFirewallAclGroupList](/help/en/cloud-firewall/api-describevpcfirewallaclgrouplist) operation to get the ID.

vfw-a42bbb7b887148c9\*\*\*\*

CurrentPage

string

No

The number of the page to return. This parameter is used for paged queries.

1

PageSize

string

No

The number of access control policies for the VPC firewall to return on each page. This parameter is used for paged queries.

The maximum value is 50.

10

Source

string

No

The source address in the access control policy. Fuzzy query is supported.

**Note**

The source can be a single CIDR block or an address book name.

192.0.XX.XX/24

Destination

string

No

The destination address in the access control policy. Fuzzy query is supported.

**Note**

The destination can be a single CIDR block, a domain name, or an address book name.

192.0.XX.XX/24

Description

string

No

The description of the access control policy. Fuzzy query is supported.

test

Proto

string

No

The protocol type of the traffic in the access control policy. Valid values:

-   **TCP**
    
-   **UDP**
    
-   **ICMP**
    
-   **ANY** (queries all protocol types)
    

**Note**

If you do not set this parameter, all protocol types are queried.

TCP

AclAction

string

No

The action that Cloud Firewall performs on the traffic. Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

**Note**

If you do not set this parameter, all actions are queried.

accept

MemberUid

string

No

The UID of the member account.

258039427902\*\*\*\*

AclUuid

string

No

The unique ID of the access control policy.

4037fbf7-3e39-4634-92a4-d0155247\*\*\*\*

Release

string

No

The status of the access control policy. Valid values:

-   **true**: The policy is enabled.
    
-   **false**: The policy is disabled.
    

true

RepeatType

string

No

The recurrence type for the policy. Valid values:

-   **Permanent** (default): The policy is always in effect.
    
-   **None**: The policy is in effect for a specific period.
    
-   **Daily**: The policy is in effect daily.
    
-   **Weekly**: The policy is in effect weekly.
    
-   **Monthly**: The policy is in effect monthly.
    

**Valid values:**

-   Daily :
    
    Every day
    
-   Monthly :
    
    Every month
    
-   Permanent :
    
    Always
    
-   Weekly :
    
    Every week
    
-   None :
    
    Specify a single time
    

Permanent

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

string

The total number of access control policies for the VPC firewall.

20

RequestId

string

The ID of the request.

CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D

Policys

array<object>

The information about the access control policies for the VPC firewall.

object

Destination

string

The destination address in the access control policy. Valid values:

-   If **DestinationType** is `net`, the value of this parameter is a destination CIDR block.
    
-   If **DestinationType** is `domain`, the value of this parameter is a destination domain name.
    
-   If **DestinationType** is `group`, the value of this parameter is the name of a destination address book.
    

192.0.XX.XX/24

Order

integer

The priority of the access control policy.

The priority starts from 1. A smaller value indicates a higher priority.

1

DestPortGroup

string

The name of the destination port address book for the traffic in the access control policy.

my\_port\_group

SourceType

string

The source address type in the access control policy. Valid values:

-   **net**: source CIDR block
    
-   **group**: source address book
    

net

ApplicationName

string

The application type supported by the access control policy. Use ApplicationNameList instead. Valid values:

-   **HTTP**
    
-   **HTTPS**
    
-   **MySQL**
    
-   **SMTP**
    
-   **SMTPS**
    
-   **RDP**
    
-   **VNC**
    
-   **SSH**
    
-   **Redis**
    
-   **MQTT**
    
-   **MongoDB**
    
-   **Memcache**
    
-   **SSL**
    
-   **ANY** (indicates all application types)
    

HTTP

AclUuid

string

The unique ID of the access control policy.

4037fbf7-3e39-4634-92a4-d0155247\*\*\*\*

DestPortType

string

The destination port type for the traffic in the access control policy. Valid values:

-   **port**: single port
    
-   **group**: port address book
    

port

Source

string

The source address in the access control policy. Valid values:

-   If **SourceType** is `net`, the value of this parameter is a source CIDR block.
    
-   If **SourceType** is `group`, the value of this parameter is the name of a source address book.
    

192.0.XX.XX/24

DestinationType

string

The destination address type in the access control policy. Valid values:

-   **net**: destination CIDR block
    
-   **group**: destination address book
    
-   **domain**: destination domain name
    

net

HitTimes

integer

The number of hits for the access control policy.

100

DestPort

string

The destination port for the traffic in the access control policy.

80

Description

string

The description of the access control policy.

test

AclAction

string

The action that Cloud Firewall performs on the traffic. Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

accept

ApplicationId

string

The ID of the application used by the traffic in the access control policy.

10\*\*

Proto

string

The protocol type of the traffic in the access control policy. Valid values:

-   **TCP**
    
-   **UDP**
    
-   **ICMP**
    
-   **ANY** (indicates all protocol types)
    

TCP

DestinationGroupCidrs

array

The information about the CIDR blocks in the destination address book of the access control policy.

string

The list of CIDR blocks in the destination address book.

\["192.0.XX.XX/24", "192.0.XX.XX/32"\]

DestPortGroupPorts

array

The details of the destination port address book in the access control policy.

string

The list of ports in the destination port address book.

\[80,443\]

SourceGroupCidrs

array

The details of the source address book in the access control policy.

string

The list of CIDR blocks in the source address book.

\["192.0.XX.XX/24", "198.51.XX.XX/32"\]

MemberUid

string

The UID of the member account.

258039427902\*\*\*\*

Release

string

The status of the access control policy. The policy is enabled by default after it is created. Valid values:

-   **true**: The policy is enabled.
    
-   **false**: The policy is disabled.
    

true

SourceGroupType

string

The type of the source address book. The value is fixed at **ip**. This indicates an IP address book that contains one or more CIDR blocks.

ip

DestinationGroupType

string

The type of the destination address book. Valid values:

-   **ip**: an IP address book that contains one or more CIDR blocks.
    
-   **domain**: a domain name address book that contains one or more domain names.
    

ip

HitLastTime

integer

The timestamp of the last hit. This value is a UNIX timestamp. Unit: seconds.

1579261141

ModifyTime

integer

The time when the policy was last modified. This value is a UNIX timestamp. Unit: seconds.

1761062400

SpreadCnt

integer

The number of policy specifications that are occupied. This is the cumulative value of the specifications occupied by each policy. The number of specifications occupied by a single policy = Number of source CIDR blocks × Number of destination addresses (CIDR blocks or domain names) × Number of applications × Number of port ranges.

10,000

CreateTime

integer

The time when the policy was created. This value is a UNIX timestamp. Unit: seconds.

1761062400

ApplicationNameList

array

The list of application names.

string

The list of application types supported by the access control policy. Valid values:

-   **HTTP**
    
-   **HTTPS**
    
-   **MySQL**
    
-   **SMTP**
    
-   **SMTPS**
    
-   **RDP**
    
-   **VNC**
    
-   **SSH**
    
-   **Redis**
    
-   **MQTT**
    
-   **MongoDB**
    
-   **Memcache**
    
-   **SSL**
    
-   **ANY** (indicates all application types)
    

\[ "HTTPS", "SMTPS", "SSL" \]

RepeatType

string

The recurrence type for the policy. Valid values:

-   **Permanent** (default): The policy is always in effect.
    
-   **None**: The policy is in effect for a specific period.
    
-   **Daily**: The policy is in effect daily.
    
-   **Weekly**: The policy is in effect weekly.
    
-   **Monthly**: The policy is in effect monthly.
    

**Valid values:**

-   Daily :
    
    Every day
    
-   Monthly :
    
    Every month
    
-   Permanent :
    
    Always
    
-   Weekly :
    
    Every week
    
-   None :
    
    Specify a single time
    

Permanent

RepeatDays

array

The days of the week or month when the policy is in effect.

-   If \*\*RepeatType\*\* is `Permanent`, `None`, or `Daily`, this parameter is an empty array. Example: \[\]
    
-   If \*\*RepeatType\*\* is \`Weekly\`, this parameter is not empty. Example: \[0, 6\]
    

**Note**

If \*\*RepeatType\*\* is \`Weekly\`, the array cannot contain duplicate values.

-   If \*\*RepeatType\*\* is `Monthly`, this parameter is not empty. Example: \[1, 31\]
    

**Note**

If \*\*RepeatType\*\* is \`Monthly\`, the array cannot contain duplicate values.

integer

The day when the policy is in effect.

**Note**

If \*\*RepeatType\*\* is \`Weekly\`, the valid values are 0 to 6. The week starts on Sunday. If \*\*RepeatType\*\* is \`Monthly\`, the valid values are 1 to 31.

1

RepeatStartTime

string

The start time of the recurrence. For example: 08:00. The time must be on the hour or half-hour, and at least 30 minutes earlier than the end time.

**Note**

If \*\*RepeatType\*\* is \`Permanent\` or \`None\`, this parameter is empty. If \*\*RepeatType\*\* is \`Daily\`, \`Weekly\`, or \`Monthly\`, you must set this parameter.

08:00

RepeatEndTime

string

The end time of the recurrence. For example: 23:30. The time must be on the hour or half-hour, and at least 30 minutes later than the start time.

**Note**

If \*\*RepeatType\*\* is \`Permanent\` or \`None\`, this parameter is empty. If \*\*RepeatType\*\* is \`Daily\`, \`Weekly\`, or \`Monthly\`, you must set this parameter.

23:30

StartTime

integer

The start time of the policy. This value is a UNIX timestamp. Unit: seconds. The time must be on the hour or half-hour, and at least 30 minutes earlier than the end time.

**Note**

If \*\*RepeatType\*\* is \`Permanent\`, this parameter is empty. If \*\*RepeatType\*\* is \`None\`, \`Daily\`, \`Weekly\`, or \`Monthly\`, you must set this parameter.

1694761200

EndTime

integer

The end time of the policy. This value is a UNIX timestamp. Unit: seconds. The time must be on the hour or half-hour, and at least 30 minutes later than the start time.

**Note**

If \*\*RepeatType\*\* is \`Permanent\`, this parameter is empty. If \*\*RepeatType\*\* is \`None\`, \`Daily\`, \`Weekly\`, or \`Monthly\`, you must set this parameter.

1694764800

DomainResolveType

string

The method for domain name resolution in the access control policy. Valid values:

-   **FQDN**: FQDN-based resolution
    
-   **DNS**: DNS-based dynamic resolution
    
-   **FQDN\_AND\_DNS**: FQDN- and DNS-based dynamic resolution
    

FQDN

## Examples

Success response

`JSON` format

```
{
  "TotalCount": "20",
  "RequestId": "CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D",
  "Policys": [
    {
      "Destination": "192.0.XX.XX/24",
      "Order": 1,
      "DestPortGroup": "my_port_group",
      "SourceType": "net",
      "ApplicationName": "HTTP",
      "AclUuid": "4037fbf7-3e39-4634-92a4-d0155247****",
      "DestPortType": "port",
      "Source": "192.0.XX.XX/24",
      "DestinationType": "net",
      "HitTimes": 100,
      "DestPort": "80",
      "Description": "test",
      "AclAction": "accept",
      "ApplicationId": "10**",
      "Proto": "TCP",
      "DestinationGroupCidrs": [
        "[\"192.0.XX.XX/24\", \"192.0.XX.XX/32\"]"
      ],
      "DestPortGroupPorts": [
        "[80,443]"
      ],
      "SourceGroupCidrs": [
        "[\"192.0.XX.XX/24\", \"198.51.XX.XX/32\"]"
      ],
      "MemberUid": "258039427902****",
      "Release": "true",
      "SourceGroupType": "ip",
      "DestinationGroupType": "ip",
      "HitLastTime": 1579261141,
      "ModifyTime": 1761062400,
      "SpreadCnt": 0,
      "CreateTime": 1761062400,
      "ApplicationNameList": [
        "[\n    \"HTTPS\", \n    \"SMTPS\", \n    \"SSL\"\n]"
      ],
      "RepeatType": "Permanent",
      "RepeatDays": [
        1
      ],
      "RepeatStartTime": "08:00",
      "RepeatEndTime": "23:30",
      "StartTime": 1694761200,
      "EndTime": 1694764800,
      "DomainResolveType": "FQDN"
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

ErrorParametersUid

The aliUid parameter is invalid.

The aliUid parameter is invalid.

400

ErrorParametersPageSizeOrNo

Either pageSize or pageNo is invalid.

Either pageSize or pageNo is invalid.

400

ErrorDBSelect

An error occurred while querying database.

An error occurred while querying database.

400

ErrorUUIDNew

The UUID is invalid.

The UUID is invalid.

400

ErrorParametersAppId

The appId is invalid.

The appId is invalid.

400

ErrorParameterIpVersion

The IP version is invalid.

The IP version is invalid.

400

ErrorParametersDirection

The direction is invalid.

The direction is invalid.

400

ErrorParametersSource

The source is invalid.

The source is invalid.

400

ErrorDomainResolve

A domain resolution error occurred.

An error occurred while resolving the domain.

400

ErrorParametersDestination

The Destination parameter is invalid.

The Destination parameter is invalid.

400

ErrorParametersProto

The protocol is invalid.

The protocol is invalid.

400

ErrorParametersDestPort

The dst\_port is invalid.

The dst\_port is invalid.

400

ErrorParametersAction

The action is invalid.

The action is invalid.

400

ErrorParameters

Parameters error.

Parameter error.

400

ErrorMarshalJSON

An error occurred while encoding JSON.

An error occurred while encoding JSON.

400

ErrorParametersAclUuid

Specified parameter AclUuid is not valid.

Specified parameter AclUuid is not valid.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeVpcFirewallControlPolicy#workbench-doc-change-demo) for a complete list.
