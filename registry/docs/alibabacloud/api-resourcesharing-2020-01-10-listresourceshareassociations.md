Lists the resources or principals that are associated with a resource share.

## Operation description

This example shows how to query for association records of Shared Resources within Resource Shares created by the current account in the `China (Hangzhou)` Region. The response shows records for the following two Shared Resources:

-   A `VSwitch` Shared Resource, `vsw-bp1upw03qyz8n7us9****`, was associated with the Resource Share `rs-6GRmdD3X****`. The resource is in the `Associated` state, meaning it is actively shared.
    
-   A `VSwitch` Shared Resource, `vsw-bp183p93qs667muql****`, was disassociated from the Resource Share `rs-6GRmdD3X****`. The resource is in the `Disassociated` state, meaning it is no longer shared.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShareAssociations)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ListResourceShareAssociations)

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

resourcesharing:ListResourceShareAssociations

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

ResourceId

string

No

The ID of the resource.

**Note**

This parameter is not available when `AssociationType` is set to `Target`.

vsw-bp183p93qs667muql\*\*\*\*

ResourceArn

string

No

The Alibaba Cloud Resource Name (ARN) of the resource.

**Note**

This parameter is not available when `AssociationType` is set to `Target`.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

Target

string

No

The ID of the principal.

**Note**

This parameter is not available when `AssociationType` is set to `Resource`.

172050525300\*\*\*\*

AssociationType

string

Yes

The type of the association. Valid values:

-   `Resource`: Returns associations with shared resources.
    
-   `Target`: Returns associations with principals.
    

Resource

AssociationStatus

string

No

The status of the association. Valid values:

-   `Associating`: The association is in progress.
    
-   `Associated`: The association is established.
    
-   `Failed`: The association failed.
    
-   `Disassociating`: Disassociation is in progress.
    
-   `Disassociated`: The association is removed.
    

**Note**

The system automatically deletes records in the `Failed` or `Disassociated` state within 48 to 96 hours.

Associated

MaxResults

integer

No

The maximum number of entries to return per page.

Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

The token for the next page of results. If the previous response was truncated, include this `token` to retrieve the remaining results.

TGlzdFJlc291cm\*\*\*\*

ResourceShareIds

array

No

The IDs of the resource shares.

You can specify up to 5 resource share IDs.

rs-6GRmdD3X\*\*\*\*

string

No

A resource share ID.

rs-6GRmdD3X\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The token to retrieve the next page of results. `NextToken` is returned only if the results are truncated. If this parameter is not returned, all results have been retrieved.

TGlzdFJlc291cm\*\*\*\*

RequestId

string

The ID of the request.

11BA57B5-7301-4E2F-BBA5-2AE4C2F4FCDB

ResourceShareAssociations

array<object>

A list of associations.

array<object>

Details of the association.

UpdateTime

string

The time the association was last updated.

-   If `AssociationType` is `Resource`, this is the time the resource was updated.
    
-   If `AssociationType` is `Target`, this is the time the principal was updated.
    

2020-12-07T07:39:02.920Z

EntityId

string

The ID of the associated entity.

-   If `AssociationType` is `Resource`, this is the resource ID.
    
-   If `AssociationType` is `Target`, this is the ID of the principal.
    

vsw-bp1upw03qyz8n7us9\*\*\*\*

ResourceArn

string

The Alibaba Cloud Resource Name (ARN) of the associated resource.

**Note**

Returned only if `AssociationType` is `Resource`.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceShareName

string

The name of the resource share.

example

CreateTime

string

The time the association was created.

-   If `AssociationType` is `Resource`, this is the time the resource was associated with the resource share.
    
-   If `AssociationType` is `Target`, this is the time the principal was associated with the resource share.
    

2020-12-07T07:39:01.818Z

EntityType

string

The type of the associated entity.

-   When the entity is a resource (`AssociationType` is `Resource`), this value is the resource type. For more information, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).
    
-   When the entity is a principal (`AssociationType` is `Target`), this value is `Account`.
    

VSwitch

ResourceShareId

string

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

AssociationStatusMessage

string

The reason for the failed association.

The reason for the association failure.

AssociationType

string

The type of the association. Valid values:

-   `Resource`: The entity is a resource.
    
-   `Target`: The entity is a principal.
    

Resource

AssociationStatus

string

The status of the association. Valid values:

-   Associating: The association is in progress.
    
-   Associated: The association is complete.
    
-   Failed: The association failed.
    
-   Disassociating: The disassociation is in progress.
    
-   Disassociated: The disassociation is complete.
    

**Note**

