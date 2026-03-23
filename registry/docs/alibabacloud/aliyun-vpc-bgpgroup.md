ALIYUN::VPC::BgpGroup is used to create a Border Gateway Protocol (BGP) (Multi-ISP) group for a virtual border router (VBR).

You can connect a VBR to a data center by using BGP. Each BGP group can be associated with a VBR. To associate a BGP group with a VBR, you need to only add a BGP peer that is required to communicate with the VBR to the BGP group and advertise the BGP network in the VBR. BGP groups are used to simplify BGP configurations. You can reduce the configuration complexity by adding BGP peers that use the same configurations to one BGP group. You must use an autonomous system (AS) number to create a BGP group.

**Note**

-   BGP groups support only BGP4.
    
-   BGP groups support IPv4 BGP. IPv6 BGP is not supported.
    

## Syntax

```
{
  "Type": "ALIYUN::VPC::BgpGroup",
  "Properties": {
    "Description": String,
    "LocalAsn": Integer,
    "AuthKey": String,
    "RouterId": String,
    "PeerAsn": Integer,
    "IsFakeAsn": Boolean,
    "Name": String,
    "RouteQuota": Integer,
    "IpVersion": String
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

Description

String

No

Yes

The description of the BGP group.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.

LocalAsn

Integer

No

Yes

The AS number of the cloud device.

None.

AuthKey

String

No

Yes

The authentication key of the BGP group.

None.

RouterId

String

Yes

No

The VBR ID.

None.

PeerAsn

Integer

Yes

Yes

The AS number of the on-premises device.

None.

IsFakeAsn

Boolean

No

Yes

Specifies whether the AS number is fake.

Valid values:

-   true
    
-   false
    

Name

String

No

Yes

The name of the BGP group.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

RouteQuota

Integer

No

Yes

The maximum number of routes supported by the BGP peer.

IpVersion

String

No

No

The IP version.

Valid values:

-   **IPv4** (default): IPv4.
    
-   **IPv6**: IPv6. IPv6 is supported only if IPv6 is enabled for the VBR of the BGP group.
    

## Return values

Fn::GetAtt

-   BgpGroupId: the ID of the BGP group.
    
-   Name: the name of the BGP group.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  PeerAsn:
    Type: Number
    Description: The AS number of the BGP peer.
  RouterId:
    Type: String
    Description: The ID of the VBR.
Resources:
  BgpGroup:
    Type: ALIYUN::VPC::BgpGroup
    Properties:
      PeerAsn:
        Ref: PeerAsn
      RouterId:
        Ref: RouterId
Outputs: {}
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion" : "2015-09-01",
  "Parameters" : {
    "PeerAsn": {
      "Type": "Number",
      "Description": "The AS number of the BGP peer."
    },
    "RouterId": {
      "Type": "String",
      "Description": "The ID of the VBR."
    }
  },
  "Resources" : {
    "BgpGroup": {
      "Type": "ALIYUN::VPC::BgpGroup",
      "Properties": {
        "PeerAsn": {
          "Ref": "PeerAsn"
        },
        "RouterId": {
          "Ref": "RouterId"
        }
      }
    }
  },
  "Outputs": {
  }
}
```
