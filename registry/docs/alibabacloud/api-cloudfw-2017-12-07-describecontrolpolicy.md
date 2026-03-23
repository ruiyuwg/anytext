Retrieves information about all access control policies.

## Operation description

This operation retrieves access control policies by page.

## QPS limits

The queries per second (QPS) limit for a single user is 10. If this limit is exceeded, API calls are throttled. This may affect your business. Plan your calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeControlPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeControlPolicy)

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

The language of the response message. Valid values:

-   **zh** (default): Chinese
    
-   **en**: English
    

zh

Lang

string

No

The language of the response message. Valid values:

-   **zh** (default): Chinese
    
-   **en**: English
    

zh

Direction

string

No

The traffic direction of the access control policy. Valid values:

-   **in**: inbound traffic
    
-   **out**: outbound traffic
    

in

CurrentPage

string

Yes

The page number.

Default value: 1.

1

PageSize

string

Yes

The number of entries per page.

10

Source

string

No

The source address in the access control policy. Fuzzy match is supported. The value of this parameter depends on the value of the SourceType parameter.

-   If SourceType is set to `net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
    
-   If SourceType is set to `group`, the value of this parameter is the name of a source address book. Example: db\_group.
    
-   If SourceType is set to `location`, the value of this parameter is a source location. Example: Beijing.
    

**Note**

If you do not specify this parameter, policies are not filtered by the source address.

192.0.XX.XX

Destination

string

No

The destination address in the access control policy. Fuzzy match is supported. The value of this parameter depends on the value of the DestinationType parameter.

-   If DestinationType is set to `net`, the value of this parameter is a CIDR block. Example: 10.0.3.0/24.
    
-   If DestinationType is set to `domain`, the value of this parameter is a domain name. Example: aliyun.
    
-   If DestinationType is set to `group`, the value of this parameter is the name of an address book. Example: db\_group.
    
-   If DestinationType is set to `location`, the value of this parameter is a location. Example: \["BJ11", "ZB"\]. For more information about the location codes, see AddControlPolicy.
    

**Note**

If you do not specify this parameter, policies are not filtered by the destination address.

192.0.XX.XX

Description

string

No

The description of the access control policy. Fuzzy match is supported.

**Note**

If you do not specify this parameter, policies are not filtered by the description.

test

Proto

string

No

The protocol. Valid values:

-   **TCP**
    
-   **UDP**
    
-   **ICMP**
    
-   **ANY** (all protocols)
    

**Note**

If you do not specify this parameter, policies are not filtered by the protocol.

TCP

AclAction

string

No

The action that Cloud Firewall performs on traffic that matches the policy. Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

**Note**

If you do not specify this parameter, policies are not filtered by the action.

accept

Release

string

No

The status of the access control policy. Valid values:

-   **true**: enabled
    
-   **false**: disabled
    

true

AclUuid

string

No

The unique ID of the access control policy.

00281255-d220-4db1-8f4f-c4df221a\*\*\*\*

IpVersion

string

No

The IP version. Valid values:

-   **4** (default): IPv4
    
-   **6**: IPv6
    

6

RepeatType

string

No

The recurrence type for the policy. Valid values:

-   **Permanent** (default): The policy is always valid.
    
-   **None**: The policy is valid for a specific period.
    
-   **Daily**: The policy is valid every day.
    
-   **Weekly**: The policy is valid on a weekly basis.
    
-   **Monthly**: The policy is valid on a monthly basis.
    

**Valid values:**

-   Daily :
    
    Daily
    
-   Monthly :
    
    Monthly
    
-   Permanent :
    
    The policy is always valid.
    
-   Weekly :
    
    Weekly
    
-   None :
    
    The policy is valid for a specific period.
    

Permanent

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PageNo

string

The page number.

1

PageSize

string

The number of entries per page.

10

RequestId

string

The request ID.

CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2\*\*\*\*

TotalCount

string

The total number of policies that match the query.

100

Policys

array<object>

The access control policies.

object

No description is available.

Direction

string

The traffic direction. Valid values:

-   **in**: inbound
    
-   **out**: outbound
    

in

Order

integer

The priority of the access control policy.

The priority value starts from 1. A smaller value indicates a higher priority.

1

SourceType

string

The source address type. Valid values:

-   **net**: CIDR block
    
-   **group**: address book
    
-   **location**: location
    

net

ApplicationName

string

The application type that the access control policy supports. We recommend that you use the \`ApplicationNameList\` parameter instead. Valid values:

-   **FTP**
    
-   **HTTP**
    
-   **HTTPS**
    
-   **Memcache**
    
-   **MongoDB**
    
-   **MQTT**
    
-   **MySQL**
    
-   **RDP**
    
-   **Redis**
    
-   **SMTP**
    
-   **SMTPS**
    
-   **SSH**
    
-   **SSL**
    
-   **VNC**
    
-   **ANY** (all application types)
    

HTTP

HitTimes

integer

The number of times the policy was matched.

100

Description

string

The policy description.

test

SourceGroupType

string

The type of the source address book. Valid values:

-   **ip**: an address book that contains one or more CIDR blocks.
    
-   **tag**: an ECS tag address book that contains the IP addresses of ECS instances with one or more tags.
    
-   **domain**: a domain name address book that contains one or more domain names.
    
-   **threat**: a threat intelligence address book that contains one or more malicious IP addresses or domain names.
    
-   **backsrc**: an origin IP address book that contains the origin IP addresses of one or more Anti-DDoS or WAF instances.
    

ip

DnsResultTime

integer

The time when the domain name was resolved. This is a UNIX timestamp in seconds.

1579261141

DnsResult `deprecated`

string

The result of the DNS resolution.

192.0.XX.XX,192.0.XX.XX

Proto

string

The protocol. Valid values:

-   **ANY**
    
-   **TCP**
    
-   **UDP**
    
-   **ICMP**
    

TCP

DestinationGroupType

string

The type of the destination address book. Valid values:

-   **ip**: an address book that contains one or more CIDR blocks.
    
-   **tag**: an ECS tag address book that contains the IP addresses of ECS instances with one or more tags.
    
-   **domain**: a domain name address book that contains one or more domain names.
    
-   **threat**: a threat intelligence address book that contains one or more malicious IP addresses or domain names.
    
-   **backsrc**: an origin IP address book that contains the origin IP addresses of one or more Anti-DDoS or WAF instances.
    

ip

Destination

string

The destination address. The value of this parameter depends on the value of \`DestinationType\`. Valid values:

-   If **DestinationType** is set to **net**, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
    
-   If **DestinationType** is set to **domain**, the value of this parameter is a domain name. Example: aliyuncs.com.
    
-   If **DestinationType** is set to **group**, the value of this parameter is the name of an address book. Example: db\_group.
    
-   If **DestinationType** is set to **location**, the value of this parameter is a location. Example: \["BJ11", "ZB"\]. For more information about the location codes, see AddControlPolicy.
    

192.0.XX.XX/24

HitLastTime

integer

The time when the policy was last matched. This is a UNIX timestamp in seconds.

1579261141

DestPortGroup

string

The name of the destination port address book.

my\_port\_group

AclUuid

string

The unique ID of the policy.

00281255-d220-4db1-8f4f-c4df221a\*\*\*\*

DestPortType

string

The destination port type. Valid values:

-   **port**: port
    
-   **group**: port address book
    

port

Source

string

The source address. Valid values:

-   If **SourceType** is set to`net`, the value of this parameter is a CIDR block. Example: 192.0.XX.XX/24.
    
-   If **SourceType** is set to`group`, the value of this parameter is the name of an address book. Example: db\_group.
    
-   If **SourceType** is set to`location`, the value of this parameter is a location. Example: \["BJ11", "ZB"\]. For more information about the location codes, see [AddControlPolicy](/help/en/cloud-firewall/api-addcontrolpolicy).
    

192.0.XX.XX/24

DestinationType

string

The destination address type. Valid values:

-   **net**: CIDR block
    
-   **group**: address book
    
-   **domain**: domain name
    
-   **location**: location
    

net

DestPort

string

The destination port.

80

IpVersion

integer

The IP version. Valid values:

-   **4**: IPv4
    
-   **6**: IPv6
    

6

AclAction

string

The action that Cloud Firewall performs on traffic that matches the policy. Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

accept

Release

string

The status of the policy. A policy is enabled by default after it is created. Valid values:

-   **true**: enabled
    
-   **false**: disabled
    

true

ApplicationId

string

The ID of the application.

10\*\*\*

DestinationGroupCidrs

array

The CIDR blocks in the destination address book.

string

A CIDR block in the destination address book.

192.0.XX.XX/24

DestPortGroupPorts

array

The ports in the destination port address book.

string

A port in the destination port address book.

80/80

SourceGroupCidrs

array

The CIDR blocks in the source address book.

string

A CIDR block in the source address book.

192.0.XX.XX/24

ApplicationNameList

array

The application names.

string

An application type that the policy supports. Valid values:

-   **FTP**
    
-   **HTTP**
    
-   **HTTPS**
    
-   **Memcache**
    
-   **MongoDB**
    
-   **MQTT**
    
-   **MySQL**
    
-   **RDP**
    
-   **Redis**
    
-   **SMTP**
    
-   **SMTPS**
    
-   **SSH**
    
-   **SSL**
    
-   **VNC**
    
-   **ANY** (all application types)
    

HTTP

SpreadCnt

integer

The quota consumed by the policy. The quota consumed by a single policy is calculated using the following formula: Number of source addresses × Number of destination addresses × Number of port ranges × Number of applications.

10000

CreateTime

integer

The time when the policy was created.

1761062400

ModifyTime

integer

The time when the policy was last modified.

1761062400

RepeatType

string

The recurrence type for the policy. Valid values:

-   **Permanent** (default): The policy is always valid.
    
-   **None**: The policy is valid for a specific period.
    
-   **Daily**: The policy is valid every day.
    
-   **Weekly**: The policy is valid on a weekly basis.
    
-   **Monthly**: The policy is valid on a monthly basis.
    

**Valid values:**

-   Daily :
    
    The policy is valid each day.
    
-   Monthly :
    
    The policy is valid each month.
    
-   Permanent :
    
    The policy is always valid.
    
-   Weekly :
    
    The policy is valid each week.
    
-   None :
    
    The policy is valid for a specific period.
    

Permanent

RepeatDays

array

The days of a week or month on which the policy is recurrently effective.

-   If RepeatType is set to `Permanent`, `None`, or `Daily`, this parameter is an empty array. Example: \[\]
    
-   If RepeatType is set to Weekly, this parameter is not empty. Example: \[0, 6\]
    

**Note**

If \`RepeatType\` is set to \`Weekly\`, the values in the array cannot be repeated.

-   If RepeatType is set to `Monthly`, this parameter is not empty. Example: \[1, 31\]
    

**Note**

If \`RepeatType\` is set to \`Monthly\`, the values in the array cannot be repeated.

integer

The day of a week or month.

**Note**

If RepeatType is set to Weekly, the valid values are 0 to 6. The week starts on Sunday. If RepeatType is set to Monthly, the valid values are 1 to 31.

1

RepeatStartTime

string

The start time of the recurrence. The time is in the HH:mm format. The time must be on the hour or half hour, and at least 30 minutes before the end time.

**Note**

If RepeatType is set to Permanent or None, this parameter is empty. If RepeatType is set to Daily, Weekly, or Monthly, you must set this parameter.

08:00

RepeatEndTime

string

The end time of the recurrence. The time is in the HH:mm format. The time must be on the hour or half hour, and at least 30 minutes after the start time.

**Note**

If RepeatType is set to Permanent or None, this parameter is empty. If RepeatType is set to Daily, Weekly, or Monthly, you must set this parameter.

23:30

StartTime

integer

The start time of the policy validity period. This is a UNIX timestamp. The time must be on the hour or half hour, and at least 30 minutes before the end time.

**Note**

If RepeatType is set to Permanent, this parameter is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must set this parameter.

1694761200

EndTime

integer

The end time of the policy validity period. This is a UNIX timestamp. The time must be on the hour or half hour, and at least 30 minutes after the start time.

**Note**

If RepeatType is set to Permanent, this parameter is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, you must set this parameter.

1694764800

DomainResolveType

string

The domain name resolution method for the policy. Valid values:

-   **FQDN**: based on FQDN
    
-   **DNS**: based on dynamic DNS resolution
    
-   **FQDN\_AND\_DNS**: based on FQDN and dynamic DNS resolution
    

FQDN

## Examples

Success response

`JSON` format

```
{
  "PageNo": "1",
  "PageSize": "10",
  "RequestId": "CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****",
  "TotalCount": "100",
  "Policys": [
    {
      "Direction": "in",
      "Order": 1,
      "SourceType": "net",
      "ApplicationName": "HTTP",
      "HitTimes": 100,
      "Description": "test",
      "SourceGroupType": "ip",
      "DnsResultTime": 1579261141,
      "DnsResult": "192.0.XX.XX,192.0.XX.XX",
      "Proto": "TCP",
      "DestinationGroupType": "ip",
      "Destination": "192.0.XX.XX/24",
      "HitLastTime": 1579261141,
      "DestPortGroup": "my_port_group",
      "AclUuid": "00281255-d220-4db1-8f4f-c4df221a****",
      "DestPortType": "port",
      "Source": "192.0.XX.XX/24",
      "DestinationType": "net",
      "DestPort": "80",
      "IpVersion": 6,
      "AclAction": "accept",
      "Release": "true",
      "ApplicationId": "10***",
      "DestinationGroupCidrs": [
        "192.0.XX.XX/24"
      ],
      "DestPortGroupPorts": [
        "80/80"
      ],
      "SourceGroupCidrs": [
        "192.0.XX.XX/24"
      ],
      "ApplicationNameList": [
        "HTTP"
      ],
      "SpreadCnt": 10000,
      "CreateTime": 1761062400,
      "ModifyTime": 1761062400,
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

ErrorParameterIpVersion

The IP version is invalid.

The IP version is invalid.

400

ErrorParametersDirection

The direction is invalid.

The direction is invalid.

400

ErrorDBSelect

An error occurred while querying database.

An error occurred while querying database.

400

ErrorUnmarshalJSON

An error occurred while parsing JSON.

An error occurred while decoding JSON.

400

ErrorUUIDNew

The UUID is invalid.

The UUID is invalid.

400

ErrorParametersAppId

The AppId parameter is incorrect.

The AppId parameter is invalid.

400

ErrorParametersSource

The source is invalid.

The source is invalid.

400

ErrorDomainResolve

An error occurred while resolving the domain.

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

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeControlPolicy#workbench-doc-change-demo) for a complete list.
