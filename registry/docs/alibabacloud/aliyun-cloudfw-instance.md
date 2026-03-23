ALIYUN::CLOUDFW::Instance is used to create a Cloud Firewall instance.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::Instance",
  "Properties": {
    "VpcBandwidth": Integer,
    "AclExtension": Integer,
    "NatFirewallNum": Integer,
    "NatBandwidth": Integer,
    "IpNum": Integer,
    "AutoRenew": Boolean,
    "Period": Integer,
    "PayType": String,
    "AutoPay": Boolean,
    "LogStorage": Integer,
    "LogAnalysis": Boolean,
    "VpcFirewallNum": Integer,
    "AccountNum": Integer,
    "MultiAccountManagement": Boolean,
    "Bandwidth": Integer,
    "Spec": String,
    "PeriodUnit": String,
    "IgnoreExisting": Boolean
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

-   Valid values that specify the subscription billing method:
    
    Subscription, PrePaid, Prepaid, PrePay, PREPAY, and PRE.
    
-   Valid values that specify the pay-as-you-go billing method:
    
    PayOnDemand, PayAsYouGo, PostPaid, Postpaid, PostPay, POSTPAY, and POST.
    

AccountNum

Integer

No

No

The number of accounts that you want to manage by using the multi-account management feature.

You can increase the number of accounts based on your business requirements. A free quota of one account is provided. Valid values: 1 to 1000.

AclExtension

Integer

No

No

The additional quota on access control policies. If the default quota supported by your edition is insufficient, you can specify this property to purchase an additional quota.  

The additional quota on access control policies can be shared by the access control lists (ACLs) of Internet firewalls and virtual private cloud (VPC) firewalls. Valid values: 0 to 300000.

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

Specifies whether to enable auto-renewal if the instance uses the subscription billing method.

Valid values:

-   true
    
-   false
    

Bandwidth

Integer

No

No

The capability of processing Internet traffic.

The peak Internet traffic that can be protected by Cloud Firewall. We recommend that you specify a value for this property to match the peak Internet traffic of your business. Valid values: 10 to 15000.

IgnoreExisting

Boolean

No

No

Specifies whether to ignore an existing instance of Cloud Firewall.

Valid values:

-   false: If you set this property to false, Resource Orchestration Service (ROS) checks the uniqueness of instances of Cloud Firewall. If a Cloud Firewall instance already exists, ROS reports an error when you create a new Cloud Firewall instance.  
    
-   true: If you set this property to true, ROS does not check the uniqueness of instances of Cloud Firewall. If a Cloud Firewall instance exists, ROS ignores the instance when you create a new Cloud Firewall instance.  
    

If the existing instance of Cloud Firewall is not created by ROS, ROS ignores the instance when you update or delete the new instance of Cloud Firewall.

IpNum

Integer

No

No

The number of public IP addresses that can be protected.

Valid values: 20 to 4000.

LogAnalysis

Boolean

No

No

Specifies whether to purchase the log analysis feature.

By default, Cloud Firewall stores logs for seven days free of charge. If you want to store logs for a longer period of time or meet classified protection requirements, we recommend that you purchase the log analysis feature.

LogStorage

Integer

No

No

The log storage capacity.

If your Internet bandwidth is 10 Mbit/s and you want to store logs for six months, we recommend that you purchase 1,000 GB of log storage capacity. Valid values: 1000 to 500000.

MultiAccountManagement

Boolean

No

No

The multi-account management feature.

If your enterprise have multiple cloud accounts, and you want to manage the accounts in a centralized and secure manner, you can purchase the multi-account management feature.

Before you disable the multi-account management feature, disable firewall protection for the assets of managed members and delete the members in the Cloud Firewall console.

NatBandwidth

Integer

No

No

The capability that is supported by a NAT firewall to process private network traffic.

The bandwidth for private network traffic that can be protected by a NAT firewall. The default value for Enterprise Edition is 10, and the default value for Ultimate Edition is 20. Valid values: 0 to 1000. Unit: Mbit/s.

NatFirewallNum

Integer

No

No

The number of NAT firewalls.

Each NAT gateway corresponds to a NAT firewall. By default, Premium Edition is provisioned without NAT firewalls, Enterprise Edition is provisioned with one NAT firewall, and Ultimate Edition is provisioned with two NAT firewalls.  

Valid values: 0 to 20.

Period

Integer

No

No

The subscription period.

Valid values when PeriodUnit is set to Month: 1, 3, and 6.

Valid values when PeriodUnit is set to Year: 1 to 3.

PeriodUnit

String

No

No

The unit of the auto-renewal period.

Valid values:

-   Month
    
-   Year
    

Spec

String

No

No

The edition of Cloud Firewall.

Valid values:

-   PremiumVersion: Premium Edition
    
-   EnterpriseVersion: Enterprise Edition
    
-   UltimateVersion: Ultimate Edition
    

VpcBandwidth

Integer

No

No

The capability of processing VPC traffic.

Valid values: 1000 to 15000. Unit: Mbit/s.  

VpcFirewallNum

Integer

No

No

The number of VPC firewalls.

The number of VPC firewalls that you want to create. If your VPCs are connected by using Enterprise Edition transit routers of Cloud Enterprise Network (CEN), each transit router corresponds to a VPC firewall. If your VPCs are connected by using Basic Edition transit routers of CEN, a VPC corresponds to a VPC firewall. If your VPCs are connected by using Express Connect circuits, each VPC peering connection corresponds to a VPC firewall. Valid values: 2 to 500.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
    - GroupType: Payment
      Label:
        default:
          en: Payment
          zh-cn: "\u4ED8\u8D39\u7C7B\u578B"
      Parameters:
      - Items:
        - PayType
        - Period
        - PeriodUnit
        Label: "\u652F\u4ED8\u65B9\u5F0F"
    - Label:
        default:
          en: AutoRenew Configuration
          zh-cn: "\u81EA\u52A8\u7EED\u8D39\u8BBE\u7F6E"
      Parameters:
      - AutoRenew
    - Label:
        default:
          en: AutoPay Configuration
          zh-cn: "\u81EA\u52A8\u652F\u4ED8\u8BBE\u7F6E"
      Parameters:
      - AutoPay
    - Label:
        default:
          en: Spec Configuration
          zh-cn: "\u9632\u706B\u5899\u89C4\u683C\u8BBE\u7F6E"
      Parameters:
      - Spec
      - IpNum
      - Bandwidth
    - Label:
        default:
          en: Vpc Firewall Configuration
          zh-cn: "VPC\u9632\u706B\u5899\u8BBE\u7F6E"
      Parameters:
      - VpcFirewallNum
      - VpcBandwidth
    - Label:
        default:
          en: Nat Firewall Configuration
          zh-cn: "NAT\u9632\u706B\u5899\u8BBE\u7F6E"
      Parameters:
      - NatFirewallNum
      - NatBandwidth
    - Label:
        default:
          en: Instance Configuration
          zh-cn: "\u5B9E\u4F8B\u8BBE\u7F6E"
      Parameters:
      - AclExtension
      - MultiAccountManagement
      - AccountNum
      - LogAnalysis
      - LogStorage
    - Label:
        default:
          en: Other Configuration
          zh-cn: "\u5176\u4ED6\u8BBE\u7F6E"
      Parameters: []
Parameters:
  AccountNum:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::And:
          - Fn::Equals:
            - ${PayType}
            - Subscription
          - Fn::Equals:
            - ${MultiAccountManagement}
            - true
    Description:
      en: The number of multi-account management and control is the number of member
        accounts that you need to uniformly control.
      zh-cn: "\u591A\u8D26\u53F7\u7BA1\u63A7\u6570\u4E3A\u60A8\u9700\u8981\u7EDF\u4E00\
        \u7BA1\u63A7\u7684\u6210\u5458\u8D26\u53F7\u6570\uFF0C\u53EF\u6309\u9700\u6269\
        \u5C55\u3002\u76EE\u524D\u9650\u65F6\u63D0\u4F9B1\u4E2A\u514D\u8D39\u914D\u989D\
        \u4F9B\u60A8\u4F53\u9A8C"
    Label:
      zh-cn: "\u591A\u8D26\u53F7\u7BA1\u63A7\u6570"
    Required: false
    Type: Number
  AclExtension:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: When the default access control authorization specifications of your version
        are not enough, you can purchase global extension specifications of access
        control. This extension supports shared occupancy with Internet and VPC boundary
        ACL specifications.
      zh-cn: "\u5F53\u60A8\u7248\u672C\u9ED8\u8BA4\u8BBF\u95EE\u63A7\u5236\u6388\u6743\
        \u89C4\u683C\u4E0D\u591F\u7528\u65F6\uFF0C\u53EF\u91C7\u8D2D\u8BBF\u95EE\u63A7\
        \u5236\u5168\u5C40\u6269\u5C55\u89C4\u683C\u3002\u8BE5\u6269\u5C55\u652F\u6301\
        \u4E92\u8054\u7F51\u548CVPC\u8FB9\u754CACL\u89C4\u683C\u5171\u4EAB\u5360\u7528\
        \u3002"
    Label:
      zh-cn: "\u8BBF\u95EE\u63A7\u5236\u5168\u5C40\u6269\u5C55"
    MaxValue: 50000
    MinValue: 0
    Required: false
    Type: Number
  AutoPay:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Default: true
    Description:
      en: Whether to auto pay the bill.
    Label:
      zh-cn: "\u8BA2\u5355\u662F\u5426\u81EA\u52A8\u652F\u4ED8"
    Required: false
    Type: Boolean
  AutoRenew:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: Whether to auto renew the prepay instance.
    Label:
      zh-cn: "\u5230\u671F\u662F\u5426\u81EA\u52A8\u7EED\u8D39"
    Required: false
    Type: Boolean
  Bandwidth:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: 'Public network processing capability. Valid values: 10 to 15000. Unit:
        Mbps.'
      zh-cn: "\u516C\u7F51\u6D41\u91CF\u5904\u7406\u80FD\u529B\u662F\u6307\u4E91\u9632\
        \u706B\u5899\u4E92\u8054\u7F51\u8FB9\u754C\u9632\u706B\u5899\uFF0C\u53EF\u9632\
        \u62A4\u7684\u516C\u7F51\u51FA\u5165\u6D41\u91CF\u5CF0\u503C\uFF08\u5165\u5411\
        \u6216\u51FA\u5411\u53D6\u5176\u9AD8\uFF09\uFF0C\u5EFA\u8BAE\u4E0E\u60A8\u4E1A\
        \u52A1\u7684\u516C\u7F51\u5E26\u5BBD\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u968F\
        \u65F6\u6269\u5BB9"
    Label:
      zh-cn: "\u516C\u7F51\u6D41\u91CF\u5904\u7406\u80FD\u529B(\u5355\u4F4DMbps)"
    MaxValue: 15000
    MinValue: 10
    Required: false
    Type: Number
  IpNum:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: 'The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion:
        [20, 1000]'
    Label:
      zh-cn: "\u53EF\u9632\u62A4\u516C\u7F51IP\u6570"
    MaxValue: 4000
    MinValue: 20
    Required: false
    Type: Number
  LogAnalysis:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: The cloud firewall includes 7 days of free log storage and auditing by default.
        If you need longer storage time or meet the requirements for equal protection,
        it is recommended to purchase the log analysis service.
      zh-cn: "\u4E91\u9632\u706B\u5899\u9ED8\u8BA4\u542B7\u5929\u514D\u8D39\u65E5\u5FD7\
        \u5B58\u50A8\u5BA1\u8BA1\uFF0C\u5982\u9700\u8981\u66F4\u957F\u5B58\u50A8\u65F6\
        \u957F\u6216\u6EE1\u8DB3\u7B49\u4FDD\u8981\u6C42\uFF0C\u5EFA\u8BAE\u9009\u8D2D\
        \u65E5\u5FD7\u5206\u6790\u670D\u52A1"
    Label:
      zh-cn: "\u65E5\u5FD7\u5206\u6790"
    Required: false
    Type: Boolean
  LogStorage:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::And:
          - Fn::Equals:
            - ${PayType}
            - Subscription
          - Fn::Equals:
            - ${LogAnalysis}
            - true
    Description:
      en: 'Reference for purchasing storage capacity: 10M public network bandwidth,
        6 months of log storage, recommended purchase of 1000GB log storage capacity'
      zh-cn: "\u5B58\u50A8\u5BB9\u91CF\u9009\u8D2D\u53C2\u8003\uFF1A10M\u516C\u7F51\
        \u5E26\u5BBD\uFF0C\u5B58\u50A86\u4E2A\u6708\u65E5\u5FD7\uFF0C\u63A8\u8350\u8D2D\
        \u4E701000GB\u65E5\u5FD7\u5B58\u50A8\u5BB9\u91CF"
    Label:
      zh-cn: "\u65E5\u5FD7\u5B58\u50A8\u5BB9\u91CF(\u5355\u4F4DGB)"
    MaxValue: 500000
    MinValue: 1000
    Required: false
    Type: Number
  MultiAccountManagement:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Default: false
    Description:
      en: Multiple accounts on the enterprise cloud can be managed centrally on the
        cloud firewall, including asset inventory, ACL policies, attack protection,
        log reports, etc. After the member account is managed by the current account,
        there will be no need to purchase it separately.
      zh-cn: "\u4F01\u4E1A\u4E91\u4E0A\u591A\u4E2A\u8D26\u53F7\u53EF\u5728\u4E91\u9632\
        \u706B\u5899\u7EDF\u4E00\u96C6\u4E2D\u5B89\u5168\u7BA1\u7406\uFF0C\u5305\u62EC\
        \u8D44\u4EA7\u76D8\u70B9\u3001ACL\u7B56\u7565\u3001\u653B\u51FB\u9632\u62A4\
        \u3001\u65E5\u5FD7\u62A5\u8868\u7B49\u3002\u6210\u5458\u8D26\u53F7\u88AB\u5F53\
        \u524D\u8D26\u53F7\u7EDF\u7BA1\u540E\uFF0C\u5C06\u65E0\u9700\u5355\u72EC\u91C7\
        \u8D2D"
    Label:
      zh-cn: "\u591A\u8D26\u53F7\u7EDF\u4E00\u7BA1\u7406"
    Required: false
    Type: Boolean
  NatBandwidth:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: The bandwidth of private network traffic processed by the NAT firewall.
        The premium version does not include it by default, the enterprise version
        has 10Mbps by default, and the ultimate version has 20Mbps by default.
      zh-cn: "NAT\u9632\u706B\u5899\u5904\u7406\u7684\u79C1\u7F51\u6D41\u91CF\u5E26\
        \u5BBD\u5927\u5C0F\u3002\u9AD8\u7EA7\u7248\u9ED8\u8BA4\u4E0D\u542B\uFF0C\u4F01\
        \u4E1A\u7248\u9ED8\u8BA4\u5E2610Mbps\uFF0C\u65D7\u8230\u7248\u7248\u9ED8\u8BA4\
        \u5E2620Mbps\u3002"
    Label:
      zh-cn: "NAT\u79C1\u7F51\u6D41\u91CF\u5904\u7406\u80FD\u529B(\u5355\u4F4DMbps)"
    MaxValue: 1000
    MinValue: 0
    Required: false
    Type: Number
  NatFirewallNum:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Description:
      en: The number of NAT gateway instances of the NAT firewall you need to enable.
        Each NAT gateway instance corresponds to one NAT firewall instance. The premium
        version does not include it by default, the enterprise version comes with
        1 specification by default,and the ultimate version comes with 2 specifications
        by default.
      zh-cn: "NAT\u9632\u706B\u5899\u5904\u7406\u7684\u79C1\u7F51\u6D41\u91CF\u5E26\
        \u5BBD\u5927\u5C0F\u3002\u9AD8\u7EA7\u7248\u9ED8\u8BA4\u4E0D\u542B\uFF0C\u4F01\
        \u4E1A\u7248\u9ED8\u8BA4\u5E2610Mbps\uFF0C\u65D7\u8230\u7248\u7248\u9ED8\u8BA4\
        \u5E2620Mbps\u3002"
    Label:
      zh-cn: "NAT\u9632\u706B\u5899\u5B9E\u4F8B\u6570"
    MaxValue: 20
    MinValue: 0
    Required: false
    Type: Number
  PayType:
    AllowedValues:
    - PayAsYouGo
    - Subscription
    AssociationProperty: ChargeType
    AssociationPropertyMetadata:
      PaymentDefinition:
        PayAsYouGo: {}
        Subscription:
          Month:
          - 1
          - 3
          - 6
          Year:
          - 1
          - 2
          - 3
    Default: PayAsYouGo
    Description:
      en: 'The billing method of the firewall instance. Valid values:

        PayAsYouGo: pay-as-you-go

        Subscription: subscription'
    Required: true
    Type: String
  Period:
    AllowedValues:
    - 1
    - 2
    - 3
    - 6
    AssociationProperty: PayPeriod
    Default: 1
    Description:
      en: 'The subscription period of the firewallIf PeriodUnit is month, the valid
        range is 1, 3, 6

        If periodUnit is year, the valid range is 1, 2, 3'
    Required: false
    Type: Number
  PeriodUnit:
    AllowedValues:
    - Month
    - Year
    AssociationProperty: PayPeriodUnit
    Default: Month
    Description:
      en: 'The unit of the subscription duration. Valid values:

        Month

        Year

        Default value: Month.'
    Required: false
    Type: String
  Spec:
    AllowedValues:
    - PremiumVersion
    - EnterpriseVersion
    - UltimateVersion
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Equals:
          - ${PayType}
          - Subscription
    Default: PremiumVersion
    Description:
      en: The version of Cloud Firewall.
    Label:
      zh-cn: "\u9632\u706B\u5899\u7248\u672C"
    Required: false
    Type: String
  VpcBandwidth:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::And:
          - Fn::Equals:
            - ${PayType}
            - Subscription
          - Fn::Or:
            - Fn::Equals:
              - ${Spec}
              - EnterpriseVersion
            - Fn::Equals:
              - ${Spec}
              - UltimateVersion
    Description:
      en: 'VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.'
      zh-cn: "VPC\u6D41\u91CF\u5904\u7406\u80FD\u529B\u662F\u6307\u4E91\u9632\u706B\
        \u5899\u7684VPC\u8FB9\u754C\u9632\u706B\u5899\uFF0C\u53EF\u9632\u62A4\u7684\
        \u8DE8VPC\u6D41\u91CF\u5CF0\u503C\uFF0C\u5EFA\u8BAE\u4E0E\u60A8\u4E1A\u52A1\
        \u7684VPC\u5E26\u5BBD\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u968F\u65F6\u6269\
        \u5BB9"
    Label:
      zh-cn: "VPC\u6D41\u91CF\u5904\u7406\u80FD\u529B(\u5355\u4F4DMbps)"
    MaxValue: 15000
    MinValue: 1000
    Required: false
    Type: Number
  VpcFirewallNum:
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::And:
          - Fn::Equals:
            - ${PayType}
            - Subscription
          - Fn::Or:
            - Fn::Equals:
              - ${Spec}
              - EnterpriseVersion
            - Fn::Equals:
              - ${Spec}
              - UltimateVersion
    Description:
      en: The number of protected VPCs. It will be ignored when spec = "premium_version".
        Valid values between 2 and 500.
      zh-cn: "\u521B\u5EFA\u7684VPC\u9632\u706B\u5899\u5B9E\u4F8B\u6570\u3002\u5982\
        \u679C\u60A8\u7684VPC\u4E3A\u4E91\u4F01\u4E1A\u7F51\uFF08\u4F01\u4E1A\u7248\
        \uFF09\u7EC4\u7F51\u67B6\u6784\uFF0C\u6BCFTR\u5BF9\u5E94\u4E00\u4E2AVPC\u9632\
        \u706B\u5899\u5B9E\u4F8B\uFF1B\u5982\u679C\u4E3A\u4E91\u4F01\u4E1A\u7F51\uFF08\
        \u57FA\u7840\u7248\uFF09\u7EC4\u7F51\u67B6\u6784\uFF0C\u6BCFVPC\u5BF9\u5E94\
        \u4E00\u4E2AVPC\u9632\u706B\u5899\u5B9E\u4F8B\uFF1B\u5982\u679C\u4E3A\u9AD8\
        \u901F\u901A\u9053\u7EC4\u7F51\u67B6\u6784\uFF0C\u6BCF\u5BF9VPC\u5BF9\u5E94\
        \u4E00\u4E2AVPC\u9632\u706B\u5899\u5B9E\u4F8B"
    Label:
      zh-cn: "VPC\u9632\u706B\u5899\u5B9E\u4F8B\u6570"
    MaxValue: 500
    MinValue: 2
    Required: false
    Type: Number
Resources:
  Instance:
    Properties:
      AccountNum:
        Ref: AccountNum
      AclExtension:
        Ref: AclExtension
      AutoPay:
        Ref: AutoPay
      AutoRenew:
        Ref: AutoRenew
      Bandwidth:
        Ref: Bandwidth
      IpNum:
        Ref: IpNum
      LogAnalysis:
        Ref: LogAnalysis
      LogStorage:
        Ref: LogStorage
      MultiAccountManagement:
        Ref: MultiAccountManagement
      NatBandwidth:
        Ref: NatBandwidth
      NatFirewallNum:
        Ref: NatFirewallNum
      PayType:
        Ref: PayType
      Period:
        Ref: Period
      PeriodUnit:
        Ref: PeriodUnit
      Spec:
        Ref: Spec
      VpcBandwidth:
        Ref: VpcBandwidth
      VpcFirewallNum:
        Ref: VpcFirewallNum
    Type: ALIYUN::CLOUDFW::Instance
Outputs:
  InstanceId:
    Description: Instance Id.
    Value:
      Fn::GetAtt:
      - Instance
      - InstanceId
  OrderId:
    Description: Order id of created instance.
    Value:
      Fn::GetAtt:
      - Instance
      - OrderId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            {
              "Label": "Billing Method",
              "Items": [
                "PayType",
                "Period",
                "PeriodUnit"
              ]
            }
          ],
          "GroupType": "Payment",
          "Label": {
            "default": {
              "en": "Payment",
               
            }
          }
        },
        {
          "Parameters": [
            "AutoRenew"
          ],
          "Label": {
            "default": {
              "en": "AutoRenew Configuration",
               
            }
          }
        },
        {
          "Parameters": [
            "AutoPay"
          ],
          "Label": {
            "default": {
              "en": "AutoPay Configuration",
               
            }
          }
        },
        {
          "Parameters": [
            "Spec",
            "IpNum",
            "Bandwidth"
          ],
          "Label": {
            "default": {
              "en": "Spec Configuration",
               
            }
          }
        },
        {
          "Parameters": [
            "VpcFirewallNum",
            "VpcBandwidth"
          ],
          "Label": {
            "default": {
              "en": "Vpc Firewall Configuration",
               
            }
          }
        },
        {
          "Parameters": [
            "NatFirewallNum",
            "NatBandwidth"
          ],
          "Label": {
            "default": {
              "en": "Nat Firewall Configuration",
               
            }
          }
        },
        {
          "Parameters": [
            "AclExtension",
            "MultiAccountManagement",
            "AccountNum",
            "LogAnalysis",
            "LogStorage"
          ],
          "Label": {
            "default": {
              "en": "Instance Configuration",
               
            }
          }
        },
        {
          "Parameters": [],
          "Label": {
            "default": {
              "en": "Other Configuration",
               
            }
          }
        }
      ]
    }
  },
  "Parameters": {
    "VpcBandwidth": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::And": [
              {
                "Fn::Equals": [
                  "${PayType}",
                  "Subscription"
                ]
              },
              {
                "Fn::Or": [
                  {
                    "Fn::Equals": [
                      "${Spec}",
                      "EnterpriseVersion"
                    ]
                  },
                  {
                    "Fn::Equals": [
                      "${Spec}",
                      "UltimateVersion"
                    ]
                  }
                ]
              }
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.",
         
      },
      "Required": false,
      "MinValue": 1000,
      "Label": {
         
      },
      "MaxValue": 15000
    },
    "AclExtension": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.",
          
      },
      "Required": false,
      "MinValue": 0,
      "Label": {
         
      },
      "MaxValue": 50000
    },
    "NatFirewallNum": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.",
          
      },
      "Required": false,
      "MinValue": 0,
      "Label": {
         
      },
      "MaxValue": 20
    },
    "NatBandwidth": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.",
          
      },
      "Required": false,
      "MinValue": 0,
      "Label": {
         
      },
      "MaxValue": 1000
    },
    "IpNum": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]"
      },
      "Required": false,
      "MinValue": 20,
      "Label": {
         
      },
      "MaxValue": 4000
    },
    "AutoRenew": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto renew the prepay instance."
      },
      "Required": false,
      "Label": {
         
      }
    },
    "Period": {
      "AssociationProperty": "PayPeriod",
      "Type": "Number",
      "Description": {
        "en": "The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6\nIf periodUnit is year, the valid range is 1, 2, 3"
      },
      "AllowedValues": [
        1,
        2,
        3,
        6
      ],
      "Required": false,
      "Default": 1
    },
    "PayType": {
      "AssociationPropertyMetadata": {
        "PaymentDefinition": {
          "PayAsYouGo": {},
          "Subscription": {
            "Month": [
              1,
              3,
              6
            ],
            "Year": [
              1,
              2,
              3
            ]
          }
        }
      },
      "AssociationProperty": "ChargeType",
      "Type": "String",
      "Description": {
        "en": "The billing method of the firewall instance. Valid values:\nPayAsYouGo: pay-as-you-go\nSubscription: subscription"
      },
      "AllowedValues": [
        "PayAsYouGo",
        "Subscription"
      ],
      "Required": true,
      "Default": "PayAsYouGo"
    },
    "AutoPay": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Boolean",
      "Description": {
        "en": "Whether to auto pay the bill."
      },
      "Required": false,
      "Label": {
         
      },
      "Default": true
    },
    "LogStorage": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::And": [
              {
                "Fn::Equals": [
                  "${PayType}",
                  "Subscription"
                ]
              },
              {
                "Fn::Equals": [
                  "${LogAnalysis}",
                  true
                ]
              }
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity",
         
      },
      "Required": false,
      "MinValue": 1000,
      "Label": {
         
      },
      "MaxValue": 500000
    },
    "LogAnalysis": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Boolean",
      "Description": {
        "en": "The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.",
         
      },
      "Required": false,
      "Label": {
         
      }
    },
    "VpcFirewallNum": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::And": [
              {
                "Fn::Equals": [
                  "${PayType}",
                  "Subscription"
                ]
              },
              {
                "Fn::Or": [
                  {
                    "Fn::Equals": [
                      "${Spec}",
                      "EnterpriseVersion"
                    ]
                  },
                  {
                    "Fn::Equals": [
                      "${Spec}",
                      "UltimateVersion"
                    ]
                  }
                ]
              }
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "The number of protected VPCs. It will be ignored when spec = \"premium_version\". Valid values between 2 and 500.",
          
      },
      "Required": false,
      "MinValue": 2,
      "Label": {
         
      },
      "MaxValue": 500
    },
    "AccountNum": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::And": [
              {
                "Fn::Equals": [
                  "${PayType}",
                  "Subscription"
                ]
              },
              {
                "Fn::Equals": [
                  "${MultiAccountManagement}",
                  true
                ]
              }
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "The number of multi-account management and control is the number of member accounts that you need to uniformly control.",
          
      },
      "Required": false,
      "Label": {
         
      }
    },
    "MultiAccountManagement": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Boolean",
      "Description": {
        "en": "Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.",
          
      },
      "Required": false,
      "Label": {
         
      },
      "Default": false
    },
    "Bandwidth": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "Number",
      "Description": {
        "en": "Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.",
         
      },
      "Required": false,
      "MinValue": 10,
      "Label": {
         
      },
      "MaxValue": 15000
    },
    "Spec": {
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Equals": [
              "${PayType}",
              "Subscription"
            ]
          }
        }
      },
      "Type": "String",
      "Description": {
        "en": "The version of Cloud Firewall."
      },
      "AllowedValues": [
        "PremiumVersion",
        "EnterpriseVersion",
        "UltimateVersion"
      ],
      "Required": false,
      "Label": {
         
      },
      "Default": "PremiumVersion"
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
      "Required": false,
      "Default": "Month"
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::CLOUDFW::Instance",
      "Properties": {
        "VpcBandwidth": {
          "Ref": "VpcBandwidth"
        },
        "AclExtension": {
          "Ref": "AclExtension"
        },
        "NatFirewallNum": {
          "Ref": "NatFirewallNum"
        },
        "NatBandwidth": {
          "Ref": "NatBandwidth"
        },
        "IpNum": {
          "Ref": "IpNum"
        },
        "AutoRenew": {
          "Ref": "AutoRenew"
        },
        "Period": {
          "Ref": "Period"
        },
        "PayType": {
          "Ref": "PayType"
        },
        "AutoPay": {
          "Ref": "AutoPay"
        },
        "LogStorage": {
          "Ref": "LogStorage"
        },
        "LogAnalysis": {
          "Ref": "LogAnalysis"
        },
        "VpcFirewallNum": {
          "Ref": "VpcFirewallNum"
        },
        "AccountNum": {
          "Ref": "AccountNum"
        },
        "MultiAccountManagement": {
          "Ref": "MultiAccountManagement"
        },
        "Bandwidth": {
          "Ref": "Bandwidth"
        },
        "Spec": {
          "Ref": "Spec"
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
    },
    "OrderId": {
      "Description": "Order id of created instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "OrderId"
        ]
      }
    }
  }
}
                        
```