The system automatically deletes associations in the `Failed` or `Disassociated` state within 48 to 96 hours.

Failed

External

boolean

Indicates whether the principal is an Alibaba Cloud Account that is not a member of your Resource Directory. Valid values:

-   `true`: The principal is an external Account.
    
-   `false`: The principal is a member of your Resource Directory.
    

false

AssociationFailedDetails

array<object>

Details of a failed association or disassociation.

object

Details of the failed operation.

Status

string

This parameter is deprecated. Use `FailureReason` instead.

无

StatusMessage

string

This parameter is deprecated. Use `FailureDescription` instead.

无

AssociateType

string

This parameter is deprecated. Use `OperationType` instead.

无

ResourceArn

string

The ARN of the associated resource.

**Note**

Returned only if `AssociationType` is `Target`.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

EntityType

string

The type of the entity.

-   If the entity is a resource, this value is the resource type. For more information, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).
    
-   If the entity is a principal, this value can be `ResourceDirectory`, `Folder`, `Account`, or `Service`.
    

Account

FailureReason

string

The reason for the failed association or disassociation. Valid values:

-   Unavailable: The sharing operation failed because the resource is unavailable. For example, the resource may have been deleted.
    
-   LimitExceeded: The resource has been shared with the maximum number of principals allowed by the Quota.
    
-   ZonalResourceInaccessible: The resource is not accessible from the current Region.
    
-   InternalError: An internal server error occurred.
    
-   UnsupportedOperation: The operation is not supported.
    

Unavailable

FailureDescription

string

A detailed description of the association or disassociation failure.

You cannot access the specified resource at this time.

OperationType

string

The type of the operation that failed. Valid values:

-   `Associate`
    
-   `Disassociate`
    

Associate

EntityId

string

The ID of the entity in the failed association.

-   If the operation involved associating a resource, this is the ID of the principal for which the association failed.
    
-   If the operation involved associating a principal, this is the ID of the resource for which the association failed.
    

172050525300\*\*\*\*

TargetProperty

string

The properties of the principal, such as the time period for resource sharing. Valid values for `timeRangeType` include:

-   timeRange: a specified time period.
    
-   day: the whole day.
    

**Note**

Returned only if the principal is an Alibaba Cloud service.

{ "timeRange":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

ResourceProperty

string

The sharing-related properties of the resource.

{"sharePrincipals":true,"shareTagOptions":false}

## Examples

Success response

`JSON` format

```
{
  "NextToken": "TGlzdFJlc291cm****",
  "RequestId": "11BA57B5-7301-4E2F-BBA5-2AE4C2F4FCDB",
  "ResourceShareAssociations": [
    {
      "UpdateTime": "2020-12-07T07:39:02.920Z",
      "EntityId": "vsw-bp1upw03qyz8n7us9****",
      "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
      "ResourceShareName": "example",
      "CreateTime": "2020-12-07T07:39:01.818Z",
      "EntityType": "VSwitch",
      "ResourceShareId": "rs-6GRmdD3X****",
      "AssociationStatusMessage": "The reason for the association failure. ",
      "AssociationType": "Resource",
      "AssociationStatus": "Failed",
      "External": false,
      "AssociationFailedDetails": [
        {
          "Status": "无",
          "StatusMessage": "无",
          "AssociateType": "无",
          "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
          "EntityType": "Account",
          "FailureReason": "Unavailable",
          "FailureDescription": "You cannot access the specified resource at this time.",
          "OperationType": "Associate",
          "EntityId": "172050525300****"
        }
      ],
      "TargetProperty": "{\n    \"timeRange\":{\n        \"timeRangeType\":\"timeRange\",\n        \"beginAtTime\":\"00:00\",\n        \"timezone\":\"UTC+8\",\n        \"endAtTime\":\"19:59\"\n    }\n}",
      "ResourceProperty": "{\"sharePrincipals\":true,\"shareTagOptions\":false}"
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

MissingParameter.AssociationType

You must specify AssociationType.

You must specify AssociationType.

400

InvalidParameter.AssociationType

The AssociationType is invalid.

The AssociationType parameter is invalid.

400

InvalidParameter.AssociationStatus

The AssociationStatus is invalid.

The AssociationStatus parameter is invalid.

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

InvalidParameter.Target

The Target is invalid.

The Target parameter is invalid.

400

InvalidParameter.ResourceId

The ResourceId is invalid.

The ResourceId parameter is invalid.

400

ConflictedAssociationType

The specified ResourceId or Target conflicts with AssociationType.

The specified parameter conflicts with AssociationType.

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

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ListResourceShareAssociations#workbench-doc-change-demo) for a complete list.
