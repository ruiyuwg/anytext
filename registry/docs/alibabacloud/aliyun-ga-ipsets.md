ALIYUN::GA::IpSets is used to create acceleration regions.

## Syntax

```
{
  "Type": "ALIYUN::GA::IpSets",
  "Properties": {
    "AccelerateRegion": List,
    "AcceleratorId": String,
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

AccelerateRegion

List

Yes

Yes

The acceleration regions.

You can create up to five acceleration regions.

For more information, see [AccelerateRegion Properties](#section-053-fct-ous).

AcceleratorId

String

Yes

No

The ID of the Global Accelerator (GA) instance.

None.

## AccelerateRegion syntax

```
 "IspType": String"AccelerateRegion": [
  {
    "Bandwidth": Integer,
    "AccelerateRegionId": String,
    "IpVersion": String,
    "IspType": String
  }
]
```

## AccelerateRegion properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Bandwidth

Integer

Yes

Yes

The bandwidth that you want to allocate to the acceleration region.

Unit: Mbit/s.

You must allocate at least 2 Mbit/s of bandwidth to each acceleration region.

**Note**

The total bandwidth for all acceleration regions cannot exceed the bandwidth limit of your basic bandwidth plan.

AccelerateRegionId

String

Yes

No

The ID of the acceleration region.

None.

IpVersion

String

No

No

The IP version.

Valid values:

-   IPv4
    
-   IPv6
    

IspType

String

No

No

The line type of the elastic IP address (EIP) in the acceleration region.

Valid values:

-   **BGP**: BGP (Multi-ISP).
    
-   **BGP\_PRO**: BGP (Multi-ISP) Pro. If the acceleration region is China (Hong Kong) and the basic GA instance is associated with a basic bandwidth plan whose bandwidth type is Premium, the default value of IspType is BGP\_PRO.
    

If you can use single-ISP bandwidth, the following values are also supported for IspType:

-   **ChinaTelecom**: China Telecom (single ISP)
    
-   **ChinaUnicom**: China Unicom (single ISP)
    
-   **ChinaMobile**: China Mobile (single ISP)
    
-   **ChinaTelecom\_L2**: China Telecom\_L2 (single ISP)
    
-   **ChinaUnicom\_L2**: China Unicom\_L2 (single ISP)
    
-   **ChinaMobile\_L2**: China Mobile\_L2 (single ISP)
    

**Note**

The supported single-ISP type varies based on the acceleration region.

## Return values

Fn::GetAtt

-   AccelerateRegionIds: the IDs of the acceleration regions.
    
-   IpSetIds: the configurations of the acceleration regions.
    
-   IpVersions: the IP versions of the acceleration regions.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AcceleratorId:
        Type: String
        Description: The ID of the GA instance.
    Resources:
      IpSets:
        Type: ALIYUN::GA::IpSets
        Properties:
          AccelerateRegion:
            - IpVersion: IPv6
              Bandwidth: 2
              AccelerateRegionId: cn-beijing
          AcceleratorId: cn-beijing
    Outputs: {}
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AcceleratorId": {
          "Type": "String",
          "Description": "The ID of the GA instance."
        }
      },
      "Resources": {
        "IpSets": {
          "Type": "ALIYUN::GA::IpSets",
          "Properties": {
            "AccelerateRegion": [
              {
                "IpVersion": "IPv6",
                "Bandwidth": 2,
                "AccelerateRegionId": "cn-beijing"
              }
            ],
            "AcceleratorId": "cn-beijing"
          }
        }
      },
      "Outputs": {
      }
    }
    ```
