ALIYUN::CR::InstanceEndpointAclPolicy is used to create a whitelist policy for the public endpoint of an instance.

## Syntax

```
{
  "Type": "ALIYUN::CR::InstanceEndpointAclPolicy",
  "Properties": {
    "AutoEnableType": String,
    "Comment": String,
    "Entry": String,
    "InstanceId": String,
    "ModuleName": String,
    "EndpointType": String,
    "RegionId": String
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

AutoEnableType

String

No

No

The type of the endpoint allowed to be enabled automatically.

Set the value to internet.

Comment

String

No

No

The description.

None.

Entry

String

Yes

No

The allowed CIDR block. Example: 192.168.1.1/32.

None.

InstanceId

String

Yes

No

The instance ID.

None.

ModuleName

String

No

No

The module for which you want to create the whitelist policy.

Valid values:

-   Registry
    
-   Chart
    

EndpointType

String

No

No

The endpoint type.

Set the value to internet.

RegionId

String

No

No

The region ID.

The default value of this property is the region ID of the stack.

## Return values

Fn::GetAtt

-   Entry: the allowed CIDR block.
    
-   InstanceId: the instance ID.
    

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Entry": {
      "Type": "String",
      "Description": "The IP address range that is allowed to access the instance.",
      "Default": "192.168.1.1/32"
    },
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the instance."
    }
  },
  "Resources": {
    "InstanceEndpointAclPolicy": {
      "Type": "ALIYUN::CR::InstanceEndpointAclPolicy",
      "Properties": {
        "Entry": {
          "Ref": "Entry"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "Entry": {
      "Description": "The IP address range that is allowed to access the instance.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceEndpointAclPolicy",
          "Entry"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceEndpointAclPolicy",
          "InstanceId"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Entry:
    Type: String
    Description: The IP address range that is allowed to access the instance.
    Default: 192.168.1.1/32
  InstanceId:
    Type: String
    Description: The ID of the instance.
Resources:
  InstanceEndpointAclPolicy:
    Type: 'ALIYUN::CR::InstanceEndpointAclPolicy'
    Properties:
      Entry:
        Ref: Entry
      InstanceId:
        Ref: InstanceId
Outputs:
  Entry:
    Description: The IP address range that is allowed to access the instance.
    Value:
      'Fn::GetAtt':
        - InstanceEndpointAclPolicy
        - Entry
  InstanceId:
    Description: The ID of the instance.
    Value:
      'Fn::GetAtt':
        - InstanceEndpointAclPolicy
        - InstanceId
```
