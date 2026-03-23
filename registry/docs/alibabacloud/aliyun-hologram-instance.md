ALIYUN::Hologram::Instance is used to create a Hologres instance.

## Syntax

```
 {
  "Type": "ALIYUN::Hologram::Instance",
  "Properties": {
    "ColdStorageSize": Integer,
    "ResourceGroupId": String,
    "ZoneId": String,
    "ProductCode": String,
    "PricingCycle": String,
    "ScaleType": String,
    "StorageSize": Integer,
    "Cpu": Integer,
    "Duration": Integer,
    "AutoPay": Boolean,
    "Endpoints": List,
    "InstanceName": String,
    "GatewayCount": Integer,
    "PaymentType": String,
    "InstanceType": String,
    "Tags": List,
    "LeaderInstanceId": String,
    "InitialDatabases": String
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

ColdStorageSize

Integer

No

Yes

The infrequent access (IA) storage space of the instance.

Unit: GB.

**Note**

This property is invalid for pay-as-you-go instances.

ResourceGroupId

String

No

Yes

The ID of the resource group.

If you leave this property empty, the default resource group within your account is used.

ZoneId

String

Yes

No

The zone ID.

For more information, see the "Operation Description" section of the [CreateInstance](/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance#api-detail-21) topic.

ProductCode

String

No

No

The product code.

Valid values:

-   hologram\_maxcomputeAccelerate\_public\_cn: China site/Lakehouse Acceleration Edition
    
-   hologram\_combo\_public\_cn: China site/Subscription
    
-   hologram\_prepay\_public\_intl: International site/Subscription
    
-   hologram\_storage\_dp\_cn: China site/Storage plan
    
-   hologram\_postpay\_public\_cn: China site/Pay-as-you-go
    
-   hologram\_postpay\_public\_intl: International site/Pay-as-you-go
    
-   hologram\_maxcomputeAccelerate\_public\_intl: International site/Lakehouse Acceleration Edition
    
-   hologram\_cu\_dp\_cn: China site/Compute plan
    

PricingCycle

String

No

No

The unit of the billing cycle.

Valid values:

-   Month
    
    **Note**
    
    You must set this property to Month for subscription instances.
    
-   Hour
    
    **Note**
    
    You must set this property to Hour for pay-as-you-go instances.
    
    The default value of this property is Hour when InstanceType is set to Shared.
    

ScaleType

String

No

No

The specification change type.

Valid values:

-   UPGRADE
    
    **Note**
    
    If you set this property to UPGRADE, at least one configuration item in the new specifications must be higher than the configuration item in the original specifications. If a configuration item is empty during the specification upgrade process, the configuration item remains unchanged.
    
-   DOWNGRADE
    
    **Note**
    
    If you set this property to DOWNGRADE, at least one configuration item in the new specifications must be lower than the configuration item in the original specifications. If a configuration item is empty during the specification downgrade process, the configuration item remains unchanged.
    

StorageSize

Integer

No

Yes

The standard storage space of the instance.

Unit: GB.

**Note**

This property is invalid for pay-as-you-go instances.

Cpu

Integer

No

Yes

The instance specifications.

The following sets of instance specifications are supported:

-   8 vCPUs and 32 GB memory (number of compute nodes: 1)
    
-   16 vCPUs and 64 GB memory (number of compute nodes: 1)
    
-   32 vCPUs and 128 GB memory (number of compute nodes: 2)
    
-   64 vCPUs and 256 GB memory (number of compute nodes: 4)
    
-   96 vCPUs and 384 GB memory (number of compute nodes: 6)
    
-   128 vCPUs and 512 GB memory (number of compute nodes: 8)
    

**Note**

Specify the number of vCPUs for this property.

If you want to set this property to a set of instance specifications that have more than 1,024 GB memory, you must submit a ticket.

You do not need to specify this property when InstanceType is set to Shared.

The instance specifications of 8 vCPUs and 32 GB memory (number of compute nodes: 1) are suitable only for trial use and cannot be used in a production environment.

Duration

Integer

No

No

The billing cycle.

You do not need to specify this property for pay-as-you-go instances.  

Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, and 60.

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   true (default): enables automatic payment.
    
-   false: generates an unpaid order.
    

**Note**

If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can log on to the Expenses and Costs console to pay for the order.

Endpoints

List

Yes

Yes

The endpoints.

For more information, see [Endpoints properties](#2e6a999368hhh).

InstanceName

String

Yes

Yes

The instance name.

The name must be 2 to 64 characters in length.

GatewayCount

Integer

No

Yes

The number of gateways.

Valid values: 2 to 50.

**Note**

You must specify this property only when InstanceType is set to Warehouse.

PaymentType

String

Yes

No

The billing method.

-   Valid values that specify the subscription billing method:
    
    Subscription, PrePaid, Prepaid, PrePay, and PREPAY.
    
-   Valid values that specify the pay-as-you-go billing method:
    
    PayOnDemand, PayAsYouGo, PostPaid, Postpaid, PostPay, and POSTPAY.
    

InstanceType

String

Yes

No

The type of the instance.

Valid values:

-   Standard: general-purpose instance
    
-   Follower: read-only secondary instance
    
-   Warehouse: virtual warehouse instance
    
-   Shared: Hologres Shared Cluster instance
    

Tags

List

No

Yes

The tags of the instance.

You can add up to 20 tags. For more information, see [Tags properties](#2e6b5cdd683fh).

LeaderInstanceId

String

No

No

The ID of the primary instance.

None.

InitialDatabases

String

No

No

The names of the databases that are split after the database is initialized.

Separate the database names with commas (,).

## Endpoints syntax

```
"Endpoints": [
  {
    "Type": String,
    "Endpoint": String,
    "VpcId": String,
    "VSwitchId": String,
    "Enabled": Boolean,
    "VpcInstanceId": String,
    "AlternativeEndpoints": String
  }
]
```

## Endpoints properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

No

Yes

The network type.

Valid values:

-   VPCSingleTunnel: virtual private cloud (VPC) in SingleTunnel mode.
    
-   Intranet: internal network.
    
-   VPCAnyTunnel: VPC in AnyTunnel mode. This value is no longer supported for new instances.
    
-   Internet: Internet.
    

Endpoint

String

No

No

The endpoint.

Example: `hgpostcn-cn-aaab9ad2d8fb-cn-hangzhou-internal.hologres.aliyuncs.com:80`.

VpcId

String

No

Yes

The VPC ID.

Example: `vpc-uf6mrahzyu7uorlqq**`.

VSwitchId

String

No

Yes

The vSwitch ID.

None.

Enabled

Boolean

No

No

Specifies whether to enable endpoints.

Valid values:

-   true
    
-   false
    

VpcInstanceId

String

No

No

The VPC ID of the instance.

Example: `hgpostcn-cn-wwo3665tx004-frontend-**`.

AlternativeEndpoints

String

No

No

The alternative endpoints.

AnyTunnel and SingleTunnel modes are enabled for specific existing instances.  

When the instances are changed from the AnyTunnel mode to the SingleTunnel mode, the endpoints of both modes are saved. You can use this property to specify the endpoints.  

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

No

The tag value.

None.

Key

String

Yes

No

The tag key.

None.

## Return values

Fn::GetAtt

-   ColdStorageSize: the IA storage space of the instance.
    
-   ResourceGroupId: the ID of the resource group.
    
-   SuspendReason: the reason for the suspension.
    
-   ZoneId: the zone ID.
    
-   InstanceId: the instance ID.
    
-   Memory: the memory size.
    
-   InstanceOwner: the owner of the instance.
    
-   CreateTime: the time when the instance was created.
    
-   Cpu: the number of vCPUs.
    
-   StorageSize: the standard storage space of the instance.
    
-   EnableHiveAccess: indicates whether data lake acceleration is enabled.
    
-   ExpirationTime: the expiration time. This property is invalid for pay-as-you-go instances.
    
-   GatewayCpu: the CPU resources of the gateway.
    
-   Endpoints: the endpoints.
    
-   InstanceName: the instance name.
    
-   ComputeNodeCount: the number of compute nodes.
    
-   GatewayCount: the number of gateways.
    
-   AutoRenewal: indicates whether auto-renewal is enabled.
    
-   Version: the version of the instance.
    
-   CommodityCode: the commodity code.
    
-   GatewayMemory: the memory resources of the gateway.
    
-   PaymentType: the billing method of the instance.
    
-   InstanceType: the type of the instance.
    
-   Tags: the tags of the instance.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      AutoPay:
        Description:
          en: 'Whether to pay automatically. The default value is true. Value:
    
            - true: automatic payment
    
            - false: only generate orders, not pay
    
            > The default value is true. If the balance of your payment method is insufficient,
            you can set the parameter AutoPay to false, and an unpaid order will be generated.
            You can log in to the user Center to pay by yourself.'
        Type: Boolean
      ColdStorageSize:
        Description:
          en: 'Instance low-frequency storage space. Unit: GB.
    
            > Pay-As-You-Go (PostPaid) instances ignore this parameter.'
        Type: Number
      Cpu:
        Description:
          en: 'Instance specifications. Value:
    
            - 8 cores 32 GB (number of compute nodes: 1)
    
            - 16 cores 64 GB (number of compute nodes: 1)
    
            - 32 core 128 GB (number of compute nodes: 2)
    
            - 64 core 256 GB (number of compute nodes: 4)
    
            - 96 core 384 GB (number of computing nodes: 6)
    
            - 128 core 512 GB (number of compute nodes: 8)
    
            - Wait
    
            >>
    
            >- just fill in the audit number.
    
            >- Please submit a work order application for purchasing 1024 or above specifications.
    
            >- Shared instance types do not need to specify specifications.
    
            > The specification of -8 core 32GB (number of computing nodes: 1) is only
            for experience use and cannot be used for production.'
        Type: Number
      Duration:
        AllowedValues:
        - 1
        - 2
        - 3
        - 4
        - 5
        - 6
        - 7
        - 8
        - 9
        - 12
        - 24
        - 36
        - 60
        Description:
          en: 'The buying cycle. Buy for 2 months.
    
            > If the Payment type is PostPaid, you do not need to specify it.'
        Type: Number
      Endpoints:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                AlternativeEndpoints:
                  Description:
                    en: Some old instances have both AnyTunnel and SingleTunnel enabled.
                      When switching from AnyTunnel to SingleTunnel, the endpoints of
                      both are retained. Therefore, one more field is required to store
                      the Endpoint.
                  Type: String
                Enabled:
                  Description:
                    en: Whether to turn on the network.
                  Type: Boolean
                Endpoint:
                  Description:
                    en: Domain name.
                  Type: String
                Type:
                  Description:
                    en: The network type.
                  Type: String
                VSwitchId:
                  AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
                  AssociationPropertyMetadata:
                    VpcId: ${.VpcId}
                    ZoneId: ${.ZoneId}
                  Description:
                    en: The ID of the virtual switch.
                  Type: String
                VpcId:
                  AssociationProperty: ALIYUN::ECS::VPC::VPCId
                  Description:
                    en: VPC primary key.
                  Type: String
                VpcInstanceId:
                  Description:
                    en: The vpc instance ID.
                  Type: String
            Description:
              en: List of domain names.
            Type: Json
        Description:
          en: List of domain names.
        Type: Json
      GatewayCount:
        Description:
          en: Number of gateway nodes.
        Type: Number
      InstanceName:
        Description:
          en: The name of the resource.
        Type: String
      InstanceType:
        AllowedValues:
        - Standard
        - Follower
        - Warehouse
        - Shared
        Description:
          en: 'The instance type. Value:
    
            - Standard: Universal.
    
            - Follower: Read-only slave instance.
    
            - Warehouse: calculation group type.
    
            - Shared: Shared.'
        Type: String
      PaymentType:
        AllowedValues:
        - PayAsYouGo
        - PostPaid
        - PayOnDemand
        - Postpaid
        - PostPay
        - POSTPAY
        - Subscription
        - PrePaid
        - PrePay
        - Prepaid
        - PREPAY
        Description:
          en: The payment type of the resource.
        Type: String
      PricingCycle:
        AllowedValues:
        - Month
        - Hour
        Description:
          en: 'Billing cycle. Value:
    
            - Month: monthly billing
    
            - Hour: hourly billing
    
            >>
    
            > - PrePaid only supports Month
    
            > - PostPaid only supports Hour
    
            >- The Shared type is automatically set to Hour without specifying it.'
        Type: String
      ProductCode:
        Description:
          en: product code.
        Type: String
      ResourceGroupId:
        Description:
          en: The ID of the resource group.
        Type: String
      ScaleType:
        AllowedValues:
        - DOWNGRADE
        - UPGRADE
        Description:
          en: 'Change matching type. Value:
    
            - UPGRADE: UPGRADE
    
            - DOWNGRADE: Downgrading
    
            >>
    
            >- The upgrade specification cannot be less than the original specification.
            A blank field indicates that the original specification remains unchanged.
            On this basis, at least one specification is larger than the original specification.
    
            >- The downgrading specification cannot be greater than the original specification.
            A blank field indicates that the original specification remains unchanged.
            On this basis, at least one specification is smaller than the original specification.'
        Type: String
      StorageSize:
        Description:
          en: 'The standard storage space of the instance. Unit: GB.
    
            > Pay-As-You-Go instances (PostPaid) ignore this parameter.'
        Type: Number
      Tags:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                Key:
                  Type: String
                Value:
                  Type: String
            Type: Json
        Description:
          en: Tags of instance.
        MaxLength: 20
        Type: Json
      ZoneId:
        AssociationProperty: ZoneId
        Description:
          en: The zone Id.
        Type: String
    Resources:
      ExtensionResource:
        Properties:
          AutoPay:
            Ref: AutoPay
          ColdStorageSize:
            Ref: ColdStorageSize
          Cpu:
            Ref: Cpu
          Duration:
            Ref: Duration
          Endpoints:
            Ref: Endpoints
          GatewayCount:
            Ref: GatewayCount
          InstanceName:
            Ref: InstanceName
          InstanceType:
            Ref: InstanceType
          PaymentType:
            Ref: PaymentType
          PricingCycle:
            Ref: PricingCycle
          ProductCode:
            Ref: ProductCode
          ResourceGroupId:
            Ref: ResourceGroupId
          ScaleType:
            Ref: ScaleType
          StorageSize:
            Ref: StorageSize
          Tags:
            Ref: Tags
          ZoneId:
            Ref: ZoneId
        Type: ALIYUN::Hologram::Instance
    Outputs:
      AutoRenewal:
        Description: Whether automatic renewal is enabled.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - AutoRenewal
      ColdStorageSize:
        Description: 'Instance low-frequency storage space. Unit: GB.'
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ColdStorageSize
      CommodityCode:
        Description: The commodity code.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - CommodityCode
      ComputeNodeCount:
        Description: Number of compute nodes.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ComputeNodeCount
      Cpu:
        Description: Instance specifications.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Cpu
      CreateTime:
        Description: The creation time of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - CreateTime
      EnableHiveAccess:
        Description: Whether data Lake acceleration is enabled.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - EnableHiveAccess
      Endpoints:
        Description: List of domain names.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Endpoints
      ExpirationTime:
        Description: Expiration time.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ExpirationTime
      GatewayCount:
        Description: Number of gateway nodes.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - GatewayCount
      GatewayCpu:
        Description: Cpu resources of the Gateway.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - GatewayCpu
      GatewayMemory:
        Description: Gateway memory resources.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - GatewayMemory
      InstanceId:
        Description: Resource attribute fields that represent the resource's primary key.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - InstanceId
      InstanceName:
        Description: The name of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - InstanceName
      InstanceOwner:
        Description: The instance owner.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - InstanceOwner
      InstanceType:
        Description: The instance type.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - InstanceType
      Memory:
        Description: Memory.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Memory
      PaymentType:
        Description: The payment type of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - PaymentType
      ResourceGroupId:
        Description: The ID of the resource group.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ResourceGroupId
      StorageSize:
        Description: 'The standard storage space of the instance. Unit: GB.'
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - StorageSize
      SuspendReason:
        Description: Reason for suspension.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SuspendReason
      Tags:
        Description: Instance tag.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Tags
      Version:
        Description: The instance version.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Version
      ZoneId:
        Description: The zone Id.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ZoneId
                            
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ColdStorageSize": {
          "Type": "Number",
          "Description": {
            "en": "Instance low-frequency storage space. Unit: GB.\n> Pay-As-You-Go (PostPaid) instances ignore this parameter."
          }
        },
        "ResourceGroupId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the resource group."
          }
        },
        "ZoneId": {
          "AssociationProperty": "ZoneId",
          "Type": "String",
          "Description": {
            "en": "The zone Id."
          }
        },
        "ProductCode": {
          "Type": "String",
          "Description": {
            "en": "product code."
          }
        },
        "PricingCycle": {
          "Type": "String",
          "Description": {
            "en": "Billing cycle. Value:\n- Month: monthly billing\n- Hour: hourly billing\n>>\n> - PrePaid only supports Month\n> - PostPaid only supports Hour\n>- The Shared type is automatically set to Hour without specifying it."
          },
          "AllowedValues": [
            "Month",
            "Hour"
          ]
        },
        "ScaleType": {
          "Type": "String",
          "Description": {
            "en": "Change matching type. Value:\n- UPGRADE: UPGRADE\n- DOWNGRADE: Downgrading\n>>\n>- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.\n>- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification."
          },
          "AllowedValues": [
            "DOWNGRADE",
            "UPGRADE"
          ]
        },
        "Cpu": {
          "Type": "Number",
          "Description": {
            "en": "Instance specifications. Value:\n- 8 cores 32 GB (number of compute nodes: 1)\n- 16 cores 64 GB (number of compute nodes: 1)\n- 32 core 128 GB (number of compute nodes: 2)\n- 64 core 256 GB (number of compute nodes: 4)\n- 96 core 384 GB (number of computing nodes: 6)\n- 128 core 512 GB (number of compute nodes: 8)\n- Wait\n>>\n>- just fill in the audit number.\n>- Please submit a work order application for purchasing 1024 or above specifications.\n>- Shared instance types do not need to specify specifications.\n> The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production."
          }
        },
        "StorageSize": {
          "Type": "Number",
          "Description": {
            "en": "The standard storage space of the instance. Unit: GB.\n> Pay-As-You-Go instances (PostPaid) ignore this parameter."
          }
        },
        "Duration": {
          "Type": "Number",
          "Description": {
            "en": "The buying cycle. Buy for 2 months.\n> If the Payment type is PostPaid, you do not need to specify it."
          },
          "AllowedValues": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            12,
            24,
            36,
            60
          ]
        },
        "AutoPay": {
          "Type": "Boolean",
          "Description": {
            "en": "Whether to pay automatically. The default value is true. Value:\n- true: automatic payment\n- false: only generate orders, not pay\n> The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself."
          }
        },
        "Endpoints": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "Type": {
                    "Type": "String",
                    "Description": {
                      "en": "The network type."
                    }
                  },
                  "Endpoint": {
                    "Type": "String",
                    "Description": {
                      "en": "Domain name."
                    }
                  },
                  "VpcId": {
                    "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
                    "Type": "String",
                    "Description": {
                      "en": "VPC primary key."
                    }
                  },
                  "VSwitchId": {
                    "AssociationPropertyMetadata": {
                      "VpcId": "${.VpcId}",
                      "ZoneId": "${.ZoneId}"
                    },
                    "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
                    "Type": "String",
                    "Description": {
                      "en": "The ID of the virtual switch."
                    }
                  },
                  "Enabled": {
                    "Type": "Boolean",
                    "Description": {
                      "en": "Whether to turn on the network."
                    }
                  },
                  "VpcInstanceId": {
                    "Type": "String",
                    "Description": {
                      "en": "The vpc instance ID."
                    }
                  },
                  "AlternativeEndpoints": {
                    "Type": "String",
                    "Description": {
                      "en": "Some old instances have both AnyTunnel and SingleTunnel enabled. When switching from AnyTunnel to SingleTunnel, the endpoints of both are retained. Therefore, one more field is required to store the Endpoint."
                    }
                  }
                }
              },
              "Type": "Json",
              "Description": {
                "en": "List of domain names."
              }
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "List of domain names."
          }
        },
        "InstanceName": {
          "Type": "String",
          "Description": {
            "en": "The name of the resource."
          }
        },
        "GatewayCount": {
          "Type": "Number",
          "Description": {
            "en": "Number of gateway nodes."
          }
        },
        "PaymentType": {
          "Type": "String",
          "Description": {
            "en": "The payment type of the resource."
          },
          "AllowedValues": [
            "PayAsYouGo",
            "PostPaid",
            "PayOnDemand",
            "Postpaid",
            "PostPay",
            "POSTPAY",
            "Subscription",
            "PrePaid",
            "PrePay",
            "Prepaid",
            "PREPAY"
          ]
        },
        "InstanceType": {
          "Type": "String",
          "Description": {
            "en": "The instance type. Value:\n- Standard: Universal.\n- Follower: Read-only slave instance.\n- Warehouse: calculation group type.\n- Shared: Shared."
          },
          "AllowedValues": [
            "Standard",
            "Follower",
            "Warehouse",
            "Shared"
          ]
        },
        "Tags": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "Value": {
                    "Type": "String"
                  },
                  "Key": {
                    "Type": "String"
                  }
                }
              },
              "Type": "Json"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "Tags of instance."
          },
          "MaxLength": 20
        }
      },
      "Resources": {
        "ExtensionResource": {
          "Type": "ALIYUN::Hologram::Instance",
          "Properties": {
            "ColdStorageSize": {
              "Ref": "ColdStorageSize"
            },
            "ResourceGroupId": {
              "Ref": "ResourceGroupId"
            },
            "ZoneId": {
              "Ref": "ZoneId"
            },
            "ProductCode": {
              "Ref": "ProductCode"
            },
            "PricingCycle": {
              "Ref": "PricingCycle"
            },
            "ScaleType": {
              "Ref": "ScaleType"
            },
            "Cpu": {
              "Ref": "Cpu"
            },
            "StorageSize": {
              "Ref": "StorageSize"
            },
            "Duration": {
              "Ref": "Duration"
            },
            "AutoPay": {
              "Ref": "AutoPay"
            },
            "Endpoints": {
              "Ref": "Endpoints"
            },
            "InstanceName": {
              "Ref": "InstanceName"
            },
            "GatewayCount": {
              "Ref": "GatewayCount"
            },
            "PaymentType": {
              "Ref": "PaymentType"
            },
            "InstanceType": {
              "Ref": "InstanceType"
            },
            "Tags": {
              "Ref": "Tags"
            }
          }
        }
      },
      "Outputs": {
        "ColdStorageSize": {
          "Description": "Instance low-frequency storage space. Unit: GB.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ColdStorageSize"
            ]
          }
        },
        "ResourceGroupId": {
          "Description": "The ID of the resource group.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ResourceGroupId"
            ]
          }
        },
        "SuspendReason": {
          "Description": "Reason for suspension.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SuspendReason"
            ]
          }
        },
        "ZoneId": {
          "Description": "The zone Id.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ZoneId"
            ]
          }
        },
        "InstanceId": {
          "Description": "Resource attribute fields that represent the resource's primary key.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "InstanceId"
            ]
          }
        },
        "Memory": {
          "Description": "Memory.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Memory"
            ]
          }
        },
        "InstanceOwner": {
          "Description": "The instance owner.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "InstanceOwner"
            ]
          }
        },
        "CreateTime": {
          "Description": "The creation time of the resource.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "CreateTime"
            ]
          }
        },
        "Cpu": {
          "Description": "Instance specifications.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Cpu"
            ]
          }
        },
        "StorageSize": {
          "Description": "The standard storage space of the instance. Unit: GB.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "StorageSize"
            ]
          }
        },
        "EnableHiveAccess": {
          "Description": "Whether data Lake acceleration is enabled.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "EnableHiveAccess"
            ]
          }
        },
        "ExpirationTime": {
          "Description": "Expiration time.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ExpirationTime"
            ]
          }
        },
        "GatewayCpu": {
          "Description": "Cpu resources of the Gateway.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "GatewayCpu"
            ]
          }
        },
        "Endpoints": {
          "Description": "List of domain names.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Endpoints"
            ]
          }
        },
        "InstanceName": {
          "Description": "The name of the resource.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "InstanceName"
            ]
          }
        },
        "ComputeNodeCount": {
          "Description": "Number of compute nodes.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ComputeNodeCount"
            ]
          }
        },
        "GatewayCount": {
          "Description": "Number of gateway nodes.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "GatewayCount"
            ]
          }
        },
        "AutoRenewal": {
          "Description": "Whether automatic renewal is enabled.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "AutoRenewal"
            ]
          }
        },
        "Version": {
          "Description": "The instance version.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Version"
            ]
          }
        },
        "CommodityCode": {
          "Description": "The commodity code.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "CommodityCode"
            ]
          }
        },
        "GatewayMemory": {
          "Description": "Gateway memory resources.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "GatewayMemory"
            ]
          }
        },
        "PaymentType": {
          "Description": "The payment type of the resource.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "PaymentType"
            ]
          }
        },
        "InstanceType": {
          "Description": "The instance type.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "InstanceType"
            ]
          }
        },
        "Tags": {
          "Description": "Instance tag.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Tags"
            ]
          }
        }
      }
    }
                            
    ```
