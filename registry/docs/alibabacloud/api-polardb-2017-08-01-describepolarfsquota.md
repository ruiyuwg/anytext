Retrieves all quota rules for a specified Polarlakebase instance.

## Operation description

## Description

-   This operation queries all quota rules for a specific Polarlakebase instance and supports fuzzy matching using the `QuotaNameMatch` and `PatternMatch` parameters.
    
-   Paging is not yet available and will be released in a future kernel update. Therefore, the returned results are not paginated.
    
-   The `PolarFsInstanceId` parameter is required. You must use this parameter to specify the Polarlakebase instance that you want to query.
    
-   You can use optional parameters, such as `QuotaNameMatch` and `PatternMatch`, to filter quota rules.
    
-   The returned data includes the total number of quota rules and details for each rule, such as the rule ID, name, description, and capacity limit.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePolarFsQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePolarFsQuota)

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

polardb:DescribePolarFsQuota

none

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PolarFsInstanceId

string

Yes

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

DBClusterId

string

No

The cluster ID.

**Note**

For Enterprise, Basic, and Data Lakehouse Edition clusters, call the [DescribeDBClusters](/help/en/polardb/api-polardb-2017-08-01-describedbclusters) operation to query the cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

No

The region ID.

**Note**

Call the [DescribeRegions](/help/en/polardb/polardb-for-mysql/api-describeregions-3) operation to view information about all available regions for your account, including region IDs.

cn-beijing

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

PolarFsInstanceId

string

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

PageSize

string

The number of records per page. Valid values: 5 to 50. Default value: 10.

10

PageNumber

string

The page number.

1

TotalRecordCount

string

The total number of records.

5

PageRecordCount

string

The number of records on the current page.

5

PolicyItems

array<object>

The rule details.

object

The rule.

Id

integer

The rule ID.

73

Name

string

The rule name.

xxxxx

Description

string

The rule description.

NULL

Include

string

The wildcard pattern for matching paths.

-   A path pattern that starts with /. It supports glob syntax, such as `*`, `?`, and `**`.
    

/a\*

Exclude

string

The matching rule to exclude specific paths.

-   A path pattern that starts with `/`. It supports glob syntax, such as `*`, `?`, and `**`.
    

NULL

SizeLimit

integer

The total capacity limit for files in the folder. Unit: GB.

-   Note: The value must be 1 GB or greater.
    

1

FileCountLimit

integer

The limit on the number of user files in the folder.

77

AccessTTL

integer

The TTL for the access time. Unit: seconds.

7200

ChangeTTL

integer

The TTL for the change time. Unit: seconds.

7200

Priority

integer

The priority of the quota rule.

1

Enabled

boolean

Indicates whether the rule is enabled. Valid values:

-   **true**: The rule takes effect immediately for new events. This is the default value.
    
-   **false**: The rule does not take effect for new events.
    

false

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******",
  "PolarFsInstanceId": "pfs-2ze0i74ka607*****",
  "PageSize": "10",
  "PageNumber": "1",
  "TotalRecordCount": "5",
  "PageRecordCount": "5",
  "PolicyItems": [
    {
      "Id": 73,
      "Name": "xxxxx",
      "Description": "NULL",
      "Include": "/a*",
      "Exclude": "NULL",
      "SizeLimit": 1,
      "FileCountLimit": 77,
      "AccessTTL": 7200,
      "ChangeTTL": 7200,
      "Priority": 1,
      "Enabled": false
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribePolarFsQuota#workbench-doc-change-demo) for a complete list.
