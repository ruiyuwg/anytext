Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.

## Operation description

If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources of members in the resource directory. For more information about a resource directory, see [Resource Directory overview](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/EnableMultiAccountResourceCenter)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/EnableMultiAccountResourceCenter)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

resourcecenter:EnableMultiAccountResourceCenter

Write

-   All Resources
    
    \*
    

none

none

## Request parameters

Parameter

Type

Required

Description

Example

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

Status

string

The status of the feature. Valid values:

-   Pending: The feature is being enabled.
-   Enabled: The feature is enabled.

Pending

RequestId

string

The ID of the request.

767038B7-2027-5508-858B-E213232D57D5

## Examples

Sample success responses

`JSON`format

```
{
  "Status": "Pending",
  "RequestId": "767038B7-2027-5508-858B-E213232D57D5"
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

404

NotExists.ResourceDirectory

The resource directory for the account is not enabled.

No resource directory is enabled for the account.

409

NoPermission.ResourceDirectory.MemberAccount

ResourceDirectory Member Account is not authorized to perform this operation.

You are not allowed to use a member of a resource directory to perform this operation. Use the management account of the resource directory to perform the operation.

409

NotSupport.Account.Site

The caller is not a current site account, which is not supported.

You are not allowed to use the account to perform operations at the current site.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-05-24

The Error code has changed

[see changesets](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/EnableMultiAccountResourceCenter#workbench-doc-change-demo)

Change item

Change content

Error Codes

The Error code has changed.

delete Error Codes: 400

delete Error Codes: 404

delete Error Codes: 409
