Queries information about a specified domain name.

## Operation description

In this example, the domain name is bound to an instance of Alibaba Cloud DNS Ultimate Edition. For more information about line enumeration, see the RecordLines response parameter.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomainInfo)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomainInfo)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

alidns:DescribeDomainInfo

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the response. Valid values:

-   zh: Chinese
    
-   en: English
    

Default value: en.

en

DomainName

string

Yes

The domain name. Call [DescribeDomains](/help/en/dns/api-alidns-2015-01-09-describedomains) to obtain the domain name.

example.com

NeedDetailAttributes

boolean

No

Specifies whether to return detailed attributes of the domain name. Valid values:

-   true
    
-   false
    

The default value is false.

If you set this parameter to **true**, the response includes the following parameters: lineType, minTtl, recordLineTreeJson, recordLines, lineCode, lineDisplayName, lineName, regionLines, and slaveDns.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RecordLineTreeJson

string

The list of DNS request source lines in a tree structure.

{"default":{},"unicom":{},"telecom":{},"mobile":{},"edu":{},"oversea":{},"baidu":{},"biying":{},"google":{}}

GroupName

string

The name of the domain name group.

mygroup

InBlackHole

boolean

Indicates whether blackhole filtering is activated for the domain name.

false

RegionLines

boolean

Indicates whether the line is a regional line.

false

SlaveDns

boolean

Indicates whether secondary DNS is supported.

true

AliDomain

boolean

Indicates whether the domain name was registered with Alibaba Cloud.

true

RequestId

string

The unique request ID.

536E9CAD-DB30-4647-AC87-AA5CC38C5382

ResourceGroupId

string

The ID of the resource group.

rg-aek3dj3\*\*\*\*\*\*

InstanceId

string

The ID of the Alibaba Cloud DNS instance.

i-7\*\*

DomainName

string

The domain name.

example.com

CreateTime

string

The time when the domain name was created.

2015-12-12T09:23Z

PunyCode

string

The Punycode for the Chinese domain name.

example.com

DnsServers

object

DnsServer

array

The list of DNS servers for the domain name.

string

A string that contains an array of DNS servers.

\["vip3.alidns.com", "vip4.alidns.com"\]

Remark

string

The remarks.

remark

GroupId

string

The ID of the domain name group.

2\*\*\*

VersionCode

string

The edition ID of Alibaba Cloud DNS. Valid values:

-   version\_enterprise\_advanced: Ultimate Edition
    
-   version\_personal: Personal Edition
    
-   mianfei: Free Edition
    

mianfei

RecordLines

object

RecordLine

array<object>

The list of DNS request source lines.

object

FatherCode

string

The code of the parent line. This parameter is empty if no parent line exists.

internal

LineDisplayName

string

The display name of the parent line.

中国地区\_西北

LineCode

string

The code of the child line.

cn\_region\_xibei

LineName

string

The display name of the child line.

西北

DomainId

string

The ID of the domain name.

00efd71a-7\*\*\*\*\*\*\*\*\*\*\*\*

AvailableTtls

object

AvailableTtl

array

The list of available Time to Live (TTL) values for the domain name. This parameter is not returned by default. To return this parameter, set NeedDetailAttributes to true.

string

A string that contains an array of available TTL values.

\[600,1800,3600,43200,86400\]

MinTtl

integer

The minimum TTL.

1

InClean

boolean

Indicates whether the domain name is being scrubbed.

false

VersionName

string

The name of the Alibaba Cloud DNS edition.

企业旗舰版

LineType

string

The type of the DNS request source line.

region\_province

SubDomain

boolean

Indicates whether the queried domain is a hosted subdomain. Valid values:

-   true
    
-   false
    

false

DomainLoggingSwitchStatus

string

The status of the logging feature.

CLOSE：关闭状态 OPEN：开启状态

## Examples

Success response

`JSON` format

```
{
  "RecordLineTreeJson": "{\"default\":{},\"unicom\":{},\"telecom\":{},\"mobile\":{},\"edu\":{},\"oversea\":{},\"baidu\":{},\"biying\":{},\"google\":{}}",
  "GroupName": "mygroup",
  "InBlackHole": false,
  "RegionLines": false,
  "SlaveDns": true,
  "AliDomain": true,
  "RequestId": "536E9CAD-DB30-4647-AC87-AA5CC38C5382",
  "ResourceGroupId": "rg-aek3dj3******",
  "InstanceId": "i-7**",
  "DomainName": "example.com",
  "CreateTime": "2015-12-12T09:23Z",
  "PunyCode": "example.com",
  "DnsServers": {
    "DnsServer": [
      "[\"vip3.alidns.com\", \"vip4.alidns.com\"]"
    ]
  },
  "Remark": "remark",
  "GroupId": "2***",
  "VersionCode": "mianfei",
  "RecordLines": {
    "RecordLine": [
      {
        "FatherCode": "internal",
        "LineDisplayName": "中国地区_西北",
        "LineCode": "cn_region_xibei",
        "LineName": "西北"
      }
    ]
  },
  "DomainId": "00efd71a-7************",
  "AvailableTtls": {
    "AvailableTtl": [
      "[600,1800,3600,43200,86400]"
    ]
  },
  "MinTtl": 1,
  "InClean": false,
  "VersionName": "企业旗舰版",
  "LineType": "region_province",
  "SubDomain": false,
  "DomainLoggingSwitchStatus": "CLOSE：关闭状态\nOPEN：开启状态"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Alidns/2015-01-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Alidns/2015-01-09/DescribeDomainInfo#workbench-doc-change-demo) for a complete list.
