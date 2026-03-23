ALIYUN::BastionHost::Instance is used to create a bastion host.

## Syntax

```
{
  "Type": "ALIYUN::BastionHost::Instance",
  "Properties": {
    "ExtraBandwidth": Integer,
    "ResourceGroupId": String,
    "Version": String,
    "ExtendedStoragePlans": Integer,
    "AutoRenew": Boolean,
    "Period": Integer,
    "AutoPay": Boolean,
    "Plan": Integer,
    "StartInstanceParam": Map,
    "PeriodUnit": String
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

ExtendedStoragePlans

Integer

Yes

Yes

The storage plan that provides additional storage capacity for the bastion host.

By default, a bastion host is configured with specific storage capacity for videos. If the default storage capacity cannot meet your requirements for video storage, you can use the storage plan to obtain additional storage capacity.

Valid values: 0 to 500. Unit: TB.

ExtraBandwidth

Integer

Yes

Yes

The bandwidth plan that provides additional bandwidth for the bastion host.

By default, a bastion host is configured with a specific amount of bandwidth. If the default bandwidth cannot meet your O&M requirements, you can use the bandwidth plan to obtain additional bandwidth.

Valid values: 0 to 200. Unit: Mbit/s.

Plan

Integer

Yes

Yes

The number of assets.

Valid values: 50, 100, 200, 500, 1000, 2000, 5000, and 10000.

StartInstanceParam

Map

Yes

No

The startup properties of the bastion host.  

For more information, see [StartInstanceParam properties](#0a479700b9ozs).

Version

String

Yes

No

The edition of the bastion host.

Valid values:

-   Enterprise: Enterprise Edition supports the dual-engine running mode and provides O&M capabilities, such as database O&M and control, automatic password rotation of Linux servers, webpage-based O&M, and centralized O&M in hybrid cloud scenarios by using the network domain feature. This edition provides higher stability and reliability than Basic Edition. When your bastion host runs as normal, two engines work at the same time to improve O&M efficiency. If a single point of failure (SPOF) occurs, the bastion host automatically switches between the two engines to ensure that your business can run as expected. Enterprise Edition supports higher specifications and provides higher performance than Basic Edition. Enterprise Edition allows you to perform efficient and stable O&M on more than 1,000 assets.
    
-   Basic: Basic Edition supports the single-engine running mode to meet your basic O&M and auditing requirements.
    

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   true
    
-   false
    

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

The auto-renewal cycle is one month. After you enable auto-renewal, the system deducts fees for renewal nine days before the bastion host expires. The system continues to deduct fees for renewal until the payment is successful or the previous day before the bastion host expires.  

Period

Integer

No

No

The subscription duration of the bastion host.

Valid values when PeriodUnit is set to Month: 1, 3, and 6.

Valid values when PeriodUnit is set to Year: 1 to 3.

PeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Month
    
-   Year
    

ResourceGroupId

String

No

No

The resource group to which the bastion host belongs.

None.

## StartInstanceParam syntax

```
"StartInstanceParam": {
  "VswitchId": String,
  "SecurityGroupIds": List
}
```

## StartInstanceParam properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SecurityGroupIds

List

Yes

No

The IDs of the security groups.

You can specify up to 20 security group IDs.

VswitchId

String

Yes

No

The vSwitch ID.

None.

## Return values

Fn::GetAtt

InstanceId: the ID of the bastion host.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AutoPay:
    Default: false
    Description:
      en: Whether to auto pay the bill.
    Required: false
    Type: Boolean
  AutoRenew:
    Description:
      en: Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After
        you enable auto-renewal, the system deducts the renewal fee nine days before
        the resource expires. If the payment fails, the system does not stop deducting
        the fee until the deduction is successful or one day before the resource expires.
    Required: false
    Type: Boolean
  ExtendedStoragePlans:
    Description:
      en: 'If the default storage capacity is insufficient, you can purchase extended
        storage plans.Unit: TB'
    MaxValue: 500
    MinValue: 0
    Required: true
    Type: Number
  ExtraBandwidth:
    Description:
      en: 'Additional bandwidth is added to the default settings to ensure efficient
        O&M.Unit: Mbps'
    MaxValue: 200
    MinValue: 0
    Required: true
    Type: Number
  Period:
    AllowedValues:
    - 1
    - 2
    - 3
    - 6
    AssociationProperty: PayPeriod
    Description:
      en: 'The subscription period of the bastionhost instanceIf PeriodUnit is month,
        the valid range is 1, 3, 6

        If periodUnit is year, the valid range is 1, 2, 3'
    Required: false
    Type: Number
  PeriodUnit:
    AllowedValues:
    - Month
    - Year
    AssociationProperty: PayPeriodUnit
    Description:
      en: 'The unit of the subscription duration. Valid values:

        Month

        Year

        Default value: Month.'
    Required: false
    Type: String
  Plan:
    AllowedValues:
    - 50
    - 100
    - 200
    - 500
    - 1000
    - 2000
    - 5000
    - 10000
    Description:
      en: 'The number of asset authorization and concurrency limit.Unit: Asset number'
    Required: true
    Type: Number
  ResourceGroupId:
    AssociationProperty: ALIYUN::ECS::ResourceGroup::ResourceGroupId
    Description:
      en: Resource group ID.
    Required: false
    Type: String
  StartInstanceParam:
    AssociationPropertyMetadata:
      Parameters:
        SecurityGroupIds:
          AssociationProperty: List[Parameter]
          AssociationPropertyMetadata:
            Parameter:
              AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
              AssociationPropertyMetadata:
                VpcId: ${VpcId}
              Description:
                en: Security group id.
              Required: false
              Type: String
          Description:
            en: List of security group IDs bound to the bastion host instance
          MaxLength: 20
          MinLength: 1
          Required: true
          Type: Json
        VswitchId:
          Description:
            en: The VSwitch ID bound to the bastion host instance.
          Required: true
          Type: String
    Description:
      en: Parameters required to start a bastion host instance.
    Required: true
    Type: Json
  Version:
    AllowedValues:
    - Enterprise
    - Basic
    Description:
      en: 'Enterprise version:- Deployment instructions: dual-engine architecture,
        supports multiple availability zones, and ensures high stability

        - Operation and maintenance scenarios: unified operation and maintenance of
        assets on Alibaba Cloud, offline IDC servers, and third-party clouds

        - Asset type: Linux/Windows, database assets

        - User management: RAM, AD/LDAP and local users

        - Control strategy: fine-grained strategic control such as operation and maintenance
        approval, high-risk command blocking, etc.

        - Operation and maintenance audit: full traceability of operation and maintenance
        log audit and video audit

        Value-added capabilities: automatic password change of Linux assets, database
        operation and maintenance management and control, convenient operation and
        maintenance of Web and client, network domain agent hybrid cloud scenario
        operation and maintenance mode, etc.Basic version:- Deployment instructions:
        The basic version is deployed on a single machine and does not support multiple
        availability zones.

        - Operation and maintenance scenarios: unified operation and maintenance of
        assets on Alibaba Cloud, offline IDC servers, and third-party clouds

        - Asset type: Linux/Windows assets

        - User management: RAM, AD/LDAP and local users

        - Control strategy: Operation and maintenance approval, high-risk command
        blocking and other strategic management and control

        - Operation and maintenance audit: full traceability of operation and maintenance
        log audit and video audit'
    Required: true
    Type: String
Resources:
  Instance:
    Properties:
      AutoPay:
        Ref: AutoPay
      AutoRenew:
        Ref: AutoRenew
      ExtendedStoragePlans:
        Ref: ExtendedStoragePlans
      ExtraBandwidth:
        Ref: ExtraBandwidth
      Period:
        Ref: Period
      PeriodUnit:
        Ref: PeriodUnit
      Plan:
        Ref: Plan
      ResourceGroupId:
        Ref: ResourceGroupId
      StartInstanceParam:
        Ref: StartInstanceParam
      Version:
        Ref: Version
    Type: ALIYUN::BastionHost::Instance
Outputs:
  InstanceId:
    Description: Instance Id.
    Value:
      Fn::GetAtt:
      - Instance
      - InstanceId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ExtraBandwidth": {
      "Type": "Number",
      "Description": {
        "en": "Additional bandwidth is added to the default settings to ensure efficient O&M.Unit: Mbps"
      },
      "Required": true,
      "MinValue": 0,
      "MaxValue": 200
    },
    "ResourceGroupId": {
      "AssociationProperty": "ALIYUN::ECS::ResourceGroup::ResourceGroupId",
      "Type": "String",
      "Description": {
        "en": "Resource group ID."
      },
      "Required": false
    },
    "Version": {
      "Type": "String",
      "Description": {
        "en": "Enterprise version:- Deployment instructions: dual-engine architecture, supports multiple availability zones, and ensures high stability\n- Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds\n- Asset type: Linux/Windows, database assets\n- User management: RAM, AD/LDAP and local users\n- Control strategy: fine-grained strategic control such as operation and maintenance approval, high-risk command blocking, etc.\n- Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit\nValue-added capabilities: automatic password change of Linux assets, database operation and maintenance management and control, convenient operation and maintenance of Web and client, network domain agent hybrid cloud scenario operation and maintenance mode, etc.Basic version:- Deployment instructions: The basic version is deployed on a single machine and does not support multiple availability zones.\n- Operation and maintenance scenarios: unified operation and maintenance of assets on Alibaba Cloud, offline IDC servers, and third-party clouds\n- Asset type: Linux/Windows assets\n- User management: RAM, AD/LDAP and local users\n- Control strategy: Operation and maintenance approval, high-risk command blocking and other strategic management and control\n- Operation and maintenance audit: full traceability of operation and maintenance log audit and video audit"
      },
      "AllowedValues": [
        "Enterprise",
        "Basic"
      ],
      "Required": true
    },
    "ExtendedStoragePlans": {
      "Type": "Number",
      "Description": {
        "en": "If the default storage capacity is insufficient, you can purchase extended storage plans.Unit: TB"
      },
      "Required": true,
      "MinValue": 0,
      "MaxValue": 500
    },
    "AutoRenew": {
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto renew the prepay instance. The auto-renewal period is Monthly.After you enable auto-renewal, the system deducts the renewal fee nine days before the resource expires.If the payment fails, the system does not stop deducting the fee until the deduction is successful or one day before the resource expires."
      },
      "Required": false
    },
    "Period": {
      "AssociationProperty": "PayPeriod",
      "Type": "Number",
      "Description": {
        "en": "The subscription period of the bastionhost instanceIf PeriodUnit is month, the valid range is 1, 3, 6\nIf periodUnit is year, the valid range is 1, 2, 3"
      },
      "AllowedValues": [
        1,
        2,
        3,
        6
      ],
      "Required": false
    },
    "AutoPay": {
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto pay the bill."
      },
      "Required": false,
      "Default": false
    },
    "Plan": {
      "Type": "Number",
      "Description": {
        "en": "The number of asset authorization and concurrency limit.Unit: Asset number"
      },
      "AllowedValues": [
        50,
        100,
        200,
        500,
        1000,
        2000,
        5000,
        10000
      ],
      "Required": true
    },
    "StartInstanceParam": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "VswitchId": {
            "Type": "String",
            "Description": {
              "en": "The VSwitch ID bound to the bastion host instance."
            },
            "Required": true
          },
          "SecurityGroupIds": {
            "AssociationPropertyMetadata": {
              "Parameter": {
                "AssociationPropertyMetadata": {
                  "VpcId": "${VpcId}"
                },
                "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
                "Type": "String",
                "Description": {
                  "en": "Security group id."
                },
                "Required": false
              }
            },
            "AssociationProperty": "List[Parameter]",
            "Type": "Json",
            "Description": {
              "en": "List of security group IDs bound to the bastion host instance"
            },
            "Required": true,
            "MinLength": 1,
            "MaxLength": 20
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "Parameters required to start a bastion host instance."
      },
      "Required": true
    },
    "PeriodUnit": {
      "AssociationProperty": "PayPeriodUnit",
      "Type": "String",
      "Description": {
        "en": "The unit of the subscription duration. Valid values:\nMonth\nYear\nDefault value: Month."
      },
      "AllowedValues": [
        "Month",
        "Year"
      ],
      "Required": false
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::BastionHost::Instance",
      "Properties": {
        "ExtraBandwidth": {
          "Ref": "ExtraBandwidth"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "Version": {
          "Ref": "Version"
        },
        "ExtendedStoragePlans": {
          "Ref": "ExtendedStoragePlans"
        },
        "AutoRenew": {
          "Ref": "AutoRenew"
        },
        "Period": {
          "Ref": "Period"
        },
        "AutoPay": {
          "Ref": "AutoPay"
        },
        "Plan": {
          "Ref": "Plan"
        },
        "StartInstanceParam": {
          "Ref": "StartInstanceParam"
        },
        "PeriodUnit": {
          "Ref": "PeriodUnit"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "Instance Id.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    }
  }
}
                        
```
