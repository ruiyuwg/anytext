ALIYUN::SAS::Instance is used to purchase Security Center.

## Syntax

```
{
  "Type": "ALIYUN::SAS::Instance",
  "Properties": {
    "QuotaForApplicationProtection": Integer,
    "ThreatAnalysis": Boolean,
    "QuotaForMaliciousFileDetectionSDK": Integer,
    "ContainerImageScan": Integer,
    "ThreatAnalysisLogStorageCapacity": Integer,
    "AutoRenew": Boolean,
    "MaliciousFileDetectionSDK": Boolean,
    "VCore": Integer,
    "Period": Integer,
    "VulnerabilityFixing": Boolean,
    "QuotaForCloudHoneypot": Integer,
    "QuotaForWebTamperProofing": Integer,
    "AutoPay": Boolean,
    "Edition": String,
    "ConfigurationAssessment": Boolean,
    "LogAnalysis": Integer,
    "ProtectedServers": Integer,
    "CloudHoneypot": Boolean,
    "WebTamperProtection": Boolean,
    "QuotaForConfigurationAssessment": Integer,
    "QuotaForVulnerabilityFixing": Integer,
    "AntiRansomware": Integer,
    "PeriodUnit": String,
    "AntiRansomwareManageService": Boolean,
    "PostPayInstanceModule": Map,
    "PayType": String
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

PayType

String

Yes

No

The billing method.

Valid values:

-   PayAsYouGo
    
-   Subscription
    

PostPayInstanceModule

Map

No

No

The pay-as-you-go configurations of Security Center.

For more information, see the "PostPayInstanceModule properties" section of this topic.

QuotaForApplicationProtection

Integer

No

No

The quota for the application protection feature.

You can use the feature to identify and block attacks on applications during application runtime and provide self-protection. We recommend that you set this property to the number of application processes that you want to protect each month on your hosts. A larger quota provides protection at a lower unit price. For more information, see [Billing overview](/help/en/security-center/product-overview/billing-overview).

ThreatAnalysis

Boolean

No

No

Specifies whether to enable the threat analysis feature.

The feature can detect and handle the security events of multiple cloud services, such as Cloud Firewall and Virtual Private Cloud (VPC), across multiple Alibaba Cloud accounts. This helps improve the operational efficiency of events.

If you purchased the log storage capacity for log analysis, we recommend that you set the **Log Storage Capacity of Threat Analysis** parameter to a value that is three times the purchased log storage capacity. The threat analysis feature stores the logs of multiple Alibaba Cloud accounts and cloud services that are added. Therefore, you must purchase sufficient log storage capacity for threat analysis.

QuotaForMaliciousFileDetectionSDK

Integer

No

No

The quota for the SDK for malicious file detection feature.

The feature uses a large number of file libraries in the cloud and a multi-architecture detection engine to detect webshell files, malicious scripts, binary programs, and macro viruses in a precise manner. The feature can also detect multiple malicious files at a time in various scenarios.

ContainerImageScan

Integer

No

No

The container image scan feature.

This is a value-added feature. If you set the quota for the container image scan feature to a value greater than 0, the feature is automatically purchased.

We recommend that you set the quota for the container image scan feature to the number of images for which you want to detect container vulnerabilities each month. Security Center identifies an image based on a unique digest value. If the digest value of an image is not changed, the quota for the container image scan feature is deducted by one only for the first scan. If the digest value of an image is changed, the quota for the container image scan feature is deducted each time the image is scanned. For example, if you want to scan 10 images and the images are estimated to be updated 20 times within the validity period of Security Center, you must set the quota for the container image scan feature to 30. The value 30 is calculated based on the following quotation: Quota for the container image scan feature = Number of images that you want to scan + Total number of times the images are estimated to be updated. The number 20 indicates that the digest values of the images are estimated to be changed 20 times. This property is available only when you use the Advanced, Enterprise, Ultimate, or Value-added Plan edition.

ThreatAnalysisLogStorageCapacity

Integer

No

No

The log storage capacity for the threat analysis feature.

None.

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal if Security Center uses the subscription billing method.

Valid values:

-   true
    
-   false (default)
    

**Note**

The auto-renewal cycle varies based on the unit of the subscription duration. If you purchase Security Center on a yearly basis, the auto-renewal cycle is one year. For example, if you select **Auto-renewal** and purchase a two-year subscription, the auto-renewal cycle is one year.

MaliciousFileDetectionSDK

Boolean

No

No

Specifies whether to enable the SDK for malicious file detection feature.

We recommend that you set the quota for the feature to the number of files that you want to scan each month.

The feature uses a large number of file libraries in the cloud and a multi-architecture detection engine to detect webshell files, malicious scripts, binary programs, and macro viruses in a precise manner. The feature can also detect multiple malicious files at a time in various scenarios.

VCore

Integer

No

No

The number of cores of servers that you want to protect by using Security Center.

The default value indicates the minimum number of cores that you must purchase.

You must specify this property only when you use the Anti-virus or Ultimate edition.

Period

Integer

No

No

The billing cycle.

-   Valid values when PeriodUnit is set to Month: 1, 2, and 6.
    
-   Valid values when PeriodUnit is set to Year: 1 to 3.
    

VulnerabilityFixing

Boolean

No

No

Specifies whether to enable the vulnerability fixing feature.

You must specify this property only when you use the **Anti-virus** or **Value-added Plan** edition. You can use the feature to fix Linux software vulnerabilities and Windows system vulnerabilities that are detected on your servers with a few clicks. We recommend that you set the quota for the feature to the total number of vulnerabilities that you want to fix each month.

**Note**

-   If you want to fix a large number of vulnerabilities, we recommend that you purchase the **Advanced**, **Enterprise**, or **Ultimate** edition. These editions provide an unlimited quota for vulnerability fixing.
    
-   If you want to fix a small number of vulnerabilities, you can purchase the vulnerability fixing feature based on the pay-as-you-go billing method. If you want to purchase the vulnerability fixing feature based on the pay-as-you-go billing method, go to the **Vulnerabilities** page in the Security Center console and click **Purchase**. Pay-as-you-go bills are not affected by the subscription duration of your Security Center. You can use pay-as-you-go resources before you pay for them.
    

QuotaForCloudHoneypot

Integer

No

No

The quota for the cloud honeypot feature.

None.

QuotaForWebTamperProofing

Integer

No

No

The quota for the web tamper proofing feature.

The feature monitors web directories in real time and can restore files or directories that are tampered with based on backups. This prevents important website information from being tampered with.

AutoPay

Boolean

No

No

Specifies whether to enable the automatic payment feature.

Valid values:

-   true (default)
    
-   false
    

Edition

String

No

No

The edition.

Valid values:

-   Anti-virus
    
-   Advanced
    
-   Enterprise
    
-   Ultimate
    

ConfigurationAssessment

Boolean

No

No

Specifies whether to enable the configuration assessment feature.

The feature detects configuration errors and security risks of cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures security of the running environment of your cloud services.  

LogAnalysis

Integer

No

No

The log analysis feature.

This is a value-added feature. If you set the log storage capacity for log analysis to a value greater than 0, the feature is automatically purchased. The unit of the log storage capacity is GB. The log analysis feature retrieves data from all subtypes of logs, including host, network, and security logs. This allows you to trace and analyze security events.

**Note**

The Enterprise and Ultimate editions of Security Center support 16 subtypes of logs. The Anti-virus and Advanced editions of Security Center support only 12 subtypes of host logs and security logs, but do not support network logs.

ProtectedServers

Integer

No

No

The number of servers that you want to protect by using Security Center.

The default value is the total number of Elastic Compute Service (ECS) instances plus the servers that are not deployed on Alibaba Cloud but have the Security Center agent installed within your Alibaba Cloud account.

**Note**

-   If you want to increase the number of servers to be protected during the subscription, we recommend that you specify a value that includes the estimated total number of servers that you want to protect.
    
-   You do not need to specify this property when you use the **Anti-virus** or **Value-added Plan** edition.
    

CloudHoneypot

Boolean

No

No

Specifies whether to enable the cloud honeypot feature.

The feature can capture attacks at the earliest opportunity. You can use this feature to detect attacks and protect your core assets in an efficient manner in attack and defense scenarios.

WebTamperProtection

Boolean

No

No

Specifies whether to enable the web tamper proofing feature.

The feature monitors web directories in real time and can restore files or directories that are tampered with based on backups. This prevents important website information from being tampered with.

QuotaForConfigurationAssessment

Integer

No

No

The quota for the configuration assessment feature.

None.

QuotaForVulnerabilityFixing

Integer

No

No

The quota for the vulnerability fixing feature.

You must specify this property based on the total number of vulnerabilities that you want to fix each month. The quota indicates the total number of vulnerabilities that you want to fix on all servers each month, regardless of the vulnerability names. For example, if you use Security Center on 10 servers to fix the same vulnerability, the quota is deducted by 10.  

AntiRansomware

Integer

No

No

The anti-ransomware feature.

This is a value-added feature. If you set the anti-ransomware capacity to a value greater than 0, the feature is automatically purchased. The unit of the anti-ransomware capacity is GB.

The general anti-ransomware feature provides the protection, alerting, and data backup capabilities to prevent ransomware from intruding into your core servers.

**Note**

Before you purchase this feature, make sure that the servers that you want to protect are deployed in a supported region of anti-ransomware. For more information about the supported regions, see [Overview](/help/en/security-center/user-guide/overview-2).

PeriodUnit

String

No

No

The unit of the billing cycle.

Valid values:

-   Month
    
-   Year
    

AntiRansomwareManageService

Boolean

No

No

Specifies whether to enable the managed anti-ransomware feature.

The feature provides anti-ransomware configurations, monitoring, and emergency responses to anti-ransomware incidents.

## PostPayInstanceModule syntax

```
"PostPayInstanceModule": 
  {
    "AgentlessDetection": Boolean,
    "CloudSecurityPostureManagement": Boolean,
    "CTDR": Boolean,
    "HostAndContainerSecurity": Boolean,
    "VulnerabilityFixing": Boolean,
    "ServerlessAssetProtection": Boolean
  }
