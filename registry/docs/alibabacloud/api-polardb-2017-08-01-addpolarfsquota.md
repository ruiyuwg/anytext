Adds a new directory quota rule to a Polarlakebase instance.

## Operation description

## Request description

-   This operation adds a new path policy—a directory quota rule—to a specified Polarlakebase instance.
    
-   The `Quotas` parameter is a list. Each element represents a new quota rule. You can add up to 11 rules in a single request.
    
-   Each rule must include the `Name` and `Include` fields. Other fields, such as `Description` and `Exclude`, are optional.
    
-   To define the quota limit, specify at least one of the following parameters: `SizeLimit`, `FileCountLimit`, `AccessTTL`, or `ChangeTTL`.
    
-   The `Priority` field specifies the rule priority. A larger value indicates higher priority. The default value is 0.
    
-   The `Enabled` field determines whether the rule takes effect immediately. The default value is true.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/AddPolarFsQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/AddPolarFsQuota)

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

polardb:AddPolarFsQuota

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

Quotas

array<object>

Yes

The details of the quota rules.

object

No

The details of the quota.

Name

string

Yes

The name of the rule.

rule1

Description

string

No

The description of the resource quota.

quota\_policy

Include

string

Yes

The wildcard pattern to match paths.

-   A path pattern that starts with a forward slash (/). Supports glob syntax, including `*`, `?`, and `**`.
    

/b/\*project\*

Exclude

string

No

The rule to exclude specific paths from matching.

-   A path pattern that starts with a forward slash (/). Supports glob syntax, including `*`, `?`, and `**`.
    

/a/\*project\*

SizeLimit

integer

No

The total size limit for files in the directory. Unit: GB.

-   Note: The value must be at least 1 GB.
    

1

FileCountLimit

integer

No

The limit on the number of files for a user in the directory.

222

AccessTTL

integer

No

The time to live (TTL) for the access time. Unit: seconds.

7200

ChangeTTL

integer

No

The TTL for the change time. Unit: seconds.

7200

Priority

integer

No

The priority of the quota rule.

1

Enabled

boolean

No

Specifies whether to enable the rule. Valid values:

-   **True**: The rule immediately applies to new items. This is the default value.
    
-   **False**: The rule does not apply to new items.
    

True

DBClusterId

string

No

The ID of the PolarDB instance on which the application depends.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

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

7F2007D3-7E74-4ECB-89A8-BF130D\*\*\*\*\*\*

PolarFsInstanceId

string

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7F2007D3-7E74-4ECB-89A8-BF130D******",
  "PolarFsInstanceId": "pfs-2ze0i74ka607*****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/AddPolarFsQuota#workbench-doc-change-demo) for a complete list.
