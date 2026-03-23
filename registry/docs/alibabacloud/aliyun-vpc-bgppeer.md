ALIYUN::VPC::BgpPeer is used to add a Border Gateway Protocol (BGP) peer to a specific BGP group.

## Syntax

```
{
  "Type": "ALIYUN::VPC::BgpPeer",
  "Properties": {
    "PeerIpAddress": String,
    "EnableBfd": Boolean,
    "BgpGroupId": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

PeerIpAddress

String

No

Yes

The IP address of the BGP peer.

None

EnableBfd

Boolean

No

Yes

Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.

Valid values:

-   true: BFD is enabled.
-   false: BFD is disabled.

BgpGroupId

String

Yes

No

The ID of the BGP group.

None

## Response parameters

Fn::GetAtt

BgpPeerId: the ID of the BGP peer.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      BgpGroupId:
        Type: String
        Description: The ID of the BGP group.
    Resources:
      BgpPeer:
        Type: ALIYUN::VPC::BgpPeer
        Properties:
          PeerIpAddress: 192.168.1.1
          EnableBfd: false
          BgpGroupId:
            Ref: BgpGroupId
    Outputs:
      BgpPeerId:
        Description: The ID of the BGP peer.
        Value:
          Fn::GetAtt:
            - BgpPeer
            - BgpPeerId
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "BgpGroupId": {
          "Type": "String",
          "Description": "The ID of the BGP group."
        }
      },
      "Resources": {
        "BgpPeer": {
          "Type": "ALIYUN::VPC::BgpPeer",
          "Properties": {
            "PeerIpAddress": "192.168.1.1",
            "EnableBfd": false,
            "BgpGroupId": {
              "Ref": "BgpGroupId"
            }
          }
        }
      },
      "Outputs": {
        "BgpPeerId": {
          "Description": "The ID of the BGP peer.",
          "Value": {
            "Fn::GetAtt": [
              "BgpPeer",
              "BgpPeerId"
            ]
          }
        }
      }
    }
    ```