```

## PostPayInstanceModule properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AgentlessDetection

Boolean

No

No

Specify whether to enable the agentless detection feature.

None.

CloudSecurityPostureManagement

Boolean

No

No

Specifies whether to enable the Cloud Security Posture Management (CSPM) feature.

None.

CTDR

Boolean

No

No

Specifies whether to enable the Cloud Threat Detection and Response (CTDR) feature.

None.

HostAndContainerSecurity

Boolean

No

No

Specifies whether to enable the host and container security feature.

None.

VulnerabilityFixing

Boolean

No

No

Specifies whether to enable the vulnerability fixing feature.

None.

ServerlessAssetProtection

Boolean

No

No

Specifies whether to enable the serverless asset protection feature.

None.

## Return values

Fn::GetAtt

InstanceId: the ID of the purchased Security Center.

## Examples

YAML

```
Outputs:
  InstanceId:
    Description: Instance Id.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  QuotaForCloudHoneypot:
    Default: Null
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${CloudHoneypot}
            - true
    Required: false
    Type: Number
    Label:
      en: QuotaForCloudHoneypot
  PostPayInstanceModule:
    Default: Null
    AssociationPropertyMetadata:
      Parameters:
        ServerlessAssetProtection:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the serverless asset protection module.
        CTDR:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the cloud-native threat detection and response module.
        CloudSecurityPostureManagement:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the cloud security posture management module.
        AgentlessDetection:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the agentless detection module.
        HostAndContainerSecurity:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the host and container security module.
        VulnerabilityFixing:
          Default: false
          Required: false
          Type: Boolean
          Description:
            en: Whether to enable the vulnerability fixing module.
    Required: false
    Type: Json
    Description:
      en: PayAsYouGo instance module configuration.
  ThreatAnalysisLogStorageCapacity:
    Default: Null
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${ThreatAnalysis}
            - true
    Required: false
    Type: Number
    Label:
      en: ThreatAnalysisLogStorageCapacity
  ConfigurationAssessment:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: 'The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.'
    Label:
      en: ConfigurationAssessment
  QuotaForConfigurationAssessment:
    Default: Null
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${ConfigurationAssessment}
            - true
    Required: false
    Type: Number
    Label:
      en: QuotaForConfigurationAssessment
  WebTamperProtection:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.
    Label:
      en: WebTamperProtection
  LogAnalysis:
    Default: Null
    Required: false
    Type: Number
    Description:
      en: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
    Label:
      en: LogAnalysis
  ContainerImageScan:
    Default: Null
    Required: false
    Type: Number
    Description:
      en: Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
    Label:
      en: ContainerImageScan
  PeriodUnit:
    Description:
      en: |
        The unit of the subscription duration. Valid values:
        Month
        Year
    Default: Null
    Required: false
    Label:
      en: PeriodUnit
    AssociationProperty: PayPeriodUnit
    AllowedValues:
      - Month
      - Year
    Type: String
  QuotaForWebTamperProofing:
    Default: Null
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${WebTamperProofing}
            - true
    Required: false
    Type: Number
    Label:
      en: QuotaForWebTamperProofing
  AutoRenew:
    Default: false
    Required: false
    Type: Boolean
    Description:
      en: 'Whether to auto renew the prepay instance.Default: False'
    Label:
      en: AutoRenew
  ThreatAnalysis:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: 'The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities. '
    Label:
      en: ThreatAnalysis
  VulnerabilityFixing:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
    Label:
      en: VulnerabilityFixing
  VCore:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Or:
            - Fn::Equals:
                - ${Edition}
                - Anti-virus
            - Fn::Equals:
                - ${Edition}
                - Ultimate
    Description:
      en: This parameter indicates the number of server vCPUs.
    Default: Null
    Required: false
    Label:
      en: VCore
    Type: Number
  AutoPay:
    Default: true
    Required: false
    Type: Boolean
    Description:
      en: 'Whether to auto pay the bill.Default: True'
    Label:
      en: AutoPay
  CloudHoneypot:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
    Label:
      en: CloudHoneypot
  QuotaForVulnerabilityFixing:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${VulnerabilityFixing}
            - true
    Description:
      en: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
    Default: Null
    Required: false
    Label:
      en: QuotaForVulnerabilityFixing
    Type: Number
  AntiRansomwareManageService:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: |-
        Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.
        Note: 
    Label:
      en: AntiRansomwareManageService
  Period:
    Description:
      en: |-
        The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
    Default: Null
    Required: false
    Label:
      en: Period
    AssociationProperty: PayPeriod
    AllowedValues:
      - 1
      - 2
      - 3
      - 6
    Type: Number
  QuotaForMaliciousFileDetectionSDK:
    Default: Null
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
            - ${MaliciousFileDetectionSDK}
            - true
    Required: false
    Type: Number
    Label:
      en: QuotaForMaliciousFileDetectionSDK
  Edition:
    Description:
      en: The version of Security center.
    Default: Null
    Required: false
    Label:
      en: Edition
    AllowedValues:
      - Anti-virus
      - Advanced
      - Enterprise
      - Ultimate
      - Value-added Plan
    Type: String
  AntiRansomware:
    Default: Null
    Required: false
    Type: Number
    Description:
      en: Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server.
    Label:
      en: AntiRansomware
  MaliciousFileDetectionSDK:
    Default: Null
    Required: false
    Type: Boolean
    Description:
      en: 'The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services.'
    Label:
      en: MaliciousFileDetectionSDK
  ProtectedServers:
    Default: Null
    Required: false
    Type: Number
    Description:
      en: Authorization is the same as the number of servers you have.
    Label:
      en: ProtectedServers
  QuotaForApplicationProtection:
    Default: Null
    Required: false
    Type: Number
    Description:
      en: The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
    Label:
      en: QuotaForApplicationProtection
  PayType:
    Required: true
    Type: String
    Description:
      en: |-
        The billing method of the firewall instance. Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
    AllowedValues:
      - PayAsYouGo
      - Subscription
