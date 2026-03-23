Describes the auto-renewal status of a subscription PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAutoRenewAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeAutoRenewAttribute)

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

polardb:DescribeAutoRenewAttribute

list

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#DbClusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID.

**Note**

You can call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to query region IDs.

cn-hangzhou

DBClusterIds

string

No

The cluster ID. You can specify multiple cluster IDs. Separate the cluster IDs with commas (,).

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PageSize

integer

No

The number of records on each page. Valid values: 30, 50, and 100. The default value is 30.

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. The default value is 1.

1

ResourceGroupId

string

No

The ID of the resource group.

rg-re\*\*\*\*\*\*\*\*\*

CloudProvider

string

No

ENS

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Items

object

AutoRenewAttribute

array<object>

A list of renewal information for the clusters.

object

AutoRenewEnabled

boolean

Indicates whether auto-renewal is enabled.

-   true: Auto-renewal is enabled.
    
-   false: Auto-renewal is disabled.
    

true

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Duration

integer

The renewal duration.

4

PeriodUnit

string

The unit of the renewal duration.

-   Year
    
-   Month
    

Month

RegionId

string

The region ID.

cn-hangzhou

RenewalStatus

string

The renewal status. Valid values:

-   AutoRenewal: Auto-renewal is enabled.
    
-   Normal: Manual renewal is enabled. You are notified by a text message before the cluster expires.
    
-   NotRenewal: The cluster is not renewed. No notification is sent before the cluster expires. A non-renewal reminder is sent three days before the expiration date.
    

AutoRenewal

PageNumber

integer

The page number.

1

PageRecordCount

integer

The total number of pages in the result set.

1

RequestId

string

The request ID.

65D7ACE6-4A61-4B6E-B357-8CB24A\*\*\*\*\*\*

TotalRecordCount

integer

The total number of records.

1

## Examples

Success response

`JSON` format

```
{
  "Items": {
    "AutoRenewAttribute": [
      {
        "AutoRenewEnabled": true,
        "DBClusterId": "pc-*****************",
        "Duration": 4,
        "PeriodUnit": "Month",
        "RegionId": "cn-hangzhou",
        "RenewalStatus": "AutoRenewal"
      }
    ]
  },
  "PageNumber": 1,
  "PageRecordCount": 1,
  "RequestId": "65D7ACE6-4A61-4B6E-B357-8CB24A******",
  "TotalRecordCount": 1
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidRegionId.Malformed

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

The specified PageSize parameter is invalid.

400

InvalidPageNumber.Malformed

The specified parameter PageNumber is not valid.

The specified PageNumber parameter is invalid.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

The request failed to be processed because unknown errors, exceptions, or failures have occurred.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

A temporary server error occurred.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeAutoRenewAttribute#workbench-doc-change-demo) for a complete list.
