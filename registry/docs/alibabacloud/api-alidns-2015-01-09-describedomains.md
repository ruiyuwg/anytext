Queries a list of domain names based on specified parameters.

## Operation description

1.  You can specify a page number (PageNumber) and page size (PageSize) to retrieve a paginated list of domain names.
    
2.  You can specify a keyword (KeyWord) to query for domain names that contain the specified keyword.
    
3.  By default, domain names are sorted in descending order of their creation time.
    
4.  You can specify a domain name group ID (GroupId) to query for domain names in a specific group. This lets you retrieve all domain names or only the domain names that are not assigned to a group.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomains)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Alidns/2015-01-09/DescribeDomains)

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

alidns:DescribeDomains

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
    

Default value: zh.

en

KeyWord

string

No

The keyword. The search is performed in the %KeyWord% pattern and is not case-sensitive.

com

GroupId

string

No

The ID of the domain name group.

If you leave this parameter empty or pass an empty string, all domain names are queried.

If you set this parameter to defaultGroup, domain names in the default group are queried.

defaultGroup

PageNumber

integer

No

The page number. The value starts from **1**. The default value is **1**.

1

PageSize

integer

No

The number of entries per page. The maximum value is **100**. The default value is **20**.

20

SearchMode

string

No

The search mode. Valid values:

-   **LIKE**: fuzzy search
    
-   **EXACT**: exact search
    

Default value: LIKE

LIKE

ResourceGroupId

string

No

The ID of the resource group.

rg-re\*\*\*\*\*\*\*\*

Starmark

boolean

No

Specifies whether to query starred domain names. Valid values:

-   **true**
    
-   **false**
    

Default value: true

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Domains

object

Domain

array<object>

The list of domain names.

object

The list of domain names.

Remark

string

The remarks.

remark

CreateTime

string

The time when the domain name was added.

2019-01-30T05:25Z

RecordCount

integer

The number of DNS records for the domain name.

100

Tags

object

Tag

array<object>

The array of tags.

object

Key

string

The tag key.

测试标签

Value

string

The tag value.

测试标签值

InstanceId

string

The ID of the Alibaba Cloud DNS instance.

i-\*\*\*

DomainName

string

The domain name.

example.com

DomainId

string

The ID of the domain name.

00efd71a-770e-4255-\*\*\*\*\*\*\*\*\*

AliDomain

boolean

Indicates whether the domain name was registered with Alibaba Cloud.

true

GroupId

string

The ID of the domain name group.

2\*\*\*

GroupName

string

The name of the domain name group.

mygroup

ResourceGroupId

string

The ID of the resource group.

rg\*\*\*

InstanceEndTime

string

The time when the instance expires.

2020-03-14T16:00Z

InstanceExpired

boolean

Indicates whether the instance has expired.

false

VersionName

string

The name of the Alibaba Cloud DNS edition.

企业旗舰版

DnsServers

object

DnsServer

array

The list of DNS servers assigned by Alibaba Cloud DNS.

string

The DNS server assigned by Alibaba Cloud DNS.

{"DnsServer": \["ns1.alidns.com","ns2.alidns.com"\]}

VersionCode

string

The code of the Alibaba Cloud DNS edition.

version\_enterprise\_basic

PunyCode

string

The Punycode representation of the Chinese domain name. This parameter is empty for English domain names.

example.com

RegistrantEmail

string

The email address of the registrant.

\*\*\*\*@example.com

CreateTimestamp

integer

The time when the domain name was added. This value is a UNIX timestamp.

1660546144000

Starmark

boolean

Indicates whether the domain name is starred.

true

DomainLoggingSwitchStatus

string

The status of DNS traffic analysis for the domain name:

-   OPEN: enabled
    
-   CLOSE: disabled
    

OPEN

SlaveDnsStatus

string

TotalCount

integer

The total number of domain names.

2

PageSize

integer

The number of entries per page. The maximum value is **100**. The default value is **20**.

2

RequestId

string

The unique ID of the request.

68386699-8B9E-4D5B-BC4C-75A28F6C2A00

PageNumber

integer

The page number. The value starts from 1. The default value is 1.

1

## Examples

Success response

`JSON` format

```
{
  "Domains": {
    "Domain": [
      {
        "Remark": "remark",
        "CreateTime": "2019-01-30T05:25Z",
        "RecordCount": 100,
        "Tags": {
          "Tag": [
            {
              "Key": "测试标签",
              "Value": "测试标签值"
            }
          ]
        },
        "InstanceId": "i-***",
        "DomainName": "example.com\n",
        "DomainId": "00efd71a-770e-4255-*********",
        "AliDomain": true,
        "GroupId": "2***",
        "GroupName": "mygroup",
        "ResourceGroupId": "rg***",
        "InstanceEndTime": "2020-03-14T16:00Z",
        "InstanceExpired": false,
        "VersionName": "企业旗舰版",
        "DnsServers": {
          "DnsServer": [
            "{\"DnsServer\": [\"ns1.alidns.com\",\"ns2.alidns.com\"]}"
          ]
        },
        "VersionCode": "version_enterprise_basic",
        "PunyCode": "example.com\n",
        "RegistrantEmail": "****@example.com",
        "CreateTimestamp": 1660546144000,
        "Starmark": true,
        "DomainLoggingSwitchStatus": "OPEN",
        "SlaveDnsStatus": ""
      }
    ]
  },
  "TotalCount": 2,
  "PageSize": 2,
  "RequestId": "68386699-8B9E-4D5B-BC4C-75A28F6C2A00",
  "PageNumber": 1
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Alidns/2015-01-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Alidns/2015-01-09/DescribeDomains#workbench-doc-change-demo) for a complete list.
