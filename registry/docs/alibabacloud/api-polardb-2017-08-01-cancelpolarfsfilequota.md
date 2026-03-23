Deletes quota rules for one or more file paths within a specified Polarlakebase instance.

## Operation description

## Request description

-   The `PolarFsInstanceId` parameter is required. It specifies the Polarlakebase instance for the operation.
    
-   The `FilePathIds` parameter is required. It accepts a string containing the IDs of the file paths for which you want to delete quota rules. Ensure that each ID is valid and belongs to the specified Polarlakebase instance.
    
-   A single API call can delete quotas for multiple file paths. However, limit the number of paths in a single request to avoid performance issues.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelPolarFsFileQuota)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CancelPolarFsFileQuota)

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

polardb:CancelPolarFsFileQuota

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

FilePathIds

string

Yes

The file paths. Separate multiple paths with a comma (`,`).

/path1,/path2

DBClusterId

string

No

The ID of the PolarDB cluster that the application depends on.

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

2FED790E-FB61-4721-8C1C-07C627\*\*\*\*\*\*

PolarFsInstanceId

string

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

FilePathIds

string

The file paths for which the quotas were deleted. Multiple paths are separated by a comma (`,`).

/path1,/path2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2FED790E-FB61-4721-8C1C-07C627******",
  "PolarFsInstanceId": "pfs-2ze0i74ka607*****",
  "FilePathIds": "/path1,/path2"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CancelPolarFsFileQuota#workbench-doc-change-demo) for a complete list.
