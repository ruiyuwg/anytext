ALIYUN::CLOUDFW::ControlPolicy is used to add an access control policy.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::ControlPolicy",
  "Properties": {
    "ApplicationName": String,
    "DestPortType": String,
    "Direction": String,
    "Destination": String,
    "Description": String,
    "Proto": String,
    "AclAction": String,
    "Source": String,
    "SourceType": String,
    "DestinationType": String,
    "NewOrder": Integer,
    "DestPort": String,
    "RegionId": String,
    "DestPortGroup": String,
    "Release": Boolean,
    "RepeatType": String,
    "StartTime": Integer,
    "RepeatEndTime": String,
    "DomainResolveType": String,
    "IpVersion": String,
    "RepeatDays": List,
    "EndTime": Integer,
    "RepeatStartTime": String,
    "ApplicationNameList": List
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AclAction

String

Yes

Yes

The action that Cloud Firewall performs on the traffic.

Valid values:

-   accept: allows the traffic.
    
-   drop: denies the traffic.
    
-   log: monitors the traffic.
    

ApplicationName

String

No

Yes

The types of the applications that the access control policy supports.

Valid values:

-   ANY
    
    **Note**
    
    A value of ANY indicates that the access control policy is applied to all types of applications.
    
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
    

Description

String

Yes

Yes

The description of the access control policy.

None.

Destination

String

Yes

Yes

The destination address in the access control policy.

Valid values:

-   If you set DestinationType to net, the value of Destination is a destination CIDR block. Example: 10.10.XX.XX/24.
    
-   If you set DestinationType to group, the value of Destination is a destination address book name. Example: db\_group.
    
-   If you set DestinationType to domain, the value of Destination is a destination domain name. Example: \*.example.com.
    
-   If you set DestinationType to location, the value of Destination is a destination location code. Examples: `"BJ11" and "ZB"`.
    
    For more information about the location codes supported by Destination, see [Location codes](#section-157-7r8-ka4).
    

DestinationType

String

Yes

Yes

The type of the destination address in the access control policy.

Valid values:

-   net: destination CIDR block
    
-   group: destination address book
    
-   domain: destination domain name
    
-   location: destination location
    

Direction

String

Yes

No

The traffic direction to which the access control policy is applied.

Valid values:

-   in: inbound direction
    
-   out: outbound direction
    

NewOrder

Integer

Yes

Yes

The priority of the access control policy.

The number in the priority value starts from 1. A smaller positive value indicates a higher priority.

**Important**

A value of 1 indicates the highest priority. A value of -1 indicates the lowest priority.

Proto

String

Yes

Yes

The types of the protocols in the access control policy.

Valid values:

-   ANY
    
    **Note**
    
    You can set this property to ANY if you are not sure about the protocol types.
    
-   TCP
    
-   UDP
    
-   ICMP
    

Source

String

Yes

Yes

The source address in the access control policy.

Valid values:

-   If you set SourceType to net, the value of Source is a source CIDR block. Example: 10.10.XX.XX/24.
    
-   If you set SourceType to group, the value of Source is a source address book name. Example: db\_group.
    
-   If you set SourceType to location, the value of Source is a source location code. Examples: `"BJ11" and "ZB"`.
    
    For more information about the location codes supported by Source, see [Location codes](#section-157-7r8-ka4).
    

SourceType

String

Yes

Yes

The type of the source address in the access control policy.

Valid values:

-   net: source CIDR block
    
-   group: source address book
    
-   location: source location
    

DestPort

String

No

Yes

The destination port in the access control policy.

You must specify this property when DestPortType is set to port.

DestPortGroup

String

No

Yes

The name of the destination port address book in the access control policy.

You must specify this property when DestPortType is set to group.

DestPortType

String

No

Yes

The type of the destination port in the access control policy.

Valid values:

-   port: port
    
-   group: port address book
    

RegionId

String

No

No

The region ID.

Valid values:

-   cn-hangzhou (default)
    
-   ap-southeast-1
    

Release

Boolean

No

No

Specifies whether to enable the access control policy.

By default, an access control policy is enabled after it is created. Valid values:

-   **true**
    
-   **false**
    

RepeatType

String

No

No

The recurrence type of the access control policy.

Valid values:

-   **Permanent** (default): The policy takes effect all the time.
    
-   **None**: The policy takes effect for only once.
    
-   **Daily**: The policy takes effect on a daily basis.
    
-   **Weekly**: The policy takes effect on a weekly basis.
    
-   **Monthly**: The policy takes effect on a monthly basis.
    

StartTime

Integer

No

No

The point in time when the validity period of the access control policy starts.

The value is a timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.

**Note**

If RepeatType is set to Permanent, the value of StartTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, the value of StartTime must be a specified time point.

RepeatEndTime

String

No

No

The point in time when the recurrence of the access control policy ends.

Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.

**Note**

If RepeatType is set to Permanent or None, the value of RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, the value of RepeatEndTime must be a specified time point.

DomainResolveType

String

No

No

The domain name resolution method of the access control policy.

By default, an access control policy is enabled after it is created. Valid values:

-   **0**: fully qualified domain name (FQDN)-based resolution
    
-   **1**: Domain Name System (DNS)-based dynamic resolution
    
-   **2**: FQDN-based resolution and DNS-based dynamic resolution
    

IpVersion

String

No

No

The IP version of the asset that is protected by Cloud Firewall.

Valid values:

-   **4** (default): IPv4
    
-   **6**: IPv6
    

RepeatDays

List

No

No

The days of a week or of a month on which the access control policy takes effect.

-   If RepeatType is set to `Permanent`, `None`, or `Daily`, the value of RepeatDays is an empty list. Example: \[\].
    
-   If RepeatType is set to Weekly, RepeatDays must be specified. Example: \[0, 6\].
    

**Note**

The values specified for RepeatDays cannot be repeated if RepeatType is set to Weekly.

-   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example: \[1, 31\].
    

**Note**

The values specified for RepeatDays cannot be repeated if RepeatType is set to Monthly.

EndTime

Integer

No

No

The point in time when the validity period of the access control policy ends.

The value is a timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.

**Note**

If RepeatType is set to Permanent, the value of EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, the value of EndTime must be a specified time point.

RepeatStartTime

String

No

No

The point in time when the recurrence of the access control policy starts.

Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.

**Note**

If RepeatType is set to Permanent or None, the value of RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, the value of RepeatStartTime must be a specified time point.

ApplicationNameList

List

No

No

The application names.

None.

## Location codes

Categories of location codes

**Category**

**Code**

Locations in China

ZD

Locations outside China

ZB

Codes of locations in China

**Location**

**Code**

Beijing

BJ11

Tianjin

TJ12

Hebei

HB13

Shanxi

SX14

Liaoning

LN21

Jilin

JL22

Shanghai

SH31

Jiangsu

JS32

Zhejiang

ZJ33

Anhui

AH34

Fujian

FJ35

Jiangxi

JX36

Shandong

SD37

Henan

HN41

Hubei

HB42

Hunan

HN43

Guangdong

GD44

Hainan

HN46

Chongqing

CQ50

Sichuan

SC51

Guizhou

GZ52

Yunnan

YN53

Shaanxi

SX61

Gansu

GS62

Qinghai

QH63

Heilongjiang

HLJ23

Xizang

XZ54

Guangxi

GX45

Inner Mongolia

NMG15

Ningxia

NX64

Xinjiang

XJ65

Taiwan (China)

TW

Hong Kong (China)

HK

Macao (China)

MO

Codes of locations outside China

**Location**

**Code**

Asia (except China)

ZC

Europe

EU

Africa

AF

North America

NA

South America

LA

Oceania

OA

Antarctica

AQ

## Return values

Fn::GetAtt

AclUuid: the unique ID of the access control policy.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ControlPolicy:
    Type: ALIYUN::CLOUDFW::ControlPolicy
    Properties:
      ApplicationName:
        Ref: ApplicationName
      DestPortType:
        Ref: DestPortType
      Direction:
        Ref: Direction
      AclAction:
        Ref: AclAction
      Description:
        Ref: Description
      Proto:
        Ref: Proto
      Destination:
        Ref: Destination
      Source:
        Ref: Source
      DestinationType:
        Ref: DestinationType
      NewOrder:
        Ref: NewOrder
      DestPortGroup:
        Ref: DestPortGroup
      DestPort:
        Ref: DestPort
      RegionId:
        Ref: RegionId
      SourceType:
        Ref: SourceType
Parameters:
  ApplicationName:
    Type: String
    Description: 'Application types supported by the security policy. The following
      types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP,
      VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL. NOTE ANY indicates that the policy
      is applied to all types of applications.'
    AllowedValues:
    - ANY
    - HTTP
    - HTTPS
    - MQTT
    - Memcache
    - MongoDB
    - MySQL
    - RDP
    - Redis
    - SMTP
    - SMTPS
    - SSH
    - SSL
    - VNC
  DestPortType:
    Type: String
    Description: 'Security access control policy access destination port traffic type.
      port: Port group: port address book'
    AllowedValues:
    - group
    - port
  Direction:
    Type: String
    Description: 'Security access control traffic direction policies. in: internal
      and external traffic access control. out: within the flow of external access
      control'
    AllowedValues:
    - in
    - out
  AclAction:
    Type: String
    Description: 'Traffic access control policy set by the cloud of a firewall. accept:
      Release. drop: rejected. log: Observation'
    AllowedValues:
    - accept
    - drop
    - log
  Description:
    MinLength: 1
    Type: String
    Description: Security access control policy description information.
  Proto:
    Type: String
    Description: 'The type of security protocol for traffic access in the security
      access control policy. Can be set to ANY when you are not sure of the specific
      protocol type. Allowed values: ANY, TCP, UDP, ICMP'
    AllowedValues:
    - ANY
    - ICMP
    - TCP
    - UDP
  Destination:
    MinLength: 1
    Type: String
    Description: 'Security Access Control destination address policy. When DestinationType
      is net, Destination purpose CIDR. For example: 192.168.XX.XX/24. When DestinationType
      as a group, Destination for the purpose of the address book name. For example:
      db_group. When DestinationType for the domain, Destination for the purpose of
      a domain name. For example:. * example.com. When DestinationType as location,
      Destination area for the purpose (see below position encoding specific regions).
      For example: [ "BJ11", "ZB"]'
  Source:
    MinLength: 1
    Type: String
    Description: 'Security access control source address policy. When SourceType for
      the net, Source is the source CIDR. For example: 192.168.XX.XX/24. When SourceType
      as a group, Source name for the source address book. For example: db_group.
      When SourceType as location, Source source region (specific region position
      encoder see below). For example, [ "BJ11", "ZB"]'
  DestinationType:
    Type: String
    Description: 'Security Access Control destination address type of policy. net:
      Destination network segment (CIDR). group: destination address book. domain:
      The purpose domain. location: The purpose area'
    AllowedValues:
    - domain
    - group
    - location
    - net
  NewOrder:
    Type: Number
    Description: Security access control priority policy in force. Priority number
      increments sequentially from 1, lower the priority number, the higher the priority.
      Description -1 indicates the lowest priority.
    MinValue: -1
  DestPortGroup:
    Type: String
    Description: Security access control policy access traffic destination port address
      book name. Description DestPortType is group, set the item.
  DestPort:
    Type: String
    Description: Security access control policy access traffic destination port. Note
      When DestPortType to port, set the item.
  RegionId:
    Default: cn-hangzhou
    Type: String
    Description: Region ID. Default to cn-hangzhou.
    AllowedValues:
    - cn-hangzhou
    - ap-southeast-1
  SourceType:
    Type: String
    Description: 'Security access control source address type of policy. net: Source
      segment (CIDR). group: source address book. location: the source area'
    AllowedValues:
    - group
    - location
    - net
Outputs:
  AclUuid:
    Description: Security access control ID that uniquely identifies the policy.
    Value:
      Fn::GetAtt:
      - ControlPolicy
      - AclUuid
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ControlPolicy": {
      "Type": "ALIYUN::CLOUDFW::ControlPolicy",
      "Properties": {
        "ApplicationName": {
          "Ref": "ApplicationName"
        },
        "DestPortType": {
          "Ref": "DestPortType"
        },
        "Direction": {
          "Ref": "Direction"
        },
        "AclAction": {
          "Ref": "AclAction"
        },
        "Description": {
          "Ref": "Description"
        },
        "Proto": {
          "Ref": "Proto"
        },
        "Destination": {
          "Ref": "Destination"
        },
        "Source": {
          "Ref": "Source"
        },
        "DestinationType": {
          "Ref": "DestinationType"
        },
        "NewOrder": {
          "Ref": "NewOrder"
        },
        "DestPortGroup": {
          "Ref": "DestPortGroup"
        },
        "DestPort": {
          "Ref": "DestPort"
        },
        "RegionId": {
          "Ref": "RegionId"
        },
        "SourceType": {
          "Ref": "SourceType"
        }
      }
    }
  },
  "Parameters": {
    "ApplicationName": {
      "Type": "String",
      "Description": "Application types supported by the security policy. The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL. NOTE ANY indicates that the policy is applied to all types of applications.",
      "AllowedValues": [
        "ANY",
        "HTTP",
        "HTTPS",
        "MQTT",
        "Memcache",
        "MongoDB",
        "MySQL",
        "RDP",
        "Redis",
        "SMTP",
        "SMTPS",
        "SSH",
        "SSL",
        "VNC"
      ]
    },
    "DestPortType": {
      "Type": "String",
      "Description": "Security access control policy access destination port traffic type. port: Port group: port address book",
      "AllowedValues": [
        "group",
        "port"
      ]
    },
    "Direction": {
      "Type": "String",
      "Description": "Security access control traffic direction policies. in: internal and external traffic access control. out: within the flow of external access control",
      "AllowedValues": [
        "in",
        "out"
      ]
    },
    "AclAction": {
      "Type": "String",
      "Description": "Traffic access control policy set by the cloud of a firewall. accept: Release. drop: rejected. log: Observation",
      "AllowedValues": [
        "accept",
        "drop",
        "log"
      ]
    },
    "Description": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Security access control policy description information."
    },
    "Proto": {
      "Type": "String",
      "Description": "The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type. Allowed values: ANY, TCP, UDP, ICMP",
      "AllowedValues": [
        "ANY",
        "ICMP",
        "TCP",
        "UDP"
      ]
    },
    "Destination": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Security Access Control destination address policy. When DestinationType is net, Destination purpose CIDR. For example: 192.168.XX.XX/24. When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group. When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * example.com. When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ \"BJ11\", \"ZB\"]"
    },
    "Source": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Security access control source address policy. When SourceType for the net, Source is the source CIDR. For example: 192.168.XX.XX/24. When SourceType as a group, Source name for the source address book. For example: db_group. When SourceType as location, Source source region (specific region position encoder see below). For example, [ \"BJ11\", \"ZB\"]"
    },
    "DestinationType": {
      "Type": "String",
      "Description": "Security Access Control destination address type of policy. net: Destination network segment (CIDR). group: destination address book. domain: The purpose domain. location: The purpose area",
      "AllowedValues": [
        "domain",
        "group",
        "location",
        "net"
      ]
    },
    "NewOrder": {
      "Type": "Number",
      "Description": "Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority. Description -1 indicates the lowest priority.",
      "MinValue": -1
    },
    "DestPortGroup": {
      "Type": "String",
      "Description": "Security access control policy access traffic destination port address book name. Description DestPortType is group, set the item."
    },
    "DestPort": {
      "Type": "String",
      "Description": "Security access control policy access traffic destination port. Note When DestPortType to port, set the item."
    },
    "RegionId": {
      "Default": "cn-hangzhou",
      "Type": "String",
      "Description": "Region ID. Default to cn-hangzhou.",
      "AllowedValues": [
        "cn-hangzhou",
        "ap-southeast-1"
      ]
    },
    "SourceType": {
      "Type": "String",
      "Description": "Security access control source address type of policy. net: Source segment (CIDR). group: source address book. location: the source area",
      "AllowedValues": [
        "group",
        "location",
        "net"
      ]
    }
  },
  "Outputs": {
    "AclUuid": {
      "Description": "Security access control ID that uniquely identifies the policy.",
      "Value": {
        "Fn::GetAtt": [
          "ControlPolicy",
          "AclUuid"
        ]
      }
    }
  }
}
```
