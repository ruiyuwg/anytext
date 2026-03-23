You can use ALIYUN::SLB::Listener to create a Server Load Balancer (SLB) listener.

## Syntax

```
 {
  "Type": "ALIYUN::SLB::Listener",
  "Properties": {
    "MasterSlaveServerGroupId": String,
    "AclStatus": String,
    "Protocol": String,
    "AclId": String,
    "ServerCertificateId": String,
    "HealthCheck": Map,
    "RequestTimeout": Integer,
    "IdleTimeout": Integer,
    "ListenerPort": Integer,
    "HttpConfig": Map,
    "Bandwidth": Integer,
    "AclType": String,
    "BackendServerPort": Integer,
    "Scheduler": String,
    "LoadBalancerId": String,
    "CACertificateId": String,
    "Persistence": Map,
    "VServerGroupId": String,
    "Description": String,
    "PortRange": List,
    "StartListener": Boolean,
    "EnableHttp2": String,
    "Gzip": String,
    "TLSCipherPolicy": String,
    "AclIds": List,
    "ProxyProtocolV2Enabled": Boolean,
    "ConnectionDrainTimeout": Integer,
    "Tags": List,
    "FullNatEnabled": Boolean,
    "ConnectionDrain": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

MasterSlaveServerGroupId

String

No

No

The ID of the primary/secondary server group.

None

AclStatus

String

No

Yes

Specifies whether to enable access control.

Valid values:

-   on (default): Enables access control.
    
-   off: Disables access control.
    

EnableHttp2

String

No

Yes

Specifies whether to enable HTTP/2.

Valid values:

-   on: Enables HTTP/2.
    
-   off: Disables HTTP/2.
    

AclId

String

No

Yes

The ID of the access control policy group attached to the listener.

This parameter is required when AclStatus is set to on.

AclType

String

No

Yes

The type of the access control policy.

Valid values:

-   white: Forwards only requests from the IP addresses or CIDR blocks specified in the selected access control policy group. A whitelist is suitable for applications that allow access only from specific IP addresses. Using a whitelist carries risks. If you set a whitelist, only IP addresses in the whitelist can access the SLB listener. If you enable a whitelist but do not add any IP addresses to the policy group, the SLB listener does not forward any requests.
    
-   black: Blocks all requests from the IP addresses or CIDR blocks specified in the selected access control policy group. A blacklist is suitable for scenarios where you want to block access only from specific IP addresses. If you enable a blacklist but do not add any IP addresses to the policy group, the SLB listener forwards all requests. This parameter is required when AclStatus is set to on.
    

Protocol

String

Yes

No

The network protocol.

Valid values:

-   http
    
-   https
    
-   tcp
    
-   udp
    

ListenerPort

Integer

Yes

No

The frontend port used by the SLB instance.

Value range: 1 to 65,535.

Bandwidth

Integer

Yes

Yes

The peak bandwidth of the listener.

Value range: -1 or 1 to 1,000.

Unit: Mbps.

Notes:

-   For a public-facing instance that uses the pay-by-bandwidth billing method, the sum of the peak bandwidth values of all listeners cannot exceed the bandwidth value specified when you created the SLB instance. You cannot set the bandwidth of a listener to -1.
    
-   For a public-facing instance that uses the pay-by-traffic billing method, you can set the bandwidth of a listener to -1. This value indicates that the bandwidth is not limited.
    

BackendServerPort

Integer

No

No

The backend port used by the SLB instance.

Value range: 1 to 65,535.

FullNatEnabled

Boolean

No

Yes

When full-NAT mode is enabled, backend servers can act as clients to access external resources.

Default value: false.

Note: This parameter is valid only for TCP and UDP listeners.

LoadBalancerId

String

Yes

No

The ID of the SLB instance.

None

HealthCheck

Map

No

Yes

The health check settings.

For more information, see [HealthCheck properties](#section-2za-snc-vkm).

Persistence

Map

No

Yes

Persists related parameters.

For more information, see [Persistence properties](#section-1bw-bgv-atk).

Scheduler

String

No

No

The scheduling algorithm.

Valid values:

-   wrr (default): Backend servers with higher weights receive more requests.
    
-   wlc: Requests are distributed to backend servers in sequence.
    

CACertificateId

String

No

No

The ID of the CA certificate.

This parameter is valid only for the HTTPS protocol.

ServerCertificateId

String

No

Yes

The ID of the server certificate.

This parameter is required and is valid only for the HTTPS protocol.

VServerGroupId

String

No

Yes

The ID of the server group.

None

RequestTimeout

Integer

No

No

The request timeout period.

Value range: 1 to 180.

Unit: seconds.

IdleTimeout

Integer

No

No

The idle connection timeout period.

Value range: 1 to 60.

Unit: seconds.

HttpConfig

Map

No

No

Used to configure the HTTP protocol.

For more information, see [HttpConfig properties](#section-iz0-jz0-x1b).

Description

String

No

No

The description of the listener.

The length must be 1 to 80 characters. It can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

PortRange

List

No

No

The listening port range.

Currently, only listening on all ports is supported. This means StartPort must be 1 and EndPort must be 65,535.

For more information, see [PortRange properties](#section-e47-s0b-2es).

StartListener

Boolean

No

No

Specifies whether to start the listener.

Valid values:

-   true (default): Starts the listener.
    
-   false: Does not start the listener.
    

Gzip

String

No

Yes

Specifies whether to enable Gzip compression to compress specific types of files.

Valid values:

-   true (default): Enabled.
    
-   False: The process does not start.
    

TLSCipherPolicy

String

No

Yes

The TLS security policy.

Each security policy contains the TLS versions and cipher suites that can be used for HTTPS.

**Note**

This parameter is valid when Protocol is set to `https`.

AclIds

List

No

Yes

A list of access control policy IDs to associate with the listener.

This parameter is required if the `AclStatus` parameter is set to `on`. AclIds has a higher priority than AclId.

ProxyProtocolV2Enabled

Boolean

No

Yes

Specifies whether to use the Proxy Protocol to pass client source IP addresses to backend servers.

Valid values:

-   **true**: Yes.
    
-   **false**: No.
    

ConnectionDrainTimeout

Integer

No

Yes

The timeout period for connection draining.

Unit: seconds.

Value range: **10 to 900**.

Tags

List

No

Yes

The list of tags.

For more information, see [Tags properties](/help/en/ros/developer-reference/aliyun-nlb-listener#section-ec7-4zh-mz8).

ConnectionDrain

String

No

Yes

Specifies whether to enable connection draining.

Valid values:

-   **on**: Yes.
    
-   **off**: No.
    

## HealthCheck syntax

```
"HealthCheck": {
  "Domain": String,
  "Interval": Integer,
  "URI": String,
  "HttpCode": String,
  "HealthyThreshold": Integer,
  "HealthCheckType": String,
  "Timeout": Integer,
  "UnhealthyThreshold": Integer,
  "Port": Integer,
  "Switch": String,
  "HealthCheckMethod": String,
  "Req": String,
  "Exp": String
}
```

## HealthCheck properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Domain

String

No

No

The domain name used for health checks.

Valid values:

-   $\_ip
    
-   A custom string that is 1 to 80 characters in length. It can contain letters, digits, hyphens (-), and periods (.).
    
-   empty
    

**Note**

If you set this parameter to $\_ip or leave it empty, SLB uses the private IP address of each backend server as the domain name for health checks.

Interval

Integer

No

No

The interval between health checks.

Value range: 1 to 5.

Unit: seconds.

URI

String

No

No

The URI used for health checks.

The value must be 1 to 80 characters in length. It must start with a forward slash (/). It can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&).

HttpCode

String

No

No

The HTTP status code.

Valid values:

-   http\_2xx (default)
    
-   http\_3xx
    
-   http\_4xx
    
-   http\_5xx
    

Separate multiple HTTP status codes with commas (,).

HealthyThreshold

Integer

No

No

The number of consecutive successful health checks required before a backend server is declared healthy. After a backend server is declared unhealthy, it must pass this number of consecutive health checks to be declared healthy again.

Value range: 1 to 10.

HealthCheckType

String

No

No

The health check type.

Valid values:

-   tcp
    
-   http
    

Timeout

Integer

No

No

The maximum timeout period for a health check response.

Value range: 1 to 50.

Unit: seconds.

**Note**

If the Timeout value is less than the Interval value, the Timeout value is ignored and the Interval value is used as the timeout period.

UnhealthyThreshold

Integer

No

No

The number of consecutive failed health checks required before a backend server is declared unhealthy. After a backend server is declared healthy, it must fail this number of consecutive health checks to be declared unhealthy.

Value range: 1 to 10.

Port

Integer

No

No

The port used for health checks.

Value range: 0 to 65,535.

Switch

String

No

No

Specifies whether to enable health checks.

Valid values:

-   on: Enables health checks.
    
-   off: Disables health checks.
    

**Note**

This parameter is currently valid only for the HTTP or HTTPS protocol. If you do not set Switch, health checks are disabled by default, unless you have configured health check items.

HealthCheckMethod

String

No

No

The health check method.

Valid values:

-   head
    
-   get
    

**Note**

This parameter is valid when Protocol is set to `https` or `http`, and Switch is set to on.

Req

String

No

No

The request string for a UDP listener health check. The string can contain only letters and digits.

The maximum length is 64 characters.

Exp

String

No

No

The response string for a UDP listener health check. The string can contain only letters and digits.

The maximum length is 64 characters.

## Persistence syntax

```
"Persistence": {
  "PersistenceTimeout": Integer,
  "CookieTimeout": Integer,
  "XForwardedFor": String,
  "XForwardedFor_SLBID": String,
  "XForwardedFor_proto": String,
  "XForwardedFor_SLBIP": String,
  "Cookie": String,
  "StickySession": String,
  "StickySessionType": String,
  "XForwardedFor_ClientSrcPort": String,
  "XForwardedFor_SLBPORT": String
}
```

## Persistence properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

StickySession

String

No

Yes

Specifies whether to enable session persistence.

Valid values:

-   on: Enables session persistence.
    
-   off: Disables session persistence.
    
    **Note**
    
    This parameter is valid only for the `HTTP` and `HTTPS` protocols.
    

PersistenceTimeout

Integer

No

Yes

The timeout period for connection persistence.

Value range: 0 to 1,000.

Default value: 0 (indicates shutdown).

Unit: seconds.

CookieTimeout

Integer

No

Yes

The timeout period of the cookie.

Value range: 1 to 86,400.

Unit: seconds.

**Note**

This parameter is required when StickySession is set to on and StickySessionType is set to insert.

XForwardedFor

String

No

Yes

Specifies whether to use the X-Forwarded-For header to retrieve the originating IP address of the client.

Valid values:

-   on: Uses the X-Forwarded-For header to retrieve the originating IP address of the client.
    
-   off (default): Does not use the X-Forwarded-For header to retrieve the originating IP address of the client.
    

XForwardedFor\_proto

String

No

Yes

Specifies whether to use the X-Forwarded-Proto header to retrieve the listener protocol of the SLB instance.

Valid values:

-   on: Uses the X-Forwarded-Proto header to retrieve the listener protocol of the SLB instance.
    
-   off (default): Does not use the X-Forwarded-Proto header to retrieve the listener protocol of the SLB instance.
    

XForwardedFor\_SLBID

String

No

Yes

Specifies whether to use the SLB-ID header to retrieve the ID of the SLB instance.

Valid values:

-   on: Uses the SLB-ID header to retrieve the ID of the SLB instance.
    
-   off (default): Does not use the SLB-ID header to retrieve the ID of the SLB instance.
    

XForwardedFor\_SLBIP

String

No

Yes

Whether the originating IP address of the client request is retrieved from the SLB-IP header field.

Valid values:

-   On: Obtain the originating IP address of the client request from the SLB-IP header field.
    
-   off (default): The client's originating IP address is not retrieved from the SLB-IP header field.
    

Cookie

String

No

Yes

The cookie configured on the server.

The value must be 1 to 200 characters in length and cannot start with a dollar sign ($). It can contain letters and digits, but cannot contain commas (,), semicolons (;), or spaces.

**Note**

This parameter is required when StickySession is set to on and StickySessionType is set to server.

StickySessionType

String

No

Yes

The method used to handle cookies.

Valid values:

-   insert: Inserts a cookie.
    
-   server: Rewrites a cookie.
    

**Note**

This parameter is required when StickySession is set to on.

XForwardedFor\_ClientSrcPort

String

No

Yes

Specifies whether to use the X-Forwarded-Client-srcport header to retrieve the port that the client uses to connect to the SLB instance.

Valid values:

-   on: Uses the X-Forwarded-Client-srcport header to retrieve the port that the client uses to connect to the SLB instance.
    
-   off (default): Does not use the X-Forwarded-Client-srcport header to retrieve the port that the client uses to connect to the SLB instance.
    

XForwardedFor\_SLBPORT

String

No

Yes

Specifies whether to use the X-Forwarded-Port header to retrieve the listening port of the SLB instance.

Valid values:

-   On: Retrieves the listener protocol used by the SLB instance from the X-Forwarded-Port header field.
    
-   off (default): Does not use the X-Forwarded-Port header to retrieve the listening port of the SLB instance.
    

## HttpConfig syntax

```
"HttpConfig": {
  "ForwardPort": Integer,
  "ListenerForward": String
}
```

## HttpConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ForwardPort

Integer

No

No

The port to which HTTP requests are forwarded for an HTTPS listener.

Value range: 1 to 65,535.

Default value: 443.

ListenerForward

String

No

No

Specifies whether to enable HTTP to HTTPS forwarding.

Valid values:

-   It is enabled.
    
-   off (default): disable.
    

## PortRange syntax

```
"PortRange": [
  {
    "StartPort": Integer,
    "EndPort": Integer
  }
]
```

## PortRange properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

StartPort

Integer

Yes

No

The start port.

Value: 1.

EndPort

Integer

Yes

No

The end port.

Value: 65,535.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags property

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

None

Value

String

No

No

The tag value.

None

## Return values

Fn::GetAtt

-   LoadBalancerId: The unique ID of the SLB instance.
    
-   ListenerPortsAndProtocol: The frontend ports and protocols used by the SLB instance.
    
-   Arn: The Alibaba Cloud Resource Name (ARN).
    

## Examples

### **Scenario 1: Create an SLB listener**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/listener-case1.yml&pageTitle=Create an SLB listener&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test SLB Listener
Parameters:
  SlbInstanceId:
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Type: String
Resources:
  Listener:
    Type: ALIYUN::SLB::Listener
    Properties:
      BackendServerPort: 8080
      Bandwidth: 50
      ListenerPort: 80
      LoadBalancerId:
        Ref: SlbInstanceId
      Protocol: https
      Scheduler: wrr
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test SLB Listener",
  "Parameters": {
    "SlbInstanceId": {
      "AssociationProperty": "ALIYUN::SLB::Instance::InstanceId",
      "Type": "String"
    }
  },
  "Resources": {
    "Listener": {
      "Type": "ALIYUN::SLB::Listener",
      "Properties": {
        "BackendServerPort": 8080,
        "Bandwidth": 50,
        "ListenerPort": 80,
        "LoadBalancerId": {
          "Ref": "SlbInstanceId"
        },
        "Protocol": "https",
        "Scheduler": "wrr"
      }
    }
  },
  "Outputs": {
  }
}
```

