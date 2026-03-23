Retrieves the details of the Web Application Firewall (WAF) instance in your Alibaba Cloud account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/waf-openapi/2021-10-01/DescribeInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/waf-openapi/2021-10-01/DescribeInstance)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region where the WAF instance resides. Valid values:

-   **cn-hangzhou**: the Chinese mainland.
    
-   **ap-southeast-1**: outside the Chinese mainland.
    

cn-hangzhou

ResourceManagerResourceGroupId

string

No

The ID of the Alibaba Cloud resource group.

rg-acfm\*\*\*q

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Status

integer

The current status of the instance. Valid values:

-   **1**: Normal.
    
-   **2**: The instance has expired.
    
-   **3**: The instance is released.
    

1

Details

object

The details of the instance.

DefenseObjectInGroupMaxCount

integer

The maximum number of protected objects that can be included in a protection group.

100

Tamperproof

boolean

Indicates whether webpage tamper protection is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

BotApp

string

Indicates whether scenario-specific bot protection for apps is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

IpBlacklistRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single blacklist template.

100

WhitelistRuleCondition

string

The match field for the whitelist rule. For more information, see the description of the **conditions** parameter for **whitelist** rules in CreateDefenseRule.

URL

CustomRuleCondition

string

The match condition for the custom rule. For more information, see the description of the **conditions** parameter for **custom\_acl** rules in CreateDefenseRule.

URL

CustomResponse

boolean

Indicates whether custom responses are supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

HttpPorts

string

The available HTTP ports. For more information, see Port numbers supported by WAF.

80

Gslb

boolean

Indicates whether Global Server Load Balancing (GSLB) is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

Ipv6

boolean

Indicates whether IPv6 is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

Bot

boolean

Indicates whether bot management is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

CustomRule

boolean

Indicates whether custom rules are supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

IpBlacklist

boolean

Indicates whether the IP address blacklist is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

CnameResourceMaxCount

integer

The maximum number of CNAMEs that can be added.

1000

BackendMaxCount

integer

The maximum number of back-to-origin IP addresses that can be configured.

20

ExclusiveIp

boolean

Indicates whether exclusive IP addresses are supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

CustomResponseRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single custom response template.

100

IpBlacklistIpInRuleMaxCount

integer

The maximum number of IP addresses that can be added to a blacklist rule.

200

AclRuleMaxIpCount

integer

The maximum number of IP addresses that can be added to the match content. For more information about match content, see [Match conditions](/help/en/waf/web-application-firewall-3-0/user-guide/match-conditions).

100

BotTemplateMaxCount

integer

The maximum number of bot management protection templates that can be configured.

50

DefenseGroupMaxCount

integer

The maximum number of protection groups that can be configured.

100

VastIpBlacklistInFileMaxCount

integer

The maximum number of IP addresses that can be imported to the IP address blacklist in a single batch.

2,000

AntiScanTemplateMaxCount

integer

The maximum number of scan protection templates that can be configured.

20

WhitelistLogical

string

The logical operator for the whitelist rule. For more information, see the description of the **conditions** parameter for **whitelist** rules in CreateDefenseRule.

contain

CustomRuleTemplateMaxCount

integer

The maximum number of custom rule templates that can be configured.

20

TamperproofTemplateMaxCount

integer

The maximum number of webpage tamper protection templates that can be configured.

50

IpBlacklistTemplateMaxCount

integer

The maximum number of blacklist templates that can be configured.

20

HttpsPorts

string

The available HTTPS ports. For more information, see Port numbers supported by WAF.

443

DlpTemplateMaxCount

integer

The maximum number of data leak prevention templates that can be configured.

50

CustomRuleRatelimitor

string

The rate limiting object for the custom rule.

header

DefenseObjectMaxCount

integer

The maximum number of protected objects that can be configured.

20,000

Dlp

boolean

Indicates whether data leak prevention is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

DefenseObjectInTemplateMaxCount

integer

The maximum number of protected objects that can be associated with a template.

100

CustomRuleAction

string

The action string for the custom rule.

block

TamperproofRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single webpage tamper protection template.

50

DlpRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single data leak prevention template.

50

WhitelistTemplateMaxCount

integer

The maximum number of whitelist templates that can be configured.

20

MajorProtection

boolean

Indicates whether critical event protection is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

BaseWafGroupRuleTemplateMaxCount

integer

The maximum number of basic protection rule templates that can be configured.

20

BotWeb

string

Indicates whether scenario-specific bot protection for websites is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

CustomRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single custom rule template.

100

VastIpBlacklistInOperationMaxCount

integer

The maximum number of IP addresses that can be added to the IP address blacklist from the console in a single operation.

500

WhitelistRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single whitelist template.

100

AntiScan

boolean

Indicates whether scan protection is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

CustomResponseTemplateMaxCount

integer

The maximum number of custom response templates that can be configured.

20

BaseWafGroupRuleInTemplateMaxCount

integer

The maximum number of protection rules that can be included in a single basic protection rule template.

100

MajorProtectionTemplateMaxCount

integer

The maximum number of critical event protection templates that can be configured.

20

BaseWafGroup

boolean

Indicates whether basic protection rules are supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

Whitelist

boolean

Indicates whether the IP address whitelist is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

LogService

boolean

Indicates whether Simple Log Service is supported. Valid values:

-   **true**: Supported.
    
-   **false**: Not supported.
    

true

VastIpBlacklistMaxCount

integer

The maximum number of IP addresses that can be added to the IP address blacklist for a single user.

50,000

FreeQps

integer

