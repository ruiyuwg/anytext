Transfer domain names from an Alibaba Cloud account to the current account.

## Operation description

This operation is used in the following scenario:

-   You have multiple Alibaba Cloud accounts and want to transfer domain names from Account A to Account B.
-   You are prompted that a domain name has been added when you add the domain name to Alibaba Cloud CDN. You do not know which account does the domain name belong to, and you want to transfer the domain name to your current account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/ModifyCdnDomainOwner)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/ModifyCdnDomainOwner)

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

cdn:ModifyCdnDomainOwner

update

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

DomainName

string

Yes

The accelerated domain name.

example.com

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

C98E518B-024E-538E-8276-66310CB8667D

Content

object

The description of the domain name transfer.

The domain does not allow to transfer to a different account.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C98E518B-024E-538E-8276-66310CB8667D",
  "Content": {
    "test": "test",
    "test2": 1
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDomain.NotExist

The domain you provided is not exist.

The domain name you provided does not exist.

400

DomainTransferFail

The domain does not allow to transfer to a different account.

The domain name cannot be transferred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/ModifyCdnDomainOwner?updateTime=2023-08-02#workbench-doc-change-demo)
