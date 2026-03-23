ALIYUN::GA::BasicIpSet is used to create an acceleration region for a basic Global Accelerator (GA) instance.

## Syntax

```
{
  "Type": "ALIYUN::GA::BasicIpSet",
  "Properties": {
    "AcceleratorId": String,
    "AccelerateRegionId": String,
    "Bandwidth": Integer,
    "IspType": String
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

AccelerateRegionId

String

No

No

The ID of the region that you want to accelerate.

You can call the [ListAvailableBusiRegions](/help/en/ga/api-listavailablebusiregions) operation to query the most recent region list.

Bandwidth

Integer

No

No

The bandwidth in the acceleration region.

Unit: **Mbit/s**.

You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.

IspType

String

No

No

The line type of the elastic IP address (EIP) in the acceleration region.

Valid values:

-   **BGP** (default): BGP (Multi-ISP)
    
-   **BGP\_PRO**: BGP (Multi-ISP) Pro
    

If you can use single-ISP bandwidth, the following values are also supported for IspType:

-   **ChinaTelecom**: China Telecom (single ISP)
    
-   **ChinaUnicom**: China Unicom (single ISP)
    
-   **ChinaMobile**: China Mobile (single ISP)
    
-   **ChinaTelecom\_L2**: China Telecom\_L2 (single ISP)
    
-   **ChinaUnicom\_L2**: China Unicom\_L2 (single ISP)
    
-   **ChinaMobile\_L2**: China Mobile\_L2 (single ISP)
    

**Note**

-   You must specify this property when the bandwidth metering method of the basic GA instance is **pay-by-data-transfer**.
    
-   If the acceleration region of a basic GA instance is China (Hong Kong) and a basic bandwidth plan whose bandwidth type is Premium is associated with the GA instance, the default value of IspType is BGP\_PRO.
    
-   The supported single-ISP type varies based on the acceleration region.
    

## Return values

Fn::GetAtt

IpSetId: the ID of the acceleration region in which the basic GA instance resides.

## Examples

**Note**

You must change the masked values of properties, such as the AcceleratorId property, based on your business requirements.

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::BasicIpSet
    Properties:
      IspType: BGP
      Bandwidth: 2
      AcceleratorId: ga-bp17frjjh0udz4qz****
Outputs:
  IpSetId:
    Description: The ID of the acceleration region.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - IpSetId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::BasicIpSet",
      "Properties": {
        "IspType": "BGP",
        "Bandwidth": 2,
        "AcceleratorId": "ga-bp17frjjh0udz4qz****"
      }
    }
  },
  "Outputs": {
    "IpSetId": {
      "Description": "The ID of the acceleration region.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "IpSetId"
        ]
      }
    }
  }
}
                        
```
