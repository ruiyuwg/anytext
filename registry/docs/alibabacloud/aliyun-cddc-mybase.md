ALIYUN::CDDC::MyBase is used to create a host in a Proprietary MyBase dedicated cluster in ApsaraDB for MyBase.

## Syntax

```
{
  "Type": "ALIYUN::CDDC::MyBase",
  "Properties": {
    "EcsInstanceName": String,
    "PeriodType": String,
    "ResourceGroupId": String,
    "UserData": String,
    "DedicatedHostGroupDescription": String,
    "DedicatedHostGroupId": String,
    "AutoRenew": Boolean,
    "EcsUniqueSuffix": Boolean,
    "ImageId": String,
    "UserDataInBase64": Boolean,
    "EcsHostName": String,
    "Engine": String,
    "PasswordInherit": Boolean,
    "KeyPairName": String,
    "ZoneId": String,
    "VSwitchId": String,
    "SecurityGroupId": String,
    "ECSClassList": List,
    "Period": Integer,
    "PayType": String,
    "InternetChargeType": String,
    "EcsDeploymentSetId": String,
    "InternetMaxBandwidthOut": Integer,
    "VpcId": String,
    "OsPassword": String
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

ECSClassList

List

Yes

No

The specifications of the Elastic Compute Service (ECS) instance.

Example:

```
[{"sysDiskCapacity":40,"instanceType":"ecs.d2s.10xlarge","nodeCount":1,"sysDiskType":"cloud_essd"}]
```

Engine

String

Yes

No

The type of the database engine.

Valid values:

-   AliSQL
    
-   Tair
    

PayType

String

Yes

No

The billing method.

Set the value to **PrePaid**.

Period

Integer

Yes

No

The subscription duration.

None.

SecurityGroupId

String

Yes

No

The ID of the security group.

None.

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None.

VSwitchId

String

Yes

No

The vSwitch ID.

None.

ZoneId

String

Yes

No

The zone ID.

None.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   **true:**
    
-   **false** (default)
    

DedicatedHostGroupDescription

String

No

No

The name of the Proprietary MyBase dedicated cluster.

None.

DedicatedHostGroupId

String

No

No

The ID of the Proprietary MyBase dedicated cluster.

None.

EcsDeploymentSetId

String

No

No

The ID of the ECS deployment set.

None.

EcsHostName

String

No

No

The hostname.

-   Windows: The hostname must be 2 to 15 characters in length, and can contain letters and digits. The hostname cannot contain only digits.
    
-   OSs other than Windows such as Linux: The hostname must be 2 to 64 characters in length. Separate multiple segments in the hostname with periods (.). Each segment can contain letters and digits and cannot contain consecutive periods (.). The hostname cannot start or end with a period (.).
    

EcsInstanceName

String

No

No

The name of the ECS instance.

The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

The default value of this property is the value of the InstanceId property.

EcsUniqueSuffix

Boolean

No

No

Specifies whether to automatically append sequential suffixes to the HostName and InstanceName values when you create multiple instances.

The sequential suffixes range from 001 to 999.

Valid values:

-   **true**
    
-   **false** (default)
    

When you specify the HostName or InstanceName value in the `name_prefix[begin_number,bits]` format that does not contain a suffix specified by `name_suffix`, EcsUniqueSuffix does not take effect. The names are sorted only in the specified sequence.

ImageId

String

No

No

The ID of the custom image.

If you want to use the default image, you can leave this property empty.

InternetChargeType

String

No

No

The metering method for network usage.

Valid values:

-   PayByBandwidth
    
-   PayByTraffic
    

InternetMaxBandwidthOut

Integer

No

No

The maximum outbound public bandwidth.

Unit: Mbit/s.

Valid values: 0 to 100.

Default value: 0. If you set this property to a value that is greater than 0, a public IP address is created.

KeyPairName

String

No

No

The name of the key pair.

None.

OsPassword

String

No

No

The logon password of the host.

The password must meet the following requirements:

-   The password must be 8 to 30 characters in length.
    
-   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   The following special characters are supported: `` ( ) \ ~ ! @ # $ % ^ & * - _ + = | { } [ ] : ; ' < > , . ? / ` ``.
    

