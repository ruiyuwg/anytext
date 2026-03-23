The ALIYUN::Flink::InstanceV2 resource creates a fully managed Flink workspace.

## Syntax

```
{
  "Type": "ALIYUN::Flink::InstanceV2",
  "Properties": {
    "ChargeType": String,
    "InstanceName": String,
    "Storage": Map,
    "VpcId": String,
    "VSwitchIds": List,
    "AutoRenew": Boolean,
    "Duration": Integer,
    "PricingCycle": String,
    "PromotionCode": String,
    "ResourceSpec": Map,
    "UsePromotionCode": Boolean
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ChargeType

String

Yes

No

The billing method of the instance.

Valid values:

-   POST: pay-as-you-go
    
-   PRE: subscription
    

InstanceName

String

Yes

No

The name of the workspace.

The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). It cannot end with a hyphen.

Storage

Map

Yes

No

The storage configuration.

For more information, see [Storage properties](#79445a190dire).

VpcId

String

Yes

No

The ID of the Virtual Private Cloud (VPC).

None

VSwitchIds

List

Yes

No

The IDs of the virtual switches.

You can configure up to 150 virtual switches.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal for the subscription instance.

Valid values:

-   **true**: Auto-renewal is enabled.
    
-   **false**: Auto-renewal is disabled (default).
    

Duration

Integer

No

No

The subscription duration of the instance.

When `ChargeType` is set to `PRE` (subscription), the `duration` parameter is required.

-   If you set `PricingCycle` to Month, valid values are 1, 2, 3, 6, 7, 8, 9, 12, 24, and 36.
    
-   If you set `PricingCycle` to Year, valid values are 1, 2, and 3.
    

**Note**

This parameter is required when you set ChargeType to PRE.

PricingCycle

String

No

No

The billing cycle of the subscription instance.

Valid values:

-   **year**
    
-   **month**: The month.
    

**Note**

This parameter is required when you set ChargeType to PRE.

PromotionCode

String

No

No

The coupon code.

None

ResourceSpec

Map

No

No

The resource specifications of the instance.

For more information, see [ResourceSpec properties](#e48eca90a2a3a).

**Note**

This parameter is required when you set ChargeType to PRE.

UsePromotionCode

Boolean

No

No

Specifies whether to use a coupon.

None

## Storage syntax

```
"Storage": {
  "FullyManaged": Boolean,
  "Oss": Map
}
```

## Storage properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

FullyManaged

Boolean

No

No

Specifies whether to use fully managed storage.

You can use either fully managed storage or an Object Storage Service (OSS) bucket, but not both.

-   true: Enables the feature.
    
-   false: This value is not supported.
    

Oss

Map

No

No

The Object Storage Service (OSS) storage configuration.

For more information, see [Oss properties](#a24825d544rbg).

## Oss syntax

```
"Oss": {
  "Bucket": String
}
```

## Oss properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Bucket

String

Yes

No

The name of the OSS bucket to attach.

None

## ResourceSpec syntax

```
"ResourceSpec": {
  "Cpu": Integer,
  "MemoryGB": Integer
}
```

## ResourceSpec properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Cpu

Integer

No

No

The number of CPUs.

**Note**

This parameter is required for subscription workspaces. It is optional for pay-as-you-go workspaces. The number of CPUs for the project must be less than the available CPUs in the workspace. An error occurs if the specified number of CPUs exceeds the available CPUs. The available CPUs are the total CPUs of the workspace minus the CPUs that are allocated to other projects.

MemoryGB

Integer

No

No

The memory size in GB.

**Note**

The memory size must be four times the number of CPUs.

## Return value

Fn::GetAtt

-   InstanceId: The ID of the instance.
    
-   WorkspaceId: The ID of the workspace.
    
-   OrderId: The ID of the order.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceName:
    Type: String
    Description: The name of the instance.
    AllowedPattern: ^[a-z][a-z0-9-]{1,60}
    Required: true
  Storage:
    AssociationPropertyMetadata:
      Parameters:
        FullyManaged:
          Type: Boolean
          Description: Specifies whether the storage is fully managed.
          Required: false
        Oss:
          AssociationPropertyMetadata:
            Parameters:
              Bucket:
                Type: String
                Description: The name of the OSS bucket.
                Required: true
          Type: Json
          Description: The OSS storage configuration.
          Required: false
    Type: Json
    Description: The storage configuration for the workspace.
    Required: true
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description: The ID of the VPC.
    Required: true
  VSwitchIds:
    Type: Json
    Description: The IDs of the virtual switches.
    Required: true
    MinLength: 1
    MaxLength: 150
  ChargeType:
    Type: String
    Description: The billing method of the instance.
    AllowedValues:
      - PayAsYouGo
      - Subscription
    Required: true
  ResourceSpec:
    AssociationPropertyMetadata:
      Parameters:
        Cpu:
          Type: Number
          Description: The number of CPUs.
          Required: false
        MemoryGB:
          Type: Number
          Description: |-
            The memory size in GB.
            The memory size must be four times the number of CPUs.
          Required: false
    Type: Json
    Description: |-
      The resource specifications.
      This parameter is required when ChargeType is set to PRE.
    Required: false
Resources:
  InstanceV2:
    Type: ALIYUN::Flink::InstanceV2
    Properties:
      InstanceName:
        Ref: InstanceName
      Storage:
        Ref: Storage
      VpcId:
        Ref: VpcId
      VSwitchIds:
        Ref: VSwitchIds
      ChargeType:
        Ref: ChargeType
      ResourceSpec:
        Ref: ResourceSpec
Outputs:
  InstanceId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - InstanceV2
        - InstanceId
  WorkspaceId:
    Description: The ID of the workspace.
    Value:
      Fn::GetAtt:
        - InstanceV2
        - WorkspaceId
  OrderId:
    Description: The ID of the order.
    Value:
      Fn::GetAtt:
        - InstanceV2
        - OrderId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceName": {
      "Type": "String",
      "Description": "The name of the instance.",
      "AllowedPattern": "^[a-z][a-z0-9-]{1,60}",
      "Required": true
    },
    "Storage": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "FullyManaged": {
            "Type": "Boolean",
            "Description": "Specifies whether the storage is fully managed.",
            "Required": false
          },
          "Oss": {
            "AssociationPropertyMetadata": {
              "Parameters": {
                "Bucket": {
                  "Type": "String",
                  "Description": "The name of the OSS bucket.",
                  "Required": true
                }
              }
            },
            "Type": "Json",
            "Description": "The OSS storage configuration.",
            "Required": false
          }
        }
      },
      "Type": "Json",
      "Description": "The storage configuration for the workspace.",
      "Required": true
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": "The ID of the VPC.",
      "Required": true
    },
    "VSwitchIds": {
      "Type": "Json",
      "Description": "The IDs of the virtual switches.",
      "Required": true,
      "MinLength": 1,
      "MaxLength": 150
    },
    "ChargeType": {
      "Type": "String",
      "Description": "The billing method of the instance.",
      "AllowedValues": [
        "PayAsYouGo",
        "Subscription"
      ],
      "Required": true
    },
    "ResourceSpec": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Cpu": {
            "Type": "Number",
            "Description": "The number of CPUs.",
            "Required": false
          },
          "MemoryGB": {
            "Type": "Number",
            "Description": "The memory size in GB.\nThe memory size must be four times the number of CPUs.",
            "Required": false
          }
        }
      },
      "Type": "Json",
      "Description": "The resource specifications.\nThis parameter is required when ChargeType is set to PRE.",
      "Required": false
    }
  },
  "Resources": {
    "InstanceV2": {
      "Type": "ALIYUN::Flink::InstanceV2",
      "Properties": {
        "InstanceName": {
          "Ref": "InstanceName"
        },
        "Storage": {
          "Ref": "Storage"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchIds": {
          "Ref": "VSwitchIds"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        },
        "ResourceSpec": {
          "Ref": "ResourceSpec"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceV2",
          "InstanceId"
        ]
      }
    },
    "WorkspaceId": {
      "Description": "The ID of the workspace.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceV2",
          "WorkspaceId"
        ]
      }
    },
    "OrderId": {
      "Description": "The ID of the order.",
      "Value": {
        "Fn::GetAtt": [
          "InstanceV2",
          "OrderId"
        ]
      }
    }
  }
}
                        
```
