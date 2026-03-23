Enables or disables SQL throttling rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/EnableSQLRateLimitingRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/EnableSQLRateLimitingRules)

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

polardb:EnableSQLRateLimitingRules

update

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

DBClusterId

string

Yes

The ID of the cluster.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleNameList

string

Yes

The names of the SQL throttling rules to enable. To specify multiple rules, separate the names with a comma (,).

**Note**

You can view all SQL throttling rules and their names on the SQL Firewall tab of the Security Management page for the cluster.

testrule

Enable

boolean

Yes

Specifies whether to enable or disable the specified SQL throttling rules. Valid values:

-   **true**: Enable.
    
-   **false**: Disable.
    

**Note**

This parameter applies only when you specify the **RuleNameList** parameter.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Message

string

The response message.

**Note**

If the request is successful, `Successful` is returned. If the request fails, an error message is returned.

Successful

RequestId

string

The ID of the request.

4CE6DF97-AEA4-484F-906F-C407EE\*\*\*\*\*\*

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
  "Message": "Successful",
  "RequestId": "4CE6DF97-AEA4-484F-906F-C407EE******",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/EnableSQLRateLimitingRules#workbench-doc-change-demo) for a complete list.
