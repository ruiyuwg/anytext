Modifies the information of a resource share.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/UpdateResourceShare)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/UpdateResourceShare)

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

resourcesharing:UpdateResourceShare

update

\*All Resource

`*`

-   resourcesharing:RequestedAllowExternalTargets

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceShareId

string

Yes

The ID of the resource share.

rs-qSkW1HBY\*\*\*\*

ResourceShareName

string

Yes

The new name for the resource share.

The name must be 1 to 50 characters in length.

It can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

new

AllowExternalTargets

boolean

No

Specifies whether to share resources with accounts outside your resource directory. Valid values:

-   false
    
-   true
    

false

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

2860A3A4-D8C1-4EF4-954E-84A3945E26E5

ResourceShare

object

The information about the resource share.

UpdateTime

string

The time when the resource share was updated.

2020-12-04T08:55:25.382Z

ResourceShareName

string

The name of the resource share.

new

ResourceShareOwner

string

The owner of the resource share.

151266687691\*\*\*\*

CreateTime

string

The time when the resource share was created.

2020-12-03T08:02:22.413Z

ResourceShareId

string

The ID of the resource share.

rs-qSkW1HBY\*\*\*\*

ResourceShareStatus

string

The status of the resource share. Valid values:

-   Active: The resource share is enabled.
    
-   Pending: The resource share is waiting for confirmation.
    
-   Deleting: The resource share is being deleted.
    
-   Deleted: The resource share is deleted.
    

**Note**

The system automatically deletes the records of resource shares in the `Deleted` state within 48 to 96 hours.

Active

AllowExternalTargets

boolean

Indicates whether resources can be shared with accounts outside your resource directory. Valid values:

-   false
    
-   true
    

false

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2860A3A4-D8C1-4EF4-954E-84A3945E26E5",
  "ResourceShare": {
    "UpdateTime": "2020-12-04T08:55:25.382Z",
    "ResourceShareName": "new",
    "ResourceShareOwner": "151266687691****",
    "CreateTime": "2020-12-03T08:02:22.413Z",
    "ResourceShareId": "rs-qSkW1HBY****",
    "ResourceShareStatus": "Active",
    "AllowExternalTargets": false
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingParameter.ResourceShareId

You must specify ResourceShareId.

You must specify ResourceShareId.

400

InvalidParameter.ResourceShareId

The ResourceShareId is invalid.

The ResourceShareId parameter is invalid.

400

MissingParameter.ResourceShareName

You must specify ResourceShareName.

The ResourceShareName parameter is missing.

400

InvalidParameter.ResourceShareName

The ResourceShareName is invalid.

The ResourceShareName parameter is invalid.

400

InvalidParameter.ResourceShareName.Length

The maximum length of ResourceShareName exceeds 50 characters.

The length of ResourceShareName cannot exceed 50 characters.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

404

EntityNotExists.ResourceShare

The resource share does not exist in the current account.

The resource share does not exist in the current account.

409

OperationNotPermitted

You do not have permission to do this operation.

You are not authorized to perform this operation.

409

ResourceShareStatusMismatchAction

The status of the resource share does not allow the specified operation.

The status of the resource share does not allow the specified operation.

409

NotSupport.AllowExternalTargets

External sharing is not permitted for resource shares with unsupported configurations.

External sharing is not permitted for resource shares with unsupported configurations.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/UpdateResourceShare#workbench-doc-change-demo) for a complete list.
