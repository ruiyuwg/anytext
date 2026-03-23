ALIYUN::SWAS::Instances is used to create subscription simple application servers.

## Syntax

```
{
  "Type": "ALIYUN::SWAS::Instances",
  "Properties": {
    "AutoRenewPeriod": Integer,
    "PlanId": String,
    "AutoRenew": Boolean,
    "Amount": Integer,
    "ImageId": String,
    "Period": Integer,
    "DataDiskSize": Integer
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

AutoRenewPeriod

Integer

No

No

The auto-renewal period of the simple application server.

Unit: month.

Valid values: 1, 3, 6, 12, 24, and 36.

This property must be specified only when AutoRenew is set to true.

PlanId

String

Yes

No

The plan ID.

You can call the [ListPlans](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-listplans) operation to query the information about all plans in a specified region.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   true
    
-   false (default)
    

Amount

Integer

No

No

The number of simple application servers that you want to create.

Valid values: 1 to 20.

Default value: 1.

ImageId

String

Yes

No

The image ID.

You can call the [ListImages](/help/en/simple-application-server/developer-reference/api-swas-open-2020-06-01-listimages) operation to query the IDs of available images in a specified region.

Period

Integer

Yes

No

The subscription duration of the simple application server.

Unit: month.

Valid values: 1, 3, 6, 12, 24, and 36.

DataDiskSize

Integer

No

No

The size of the data disk that you want to attach to the simple application server.

Unit: GB.

Valid values: 0 to 16380. The value must be an integral multiple of 20.

-   A value of 0 indicates that no data disk is attached.
    
-   If an enhanced SSD (ESSD) at performance level 0 (PL0) is included in the specified plan, the size of the data disk must be greater than or equal to 40 GB.
    
-   If a standard SSD is included in the specified plan, the size of the data disk must be greater than or equal to 20 GB.
    

Default value: 0.

## Return values

Fn::GetAtt

-   InnerIpAddresses: the public IP addresses of the simple application servers.  
    
-   PublicIpAddresses: the private IP addresses of the simple application servers.  
    
-   InstanceIds: the IDs of the simple application servers.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AutoRenew:
        Description:
          en: 'Specifies whether to enable auto-renewal. Valid values:
            true
            false
            Default value: false.'
        Type: Boolean
      AutoRenewPeriod:
        Description:
          en: 'The auto-renewal period. This parameter is required only when you set AutoRenew
            to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.'
        Type: Number
      DataDiskSize:
        Description:
          en: 'The size of the data disk that is attached to the server. Unit: GB. Valid
            values: 0 to 16380. The value must be an integral multiple of 20.
            A value of 0 indicates that no data disk is attached.
            If the disk included in the specified plan is a standard SSD, the data disk
            must be 20 GB or larger in size.
            Default value: 0.'
        Type: Number
      ImageId:
        Description:
          en: The image ID. You can call the ListImages operation to query the available
            images in the specified region.
        Type: String
        Default: fe9c66133a9d4688872869726b52****
      Period:
        Description:
          en: 'The subscription period of the servers. Unit: months. Valid values: 1,
            3, 6, 12, 24, and 36.'
        Type: Number
      PlanId:
        Description:
          en: The plan ID. You can call the ListPlans operation to query all plans provided
            by Simple Application Server in the specified region.
        Type: String
        Default: swas.s2.c2m1s40b3t04 
    Resources:
      Instances:
        Properties:
          AutoRenew:
            Ref: AutoRenew
          AutoRenewPeriod:
            Ref: AutoRenewPeriod
          DataDiskSize:
            Ref: DataDiskSize
          Amount: 1
          ImageId:
            Ref: ImageId
          Period:
            Ref: Period
          PlanId:
            Ref: PlanId
        Type: ALIYUN::SWAS::Instances
    Outputs:
      InnerIpAddress:
        Description: The inner IP address of simple application server.
        Value:
          Fn::GetAtt:
          - Instances
          - InnerIpAddresses
      InstanceId:
        Description: The ID of the simple application server.
        Value:
          Fn::GetAtt:
          - Instances
          - InstanceIds
      PublicIpAddress:
        Description: The public IP address of simple application server.
        Value:
          Fn::GetAtt:
          - Instances
          - PublicIpAddresses
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "AutoRenew": {
          "Description": {
            "en": "Specifies whether to enable auto-renewal. Valid values: true false Default value: false."
          },
          "Type": "Boolean"
        },
        "AutoRenewPeriod": {
          "Description": {
            "en": "The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36."
          },
          "Type": "Number"
        },
        "DataDiskSize": {
          "Description": {
            "en": "The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20. A value of 0 indicates that no data disk is attached. If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size. Default value: 0."
          },
          "Type": "Number"
        },
        "ImageId": {
          "Description": {
            "en": "The image ID. You can call the ListImages operation to query the available images in the specified region."
          },
          "Type": "String",
          "Default": "fe9c66133a9d4688872869726b52****"
        },
        "Period": {
          "Description": {
            "en": "The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36."
          },
          "Type": "Number"
        },
        "PlanId": {
          "Description": {
            "en": "The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region."
          },
          "Type": "String",
          "Default": "swas.s2.c2m1s40b3t04"
        }
      },
      "Resources": {
        "Instances": {
          "Properties": {
            "AutoRenew": {
              "Ref": "AutoRenew"
            },
            "AutoRenewPeriod": {
              "Ref": "AutoRenewPeriod"
            },
            "DataDiskSize": {
              "Ref": "DataDiskSize"
            },
            "Amount": 1,
            "ImageId": {
              "Ref": "ImageId"
            },
            "Period": {
              "Ref": "Period"
            },
            "PlanId": {
              "Ref": "PlanId"
            }
          },
          "Type": "ALIYUN::SWAS::Instances"
        }
      },
      "Outputs": {
        "InnerIpAddress": {
          "Description": "The inner IP address of simple application server.",
          "Value": {
            "Fn::GetAtt": [
              "Instances",
              "InnerIpAddresses"
            ]
          }
        },
        "InstanceId": {
          "Description": "The ID of the simple application server.",
          "Value": {
            "Fn::GetAtt": [
              "Instances",
              "InstanceIds"
            ]
          }
        },
        "PublicIpAddress": {
          "Description": "The public IP address of simple application server.",
          "Value": {
            "Fn::GetAtt": [
              "Instances",
              "PublicIpAddresses"
            ]
          }
        }
      }
    }
    ```
