Queries the resources you share with other accounts or the resources other accounts share with you.

## Operation description

This example shows how to query the resources that you shared in the `cn-hangzhou` region. The response indicates that you shared only one resource, which is a `VSwitch` with the ID `vsw-bp1upw03qyz8n7us9****` in the resource share `rs-6GRmdD3X****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListSharedResources)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListSharedResources)

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

resourcesharing:ListSharedResources

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

ResourceOwner

string

Yes

The owner of the resource share. Valid values:

-   Self: Queries the resources that you shared with other accounts from your resource shares.
    
-   OtherAccounts: Queries the resources that were shared with you by other accounts.
    

Self

ResourceType

string

No

The type of the shared resource.

For more information about the resource types that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

Target

string

No

The ID of the principal or resource owner.

-   If you set `ResourceOwner` to `Self`, this parameter is the ID of a principal.
    
-   If you set `ResourceOwner` to `OtherAccounts`, this parameter is the ID of a resource owner.
    

172050525300\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return for a single request.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token to initiate another request and retrieve the remaining entries.

TGlzdFJlc291cm\*\*\*\*

ResourceShareIds

array

No

The ID of the resource share.

The value of N ranges from 1 to 5. You can specify up to 5 resource share IDs.

rs-6GRmdD3X\*\*\*\*

string

No

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

ResourceIds

array

No

The ID of the shared resource.

The value of N ranges from 1 to 5. You can specify up to 5 shared resource IDs.

vsw-bp1upw03qyz8n7us9\*\*\*\*

string

No

The ID of the shared resource.

vsw-bp1upw03qyz8n7us9\*\*\*\*

ResourceArns

array

No

A list of Alibaba Cloud Resource Names (ARNs) of the shared resources.

The value of N ranges from 1 to 5. You can specify up to 5 shared resources.

string

No

The ARN of the shared resource.

**Note**

For more information about the format of a resource ARN, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results. If the response is truncated, you can use this token to initiate another request and retrieve the remaining entries.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The request ID.

04677DCA-7C33-464B-8811-1B1DA3C3D197

SharedResources

array<object>

The information about the shared resources.

object

The information about the shared resource.

UpdateTime

string

The time when the shared resource was updated.

2020-12-07T07:39:02.921Z

ResourceType

string

The type of the shared resource.

For more information about the resource types that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

CreateTime

string

The time when the resource was associated with the resource share.

2020-12-07T07:39:02.921Z

ResourceShareId

string

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

ResourceArn

string

The ARN of the shared resource.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceStatus

string

The status of the shared resource. This parameter is returned only when you query resources that were shared with you. This parameter is not returned when you query resources that you shared.

Valid values:

-   Available: The resource is available.
    
-   ZonalResourceInaccessible: The resource is unavailable in the current zone.
    
-   LimitExceeded: The resource is unavailable because the quota is exceeded.
    
-   Unavailable: The resource is unavailable.
    

Available

ResourceStatusMessage

string

The reason why the association failed.

The reason for the association failure.

ResourceId

string

The ID of the shared resource.

vsw-bp1upw03qyz8n7us9\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "04677DCA-7C33-464B-8811-1B1DA3C3D197",
  "SharedResources": [
    {
      "UpdateTime": "2020-12-07T07:39:02.921Z",
      "ResourceType": "VSwitch",
      "CreateTime": "2020-12-07T07:39:02.921Z",
      "ResourceShareId": "rs-6GRmdD3X****",
      "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
      "ResourceStatus": "Available",
      "ResourceStatusMessage": "The reason for the association failure. ",
      "ResourceId": "vsw-bp1upw03qyz8n7us9****"
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

MissingParameter.ResourceOwner

You must specify ResourceOwner.

You must specify ResourceOwner.

400

InvalidParameter.ResourceOwner

The ResourceOwner is invalid.

The ResourceOwner parameter is invalid.

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

400

InvalidParameter.ResourceShareIds

The ResourceShareIds is invalid.

The ResourceShareIds parameter is invalid.

400

InvalidParameter.ResourceShareIds.Duplicate

The ResourceShareIds contains duplicate values.

The ResourceShareIds parameter contains duplicate values.

400

InvalidParameter.ResourceShareIds.Length

The maximum length of ResourceShareIds exceeds 5 characters.

The number of ResourceShareIds values cannot exceed 5.

400

InvalidParameter.ResourceIds

The ResourceIds is invalid.

The specified ResourceIds parameter is invalid.

400

InvalidParameter.ResourceIds.Duplicate

The specified ResourceId contains duplicate values.

The specified ResourceIds parameter contains duplicate values.

400

InvalidParameter.ResourceIds.Length

The maximum number of ResourceIds (5) is exceeded.

The number of specified ResourceIds values cannot exceed 5.

400

InvalidParameter.Target

The Target is invalid.

The Target parameter is invalid.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

InvalidParameter.ResourceArns

The ResourceArns is invalid.

The ResourceArns parameter is invalid.

400

InvalidParameter.ResourceArns.Duplicate

The ResourceArns contains duplicate values.

The ResourceArns contains duplicate values.

400

InvalidParameter.ResourceArns.Length

The ResourceArns beyond the length limit.

The maximum number of ResourceArns exceeds 5.

400

NotSupport.ResourceType.ResourcesParameter

The Resources parameter does not support this resource type. Please use ResourceArns instead.

The Resources parameter does not support this resource type. Please use ResourceArns instead.

400

InvalidParameter.ResourceConflict

Both ResourceId and ResourceArn cannot be specified simultaneously. Please provide only one of these parameters.

Both ResourceId and ResourceArn cannot be specified simultaneously. Please provide only one of these parameters.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListSharedResources#workbench-doc-change-demo) for a complete list.
