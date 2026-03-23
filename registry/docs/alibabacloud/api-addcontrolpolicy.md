Adds an access control policy.

## Operation description

You can use this API to create a policy that allows, denies, or monitors traffic that passes through Cloud Firewall.

## QPS limit

This API has a queries per second (QPS) limit of 10 for each user. If you exceed this limit, your API calls are throttled. This throttling may affect your business. Call this API at a reasonable rate.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/AddControlPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/AddControlPolicy)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SourceIp `deprecated`

string

No

The source IP address of the traffic.

192.0.XX.XX

Lang

string

No

The language of the request and response. Valid values:

-   **zh** (default): Chinese
    
-   **en**: English
    

zh

AclAction

string

Yes

The action to perform on traffic that matches the access control policy. Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

accept

ApplicationName `deprecated`

string

No

The application type that the access control policy supports. Valid values:

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
    
-   **SSL\_No\_Cert**
    
-   **SSL**
    
-   **VNC**
    
-   **ANY** (all application types)
    

**Note**

The available application types depend on the protocol type (\`Proto\`). If you set \`Proto\` to \`TCP\`, you can set \`ApplicationName\` to any of the listed application types. If you set \`Proto\` to \`UDP\`, \`ICMP\`, or \`ANY\`, you can set \`ApplicationName\` only to \`ANY\`. Specify either \`ApplicationNameList\` or \`ApplicationName\`.

ANY

Description

string

Yes

The description of the access control policy.

Release flow

DestPort

string

No

The destination port in the access control policy. Valid values:

-   If \`Proto\` is \`ICMP\`, leave this parameter empty.
    

**Note**

If the protocol type is ICMP, you cannot control access based on the destination port.

-   If \`Proto\` is \`TCP\`, \`UDP\`, or \`ANY\`, and \`DestPortType\` is \`group\`, leave this parameter empty.
    

**Note**

If you set \`DestPortType\` to \`group\` (port address book), you do not need to specify a destination port number. The port address book contains all the destination ports that the policy manages.

-   If \`Proto\` is \`TCP\`, \`UDP\`, or \`ANY\`, and \`DestPortType\` is \`port\`, set this parameter to the destination port number.
    

80

Destination

string

Yes

The destination address in the access control policy.

Valid values:

-   If \`DestinationType\` is \`net\`, set this parameter to the destination CIDR block.
    
    Example: 1.2.XX.XX/24
    
-   If \`DestinationType\` is \`group\`, set this parameter to the name of the destination address book.
    
    Example: db\_group
    
-   If \`DestinationType\` is \`domain\`, set this parameter to the destination domain name.
    
    Example: \*.aliyuncs.com
    
-   If \`DestinationType\` is \`location\`, set this parameter to the destination region.
    
    Example: \["BJ11", "ZB"\]
    

**Note**

For more information about region codes, see [Region codes](/help/en/cloud-firewall/area-codes).

192.0.XX.XX/24

DestinationType

string

Yes

The type of the destination address in the access control policy. Valid values:

-   **net**: destination CIDR block
    
-   **group**: destination address book
    
-   **domain**: destination domain name
    
-   **location**: destination region
    

net

Direction

string

Yes

The direction of the traffic to which the access control policy applies. Valid values:

-   **in**: inbound traffic
    
-   **out**: outbound traffic
    

in

Proto

string

Yes

The protocol type of the traffic in the access control policy. Valid values:

-   **ANY** (any protocol)
    
-   **TCP**
    
-   **UDP**
    
-   **ICMP**
    

**Note**

If the traffic direction is \`out\` and the destination is a domain-based threat intelligence or cloud service address book, you can set the protocol only to \`TCP\`. The supported applications are HTTP, HTTPS, SMTP, SMTPS, and SSL.

ANY

Source

string

Yes

The source address in the access control policy. Valid values:

-   If \`SourceType\` is \`net\`, set this parameter to the source CIDR block.
    
    Example: 1.1.XX.XX/24
    
-   If \`SourceType\` is \`group\`, set this parameter to the name of the source address book.
    
    Example: db\_group
    
-   If \`SourceType\` is \`location\`, set this parameter to the source region.
    
    Example: \["BJ11", "ZB"\]
    

**Note**

For more information about region codes, see [Region codes](/help/en/cloud-firewall/area-codes).

192.0.XX.XX/24

SourceType

string

Yes

The type of the source address in the access control policy. Valid values:

-   **net**: source CIDR block
    
-   **group**: source address book
    
-   **location**: source region
    

net

NewOrder

string

Yes

The priority of the access control policy. The priority starts from 1. A smaller value indicates a higher priority.

1

DestPortType

string

No

The type of the destination port for the traffic in the access control policy.

Valid values:

-   **port**: port
    
-   **group**: port address book
    

port

DestPortGroup

string

No

The name of the destination port address book for the traffic in the access control policy.

**Note**

If you set \`DestPortType\` to \`group\`, you must specify this parameter.

my\_port\_group

Release

string

No

The status of the access control policy. By default, the policy is enabled after it is created. Valid values:

-   **true**: enables the access control policy
    
-   **false**: disables the access control policy
    

true

IpVersion

string

No

The IP version supported.

Valid values:

-   **4**: IPv4
    
-   **6**: IPv6
    

6

ApplicationNameList

array

No

The application types that the access control policy supports.

string

No

The application type that the access control policy supports. Valid values:

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
    
-   **SSL\_No\_Cert**
    
-   **SSL**
    
-   **VNC**
    
-   **ANY** (all application types)
    

**Note**

The available application types depend on the protocol type (\`Proto\`). If you set \`Proto\` to \`TCP\`, you can set \`ApplicationNameList\` to any of the listed application types. Use the \`\["HTTP","HTTPS",...\]\` format. If you set \`Proto\` to \`UDP\`, \`ICMP\`, or \`ANY\`, you can set \`ApplicationNameList\` only to \`ANY\`. Specify either \`ApplicationNameList\` or \`ApplicationName\`. If you specify both \`ApplicationNameList\` and \`ApplicationName\`, \`ApplicationNameList\` takes precedence.

\["ANY"\]

RepeatType

string

No

The recurrence type for the policy's effective period. Valid values:

-   **Permanent** (default): always
    
-   **None**: one-time
    
-   **Daily**: daily
    
-   **Weekly**: weekly
    
-   **Monthly**: monthly
    

**Valid values:**

-   Daily :
    
    daily
    
-   Monthly :
    
    monthly
    
-   Permanent :
    
    always
    
-   Weekly :
    
    weekly
    
-   None :
    
    one-time
    

Permanent

RepeatDays

array

No

The days of the week or month when the policy is active.

-   If \`RepeatType\` is \`Permanent\`, \`None\`, or \`Daily\`, leave this parameter empty. Example: \[\]
    
-   This parameter is required if \`RepeatType\` is \`Weekly\`. Example: \[0, 6\]
    

**Note**

If you set \`RepeatType\` to \`Weekly\`, the values in \`RepeatDays\` cannot be duplicates.

-   This parameter is required if \`RepeatType\` is \`Monthly\`. Example: \[1, 31\]
    

**Note**

If you set \`RepeatType\` to \`Monthly\`, the values in \`RepeatDays\` cannot be duplicates.

integer

No

The day of the week or month when the policy is active.

**Note**

If \`RepeatType\` is \`Weekly\`, valid values are 0 to 6. The week starts on Sunday. If \`RepeatType\` is \`Monthly\`, valid values are 1 to 31.

1

RepeatStartTime

string

No

The start time of the recurrence. Example: 08:00. The time must be on the hour or half-hour, and at least 30 minutes before the end time.

**Note**

If \`RepeatType\` is \`Permanent\` or \`None\`, leave this parameter empty. This parameter is required if \`RepeatType\` is \`Daily\`, \`Weekly\`, or \`Monthly\`.

08:00

RepeatEndTime

string

No

The end time of the recurrence. Example: 23:30. The time must be on the hour or half-hour, and at least 30 minutes after the start time.

**Note**

If \`RepeatType\` is \`Permanent\` or \`None\`, leave this parameter empty. This parameter is required if \`RepeatType\` is \`Daily\`, \`Weekly\`, or \`Monthly\`.

23:30

StartTime

integer

No

The time when the policy becomes effective. This is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes before the end time.

**Note**

If \`RepeatType\` is \`Permanent\`, leave this parameter empty. This parameter is required if \`RepeatType\` is \`None\`, \`Daily\`, \`Weekly\`, or \`Monthly\`.

1694761200

EndTime

integer

No

The time when the policy becomes ineffective. This is a UNIX timestamp. The time must be on the hour or half-hour, and at least 30 minutes after the start time.

**Note**

If \`RepeatType\` is \`Permanent\`, leave this parameter empty. This parameter is required if \`RepeatType\` is \`None\`, \`Daily\`, \`Weekly\`, or \`Monthly\`.

1694764800

DomainResolveType

string

No

The domain name resolution method for the access control policy. Valid values:

-   **FQDN**: based on FQDN
    
-   **DNS**: based on dynamic DNS resolution
    
-   **FQDN\_AND\_DNS**: based on FQDN and dynamic DNS resolution
    

FQDN

## Response elements

**Element**

**Type**

**Description**

**Example**

object

AclUuid

string

The unique ID of the access control policy for the Internet firewall.

00281255-d220-4db1-8f4f-c4df221ad84c

RequestId

string

The ID of the request.

CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D

## Examples

Success response

`JSON` format

```
{
  "AclUuid": "00281255-d220-4db1-8f4f-c4df221ad84c",
  "RequestId": "CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ErrorAddressCountExceed

The maximum number of addresses is exceeded.

The maximum number of address is exceeded.

400

ErrorParametersSource

The source is invalid.

The source is invalid.

400

ErrorDomainResolve

An error occurred while resolving the domain.

An error occurred while resolving the domain.

400

ErrorParametersDirection

The direction is invalid.

The direction is invalid.

400

ErrorDBSelect

An error occurred while querying database.

An error occurred while querying database.

400

ErrorParameterIpVersion

The IP version is invalid.

The IP version is invalid.

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

ErrorParametersUid

The aliUid parameter is invalid.

The aliUid parameter is invalid.

400

ErrorAclDomainAnyCountExceed

The number of resolved domain names cannot exceed 200. ACL configuration can be continued for HTTP, HTTPS, SMTP, SMTPS, and SSL applications.

The domain name is resolved to more than 200 IP addresses. We recommend that you set Application in your access control policy to HTTPS, HTTPS, SMTP, SMTPS, or SSL.

400

ErrorParametersGroupPort

The group port is invalid.

The group port is invalid.

400

ErrorParametersFtpNotSupport

domain destination not support ftp.

FTP application is not supported when the policy destination is a domain name

400

ErrorAclExtendedCountExceed

ACL or extended ACL rules are not matched.

The quota for access control policies or extra access control policies is exhausted.

400

ErrorParametersDestinationCount

Exceeding the number of countries in a single ACL.

Exceeds the number of selected areas for one ACL. It is recommended to split it into multiple ACLs.

400

ErrorSrcMand

Source is mandatory for this action.

This operation requires the specified source.

400

ErrorEmptyDomainResolveType

Empty DomainResolveType only support HTTP/HTTPS/SSL/SMTP/SMTPS apps.

Empty domain name resolution mode is not supported.

400

ErrorAddressGroupNotExist

The address group does not exist.

The address group does not exist.

400

ErrorParametersApplicationNameList

Specified parameter ApplicationNameList is not valid.

Specified parameter ApplicationNameList is not valid.

400

ErrorParametersApplicationName

Specified parameter ApplicationName is not valid.

Specified parameter ApplicationName is not valid.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/AddControlPolicy#workbench-doc-change-demo) for a complete list.