Resources:
  Instance:
    Type: ALIYUN::SAS::Instance
    Properties:
      QuotaForCloudHoneypot:
        Ref: QuotaForCloudHoneypot
      PostPayInstanceModule:
        Ref: PostPayInstanceModule
      ThreatAnalysisLogStorageCapacity:
        Ref: ThreatAnalysisLogStorageCapacity
      ConfigurationAssessment:
        Ref: ConfigurationAssessment
      QuotaForConfigurationAssessment:
        Ref: QuotaForConfigurationAssessment
      WebTamperProtection:
        Ref: WebTamperProtection
      LogAnalysis:
        Ref: LogAnalysis
      ContainerImageScan:
        Ref: ContainerImageScan
      PeriodUnit:
        Ref: PeriodUnit
      QuotaForWebTamperProofing:
        Ref: QuotaForWebTamperProofing
      AutoRenew:
        Ref: AutoRenew
      ThreatAnalysis:
        Ref: ThreatAnalysis
      VulnerabilityFixing:
        Ref: VulnerabilityFixing
      VCore:
        Ref: VCore
      AutoPay:
        Ref: AutoPay
      CloudHoneypot:
        Ref: CloudHoneypot
      QuotaForVulnerabilityFixing:
        Ref: QuotaForVulnerabilityFixing
      AntiRansomwareManageService:
        Ref: AntiRansomwareManageService
      Period:
        Ref: Period
      QuotaForMaliciousFileDetectionSDK:
        Ref: QuotaForMaliciousFileDetectionSDK
      Edition:
        Ref: Edition
      AntiRansomware:
        Ref: AntiRansomware
      MaliciousFileDetectionSDK:
        Ref: MaliciousFileDetectionSDK
      ProtectedServers:
        Ref: ProtectedServers
      QuotaForApplicationProtection:
        Ref: QuotaForApplicationProtection
      PayType:
        Ref: PayType
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - GroupType: Payment
        Parameters:
          - Items:
              - Period
              - PeriodUnit
            Label:
        Label:
          default:
            en: Payment
      - Parameters:
          - AutoRenew
          - AutoPay
        Label:
          default:
            en: Order Configuration
      - Parameters:
          - Edition
          - ProtectedServers
          - VCore
        Label:
          default:
            en: Version Configuration
      - Parameters:
          - AntiRansomware
        Label:
          default:
            en: AntiRansomware Configuration
      - Parameters:
          - LogAnalysis
        Label:
          default:
            en: Log Configuration
      - Parameters:
          - AntiRansomware
        Label:
          default:
            en: AntiRansomware Configuration
      - Parameters:
          - QuotaForApplicationProtection
        Label:
          default:
            en: Application Protection Configuration
      - Parameters:
          - ThreatAnalysis
          - ThreatAnalysisLogStorageCapacity
        Label:
          default:
            en: ThreatAnalysis Configuration
      - Parameters:
          - MaliciousFileDetectionSDK
          - QuotaForMaliciousFileDetectionSDK
        Label:
          default:
            en: Malicious File Detection Configuration
      - Parameters:
          - ConfigurationAssessment
          - QuotaForConfigurationAssessment
        Label:
          default:
            en: Configuration Assessment Configuration
      - Parameters:
          - WebTamperProtection
          - QuotaForWebTamperProofing
        Label:
          default:
            en: WebTamper Protection Configuration
      - Parameters:
          - VulnerabilityFixing
          - QuotaForVulnerabilityFixing
        Label:
          default:
            en: Vulnerability Fixing Configuration
      - Parameters:
          - CloudHoneypot
          - QuotaForCloudHoneypot
        Label:
          default:
            en: Cloud Honeypot Configuration
      - Parameters:
          - ContainerImageScan
        Label:
          default:
            en: Container Image Scan Configuration