### **Scenario 2: Create an SLB listener with health checks**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/listener-case2.yml&pageTitle=Create an SLB listener with health checks&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test SLB Listener
Parameters:
  SlbInstanceId:
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Type: String
Resources:
  Listener:
    Type: ALIYUN::SLB::Listener
    Properties:
      ListenerPort: 80
      Bandwidth: 10
      HealthCheck:
        HttpCode: http_2xx,http_3xx,http_4xx,http_5xx
        HealthCheckType: http
        UnhealthyThreshold: 3
        Timeout: 5
        HealthyThreshold: 3
        Port: 80
        URI: /
        Interval: 5
      LoadBalancerId:
        Ref: SlbInstanceId
      BackendServerPort: 80
      Protocol: http
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test SLB Listener",
  "Parameters": {
    "SlbInstanceId": {
      "AssociationProperty": "ALIYUN::SLB::Instance::InstanceId",
      "Type": "String"
    }
  },
  "Resources": {
    "Listener": {
      "Type": "ALIYUN::SLB::Listener",
      "Properties": {
        "BackendServerPort": 8080,
        "Bandwidth": 50,
        "ListenerPort": 80,
        "LoadBalancerId": {
          "Ref": "SlbInstanceId"
        },
        "Protocol": "https",
        "Scheduler": "wrr"
      }
    }
  },
  "Outputs": {
  }
}
```

### **Scenario 3: Create a high-availability web service**

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/slb/listener-case3.yml&pageTitle=Create a high-availability web service&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Build a high-availability web service that includes dual-zone ECS instances, an SLB instance, and NAS mounts. The service supports automatic configuration synchronization and public network access.
  en: Constructing a highly available web service comprises dual availability zone
    ECS instances, a Load Balancer (SLB), Network Attached Storage (NAS) mounts, automatic
    configuration synchronization, and is accessible via the public internet.
Parameters:
  NasZone1:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description:
      zh-cn: Zone 1 must be different from Zone 2.
      en: Availability zone 1 must be different from Availability zone 2.
    Label:
      zh-cn: NAS Zone 1
      en: NAS Availability Zone1
  NasZone2:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description:
      zh-cn: Zone 2 must be different from Zone 1.
      en: Availability zone 2 must be different from Availability zone 1.
    Label:
      zh-cn: NAS Zone 2
      en: NAS Availability Zone2
  CommonName:
    Default: high-availability
    Type: String
  InstancePassword:
    Type: String
    Description:
      zh-cn: >-
        The logon password of the server. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      en: >-
        Server login password, Length 8~30, must contain three(Capital letters,
        lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special
        symbol in).
    MinLength: 8
    Label:
      zh-cn: Instance Password
      en: Instance Password
    AllowedPattern: '[0-9A-Za-z\_\-\&:;''<>,=%`~!@#\(\)\$\^\*\+\|\{\}\[\]\.\?\/]+$'
    NoEcho: true
    MaxLength: 30
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    ConstraintDescription:
      zh-cn: 'The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ()`~!@#$%^&*_-+=|{}[]:;''<>,.?/'
      en: >-
        Length 8~30, must contain three(Capital letters, lowercase letters,
        numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in).
  EcsInstanceType2:
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      SystemDiskCategory: cloud_essd
      InstanceChargeType: PostPaid
      ZoneId: '${Zone2}'
    Type: String
    Label:
      zh-cn: Instance Type of Zone 2
      en: Instance Type Of Availability Zone2
  Zone2:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description:
      zh-cn: Zone 2 must be different from Zone 1.
      en: Availability zone 2 must be different from Availability zone 1.
    Label:
      zh-cn: vSwitch Zone 2
      en: VSwitch Availability Zone2
  Zone1:
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    Type: String
    Description:
      zh-cn: Zone 1 must be different from Zone 2.
      en: Availability zone 1 must be different from Availability zone 2.
    Label:
      zh-cn: vSwitch Zone 1
      en: VSwitch Availability Zone1
  EcsInstanceType1:
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      SystemDiskCategory: cloud_essd
      InstanceChargeType: PostPaid
      ZoneId: '${Zone1}'
    Type: String
    Label:
      zh-cn: Instance Type of Zone 1
      en: Instance Type Of Availability Zone1
