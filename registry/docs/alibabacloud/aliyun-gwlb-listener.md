ALIYUN::GWLB::Listener type is used to create a listener.

## Syntax

```
{
  "Type": "ALIYUN::GWLB::Listener",
  "Properties": {
    "LoadBalancerId": String,
    "ServerGroupId": String,
    "ListenerDescription": String,
    "Tags": List
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

LoadBalancerId

String

Yes

No

The ID of the Gateway Load Balancer (GWLB) instance.

None

ServerGroupId

String

Yes

No

The ID of the server group.

None

ListenerDescription

String

No

Yes

The custom description of the listener.

The description must be 2 to 256 characters in length. It can contain letters, digits, Chinese characters, and the following special characters: \`,\` \`.\` \`;\` \`/\` \`@\` \`\_\` \`-\`.

Tags

List

No

Yes

The tags attached to the SLB instance.

The list can contain a maximum of 20 tags. For more information, see [Tags property](#76f878ef79a6v).

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
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

The tag key can be up to 128 characters in length. It cannot be an empty string, start with `aliyun` or `acs:`, or contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be up to 256 characters in length. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   ListenerDescription: The description of the listener.
    
-   ServerGroupId: The ID of the server group.
    
-   LoadBalancerId: The ID of the GWLB instance.
    
-   Tags: The tags attached to the GWLB instance.
    
-   ListenerId: The ID of the listener.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServerGroupId:
    Type: String
    Description:
      en: The ID of the server group.
    Required: true
  LoadBalancerId:
    Type: String
    Description:
      en: The ID of the gateway load balancer instance.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GWLB::Listener
    Properties:
      ServerGroupId:
        Ref: ServerGroupId
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  ListenerDescription:
    Description: The custom listener description.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ListenerDescription
  ServerGroupId:
    Description: The ID of the server group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ServerGroupId
  LoadBalancerId:
    Description: The ID of the gateway load balancer instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - LoadBalancerId
  Tags:
    Description: The list of tags.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
  ListenerId:
    Description: The ID of the listener.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ListenerId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServerGroupId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the server group."
      },
      "Required": true
    },
    "LoadBalancerId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the gateway load balancer instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GWLB::Listener",
      "Properties": {
        "ServerGroupId": {
          "Ref": "ServerGroupId"
        },
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "ListenerDescription": {
      "Description": "The custom listener description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ListenerDescription"
        ]
      }
    },
    "ServerGroupId": {
      "Description": "The ID of the server group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ServerGroupId"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the gateway load balancer instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LoadBalancerId"
        ]
      }
    },
    "Tags": {
      "Description": "The list of tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "ListenerId": {
      "Description": "The ID of the listener.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ListenerId"
        ]
      }
    }
  }
}
                        
```
