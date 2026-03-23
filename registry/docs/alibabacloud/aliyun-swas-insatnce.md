ALIYUN::SWAS::Instance is used to create a subscription simple application server.

## Syntax

```
{
  "Type": "ALIYUN::SWAS::Instance",
  "Properties": {
    "AutoRenewPeriod": Integer,
    "PlanId": String,
    "AutoRenew": Boolean,
    "ImageId": String,
    "Period": Integer,
    "DataDiskSize": Integer,
    "Tags": List
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraint**

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

The subscription duration for the resource.

Unit: month.

Valid values: 1, 3, 6, 12, 24, and 36.

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

-   true: Auto-renewal is enabled.
    
-   false (default): Auto-renewal is disabled.
    

AutoRenewPeriod

Integer

No

No

Auto-renewal period.

Unit: month.

Valid values: 1, 3, 6, 12, 24, and 36.

This property must be specified only when AutoRenew is set to true.

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
    

Default: 0

Tags

List

No

Yes

List of labels.

For more information, see [the Tags property](#title-7sd-9iu-9ct).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags property

**Property Name**

**Type**

**Required**

**Allow updates**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

None

Value

String

No

No

The tag value.

None

## Return values

Fn::GetAtt

-   PublicIpAddress: the public IP address of the simple application server.  
    
-   InnerIpAddress: the private IP address of the simple application server.  
    
-   InstanceId: the ID of the simple application server.
    

## Examples

YAML

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
  Instance:
    Properties:
      AutoRenew:
        Ref: AutoRenew
      AutoRenewPeriod:
        Ref: AutoRenewPeriod
      DataDiskSize:
        Ref: DataDiskSize
      ImageId:
        Ref: ImageId
      Period:
        Ref: Period
      PlanId:
        Ref: PlanId
    Type: ALIYUN::SWAS::Instance
Outputs:
  InnerIpAddress:
    Description: The private IP address of the Simple Application Server instance.
    Value:
      Fn::GetAtt:
      - Instance
      - InnerIpAddress
  InstanceId:
    Description: The ID of the Simple Application Server instance.
    Value:
      Fn::GetAtt:
      - Instance
      - InstanceId
  PublicIpAddress:
    Description: The public IP address of the Simple Application Server instance.
    Value:
      Fn::GetAtt:
      - Instance
      - PublicIpAddress
```

JSON

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
    "Instance": {
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
      "Type": "ALIYUN::SWAS::Instance"
    }
  },
  "Outputs": {
    "InnerIpAddress": {
      "Description": "The private IP address of the Simple Application Server instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InnerIpAddress"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the Simple Application Server instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    },
    "PublicIpAddress": {
      "Description": "The public IP address of the Simple Application Server instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "PublicIpAddress"
        ]
      }
    }
  }
}
```