The free queries per second (QPS) of the subscription instance. For more information, see [WAF 3.0 subscription plans](/help/en/waf/web-application-firewall-3-0/product-overview/editions).

**Note**

This parameter has no meaning for pay-as-you-go instances.

1000

ExtendQps

integer

The extra QPS of the subscription instance. For more information, see [WAF 3.0 subscription plans](/help/en/waf/web-application-firewall-3-0/product-overview/editions).

**Note**

This parameter has no meaning for pay-as-you-go instances.

10000

ElasticQps

integer

The pay-as-you-go QPS of the subscription instance. For more information, see [WAF 3.0 subscription plans](/help/en/waf/web-application-firewall-3-0/product-overview/editions).

**Note**

This parameter has no meaning for pay-as-you-go instances.

2000

QpsBillingCap

integer

The traffic billing protection threshold for the pay-as-you-go instance. For more information, see [Traffic billing protection](/help/en/waf/web-application-firewall-3-0/traffic-billing-protection) for pay-as-you-go instances.

**Note**

This parameter has no meaning for subscription instances.

2000

RequestId

string

The request ID.

66A98669-CC6E-4F3E-80A6-3014697B11AE

EndTime

integer

The expiration time of the instance. This value is a UNIX timestamp. Unit: milliseconds.

4809859200000

InstanceId

string

The ID of the WAF instance.

waf-cn-xxx

InDebt

string

Indicates whether the instance has an overdue payment:

-   **0**: No.
    
-   **1**: Yes.
    

1

StartTime

integer

The time when the instance was purchased. The value is a UNIX timestamp. Unit: milliseconds.

1668496310000

RegionId

string

The region where the WAF instance resides. Valid values:

-   **cn-hangzhou**: the Chinese mainland.
    
-   **ap-southeast-1**: outside the Chinese mainland.
    

cn-hangzhou

PayType

string

The billing method of the instance. Valid values:

-   **POSTPAY**: The instance is a pay-as-you-go instance.
    
-   **PREPAY**: The instance is a subscription instance.
    

POSTPAY

Edition

string

The edition of the WAF instance.

default\_version

ProcessStatus

string

The processing status of the instance. Valid values:

-   **commodity\_converting**: The instance is being upgraded or downgraded.
    
-   **commodity\_convert\_check\_failed**: The check for the instance upgrade or downgrade fails.
    
-   **commodity\_convert\_process\_failed**: The instance upgrade or downgrade fails.
    
-   **order\_create\_failed**: The order fails to be created.
    
-   **order\_pending\_payment**: The order is pending payment.
    

## Examples

Success response

`JSON` format

```
{
  "Status": 1,
  "Details": {
    "DefenseObjectInGroupMaxCount": 100,
    "Tamperproof": true,
    "BotApp": "true",
    "IpBlacklistRuleInTemplateMaxCount": 100,
    "WhitelistRuleCondition": "URL",
    "CustomRuleCondition": "URL",
    "CustomResponse": true,
    "HttpPorts": "80",
    "Gslb": true,
    "Ipv6": true,
    "Bot": true,
    "CustomRule": true,
    "IpBlacklist": true,
    "CnameResourceMaxCount": 1000,
    "BackendMaxCount": 20,
    "ExclusiveIp": true,
    "CustomResponseRuleInTemplateMaxCount": 100,
    "IpBlacklistIpInRuleMaxCount": 200,
    "AclRuleMaxIpCount": 100,
    "BotTemplateMaxCount": 50,
    "DefenseGroupMaxCount": 100,
    "VastIpBlacklistInFileMaxCount": 0,
    "AntiScanTemplateMaxCount": 20,
    "WhitelistLogical": "contain",
    "CustomRuleTemplateMaxCount": 20,
    "TamperproofTemplateMaxCount": 50,
    "IpBlacklistTemplateMaxCount": 20,
    "HttpsPorts": "443",
    "DlpTemplateMaxCount": 50,
    "CustomRuleRatelimitor": "header",
    "DefenseObjectMaxCount": 0,
    "Dlp": true,
    "DefenseObjectInTemplateMaxCount": 100,
    "CustomRuleAction": "block",
    "TamperproofRuleInTemplateMaxCount": 50,
    "DlpRuleInTemplateMaxCount": 50,
    "WhitelistTemplateMaxCount": 20,
    "MajorProtection": true,
    "BaseWafGroupRuleTemplateMaxCount": 20,
    "BotWeb": "true",
    "CustomRuleInTemplateMaxCount": 100,
    "VastIpBlacklistInOperationMaxCount": 500,
    "WhitelistRuleInTemplateMaxCount": 100,
    "AntiScan": true,
    "CustomResponseTemplateMaxCount": 20,
    "BaseWafGroupRuleInTemplateMaxCount": 100,
    "MajorProtectionTemplateMaxCount": 20,
    "BaseWafGroup": true,
    "Whitelist": true,
    "LogService": true,
    "VastIpBlacklistMaxCount": 0,
    "FreeQps": 1000,
    "ExtendQps": 10000,
    "ElasticQps": 2000,
    "QpsBillingCap": 2000
  },
  "RequestId": "66A98669-CC6E-4F3E-80A6-3014697B11AE",
  "EndTime": 4809859200000,
  "InstanceId": "waf-cn-xxx",
  "InDebt": "1",
  "StartTime": 1668496310000,
  "RegionId": "cn-hangzhou",
  "PayType": "POSTPAY",
  "Edition": "default_version",
  "ProcessStatus": ""
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/waf-openapi/2021-10-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/waf-openapi/2021-10-01/DescribeInstance#workbench-doc-change-demo) for a complete list.
