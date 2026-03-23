ALIYUN::ComputeNest::IntranetConnectorEndpoint is used to create an endpoint.

## Syntax

```
{
  "Type": "ALIYUN::ComputeNest::IntranetConnectorEndpoint",
  "Properties": {
    "EnablePrivateZone": Boolean,
    "Type": String,
    "EndpointRegionId": String,
    "Description": String,
    "VpcId": String,
    "ResourceIds": List,
    "Name": String
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

EndpointRegionId

String

Yes

No

The region of the endpoint.

None.

VpcId

String

Yes

No

The virtual private cloud (VPC) of the endpoint.

None.

Description

String

No

No

The description of the endpoint.

The description can be up to 500 characters in length.

EnablePrivateZone

Boolean

No

No

Specifies whether to enable the private zone feature.

None.

Name

String

No

No

The endpoint name.

None.

ResourceIds

List

No

No

The IDs of the instances that you want to associate with the endpoint.

If you associate an Elastic Compute Service (ECS) instance with the endpoint, you must set this property to the ID of the ECS instance. You can specify up to two instances. The instances must reside in the specified VPC.

Type

String

No

No

The endpoint type.

Valid values:

-   Private
    
-   Managed
    

## Return values

Fn::GetAtt

EndpointId: the endpoint ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Type:
    Type: String
    Description:
      en: |-
        The type of the endpoint. 
        - Private (default) : private access point
        - Managed: managed access point.
    AllowedValues:
      - Private
      - Managed
    Required: false
  EndpointRegionId:
    Type: String
    Description:
      en: The region ID of the endpoint.
    Required: true
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: The ID of the VPC to which the endpoint belongs.
    Required: true
  ResourceIds:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: |-
        Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.
        Hosted access points do not require incoming.
    Required: false
    MaxLength: 2
Resources:
  IntranetConnectEndpoint:
    Type: ALIYUN::ComputeNest::IntranetConnectorEndpoint
    Properties:
      Type:
        Ref: Type
      EndpointRegionId:
        Ref: EndpointRegionId
      VpcId:
        Ref: VpcId
      ResourceIds:
        Ref: ResourceIds
Outputs:
  EndpointId:
    Description: The ID of the endpoint.
    Value:
      Fn::GetAtt:
        - IntranetConnectEndpoint
        - EndpointId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Type": {
      "Type": "String",
      "Description": {
        "en": "The type of the endpoint.\n- Private (default) : private access point\n- Managed: managed access point."
      },
      "AllowedValues": [
        "Private",
        "Managed"
      ],
      "Required": false
    },
    "EndpointRegionId": {
      "Type": "String",
      "Description": {
        "en": "The region ID of the endpoint."
      },
      "Required": true
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC to which the endpoint belongs."
      },
      "Required": true
    },
    "ResourceIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "Endpoint instance ID, when using ECS as an access point, fill in the instance ID of this ECS. Multiple instances can be specified up to a maximum of 2. The instance is required to be under the passed VPC.\nHosted access points do not require incoming."
      },
      "Required": false,
      "MaxLength": 2
    }
  },
  "Resources": {
    "IntranetConnectEndpoint": {
      "Type": "ALIYUN::ComputeNest::IntranetConnectorEndpoint",
      "Properties": {
        "Type": {
          "Ref": "Type"
        },
        "EndpointRegionId": {
          "Ref": "EndpointRegionId"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "ResourceIds": {
          "Ref": "ResourceIds"
        }
      }
    }
  },
  "Outputs": {
    "EndpointId": {
      "Description": "The ID of the endpoint.",
      "Value": {
        "Fn::GetAtt": [
          "IntranetConnectEndpoint",
          "EndpointId"
        ]
      }
    }
  }
}
                        
```
