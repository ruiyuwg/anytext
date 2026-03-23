ALIYUN::GA::BasicEndpointGroup is used to create an endpoint group for a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicEndpointGroup",
  "Properties": {
    "AcceleratorId": String,
    "EndpointGroupRegion": String,
    "Description": String,
    "EndpointType": String,
    "EndpointSubAddress": String,
    "EndpointAddress": String,
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

EndpointGroupRegion

String

Yes

No

The region ID of the endpoint group.

You can call the [ListAvailableBusiRegions](/help/en/ga/developer-reference/api-ga-2019-11-20-listavailablebusiregions) operation to query the most recent region list.

Description

String

No

No

The description of the endpoint group.

The description can be up to 200 characters in length, and cannot start with `http://` or `https://`.

EndpointType

String

No

No

The endpoint type.

Valid values:

-   **ENI**: Alibaba Cloud elastic network interface (ENI)
    
-   **SLB**: Classic Load Balancer (CLB) instance
    
-   **ECS**: Elastic Compute Service (ECS) instance
    

EndpointSubAddress

String

No

No

The secondary address of the endpoint.

You must specify this property when the accelerated IP address is associated with the secondary private IP address of an ECS instance or an ENI.

-   If you set EndpointType to **ECS**, you can set **EndpointSubAddress** to the secondary private IP address of the primary ENI. If you set EndpointType to ECS and leave EndpointSubAddress empty, the primary private IP address of the primary ENI is used.
    
-   If you set EndpointType to **ENI**, you can set **EndpointSubAddress** to the secondary private IP address of the secondary ENI. If you set EndpointType to ENI and leave EndpointSubAddress empty, the primary private IP address of the secondary ENI is used.
    

EndpointAddress

String

No

No

The address of the endpoint.

None.

Name

String

No

No

The name of the endpoint group.

The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

## Return values

Fn::GetAtt

EndpointGroupId: the ID of the endpoint group.

## Examples

**Note**

You must change the masked values of properties, such as the AcceleratorId and EndpointAddress properties, based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicEndpointGroup
    Properties:
      EndpointGroupRegion: cn-shanghai
      EndpointType: ENI
      EndpointSubAddress: 192.168.0.8
      AcceleratorId: ga-bp17frjjh0udz4qz****
      EndpointAddress: eni-bp1a05txelswuj8g****
      Name: test_823
Outputs:
  EndpointGroupId:
    Description: The endpoint group ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - EndpointGroupId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicEndpointGroup",
      "Properties": {
        "EndpointGroupRegion": "cn-shanghai",
        "EndpointType": "ENI",
        "EndpointSubAddress": "192.168.0.8",
        "AcceleratorId": "ga-bp17frjjh0udz4qz****",
        "EndpointAddress": "eni-bp1a05txelswuj8g****",
        "Name": "test_823"
      }
    }
  },
  "Outputs": {
    "EndpointGroupId": {
      "Description": "The endpoint group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "EndpointGroupId"
        ]
      }
    }
  }
}
                        
```
