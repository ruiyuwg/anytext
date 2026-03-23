Sets file quota rules for a specified directory in a Polarlakebase instance.

## Operation description

## Request description

This operation sets file quota rules for a directory in a Polarlakebase instance. Configure the `FilePathQuotas` parameter to specify the directory and its quota properties. The path specified in `FilePathId` must be an absolute path from the root directory, not a mount target path. Use the `Strategy` parameter to control how the rule applies to existing files. By default, the rule is applied only if no other rule exists for the directory.

### Notes

-   The `FilePathQuotas` list can contain a maximum of 21 items.
    
-   To apply the rule to multiple levels of subdirectories under `FilePathId`, set the `MaxDepth` parameter. To traverse all subdirectory levels, set this parameter to 0.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/SetPolarFsFileQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/SetPolarFsFileQuota)

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

polardb:SetPolarFsFileQuota

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

FilePathQuotas

array<object>

Yes

The quota rules to apply to directories.

object

No

The application details for the folder.

FilePathId

string

No

folder

/a/project

QuotaIds

string

No

A list of rule IDs to apply, separated by commas (`,`).

1,2

Strategy

string

No

The policy for applying the rule to existing files. Valid values:

-   **missing**: The rule is applied only if no other rule exists for the directory. This is the default value.
    
-   **all**: The rule is applied to all files in the directory.
    

missing

MaxDepth

integer

No

The maximum depth of subdirectories to traverse under `FilePathId`. A value of 1 applies the rule to immediate subdirectories. A value of 0 applies the rule to all subdirectories at all levels.

1

DBClusterId

string

No

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

The request ID.

925B84D9-CA72-432C-95CF-738C22\*\*\*\*\*\*

PolarFsInstanceId

string

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "925B84D9-CA72-432C-95CF-738C22******",
  "PolarFsInstanceId": "pfs-2ze0i74ka607*****"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/SetPolarFsFileQuota#workbench-doc-change-demo) for a complete list.
