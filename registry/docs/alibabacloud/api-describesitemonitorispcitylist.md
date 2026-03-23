Queries the detection points that are provided by carriers.

## Operation description

This topic provides an example on how to query the detection points that are provided by China Unicom in Guiyang.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeSiteMonitorISPCityList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeSiteMonitorISPCityList)

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

cms:DescribeSiteMonitorISPCityList

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

Isp

string

No

The name or ID of the carrier.

**Note**

Carrier names support fuzzy match.

联通

City

string

No

The name or ID of the city.

**Note**

City names support fuzzy match.

贵阳市

IPV6

boolean

No

Specifies whether to query IPv6 probes. Valid values:

-   true (default): IPv6 probes are queried.
    
-   false: IPv6 probes are not queried.
    

true

IPV4

boolean

No

Specifies whether to query IPv4 probes. Valid values:

-   true (default): IPv4 probes are queried.
    
-   false: IPv4 probes are not queried.
    

true

ViewAll

boolean

No

Specifies whether to return all detection points. Valid values:

-   true (default): returns all detection points.
    
-   false: returns only available detection points.
    

true

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

successful

RequestId

string

The request ID.

B35D7D84-547B-4E61-B909-48A1F8A0C756

Success

string

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

IspCityList

object

IspCity

array<object>

The queried detection points.

array<object>

The queried detection point.

CityName.en

string

The city name.

Guiyang

IPV4ProbeCount

string

The number of IPv4 probes.

4

City

string

The city ID.

4

Isp

string

The carrier ID.

232

CityName.zh\_CN

string

The city name.

**Note**

This parameter is valid only on the China site (aliyun.com).

贵阳市

Region.zh\_CN

string

The name of the province.

**Note**

This parameter can be returned only on the China site (aliyun.com).

贵州省

IspName.zh\_CN

string

The carrier name.

**Note**

This parameter is valid only on the China site (aliyun.com).

联通

Country.en

string

The name of the country.

China

IPV6ProbeCount

string

The number of IPv6 probes.

3

Region

string

The province name.

264

Country

string

The country name.

**Note**

This parameter is valid only on the China site (aliyun.com).

629

IspName.en

string

The carrier name.

China-Unicom

Region.en

string

The name of the province.

Guizhou

Country.zh\_CN

string

The name of the country.

**Note**

This parameter can be returned only on the China site (aliyun.com).

中国

Area.zh\_CN

string

The area name.

**Note**

This parameter is valid only on the China site (aliyun.com).

西南

Area.en

string

The area name.

XiNan

IPPool

object

IPPool

array

The IP address pool.

string

The IP address pool.

\["192.68.XX.XX","192.68.XX.XX"\]

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "B35D7D84-547B-4E61-B909-48A1F8A0C756",
  "Success": "true",
  "IspCityList": {
    "IspCity": [
      {
        "CityName.en": "Guiyang",
        "IPV4ProbeCount": "4",
        "City": "4",
        "Isp": "232",
        "CityName.zh_CN": "贵阳市",
        "Region.zh_CN": "贵州省",
        "IspName.zh_CN": "联通",
        "Country.en": "China",
        "IPV6ProbeCount": "3",
        "Region": "264",
        "Country": "629",
        "IspName.en": "China-Unicom",
        "Region.en": "Guizhou",
        "Country.zh_CN": "中国",
        "Area.zh_CN": "西南",
        "Area.en": "XiNan",
        "IPPool": {
          "IPPool": [
            "[\"192.68.XX.XX\",\"192.68.XX.XX\"]"
          ]
        }
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidQueryParameter

%s

401

AccessDeniedException

You donot have sufficient access to perform this action.

500

InternalError

%s

402

LimitExceeded

The quota for this customer had been reached.

403

Forbidden

You are not authorized to operate the specified resource.

No permission, please use RAM to authorize

503

%s

%s

406

ExceedingQuota

Exceeding quota limits.

The number of tasks exceeds the limit

429

ThrottlingException

The request was denied due to request throttling.

409

%s

%s

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeSiteMonitorISPCityList#workbench-doc-change-demo) for a complete list.