Rules:
  DifferentZones2:
    Assertions:
      - Assert:
          'Fn::Not':
            'Fn::Equals':
              - Ref: NasZone1
              - Ref: NasZone2
        AssertDescription: NAS Zones must be different
  DifferentZones1:
    Assertions:
      - Assert:
          'Fn::Not':
            'Fn::Equals':
              - Ref: Zone1
              - Ref: Zone2
        AssertDescription: ECS Zones must be different
Outputs:
  ECS1URL:
    Description: ECS 1 URL
    Value:
      'Fn::Sub':
        - >-
          https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}
        - InstanceID:
            'Fn::Select':
              - '0'
              - 'Fn::GetAtt':
                  - EcsInstanceGroup1
                  - InstanceIds
          region:
            Ref: 'ALIYUN::Region'
  FileSystemId1:
    Description:
      zh-cn: Master NAS
      en: Master NAS
    Value:
      'Fn::Sub':
        - 'https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}'
        - InstanceID:
            'Fn::GetAtt':
              - MasterFileSystem
              - FileSystemId
          region:
            Ref: 'ALIYUN::Region'
  ECS2URL:
    Description: ECS 2 URL
    Value:
      'Fn::Sub':
        - >-
          https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}
        - InstanceID:
            'Fn::Select':
              - '0'
              - 'Fn::GetAtt':
                  - EcsInstanceGroup1
                  - InstanceIds
          region:
            Ref: 'ALIYUN::Region'
  SlbIpAddress:
    Description:
      zh-cn: The public IP address exposed to the Internet.
      en: Public IP Addresses
    Value:
      'Fn::Sub':
        - 'http://${ServerAddress}'
        - ServerAddress:
            'Fn::GetAtt':
              - Slb
              - IpAddress
  FileSystemId2:
    Description:
      zh-cn: Secondary NAS
      en: Backup NAS
    Value:
      'Fn::Sub':
        - 'https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}'
        - InstanceID:
            'Fn::GetAtt':
              - BackupFileSystem
              - FileSystemId
          region:
            Ref: 'ALIYUN::Region'
  MountInfo1:
    Description:
      zh-cn: NAS mount directory 1 on the ECS instance
      en: NAS mounting directory 1 on ECS
    Value: '/nas_master'
  MountInfo2:
    Description:
      zh-cn: NAS mount directory 2 on the ECS instance
      en: NAS mounting directory 2 on ECS
    Value: '/nas_backup'
