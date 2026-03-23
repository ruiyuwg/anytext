Modifies the configuration of a data masking rule or creates a new one.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyMaskingRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyMaskingRules)

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

polardb:ModifyMaskingRules

update

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

DBClusterId

string

Yes

The ID of the cluster.

**Note**

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the details of all clusters that belong to your account. The details include the cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleName

string

No

The name of the data masking rule. You can specify only one rule name at a time.

**Note**

-   You can call the [DescribeMaskingRules](/help/en/polardb/polardb-for-mysql/api-describemaskingrules) operation to query the details of all data masking rules in the target cluster, including the rule names.
    
-   If the rule name that you specify does not exist in the cluster, the system automatically creates a data masking rule based on the specified rule name and the value of the `RuleConfig` parameter.
    

testrule

RuleConfig

string

No

The configuration of the data masking rule that you want to modify, in a JSON string format. All parameter values are strings. Example: `{"auto": {"databases": ["db1"], "tables": ["tb1"], "columns": ["c1,c2"] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies_to": ["user"]}`. The parameters are described as follows:

-   `"auto"`: Required. The settings for the dynamic data masking algorithm.
    
-   `"databases"`: Optional. The databases to which the rule applies. You can specify multiple database names. Separate the names with commas (,). If you leave this parameter empty, the rule applies to all databases in the cluster.
    
-   `"tables"`: Optional. The tables to which the rule applies. You can specify multiple table names. Separate the names with commas (,). If you leave this parameter empty, the rule applies to all tables in the cluster.
    
-   `"columns"`: Required. The fields to which the rule applies. You can specify multiple field names. Separate the names with commas (,).
    
-   `"description"`: Optional. The description of the data masking rule. The description can be up to 64 characters long.
    
-   `"enabled"`: Required. Specifies whether to enable the data masking rule. Valid values: **true** (enable) and **false** (disable).
    
-   `"applies_to"`: The database accounts to which the rule applies. You can specify multiple database account names. Separate the names with commas (,).
    
-   `"exempted"`: The database accounts that are exempt from the rule. You can specify multiple database account names. Separate the names with commas (,).
    

**Note**

-   If you specify the `RuleName` parameter, this parameter is required.
    
-   You must specify either `"applies_to"` or `"exempted"`.
    

{"auto": {"databases": \["db1"\], "tables": \["tb1"\], "columns": \["c1,c2"\] }, "description": "This rule will be applied to the columns c1 and c2 in table t1", "enabled": true, "applies\_to": \["user"\]}

RuleNameList

string

No

A list of data masking rule names. You can specify one or more rule names, separated by commas (,).

**Note**

You must specify either the `RuleName` or `RuleNameList` parameter.

testrule

Enable

string

No

Specifies whether to enable the data masking rule. Valid values:

-   **true**: Enable the rule.
    
-   **false**: Disable the rule.
    

**Note**

This parameter takes effect only when you specify the `RuleNameList` parameter.

true

RuleVersion

string

No

The version of the data masking rule. Valid values:

-   v1 (Default)
    
-   v2
    

v2

InterfaceVersion

string

No

The type of rule to modify. Valid values:

v1: data masking rule.v2: encryption rule.

v1

MaskingAlgo

string

No

DefaultAlgo

string

No

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

99B355CE-526C-478B-B730-AD9D7C\*\*\*\*\*\*

Message

string

The message returned for the request.

**Note**

If the request is successful, this parameter returns \`Successful\`. If the request fails, this parameter returns an error message that includes the error code.

Message

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "99B355CE-526C-478B-B730-AD9D7C******",
  "Message": "Message",
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyMaskingRules#workbench-doc-change-demo) for a complete list.