```

JSON

```
{
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
  },
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "QuotaForCloudHoneypot": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${CloudHoneypot}",
              true
            ]
          }
        }
      },
      "Required": false,
      "Type": "Number",
      "Label": {
        "en": "QuotaForCloudHoneypot"
      }
    },
    "PostPayInstanceModule": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Parameters": {
          "ServerlessAssetProtection": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the serverless asset protection module."
            }
          },
          "CTDR": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the cloud-native threat detection and response module."
            }
          },
          "CloudSecurityPostureManagement": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the cloud security posture management module."
            }
          },
          "AgentlessDetection": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the agentless detection module."
            }
          },
          "HostAndContainerSecurity": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the host and container security module."
            }
          },
          "VulnerabilityFixing": {
            "Default": false,
            "Required": false,
            "Type": "Boolean",
            "Description": {
              "en": "Whether to enable the vulnerability fixing module."
            }
          }
        }
      },
      "Required": false,
      "Type": "Json",
      "Description": {
        "en": "PayAsYouGo instance module configuration."
      }
    },
    "ThreatAnalysisLogStorageCapacity": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${ThreatAnalysis}",
              true
            ]
          }
        }
      },
      "Required": false,
      "Type": "Number",
      "Label": {
        "en": "ThreatAnalysisLogStorageCapacity"
      }
    },
    "ConfigurationAssessment": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services."
      },
      "Label": {
        "en": "ConfigurationAssessment"
      }
    },
    "QuotaForConfigurationAssessment": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${ConfigurationAssessment}",
              true
            ]
          }
        }
      },
      "Required": false,
      "Type": "Number",
      "Label": {
        "en": "QuotaForConfigurationAssessment"
      }
    },
    "WebTamperProtection": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc."
      },
      "Label": {
        "en": "WebTamperProtection"
      }
    },
    "LogAnalysis": {
      "Default": null,
      "Required": false,
      "Type": "Number",
      "Description": {
        "en": "In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server. Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier."
      },
      "Label": {
        "en": "LogAnalysis"
      }
    },
    "ContainerImageScan": {
      "Default": null,
      "Required": false,
      "Type": "Number",
      "Description": {
        "en": "Security Center provides the container image scan feature to protect containers. Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective."
      },
      "Label": {
        "en": "ContainerImageScan"
      }
    },
    "PeriodUnit": {
      "Description": {
        "en": "The unit of the subscription duration. Valid values:\nMonth\nYear\n"
      },
      "Default": null,
      "Required": false,
      "Label": {
        "en": "PeriodUnit"
      },
      "AssociationProperty": "PayPeriodUnit",
      "AllowedValues": [
        "Month",
        "Year"
      ],
      "Type": "String"
    },
    "QuotaForWebTamperProofing": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${WebTamperProofing}",
              true
            ]
          }
        }
      },
      "Required": false,
      "Type": "Number",
      "Label": {
        "en": "QuotaForWebTamperProofing"
      }
    },
    "AutoRenew": {
      "Default": false,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto renew the prepay instance.Default: False"
      },
      "Label": {
        "en": "AutoRenew"
      }
    },
    "ThreatAnalysis": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner. The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities. "
      },
      "Label": {
        "en": "ThreatAnalysis"
      }
    },
    "VulnerabilityFixing": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks. This improves O&M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing."
      },
      "Label": {
        "en": "VulnerabilityFixing"
      }
    },
    "VCore": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Or": [
              {
                "Fn::Equals": [
                  "${Edition}",
                  "Anti-virus"
                ]
              },
              {
                "Fn::Equals": [
                  "${Edition}",
                  "Ultimate"
                ]
              }
            ]
          }
        }
      },
      "Description": {
        "en": "This parameter indicates the number of server vCPUs."
      },
      "Default": null,
      "Required": false,
      "Label": {
        "en": "VCore"
      },
      "Type": "Number"
    },
    "AutoPay": {
      "Default": true,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto pay the bill.Default: True"
      },
      "Label": {
        "en": "AutoPay"
      }
    },
    "CloudHoneypot": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "The cloud honeypot feature can capture attacks in a timely and efficient manner. You can use the feature to protect your core assets and detect attacks in attack and defense scenarios."
      },
      "Label": {
        "en": "CloudHoneypot"
      }
    },
    "QuotaForVulnerabilityFixing": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${VulnerabilityFixing}",
              true
            ]
          }
        }
      },
      "Description": {
        "en": "Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month. The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10."
      },
      "Default": null,
      "Required": false,
      "Label": {
        "en": "QuotaForVulnerabilityFixing"
      },
      "Type": "Number"
    },
    "AntiRansomwareManageService": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.\nNote: "
      },
      "Label": {
        "en": "AntiRansomwareManageService"
      }
    },
    "Period": {
      "Description": {
        "en": "The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6\nIf periodUnit is year, the valid range is 1, 2, 3"
      },
      "Default": null,
      "Required": false,
      "Label": {
        "en": "Period"
      },
      "AssociationProperty": "PayPeriod",
      "AllowedValues": [
        1,
        2,
        3,
        6
      ],
      "Type": "Number"
    },
    "QuotaForMaliciousFileDetectionSDK": {
      "Default": null,
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${MaliciousFileDetectionSDK}",
              true
            ]
          }
        }
      },
      "Required": false,
      "Type": "Number",
      "Label": {
        "en": "QuotaForMaliciousFileDetectionSDK"
      }
    },
    "Edition": {
      "Description": {
        "en": "The version of Security center."
      },
      "Default": null,
      "Required": false,
      "Label": {
        "en": "Edition"
      },
      "AllowedValues": [
        "Anti-virus",
        "Advanced",
        "Enterprise",
        "Ultimate",
        "Value-added Plan"
      ],
      "Type": "String"
    },
    "AntiRansomware": {
      "Default": null,
      "Required": false,
      "Type": "Number",
      "Description": {
        "en": "Security Center provides a comprehensive anti-ransomware solution to protect your business. We recommend that you configure a data protection capacity of 50GB for each server."
      },
      "Label": {
        "en": "AntiRansomware"
      }
    },
    "MaliciousFileDetectionSDK": {
      "Default": null,
      "Required": false,
      "Type": "Boolean",
      "Description": {
        "en": "The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks. This ensures the security of the running environment of your cloud services."
      },
      "Label": {
        "en": "MaliciousFileDetectionSDK"
      }
    },
    "ProtectedServers": {
      "Default": null,
      "Required": false,
      "Type": "Number",
      "Description": {
        "en": "Authorization is the same as the number of servers you have."
      },
      "Label": {
        "en": "ProtectedServers"
      }
    },
    "QuotaForApplicationProtection": {
      "Default": null,
      "Required": false,
      "Type": "Number",
      "Description": {
        "en": "The application protection feature can detect attacks on applications and provide self-protection during application runtime. The feature supports simple and convenient O&M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature."
      },
      "Label": {
        "en": "QuotaForApplicationProtection"
      }
    },
    "PayType": {
      "Required": true,
      "Type": "String",
      "Description": {
        "en": "The billing method of the firewall instance. Valid values:\nPayAsYouGo: pay-as-you-go\nSubscription: subscription"
      },
      "AllowedValues": [
        "PayAsYouGo",
        "Subscription"
      ]
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::SAS::Instance",
      "Properties": {
        "QuotaForCloudHoneypot": {
          "Ref": "QuotaForCloudHoneypot"
        },
        "PostPayInstanceModule": {
          "Ref": "PostPayInstanceModule"
        },
        "ThreatAnalysisLogStorageCapacity": {
          "Ref": "ThreatAnalysisLogStorageCapacity"
        },
        "ConfigurationAssessment": {
          "Ref": "ConfigurationAssessment"
        },
        "QuotaForConfigurationAssessment": {
          "Ref": "QuotaForConfigurationAssessment"
        },
        "WebTamperProtection": {
          "Ref": "WebTamperProtection"
        },
        "LogAnalysis": {
          "Ref": "LogAnalysis"
        },
        "ContainerImageScan": {
          "Ref": "ContainerImageScan"
        },
        "PeriodUnit": {
          "Ref": "PeriodUnit"
        },
        "QuotaForWebTamperProofing": {
          "Ref": "QuotaForWebTamperProofing"
        },
        "AutoRenew": {
          "Ref": "AutoRenew"
        },
        "ThreatAnalysis": {
          "Ref": "ThreatAnalysis"
        },
        "VulnerabilityFixing": {
          "Ref": "VulnerabilityFixing"
        },
        "VCore": {
          "Ref": "VCore"
        },
        "AutoPay": {
          "Ref": "AutoPay"
        },
        "CloudHoneypot": {
          "Ref": "CloudHoneypot"
        },
        "QuotaForVulnerabilityFixing": {
          "Ref": "QuotaForVulnerabilityFixing"
        },
        "AntiRansomwareManageService": {
          "Ref": "AntiRansomwareManageService"
        },
        "Period": {
          "Ref": "Period"
        },
        "QuotaForMaliciousFileDetectionSDK": {
          "Ref": "QuotaForMaliciousFileDetectionSDK"
        },
        "Edition": {
          "Ref": "Edition"
        },
        "AntiRansomware": {
          "Ref": "AntiRansomware"
        },
        "MaliciousFileDetectionSDK": {
          "Ref": "MaliciousFileDetectionSDK"
        },
        "ProtectedServers": {
          "Ref": "ProtectedServers"
        },
        "QuotaForApplicationProtection": {
          "Ref": "QuotaForApplicationProtection"
        },
        "PayType": {
          "Ref": "PayType"
        }
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "GroupType": "Payment",
          "Parameters": [
            {
              "Items": [
                "Period",
                "PeriodUnit"
              ],
              "Label":
            }
          ],
          "Label": {
            "default": {
              "en": "Payment"
            }
          }
        },
        {
          "Parameters": [
            "AutoRenew",
            "AutoPay"
          ],
          "Label": {
            "default": {
              "en": "Order Configuration"
            }
          }
        },
        {
          "Parameters": [
            "Edition",
            "ProtectedServers",
            "VCore"
          ],
          "Label": {
            "default": {
              "en": "Version Configuration"
            }
          }
        },
        {
          "Parameters": [
            "AntiRansomware"
          ],
          "Label": {
            "default": {
              "en": "AntiRansomware Configuration"
            }
          }
        },
        {
          "Parameters": [
            "LogAnalysis"
          ],
          "Label": {
            "default": {
              "en": "Log Configuration"
            }
          }
        },
        {
          "Parameters": [
            "AntiRansomware"
          ],
          "Label": {
            "default": {
              "en": "AntiRansomware Configuration"
            }
          }
        },
        {
          "Parameters": [
            "QuotaForApplicationProtection"
          ],
          "Label": {
            "default": {
              "en": "Application Protection Configuration"
            }
          }
        },
        {
          "Parameters": [
            "ThreatAnalysis",
            "ThreatAnalysisLogStorageCapacity"
          ],
          "Label": {
            "default": {
              "en": "ThreatAnalysis Configuration"
            }
          }
        },
        {
          "Parameters": [
            "MaliciousFileDetectionSDK",
            "QuotaForMaliciousFileDetectionSDK"
          ],
          "Label": {
            "default": {
              "en": "Malicious File Detection Configuration"
            }
          }
        },
        {
          "Parameters": [
            "ConfigurationAssessment",
            "QuotaForConfigurationAssessment"
          ],
          "Label": {
            "default": {
              "en": "Configuration Assessment Configuration"
            }
          }
        },
        {
          "Parameters": [
            "WebTamperProtection",
            "QuotaForWebTamperProofing"
          ],
          "Label": {
            "default": {
              "en": "WebTamper Protection Configuration"
            }
          }
        },
        {
          "Parameters": [
            "VulnerabilityFixing",
            "QuotaForVulnerabilityFixing"
          ],
          "Label": {
            "default": {
              "en": "Vulnerability Fixing Configuration"
            }
          }
        },
        {
          "Parameters": [
            "CloudHoneypot",
            "QuotaForCloudHoneypot"
          ],
          "Label": {
            "default": {
              "en": "Cloud Honeypot Configuration"
            }
          }
        },
        {
          "Parameters": [
            "ContainerImageScan"
          ],
          "Label": {
            "default": {
              "en": "Container Image Scan Configuration"
            }
          }
        }
      ]
    }
  }
}
```