**Note**

If you want to specify the logon password later, you can leave this property empty.

-   If you specify this property, we recommend that you send requests by using `HTTPS` to prevent password leakage.
    

PasswordInherit

Boolean

No

No

Specifies whether to use the default password of the image.

Valid values:

-   **true**
    
-   **false** (default)
    

**Note**

When you set this property to true, you can leave **OSPassword** empty.

PeriodType

String

No

No

The unit of the subscription duration.

Set the value to **Monthly**.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

UserData

String

No

No

The user data.

The raw user data can be up to 16 KB in size.

UserDataInBase64

Boolean

No

No

Specifies whether to encode the user data in Base64.

Valid values:

-   true
    
-   false
    

## Return values

Fn::GetAtt

-   OrderIds: the order IDs.
    
-   InstanceIds: the IDs of the ECS instances that are created on the host.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AutoRenew:
    Description:
      en: Whether to enable auto renew.
    Required: false
    Type: Boolean
  DedicatedHostGroupDescription:
    Description:
      en: The name of the dedicated cluster.
    Required: false
    Type: String
  DedicatedHostGroupId:
    Description:
      en: The ID of the dedicated cluster.
    Required: false
    Type: String
  ECSClassList:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Description:
          en: ECS Class Properties.
        Required: true
        Type: Json
    Description:
      en: ECS Class List.
    MaxLength: 1
    MinLength: 1
    Required: true
    Type: Json
  EcsDeploymentSetId:
    Description:
      en: The ID of the deployment set.
    Required: false
    Type: String
  EcsHostName:
    Description:
      en: The host name of the ECS instance.
    Required: false
    Type: String
  EcsInstanceName:
    Description:
      en: The name of the ECS instance.
    Required: false
    Type: String
  EcsUniqueSuffix:
    Description:
      en: The unique suffix of the ECS instance.
    Required: false
    Type: Boolean
  Engine:
    Description:
      en: Database type.
    Required: true
    Type: String
  ImageId:
    Description:
      en: The image ID.
    Required: false
    Type: String
  InternetChargeType:
    AllowedValues:
    - PayByTraffic
    - PayByBandwidth
    AssociationPropertyMetadata:
      LocaleKey: InternetChargeType
    Description:
      en: "Network billing type. Value range: \nPayByBandwidth: billed based on fixed\
        \ bandwidth. \nPayByTraffic: Pay by traffic usage."
    Required: false
    Type: String
  InternetMaxBandwidthOut:
    Description:
      en: "Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second).\
        \ \nRange is [0,200]. Default is 1. \nWhile the property is not 0, public\
        \ ip will be assigned for instance."
    MinValue: 0
    Required: false
    Type: Number
  KeyPairName:
    Description:
      en: The name of the key pair.
    Required: false
    Type: String
  OsPassword:
    Description:
      en: Password of created ecs instance. Must contain at least 3 types of special
        character, lower character, upper character, number.
    Required: false
    Type: String
  PasswordInherit:
    Description:
      en: Whether to inherit the password from the parent cluster.
    Required: false
    Type: Boolean
  PayType:
    AllowedValues:
    - Subscription
    Description:
      en: Payment type, currently only supports PrePaid.
    Required: true
    Type: String
  Period:
    AssociationProperty: PayPeriod
    Description:
      en: The period of the subscription in months.
    MaxValue: 12
    MinValue: 1
    Required: true
    Type: Number
  PeriodType:
    AssociationProperty: PayPeriodUnit
    Description:
      en: Prepaid type, currently only supports Monthly (monthly subscription).
    Required: false
    Type: String
  ResourceGroupId:
    Description:
      en: Resource group id.
    Required: false
    Type: String
  SecurityGroupId:
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
    Description:
      en: The ID of the security group.
    Required: true
    Type: String
  UserData:
    AssociationProperty: TextArea
    Description:
      en: User-defined script data, the original data is up to 16KB.
    Required: false
    Type: String
  UserDataInBase64:
    Description:
      en: The user data of the ECS instance.
    Required: false
    Type: Boolean
  VSwitchId:
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
    Description:
      en: Virtual switch ID.
    Required: true
    Type: String
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Description:
      en: The ID of the VPC.
    Required: true
    Type: String
  ZoneId:
    AssociationProperty: ZoneId
    Description:
      en: Availability Zone ID.
    Required: true
    Type: String
