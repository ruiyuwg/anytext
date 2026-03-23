Queries a list of principals.

## Operation description

If you are a resource owner, you can query the principals that you share your resources with. If you are a principal, you can query the resource shares that you are a part of.

This topic provides an example of how to query the list of principals for a resource share that you created in the `cn-hangzhou` region. The response shows that you shared resources with the principals `114240524784****` and `172050525300****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListSharedTargets)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListSharedTargets)

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

resourcesharing:ListSharedTargets

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

The owner of the resource share.

-   Self: Queries the principals that are associated with the resource shares you created.
    
-   OtherAccounts: Queries the resource shares that other accounts created and shared with you, and the owners of these resource shares.
    

Self

ResourceType

string

No

The type of the shared resource.

For more information about the resource types that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

VSwitch

ResourceId

string

No

The ID of the shared resource.

vsw-bp1upw03qyz8n7us9\*\*\*\*

ResourceArn

string

No

The Alibaba Cloud Resource Name (ARN) of the shared resource.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

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

The IDs of resource shares.

The value of N can be from 1 to 5. You can specify up to 5 resource share IDs.

rs-6GRmdD3X\*\*\*\*

string

No

The ID of the resource share.

The value of N can be from 1 to 5. You can specify up to 5 resource share IDs.

rs-6GRmdD3X\*\*\*\*

Targets

array

No

The principals.

114240524784\*\*\*\*

string

No

The principal. Valid values:

-   If you set `AllowExternalTargets` to `false`, the principal can be the ID of a resource directory, folder, or member.
    
-   If you set `AllowExternalTargets` to `true`, the principal can be the ID of an Alibaba Cloud account, resource directory, folder, or member, or the name of an Alibaba Cloud service.
    

For more information, see [Methods of resource sharing](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview), [View the ID of a resource directory](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-resource-directory), [View the ID of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder), or [View the ID of a member](/help/en/resource-management/resource-directory/user-guide/view-the-detailed-information-of-a-member).

The value of N can be from 1 to 5. You can add up to 5 principals at a time.

114240524784\*\*\*\*

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

SharedTargets

array<object>

The information about the principals.

object

The information about the principal.

TargetId

string

The ID of the principal or the resource owner. Valid values:

-   If you set `ResourceOwner` to `Self`, this parameter is the ID of the principal.
    
-   If you set `ResourceOwner` to `OtherAccounts`, this parameter is the ID of the resource owner.
    

114240524784\*\*\*\*

UpdateTime

string

The time when the association with the principal was updated.

2020-12-07T09:16:59.905Z

CreateTime

string

The time when the principal was associated with the resource share.

2020-12-07T09:16:59.905Z

ResourceShareId

string

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

External

boolean

Indicates whether the principal is an account outside the resource directory. Valid values:

-   true
    
-   false
    

false

TargetProperty

string

The properties of the principal. For example, the time period for resource sharing.

**Note**

This parameter is returned only when the principal is an Alibaba Cloud service.

{ "timeRange":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

## Examples

Success response

`JSON` format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "04677DCA-7C33-464B-8811-1B1DA3C3D197",
  "SharedTargets": [
    {
      "TargetId": "114240524784****",
      "UpdateTime": "2020-12-07T09:16:59.905Z",
      "CreateTime": "2020-12-07T09:16:59.905Z",
      "ResourceShareId": "rs-6GRmdD3X****",
      "External": false,
      "TargetProperty": "{\n    \"timeRange\":{\n        \"timeRangeType\":\"timeRange\",\n        \"beginAtTime\":\"00:00\",\n        \"timezone\":\"UTC+8\",\n        \"endAtTime\":\"19:59\"\n    }\n}"
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

InvalidParameter.Targets

The Targets is invalid.

The specified Targets parameter is invalid.

400

InvalidParameter.Targets.Duplicate

The Targets contains duplicate values.

The specified Targets parameter contains duplicate values.

400

InvalidParameter.Targets.Length

The maximum number of Targets exceeds 5.

The number of Targets values cannot exceed 5.

400

InvalidParameter.ResourceId

The ResourceId is invalid.

The ResourceId parameter is invalid.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

InvalidParameter.ResourceArn

The ResourceArn is invalid.

The ResourceArn is invalid.

400

InvalidParameter.ResourceConflict

Both ResourceId and ResourceArn cannot be specified simultaneously. Please provide only one of these parameters.

Both ResourceId and ResourceArn cannot be specified simultaneously. Please provide only one of these parameters.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListSharedTargets#workbench-doc-change-demo) for a complete list.