Resources:
  SlbListener:
    Type: 'ALIYUN::SLB::Listener'
    Properties:
      Protocol: http
      HealthCheck:
        HealthCheckType: http
        Interval: 2
        URI: /
        UnhealthyThreshold: 3
        HealthyThreshold: 3
        Timeout: 5
        HttpCode: 'http_2xx,http_3xx,http_4xx,http_5xx'
        Port: 80
      ListenerPort: 80
      Bandwidth: 10
      BackendServerPort: 80
      LoadBalancerId:
        Ref: Slb
    DependsOn:
      - Slb
  EcsSecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      SecurityGroupIngress:
        - Priority: 1
          PortRange: 80/80
          NicType: internet
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
      VpcId:
        Ref: EcsVpc
      SecurityGroupEgress:
        - Priority: 1
          PortRange: '-1/-1'
          DestCidrIp: 0.0.0.0/0
          NicType: internet
          IpProtocol: all
        - Priority: 1
          PortRange: '-1/-1'
          DestCidrIp: 0.0.0.0/0
          NicType: intranet
          IpProtocol: all
      SecurityGroupName:
        'Fn::Sub': '${CommonName}_sg'
  MasterNasMountTarget:
    Type: 'ALIYUN::NAS::MountTarget'
    Properties:
      NetworkType: Vpc
      FileSystemId:
        Ref: MasterFileSystem
      VpcId:
        Ref: EcsVpc
      VSwitchId:
        Ref: EcsVSwitch3
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
  EcsVSwitch4:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.4.0/24
      ZoneId:
        Ref: NasZone2
  MasterFileSystem:
    Type: 'ALIYUN::NAS::FileSystem'
    Properties:
      StorageType: Capacity
      ProtocolType: NFS
      VpcId:
        Ref: EcsVpc
      Description: MasterNAS
      ZoneId:
        Ref: NasZone1
  EcsVSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.2.0/24
      ZoneId:
        Ref: Zone2
  EcsVSwitch3:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_002'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.3.0/24
      ZoneId:
        Ref: NasZone1
  EcsVSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VSwitchName:
        'Fn::Sub': '${CommonName}_vsw_001'
      VpcId:
        Ref: EcsVpc
      CidrBlock: 192.168.1.0/24
      ZoneId:
        Ref: Zone1
  BackupFileSystem:
    Type: 'ALIYUN::NAS::FileSystem'
    Properties:
      StorageType: Capacity
      ProtocolType: NFS
      VpcId:
        Ref: EcsVpc
      Description: BackupNAS
      ZoneId:
        Ref: NasZone2
  BackupNasMountTarget:
    Type: 'ALIYUN::NAS::MountTarget'
    Properties:
      NetworkType: Vpc
      FileSystemId:
        Ref: BackupFileSystem
      VpcId:
        Ref: EcsVpc
      VSwitchId:
        Ref: EcsVSwitch4
      AccessGroupName: DEFAULT_VPC_GROUP_NAME
  EcsInstanceGroup1:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      SystemDiskCategory: cloud_essd
      VpcId:
        Ref: EcsVpc
      SecurityGroupId:
        Ref: EcsSecurityGroup
      SystemDiskSize: 40
      ImageId: aliyun_3_x64_20G_alibase_20230727.vhd
      SpotStrategy: SpotAsPriceGo
      IoOptimized: optimized
      VSwitchId:
        Ref: EcsVSwitch1
      Password:
        Ref: InstancePassword
      InstanceName:
        'Fn::Sub': '${CommonName}_ecs_001'
      InstanceType:
        Ref: EcsInstanceType1
      ZoneId:
        Ref: Zone1
      MaxAmount: 1
  EcsInstanceGroup2:
    Type: 'ALIYUN::ECS::InstanceGroup'
    Properties:
      SystemDiskCategory: cloud_essd
      VpcId:
        Ref: EcsVpc
      SecurityGroupId:
        Ref: EcsSecurityGroup
      SystemDiskSize: 40
      ImageId: aliyun_3_x64_20G_alibase_20230727.vhd
      SpotStrategy: SpotAsPriceGo
      IoOptimized: optimized
      VSwitchId:
        Ref: EcsVSwitch2
      Password:
        Ref: InstancePassword
      InstanceName:
        'Fn::Sub': '${CommonName}_ecs_002'
      InstanceType:
        Ref: EcsInstanceType2
      ZoneId:
        Ref: Zone2
      MaxAmount: 1
  EcsVpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      VpcName:
        'Fn::Sub': '${CommonName}_vpc'
      CidrBlock: 192.168.0.0/16
  SlbBackendServerAttachment:
    Type: 'ALIYUN::SLB::BackendServerAttachment'
    Properties:
      BackendServerList:
        'Fn::ListMerge':
          - 'Fn::GetAtt':
              - EcsInstanceGroup1
              - InstanceIds
          - 'Fn::GetAtt':
              - EcsInstanceGroup2
              - InstanceIds
      BackendServerWeightList:
        - 100
        - 100
      LoadBalancerId:
        Ref: Slb
  Slb:
    Type: 'ALIYUN::SLB::LoadBalancer'
    Properties:
      AddressType: internet
      LoadBalancerName:
        'Fn::Sub': '${CommonName}-slb'
      InstanceChargeType: PayByCLCU
      PayType: PayOnDemand
  InstanceRunCommand:
    Type: 'ALIYUN::ECS::RunCommand'
    Properties:
      CommandContent:
        'Fn::Sub': >-
          #!/bin/bash

          if [ ! -f .ros.provision ]; then
            echo "Name: High-availability web service with shared storage" > .ros.provision
          fi


          name=$(grep "^Name:" .ros.provision | awk -F':' '{print $2}' | sed -e
          's/^[[:space:]]*//' -e 's/[[:space:]]*$//')

          if [[ "$name" != "High-availability web service with shared storage" ]]; then
            echo "This instance has already been configured using the one-click deployment of the \"$name\" tutorial. You cannot use the one-click deployment of this tutorial."
            exit 0
          fi


          echo "#########################"

          echo "# Check Network"

          echo "#########################"

          ping -c 2 -W 2 aliyun.com > /dev/null

          if [[ $? -ne 0 ]]; then
            echo "The current instance cannot access the public network."
            exit 0
          fi


          if ! grep -q "^Step1: Prepare Environment$" .ros.provision; then
            echo "#########################"
            echo "# Prepare Environment"
            echo "#########################"
            systemctl status firewalld
            systemctl stop firewalld
            echo "Step1: Prepare Environment" >> .ros.provision
          else
            echo "#########################"
            echo "# Environment has been ready"
            echo "#########################"
          fi


          if ! grep -q "^Step2: Install Nginx and deploy service$"
          .ros.provision; then
            echo "#########################"
            echo "# Install Nginx"
            echo "#########################"
            sudo yum -y install nginx
            sudo wget -O /usr/share/nginx/html/index.html https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231013/jhgg/index.html
            sudo wget -O /usr/share/nginx/html/lipstick.png https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230925/zevs/lipstick.png
            sudo systemctl start nginx
            sudo systemctl enable nginx
            echo "Step2: Install Nginx and deploy service" >> .ros.provision
          else
            echo "#########################"
            echo "# Nginx has been installed"
            echo "#########################"
          fi


          if ! grep -q "^Step3: Mount to the ECS" .ros.provision; then
            echo "#########################"
            echo "# Mount to the ECS"
            echo "#########################"
            mkdir /nas_master
            mkdir /nas_backup
            sudo yum install -y nfs-utils
            sudo echo "options sunrpc tcp_slot_table_entries=128" >>  /etc/modprobe.d/sunrpc.conf
            sudo echo "options sunrpc tcp_max_slot_table_entries=128" >>  /etc/modprobe.d/sunrpc.conf
            sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${MasterNasMountTarget.MountTargetDomain}:/ /nas_master
            sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup
          
            sudo echo "${MasterNasMountTarget.MountTargetDomain}:/ /nas_master nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0" >> /etc/fstab
            
            sudo echo "${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0" >> /etc/fstab

            df -h | grep aliyun
          else
            echo "#########################"
            echo "# The ECS has been attached to the Nas"
            echo "#########################"
          fi


          if ! grep -q "^Step4: Shared file$" .ros.provision; then
            echo "#########################"
            echo "# Shared file"
            echo "#########################"
            sudo cp -Lvr /usr/share/nginx/html /nas_master
            sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
            echo "Step4: Shared file" >> .ros.provision
          else
            echo "#########################"
            echo "# File has been Shared"
            echo "#########################"
          fi


          if ! grep -q "^Step5: Install inotify-tools、rsync$" .ros.provision;
          then
            echo "#########################"
            echo "# Install inotify-tools, rsync"
            echo "#########################"
            sudo yum install -y inotify-tools rsync
            echo "Step6: Install inotify-tools, rsync" >> .ros.provision
          else
            echo "#########################"
            echo "# Inotify-tools has been installed"
            echo "#########################"
          fi

          if ! grep -q "^Step6: Install synchronization server$" .ros.provision;
          then
            echo "#########################"
            echo "# Install synchronization server"
            echo "#########################"
            sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231017/pftz/sync_nas.sh
            sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230925/wmaj/sync_check_switch.sh
            sudo chmod +x /etc/systemd/system/sync_nas.sh
            sudo chmod +x /etc/systemd/system/sync_check_switch.sh
            cat > /etc/systemd/system/sync-check-switch.service << \EOF
          [Unit]

          Description=Sync Check Switch

          After=network.target


          [Service]

          ExecStart=/etc/systemd/system/sync_check_switch.sh

          RestartSec=3

          Restart=always


          [Install]

          WantedBy=default.target

          EOF

            cat > /etc/systemd/system/sync-nas.service << \EOF
          [Unit]

          Description=Sync NAS Service

          After=network.target


          [Service]

          ExecStart=/etc/systemd/system/sync_nas.sh

          Restart=always

          RestartSec=3


          [Install]

          WantedBy=default.target

          EOF

            sudo systemctl daemon-reload
            sudo systemctl start sync-nas.service
            sudo systemctl enable sync-check-switch.service
            sudo systemctl start sync-check-switch.service
            sudo systemctl enable sync-nas.service
            echo "Step6: Install " >> .ros.provision
          else
            echo "#########################"
            echo "# Synchronization server has been installed"
            echo "#########################"
          fi
      Type: RunShellScript
      Sync: true
      InstanceIds:
        - Ref: EcsInstanceGroup1
        - Ref: EcsInstanceGroup2
      Timeout: '300'
