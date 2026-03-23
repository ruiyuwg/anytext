Queries a list of resource relationships on which the current account has access permissions.

## Operation description

-   You can call this operation to query only the resource relationships on which the current account has access permissions.
-   By default, this operation returns up to 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
-   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
-   You can specify one or more filter conditions to narrow the query scope. For information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only entries that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Entries that meet any value of the filter condition are returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListResourceRelationships)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListResourceRelationships)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcecenter:ListResourceRelationships

list

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the resource.

cn-hangzhou

ResourceType

string

Yes

The type of the resource.

ACS::ACK::Cluster

ResourceId

string

Yes

The ID of the resource.

m-eb3hji\*\*\*\*

RelatedResourceFilter

array<object>

No

The filter conditions for resources associated with the resource.

object

No

A filter condition for resources associated with the resource.

Key

string

No

The key of the filter condition. For more information, see `Supported filter parameters`.

RelatedResourceRegionId

Value

array

No

The values of the filter condition.

string

No

A value of the filter condition.

cb-shanghai

MatchType

string

No

The matching method.

Equals

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 500.

Default value: 20.

10

### [](#supported-filter-parameters)Supported filter parameters

Parameter

Description

Supported matching method

RelatedResourceRegionId

The region ID of the associated resource.

Equals

RelatedResourceType

The type of the associated resource.

Equals

RelatedResourceId

The ID of the associated resource.

Equals

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

682A3004-38E3-5122-9A11-CCDFAB9C3C4F

MaxResults

integer

The maximum number of entries per page.

10

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

ResourceRelationships

array<object>

The resource relationships.

ResourceRelationship

object

A resource relationship.

RegionId

string

The region ID of the resource.

cn-hangzhou

ResourceType

string

The type of the resource.

ACS::ACK::Cluster

ResourceId

string

The ID of the resource.

m-eb3hji\*\*\*\*

RelatedResourceRegionId

string

The region ID of the associated resource.

cn-shanghai

RelatedResourceType

string

The type of the associated resource.

ACS::VPC::VPC

RelatedResourceId

string

The ID of the associated resource.

vpc-uf6m5okksddm6c9lh7\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "682A3004-38E3-5122-9A11-CCDFAB9C3C4F",
  "MaxResults": 10,
  "NextToken": "eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****",
  "ResourceRelationships": [
    {
      "RegionId": "cn-hangzhou",
      "ResourceType": "ACS::ACK::Cluster",
      "ResourceId": "m-eb3hji****",
      "RelatedResourceRegionId": "cn-shanghai",
      "RelatedResourceType": "ACS::VPC::VPC",
      "RelatedResourceId": "vpc-uf6m5okksddm6c9lh7***"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform the operation.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The MaxResults parameter is invalid.

400

InvalidParameter.RelatedResourceFilterMatchType

The specified parameter RelatedResourceFilterMatchType.n.MatchType is not valid.

The specified parameter RelatedResourceFilterMatchType.n.MatchType is invalid.

400

MissingParameter.RelatedResourceFilterValue

You must specify RelatedResourceFilterValue.n.Value.

The RelatedResourceFilterValue.N.Value parameter is not configured.

400

InvalidParameter.RelatedResourceFilterKey

The specified parameter RelatedResourceFilterMatchType.n.RelatedResourceFilterKey is not valid.

The specified parameter RelatedResourceFilterMatchType.n.RelatedResourceFilterKey is invalid.

404

MissingParameter.RegionId

The specified parameter RegionId is missing.

The specified parameter RegionId is missing.

404

MissingParameter.ResourceType

The specified parameter ResourceType is missing.

The specified parameter ResourceType is missing.

404

MissingParameter.ResourceId

The specified parameter ResourceId is missing.

The specified parameter ResourceId is missing.

404

ExceedLimit.RelatedResourceFilter

The maximum length of RelatedResourceFilter is exceeded.

The number of objects specified in the RelatedResourceFilter parameter exceeds the upper limit.

409

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

The ResourceType parameter is invalid.

409

ExceedLimit.RelatedResourceFilterValue

The number of objects specified in the RelatedResourceFilterValue parameter exceeds the upper limit.

The number of parameter RelatedResourceFilterValue exceeds the upper limit.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).
