ALIYUN::ThreatDetection::Instance is used to purchase Security Center (SAS).

## Syntax

```
{
  "Type": "ALIYUN::ThreatDetection::Instance",
  "Properties": {
    "ThreatAnalysis": String,
    "SasSlsStorage": String,
    "ContainerImageScan": String,
    "ThreatAnalysisSwitch": String,
    "VCore": String,
    "RenewPeriod": Integer,
    "SasSc": String,
    "SasCspmSwitch": String,
    "BuyNumber": String,
    "SasWebguardBoolean": String,
    "HoneypotSwitch": String,
    "PaymentType": String,
    "SasSdk": String,
    "SasAntiRansomware": String,
    "SasWebguardOrderNum": String,
    "RenewalStatus": String,
    "ProductType": String,
    "VulSwitch": String,
    "Period": Integer,
    "RaspCount": String,
    "VulCount": String,
    "VersionCode": String,
    "ModifyType": String,
    "SasCspm": String,
    "SasSdkSwitch": String,
    "RenewalPeriodUnit": String,
    "ContainerImageScanNew": String,
    "Honeypot": String
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

ThreatAnalysis

String

No

Yes

The log storage capacity for threat analysis.

Valid values: 0 to 9999999999.

**Note**

You can purchase the capacity only when ThreatAnalysisSwitch is set to 1. The value of ThreatAnalysis has a step size of 10 and must be a multiple of 10.

SasSlsStorage

String

No

Yes

The log storage capacity for log analysis.

Unit: GB. Valid values: 0 to 600000.

**Note**

The value has a step size of 10 and must be a multiple of 10.

ContainerImageScan

String

No

Yes

The container image scan feature.

Valid values: 0 to 200000.

**Note**

The value has a step size of 20 and must be a multiple of 20.

ThreatAnalysisSwitch

String

No

Yes

Specifies whether to enable the threat analysis feature.

Valid values:

-   0: does not enable the threat analysis feature.
    
-   1: enables the threat analysis feature.
    

VCore

String

No

Yes

The number of vCPUs.

None.

RenewPeriod

Integer

No

Yes

The auto-renewal period.

Unit: month.

**Note**

This property must be specified when **RenewalStatus** is set to **AutoRenewal**.

SasSc

String

No

Yes

Specifies whether to enable the security dashboard feature.

Valid values:

-   true
    
-   false
    

SasCspmSwitch

String

No

Yes

Specifies whether to enable the configuration assessment feature.

Valid values:

-   0: does not enable the configuration assessment feature.
    
-   1: enables the configuration assessment feature.
    

BuyNumber

String

No

Yes

The number of servers that you want to protect by using SAS.

None.

SasWebguardBoolean

String

No

Yes

Specifies whether to enable the feature of web tamper proofing.

Valid values:

-   0: does not enable the feature of web tamper proofing.
    
-   1: enables the feature of web tamper proofing.
    

HoneypotSwitch

String

No

Yes

Specifies whether to enable the cloud honeypot feature.

Valid values:

-   1: enables the cloud honeypot feature.
    
-   2: does not enable the cloud honeypot feature.
    

PaymentType

String

Yes

No

The billing method.

-   Valid values when you use the subscription billing method:
    
    Subscription, PrePaid, Prepaid, PrePay, and PREPAY.
    
-   Valid values when you use the pay-as-you-go billing method:
    
    PayOnDemand, PayAsYouGo, PostPaid, PayOnDemand, Postpaid, PostPay, and POSTPAY.
    

SasSdk

String

No

Yes

The quota for the feature of SDK for malicious file detection.

Unit: 10,000 times. Valid values: 10 to 9999999999.

**Note**

You can purchase the quota only when SasSdkSwitch is set to 1. The value of SasSdk has a step size of 10 and must be a multiple of 10.

SasAntiRansomware

String

No

Yes

The anti-ransomware capacity.

Unit: GB. Valid values: 0 to 9999999999.

**Note**

The value has a step size of 10 and must be a multiple of 10.

SasWebguardOrderNum

String

No

Yes

The quota for the feature of web tamper proofing.

Valid values: 0 to 9999.

**Note**

You can purchase the quota only when SasWebguardBoolean is set to 1.

RenewalStatus

String

No

Yes

The auto-renewal state.

Valid values:

-   AutoRenewal
    
-   ManualRenewal (default)
    

ProductType

String

No

No

The product type.

Set the value to sas on the China site (aliyun.com). You can leave this property empty on the international site (alibabacloud.com).

VulSwitch

String

No

Yes

Specifies whether to enable the vulnerability fixing feature.

Valid values:

-   0: does not enable the vulnerability fixing feature.
    
-   1: enables the vulnerability fixing feature.
    
    **Note**
    
    You can purchase the feature only when VersionCode is set to level7 or level10. If VersionCode is set to a different value, you do not need to separately purchase this feature because it is built into other versions.
    

Period

Integer

No

No

The subscription duration.

Unit: month. The value must be an integral multiple of 12.

**Note**

This property must be specified when you use the subscription billing method for SAS.

RaspCount

String

No

Yes

The quota for the application protection feature.

Valid values: 1 to 100000000.

VulCount

String

No

Yes

The quota for the vulnerability fixing feature.

Valid values: 20 to 100000000.

**Note**

You can purchase the quota only when VulSwitch is set to 1 and VersionCode is set to level7 or level10. When VulSwitch is set to 1 but VersionCode is set to a different value, you do not need to separately purchase the quota because it is contained in other versions.

VersionCode

String

Yes

Yes

The edition of SAS.

Valid values:

-   level7: Anti-virus Edition
    
-   level3: Advanced Edition
    
-   level2: Enterprise Edition
    
-   level8: Ultimate Edition
    
-   level10: Value-added Plan Edition
    

ModifyType

String

No

No

The specification change type.

Valid values:

-   Upgrade
    
-   Downgrade
    

SasCspm

String

No

Yes

The quota for the configuration assessment feature.

Valid values: 1000 to 9999999999.

**Note**

You can purchase the quota only when SasCspmSwitch is set to 1. The value of SasCspm has a step size of 100 and must be a multiple of 10.

SasSdkSwitch

String

No

Yes

Specifies whether to enable the feature of SDK for malicious file detection.

Valid values:

-   0: does not enable the feature of SDK for malicious file detection.
    
-   1: enables the feature of SDK for malicious file detection.
    

RenewalPeriodUnit

String

No

Yes

The unit of the auto-renewal period.

Valid values:

-   M: month
    
-   Y: year
    

**Note**

This property must be specified when RenewalStatus is set to AutoRenewal.

ContainerImageScanNew

String

No

Yes

The quota for the container image scan feature.

Valid values: 0 to 200000.

**Note**

The value has a step size of 20 and must be a multiple of 20.

Honeypot

String

No

Yes

The quota for the cloud honeypot feature.

Valid values: 20 to 500.

**Note**

The value must be at least 20. You can purchase the quota only when HoneypotSwitch is set to 1.

## Return values

Fn::GetAtt

-   ThreatAnalysis: the log storage capacity for threat analysis.
    
-   SasSlsStorage: the log storage capacity for log analysis.
    
-   ContainerImageScan: the container image scan feature.
    
-   ThreatAnalysisSwitch: indicates whether the threat analysis feature is enabled.
    
-   VCore: the number of vCPUs.
    
-   RenewPeriod: the auto-renewal period.
    
-   SasSc: indicates whether the security dashboard feature is enabled.
    
-   SasCspmSwitch: indicates whether the configuration assessment feature is enabled.
    
-   BuyNumber: the number of servers that are protected by using SAS.
    
-   SasWebguardBoolean: indicates whether the feature of web tamper proofing is enabled.
    
-   HoneypotSwitch: indicates whether the cloud honeypot feature is enabled.
    
-   PaymentType: the billing method.
    
-   SasSdk: the quota for the feature of SDK for malicious file detection.
    
-   SasAntiRansomware: the anti-ransomware capacity.
    
-   InstanceId: the ID of purchased SAS.
    
-   SasWebguardOrderNum: the quota for the feature of web tamper proofing.
    
-   CreateTime: the time when SAS was created.
    
-   RenewalStatus: the auto-renewal state.
    
-   VulSwitch: indicates whether the vulnerability fixing feature is enabled.
    
-   RaspCount: the quota for the application protection feature.
    
-   VulCount: the quota for the vulnerability fixing feature.
    
-   VersionCode: the edition of SAS.
    
-   SasCspm: the quota for the configuration assessment feature.
    
-   SasSdkSwitch: indicates whether the feature of SDK for malicious file detection is enabled.
    
-   RenewalPeriodUnit: the unit of the auto-renewal period.
    
-   ContainerImageScanNew: the quota for the container image scan feature.
    
-   Honeypot: the quota for the cloud honeypot feature.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      BuyNumber:
        Description:
          en: Number of servers.
        Type: String
      ContainerImageScan:
        Description:
          en: 'Container Image security scan. Interval type, value interval:[0,200000].
    
            > The step size is 20, that is, only multiples of 20 can be filled in.'
        Type: String
      ContainerImageScanNew:
        Description:
          en: 'Container Image security scan. Interval type, value interval:[0,200000].
    
            > The step size is 20, that is, only multiples of 20 can be filled in.'
        Type: String
      Honeypot:
        Description:
          en: 'Number of cloud honeypot licenses. Interval type, value interval:[20,500].
    
            > This module can only be purchased when honeypot_switch = 1, starting with
            20.'
        Type: String
      HoneypotSwitch:
        AllowedValues:
        - '1'
        - '2'
        Description:
          en: 'Cloud honeypot. Value:
    
            - 1: Yes.
    
            - 2: No.'
        Type: String
      ModifyType:
        AllowedValues:
        - Upgrade
        - Downgrade
        Description:
          en: 'Change configuration type, value
    
            - Upgrade: Upgrade.
    
            - Downgrade: Downgrade.'
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
      Period:
        Description:
          en: 'Prepaid cycle. The unit is Monthly, please enter an integer multiple of
            12 for annual paid products.
    
            > must be set when creating a prepaid instance.'
        Type: Number
      ProductType:
        Description:
          en: Product type, only China station needs to be set to sas, international station
            does not need to set.
        Type: String
      RaspCount:
        Description:
          en: Number of application protection licenses. Interval type, value interval:[1,100000000].
        Type: String
      RenewPeriod:
        Description:
          en: 'Automatic renewal cycle, in months.
    
            > When **RenewalStatus** is set to **AutoRenewal**, it must be set.'
        Type: Number
      RenewalPeriodUnit:
        AllowedValues:
        - M
        - Y
        Description:
          en: 'Automatic renewal period unit, value:
    
            - M: month.
    
            - Y: years.
    
            > Must be set when RenewalStatus = AutoRenewal.'
        Type: String
      RenewalStatus:
        AllowedValues:
        - AutoRenewal
        - ManualRenewal
        Description:
          en: 'Automatic renewal status, value:
    
            - AutoRenewal: automatic renewal.
    
            - ManualRenewal: manual renewal.
    
            Default ManualRenewal.'
        Type: String
      SasAntiRansomware:
        Description:
          en: 'Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
    
            > The step size is 10, that is, only multiples of 10 can be filled in.'
        Type: String
      SasCspm:
        Description:
          en: 'Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
    
            > You must have sas_cspm_switch = 1 to purchase this module. The step size
            is 100, that is, only multiples of 10 can be filled in.'
        Type: String
      SasCspmSwitch:
        AllowedValues:
        - '0'
        - '1'
        Description:
          en: 'Cloud platform configuration check switch. Value:
    
            - 0: No.
    
            - 1: Yes.'
        Type: String
      SasSc:
        AllowedValues:
        - 'false'
        - 'true'
        Description:
          en: 'Security screen. Value:
    
            - true: Yes.
    
            - false: No.'
        Type: String
      SasSdk:
        Description:
          en: 'Number of malicious file detections. Unit: 10,000 times. Interval type,
            value interval:[10,9999999999].
    
            > This module can only be purchased when sas_sdk_switch = 1. The step size
            is 10, that is, only multiples of 10 can be filled in.'
        Type: String
      SasSdkSwitch:
        AllowedValues:
        - '0'
        - '1'
        Description:
          en: Malicious file detection SDK.
        Type: String
      SasSlsStorage:
        Description:
          en: 'Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
    
            > The step size is 10, that is, only multiples of 10 can be filled in.'
        Type: String
      SasWebguardBoolean:
        AllowedValues:
        - '0'
        - '1'
        Description:
          en: 'Web tamper-proof switch. Value:
    
            - 0: No.
    
            - 1: Yes.'
        Type: String
      SasWebguardOrderNum:
        Description:
          en: 'Tamper-proof authorization number. Value:
    
            - 0: No
    
            - 1: Yes.'
        Type: String
      ThreatAnalysis:
        Description:
          en: 'Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
    
            > This module can only be purchased when Threat_analysis_switch = 1. The step
            size is 10, that is, only multiples of 10 can be filled in.'
        Type: String
      ThreatAnalysisSwitch:
        AllowedValues:
        - '0'
        - '1'
        Description:
          en: 'Threat analysis. Value:
    
            - 0: No.
    
            - 1: Yes.'
        Type: String
      VCore:
        Description:
          en: Number of cores.
        Type: String
      VersionCode:
        AllowedValues:
        - level2
        - level8
        - level7
        - level3
        - level10
        Description:
          en: 'Select the security center version. Value:
    
            - level7: Antivirus Edition.
    
            - level3: Premium version.
    
            - level2: Enterprise Edition.
    
            - level8: Ultimate.
    
            - level10: Purchase value-added services only.'
        Type: String
      VulCount:
        Description:
          en: 'Vulnerability repair times, interval type, value range:[20,100000000].
    
            > This module can only be purchased when vul_switch = 1. Only when the version_code
            value is level7 or level10. other versions do not need to be purchased separately.'
        Type: String
      VulSwitch:
        AllowedValues:
        - '0'
        - '1'
        Description:
          en: 'Vulnerability fix switch. Value:
    
            - 0: No.
    
            - 1: Yes.
    
            > When the value of version_code is level7 or level10, the purchase is allowed.
            Other versions do not need to be purchased separately.'
        Type: String
    Resources:
      ExtensionResource:
        Properties:
          BuyNumber:
            Ref: BuyNumber
          ContainerImageScan:
            Ref: ContainerImageScan
          ContainerImageScanNew:
            Ref: ContainerImageScanNew
          Honeypot:
            Ref: Honeypot
          HoneypotSwitch:
            Ref: HoneypotSwitch
          ModifyType:
            Ref: ModifyType
          PaymentType:
            Ref: PaymentType
          Period:
            Ref: Period
          ProductType:
            Ref: ProductType
          RaspCount:
            Ref: RaspCount
          RenewPeriod:
            Ref: RenewPeriod
          RenewalPeriodUnit:
            Ref: RenewalPeriodUnit
          RenewalStatus:
            Ref: RenewalStatus
          SasAntiRansomware:
            Ref: SasAntiRansomware
          SasCspm:
            Ref: SasCspm
          SasCspmSwitch:
            Ref: SasCspmSwitch
          SasSc:
            Ref: SasSc
          SasSdk:
            Ref: SasSdk
          SasSdkSwitch:
            Ref: SasSdkSwitch
          SasSlsStorage:
            Ref: SasSlsStorage
          SasWebguardBoolean:
            Ref: SasWebguardBoolean
          SasWebguardOrderNum:
            Ref: SasWebguardOrderNum
          ThreatAnalysis:
            Ref: ThreatAnalysis
          ThreatAnalysisSwitch:
            Ref: ThreatAnalysisSwitch
          VCore:
            Ref: VCore
          VersionCode:
            Ref: VersionCode
          VulCount:
            Ref: VulCount
          VulSwitch:
            Ref: VulSwitch
        Type: ALIYUN::ThreatDetection::Instance
    Outputs:
      BuyNumber:
        Description: Number of servers.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - BuyNumber
      ContainerImageScan:
        Description: Container Image security scan. Interval type, value interval:[0,200000].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ContainerImageScan
      ContainerImageScanNew:
        Description: Container Image security scan. Interval type, value interval:[0,200000].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ContainerImageScanNew
      CreateTime:
        Description: The creation time of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - CreateTime
      Honeypot:
        Description: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - Honeypot
      HoneypotSwitch:
        Description: Cloud honeypot.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - HoneypotSwitch
      InstanceId:
        Description: The first ID of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - InstanceId
      PaymentType:
        Description: The payment type of the resource.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - PaymentType
      RaspCount:
        Description: Number of application protection licenses. Interval type, value interval:[1,100000000].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - RaspCount
      RenewPeriod:
        Description: Automatic renewal cycle, in months.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - RenewPeriod
      RenewalPeriodUnit:
        Description: Automatic renewal period unit, value:.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - RenewalPeriodUnit
      RenewalStatus:
        Description: Automatic renewal status, value:.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - RenewalStatus
      SasAntiRansomware:
        Description: 'Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].'
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasAntiRansomware
      SasCspm:
        Description: Cloud platform configuration check scan times, interval type, value
          range:[1000,9999999999].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasCspm
      SasCspmSwitch:
        Description: Cloud platform configuration check switch.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasCspmSwitch
      SasSc:
        Description: Security screen.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasSc
      SasSdk:
        Description: 'Number of malicious file detections. Unit: 10,000 times. Interval
          type, value interval:[10,9999999999].'
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasSdk
      SasSdkSwitch:
        Description: Malicious file detection SDK.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasSdkSwitch
      SasSlsStorage:
        Description: 'Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].'
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasSlsStorage
      SasWebguardBoolean:
        Description: Web tamper-proof switch.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasWebguardBoolean
      SasWebguardOrderNum:
        Description: Tamper-proof authorization number.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - SasWebguardOrderNum
      ThreatAnalysis:
        Description: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ThreatAnalysis
      ThreatAnalysisSwitch:
        Description: Threat analysis.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - ThreatAnalysisSwitch
      VCore:
        Description: Number of cores.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - VCore
      VersionCode:
        Description: Select the security center version.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - VersionCode
      VulCount:
        Description: Vulnerability repair times, interval type, value range:[20,100000000].
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - VulCount
      VulSwitch:
        Description: Vulnerability fix switch.
        Value:
          Fn::GetAtt:
          - ExtensionResource
          - VulSwitch
                            
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ThreatAnalysis": {
          "Type": "String",
          "Description": {
            "en": "Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].\n> This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in."
          }
        },
        "SasSlsStorage": {
          "Type": "String",
          "Description": {
            "en": "Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].\n> The step size is 10, that is, only multiples of 10 can be filled in."
          }
        },
        "ContainerImageScan": {
          "Type": "String",
          "Description": {
            "en": "Container Image security scan. Interval type, value interval:[0,200000].\n> The step size is 20, that is, only multiples of 20 can be filled in."
          }
        },
        "ThreatAnalysisSwitch": {
          "Type": "String",
          "Description": {
            "en": "Threat analysis. Value:\n- 0: No.\n- 1: Yes."
          },
          "AllowedValues": [
            "0",
            "1"
          ]
        },
        "VCore": {
          "Type": "String",
          "Description": {
            "en": "Number of cores."
          }
        },
        "RenewPeriod": {
          "Type": "Number",
          "Description": {
            "en": "Automatic renewal cycle, in months.\n> When **RenewalStatus** is set to **AutoRenewal**, it must be set."
          }
        },
        "SasSc": {
          "Type": "String",
          "Description": {
            "en": "Security screen. Value:\n- true: Yes.\n- false: No."
          },
          "AllowedValues": [
            "false",
            "true"
          ]
        },
        "SasCspmSwitch": {
          "Type": "String",
          "Description": {
            "en": "Cloud platform configuration check switch. Value:\n- 0: No.\n- 1: Yes."
          },
          "AllowedValues": [
            "0",
            "1"
          ]
        },
        "BuyNumber": {
          "Type": "String",
          "Description": {
            "en": "Number of servers."
          }
        },
        "SasWebguardBoolean": {
          "Type": "String",
          "Description": {
            "en": "Web tamper-proof switch. Value:\n- 0: No.\n- 1: Yes."
          },
          "AllowedValues": [
            "0",
            "1"
          ]
        },
        "HoneypotSwitch": {
          "Type": "String",
          "Description": {
            "en": "Cloud honeypot. Value:\n- 1: Yes.\n- 2: No."
          },
          "AllowedValues": [
            "1",
            "2"
          ]
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
        "SasSdk": {
          "Type": "String",
          "Description": {
            "en": "Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].\n> This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in."
          }
        },
        "SasAntiRansomware": {
          "Type": "String",
          "Description": {
            "en": "Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].\n> The step size is 10, that is, only multiples of 10 can be filled in."
          }
        },
        "SasWebguardOrderNum": {
          "Type": "String",
          "Description": {
            "en": "Tamper-proof authorization number. Value:\n- 0: No\n- 1: Yes."
          }
        },
        "RenewalStatus": {
          "Type": "String",
          "Description": {
            "en": "Automatic renewal status, value:\n- AutoRenewal: automatic renewal.\n- ManualRenewal: manual renewal.\nDefault ManualRenewal."
          },
          "AllowedValues": [
            "AutoRenewal",
            "ManualRenewal"
          ]
        },
        "ProductType": {
          "Type": "String",
          "Description": {
            "en": "Product type, only China station needs to be set to sas, international station does not need to set."
          }
        },
        "VulSwitch": {
          "Type": "String",
          "Description": {
            "en": "Vulnerability fix switch. Value:\n- 0: No.\n- 1: Yes.\n> When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately."
          },
          "AllowedValues": [
            "0",
            "1"
          ]
        },
        "Period": {
          "Type": "Number",
          "Description": {
            "en": "Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.\n> must be set when creating a prepaid instance."
          }
        },
        "RaspCount": {
          "Type": "String",
          "Description": {
            "en": "Number of application protection licenses. Interval type, value interval:[1,100000000]."
          }
        },
        "VulCount": {
          "Type": "String",
          "Description": {
            "en": "Vulnerability repair times, interval type, value range:[20,100000000].\n> This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately."
          }
        },
        "VersionCode": {
          "Type": "String",
          "Description": {
            "en": "Select the security center version. Value:\n- level7: Antivirus Edition.\n- level3: Premium version.\n- level2: Enterprise Edition.\n- level8: Ultimate.\n- level10: Purchase value-added services only."
          },
          "AllowedValues": [
            "level2",
            "level8",
            "level7",
            "level3",
            "level10"
          ]
        },
        "SasCspm": {
          "Type": "String",
          "Description": {
            "en": "Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].\n> You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in."
          }
        },
        "ModifyType": {
          "Type": "String",
          "Description": {
            "en": "Change configuration type, value\n- Upgrade: Upgrade.\n- Downgrade: Downgrade."
          },
          "AllowedValues": [
            "Upgrade",
            "Downgrade"
          ]
        },
        "SasSdkSwitch": {
          "Type": "String",
          "Description": {
            "en": "Malicious file detection SDK."
          },
          "AllowedValues": [
            "0",
            "1"
          ]
        },
        "RenewalPeriodUnit": {
          "Type": "String",
          "Description": {
            "en": "Automatic renewal period unit, value:\n- M: month.\n- Y: years.\n> Must be set when RenewalStatus = AutoRenewal."
          },
          "AllowedValues": [
            "M",
            "Y"
          ]
        },
        "ContainerImageScanNew": {
          "Type": "String",
          "Description": {
            "en": "Container Image security scan. Interval type, value interval:[0,200000].\n> The step size is 20, that is, only multiples of 20 can be filled in."
          }
        },
        "Honeypot": {
          "Type": "String",
          "Description": {
            "en": "Number of cloud honeypot licenses. Interval type, value interval:[20,500].\n> This module can only be purchased when honeypot_switch = 1, starting with 20."
          }
        }
      },
      "Resources": {
        "ExtensionResource": {
          "Type": "ALIYUN::ThreatDetection::Instance",
          "Properties": {
            "ThreatAnalysis": {
              "Ref": "ThreatAnalysis"
            },
            "SasSlsStorage": {
              "Ref": "SasSlsStorage"
            },
            "ContainerImageScan": {
              "Ref": "ContainerImageScan"
            },
            "ThreatAnalysisSwitch": {
              "Ref": "ThreatAnalysisSwitch"
            },
            "VCore": {
              "Ref": "VCore"
            },
            "RenewPeriod": {
              "Ref": "RenewPeriod"
            },
            "SasSc": {
              "Ref": "SasSc"
            },
            "SasCspmSwitch": {
              "Ref": "SasCspmSwitch"
            },
            "BuyNumber": {
              "Ref": "BuyNumber"
            },
            "SasWebguardBoolean": {
              "Ref": "SasWebguardBoolean"
            },
            "HoneypotSwitch": {
              "Ref": "HoneypotSwitch"
            },
            "PaymentType": {
              "Ref": "PaymentType"
            },
            "SasSdk": {
              "Ref": "SasSdk"
            },
            "SasAntiRansomware": {
              "Ref": "SasAntiRansomware"
            },
            "SasWebguardOrderNum": {
              "Ref": "SasWebguardOrderNum"
            },
            "RenewalStatus": {
              "Ref": "RenewalStatus"
            },
            "ProductType": {
              "Ref": "ProductType"
            },
            "VulSwitch": {
              "Ref": "VulSwitch"
            },
            "Period": {
              "Ref": "Period"
            },
            "RaspCount": {
              "Ref": "RaspCount"
            },
            "VulCount": {
              "Ref": "VulCount"
            },
            "VersionCode": {
              "Ref": "VersionCode"
            },
            "SasCspm": {
              "Ref": "SasCspm"
            },
            "ModifyType": {
              "Ref": "ModifyType"
            },
            "SasSdkSwitch": {
              "Ref": "SasSdkSwitch"
            },
            "RenewalPeriodUnit": {
              "Ref": "RenewalPeriodUnit"
            },
            "ContainerImageScanNew": {
              "Ref": "ContainerImageScanNew"
            },
            "Honeypot": {
              "Ref": "Honeypot"
            }
          }
        }
      },
      "Outputs": {
        "ThreatAnalysis": {
          "Description": "Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ThreatAnalysis"
            ]
          }
        },
        "SasSlsStorage": {
          "Description": "Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasSlsStorage"
            ]
          }
        },
        "ContainerImageScan": {
          "Description": "Container Image security scan. Interval type, value interval:[0,200000].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ContainerImageScan"
            ]
          }
        },
        "ThreatAnalysisSwitch": {
          "Description": "Threat analysis.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ThreatAnalysisSwitch"
            ]
          }
        },
        "VCore": {
          "Description": "Number of cores.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "VCore"
            ]
          }
        },
        "RenewPeriod": {
          "Description": "Automatic renewal cycle, in months.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "RenewPeriod"
            ]
          }
        },
        "SasSc": {
          "Description": "Security screen.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasSc"
            ]
          }
        },
        "SasCspmSwitch": {
          "Description": "Cloud platform configuration check switch.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasCspmSwitch"
            ]
          }
        },
        "BuyNumber": {
          "Description": "Number of servers.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "BuyNumber"
            ]
          }
        },
        "SasWebguardBoolean": {
          "Description": "Web tamper-proof switch.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasWebguardBoolean"
            ]
          }
        },
        "HoneypotSwitch": {
          "Description": "Cloud honeypot.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "HoneypotSwitch"
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
        "SasSdk": {
          "Description": "Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasSdk"
            ]
          }
        },
        "SasAntiRansomware": {
          "Description": "Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasAntiRansomware"
            ]
          }
        },
        "InstanceId": {
          "Description": "The first ID of the resource.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "InstanceId"
            ]
          }
        },
        "SasWebguardOrderNum": {
          "Description": "Tamper-proof authorization number.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasWebguardOrderNum"
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
        "RenewalStatus": {
          "Description": "Automatic renewal status, value:.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "RenewalStatus"
            ]
          }
        },
        "VulSwitch": {
          "Description": "Vulnerability fix switch.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "VulSwitch"
            ]
          }
        },
        "RaspCount": {
          "Description": "Number of application protection licenses. Interval type, value interval:[1,100000000].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "RaspCount"
            ]
          }
        },
        "VulCount": {
          "Description": "Vulnerability repair times, interval type, value range:[20,100000000].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "VulCount"
            ]
          }
        },
        "VersionCode": {
          "Description": "Select the security center version.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "VersionCode"
            ]
          }
        },
        "SasCspm": {
          "Description": "Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasCspm"
            ]
          }
        },
        "SasSdkSwitch": {
          "Description": "Malicious file detection SDK.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "SasSdkSwitch"
            ]
          }
        },
        "RenewalPeriodUnit": {
          "Description": "Automatic renewal period unit, value:.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "RenewalPeriodUnit"
            ]
          }
        },
        "ContainerImageScanNew": {
          "Description": "Container Image security scan. Interval type, value interval:[0,200000].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "ContainerImageScanNew"
            ]
          }
        },
        "Honeypot": {
          "Description": "Number of cloud honeypot licenses. Interval type, value interval:[20,500].",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "Honeypot"
            ]
          }
        }
      }
    }
                            
    ```
