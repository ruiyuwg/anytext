Queries the information about the default permission.

## Operation description

This topic provides an example on how to call the API operation to query the information about the default permission for the `VSwitch` resource type in the `cn-hangzhou` region.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListPermissions)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListPermissions)

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

resourcesharing:ListPermissions

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

ResourceType

string

No

The type of the shared resources.

For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

MaxResults

integer

No

The maximum number of entries to return for a single request.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The `token` that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

The token that is used to initiate the next request. If the response of the current request is truncated, you can use the token to initiate another request and obtain the remaining records.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The ID of the request.

04677DCA-7C33-464B-8811-1B1DA3C3D197

Permissions

array<object>

The information about the permission.

object

The information about the permission.

PermissionName

string

The name of the permission.

AliyunRSDefaultPermissionVSwitch

PermissionVersion

string

The version of the permission.

v1

DefaultVersion

boolean

Indicates whether the version is the default version. Valid values:

-   false: The version is not the default version.
    
-   true: The version is the default version.
    

true

CreateTime

string

The creation time.

2020-12-07T07:39:01.818Z

UpdateTime

string

The update time.

2020-12-07T07:39:01.818Z

ResourceType

string

The type of the shared resources.

For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

DefaultPermission

boolean

Indicates whether the permission is the default permission. Valid values:

-   false: The permission is not the default permission.
    
-   true: The permission is the default permission.
    

true

## Examples

Success response

`JSON` format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "04677DCA-7C33-464B-8811-1B1DA3C3D197",
  "Permissions": [
    {
      "PermissionName": "AliyunRSDefaultPermissionVSwitch",
      "PermissionVersion": "v1",
      "DefaultVersion": true,
      "CreateTime": "2020-12-07T07:39:01.818Z",
      "UpdateTime": "2020-12-07T07:39:01.818Z",
      "ResourceType": "VSwitch",
      "DefaultPermission": true
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.ResourceType

The ResourceType is invalid.

The specified ResourceType parameter is invalid.

400

InvalidParameter.MaxResults

The MaxResults is invalid.

The MaxResults parameter is invalid.

400

InvalidParameter.NextToken

The NextToken is invalid.

The NextToken parameter is invalid.

400

InvalidParameter.NextToken.Length

The maximum length of NextToken exceeds 256 characters.

The length of NextToken cannot exceed 256 characters.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListPermissions#workbench-doc-change-demo) for a complete list.
