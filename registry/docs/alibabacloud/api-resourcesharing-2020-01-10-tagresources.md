Attaches tags to resource shares.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/TagResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/TagResources)

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

resourcesharing:TagResources

update

\*ResourceShare

`acs:resourcesharing:{#regionId}:{#accountId}:resourceshare/{#ResourceShareId}`

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

ResourceType

string

Yes

The type of the resource.

Set this parameter to `ResourceShare`, which indicates a resource share.

ResourceShare

ResourceId

array

Yes

The IDs of the resource shares.

string

No

The ID of the resource share.

rs-PqysnzIj\*\*\*\*

RegionId

string

Yes

The ID of the region where the resource share resides.

cn-hangzhou

Tag

array<object>

Yes

The tags.

You can attach up to 20 tags.

object

No

The tag.

Key

string

No

The tag key.

**Note**

The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

k1

Value

string

No

The tag value.

**Note**

The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.

v1

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

E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E7747EDF-EDDC-5B38-9B6A-6392B9C92B1C"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.ResourceId

The ResourceId is invalid.

The ResourceId parameter is invalid.

400

InvalidResourceId.NotFound

The specified ResourceIds are not found in our records.

The specified ResourceIds are not found in our records.

400

NumberExceed.ResourceIds

The maximum number of ResourceIds is exceeded.

The maximum number of ResourceIds is exceeded.

400

InvalidParameter.RegionId

The RegionId parameter is invalid.

The RegionId parameter is invalid.

400

MissingParameter.ResourceIds

You must specify ResourceIds.

You must specify ResourceIds.

400

MissingParameter.ResourceType

You must specify ResourceType.

The resource type parameter cannot be empty.

400

MissingParameter.Tags

You must specify Tags.

You must specify Tags.

400

InvalidParameter.ResourceType

The ResourceType parameter is invalid.

The ResourceType parameter is invalid.

500

InternalError

The request processing has failed due to some unknown error.

The request processing has failed due to some unknown error.

403

NoPermission

You are not authorized to perform this action.

You are not authorized to perform this action.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/TagResources#workbench-doc-change-demo) for a complete list.
