You can use SQL Select statements to search for resources in a specific account group based on fields in the resource properties.

## Operation description

When you write an SQL `Select` statement, you can retrieve the search fields and their types from the property file of the target resource type. For more information about resource property files, see [alibabacloud-config-resource-schema](https://github.com/aliyun/alibabacloud-config-resource-schema).

**Note**

-   The resource property files contain all resource types that are supported by Cloud Config. These files are named after their corresponding resource types. For example, the property file for the `ACS::ECS::Instance` resource type is `ACS_ECS_Instance.properties.json`. The path to the property files is `config/properties/resource-types`.
    
-   For more information about SQL search examples and limits, see [SQL search examples](/help/en/cloud-config/latest/examples-of-sql-query-statements) and [Limits of SQL search](/help/en/cloud-config/latest/limits-on-sql-query-statements).
    

This topic provides an example of an advanced search query. The query finds all resources in the account group `ca-4b05626622af000c****` that have a tag key of `business` and a tag value of `online`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateResourcesByAdvancedSearch)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateResourcesByAdvancedSearch)

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

config:ListAggregateResourcesByAdvancedSearch

list

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

Sql

string

Yes

The SQL search statement.

SELECT ResourceId, ResourceName WHERE Tags.Kvpair='business:online'

AggregatorId

string

Yes

The ID of the account group.

ca-4b05626622af000c\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

B0DBF868-460F-5E7C-8F76-1ACE2FCCE153

QueryResults

object

The query results.

QueryResultList

object

The list of resources returned by the query. A maximum of 1,000 entries are returned. To view more data, download the search file.

Columns

array

The list of field names returned by the search.

string

The name of a field returned by the search.

\["ResourceId", "ResourceName"\]

Values

array

The list of resource data returned by the search.

any

The resource data returned by the search.

\[ "eni-2ze5lq7xaluy5kb5\*\*\*\*", "test-resource" \]

## Examples

Success response

`JSON` format

```
{
  "RequestId": "B0DBF868-460F-5E7C-8F76-1ACE2FCCE153",
  "QueryResults": {
    "QueryResultList": {
      "Columns": [
        "[\"ResourceId\", \"ResourceName\"]"
      ],
      "Values": [
        "[\n      \"eni-2ze5lq7xaluy5kb5****\",\n      \"test-resource\"\n]"
      ]
    }
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListAggregateResourcesByAdvancedSearch#workbench-doc-change-demo) for a complete list.
