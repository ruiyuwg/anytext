Queries the tag values of resources within the current account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListTagValues)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListTagValues)

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

tag:ListTagValues

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

MaxResults

integer

No

The maximum number of entries to return on each page.

Valid values: 1 to 100.

Default value: 20.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the `token` to initiate another request and obtain the remaining entries.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

TagKey

string

Yes

The tag key.

test\_key

TagValue

string

No

The tag value.

test\_value

MatchType

string

No

The matching mode. Valid values:

-   Equals: equal match
-   Prefix: match by prefix

Equals

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd\*\*\*\*

TagValues

array

The tag values.

TagValue

string

A tag value.

test\_value

RequestId

string

The ID of the request.

C1840B83-1193-5E83-AFA6-4B8D303E29F5

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****",
  "TagValues": [
    "test_value"
  ],
  "RequestId": "C1840B83-1193-5E83-AFA6-4B8D303E29F5"
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

409

InvalidParameter.MatchType

The specified parameter MatchType is not valid.

The MatchType parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
