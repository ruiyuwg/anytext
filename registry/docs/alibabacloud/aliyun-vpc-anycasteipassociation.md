ALIYUN::VPC::AnycastEIPAssociation is used to associate an Anycast elastic IP address (Anycast EIP) with a cloud resource in a region.

## Syntax

```
{
  "Type": "ALIYUN::VPC::AnycastEIPAssociation",
  "Properties": {
    "BindInstanceId": String,
    "BindInstanceRegionId": String,
    "BindInstanceType": String,
    "AnycastId": String,
    "AssociationMode": String,
    "PrivateIpAddress": String,
    "PopLocations": List
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

BindInstanceId

String

Yes

No

The ID of the cloud resource with which you want to associate the Anycast EIP.

None.

BindInstanceRegionId

String

Yes

No

The region ID of the cloud resource with which you want to associate the Anycast EIP.

None.

BindInstanceType

String

Yes

No

The type of the cloud resource with which you want to associate the Anycast EIP.

Set the value to SlbInstance. A value of SlbInstance specifies an internal-facing Server Load Balancer (SLB) instance.

You can associate Anycast EIPs only with SLB instances that reside in the following regions:

-   cn-hongkong: China (Hong Kong).
    
-   eu-west-1: UK (London).
    
-   eu-central-1: Germany (Frankfurt).
    
-   us-east-1: US (Virginia).
    
-   us-west-1: US (Silicon Valley).
    
-   ap-southeast-1: Singapore.
    
-   ap-southeast-3: Malaysia (Kuala Lumpur).
    
-   ap-northeast-1: Japan (Tokyo).
    

AnycastId

String

Yes

No

The ID of the Anycast EIP.

None.

AssociationMode

String

No

No

The association mode.

Valid values:

-   **Default**: default mode. If you use this value, the cloud resource serves as the default origin server.
    
-   **Normal**: standard mode. If you use this value, the cloud resource serves as a standard origin server.
    

PrivateIpAddress

String

No

No

The secondary private IP address of the elastic network interface (ENI) with which you want to associate the Anycast EIP.

This property can be returned only when  **BindInstanceType** is set to **NetworkInterface**.

PopLocations

List

No

No

The access points in associated access areas when you associate the Anycast EIP with the cloud resource.

For more information, see the "PopLocations property" section of this topic.

## PopLocations syntax

```
"PopLocations": [
  {
    "PopLocation": String
  }
]  
```

## PopLocations property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

PopLocation

String

Yes

No

The access point in associated access areas when you associate the Anycast EIP with the cloud resource.

None.

## Return values

Fn::GetAtt

-   BindInstanceId: the ID of the cloud resource with which the Anycast EIP is associated.
    
-   BindInstanceRegionId: the region ID of the cloud resource with which the Anycast EIP is associated.
    
-   BindInstanceType: the type of the cloud resource with which the Anycast EIP is associated.
    
-   AnycastId: the ID of the Anycast EIP.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AnycastId:
    Description: Anycast EIP instance ID.
    Type: String
  BindInstanceId:
    Description: The ID of the cloud resource instance to be bound.
    Type: String
  BindInstanceRegionId:
    Description: The region ID of the cloud resource instance to be bound.
    Type: String
  BindInstanceType:
    Description: 'The cloud resource instance type to be bound. Valid value: SlbInstance,
      SLB instance of private network type.'
    Type: String
Resources:
  AnycastEIPAssociation:
    Properties:
      AnycastId:
        Ref: AnycastId
      BindInstanceId:
        Ref: BindInstanceId
      BindInstanceRegionId:
        Ref: BindInstanceRegionId
      BindInstanceType:
        Ref: BindInstanceType
    Type: ALIYUN::VPC::AnycastEIPAssociation
Outputs:
  AnycastId:
    Description: Anycast EIP instance ID.
    Value:
      Fn::GetAtt:
      - AnycastEIPAssociation
      - AnycastId
  BindInstanceId:
    Description: The ID of the cloud resource instance to be bound.
    Value:
      Fn::GetAtt:
      - AnycastEIPAssociation
      - BindInstanceId
  BindInstanceRegionId:
    Description: The region ID of the cloud resource instance to be bound.
    Value:
      Fn::GetAtt:
      - AnycastEIPAssociation
      - BindInstanceRegionId
  BindInstanceType:
    Description: The cloud resource instance type to be bound.
    Value:
      Fn::GetAtt:
      - AnycastEIPAssociation
      - BindInstanceType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "BindInstanceId": {
      "Type": "String",
      "Description": "The ID of the cloud resource instance to be bound."
    },
    "BindInstanceRegionId": {
      "Type": "String",
      "Description": "The region ID of the cloud resource instance to be bound."
    },
    "BindInstanceType": {
      "Type": "String",
      "Description": "The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type."
    },
    "AnycastId": {
      "Type": "String",
      "Description": "Anycast EIP instance ID."
    }
  },
  "Resources": {
    "AnycastEIPAssociation": {
      "Type": "ALIYUN::VPC::AnycastEIPAssociation",
      "Properties": {
        "BindInstanceId": {
          "Ref": "BindInstanceId"
        },
        "BindInstanceRegionId": {
          "Ref": "BindInstanceRegionId"
        },
        "BindInstanceType": {
          "Ref": "BindInstanceType"
        },
        "AnycastId": {
          "Ref": "AnycastId"
        }
      }
    }
  },
  "Outputs": {
    "BindInstanceId": {
      "Description": "The ID of the cloud resource instance to be bound.",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEIPAssociation",
          "BindInstanceId"
        ]
      }
    },
    "BindInstanceRegionId": {
      "Description": "The region ID of the cloud resource instance to be bound.",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEIPAssociation",
          "BindInstanceRegionId"
        ]
      }
    },
    "BindInstanceType": {
      "Description": "The cloud resource instance type to be bound.",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEIPAssociation",
          "BindInstanceType"
        ]
      }
    },
    "AnycastId": {
      "Description": "Anycast EIP instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEIPAssociation",
          "AnycastId"
        ]
      }
    }
  }
}
```
