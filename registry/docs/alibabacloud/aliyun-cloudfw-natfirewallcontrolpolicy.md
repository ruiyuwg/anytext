ALIYUN::CLOUDFW::NatFirewallControlPolicy is used to add an access control policy for a NAT firewall.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::NatFirewallControlPolicy",
  "Properties": {
    "ApplicationNameList": List,
    "AclAction": String,
    "Destination": String,
    "Description": String,
    "DestinationType": String,
    "Direction": String,
    "NatGatewayId": String,
    "NewOrder": Integer,
    "Proto": String,
    "SourceType": String,
    "Source": String,
    "DestPort": Integer,
    "DestPortType": String,
    "DomainResolveType": Integer,
    "DestPortGroup": String,
    "EndTime": String,
    "IpVersion": Integer,
    "RepeatEndTime": String,
    "RepeatDays": List,
    "RepeatType": String,
    "RepeatStartTime": String,
    "Release": Boolean,
    "StartTime": String
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

ApplicationNameList

List

Yes

Yes

The application types supported by the access control policy.

None.

AclAction

String

Yes

Yes

The action that Cloud Firewall performs on the traffic.

Valid values:

-   **accept**: allows the traffic.
    
-   **drop**: denies the traffic.
    
-   **log**: monitors the traffic.
    

Destination

String

Yes

Yes

The destination address in the access control policy.

Valid values:

-   If DestinationType is set to net, the value of Destination is a destination CIDR block.
    
    Example: 1.2.XX.XX/24.
    
-   If DestinationType is set to group, the value of Destination is a destination address book name.
    
    Example: db\_group.
    
-   If DestinationType is set to domain, the value of Destination is a destination domain name.
    
    Example: \*.aliyuncs.com.
    
-   If DestinationType is set to location, the value of Destination is a destination location code.
    
    Examples: "BJ11" and "ZB".
    

Description

String

Yes

Yes

The description of the access control policy.

None.

DestinationType

String

Yes

Yes

The type of the destination address in the access control policy.

Valid values:

-   **net**: destination CIDR block
    
-   **group**: destination address book
    
-   **domain**: destination domain name
    

Direction

String

Yes

No

The direction of the traffic to which the access control policy applies.

-   Set the value to **out**, which specifies outbound traffic.
    

NatGatewayId

String

Yes

No

The ID of the NAT gateway.

None.

NewOrder

Integer

Yes

Yes

The priority of the access control policy.

The priority value starts from 1. A smaller priority value indicates a higher priority.

Proto

String

Yes

Yes

The protocol type in the access control policy.

Valid values:

-   ANY (A value of ANY specifies all types of protocols.)
    
-   TCP
    
-   UDP
    
-   ICMP
    

SourceType

String

Yes

Yes

The type of the source address in the access control policy.

Valid values:

-   **net**: source CIDR block
    
-   **group**: source address book
    

Source

String

Yes

Yes

The source address in the access control policy.

Valid values:

-   If **SourceType** is set to `net`, the value of Source is a source CIDR block.
    
    Example: 10.2.4.0/24.
    
-   If **SourceType** is set to `group`, the value of Source is a source address book name.
    
    Example: db\_group.
    

DestPort

Integer

No

Yes

The destination port in the access control policy.

Valid values:

-   If Proto is set to ICMP, the value of DestPort is empty.
    

**Note**

If Proto is set to ICMP, access control does not take effect on the destination port.

-   If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, the value of DestPort is empty.
    

**Note**

If DestPortType is set to group, you do not need to specify destination ports. A value of group specifies a destination port address book. All ports that the access control policy controls are included in the destination port address book.

-   If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is a destination port.
    

DestPortType

String

No

Yes

The type of the destination port in the access control policy.

Valid values:

-   **port**: port
    
-   **group**: port address book
    

DomainResolveType

Integer

No

Yes

The domain name resolution method of the access control policy.

Valid values:

-   **0**: fully qualified domain name (FQDN)-based resolution
    
-   **1**: Domain Name System (DNS)-based dynamic resolution
    
-   **2**: FQDN-based resolution and DNS-based dynamic resolution
    

DestPortGroup

String

No

Yes

The name of the destination port address book in the access control policy.

**Note**

You must specify this property when DestPortType is set to group.

EndTime

String

No

Yes

The point in time when the validity period of the access control policy ends.

The value is a timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.

**Note**

If RepeatType is set to Permanent, the value of EndTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, the value of EndTime must be a specified time point.

IpVersion

Integer

No

Yes

The supported IP address version.

Set the value to **4**, which specifies IPv4. Default value: 4.

RepeatEndTime

String

No

Yes

The point in time when the recurrence of the access control policy ends.

Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the start time.

**Note**

If RepeatType is set to Permanent or None, the value of RepeatEndTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, the value of RepeatEndTime must be a specified time point.

RepeatDays

List

No

Yes

The days of a week or of a month on which the access control policy takes effect.

-   If RepeatType is set to `Permanent`, `None`, or `Daily`, the value of RepeatDays is an empty list. Example: \[\].
    
-   If RepeatType is set to Weekly, RepeatDays must be specified. Example:\[0, 6\].
    

**Note**

The values specified for RepeatDays cannot be repeated if RepeatType is set to Weekly.

-   If RepeatType is set to `Monthly`, RepeatDays must be specified. Example:\[1, 31\].
    

**Note**

The values specified for RepeatDays cannot be repeated if RepeatType is set to Monthly.

RepeatType

String

No

Yes

The recurrence type of the access control policy.

Valid values:

-   **Permanent** (default): always
    
-   **None**: one specified time point
    
-   **Daily**: daily
    
-   **Weekly**: weekly
    
-   **Monthly**: monthly
    

RepeatStartTime

String

No

Yes

The point in time when the recurrence of the access control policy starts.

Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.

**Note**

If RepeatType is set to Permanent or None, the value of RepeatStartTime is empty. If RepeatType is set to Daily, Weekly, or Monthly, the value of RepeatStartTime must be specified.

Release

Boolean

No

Yes

Specifies whether to enable the access control policy.

By default, an access control policy is enabled after it is created. Valid values:

-   **true**
    
-   **false**
    

StartTime

String

No

Yes

The point in time when the validity period of the access control policy starts.

The value is a timestamp in seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the end time.

**Note**

If RepeatType is set to Permanent, the value of StartTime is empty. If RepeatType is set to None, Daily, Weekly, or Monthly, the value of StartTime must be specified.

## Return values

Fn::GetAtt

-   AclUuid: the unique ID of the access control policy.
    
-   Direction: the direction of the traffic to which the access control policy applies.
    
-   NatGatewayId: the ID of the NAT gateway.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      NatGateway:
        Type: String
        AssociationProperty: ALIYUN::VPC::NatGateway::NatGatewayId
    Resources:
      ExtensionResource:
        Type: ALIYUN::CLOUDFW::NatFirewallControlPolicy
        Properties:
          AclAction: log
          ApplicationNameList:
            - HTTP
            - HTTPS
          Description: test
          Destination: 200.1.2.0/24
          DestinationType: net
          NatGatewayId:
            Ref: NatGateway
          Proto: TCP
          Source: 10.0.0.0/8
          SourceType: net
          NewOrder: '-1'
          Direction: out
    Outputs:
      AclUuid:
        Description: The unique ID of the access control policy.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - AclUuid
      Direction:
        Description: The direction of the traffic to which the access control policy applies.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - Direction
      NatGatewayId:
        Description: The ID of the NAT gateway.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - NatGatewayId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "NatGateway": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::VPC::NatGateway::NatGatewayId"
        }
      },
      "Resources": {
        "ExtensionResource": {
          "Type": "ALIYUN::CLOUDFW::NatFirewallControlPolicy",
          "Properties": {
            "AclAction": "log",
            "ApplicationNameList": [
              "HTTP",
              "HTTPS"
            ],
            "Description": "test",
            "Destination": "200.1.2.0/24",
            "DestinationType": "net",
            "NatGatewayId": {
              "Ref": "NatGateway"
            },
            "Proto": "TCP",
            "Source": "10.0.0.0/8",
            "SourceType": "net",
            "NewOrder": "-1",
            "Direction": "out"
          }
        }
      },
      "Outputs": {
        "AclUuid": {
          "Description": "The unique ID of the access control policy.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "AclUuid"
            ]
          }
        },
        "Direction": {
          "Description": "The direction of the traffic to which the access control policy applies.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Direction"
            ]
          }
        },
        "NatGatewayId": {
          "Description": "The ID of the NAT gateway.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "NatGatewayId"
            ]
          }
        }
      }
    }
                            
    ```
