Deletes the specified data masking rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteMaskingRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteMaskingRules)

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

polardb:DeleteMaskingRules

delete

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/{#resource-id}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RuleNameList

string

Yes

The names of the data masking rules to delete. To delete multiple rules in a batch, separate the names with commas (,).

**Note**

For more information, see [DescribeMaskingRules](/help/en/polardb/polardb-for-mysql/api-describemaskingrules).

testrule

DBClusterId

string

Yes

The cluster ID.

**Note**

For more information, see [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters).

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

InterfaceVersion

string

No

The type of rule to delete. Valid values:

v1: deletes data masking rules. v2: deletes data encryption rules.

v1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Schema of Response

RequestId

string

The request ID.

2BCEE25B-797C-426B-BA7B-D28CCF\*\*\*\*\*\*

Message

string

The response message.

**Note**

If the request is successful, `Successful` is returned. If the request fails, an error message is returned, such as an error code.

Successful

Success

boolean

The result of the request. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2BCEE25B-797C-426B-BA7B-D28CCF******",
  "Message": "Successful",
  "Success": true
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DeleteMaskingRules#workbench-doc-change-demo) for a complete list.
