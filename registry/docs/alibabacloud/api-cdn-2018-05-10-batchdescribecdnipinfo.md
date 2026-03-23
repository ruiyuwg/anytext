Queries whether one or more IP addresses are assigned to Alibaba Cloud CDN.

## Operation description

**Note**

The maximum number of times that each user can call this operation per second is 20.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/BatchDescribeCdnIpInfo)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/BatchDescribeCdnIpInfo)

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

cdn:BatchDescribeCdnIpInfo

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

IpAddrList

string

Yes

The list of IP addresses to query. Separate IP addresses with commas (,). You can specify up to 20 IP addresses at a time.

**Note**

-   Example of an IPv4 address: 192.0.2.1
    
-   Example of an IPv6 address: 2001:db8:ffff:ffff:ffff:\*\*\*\*:ffff.
    

111.XXX.XXX.230,47.XXX.XXX.243

Language

string

No

The language of the query results. Valid values:

-   **zh** (default): Simplified Chinese.
    
-   **en**: English.
    

**Valid values:**

-   en :
    
    en
    
-   zh :
    
    zh
    

en

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The ID of the request.

55ADD936-763F-5E1A-BF54-2EA3F6E94A52

IpInfoList

array<object>

The results about IP addresses returned.

object

IpAddress

string

The IP address.

111.XXX.XXX.230

IspName

string

The ISP to which the IP address belongs.

移动

Country

string

The country to which the IP address belongs.

中国

Province

string

The province to which the IP address belongs.

北京市

City

string

The city to which the IP address belongs.

北京市

CdnIp

string

Indicates whether the IP address belongs to an Alibaba Cloud CDN point of presence (POP).

-   **true**
    
-   **false**
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "55ADD936-763F-5E1A-BF54-2EA3F6E94A52",
  "IpInfoList": [
    {
      "IpAddress": "111.XXX.XXX.230",
      "IspName": "移动",
      "Country": "中国",
      "Province": "北京市",
      "City": "北京市",
      "CdnIp": "true"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvaildBatchIp.LengthTooLong

The batchIp parameter is too long

The length of the IP addresses exceeds the limit.

403

InvaildParameter

The parameter you provided is invalid.

The format of the domain name is invalid. Correct the format and try again.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/BatchDescribeCdnIpInfo#workbench-doc-change-demo) for a complete list.
