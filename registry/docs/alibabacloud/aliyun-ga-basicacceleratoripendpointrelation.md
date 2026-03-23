ALIYUN::GA::BasicAcceleratorIpEndpointRelation is used to create a mapping between an accelerated IP address and an endpoint for a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicAcceleratorIpEndpointRelation",
  "Properties": {
    "AccelerateIpId": String,
    "AcceleratorId": String,
    "EndpointId": String
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

AccelerateIpId

String

Yes

No

The ID of the accelerated IP address of the basic GA instance.

You can call the [ListBasicAccelerateIps](/help/en/ga/developer-reference/api-ga-2019-11-20-listbasicaccelerateips) operation to query the ID of the accelerated IP address.

AcceleratorId

String

Yes

No

The ID of the basic GA instance.

None.

EndpointId

String

Yes

No

The endpoint ID of the basic GA instance.

You can call the [ListBasicEndpoints](/help/en/ga/developer-reference/api-ga-2019-11-20-listbasicendpoints) operation to query the endpoint ID.

## Return values

Fn::GetAtt

-   AccelerateIpId: the ID of the accelerated IP address of the basic GA instance.
    
-   EndpointId: the endpoint ID of the basic GA instance.
    
-   AcceleratorId: the ID of the basic GA instance.
    

## Examples

**Note**

You must change the masked values of properties, such as the AccelerateIpId, EndpointId, and AcceleratorId properties, based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicAcceleratorIpEndpointRelation
    Properties:
      AccelerateIpId: gaip-bp1****
      EndpointId: ep-bp14sz7ftcwwjgrdm****
      AcceleratorId: ga-bp17frjjh0udz4qz****
Outputs:
  AccelerateIpId:
    Description: The ID of the accelerated IP address.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AccelerateIpId
  EndpointId:
    Description: The ID of the endpoint.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - EndpointId
  AcceleratorId:
    Description: The ID of the basic GA instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AcceleratorId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicAcceleratorIpEndpointRelation",
      "Properties": {
        "AccelerateIpId": "gaip-bp1****",
        "EndpointId": "ep-bp14sz7ftcwwjgrdm****",
        "AcceleratorId": "ga-bp17frjjh0udz4qz****"
      }
    }
  },
  "Outputs": {
    "AccelerateIpId": {
      "Description": "The ID of the accelerated IP address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AccelerateIpId"
        ]
      }
    },
    "EndpointId": {
      "Description": "The ID of the endpoint.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "EndpointId"
        ]
      }
    },
    "AcceleratorId": {
      "Description": "The ID of the basic GA instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AcceleratorId"
        ]
      }
    }
  }
}
                        
```