Metadata:
  'ALIYUN::ROS::Interface':
    ParameterGroups:
      - Parameters:
          - Zone1
          - Zone2
          - NasZone1
          - NasZone2
        Label:
          default:
            zh-cn: Zone Configuration
            en: Availability Zone
      - Parameters:
          - EcsInstanceType1
          - EcsInstanceType2
          - InstancePassword
        Label:
          default:
            zh-cn: ECS Instance Configuration
            en: Instance Configure
    TemplateTags:
      - 'acs:technical-solution:high-availability-architecture:high-availability-web-service-with-shared-storage-tech_solu_12'
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Build a high-availability web service that includes dual-zone ECS instances, an SLB instance, and NAS mounts. The service supports automatic configuration synchronization and public network access.",
    "en": "Constructing a highly available web service comprises dual availability zone ECS instances, a Load Balancer (SLB), Network Attached Storage (NAS) mounts, automatic configuration synchronization, and is accessible via the public internet."
  },
  "Parameters": {
    "NasZone1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": {
        "zh-cn": "Zone 1 must be different from Zone 2.",
        "en": "Availability zone 1 must be different from Availability zone 2."
      },
      "Label": {
        "zh-cn": "NAS Zone 1",
        "en": "NAS Availability Zone1"
      }
    },
    "NasZone2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": {
        "zh-cn": "Zone 2 must be different from Zone 1.",
        "en": "Availability zone 2 must be different from Availability zone 1."
      },
      "Label": {
        "zh-cn": "NAS Zone 2",
        "en": "NAS Availability Zone2"
      }
    },
    "CommonName": {
      "Default": "high-availability",
      "Type": "String"
    },
    "InstancePassword": {
      "Type": "String",
      "Description": {
        "zh-cn": "The logon password of the server. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "en": "Server login password, Length 8~30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)."
      },
      "MinLength": 8,
      "Label": {
        "zh-cn": "Instance Password",
        "en": "Instance Password"
      },
      "AllowedPattern": "[0-9A-Za-z\\_\\-\\&:;'<>,=%`~!@#\\(\\)\\$\\^\\*\\+\\|\\{\\}\\[\\]\\.\\?\\/]+$",
      "NoEcho": true,
      "MaxLength": 30,
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "ConstraintDescription": {
        "zh-cn": "The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "en": "Length 8~30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)."
      }
    },
    "EcsInstanceType2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "SystemDiskCategory": "cloud_essd",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${Zone2}"
      },
      "Type": "String",
      "Label": {
        "zh-cn": "Instance Type of Zone 2",
        "en": "Instance Type Of Availability Zone2"
      }
    },
    "Zone2": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": {
        "zh-cn": "Zone 2 must be different from Zone 1.",
        "en": "Availability zone 2 must be different from Availability zone 1."
      },
      "Label": {
        "zh-cn": "vSwitch Zone 2",
        "en": "VSwitch Availability Zone2"
      }
    },
    "Zone1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Type": "String",
      "Description": {
        "zh-cn": "Zone 1 must be different from Zone 2.",
        "en": "Availability zone 1 must be different from Availability zone 2."
      },
      "Label": {
        "zh-cn": "vSwitch Zone 1",
        "en": "VSwitch Availability Zone1"
      }
    },
    "EcsInstanceType1": {
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "SystemDiskCategory": "cloud_essd",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${Zone1}"
      },
      "Type": "String",
      "Label": {
        "zh-cn": "Instance Type of Zone 1",
        "en": "Instance Type Of Availability Zone1"
      }
    }
  },
  "Rules": {
    "DifferentZones2": {
      "Assertions": [
        {
          "Assert": {
            "Fn::Not": {
              "Fn::Equals": [
                {
                  "Ref": "NasZone1"
                },
                {
                  "Ref": "NasZone2"
                }
              ]
            }
          },
          "AssertDescription": "NAS Zones must be different"
        }
      ]
    },
    "DifferentZones1": {
      "Assertions": [
        {
          "Assert": {
            "Fn::Not": {
              "Fn::Equals": [
                {
                  "Ref": "Zone1"
                },
                {
                  "Ref": "Zone2"
                }
              ]
            }
          },
          "AssertDescription": "ECS Zones must be different"
        }
      ]
    }
  },
  "Outputs": {
    "ECS1URL": {
      "Description": "ECS 1 URL",
      "Value": {
        "Fn::Sub": [
          "https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}",
          {
            "InstanceID": {
              "Fn::Select": [
                "0",
                {
                  "Fn::GetAtt": [
                    "EcsInstanceGroup1",
                    "InstanceIds"
                  ]
                }
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "FileSystemId1": {
      "Description": {
        "zh-cn": "Master NAS",
        "en": "Master NAS"
      },
      "Value": {
        "Fn::Sub": [
          "https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}",
          {
            "InstanceID": {
              "Fn::GetAtt": [
                "MasterFileSystem",
                "FileSystemId"
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "ECS2URL": {
      "Description": "ECS 2 URL",
      "Value": {
        "Fn::Sub": [
          "https://ecs.console.alibabacloud.com/#/server/region/${region}?instanceIds=${InstanceID}",
          {
            "InstanceID": {
              "Fn::Select": [
                "0",
                {
                  "Fn::GetAtt": [
                    "EcsInstanceGroup1",
                    "InstanceIds"
                  ]
                }
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "SlbIpAddress": {
      "Description": {
        "zh-cn": "The public IP address exposed to the Internet.",
        "en": "Public IP Addresses"
      },
      "Value": {
        "Fn::Sub": [
          "http://${ServerAddress}",
          {
            "ServerAddress": {
              "Fn::GetAtt": [
                "Slb",
                "IpAddress"
              ]
            }
          }
        ]
      }
    },
    "FileSystemId2": {
      "Description": {
        "zh-cn": "Secondary NAS",
        "en": "Backup NAS"
      },
      "Value": {
        "Fn::Sub": [
          "https://nas.console.alibabacloud.com/${region}/filesystem/${InstanceID}",
          {
            "InstanceID": {
              "Fn::GetAtt": [
                "BackupFileSystem",
                "FileSystemId"
              ]
            },
            "region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "MountInfo1": {
      "Description": {
        "zh-cn": "NAS mount directory 1 on the ECS instance",
        "en": "NAS mounting directory 1 on ECS"
      },
      "Value": "/nas_master"
    },
    "MountInfo2": {
      "Description": {
        "zh-cn": "NAS mount directory 2 on the ECS instance",
        "en": "NAS mounting directory 2 on ECS"
      },
      "Value": "/nas_backup"
    }
  },
  "Resources": {
    "SlbListener": {
      "Type": "ALIYUN::SLB::Listener",
      "Properties": {
        "Protocol": "http",
        "HealthCheck": {
          "HealthCheckType": "http",
          "Interval": 2,
          "URI": "/",
          "UnhealthyThreshold": 3,
          "HealthyThreshold": 3,
          "Timeout": 5,
          "HttpCode": "http_2xx,http_3xx,http_4xx,http_5xx",
          "Port": 80
        },
        "ListenerPort": 80,
        "Bandwidth": 10,
        "BackendServerPort": 80,
        "LoadBalancerId": {
          "Ref": "Slb"
        }
      },
      "DependsOn": [
        "Slb"
      ]
    },
    "EcsSecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "SecurityGroupIngress": [
          {
            "Priority": 1,
            "PortRange": "80/80",
            "NicType": "internet",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ],
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupEgress": [
          {
            "Priority": 1,
            "PortRange": "-1/-1",
            "DestCidrIp": "0.0.0.0/0",
            "NicType": "internet",
            "IpProtocol": "all"
          },
          {
            "Priority": 1,
            "PortRange": "-1/-1",
            "DestCidrIp": "0.0.0.0/0",
            "NicType": "intranet",
            "IpProtocol": "all"
          }
        ],
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}_sg"
        }
      }
    },
    "MasterNasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "NetworkType": "Vpc",
        "FileSystemId": {
          "Ref": "MasterFileSystem"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "VSwitchId": {
          "Ref": "EcsVSwitch3"
        },
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME"
      }
    },
    "EcsVSwitch4": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.4.0/24",
        "ZoneId": {
          "Ref": "NasZone2"
        }
      }
    },
    "MasterFileSystem": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "StorageType": "Capacity",
        "ProtocolType": "NFS",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "Description": "MasterNAS",
        "ZoneId": {
          "Ref": "NasZone1"
        }
      }
    },
    "EcsVSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.2.0/24",
        "ZoneId": {
          "Ref": "Zone2"
        }
      }
    },
    "EcsVSwitch3": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_002"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.3.0/24",
        "ZoneId": {
          "Ref": "NasZone1"
        }
      }
    },
    "EcsVSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": {
          "Fn::Sub": "${CommonName}_vsw_001"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "CidrBlock": "192.168.1.0/24",
        "ZoneId": {
          "Ref": "Zone1"
        }
      }
    },
    "BackupFileSystem": {
      "Type": "ALIYUN::NAS::FileSystem",
      "Properties": {
        "StorageType": "Capacity",
        "ProtocolType": "NFS",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "Description": "BackupNAS",
        "ZoneId": {
          "Ref": "NasZone2"
        }
      }
    },
    "BackupNasMountTarget": {
      "Type": "ALIYUN::NAS::MountTarget",
      "Properties": {
        "NetworkType": "Vpc",
        "FileSystemId": {
          "Ref": "BackupFileSystem"
        },
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "VSwitchId": {
          "Ref": "EcsVSwitch4"
        },
        "AccessGroupName": "DEFAULT_VPC_GROUP_NAME"
      }
    },
    "EcsInstanceGroup1": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "SystemDiskCategory": "cloud_essd",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        },
        "SystemDiskSize": 40,
        "ImageId": "aliyun_3_x64_20G_alibase_20230727.vhd",
        "SpotStrategy": "SpotAsPriceGo",
        "IoOptimized": "optimized",
        "VSwitchId": {
          "Ref": "EcsVSwitch1"
        },
        "Password": {
          "Ref": "InstancePassword"
        },
        "InstanceName": {
          "Fn::Sub": "${CommonName}_ecs_001"
        },
        "InstanceType": {
          "Ref": "EcsInstanceType1"
        },
        "ZoneId": {
          "Ref": "Zone1"
        },
        "MaxAmount": 1
      }
    },
    "EcsInstanceGroup2": {
      "Type": "ALIYUN::ECS::InstanceGroup",
      "Properties": {
        "SystemDiskCategory": "cloud_essd",
        "VpcId": {
          "Ref": "EcsVpc"
        },
        "SecurityGroupId": {
          "Ref": "EcsSecurityGroup"
        },
        "SystemDiskSize": 40,
        "ImageId": "aliyun_3_x64_20G_alibase_20230727.vhd",
        "SpotStrategy": "SpotAsPriceGo",
        "IoOptimized": "optimized",
        "VSwitchId": {
          "Ref": "EcsVSwitch2"
        },
        "Password": {
          "Ref": "InstancePassword"
        },
        "InstanceName": {
          "Fn::Sub": "${CommonName}_ecs_002"
        },
        "InstanceType": {
          "Ref": "EcsInstanceType2"
        },
        "ZoneId": {
          "Ref": "Zone2"
        },
        "MaxAmount": 1
      }
    },
    "EcsVpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "VpcName": {
          "Fn::Sub": "${CommonName}_vpc"
        },
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "SlbBackendServerAttachment": {
      "Type": "ALIYUN::SLB::BackendServerAttachment",
      "Properties": {
        "BackendServerList": {
          "Fn::ListMerge": [
            {
              "Fn::GetAtt": [
                "EcsInstanceGroup1",
                "InstanceIds"
              ]
            },
            {
              "Fn::GetAtt": [
                "EcsInstanceGroup2",
                "InstanceIds"
              ]
            }
          ]
        },
        "BackendServerWeightList": [
          100,
          100
        ],
        "LoadBalancerId": {
          "Ref": "Slb"
        }
      }
    },
    "Slb": {
      "Type": "ALIYUN::SLB::LoadBalancer",
      "Properties": {
        "AddressType": "internet",
        "LoadBalancerName": {
          "Fn::Sub": "${CommonName}-slb"
        },
        "InstanceChargeType": "PayByCLCU",
        "PayType": "PayOnDemand"
      }
    },
    "InstanceRunCommand": {
      "Type": "ALIYUN::ECS::RunCommand",
      "Properties": {
        "CommandContent": {
          "Fn::Sub": "#!/bin/bash\nif [ ! -f .ros.provision ]; then\n  echo \"Name: High-availability web service with shared storage\" > .ros.provision\nfi\n\nname=$(grep \"^Name:\" .ros.provision | awk -F':' '{print $2}' | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')\nif [[ \"$name\" != \"High-availability web service with shared storage\" ]]; then\n  echo \"This instance has already been configured using the one-click deployment of the \\\"$name\\\" tutorial. You cannot use the one-click deployment of this tutorial.\"\n  exit 0\nfi\n\necho \"#########################\"\necho \"# Check Network\"\necho \"#########################\"\nping -c 2 -W 2 aliyun.com > /dev/null\nif [[ $? -ne 0 ]]; then\n  echo \"The current instance cannot access the public network.\"\n  exit 0\nfi\n\nif ! grep -q \"^Step1: Prepare Environment$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Prepare Environment\"\n  echo \"#########################\"\n  systemctl status firewalld\n  systemctl stop firewalld\n  echo \"Step1: Prepare Environment\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Environment has been ready\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step2: Install Nginx and deploy service$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install Nginx\"\n  echo \"#########################\"\n  sudo yum -y install nginx\n  sudo wget -O /usr/share/nginx/html/index.html https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231013/jhgg/index.html\n  sudo wget -O /usr/share/nginx/html/lipstick.png https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230925/zevs/lipstick.png\n  sudo systemctl start nginx\n  sudo systemctl enable nginx\n  echo \"Step2: Install Nginx and deploy service\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Nginx has been installed\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step3: Mount to the ECS\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Mount to the ECS\"\n  echo \"#########################\"\n  mkdir /nas_master\n  mkdir /nas_backup\n  sudo yum install -y nfs-utils\n  sudo echo \"options sunrpc tcp_slot_table_entries=128\" >>  /etc/modprobe.d/sunrpc.conf\n  sudo echo \"options sunrpc tcp_max_slot_table_entries=128\" >>  /etc/modprobe.d/sunrpc.conf\n  sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${MasterNasMountTarget.MountTargetDomain}:/ /nas_master\n  sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport ${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup\n\n  sudo echo \"${MasterNasMountTarget.MountTargetDomain}:/ /nas_master nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0\" >> /etc/fstab\n  \n  sudo echo \"${BackupNasMountTarget.MountTargetDomain}:/ /nas_backup nfs vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,_netdev,noresvport 0 0\" >> /etc/fstab\n\n  df -h | grep aliyun\nelse\n  echo \"#########################\"\n  echo \"# The ECS has been attached to the Nas\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step4: Shared file$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Shared file\"\n  echo \"#########################\"\n  sudo cp -Lvr /usr/share/nginx/html /nas_master\n  sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak\n  echo \"Step4: Shared file\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# File has been Shared\"\n  echo \"#########################\"\nfi\n\nif ! grep -q \"^Step5: Install inotify-tools, rsync$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install inotify-tools, rsync\"\n  echo \"#########################\"\n  sudo yum install -y inotify-tools rsync\n  echo \"Step6: Install inotify-tools, rsync\" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Inotify-tools has been installed\"\n  echo \"#########################\"\nfi\nif ! grep -q \"^Step6: Install synchronization server$\" .ros.provision; then\n  echo \"#########################\"\n  echo \"# Install synchronization server\"\n  echo \"#########################\"\n  sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20231017/pftz/sync_nas.sh\n  sudo wget -P /etc/systemd/system/ https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20230925/wmaj/sync_check_switch.sh\n  sudo chmod +x /etc/systemd/system/sync_nas.sh\n  sudo chmod +x /etc/systemd/system/sync_check_switch.sh\n  cat > /etc/systemd/system/sync-check-switch.service << \\EOF\n[Unit]\nDescription=Sync Check Switch\nAfter=network.target\n\n[Service]\nExecStart=/etc/systemd/system/sync_check_switch.sh\nRestartSec=3\nRestart=always\n\n[Install]\nWantedBy=default.target\nEOF\n\n  cat > /etc/systemd/system/sync-nas.service << \\EOF\n[Unit]\nDescription=Sync NAS Service\nAfter=network.target\n\n[Service]\nExecStart=/etc/systemd/system/sync_nas.sh\nRestart=always\nRestartSec=3\n\n[Install]\nWantedBy=default.target\nEOF\n\n  sudo systemctl daemon-reload\n  sudo systemctl start sync-nas.service\n  sudo systemctl enable sync-check-switch.service\n  sudo systemctl start sync-check-switch.service\n  sudo systemctl enable sync-nas.service\n  echo \"Step6: Install \" >> .ros.provision\nelse\n  echo \"#########################\"\n  echo \"# Synchronization server has been installed\"\n  echo \"#########################\"\nfi"
        },
        "Type": "RunShellScript",
        "Sync": true,
        "InstanceIds": [
          {
            "Ref": "EcsInstanceGroup1"
          },
          {
            "Ref": "EcsInstanceGroup2"
          }
        ],
        "Timeout": "300"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "Zone1",
            "Zone2",
            "NasZone1",
            "NasZone2"
          ],
          "Label": {
            "default": {
              "zh-cn": "Zone Configuration",
              "en": "Availability Zone"
            }
          }
        },
        {
          "Parameters": [
            "EcsInstanceType1",
            "EcsInstanceType2",
            "InstancePassword"
          ],
          "Label": {
            "default": {
              "zh-cn": "ECS Instance Configuration",
              "en": "Instance Configure"
            }
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:high-availability-architecture:high-availability-web-service-with-shared-storage-tech_solu_12"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [public templates that contain this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::SLB::Listener).
