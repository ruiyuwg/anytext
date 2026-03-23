Call DescribeDcdnUserQuota to query resource quotas and usage.

## Operation description

**Note**

The call frequency limit for a single user is 30 calls per second.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnUserQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnUserQuota)

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

dcdn:DescribeDcdnUserQuota

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

integer

The quota for blocked URLs.

20

RefreshUrlRemain

integer

The remaining number of URLs that can be refreshed.

100

DomainQuota

integer

The quota for accelerated domain names.

50

BlockRemain

integer

The remaining number of URLs that can be blocked.

500

PreloadRemain

integer

The remaining number of URLs that can be prefetched.

300

RequestId

string

The request ID.

BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23

RefreshUrlQuota

integer

The quota for refreshing URLs.

100

PreloadQuota

integer

The quota for prefetching URLs.

500

RefreshDirQuota

integer

The quota for refreshing directories.

100

RefreshDirRemain

integer

The remaining number of directories that can be refreshed.

100

IgnoreParamsQuota

integer

The quota for refreshing URLs with parameters ignored.

100

IgnoreParamsRemain

integer

The remaining number of URLs that can be refreshed with parameters ignored.

10

## Examples

Success response

`JSON` format

```
{
  "BlockQuota": 20,
  "RefreshUrlRemain": 100,
  "DomainQuota": 50,
  "BlockRemain": 500,
  "PreloadRemain": 300,
  "RequestId": "BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23",
  "RefreshUrlQuota": 100,
  "PreloadQuota": 500,
  "RefreshDirQuota": 100,
  "RefreshDirRemain": 100,
  "IgnoreParamsQuota": 100,
  "IgnoreParamsRemain": 10
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnUserQuota#workbench-doc-change-demo) for a complete list.