Resources:
  MyBase:
    Properties:
      AutoRenew:
        Ref: AutoRenew
      DedicatedHostGroupDescription:
        Ref: DedicatedHostGroupDescription
      DedicatedHostGroupId:
        Ref: DedicatedHostGroupId
      ECSClassList:
        Ref: ECSClassList
      EcsDeploymentSetId:
        Ref: EcsDeploymentSetId
      EcsHostName:
        Ref: EcsHostName
      EcsInstanceName:
        Ref: EcsInstanceName
      EcsUniqueSuffix:
        Ref: EcsUniqueSuffix
      Engine:
        Ref: Engine
      ImageId:
        Ref: ImageId
      InternetChargeType:
        Ref: InternetChargeType
      InternetMaxBandwidthOut:
        Ref: InternetMaxBandwidthOut
      KeyPairName:
        Ref: KeyPairName
      OsPassword:
        Ref: OsPassword
      PasswordInherit:
        Ref: PasswordInherit
      PayType:
        Ref: PayType
      Period:
        Ref: Period
      PeriodType:
        Ref: PeriodType
      ResourceGroupId:
        Ref: ResourceGroupId
      SecurityGroupId:
        Ref: SecurityGroupId
      UserData:
        Ref: UserData
      UserDataInBase64:
        Ref: UserDataInBase64
      VSwitchId:
        Ref: VSwitchId
      VpcId:
        Ref: VpcId
      ZoneId:
        Ref: ZoneId
    Type: ALIYUN::CDDC::MyBase
