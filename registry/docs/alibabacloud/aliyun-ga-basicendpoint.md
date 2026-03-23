ALIYUN::GA::BasicEndpoint is used to create an endpoint for a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicEndpoint",
  "Properties": {
    "AcceleratorId": String,
    "EndpointGroupId": String,
    "EndpointAddress": String,
    "EndpointZoneId": String,
    "EndpointType": String,
    "EndpointSubAddressType": String,
    "EndpointSubAddress": String,
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

AcceleratorId

String

Yes

No

The ID of the basic GA instance.

None.

EndpointGroupId

String

Yes

No

The endpoint group ID of the basic GA instance.

None.

EndpointAddress

String

Yes

No

The address of the endpoint.

None.

EndpointZoneId

String

No

No

The zone ID of the endpoint.

None.

EndpointType

String

No

No

The endpoint type.

Valid values:

-   **ENI**: Alibaba Cloud elastic network interface (ENI)
    
-   **SLB**: Classic Load Balancer (CLB) instance
    
-   **ECS**: Elastic Compute Service (ECS) instance
    
-   **NLB**: Network Load Balancer (NLB) instance
    

EndpointSubAddressType

String

No

No

The secondary address type of the endpoint.

Valid values:

-   **primary**: primary private IP address
    
-   **secondary**: secondary private IP address
    

You must specify this property when EndpointType is set to **ECS**, **ENI**, or **NLB**. If you set EndpointType to **NLB**, you must set EndpointSubAddressType to **primary**.

EndpointSubAddress

String

No

No

The secondary address of the endpoint.

You must specify this property when EndpointType is set to **ECS**, **ENI**, or **NLB**.

-   If you set EndpointType to **ECS**, you can set **EndpointSubAddress** to the secondary private IP address of the primary ENI. If you set EndpointType to ECS and leave EndpointSubAddress empty, the primary private IP address of the primary ENI is used.
    
-   If you set EndpointType to **ENI**, you can set **EndpointSubAddress** to the secondary private IP address of the secondary ENI. If you set EndpointType to ENI and leave EndpointSubAddress empty, the primary private IP address of the secondary ENI is used.
    
-   If you set EndpointType to **NLB**, you must set **EndpointSubAddress** to the primary private IP address of the NLB backend server.
    

Name

String

No

No

The name of the endpoint that you want to create for the basic GA instance.

The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

## Return values

Fn::GetAtt

EndpointId: the endpoint ID of the basic GA instance.

## Examples

**Note**

You must change the masked values of properties, such as the EndpointGroupId, AcceleratorId, and EndpointAddress properties, based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicEndpoint
    Properties:
      EndpointGroupId: epg-bp1dmlohjjz4kqaun****
      EndpointType: ENI
      EndpointSubAddressType: primary
      EndpointSubAddress: 192.168.0.8
      AcceleratorId: ga-bp17frjjh0udz4qz****
      Name: demo_28911
      EndpointAddress: eni-bp1a05txelswuj8g****
Outputs:
  EndpointId:
    Description: The ID of the endpoint.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - EndpointId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicEndpoint",
      "Properties": {
        "EndpointGroupId": "epg-bp1dmlohjjz4kqaun****",
        "EndpointType": "ENI",
        "EndpointSubAddressType": "primary",
        "EndpointSubAddress": "192.168.0.8",
        "AcceleratorId": "ga-bp17frjjh0udz4qz****",
        "Name": "demo_28911",
        "EndpointAddress": "eni-bp1a05txelswuj8g****"
      }
    }
  },
  "Outputs": {
    "EndpointId": {
      "Description": "The ID of the endpoint.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "EndpointId"
        ]
      }
    }
  }
}
                        
```
