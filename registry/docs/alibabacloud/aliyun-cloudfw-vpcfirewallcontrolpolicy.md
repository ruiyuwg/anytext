The ALIYUN::CLOUDFW::VpcFirewallControlPolicy resource type adds access control policies to specified VPC firewall policy groups.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::VpcFirewallControlPolicy",
  "Properties": {
    "Destination": String,
    "ApplicationName": String,
    "Description": String,
    "SourceType": String,
    "DestPort": String,
    "AclAction": String,
    "Lang": String,
    "DestinationType": String,
    "VpcFirewallId": String,
    "Source": String,
    "DestPortType": String,
    "Proto": String,
    "RegionId": String,
    "NewOrder": String,
    "DestPortGroup": String,
    "Release": Boolean,
    "RepeatType": String,
    "StartTime": Integer,
    "DomainResolveType": String,
    "RepeatEndTime": String,
    "RepeatDays": List,
    "EndTime": Integer,
    "RepeatStartTime": String,
    "ApplicationNameList": List,
    "MemberUid": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

AclAction

String

Yes

Yes

The action that Cloud Firewall performs on traffic in a VPC firewall access control policy.

Valid values:

-   accept: Allow.
    
-   drop: reject.
    
-   Log: Monitor.
    

ApplicationName

String

No

Yes

The application type that the VPC firewall access control policy supports.

Valid values:

-   FTP
    
-   HTTP
    
-   HTTPS
    
-   MySQL
    
-   SMTP
    
-   SMTPS
    
-   RDP
    
-   VNC
    
-   SSH
    
-   Redis
    
-   MQTT
    
-   MongoDB
    
-   Memcache
    
-   SSL
    
-   ANY (Indicates support for all application types)
    

Description

String

Yes

Yes

The description of the VPC firewall access control policy.

None

Destination

String

Yes

Yes

The destination address for traffic in the VPC firewall access control policy.

Valid values:

-   If DestinationType is set to net, specify the destination CIDR block. For example: 10.2.3.0/24.
    
-   If DestinationType is set to group, specify the destination address book name. For example: db\_group.
    
-   If DestinationType is set to domain, specify the destination domain name. For example: \*.aliyuncs.com.
    

DestinationType

String

Yes

Yes

The type of destination address for traffic in the VPC firewall access control policy.

Valid values:

-   net: Destination CIDR block.
    
-   group: Destination address book.
    
-   domain: Destination domain name.
    

NewOrder

String

Yes

No

The priority of the VPC firewall access control policy.

Priority values start from 1 and increment sequentially. A smaller value indicates a higher priority. 1 represents the highest priority.

**Note**

\-1 indicates the lowest priority.

Proto

String

Yes

No

The security protocol type for traffic in the VPC firewall access control policy.

Valid values:

-   ANY (Set to ANY if the specific protocol type is unknown)
    
-   TCP
    
-   UDP
    
-   ICMP
    

Source

String

Yes

Yes

The source address in the VPC firewall access control policy.

Valid values:

-   If SourceType is set to net, specify the source CIDR block. For example: 10.2.3.0/24.
    
-   If SourceType is set to group, specify the source address book name. For example: db\_group.
    

SourceType

String

Yes

Yes

The type of source address in the VPC firewall access control policy.

Valid values:

-   net: Source CIDR block.
    
-   group: Source address book.
    

VpcFirewallId

String

Yes

No

The ID of the VPC firewall access control policy group.

Valid values:

-   If the VPC firewall protects a Cloud Enterprise Network (CEN), specify the CEN instance ID. For example: cen-ervw5jbw1234\*\*\*\*\*.
    
-   If the VPC firewall protects an Express Connect, specify the VPC firewall instance ID. For example: vfw-a42bbb748c91234\*\*\*\*\*.
    

You can call [List all access control policy groups for VPC firewalls](/help/en/cloud-firewall/cloudfirewall/developer-reference/api-cloudfw-2017-12-07-describevpcfirewallaclgrouplist) to obtain the ID of the policy group for the VPC firewall access control policy.

DestPort

String

No

Yes

The destination port for traffic in the VPC firewall access control policy.

Set this parameter if DestPortType is set to port.

DestPortGroup

String

No

Yes

The destination port address book name for traffic in the VPC firewall access control policy.

Specify this parameter if DestPortType is set to group.

DestPortType

String

No

Yes

The type of destination port for traffic in the VPC firewall access control policy.

Valid values:

-   port: Port.
    
-   group: Port address book.
    

Lang

String

No

Yes

The language type for requests and responses.

Valid values:

-   zh: Chinese.
    
-   en: English.
    

RegionId

String

No

No

Region ID.

Valid values:

-   cn-hangzhou (Default): Hangzhou.
    
-   ap-southeast-1: Singapore.
    

Release

Boolean

No

No

The enabled status of the access control policy.

The policy is enabled by default after creation. Valid values:

-   **true**: Enables the access control policy.
    
-   **false**: Disables the access control policy.
    

RepeatType

String

No

No

The repeat type for the policy validity period of the access control policy.

Valid values:

-   **Permanent** (Default): Always.
    
-   **None**: Specifies a single time.
    
-   **Daily**: Every day
    
-   **Weekly**: Weekly.
    
-   **Monthly**: Monthly.
    

StartTime

Integer

No

No

The start time for the policy validity period of the access control policy.

Use UNIX timestamp format in seconds. The time must be on the hour or half-hour, and at least 30 minutes earlier than the end time.

**Note**

If RepeatType is Permanent, StartTime is empty. If RepeatType is None, Daily, Weekly, or Monthly, StartTime must have a value. Set the start time.

RepeatEndTime

String

No

No

The repeat end time for the policy validity period of the access control policy.

For example: 23:30. The time must be on the hour or half-hour, and at least 30 minutes later than the repeat start time.

**Note**

If RepeatType is Permanent or None, RepeatEndTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatEndTime must have a value. Set the repeat end time.

RepeatDays

List

No

No

The collection of repeat days for the policy validity period of the access control policy.

-   If RepeatType is `Permanent`, `None`, or `Daily`, RepeatDays is an empty collection. For example: \[\].
    
-   If RepeatType is Weekly, RepeatDays cannot be empty. For example: \[0, 6\].
    

**Note**

If RepeatType is set to Weekly, RepeatDays cannot contain duplicate values.

-   If RepeatType is `Monthly`, RepeatDays cannot be empty. For example: \[1, 31\].
    

**Note**

If RepeatType is set to Monthly, RepeatDays cannot contain duplicate values.

EndTime

Integer

No

No

The end time for the policy validity period of the access control policy.

Use UNIX timestamp format in seconds. The time must be on the hour or half-hour, and at least 30 minutes later than the start time.

**Note**

If RepeatType is Permanent, EndTime is empty. If RepeatType is None, Daily, Weekly, or Monthly, EndTime must have a value. Set the end time.

RepeatStartTime

String

No

No

The repeat start time for the policy validity period of the access control policy.

For example: 08:00. The time must be on the hour or half-hour, and at least 30 minutes earlier than the repeat end time.

**Note**

If RepeatType is Permanent or None, RepeatStartTime is empty. If RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value. Set the repeat start time.

DomainResolveType

String

No

No

The domain name resolution method for the access control policy.

Valid values:

-   FQDN: Based on FQDN.
    
-   DNS: Based on dynamic DNS resolution.
    
-   FQDN\_AND\_DNS: Based on FQDN and dynamic DNS resolution.
    

ApplicationNameList

List

No

No

Application name.

None

MemberUid

String

No

No

The UID of the Cloud Firewall member account.

None

## Return values

Fn::GetAtt

AclUuid: The unique ID of the access control policy.

## Example

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AclAction:
    AllowedValues:
    - accept
    - drop
    - log
    Description: 'The action that Cloud Firewall performs on the traffic. Valid values:

      accept: allows the traffic.

      drop: denies the traffic.

      log: monitors the traffic.'
    Type: String
  ApplicationName:
    AllowedValues:
    - ANY
    - FTP
    - HTTP
    - HTTPS
    - MySQL
    - SMTP
    - SMTPS
    - RDP
    - VNC
    - SSH
    - Redis
    - MQTT
    - MongoDB
    - Memcache
    - SSL
    Description: "The application type that the access control policy supports.\n\
      Valid values: \nANY (indicates that all application types are supported) \n\
      FTP \nHTTP \nHTTPS \nMySQL \nSMTP \nSMTPS \nRDP \nVNC \nSSH \nRedis \nMQTT \n\
      MongoDB \nMemcache \nSSL"
    Type: String
  Description:
    Description: The description of the access control policy.
    Type: String
  DestPort:
    Description: 'The destination port in the access control policy.

      Note This parameter must be specified if the DestPortType parameter is set to
      port.'
    Type: String
  DestPortGroup:
    Description: 'The address book of destination ports in the access control policy.

      Note This parameter must be specified if the DestPortType parameter is set to
      group.'
    Type: String
  DestPortType:
    AllowedValues:
    - group
    - port
    Description: 'The type of the destination port in the access control policy. Valid
      values:

      port: port

      group: address book'
    Type: String
  Destination:
    Description: 'The destination address in the access control policy.

      Set this parameter in the following way:

      If the DestinationType parameter is set to net, set the value to a Classless
      Inter-Domain Routing (CIDR) block.

      Example: 10.2.3.0/24.

      If the DestinationType parameter is set to group, set the value to the name
      of an address book.

      Example: db_group.

      If the DestinationType parameter is set to domain, set the value to a domain
      name.

      Example: *.aliyuncs.com.'
    Type: String
  DestinationType:
    AllowedValues:
    - domain
    - group
    - net
    Description: 'The type of the destination address in the access control policy.
      Valid values:

      net: CIDR block

      group: address book

      domain: domain name'
    Type: String
  Lang:
    AllowedValues:
    - en
    - zh
    Description: 'The natural language of the request and response. Valid values:

      zh: Chinese

      en: English'
    Type: String
  NewOrder:
    Description: 'The priority of the access control policy.

      The priority value starts from 1. A smaller priority value indicates a higher
      priority.

      Note The value of -1 indicates the lowest priority.'
    Type: String
  Proto:
    AllowedValues:
    - ANY
    - TCP
    - UDP
    - ICMP
    Description: The type of the security protocol in the access control policy.
    Type: String
  RegionId:
    AllowedValues:
    - cn-hangzhou
    - ap-southeast-1
    Default: cn-hangzhou
    Description: Region ID. Default to cn-hangzhou.
    Type: String
  Source:
    Description: 'The source address in the access control policy.

      If the SourceType parameter is set to net, set the value to a CIDR block. Example:
      10.2.3.0/24.

      If the SourceType parameter is set to group, set the value to the name of an
      address book. Example: db_group.'
    Type: String
  SourceType:
    AllowedValues:
    - group
    - net
    Description: 'The type of the source address in the access control policy. Valid
      values:

      net: CIDR block

      group: address book'
    Type: String
  VpcFirewallId:
    Description: 'The ID of the policy group to which you want to add the access control
      policy.

      If the VPC firewall is used to protect CEN, set the value to the ID of the CEN
      instance

      that the VPC firewall protects. Example: cen-ervw5jbw1234*****.

      If the VPC firewall is used to protect Express Connect, set the value to the
      ID of

      the VPC firewall instance. Example: vfw-a42bbb748c91234*****.

      Note You can call the DescribeVpcFirewallAclGroupList operation to query the
      ID of the policy group.'
    Type: String
Resources:
  VpcFirewallControlPolicy:
    Type: ALIYUN::CLOUDFW::VpcFirewallControlPolicy
    Properties:
      AclAction:
        Ref: AclAction
      ApplicationName:
        Ref: ApplicationName
      Description:
        Ref: Description
      DestPort:
        Ref: DestPort
      DestPortGroup:
        Ref: DestPortGroup
      DestPortType:
        Ref: DestPortType
      Destination:
        Ref: Destination
      DestinationType:
        Ref: DestinationType
      Lang:
        Ref: Lang
      NewOrder:
        Ref: NewOrder
      Proto:
        Ref: Proto
      RegionId:
        Ref: RegionId
      Source:
        Ref: Source
      SourceType:
        Ref: SourceType
      VpcFirewallId:
        Ref: VpcFirewallId
Outputs:
  AclUuid:
    Description: The unique ID of the access control policy.
    Value:
      Fn::GetAtt:
      - VpcFirewallControlPolicy
      - AclUuid
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Destination": {
      "Type": "String",
      "Description": "The destination address in the access control policy.\nSet this parameter in the following way:\nIf the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.\nExample: 10.2.3.0/24.\nIf the DestinationType parameter is set to group, set the value to the name of an address book.\nExample: db_group.\nIf the DestinationType parameter is set to domain, set the value to a domain name.\nExample: *.aliyuncs.com."
    },
    "ApplicationName": {
      "Type": "String",
      "Description": "The application type that the access control policy supports.\nValid values: \nANY (indicates that all application types are supported) \nFTP \nHTTP \nHTTPS \nMySQL \nSMTP \nSMTPS \nRDP \nVNC \nSSH \nRedis \nMQTT \nMongoDB \nMemcache \nSSL",
      "AllowedValues": [
        "ANY",
        "FTP",
        "HTTP",
        "HTTPS",
        "MySQL",
        "SMTP",
        "SMTPS",
        "RDP",
        "VNC",
        "SSH",
        "Redis",
        "MQTT",
        "MongoDB",
        "Memcache",
        "SSL"
      ]
    },
    "Description": {
      "Type": "String",
      "Description": "The description of the access control policy."
    },
    "SourceType": {
      "Type": "String",
      "Description": "The type of the source address in the access control policy. Valid values:\nnet: CIDR block\ngroup: address book",
      "AllowedValues": [
        "group",
        "net"
      ]
    },
    "DestPort": {
      "Type": "String",
      "Description": "The destination port in the access control policy.\nNote This parameter must be specified if the DestPortType parameter is set to port."
    },
    "AclAction": {
      "Type": "String",
      "Description": "The action that Cloud Firewall performs on the traffic. Valid values:\naccept: allows the traffic.\ndrop: denies the traffic.\nlog: monitors the traffic.",
      "AllowedValues": [
        "accept",
        "drop",
        "log"
      ]
    },
    "Lang": {
      "Type": "String",
      "Description": "The natural language of the request and response. Valid values:\nzh: Chinese\nen: English",
      "AllowedValues": [
        "en",
        "zh"
      ]
    },
    "DestinationType": {
      "Type": "String",
      "Description": "The type of the destination address in the access control policy. Valid values:\nnet: CIDR block\ngroup: address book\ndomain: domain name",
      "AllowedValues": [
        "domain",
        "group",
        "net"
      ]
    },
    "VpcFirewallId": {
      "Type": "String",
      "Description": "The ID of the policy group to which you want to add the access control policy.\nIf the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance\nthat the VPC firewall protects. Example: cen-ervw5jbw1234*****.\nIf the VPC firewall is used to protect Express Connect, set the value to the ID of\nthe VPC firewall instance. Example: vfw-a42bbb748c91234*****.\nNote You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group."
    },
    "Source": {
      "Type": "String",
      "Description": "The source address in the access control policy.\nIf the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.\nIf the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group."
    },
    "DestPortType": {
      "Type": "String",
      "Description": "The type of the destination port in the access control policy. Valid values:\nport: port\ngroup: address book",
      "AllowedValues": [
        "group",
        "port"
      ]
    },
    "Proto": {
      "Type": "String",
      "Description": "The type of the security protocol in the access control policy.",
      "AllowedValues": [
        "ANY",
        "TCP",
        "UDP",
        "ICMP"
      ]
    },
    "RegionId": {
      "Type": "String",
      "Description": "Region ID. Default to cn-hangzhou.",
      "AllowedValues": [
        "cn-hangzhou",
        "ap-southeast-1"
      ],
      "Default": "cn-hangzhou"
    },
    "NewOrder": {
      "Type": "String",
      "Description": "The priority of the access control policy.\nThe priority value starts from 1. A smaller priority value indicates a higher priority.\nNote The value of -1 indicates the lowest priority."
    },
    "DestPortGroup": {
      "Type": "String",
      "Description": "The address book of destination ports in the access control policy.\nNote This parameter must be specified if the DestPortType parameter is set to group."
    }
  },
  "Resources": {
    "VpcFirewallControlPolicy": {
      "Type": "ALIYUN::CLOUDFW::VpcFirewallControlPolicy",
      "Properties": {
        "Destination": {
          "Ref": "Destination"
        },
        "ApplicationName": {
          "Ref": "ApplicationName"
        },
        "Description": {
          "Ref": "Description"
        },
        "SourceType": {
          "Ref": "SourceType"
        },
        "DestPort": {
          "Ref": "DestPort"
        },
        "AclAction": {
          "Ref": "AclAction"
        },
        "Lang": {
          "Ref": "Lang"
        },
        "DestinationType": {
          "Ref": "DestinationType"
        },
        "VpcFirewallId": {
          "Ref": "VpcFirewallId"
        },
        "Source": {
          "Ref": "Source"
        },
        "DestPortType": {
          "Ref": "DestPortType"
        },
        "Proto": {
          "Ref": "Proto"
        },
        "RegionId": {
          "Ref": "RegionId"
        },
        "NewOrder": {
          "Ref": "NewOrder"
        },
        "DestPortGroup": {
          "Ref": "DestPortGroup"
        }
      }
    }
  },
  "Outputs": {
    "AclUuid": {
      "Description": "The unique ID of the access control policy.",
      "Value": {
        "Fn::GetAtt": [
          "VpcFirewallControlPolicy",
          "AclUuid"
        ]
      }
    }
  }
}
```