Outputs:
  InstanceIds:
    Description: The instance id list of created ecs instances
    Value:
      Fn::GetAtt:
      - MyBase
      - InstanceIds
  OrderIds:
    Description: The order id list.
    Value:
      Fn::GetAtt:
      - MyBase
      - OrderIds
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EcsInstanceName": {
      "Type": "String",
      "Description": {
        "en": "The name of the ECS instance."
      },
      "Required": false
    },
    "PeriodType": {
      "AssociationProperty": "PayPeriodUnit",
      "Type": "String",
      "Description": {
        "en": "Prepaid type, currently only supports Monthly (monthly subscription)."
      },
      "Required": false
    },
    "ResourceGroupId": {
      "Type": "String",
      "Description": {
        "en": "Resource group id."
      },
      "Required": false
    },
    "UserData": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "User-defined script data, the original data is up to 16KB."
      },
      "Required": false
    },
    "DedicatedHostGroupDescription": {
      "Type": "String",
      "Description": {
        "en": "The name of the dedicated cluster."
      },
      "Required": false
    },
    "DedicatedHostGroupId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the dedicated cluster."
      },
      "Required": false
    },
    "AutoRenew": {
      "Type": "Boolean",
      "Description": {
        "en": "Whether to enable auto renew."
      },
      "Required": false
    },
    "EcsUniqueSuffix": {
      "Type": "Boolean",
      "Description": {
        "en": "The unique suffix of the ECS instance."
      },
      "Required": false
    },
    "ImageId": {
      "Type": "String",
      "Description": {
        "en": "The image ID."
      },
      "Required": false
    },
    "UserDataInBase64": {
      "Type": "Boolean",
      "Description": {
        "en": "The user data of the ECS instance."
      },
      "Required": false
    },
    "EcsHostName": {
      "Type": "String",
      "Description": {
        "en": "The host name of the ECS instance."
      },
      "Required": false
    },
    "Engine": {
      "Type": "String",
      "Description": {
        "en": "Database type."
      },
      "Required": true
    },
    "PasswordInherit": {
      "Type": "Boolean",
      "Description": {
        "en": "Whether to inherit the password from the parent cluster."
      },
      "Required": false
    },
    "KeyPairName": {
      "Type": "String",
      "Description": {
        "en": "The name of the key pair."
      },
      "Required": false
    },
    "ZoneId": {
      "AssociationProperty": "ZoneId",
      "Type": "String",
      "Description": {
        "en": "Availability Zone ID."
      },
      "Required": true
    },
    "VSwitchId": {
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      },
      "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
      "Type": "String",
      "Description": {
        "en": "Virtual switch ID."
      },
      "Required": true
    },
    "SecurityGroupId": {
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      },
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "Type": "String",
      "Description": {
        "en": "The ID of the security group."
      },
      "Required": true
    },
    "ECSClassList": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "Json",
          "Description": {
            "en": "ECS Class Properties."
          },
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "ECS Class List."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 1
    },
    "Period": {
      "AssociationProperty": "PayPeriod",
      "Type": "Number",
      "Description": {
        "en": "The period of the subscription in months."
      },
      "Required": true,
      "MinValue": 1,
      "MaxValue": 12
    },
    "PayType": {
      "Type": "String",
      "Description": {
        "en": "Payment type, currently only supports PrePaid."
      },
      "AllowedValues": [
        "Subscription"
      ],
      "Required": true
    },
    "InternetChargeType": {
      "AssociationPropertyMetadata": {
        "LocaleKey": "InternetChargeType"
      },
      "Type": "String",
      "Description": {
        "en": "Network billing type. Value range: \nPayByBandwidth: billed based on fixed bandwidth. \nPayByTraffic: Pay by traffic usage."
      },
      "AllowedValues": [
        "PayByTraffic",
        "PayByBandwidth"
      ],
      "Required": false
    },
    "EcsDeploymentSetId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the deployment set."
      },
      "Required": false
    },
    "InternetMaxBandwidthOut": {
      "Type": "Number",
      "Description": {
        "en": "Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). \nRange is [0,200]. Default is 1. \nWhile the property is not 0, public ip will be assigned for instance."
      },
      "Required": false,
      "MinValue": 0
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC."
      },
      "Required": true
    },
    "OsPassword": {
      "Type": "String",
      "Description": {
        "en": "Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number."
      },
      "Required": false
    }
  },
  "Resources": {
    "MyBase": {
      "Type": "ALIYUN::CDDC::MyBase",
      "Properties": {
        "EcsInstanceName": {
          "Ref": "EcsInstanceName"
        },
        "PeriodType": {
          "Ref": "PeriodType"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "UserData": {
          "Ref": "UserData"
        },
        "DedicatedHostGroupDescription": {
          "Ref": "DedicatedHostGroupDescription"
        },
        "DedicatedHostGroupId": {
          "Ref": "DedicatedHostGroupId"
        },
        "AutoRenew": {
          "Ref": "AutoRenew"
        },
        "EcsUniqueSuffix": {
          "Ref": "EcsUniqueSuffix"
        },
        "ImageId": {
          "Ref": "ImageId"
        },
        "UserDataInBase64": {
          "Ref": "UserDataInBase64"
        },
        "EcsHostName": {
          "Ref": "EcsHostName"
        },
        "Engine": {
          "Ref": "Engine"
        },
        "PasswordInherit": {
          "Ref": "PasswordInherit"
        },
        "KeyPairName": {
          "Ref": "KeyPairName"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "ECSClassList": {
          "Ref": "ECSClassList"
        },
        "Period": {
          "Ref": "Period"
        },
        "PayType": {
          "Ref": "PayType"
        },
        "InternetChargeType": {
          "Ref": "InternetChargeType"
        },
        "EcsDeploymentSetId": {
          "Ref": "EcsDeploymentSetId"
        },
        "InternetMaxBandwidthOut": {
          "Ref": "InternetMaxBandwidthOut"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "OsPassword": {
          "Ref": "OsPassword"
        }
      }
    }
  },
  "Outputs": {
    "OrderIds": {
      "Description": "The order id list.",
      "Value": {
        "Fn::GetAtt": [
          "MyBase",
          "OrderIds"
        ]
      }
    },
    "InstanceIds": {
      "Description": "The instance id list of created ecs instances",
      "Value": {
        "Fn::GetAtt": [
          "MyBase",
          "InstanceIds"
        ]
      }
    }
  }
}
                        
```
