Call DescribeDcdnRefreshQuota to query the daily limits and remaining quotas for URL refreshes, URL prefetches, and folder refreshes.

## Operation description

**Note**

-   The refresh and prefetch API operations include **RefreshDcdnObjectCaches** and **PreloadDcdnObjectCaches**.
    
-   A single user can make up to 20 calls per second.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnRefreshQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnRefreshQuota)

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

dcdn:DescribeDcdnRefreshQuota

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

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

BlockQuota

string

The daily quota for blocked URLs.

100

RegexRemain

string

The remaining number of refreshes based on regular expressions for the day.

100

BlockRemain

string

The remaining number of URLs that can be blocked for the day.

100

PreloadRemain

string

The remaining number of URLs that can be prefetched for the day.

500

RequestId

string

The request ID.

42E0554B-80F4-4921-AED6-ACFB22CAAAD0

DirRemain

string

The remaining number of folders that can be refreshed for the day.

100

UrlRemain

string

The remaining number of URLs that can be refreshed for the day.

2000

DirQuota

string

The daily quota for folder refreshes.

100

UrlQuota

string

The daily quota for URL refreshes.

2000

PreloadQuota

string

The daily quota for URL prefetches.

500

RegexQuota

string

The daily quota for refreshes based on regular expressions.

100

IgnoreParamsQuota

string

The daily quota for refreshes that ignore URL parameters.

100

IgnoreParamsRemain

string

The remaining number of refreshes that ignore URL parameters for the day.

10

## Examples

Success response

`JSON` format

```
{
  "BlockQuota": "100",
  "RegexRemain": "100",
  "BlockRemain": "100",
  "PreloadRemain": "500",
  "RequestId": "42E0554B-80F4-4921-AED6-ACFB22CAAAD0",
  "DirRemain": "100",
  "UrlRemain": "2000",
  "DirQuota": "100",
  "UrlQuota": "2000",
  "PreloadQuota": "500",
  "RegexQuota": "100",
  "IgnoreParamsQuota": "100",
  "IgnoreParamsRemain": "10"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnRefreshQuota#workbench-doc-change-demo) for a complete list.
